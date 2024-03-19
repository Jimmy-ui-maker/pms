"use client";
import AllTeachingStaffs from "@/(components)/CSCStaffsComponents/AllTeachingStaffs";
import JuniorTeachingStaffs from "@/(components)/CSCStaffsComponents/JuniorTeachingStaffs";
import JuniorVisiting from "@/(components)/CSCStaffsComponents/JuniorVisiting";
import LecturerIIITeaching from "@/(components)/CSCStaffsComponents/LecturerIIITeaching";
import LecturerIITeaching from "@/(components)/CSCStaffsComponents/LecturerIITeaching";
import LecturerITeaching from "@/(components)/CSCStaffsComponents/LecturerITeaching";
import SeniorTeaching from "@/(components)/CSCStaffsComponents/SeniorTeaching";
import SeniorVisiting from "@/(components)/CSCStaffsComponents/SeniorVisiting";
import React, { useState } from "react";

export default function page() {
  const [selected, setSelected] = useState("All Teaching Staffs");

  const handleChange = (e) => {
    setSelected(e.target.value);
  };
  return (
    <section className="teachingStaffs min-vh-100 pb-4 d-flex flex-column justify-content-center align-items-center">
      <div className="container">
        <div className="row text-center justify-content-center align-items-center">
          <h2 className=" text-uppercase">
            Computer Science Department Teaching Staffs
          </h2>
          <div className="">
            <div className="col-lg-4">
              <div className="mb-3">
                <label>Select Category</label>
                <select
                  value={selected}
                  onChange={(e) => handleChange(e)}
                  className=" form-control shadow-none"
                >
                  <option> All Teaching Staffs</option>
                  <option> LecturerI Teaching Staffs</option>
                  <option> LecturerII Teaching Staffs</option>
                  <option> LecturerIII Teaching Staffs</option>
                  <option> Junior Teaching Staffs</option>
                  <option> Junior Visiting Staffs</option>
                  <option> Senior Teaching Staffs</option>
                  <option> Senior Visiting Staffs</option>
                </select>
              </div>
            </div>

            {selected == "All Teaching Staffs" ? <AllTeachingStaffs /> : ""}
            {selected == "LecturerI Teaching Staffs" ? (
              <LecturerITeaching />
            ) : (
              ""
            )}
            {selected == "LecturerII Teaching Staffs" ? (
              <LecturerIITeaching />
            ) : (
              ""
            )}
            {selected == "LecturerIII Teaching Staffs" ? (
              <LecturerIIITeaching />
            ) : (
              ""
            )}
            {selected == "Junior Teaching Staffs" ? (
              <JuniorTeachingStaffs />
            ) : (
              ""
            )}
            {selected == "Junior Visiting Staffs" ? <JuniorVisiting /> : ""}
            {selected == "Senior Teaching Staffs" ? <SeniorTeaching /> : ""}
            {selected == "Senior Visiting Staffs" ? <SeniorVisiting /> : ""}
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
}
