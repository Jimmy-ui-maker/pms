"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
export default function page() {

    const [fname, setFname] = useState("");
    const [state, setState] = useState("Kaduna State");
    const [orgName, setOrgName] = useState("");
    const [fscience, setFscience] = useState("Faculty of Science");
    const [lgas, setLgas] = useState("Birnin Gwari");
    const [department, setDepartment] = useState("Biochemistry");
    const [address, setAddress] = useState("");
    const [desc, setDesc] = useState("");
    const [contact, setContact] = useState("");
    const [secNum, setSecNum] = useState("");
    const [photo, setPhoto] = useState("");
    const [email, setEmail] = useState("");
    const [github, setGithub] = useState("");
    const [weburl, setUrl] = useState("");
  
    const [error, setError] = useState("");
  
    const [submitting, setIsSubmitting] = useState(false);
  
    const router = useRouter();
  
    const CLOUD_NAME = "drhagfkin";
    const UPLOAD_PRESET = "my_blog_project_sirjimmy";
  
    async function handleSubmit(e) {
      e.preventDefault();
  
      if (
        !fname &&
        !orgName &&
        !address &&
        !desc &&
        !contact &&
        !secNum &&
        !photo &&
        !email &&
        !github &&
        !weburl
      ) {
        setError("All fields must contain values");
        return;
      }
      setIsSubmitting(true);
      const imgUrl = await uploadImage();
  
      try {
        const resNameExists = await fetch("api/exists", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ orgName }),
        });
  
        const { user } = await resNameExists.json();
  
        if (user) {
          setError("Ooops...!!! This record already exists.");
          return;
        }
  
        const response = await fetch("/api/kaduna", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fname,
            orgName,
            fscience,
            state,
            lgas,
            department,
            address,
            desc,
            imgUrl,
            contact,
            secNum,
            email,
            github,
            weburl,
          }),
        });
        if (response.status == 201) {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          router.push("/");
          router.refresh();
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsSubmitting(false);
      }
    }
    const uploadImage = async () => {
      if (!photo) return;
  
      const formData = new FormData();
  
      formData.append("file", photo);
      formData.append("upload_preset", UPLOAD_PRESET);
  
      try {
        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await res.json();
        const imgUrl = data["secure_url"];
        return imgUrl;
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Placement Form</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/admin">Admin Home</a>
            </li>
            <li class="breadcrumb-item">Add New Placement</li>
          </ol>
        </nav>
      </div>
      {/**<!-- End Page Title --> */}
      <div className="adminForm ">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="card ">
              <div className="card-body">
                <h1 className="text-center text-uppercase mb-4">Add New Placement</h1>
                <hr />
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-4">
                      <h2>Names Section</h2>
                      <hr />
                      <div className="mb-3">
                        <label className="">Founder Name</label>
                        <input
                          onChange={(e) => setFname(e.target.value)}
                          value={fname}
                          type="text"
                          className="form-control shadow-none "
                        />
                      </div>
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
                        <label className="">Faculty of Science</label>
                        <input
                          onChange={(e) => setFscience(e.target.value)}
                          value={fscience}
                          readOnly
                          className="form-control shadow-none "
                        />
                      </div>
                      <div className="mb-3">
                        <label className="">State</label>
                        <input
                          onChange={(e) => setState(e.target.value)}
                          value={state}
                          readOnly
                          className="form-control shadow-none "
                        />
                      </div>
                      <div className="mb-3">
                        <label className="">State</label>
                        <select
                          onChange={(e) => setLgas(e.target.value)}
                          value={lgas}
                          type="text"
                          className="form-control shadow-none "
                        >
                          <option value="Birnin Gwari">Birnin Gwari</option>
                          <option value="Chikun">Chikun</option>
                          <option value="Giwa">Giwa</option>
                          <option value="Kajuru">Kajuru</option>
                          <option value="Igabi">Igabi</option>
                          <option value="Ikara">Ikara</option>
                          <option value="Jaba">Jaba</option>
                          <option value="Jema'a">Jema'a</option>
                          <option value="Kachia">Kachia</option>
                          <option value="Kaduna North">Kaduna North</option>
                          <option value="Kaduna South">Kaduna South</option>
                          <option value="Kagarko">Kagarko</option>
                          <option value="Kaura">Kaura</option>
                          <option value="Kauru">Kauru</option>
                          <option value="Kubau">Kubau</option>
                          <option value="Kudan">Kudan</option>
                          <option value="Lere">Lere</option>
                          <option value="Makarfi">Makarfi</option>
                          <option value="Sabon-gari">Sabon-gari</option>
                          <option value="Sanga">Sanga</option>
                          <option value="Soba">Soba</option>
                          <option value="Zangon-Kataf">Zangon-Kataf</option>
                          <option value="Zaria">Zaria</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="">Department/Course</label>
                        <select
                          onChange={(e) => setDepartment(e.target.value)}
                          value={department}
                          type="text"
                          className="form-control shadow-none "
                        >
                          <option value="Biochemistry">Biochemistry</option>
                          <option value="Biological Science">
                            Biological Science
                          </option>
                          <option value="Chemistry">Chemistry</option>
                          <option value="Computer Science">
                            Computer Science
                          </option>
                          <option value="Geography">Geography</option>
                          <option value="Geology">Geology</option>
                          <option value="Industrial Chemistry">
                            Industrial Chemistry
                          </option>
                          <option value="Mathematical Science">
                            Mathematical Science
                          </option>
                          <option value="Microbiology">Microbiology</option>
                          <option value="Physics">Physics</option>
                          <option value="Statistics">Statistics</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <h2>Description </h2>
                      <hr />
                      <div className="mb-4">
                        <label className="">Address/Location</label>
                        <textarea
                          onChange={(e) => setAddress(e.target.value)}
                          value={address}
                          rows={3}
                          type="text"
                          className="form-control shadow-none "
                        ></textarea>
                      </div>
                      <div className="mb-2">
                        <label className="">Description</label>
                        <textarea
                          onChange={(e) => setDesc(e.target.value)}
                          value={desc}
                          rows={5}
                          type="text"
                          className="form-control shadow-none "
                        ></textarea>
                      </div>
                      <div className="mt-4 mb-3">
                        <label className="">Organization Image</label>
                        <input
                          onChange={(e) => setPhoto(e.target.files[0])}
                          type="file"
                          className="form-control shadow-none "
                        />
                      </div>
                      <div className="mt-4 mb-3 mobile d-lg-none">
                        <label className="">Selected Image</label>
                        {photo && (
                          <img
                            src={URL.createObjectURL(photo)}
                            alt="Organization Image"
                          />
                        )}
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <h2>Contact Section</h2>
                      <hr />
                      <div className="mb-3">
                        <label className="">Organization Contact</label>
                        <input
                          onChange={(e) => setContact(e.target.value)}
                          value={contact}
                          type="number"
                          className="form-control shadow-none "
                        />
                      </div>
                      <div className="mb-3">
                        <label className="">Secretory Contact</label>
                        <input
                          onChange={(e) => setSecNum(e.target.value)}
                          value={secNum}
                          type="number"
                          className="form-control shadow-none "
                        />
                      </div>
                      <div className="mb-3">
                        <label className="">Email Address</label>
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          type="text"
                          className="form-control shadow-none "
                        />
                      </div>
                      <div className="mb-3">
                        <label className="">Github Link</label>
                        <input
                          onChange={(e) => setGithub(e.target.value)}
                          value={github}
                          type="text"
                          className="form-control shadow-none "
                        />
                      </div>
                      <div className="mb-3">
                        <label className="">Web URL Contact</label>
                        <input
                          onChange={(e) => setUrl(e.target.value)}
                          value={weburl}
                          type="text"
                          className="form-control shadow-none "
                        />
                      </div>
                    </div>
                    <hr />
                  </div>
                  <div className="row imgRow d-flex justify-content-center align-items-center d-none d-sm-block ">
                    {photo && (
                      <img
                        src={URL.createObjectURL(photo)}
                        alt="Organization Image"
                      />
                    )}
                  </div>
                  {error && (
                    <p className=" text-center text-danger fw-bold">{error}</p>
                  )}
                  <div className="d-grid">
                    <button type="submit" className="btn btn-submit">
                      {submitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
