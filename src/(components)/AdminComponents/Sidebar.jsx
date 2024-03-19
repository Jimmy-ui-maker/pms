import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link " href="/admin">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#forms-nav"
            data-bs-toggle="collapse"
            href=""
          >
            <i className="bi bi-journal-text"></i>
            <span>Placement Forms</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="forms-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="/admin/submisionForm">
                <i className="bi bi-circle"></i>
                <span>See Placement Form</span>
              </a>
            </li>
            <li>
              <a href="/admin/scienceFaculties">
                <i className="bi bi-circle"></i>
                <span>List of Placement</span>
              </a>
            </li>
            <li>
              <a href="/admin/placementForms">
                <i className="bi bi-circle"></i>
                <span>Placement Forms</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#logForm"
            data-bs-toggle="collapse"
            href=""
          >
            <i className="bi bi-journal-text"></i>
            <span>Log Book Forms</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="logForm"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="/admin/aboutLog">
                <i className="bi bi-circle"></i>
                <span>About Log Book</span>
              </a>
            </li>
            <li>
              <a href="/admin/filling">
                <i className="bi bi-circle"></i>
                <span>How to field Log Book</span>
              </a>
            </li>
            <li>
              <a href="/admin/gallary">
                <i className="bi bi-circle"></i>
                <span>Log Book Gallaries</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-target="#prp"
            data-bs-toggle="collapse"
            href=""
          >
            <i className="bi bi-journal-text"></i>
            <span>Reports & Presentation</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="prp"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="/admin/reportForm">
                <i className="bi bi-circle"></i>
                <span>Report Form</span>
              </a>
            </li>
            <li>
              <a href="/admin/presentation">
                <i className="bi bi-circle"></i>
                <span>Presentation Form</span>
              </a>
            </li>
            <li>
              <a href="/admin/projectForm">
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
    </aside>
  );
}
