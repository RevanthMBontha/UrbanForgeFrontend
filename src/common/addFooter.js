export const addFooter = () => {
  const footer = document.getElementById('footer');
  footer.innerHTML += `<div class="row bg-primary-200 p-0 pt-4 pb-4 align-items-center">
      <div class="col-12 col-md-3 col-lg-3 text-neutral text-center mb-1 mt-1">
        <div class="d-flex justify-content-center w-100">
          <a class="nav-link" href="index.html">Home</a>
        </div>
        <div class="d-flex justify-content-center w-100">
          <a class="nav-link" href="about_us.html">About Us</a>
        </div>
        <div class="d-flex justify-content-center w-100">
          <a class="nav-link" href="contact_us.html">Contact Us</a>
        </div>
        <div class="d-flex justify-content-center w-100">
          <button class="nav-link" onclick="redirectToProducts('all')">
            All Products
          </button>
        </div>
      </div>
      <div class="col-12 col-md-3 col-lg-3 text-neutral text-center mb-1 mt-1">
        <div class="d-flex justify-content-center w-100 text-center">
          <button class="nav-link" onclick="redirectToProducts('all_men')">
            Men
          </button>
        </div>
        <div class="d-flex justify-content-center w-100">
          <button class="nav-link" onclick="redirectToProducts('men_rings')">
            Rings
          </button>
        </div>
        <div class="d-flex justify-content-center w-100">
          <button
            class="nav-link"
            onclick="redirectToProducts('men_bracelets')"
          >
            Bracelets
          </button>
        </div>
        <div class="d-flex justify-content-center w-100">
          <button
            class="nav-link"
            onclick="redirectToProducts('men_necklaces')"
          >
            Necklaces
          </button>
        </div>
        <div class="d-flex justify-content-center w-100">
          <button class="nav-link" onclick="redirectToProducts('men_other')">
            Other Accessories
          </button>
        </div>
      </div>
      <div class="col-12 col-md-3 col-lg-3 text-neutral text-center mb-1 mt-1">
        <div class="d-flex justify-content-center w-100">
          <button class="nav-link" onclick="redirectToProducts('all_women')">
            Women
          </button>
        </div>
        <div class="d-flex justify-content-center w-100">
          <button class="nav-link" onclick="redirectToProducts('women_rings')">
            Rings
          </button>
        </div>
        <div class="d-flex justify-content-center w-100">
          <button
            class="nav-link"
            onclick="redirectToProducts('women_bracelets')"
          >
            Bracelets
          </button>
        </div>
        <div class="d-flex justify-content-center w-100">
          <button
            class="nav-link"
            onclick="redirectToProducts('women_necklaces')"
          >
            Necklaces
          </button>
        </div>
        <div class="d-flex justify-content-center w-100">
          <button
            class="nav-link"
            onclick="redirectToProducts('women_skin_care')"
          >
            Skin Care
          </button>
        </div>
      </div>
      <div class="col-12 col-md-3 col-lg-3 text-neutral text-center mb-1 mt-1">
        <div class="d-flex justify-content-center w-100">
          <button class="nav-link" onclick="redirectToProducts('unisex')">
            Unisex
          </button>
        </div>
      </div>
    </div>
    <div class="row bg-primary-600 pt-2 pb-2">
      <div class="col text-neutral text-center">
        <i class="fa-regular fa-copyright"></i> UrbanForge Inc, ${new Date().getFullYear()}. All rights reserved.
      </div>
    </div>`;
};
