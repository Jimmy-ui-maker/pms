export default function GenNavbar() {
  return (
    <>
      <nav className="navbar genNavbar navbar-expand-md shadow-sm">
        <div className="container">
          <img
            src="/siwes/logo.png"
            className=" rounded-2"
            width={50}
            height={40}
            alt=""
          />
          <div className=" d-none d-lg-block">
            <a href="/results" className="navbar-brand text-uppercase ">
              Result Management System
            </a>
          </div>

          <div className=" d-lg-none">
            <a href="/results" className="navbar-brand  ">
            Result Management System
            </a>
          </div>
          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbars"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list"></i>
          </button>

          {/**Side bar */}
          <div
            class="sidebar offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbars"
            aria-labelledby="offcanvasNavbarLabel"
          >
            {/**Side bar header */}
            <div class="offcanvas-header text-white border-bottom">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Result Generator
              </h5>
              <button
                type="button"
                class="btn-close btn-close-white shadow-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            {/**Side bar body */}
            <div class=" sidebar offcanvas-body py-1">
              <ul class="navbar-nav justify-content-end align-items-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <a href="results/generate/about" className="nav-link fw-bold">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="results/generate/100L" className="nav-link fw-bold">
                    100L
                  </a>
                </li>
                <li className="nav-item">
                  <a href="results/generate/200L" className="nav-link fw-bold">
                    200L
                  </a>
                </li>
                <li className="nav-item">
                  <a href="results/generate/300L" className="nav-link fw-bold">
                    300L
                  </a>
                </li>
                <li className="nav-item">
                  <a href="results/generate/400L" className="nav-link fw-bold">
                    400L
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
