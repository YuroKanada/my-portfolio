(() => {
  const marquee = document.querySelector("[data-photo-marquee]");

  if (!marquee) {
    return;
  }

  const rows = [...marquee.querySelectorAll("[data-marquee-row]")];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let interactionUntil = 0;
  let previousTime = performance.now();

  const pauseForInteraction = (duration = 1800) => {
    interactionUntil = performance.now() + duration;
  };

  const getLoopWidth = (row) => {
    const group = row.querySelector(".photo-marquee__group");
    const track = row.querySelector(".photo-marquee__track");

    if (!group || !track) {
      return 0;
    }

    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    return group.getBoundingClientRect().width + gap;
  };

  const normalizePosition = (row) => {
    const loopWidth = getLoopWidth(row);

    if (!loopWidth || row.scrollWidth <= row.clientWidth) {
      return;
    }

    if (row.scrollLeft >= loopWidth * 2) {
      row.scrollLeft -= loopWidth;
    } else if (row.scrollLeft <= 0) {
      row.scrollLeft += loopWidth;
    }
  };

  rows.forEach((row) => {
    row.scrollLeft = getLoopWidth(row);

    let dragging = false;
    let dragMoved = false;
    let dragStartX = 0;
    let dragStartScroll = 0;

    row.addEventListener("wheel", (event) => {
      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY)
        ? event.deltaX
        : event.deltaY * 0.65;

      row.scrollLeft += delta;
      normalizePosition(row);
      pauseForInteraction();
    }, { passive: true });

    row.addEventListener("keydown", (event) => {
      if (event.target !== row || !["ArrowLeft", "ArrowRight"].includes(event.key)) {
        return;
      }

      event.preventDefault();
      row.scrollLeft += event.key === "ArrowRight" ? 80 : -80;
      normalizePosition(row);
      pauseForInteraction();
    });

    row.addEventListener("pointerdown", (event) => {
      if (event.button !== 0) {
        return;
      }

      if (event.pointerType === "touch") {
        pauseForInteraction(4000);
        return;
      }

      dragging = true;
      dragMoved = false;
      dragStartX = event.clientX;
      dragStartScroll = row.scrollLeft;
      pauseForInteraction();
    });

    row.addEventListener("pointermove", (event) => {
      if (!dragging) {
        return;
      }

      const distance = event.clientX - dragStartX;
      if (!dragMoved && Math.abs(distance) > 5) {
        dragMoved = true;
        row.setPointerCapture(event.pointerId);
        row.classList.add("is-dragging");
      }

      if (!dragMoved) {
        return;
      }

      event.preventDefault();
      row.scrollLeft = dragStartScroll - distance;
      normalizePosition(row);
      pauseForInteraction();
    });

    const finishDrag = (event) => {
      if (!dragging) {
        return;
      }

      dragging = false;
      row.classList.remove("is-dragging");

      if (row.hasPointerCapture(event.pointerId)) {
        row.releasePointerCapture(event.pointerId);
      }

      pauseForInteraction();
    };

    row.addEventListener("pointerup", finishDrag);
    row.addEventListener("pointercancel", finishDrag);
    row.addEventListener("dragstart", (event) => event.preventDefault());
    row.addEventListener("click", (event) => {
      if (!dragMoved) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      dragMoved = false;
    }, true);
  });

  const initializeRows = () => {
    rows.forEach((row) => {
      row.scrollLeft = getLoopWidth(row);
    });
  };

  window.addEventListener("load", initializeRows, { once: true });

  const animate = (currentTime) => {
    const elapsed = Math.min(currentTime - previousTime, 50);
    previousTime = currentTime;
    const isPaused = reduceMotion.matches
      || document.hidden
      || marquee.matches(":hover")
      || marquee.contains(document.activeElement)
      || currentTime < interactionUntil;

    if (!isPaused) {
      rows.forEach((row) => {
        const direction = Number(row.dataset.direction) || 1;
        row.scrollLeft += direction * 0.03 * elapsed;
        normalizePosition(row);
      });
    }

    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
})();
