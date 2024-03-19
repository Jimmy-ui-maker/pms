import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Placement Sample Form</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/admin">Admin Home</a>
            </li>

            <Link href={"/admin/submitForm"} class="breadcrumb-item text-decoration-underline ">
              Click me to get yours
            </Link>
          </ol>
        </nav>
      </div>
      {/**<!-- End Page Title --> */}
     
    </main>
  );
}
