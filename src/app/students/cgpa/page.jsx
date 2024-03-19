"use client";

import React, { useState } from "react";

export default function page() {
  const [prevScore, setPrevScore] = useState();
  const [prevCU, setPreCU] = useState();
  const [siwesCU, setSiwesCU] = useState(6);
  const [gradeList, setGradeList] = useState(30);

  const [computeGrade, setComputeGrade] = useState();
  const [computeCu, setComputeCu] = useState();
  const [total, setTotal] = useState();

  async function handlePoint(e) {
    e.preventDefault();
    setComputeGrade(prevScore + gradeList);
    setComputeCu(prevCU + siwesCU);
  }
  async function handleTotal(e) {
    e.preventDefault();
    setTotal(computeGrade / computeCu);
  }
  return (
    <section className="cgpaForms  min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card ">
              <div className="card-body">
                <h1 className="text-center text-uppercase mb-4">
                  CGPA Predict Calculator
                </h1>
                <hr />
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <h2>Prev Score</h2>
                      <hr />
                      <div className="mb-3">
                        <label className="">Prev... Scores</label>
                        <input
                          value={prevScore}
                          onChange={(e) => setPrevScore(+e.target.value)}
                          type="text"
                          className="form-control shadow-none text-center "
                        />
                      </div>
                      <div className="mb-3">
                        <label className="">Prev... CU</label>
                        <input
                          className="form-control shadow-none text-center "
                          onChange={(e) => setPreCU(+e.target.value)}
                          value={prevCU}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <h2>Siwes Point</h2>
                      <hr />
                      <div className="mb-3">
                        <label className="">Siwes CU</label>
                        <input
                          onChange={(e) => setSiwesCU(+e.target.value)}
                          value={siwesCU}
                          readOnly
                          type="text"
                          className="form-control shadow-none text-center "
                        />
                      </div>
                      <div className="mb-3">
                        <label className="">Select Grade</label>
                        <select
                          className="form-control shadow-none text-center "
                          value={gradeList}
                          onChange={(e) => setGradeList(+e.target.value)}
                        >
                          <option value="30">Grade A</option>
                          <option value="24">Grade B</option>
                          <option value="18">Grade C</option>
                          <option value="12">Grade D</option>
                          <option value="6">Grade E</option>
                          <option value="0">Grade F</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div className="row text-center">
                    <div className="col-lg-6">
                      <h2>Total Score</h2>
                      <div className="mb-3">
                        <label className=" text-center">{computeGrade}</label>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <h2>Total CU</h2>
                      <div className="mb-3">
                        <label className=" text-center">{computeCu}</label>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row justify-content-center text-center align-items-center">
                    <div className="col-lg-4">
                      <h2>CGPA</h2>
                      <div className="mb-3">
                        <label className=" text-center">{total}</label>
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div className="d-grid">
                    <button
                      type="submit"
                      onClick={handlePoint}
                      className="btn  btn-submit "
                    >
                      Compute Point
                    </button>
                    <button
                      type="submit"
                      onClick={handleTotal}
                      className="btn  btn-submit "
                    >
                      Compute CGPA
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
}
