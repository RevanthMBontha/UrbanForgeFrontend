export function addNavbar() {
  const navBarContainer = document.getElementById('navbar_container');
  navBarContainer.innerHTML += `<!-- Start of Primary Navbar -->
    <nav
      class="navbar navbar-expand-lg py-3 bg-primary-600 border-bottom border-body"
      data-bs-theme="dark"
    >
      <div class="container-fluid min-w-75 mx-auto">
        <a class="navbar-brand align-items-center" href="index.html">
          <img
            src="../images/crown_neutral.svg"
            alt="Logo"
            width="30"
            height="30"
            class="d-inline-block align-text-top pe-2 pb-1"
          />Urban Forge</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex mx-auto min-w-50 mb-1 mt-1" role="search">
            <input
              id="search_query"
              class="form-control rounded-end-0"
              type="search"
              placeholder="Looking for something specific?"
              aria-label="Search"
            />
            <button
              class="btn bg-accent text-white rounded-start-0"
              type="button"
              onclick="redirectToProductsBySearch(document.getElementById('search_query').value)"
            >
              Search
            </button>
          </form>
          <ul class="navbar-nav ms-auto mb-1 mt-1 mb-lg-0">
            <li class="nav-item text-center mb-1 mt-1">
              <a
                class="nav-link btn bg-accent text-white ps-3 pe-3"
                id="login"
                aria-current="page"
                href="login.html"
                >Login</a
              >
            </li>
            <li class="nav-item text-center mb-1 mt-1">
              <a
                data-bs-toggle="tooltip"
                data-bs-title="Cart"
                class="nav-link"
                id="cart"
                aria-current="page"
                href="cart.html"
                ><i class="fa-solid fa-lg fa-cart-shopping text-white"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- End of Primary Navbar -->

    <!-- Start of Secondary Navbar -->
    <ul class="nav bg-primary-200 justify-content-center">
      <div class="row min-w-75">
        <li class="nav-item col-12 col-md-12 col-lg-2 text-center">
          <a
            class="nav-link text-white"
            id="index"
            aria-current="page"
            href="index.html"
            >Home</a
          >
        </li>
        <!-- All products -->
        <li
          class="nav-item d-flex nav-100 justify-content-center col-12 col-md-12 col-lg-2 text-center"
        >
          <button
            class="nav-link text-white"
            id="all_products"
            onclick="redirectToProducts('all')"
          >
            All Products
          </button>
        </li>

        <!-- Men Products -->
        <div
          class="btn-group d-flex nav-100 justify-content-center col-12 col-md-12 col-lg-2"
        >
          <button
            id="all_men"
            class="nav-link pe-1 text-white"
            data-bs-theme="dark"
            onclick="redirectToProducts('all_men')"
          >
            Men
          </button>
          <a
            role="button"
            class="nav-link ps-1 dropdown-toggle dropdown-toggle-split text-white"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="visually-hidden">Toggle Dropdown</span>
          </a>
          <ul class="dropdown-menu bg-primary-200" data-bs-theme="dark">
            <li>
              <button
                class="dropdown-item"
                onclick="redirectToProducts('men_rings')"
              >
                Rings
              </button>
            </li>
            <li>
              <button
                class="dropdown-item"
                onclick="redirectToProducts('men_bracelets')"
              >
                Bracelets
              </button>
            </li>
            <li>
              <button
                class="dropdown-item"
                onclick="redirectToProducts('men_necklaces')"
              >
                Necklaces
              </button>
            </li>
            <li>
              <button
                class="dropdown-item"
                onclick="redirectToProducts('men_other')"
              >
                Other Accessories
              </button>
            </li>
          </ul>
        </div>
        <!-- Women Products -->
        <div
          class="btn-group d-flex nav-100 justify-content-center col-12 col-md-12 col-lg-2"
        >
          <button
            id="all_women"
            class="nav-link pe-1 text-white"
            data-bs-theme="dark"
            onclick="redirectToProducts('all_women')"
          >
            Women
          </button>
          <a
            role="button"
            class="nav-link ps-1 dropdown-toggle dropdown-toggle-split text-white"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="visually-hidden">Toggle Dropdown</span>
          </a>
          <ul class="dropdown-menu bg-primary-200" data-bs-theme="dark">
            <li>
              <button
                class="dropdown-item"
                onclick="redirectToProducts('women_rings')"
              >
                Rings
              </button>
            </li>
            <li>
              <button
                class="dropdown-item"
                onclick="redirectToProducts('women_bracelets')"
              >
                Bracelets
              </button>
            </li>
            <li>
              <button
                class="dropdown-item"
                onclick="redirectToProducts('women_necklaces')"
              >
                Necklaces
              </button>
            </li>
            <li>
              <button
                class="dropdown-item"
                onclick="redirectToProducts('women_skin_care')"
              >
                Skin Care
              </button>
            </li>
          </ul>
        </div>
        <li
          class="nav-item d-flex nav-100 justify-content-center col-12 col-md-12 col-lg-2"
        >
          <button
            class="nav-link text-center text-white"
            id="unisex"
            aria-current="page"
            onclick="redirectToProducts('unisex')"
          >
            Unisex
          </button>
        </li>
        <li class="nav-item col-12 col-md-12 col-lg-2">
          <a
            class="nav-link text-center text-white"
            id="contact_us"
            aria-current="page"
            href="contact_us.html"
            >Contact Us</a
          >
        </li>
      </div>
    </ul>

    <!-- End of Secondary Navbar -->`;
}
