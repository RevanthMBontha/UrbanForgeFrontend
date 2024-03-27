export const addCarouselIB = (title, index, id) => {
  if (index === 0) {
    return `<button
          type="button"
          data-bs-target="#${id}"
          data-bs-slide-to="${index}"
          class="active"
          aria-current="true"
          aria-label="${title}"
        ></button>`;
  } else {
    return `<button
    type="button"
    data-bs-target="#${id}"
    data-bs-slide-to="${index}"
    aria-label="${title}"
  ></button>`;
  }
};

export const addCarouselImages = (
  src,
  title,
  index,
  hasCaptions,
  changeInterval
) => {
  if (hasCaptions) {
    if (index === 0) {
      return `<div class="carousel-item active" data-bs-interval="${changeInterval}">
  <img src="${src}" class="d-block" alt="${title}" />
  <div class="carousel-caption d-none d-md-block">
    <h5 class="text-lg text-capitalize">${title}</h5>
  </div>
</div>`;
    } else {
      return `<div class="carousel-item" data-bs-interval="${changeInterval}">
        <img src="${src}" class="d-block" alt="${title}" />
        <div class="carousel-caption d-none d-md-block">
          <h5 class="text-lg text-capitalize">${title}</h5>
        </div>
      </div>`;
    }
  } else {
    if (index === 0) {
      return `<div class="carousel-item active" data-bs-interval="${changeInterval}">
  <img src="${src}" class="d-block" alt="${title}" />
</div>`;
    } else {
      return `<div class="carousel-item" data-bs-interval="${changeInterval}">
        <img src="${src}" class="d-block" alt="${title}" />
      </div>`;
    }
  }
};

export const addNPButtons = (id) => {
  return `<button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#${id}"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon bg-accent rounded p-4"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#${id}"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon bg-accent rounded p-4"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>`;
};
