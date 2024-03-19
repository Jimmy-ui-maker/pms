import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <nav className="navbar adminNavbar navbar-expand-md shadow-sm py-1 ">
      <div className=" container-fluid mx-2">
      
        <img src="/siwes/logo.png" width={40} height={30} alt="" />

        <div className=" d-none d-lg-block">
          <a href="/admin" className="navbar-brand text-uppercase ">
            Placement Management System
          </a>
        </div>

        <div className=" d-lg-none">
          <a href="/admin" className="navbar-brand  ">
            PMS
          </a>
        </div>

        <div
          className="collapse navbar-collapse justify-content-end align-center"
          id="main-nav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#about" className="nav-link fw-bold">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link fw-bold">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link fw-bold">
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div className=" d-lg-none">
          <a
            class="btn  text-decoration-none"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            <i className="bi bi-list"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}
