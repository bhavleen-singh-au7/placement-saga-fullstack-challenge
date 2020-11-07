import React from "react";
import Navbar from "../components/Navbar";

const Main = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: "#f5f5f5" }}>
        <h1 className="pt-4 text-center">
          Online Compiler
        </h1>
        <h3 className="text-center my-2">
          Made By Creative Singh
        </h3>
        <div className="container">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Choose Language
            </button>
            <div
              className="dropdown-menu"
              aria-labelledby="dropdownMenuButton"
            >
              <a className="dropdown-item">Python</a>
              <a className="dropdown-item">C++</a>
              <a className="dropdown-item">Java</a>
            </div>
          </div>

          <div className="container mt-2">
            <div className="row">
              <div className="col-sm-8 py-2">
                <div>
                  <label
                    for="exampleFormControlTextarea1"
                    className="font-weight-bold"
                  >
                    Type Code Here:
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="15"
                  ></textarea>
                </div>
              </div>
              <div className="col-sm-4 py-2">
                <div>
                  <label
                    for="exampleFormControlTextarea1"
                    className="font-weight-bold"
                  >
                    Input:
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                  ></textarea>
                </div>
                <div>
                  <label
                    for="exampleFormControlTextarea1"
                    className="font-weight-bold"
                  >
                    Output:
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="8"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="pb-2">
              <button
                type="button"
                className="btn btn-primary mx-4"
                onClick={handleSubmit}
              >
                Build and Run
              </button>

              <button type="button" className="btn btn-danger">
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
