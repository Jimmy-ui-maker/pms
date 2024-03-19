export default function PassQNavbar() {
  return (
    <>
      <nav className="navbar zallaPassQNavbar navbar-expand-md shadow-sm">
        <div className="container">
          <img
            src="/siwes/logo.png"
            className=" rounded-2"
            width={50}
            height={40}
            alt=""
          />
          <div className=" d-none d-lg-block">
            <a href="/zallaPassQ" className="navbar-brand text-uppercase ">
              PassQ Management System
            </a>
          </div>

          <div className=" d-lg-none">
            <a href="/zallaPassQ" className="navbar-brand  ">
              PassQ Management System
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
                PassQ Generator
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
                  <a href="/zallaPassQ/about" className="nav-link fw-bold">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/zallaPassQ/level1" className="nav-link fw-bold">
                    Level1
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/zallaPassQ/level2" className="nav-link fw-bold">
                    Level2
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/zallaPassQ/level3" className="nav-link fw-bold">
                    Level3
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/zallaPassQ/level4" className="nav-link fw-bold">
                    Level4
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/zallaPassQ/passQForm" className="nav-link fw-bold">
                    Insert
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
