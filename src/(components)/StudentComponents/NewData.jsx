"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const NewSiwes = () => {
  const [orgName, setOrgName] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState("Kaduna");
  const [desc, setDesc] = useState("");
  const [email, setEmail] = useState("");
  const [courses, setCourses] = useState("Computer");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!orgName || !number || !state || !desc || !email  || !courses) {
      alert("All fields are needed!!!");
    }

    const response = await fetch("/api/siwesguide", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orgName, number, state, desc, email, courses, }),
    });
    if (response.status == 201) {
      router.refresh();
      router.push("/");
    }
  }
  return (
    <section className="allForms w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="card ">
              <div className="card-body">
                <h1 className="text-center text-uppercase mb-4">Add Record</h1>
                <hr />
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <h2>Names Section</h2>
                      <div className="mb-3">
                        <label className="">Organization Name</label>
                        <input
                          onChange={(e) => setOrgName(e.target.value)}
                          value={orgName}
                          type="text"
                          className="form-control shadow-none "
                        />
                      </div>
                      <div className="mb-3">
                        <label className="">User Phone Number</label>
                        <input
                          onChange={(e) => setNumber(e.target.value)}
                          value={number}
                          type="text"
                          className="form-control shadow-none "
                        />
                      </div>
                      <div className="mb-3">
                        <label className="">Select State</label>
                        <select
                          className="form-control shadow-none "
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                        >
                          <option value="Kaduna">Kaduna</option>
                          <option value="Kano">Kano</option>
                          <option value="Kebbi">Kebbi</option>
                        </select>
                      </div>

                      <div className="mb-3">
                        <label className="">Org... Description</label>
                        <input
                          onChange={(e) => setDesc(e.target.value)}
                          value={desc}
                          type="text"
                          className="form-control shadow-none "
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <h2>Descriipton Section</h2>
                      <div className="mb-3">
                        <label className="">Enter your Email</label>
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          type="text"
                          className="form-control shadow-none "
                        />
                      </div>
                      <div className="mb-3">
                        <label className="">Select Courses</label>
                        <select
                          className="form-control shadow-none "
                          value={courses}
                          onChange={(e) => setCourses(e.target.value)}
                        >
                          <option value="Computer">Computer</option>
                          <option value="Biology">Biology</option>
                          <option value="Statistics">Statistics</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-submit border-0">
                      Create Data
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewSiwes;
