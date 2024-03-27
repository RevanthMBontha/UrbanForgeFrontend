export const addCard = (img, name, quote, id) => {
  return `<div class="col">
        <div class="card h-100 shadow">
          <img
            src="${img}"
            class="card-img-top"
            alt="${name}"
          />
          <div class="card-body text-center">
            <h5 class="card-title text-upper">${name}</h5>
            <p class="card-text text-capitalize">${quote}</p>
          </div>
          <div class="card-footer text-center bg-white border-top-0 mb-3">
            <button type="button" class="btn bg-accent text-neutral" onclick="redirectToProduct('${id}')">Check it out!</button>
          </div>
        </div>
      </div>`;
};
