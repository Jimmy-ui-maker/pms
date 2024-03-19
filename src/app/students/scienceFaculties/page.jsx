import Link from "next/link";

export default function page() {
  const fScience = [
    {
      name: "Biochemistry",
      routes: "/students/scienceFaculties/biochemistry",
    },

    {
      name: "Biological Science",
      routes: "/students/scienceFaculties/biologicalScience",
    },

    {
      name: "Chemistry",
      routes: "/students/scienceFaculties/chemistry",
    },
    {
      name: "Computer Science",
      routes: "/students/scienceFaculties/computerScience",
    },
    {
      name: "Geography",
      routes: "/students/scienceFaculties/geography",
    },
    {
      name: "Geology",
      routes: "/students/scienceFaculties/geology",
    },

    {
      name: "Industrial Chemistry",
      routes: "/students/scienceFaculties/industrialchemistry",
    },
    {
      name: "Mathematical Science",
      routes: "/students/scienceFaculties/mathematicalScience",
    },
    {
      name: "Microbiology",
      routes: "/students/scienceFaculties/microbiology",
    },

    {
      name: "Physics",
      routes: "/students/scienceFaculties/physics",
    },

    {
      name: "Statistics",
      routes: "/students/scienceFaculties/statistics",
    },
  ];
  return (
    <section id="cardList" className="cardList min-vh-100 section-bg pb-4">
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
                <Link className=" p-3 text-decoration-none" href={fs.routes}>
                  {fs.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
