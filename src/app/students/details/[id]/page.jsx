
import { KadunaTable } from "@/models/Nigeria";
import Link from "next/link";

export default async function page({ params }) {
  const kads = await KadunaTable.findOne({ _id: params.id });

  {/**const componentRef = useRef();
  const handlePrint = () => {
    window.print();
  }; */}
  
  return (
    <section className=" detalsPage">
      <div className="container">
        <div className=" d-flex justify-content-end p-2">
         {/** <ReactToPrint
            trigger={() => (
              <button onClick={handlePrint} className=" btn btn-primary">
                Print
              </button>
            )}
            content={() => componentRef.current}
          /> */}
        </div>

        <div className="row row1  ">
          <div className="col-lg-12 col-12 p-2 ">
            <div className="card p-2  ">
              <div className="d-flex flex1  p-2 justify-content-between">
                <div className="">
                  <img src="/siwes/logo.png" className=" rounded-2" alt="" />
                </div>
                <div className="mx-2 text-center ">
                  <p className=" text-uppercase">{kads.state}</p>
                </div>
                <div>
                  <img src="/siwes/logo.png" className=" rounded-2" alt="" />
                </div>
              </div>
              <hr />
              <div className="flex2 p-2 text-center">
                <h1 className=" text-uppercase">Computer Science Courses</h1>
              </div>
              <hr />
              <div className=" flex3 p-2 justify-content-center align-items-center text-center">
                <h3 className=" text-uppercase">Image of the Organization</h3>

                <img src={kads.imgUrl} alt="" />
              </div>
              <hr />
              <div className=" flex4 text-start p-2">
                <h1 className=" text-uppercase">What we do offer</h1>
                <hr />

                <p>{kads.desc}</p>
                <p>
                  To see more details about our Organization, visit our website
                  link <Link href={"/"}>ktc.com</Link>. Thank You.
                </p>
              </div>
              <div className="d-flex flex5 p-2 justify-content-center">
                <div className="col-lg-12 col-12  ">
                  <div className="card">
                    <h2 className=" text-uppercase text-center mt-2">
                      About the Organization
                    </h2>
                    <hr />
                    <div className="card-body">
                      <h5>
                        <strong>Founder Name: </strong>
                        {kads.fname}
                      </h5>
                      <p>
                        <strong>Organzation Name: </strong>
                        {kads.orgName}
                      </p>
                      <p>
                        <strong>State: </strong> {kads.state}
                      </p>
                      <p>
                        <strong>LGA: </strong> {kads.lgas}
                      </p>
                      <p>
                        <strong>Faculty: </strong> {kads.fscience}
                      </p>
                      <p>
                        <strong>Department: </strong> {kads.department}
                      </p>
                      <p>
                        <strong>Address: </strong> {kads.address}
                      </p>
                      <p>
                        <strong>Email: </strong> {kads.email}
                      </p>
                      <p>
                        <strong>Contact Number: </strong> {kads.contact}
                      </p>
                      <p>
                        <strong>Secretory Number: </strong> {kads.secNum}
                      </p>
                      <p>
                        <strong>Github Link: </strong> {kads.github}
                      </p>
                      <p>
                        <strong>Website URL: </strong> {kads.weburl}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
