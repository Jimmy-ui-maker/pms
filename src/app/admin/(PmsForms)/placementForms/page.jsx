import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Placement Form8</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/admin">Admin Home</a>
            </li>
            <Link href={"/admin/uploadForms"} class="breadcrumb-item text-decoration-underline ">
              Upload Placement Froms
            </Link>
          </ol>
        </nav>
      </div>
      {/**<!-- End Page Title --> */}
     
    </main>
  );
}
