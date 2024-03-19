"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ZallaPassQForm() {
  const [cCode, setCode] = useState("");
  const [cTitle, setTitle] = useState("");
  const [section, setSection] = useState("");
  const [type, setType] = useState("Test");
  const [level, setLevel] = useState("100L");
  const [photo, setPhoto] = useState("");

  const [submitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const CLOUD_NAME = "drhagfkin";
  const UPLOAD_PRESET = "my_blog_project_sirjimmy";

  async function handleSubmit(e) {
    e.preventDefault();

    if (!cCode) {
      setError("All fields are needed!!!");
      return;
    }
    setIsSubmitting(true);

    const imgUrl = await uploadImage();
    try {
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
          imgUrl,
        }),
      });
      if (response.status == 201) {
        router.push("/zallaPassQ");
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
    <section className="passQForm min-vh-100 w-100">
      <div className="container">
        <h1 className="text-center text-uppercase">Welcome Back</h1>
        <hr />
        <form onSubmit={handleSubmit} className="">
          <div className="row  align-items-center">
            <h2 className=" text-center">Submit Pass Q</h2>
            <hr />
            <div className="col-lg-4">
              <div className="mb-3">
                <label className="">Course Code</label>
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
                <label className="text-truncate">Question Type</label>
                <select
                  type="text"
                  className="form-control shadow-none "
                  onChange={(e) => setType(e.target.value)}
                  value={type}
                >
                  <option value="Test">Test</option>
                  <option value="Exams">Exams</option>
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
                <input
                  type="file"
                  className="form-control shadow-none "
                  onChange={(e) => setPhoto(e.target.files[0])}
                />
              </div>
            </div>
            <div className="col-lg-12">
              {photo && (
                <img
                  src={URL.createObjectURL(photo)}
                  alt="Organization Image"
                />
              )}
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-submit">
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </div>
          {error && (
            <p className=" text-center text-danger fw-bold  mt-4">{error}</p>
          )}
        </form>
      </div>
    </section>
  );
}
