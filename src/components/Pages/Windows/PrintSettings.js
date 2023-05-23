import { Link } from "react-router-dom";
import "../../Common/common.css";

function PrintSettings() {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4 d-flex p-1">
            <svg
              className="m-1"
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.875 6.29334V15.7066L9.625 20.625V1.37497L17.875 6.29334ZM10.3125 0.184215C10.1035 0.0635336 9.86636 0 9.625 0C9.38364 0 9.14653 0.0635336 8.9375 0.184215L0.6875 5.10259C0.478479 5.22327 0.304905 5.39684 0.184224 5.60586C0.0635427 5.81488 6.13143e-06 6.05198 0 6.29334V15.7066C6.13143e-06 15.9479 0.0635427 16.1851 0.184224 16.3941C0.304905 16.6031 0.478479 16.7767 0.6875 16.8973L8.9375 21.8157C9.14653 21.9364 9.38364 21.9999 9.625 21.9999C9.86636 21.9999 10.1035 21.9364 10.3125 21.8157L18.5625 16.8973C18.7715 16.7767 18.9451 16.6031 19.0658 16.3941C19.1865 16.1851 19.25 15.9479 19.25 15.7066V6.29334C19.25 6.05198 19.1865 5.81488 19.0658 5.60586C18.9451 5.39684 18.7715 5.22327 18.5625 5.10259L10.3125 0.184215Z"
                fill="#193B68"
              />
            </svg>
            <span className="PrintSettingsText m-1">Module Name</span>
            <select
              class="form-select form-select-sm  w-50 m-1"
              aria-label=".form-select-sm example"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="col-lg-4 d-flex p-1">
            <svg
              className="m-1"
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.125 7C14.725 7 13.625 5.9 13.625 4.5V1C13.625 0.4 13.225 0 12.625 0H4.625C2.425 0 0.625 1.8 0.625 4V18C0.625 20.2 2.425 22 4.625 22H16.625C18.825 22 20.625 20.2 20.625 18V8C20.625 7.4 20.225 7 19.625 7H16.125ZM12.625 16H6.625C6.025 16 5.625 15.6 5.625 15C5.625 14.4 6.025 14 6.625 14H12.625C13.225 14 13.625 14.4 13.625 15C13.625 15.6 13.225 16 12.625 16ZM14.625 12H6.625C6.025 12 5.625 11.6 5.625 11C5.625 10.4 6.025 10 6.625 10H14.625C15.225 10 15.625 10.4 15.625 11C15.625 11.6 15.225 12 14.625 12Z"
                fill="#193B68"
              />
            </svg>

            <span className="PrintSettingsText m-1">Paper Format</span>
            <select
              class="form-select form-select-sm w-50 m-1"
              aria-label=".form-select-sm example"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="text-center">
          <Link to={"/"}>+ Add New Setting</Link>
        </div>

        <hr />

        <div className="card p-3 shadow-lg">
          <div className="row">
            <div className="col-lg-4 d-flex  text-start">
              <div className="col-6">
                <span className="setGtext">Paper Height (inch)</span>
              </div>
              <div className="col-6 d-flex py-2">
              <select class="classic form-control bg-light" style={{"width":"85%"}}>
                <option>CSS </option>
                <option>No external background image</option>
                <option>No wrapper</option>
              </select>{" "}
              </div>
            </div>
            <div className="col-lg-4 d-flex text-start">
              <div className="col-6">
                <span className="setGtext">Paper Height (inch)</span>
              </div>
              <div className="col-6 d-flex py-2">
                <button className="theme-color-bg border-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM12 8.8H8.8V12H7.2V8.8H4V7.2H7.2V4H8.8V7.2H12V8.8Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <input
                  type="email"
                  class="form-control-sm border-0 bg-light"
                  style={{ width: "50%" }}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="34"
                />
                <button className="theme-color-bg border-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_138)">
                      <path
                        d="M8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16ZM12 7.2H4V8.8H12V7.2Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_138">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
            <div className="col-lg-4 d-flex text-start">
              <div className="col-6">
                <span className="setGtext">Paper Height (inch)</span>
              </div>
              <div className="col-6 d-flex py-2">
                <button className="bg-primary border-0 text-white">
                Lorem
                </button>
            
                <button className="bg-light border-0 mx-3 ">
                  Ipsum
                </button>
              </div>
            </div>
         
          </div>
          <div className="row">
            <div className="col-lg-4 d-flex text-start">
              <div className="col-6">
                <span className="setGtext">Paper Height (inch)</span>
              </div>
              <div className="col-6 d-flex py-2">
                <button className="theme-color-bg border-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM12 8.8H8.8V12H7.2V8.8H4V7.2H7.2V4H8.8V7.2H12V8.8Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <input
                  type="email"
                  class="form-control-sm border-0 bg-light"
                  style={{ width: "50%" }}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="34"
                />
                <button className="theme-color-bg border-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_138)">
                      <path
                        d="M8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16ZM12 7.2H4V8.8H12V7.2Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_138">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
            <div className="col-lg-4 d-flex text-start">
              <div className="col-6">
                <span className="setGtext">Paper Height (inch)</span>
              </div>
              <div className="col-6 d-flex py-2">
                <button className="theme-color-bg border-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM12 8.8H8.8V12H7.2V8.8H4V7.2H7.2V4H8.8V7.2H12V8.8Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <input
                  type="email"
                  class="form-control-sm border-0 bg-light"
                  style={{ width: "50%" }}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="34"
                />
                <button className="theme-color-bg border-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_138)">
                      <path
                        d="M8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16ZM12 7.2H4V8.8H12V7.2Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_138">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
            <div className="col-lg-4 d-flex text-start">
              <div className="col-6">
                <span className="setGtext">Order By </span>
              </div>
              <div className="col-6 d-flex py-2">
                <button className="border-0 bg-success text-white " style={{"width":"80%"}}>
                
                Select Order By
                </button>
              </div>
            </div>
          
          </div>
          <div className="row">
            <div className="col-lg-4 d-flex text-start">
              <div className="col-6">
                <span className="setGtext">Paper Height (inch)</span>
              </div>
              <div className="col-6 d-flex py-2">
                <button className="theme-color-bg border-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM12 8.8H8.8V12H7.2V8.8H4V7.2H7.2V4H8.8V7.2H12V8.8Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <input
                  type="email"
                  class="form-control-sm border-0 bg-light"
                  style={{ width: "50%" }}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="34"
                />
                <button className="theme-color-bg border-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_138)">
                      <path
                        d="M8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16ZM12 7.2H4V8.8H12V7.2Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_138">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
            <div className="col-lg-4 d-flex text-start">
              <div className="col-6">
                <span className="setGtext">Paper Height (inch)</span>
              </div>
              <div className="col-6 d-flex py-2">
                <button className="theme-color-bg border-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM12 8.8H8.8V12H7.2V8.8H4V7.2H7.2V4H8.8V7.2H12V8.8Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <input
                  type="email"
                  class="form-control-sm border-0 bg-light"
                  style={{ width: "50%" }}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="34"
                />
                <button className="theme-color-bg border-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_138)">
                      <path
                        d="M8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16ZM12 7.2H4V8.8H12V7.2Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_138">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
            <div className="col-lg-4 d-flex text-start">
              <div className="col-6">
                <span className="setGtext">Free Indicating Cols</span>
              </div>
              <div className="col-6 d-flex py-2">
              <button className="border-0 bg-primary text-white " style={{"width":"80%"}}>
                
                Select Order By
                </button>
              </div>
            </div>
         
          </div>
          <div className="row">
            <div className="col-lg-4 d-flex text-start">
              <div className="col-6">
                <span className="setGtext">Paper Orientation</span>
              </div>
              <div className="col-6 d-flex py-2">
              <select class="classic form-control bg-light" style={{"width":"85%"}}>
                <option>CSS </option>
                <option>No external background image</option>
                <option>No wrapper</option>
              </select>{" "}
              </div>
            </div>
            <div className="col-lg-4 d-flex text-start">
              <div className="col-6">
                <span className="setGtext">Paper Height (inch)</span>
              </div>
              <div className="col-6 d-flex py-2">
                <button className="theme-color-bg border-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM12 8.8H8.8V12H7.2V8.8H4V7.2H7.2V4H8.8V7.2H12V8.8Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <input
                  type="email"
                  class="form-control-sm border-0 bg-light"
                  style={{ width: "50%" }}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="34"
                />
                <button className="theme-color-bg border-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_138)">
                      <path
                        d="M8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16ZM12 7.2H4V8.8H12V7.2Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_138">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
            <div className="col-lg-4 d-flex text-start">
              <div className="col-6">
                <span className="setGtext">Paper Height (inch)</span>
              </div>
              <div className="col-6 d-flex py-2">
              <button className="border-0 bg-primary text-white " style={{"width":"80%"}}>
                
              Blank Cols for Free                </button>
              </div>
            </div>
          
          </div>

          <div className="row">
            <div className="col-lg-4 d-flex  text-start">
              <div className="col-6">
                <span className="setGtext">Paper Height (inch)</span>
              </div>
              <div className="col-6 d-flex py-2">
              <select class="classic form-control bg-light" style={{"width":"85%"}}>
                <option>CSS </option>
                <option>No external background image</option>
                <option>No wrapper</option>
              </select>{" "}
              </div>
            </div>
            <div className="col-lg-4 d-flex text-start">
              <div className="col-6">
                <span className="setGtext">Paper Height (inch)</span>
              </div>
              <div className="col-6 d-flex py-2">
              <select class="classic form-control bg-light" style={{"width":"85%"}}>
                <option>CSS </option>
                <option>No external background image</option>
                <option>No wrapper</option>
              </select>{" "}
              </div>
            </div>
            <div className="col-lg-4 d-flex text-start">
              <div className="col-6">
                <span className="setGtext">Paper Height (inch)</span>
              </div>
              <div className="col-6 d-flex py-2">
                <button className="bg-primary border-0 text-white">
                Lorem
                </button>
            
                <button className="bg-light border-0 mx-3 ">
                  Ipsum
                </button>
              </div>
            </div>
         
          </div>

          <div className="row">
            <div className="col-lg-4 d-flex  text-start">
              <div className="col-6">
                <span className="setGtext">Paper Height (inch)</span>
              </div>
              <div className="col-6 d-flex py-2">
              <select class="classic form-control bg-light" style={{"width":"85%"}}>
                <option>CSS </option>
                <option>No external background image</option>
                <option>No wrapper</option>
              </select>{" "}
              </div>
            </div>
            <div className="col-lg-4 d-flex text-start">
              <div className="col-6">
                <span className="setGtext">Paper Height (inch)</span>
              </div>
              <div className="col-6 d-flex py-2">
              <select class="classic form-control bg-light" style={{"width":"85%"}}>
                <option>CSS </option>
                <option>No external background image</option>
                <option>No wrapper</option>
              </select>{" "}
              </div>
            </div>
            <div className="col-lg-4 d-flex text-start">
              <div className="col-6">
                <span className="setGtext">Paper Height (inch)</span>
              </div>
              <div className="col-6 d-flex py-2">
                <button className="bg-primary border-0 text-white">
                Lorem
                </button>
            
                <button className="bg-light border-0 mx-3 ">
                  Ipsum
                </button>
              </div>
            </div>
         
          </div>

          <div className="d-flex mt-3">
            <hr style={{ width: "30%" }} />
            <span
              style={{
                "font-size": "15px",
                "font-weight": "bold",
                "padding-left": "0.5rem",
              }}
            >
              Total Page Height <span className="text-success">1000 mm</span>
            </span>
            <span
              style={{
                "font-size": "15px",
                "font-weight": "bold",
                "padding-left": "1rem",
                "padding-right": "0.5rem",
              }}
            >
              Total Page Width <span className="text-success">700 mm</span>
            </span>

            <hr style={{ width: "30%" }} />
          </div>
        </div>

        <div className="card mt-2 p-3 shadow-lg">
          <div className="row">
            <div className="col-lg-3 text-start">
              <span> Select the Columns to Order </span>
              <div
                className="bg-light border-rounded text-start  p-1"
                style={{ "max-height": "30vh", "overflow-y": "scroll" }}
              >
                <span className="p-2 fontSize">Abatement</span>
                <hr style={{ color: "white", margin: "0" }} />
                <span className="p-2 fontSize">Adjusted DC Number</span>
                <hr style={{ color: "white", margin: "0" }} />
                <span className="p-2 fontSize">Adjusted DC Value</span>
                <hr style={{ color: "white", margin: "0" }} />
                <span className="p-2 fontSize">Barcode</span>
                <hr style={{ color: "white", margin: "0" }} />
                <span className="p-2 fontSize">Already Printed</span>
                <hr style={{ color: "white", margin: "0" }} />
                <span className="p-2 fontSize">Barcode Description</span>
                <hr style={{ color: "white", margin: "0" }} />
                <span className="p-2 fontSize">Batch Description</span>
                <hr style={{ color: "white", margin: "0" }} />
                <span className="p-2 fontSize">Batch Description</span>
                <hr style={{ color: "white", margin: "0" }} />
                <span className="p-2 fontSize">Batch Description</span>
                <hr style={{ color: "white", margin: "0" }} />
                <span className="p-2 fontSize">Batch Description</span>
                <hr style={{ color: "white", margin: "0" }} />
              </div>
            </div>
            <div className="col-lg-1 align-items-center mt-5">
              <svg
                width="30"
                height="30"
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M39.6277 0H9.37235C8.23715 0 7.11307 0.223594 6.06429 0.658015C5.0155 1.09244 4.06255 1.72918 3.25985 2.53188C2.45714 3.33459 1.8204 4.28754 1.38598 5.33632C0.951561 6.38511 0.727966 7.50919 0.727966 8.64439V38.8997C0.727966 40.0349 0.951561 41.159 1.38598 42.2078C1.8204 43.2566 2.45714 44.2095 3.25985 45.0122C4.06255 45.8149 5.0155 46.4517 6.06429 46.8861C7.11307 47.3205 8.23715 47.5441 9.37235 47.5441H39.6277C41.9203 47.5441 44.1191 46.6334 45.7402 45.0122C47.3613 43.3911 48.2721 41.1924 48.2721 38.8997V8.64439C48.2721 6.35175 47.3613 4.15302 45.7402 2.53188C44.1191 0.910745 41.9203 0 39.6277 0ZM21.4434 32.9403L18.3867 29.8836L24.5 23.7721L18.3867 17.6605L21.4434 14.6038L30.6064 23.7669L21.4434 32.9403Z"
                  fill="#1479FF"
                />
              </svg>
              <br />
              <svg
              className="mt-1"
                width="30"
                height="30"
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.37218 48L39.6275 48C40.7627 48 41.8868 47.7764 42.9356 47.342C43.9844 46.9076 44.9373 46.2708 45.74 45.4681C46.5427 44.6654 47.1795 43.7125 47.6139 42.6637C48.0483 41.6149 48.2719 40.4908 48.2719 39.3556L48.2719 9.10027C48.2719 7.96507 48.0483 6.84099 47.6139 5.79221C47.1795 4.74342 46.5427 3.79047 45.74 2.98776C44.9373 2.18506 43.9844 1.54832 42.9356 1.1139C41.8868 0.679478 40.7627 0.455884 39.6275 0.455884L9.37218 0.455886C7.07954 0.455887 4.88081 1.36663 3.25967 2.98777C1.63853 4.60891 0.727791 6.80764 0.727791 9.10027L0.727794 39.3556C0.727794 41.6483 1.63854 43.847 3.25967 45.4681C4.88081 47.0893 7.07955 48 9.37218 48ZM27.5565 15.0597L30.6132 18.1164L24.4999 24.2279L30.6132 30.3395L27.5565 33.3962L18.3935 24.2331L27.5565 15.0597Z"
                  fill="#1479FF"
                />
              </svg>
            </div>
            <div className="col-lg-6 ">
              <div
                className="bg-light border-rounded text-start  p-1 mt-3"
                style={{
                  "min-height": "30vh",
                  "max-height": "30vh",
                  "overflow-y": "scroll",
                }}
              >
                <div className="d-flex">
                  <span className="p-2 fontSize">Abatement</span>
                  <select class="classic form-control" style={{ width: "30%" }}>
                    <option>CSS </option>
                    <option>No external background image</option>
                    <option>No wrapper</option>
                  </select>{" "}
                </div>

                <hr style={{ color: "white", margin: "0" }} />
              </div>
            </div>
            <div className="col-lg-1 align-items-center mt-5">
              <svg
                width="30"
                height="30"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M-1.70036e-06 8.64446L-3.77858e-07 38.8998C-3.28237e-07 40.035 0.223593 41.1591 0.658014 42.2079C1.09244 43.2567 1.72918 44.2096 2.53188 45.0123C3.33459 45.815 4.28754 46.4518 5.33632 46.8862C6.38511 47.3206 7.50919 47.5442 8.64439 47.5442L38.8997 47.5442C40.0349 47.5442 41.159 47.3206 42.2078 46.8862C43.2566 46.4518 44.2095 45.815 45.0122 45.0123C45.8149 44.2096 46.4517 43.2567 46.8861 42.2079C47.3205 41.1591 47.5441 40.035 47.5441 38.8998L47.5441 8.64446C47.5441 6.35182 46.6334 4.15309 45.0122 2.53195C43.3911 0.910814 41.1924 7.06787e-05 38.8997 7.07789e-05L8.64438 7.21014e-05C6.35175 7.22016e-05 4.15302 0.910816 2.53188 2.53195C0.910743 4.15309 -1.80058e-06 6.35183 -1.70036e-06 8.64446ZM32.9403 26.8288L29.8836 29.8854L23.7721 23.7721L17.6605 29.8854L14.6038 26.8288L23.7669 17.6657L32.9403 26.8288Z"
                  fill="#1479FF"
                />
              </svg>
              <br  />
              <svg
              className="mt-1"
                width="30"
                height="30"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M47.5439 39.3555L47.5439 9.1002C47.5439 7.965 47.3204 6.84092 46.8859 5.79213C46.4515 4.74335 45.8148 3.7904 45.0121 2.98769C44.2094 2.18499 43.2564 1.54825 42.2076 1.11383C41.1588 0.679405 40.0348 0.45581 38.8996 0.45581L8.64421 0.455809C7.50902 0.455809 6.38494 0.679404 5.33615 1.11382C4.28736 1.54825 3.33442 2.18498 2.53171 2.98769C1.729 3.79039 1.09227 4.74335 0.657844 5.79213C0.223423 6.84092 -0.00017199 7.965 -0.000172039 9.10019L-0.000173362 39.3555C-0.000173462 41.6482 0.91057 43.8469 2.53171 45.468C4.15285 47.0892 6.35158 47.9999 8.64421 47.9999L38.8996 47.9999C41.1922 47.9999 43.3909 47.0892 45.0121 45.468C46.6332 43.8469 47.5439 41.6482 47.5439 39.3555ZM14.6037 21.1712L17.6603 18.1146L23.7719 24.2279L29.8835 18.1146L32.9401 21.1712L23.7771 30.3343L14.6037 21.1712Z"
                  fill="#1479FF"
                />
              </svg>
              <br  />
              <svg
              className="mt-1"
                width="30"
                height="30"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M39.2727 0H8.72727C6.41266 0 4.19284 0.919478 2.55616 2.55616C0.919477 4.19284 0 6.41266 0 8.72727V39.2727C0 41.5873 0.919477 43.8072 2.55616 45.4438C4.19284 47.0805 6.41266 48 8.72727 48H39.2727C41.5873 48 43.8072 47.0805 45.4438 45.4438C47.0805 43.8072 48 41.5873 48 39.2727V8.72727C48 7.58119 47.7743 6.44633 47.3357 5.38749C46.8971 4.32865 46.2542 3.36656 45.4438 2.55616C44.6334 1.74576 43.6713 1.10291 42.6125 0.664324C41.5537 0.225738 40.4188 0 39.2727 0ZM32.3869 20.5143L23.8342 30.7846C23.7343 30.9048 23.6233 31.0153 23.5026 31.1145C23.2437 31.3297 22.945 31.4918 22.6234 31.5916C22.3019 31.6913 21.9639 31.7267 21.6287 31.6957C21.2935 31.6648 20.9676 31.5681 20.6698 31.4111C20.372 31.2542 20.108 31.0401 19.8929 30.7811L15.6061 25.646C15.3904 25.3871 15.2278 25.0882 15.1276 24.7665C15.0274 24.4447 14.9916 24.1064 15.0221 23.7708C15.0527 23.4353 15.149 23.109 15.3057 22.8106C15.4623 22.5123 15.6762 22.2477 15.9351 22.032C16.194 21.8163 16.4929 21.6537 16.8146 21.5535C17.1363 21.4533 17.4747 21.4175 17.8103 21.448C18.1458 21.4786 18.4721 21.5749 18.7705 21.7316C19.0688 21.8882 19.3334 22.1021 19.5491 22.361L21.8566 25.1276L28.4509 17.2241V17.2154C28.6666 16.9531 28.9322 16.7361 29.2323 16.5771C29.5325 16.4181 29.8611 16.3202 30.1994 16.2892C30.5376 16.2581 30.8786 16.2944 31.2027 16.3961C31.5268 16.4977 31.8274 16.6626 32.0873 16.8813C32.3472 17.1 32.5611 17.368 32.7167 17.67C32.8723 17.9719 32.9664 18.3017 32.9936 18.6402C33.0208 18.9788 32.9806 19.3194 32.8752 19.6423C32.7699 19.9651 32.6015 20.2639 32.3799 20.5213L32.3869 20.5143Z"
                  fill="#1ABE21"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PrintSettings;
