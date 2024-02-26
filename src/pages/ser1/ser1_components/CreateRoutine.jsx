import "bootstrap/dist/css/bootstrap.css";
import "../../../assets/stylesheets/ser1-style.css";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import RoutineTable from "./RoutineTable";
import RoutineFunction from "./RoutineFunction";
import Download from "./../../../assets/components/Download";

const CreateRoutine = () => {
  const pdfRef = useRef();
  const {
    formData,
    handleInputChange,
    handleYearChange,
    generateRow,
    handleSubmit,
    handlebatchRow,
  } = RoutineFunction();

  const [routine, setRoutine] = useState([]);
  const [yearTerms, setYearTerms] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const { routine: locationRoutine, yearTerms: locationYearTerms } =
      location.state || {};
    setRoutine(locationRoutine);
    setYearTerms(locationYearTerms);
  }, []);

  const [routineError, setRoutineError] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [senderName, setSenderName] = useState("");
  const [routineData, setRoutineData] = useState(null);

  const generateRoutine = async (e) => {
    try {
      // Display an alert to confirm before proceeding
      const shouldGenerate = window.confirm(
        "Are you sure you want to generate a random routine?"
      );

      if (!shouldGenerate) {
        // If the user clicks "Cancel" in the alert, do nothing
        return;
      }

      setLoading(true);
      e.preventDefault();

      console.log(formData);

      const response = await fetch(
        "http://localhost:5000/generateRandomRoutine",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            year: formData.examYear,
            semester: formData.semester,
            classStartDate: formData.startDate,
            routineDetails: formData.routineDetails,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      const d = await response.json();
      if (d.success) {
        const data = d.data;
        console.log(data);
        setRoutineData(data);
        setRoutine(data.overall);
        setYearTerms(data.yearTerm);
        setRoutineError("");
      } else {
        setRoutineError(d.error);
      }
      // setErrorMessage("");
    } catch (error) {
      // setErrorMessage(error.message);
      console.error("Error creating exam routine:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const teacher = JSON.parse(localStorage.getItem("teacher"));
    const name = `${teacher.firstName} ${teacher.lastName}`;
    console.log(name);
    setSenderName(name);
  }, []);

  let serviceId = null;
  const handleSubmitForApproval = async (event) => {

    try {
      // Display an alert to confirm before proceeding
      const shouldGenerate = window.confirm(
        "Are you sure you want to submit the routine?"
      );

      if (!shouldGenerate) {
        // If the user clicks "Cancel" in the alert, do nothing
        return;
      }

      setLoading(true);
      event.preventDefault();

      console.log(formData);

      const response = await fetch(
        "http://localhost:5000/generateRandomRoutine/data",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: routineData
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      const d = await response.json();
      if (d.success) {
        const data = d.data;
        serviceId = data._id;
        console.log(data);
        setRoutineError("");
        console.log(serviceId);
        setServiceName('Theory Class Routine');
      } else {
        setRoutineError(d.error);
      }
      // setErrorMessage("");
    } catch (error) {
      // setErrorMessage(error.message);
      console.error("Error creating exam routine:", error);
    } finally {
      setLoading(false);
    }

    // to save it at pending service
    try {
      // Make a POST request to your endpoint
      const response = await fetch("http://localhost:5000/pendingService", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: serviceId, serviceName, senderName }),
      });

      // Check if request was successful
      if (response.ok) {
        console.log("Service added successfully");
        console.log(response);
      } else {
        console.error("Error adding service");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div>
        <div className="container">
          <h2 className="text-center fs-1">Generate Routine</h2>
          <hr />
        </div>
      </div>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-6">
                {/* exam year */}
                <div className="row">
                  <div className="col-auto ">
                    <label htmlFor="examYear" className="form-label">
                      Exam Year:{" "}
                    </label>
                  </div>
                  <div className="col-auto">
                    <input
                      type="number"
                      id="yearInput"
                      name="examYear"
                      onChange={handleYearChange}
                      placeholder="e.g., 2022"
                      min="2004"
                      required
                      max="2100"
                      className="form-control"
                    />
                    <p
                      className={
                        formData.examYear
                          ? "text-success text-sm"
                          : "text-danger text-sm"
                      }
                    >
                      Selected Year: {formData.examYear || "No year selected"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                {/* semester selection */}
                <div className="row">
                  <div className="col-auto">
                    <label htmlFor="semester">Semester Selection</label>
                  </div>
                  <div className="col-auto">
                    <input
                      type="radio"
                      className="btn-check"
                      id="odd"
                      name="semester"
                      autoComplete="off"
                      required
                      onChange={handleInputChange}
                    />
                    <label className="btn btn-outline-primary" htmlFor="odd">
                      Odd
                    </label>
                    &nbsp; &nbsp;
                    <input
                      type="radio"
                      className="btn-check"
                      id="even"
                      name="semester"
                      autoComplete="off"
                      required
                      onChange={handleInputChange}
                    />
                    <label className="btn btn-outline-primary" htmlFor="even">
                      Even
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="totalBatch" className="form-label">
                    Total Batch
                  </label>
                  <input
                    type="number"
                    name="totalBatch"
                    min="0"
                    className="form-control w-75"
                    onChange={handlebatchRow}
                    required
                  />
                </div>
              </div>
              <div className="col-6">
                {/* Start date */}
                <div className="row mt-3">
                  <div className="col-auto">
                    <label htmlFor="startDate" className="form-label">
                      Class Start Date{" "}
                    </label>
                  </div>
                  <div className="col-auto">
                    <input
                      type="date"
                      name="startDate"
                      className="form-control"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <table className="mt-3 mb-3 table table-striped">
              <tbody>{generateRow()}</tbody>
            </table>
          </div>

          {/* routine table  */}

          <div className=" mt-3 d-flex justify-content-center">
            <div>
              <div className="row">
                <div className="col-6">
                  <Link to="/routine">
                    <button
                      className="btn btn-success"
                      style={{
                        padding: "7px",
                        width: "32vw",
                        marginRight: "15px",
                      }}
                    >
                      See Final Routine
                    </button>
                  </Link>
                </div>
                <div className="col-6">
                  <button
                    className="btn btn-success"
                    style={{
                      padding: "7px",
                      width: "32vw",
                      marginLeft: "15px",
                    }}
                    onClick={generateRoutine}
                  >
                    Click to Re-order
                  </button>
                </div>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="d-flex justify-content-center mt-4">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div ref={pdfRef}>
              <RoutineTable routineProps={routine} yearTermProps={yearTerms} />
            </div>
          )}
          <div className="mb-3 mt-3 d-flex justify-content-center">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={handleSubmitForApproval}
            >
              Submit for Approval
            </button>
          </div>
          <div>
            <Download pdfRef={pdfRef} fileName={"Proposed-Routine.pdf"} />
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateRoutine;
