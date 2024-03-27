export const getRatingStars = (value) => {
  if (value == 5) {
    return `<span><i class="fa-solid fa-star text-primary-600 p-1"></i><i class="fa-solid fa-star text-primary-600 p-1"></i><i class="fa-solid fa-star text-primary-600 p-1"></i><i class="fa-solid fa-star text-primary-600 p-1"></i><i class="fa-solid fa-star text-primary-600 p-1"></i></span>`;
  } else if (value >= 4.5) {
    return `<span><i class="fa-solid fa-star text-primary-600 p-1"></i><i class="fa-solid fa-star text-primary-600 p-1"></i><i class="fa-solid fa-star text-primary-600 p-1"></i><i class="fa-solid fa-star text-primary-600 p-1"></i><i class="fa-solid fa-star-half-stroke text-primary-600 p-1"></i></span>`;
  } else if (value >= 4) {
    return `<span><i class="fa-solid fa-star text-primary-600 p-1"></i><i class="fa-solid fa-star text-primary-600 p-1"></i><i class="fa-solid fa-star text-primary-600 p-1"></i><i class="fa-solid fa-star text-primary-600 p-1"></i><i class="fa-regular fa-star text-primary-600 p-1"></i></span>`;
  } else if (value >= 3.5) {
    return `<span><i class="fa-solid fa-star text-primary-600 p-1"></i><i class="fa-solid fa-star text-primary-600 p-1"></i><i class="fa-solid fa-star text-primary-600 p-1"></i><i class="fa-solid fa-star-half-stroke text-primary-600 p-1"></i><i class="fa-regular fa-star text-primary-600 p-1"></i></span>`;
  } else if (value >= 3) {
    return `<span><i class="fa-solid fa-star text-primary-600 p-1"></i><i class="fa-solid fa-star text-primary-600 p-1"></i><i class="fa-solid fa-star text-primary-600 p-1"></i><i class="fa-regular fa-star text-primary-600 p-1"></i><i class="fa-regular fa-star text-primary-600 p-1"></i></span>`;
  } else if (value >= 2.5) {
    return `<span><i class="fa-solid fa-star text-primary-600 p-1"></i><i class="fa-solid fa-star text-primary-600 p-1"></i><i class="fa-solid fa-star-half-stroke text-primary-600 p-1"></i><i class="fa-regular fa-star text-primary-600 p-1"></i><i class="fa-regular fa-star text-primary-600 p-1"></i></span>`;
  } else if (value >= 2) {
    return `<span><i class="fa-solid fa-star text-primary-600 p-1"></i><i class="fa-solid fa-star text-primary-600 p-1"></i><i class="fa-regular fa-star text-primary-600 p-1"></i><i class="fa-regular fa-star text-primary-600 p-1"></i><i class="fa-regular fa-star text-primary-600 p-1"></i></span>`;
  } else if (value >= 1.5) {
    return `<span><i class="fa-solid fa-star text-primary-600 p-1"></i><i class="fa-solid fa-star-half-stroke text-primary-600 p-1"></i><i class="fa-regular fa-star text-primary-600 p-1"></i><i class="fa-regular fa-star text-primary-600 p-1"></i><i class="fa-regular fa-star text-primary-600 p-1"></i></span>`;
  } else if (value >= 1) {
    return `<span><i class="fa-solid fa-star text-primary-600 p-1"></i><i class="fa-regular fa-star text-primary-600 p-1"></i><i class="fa-regular fa-star text-primary-600 p-1"></i><i class="fa-regular fa-star text-primary-600 p-1"></i><i class="fa-regular fa-star text-primary-600 p-1"></i></span>`;
  } else if (value > 0.5) {
    return `<span><i class="fa-solid fa-star-half-stroke text-primary-600 p-1"></i><i class="fa-regular fa-star text-primary-600 p-1"></i><i class="fa-regular fa-star text-primary-600 p-1"></i><i class="fa-regular fa-star text-primary-600 p-1"></i><i class="fa-regular fa-star text-primary-600 p-1"></i></span>`;
  } else {
    return `<span><i class="fa-regular fa-star text-primary-600 p-1"></i><i class="fa-regular fa-star text-primary-600 p-1"></i><i class="fa-regular fa-star text-primary-600 p-1"></i><i class="fa-regular fa-star text-primary-600 p-1"></i><i class="fa-regular fa-star text-primary-600 p-1"></i></span>`;
  }
};
