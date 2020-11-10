import React, { useState } from "react";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";

const Main = () => {
  const [ddlVal, setDdlVal] = useState("");
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!ddlVal) {
      return toast.error("Select a Language");
    }
    if (!code) {
      return toast.error("Write Some Code.");
    }

    return fetch(
      "https://online-singh-ide.herokuapp.com/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          script: code,
          language: ddlVal,
          versionIndex: "0",
        },
      }
    )
      .then((res) => {
        console.log(res);
        setOutput(res);
      })
      .catch((err) => {
        return toast.error(err);
      });
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
            <select
              className="btn btn-secondary dropdown-toggle text-light"
              onChange={(e) => setDdlVal(e.target.value)}
            >
              <option value="">Choose Language</option>
              <option value="python3">Python</option>
              <option value="cpp">C++</option>
              <option value="java">Java</option>
            </select>
          </div>

          <div className="container mt-2">
            <div className="row">
              <div className="col-sm-8 py-2">
                <div>
                  <label
                    htmlFor="codeEditor"
                    className="font-weight-bold"
                  >
                    Type Code Here:
                  </label>
                  <textarea
                    onChange={(e) =>
                      setCode(e.target.value)
                    }
                    value={code}
                    className="form-control"
                    id="codeEditor"
                    rows="15"
                  ></textarea>
                </div>
              </div>
              <div className="col-sm-4 py-2">
                <div>
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="font-weight-bold"
                  >
                    Input:
                  </label>
                  <textarea
                    onChange={(e) =>
                      setInput(e.target.value)
                    }
                    value={input}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                  ></textarea>
                </div>
                <div>
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="font-weight-bold"
                  >
                    Output:
                  </label>
                  <textarea
                    onChange={(e) =>
                      setOutput(e.target.value)
                    }
                    value={output}
                    readOnly
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

              <button
                type="button"
                className="btn btn-danger"
              >
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
