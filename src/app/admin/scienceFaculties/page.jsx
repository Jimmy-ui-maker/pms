import Link from "next/link";

export default function page() {
  const fScience = [
    {
      name: "Biochemistry",
      routes: "/admin/scienceFaculties/biochemistry",
    },

    {
      name: "Biological Science",
      routes: "/admin/scienceFaculties/biologicalScience",
    },

    {
      name: "Chemistry",
      routes: "/admin/scienceFaculties/chemistry",
    },
    {
      name: "Computer Science",
      routes: "/admin/scienceFaculties/computerScience",
    },
    {
      name: "Geography",
      routes: "/admin/scienceFaculties/geography",
    },
    {
      name: "Geology",
      routes: "/admin/scienceFaculties/geology",
    },

    {
      name: "Industrial Chemistry",
      routes: "/admin/scienceFaculties/industrialchemistry",
    },
    {
      name: "Mathematical Science",
      routes: "/admin/scienceFaculties/mathematicalScience",
    },
    {
      name: "Microbiology",
      routes: "/admin/scienceFaculties/microbiology",
    },

    {
      name: "Physics",
      routes: "/admin/scienceFaculties/physics",
    },

    {
      name: "Statistics",
      routes: "/admin/scienceFaculties/statistics",
    },
  ];
  return (
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Placement Form</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/admin">Admin Home</a>
            </li>
            <Link
              href={"/admin/newPlacement"}
              class="breadcrumb-item text-decoration-underline "
            >
              Add New Placement
            </Link>
          </ol>
        </nav>
      </div>
      <section id="cardList" className="adminList min-vh-100 section-bg pb-4">
        <div className="container" data-aos="fade-up">
          <div className="section-title ">
            <h2 className=" text-center fw-bolder  text-uppercase">
              Faculty of Science, KASU.
            </h2>
            <p className=" text-center ">Select your Course/Department.</p>
          </div>

          <div className="row g-4  align-items-center text-center">
            {fScience.map((fs) => (
              <div
                key={fs.id}
                className="col-lg-3 col-12 "
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="card stateBody  border-0">
                  <Link
                    className=" p-3 text-decoration-none text-truncate"
                    href={fs.routes}
                  >
                    {fs.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
