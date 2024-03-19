import React from "react";

export default function Offcanvas() {
  return (
    <>
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <a class="nav-link fw-bold text-primary text-uppercase " href="/">
            <span>Dashboard</span>
            <hr />
          </a>

          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div class="offcanvas-body">
        <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link " href="/">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#forms-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-journal-text"></i>
            <span>Forms</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="forms-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="/admin/siwesForm">
                <i className="bi bi-circle"></i>
                <span>Siwes Form</span>
              </a>
            </li>
            <li>
              <a href="/admin/admNewOrg">
                <i className="bi bi-circle"></i>
                <span>Add New Organization</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-circle"></i>
                <span>Form 8 Family</span>
              </a>
            </li>
            <li>
              <a href="siwesForm">
                <i className="bi bi-circle"></i>
                <span>Report Form</span>
              </a>
            </li>
            <li>
              <a href="siwesForm">
                <i className="bi bi-circle"></i>
                <span>Project Form</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-heading">Pages</li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="users-profile">
            <i className="bi bi-person"></i>
            <span>Profile</span>
          </a>
        </li>
      </ul>
        </div>
      </div>
    </>
  );
}
