"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function page() {
  const [cCode, setCode] = useState("");
  const [cTitle, setTitle] = useState("");
  const [section, setSection] = useState("");
  const [type, setType] = useState("Test");
  const [level, setLevel] = useState("100L");

  const [submitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!cCode) {
      setError("All fields are needed!!!");
      return;
    }
    setIsSubmitting(true);
    const resNameExists = await fetch("api/passQExist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cCode }, { section }),
    });

    const { user } = await resNameExists.json();

    if (user) {
      setError("Ooops...!!! This record already exists.");
      return;
    }

    const response = await fetch("/api/passq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cCode,
        cTitle,
        section,
        type,
        level,
      }),
    });
    if (response.status == 201) {
      router.push("/");
      router.refresh();
    }
  }
  return (
    <section className="cscStaffQForm min-vh-100 w-100">
      <div className="container">
        <h1 className="text-center text-uppercase">Welcome Back</h1>
        <hr />
        <form onSubmit={handleSubmit} className="">
          <div className="row  align-items-center">
            <h2 className=" text-center">Submit Staffs Record</h2>
            <hr />
            <div className="col-lg-4">
              <div className="mb-3">
                <label className="">Lecturer Name</label>
                <input
                  type="text"
                  className="form-control shadow-none "
                  onChange={(e) => setCode(e.target.value)}
                  value={cCode}
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label className="">Course Title</label>
                <input
                  type="text"
                  className="form-control shadow-none "
                  onChange={(e) => setTitle(e.target.value)}
                  value={cTitle}
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label className="">Year Section</label>
                <input
                  type="text"
                  className="form-control shadow-none "
                  onChange={(e) => setSection(e.target.value)}
                  value={section}
                />
              </div>
            </div>
            <hr />
            <div className="col-lg-4">
              <div className="mb-3">
                <label className="text-truncate">Lecturer Level</label>
                <select
                  type="text"
                  className="form-control shadow-none "
                  onChange={(e) => setType(e.target.value)}
                  value={type}
                >
                  <option value="LecturerI">LecturerI</option>
                  <option value="LecturerII">LecturerII</option>
                  <option value="LecturerIII">LecturerIII</option>
                </select>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="mb-3">
                <label className="text-truncate">Select Level</label>
                <select
                  type="text"
                  className="form-control shadow-none "
                  onChange={(e) => setLevel(e.target.value)}
                  value={level}
                >
                  <option value="100L">100L</option>
                  <option value="200L">200L</option>
                  <option value="300L">300L</option>
                  <option value="400L">400L</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <label className="text-truncate">Select Image</label>
                <input type="file" className="form-control shadow-none " />
              </div>
            </div>

            {error && (
              <p className=" text-center text-danger fw-bold">{error}</p>
            )}
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-submit">
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
