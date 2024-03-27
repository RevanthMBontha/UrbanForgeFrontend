export const addCartItem = (item, quantity) => {
  return `<div
            class="d-flex justify-content-center align-items-center position-relative bg-white w-100 rounded-3 p-2 mb-2 shadow"
          >
            <!-- Close Button -->
            <div class="position-absolute top-0 end-0">
              <a
                class="btn bg-outline-accent border-0 p-1 me-2 mt-1"
                role="button"
                onclick="removeCartItem('${item.id}')"
                ><i class="fa-regular fa-xl fa-circle-xmark"></i
              ></a>
            </div>
            <div class="row w-100">
              <!-- Image Container -->
              <div
                class="col-12 col-sm-12 col-md-3 d-flex image-container justify-content-center p-0"
              >
                <img
                  class="rounded-3"
                  src="${item.images[0]}"
                  alt="${item.name}"
                  
                />
              </div>
              <!-- Description Container -->
              <div
                class="col-12 col-sm-12 col-md-9 min-ps-3 d-flex flex-column justify-content-center"
              >
                <h2 class="text-md text-capitalize text-primary-600">
                ${item.name}
                </h2>
                <h3 class="text-sm text-primary-200">Ref ID: ${item.id}</h3>
                <h3 class="text-sm text-primary-200 mb-3">Price: ${
                  item.price
                }</h3>
                <!-- Container for quantity and final price -->
                <div class="d-flex align-items-center">
                  <div class="d-flex m-0 p-0">
                    <button
                      class="btn bg-outline-accent rounded-0 rounded-start"
                      onclick="decreaseCartQuantity('${item.id}')"
                    >
                      <i class="fa-solid fa-minus"></i>
                    </button>
                    <input
                      class="form-control-plaintext border-top border-bottom rounded-0 d-inline-block text-center"
                      type="text"
                      aria-label="readonly input"
                      value="${quantity}"
                      size="4"
                      readonly
                    />
                    <button class="btn bg-outline-accent rounded-0 rounded-end" onclick="increaseCartQuantity('${
                      item.id
                    }')">
                      <i class="fa-solid fa-plus"></i>
                    </button>

                    <button class="btn bg-accent rounded m-0 ms-4" onclick="removeCartItem('${
                      item.id
                    }')">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                  <div class="flex-grow-1"><h4 class="m-0 text-italic text-primary-600 text-end">INR ${Number(
                    item.price * quantity
                  ).toFixed(2)}</h4></div>
                </div>
              </div>
            </div>
          </div>`;
};
