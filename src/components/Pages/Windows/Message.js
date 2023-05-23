import "../../Common/common.css";
function Message() {
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
        <hr style={{ "background-color": "#1479ff", opacity: "unset" }} />
        <div className="card mt-2 p-3 shadow-lg">
          <table class="table table-striped table-responsive">
            <thead class="tableBg">
              <tr>
                <th className="m-2" scope="col">
                  SI. No
                </th>
                <th className="m-2" style={{ width: "80%" }}>
                  Header Message
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  Lorem Ipsum Set Del Tor Lorem Ipsum Set Del TorLorem Ipsum Set
                  Del Tor Lorem Ipsum Set Del TorLorem Ipsum Set Del Tor Lorem
                  Ipsum Set Del Tor
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  Lorem Ipsum Set Del Tor Lorem Ipsum Set Del TorLorem Ipsum Set
                  Del Tor Lorem Ipsum Set Del TorLorem Ipsum Set Del Tor Lorem
                  Ipsum Set Del Tor
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  Lorem Ipsum Set Del Tor Lorem Ipsum Set Del TorLorem Ipsum Set
                  Del Tor Lorem Ipsum Set Del TorLorem Ipsum Set Del Tor Lorem
                  Ipsum Set Del Tor
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  Lorem Ipsum Set Del Tor Lorem Ipsum Set Del TorLorem Ipsum Set
                  Del Tor Lorem Ipsum Set Del TorLorem Ipsum Set Del Tor Lorem
                  Ipsum Set Del Tor
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card mt-2 p-3 shadow-lg">
          <table class="table table-striped table-responsive">
            <thead class="tableBg">
              <tr>
                <th className="m-2" scope="col">
                  SI. No
                </th>
                <th className="m-2" style={{ width: "80%" }}>
                  Footer Message
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  Lorem Ipsum Set Del Tor Lorem Ipsum Set Del TorLorem Ipsum Set
                  Del Tor Lorem Ipsum Set Del TorLorem Ipsum Set Del Tor Lorem
                  Ipsum Set Del Tor
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  Lorem Ipsum Set Del Tor Lorem Ipsum Set Del TorLorem Ipsum Set
                  Del Tor Lorem Ipsum Set Del TorLorem Ipsum Set Del Tor Lorem
                  Ipsum Set Del Tor
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  Lorem Ipsum Set Del Tor Lorem Ipsum Set Del TorLorem Ipsum Set
                  Del Tor Lorem Ipsum Set Del TorLorem Ipsum Set Del Tor Lorem
                  Ipsum Set Del Tor
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  Lorem Ipsum Set Del Tor Lorem Ipsum Set Del TorLorem Ipsum Set
                  Del Tor Lorem Ipsum Set Del TorLorem Ipsum Set Del Tor Lorem
                  Ipsum Set Del Tor
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card mt-2 p-3 shadow-lg">
          <div className="row container ">
            <div className="col-lg-3">
              <span>Consider Empty Rows</span>
            </div>
            <div className="col-lg-3">
              <select class="classic form-control">
                <option>CSS </option>
                <option>No external background image</option>
                <option>No wrapper</option>
              </select>{" "}
            </div>
            <div className="col-lg-3">
              <span> Detail Section Row Count </span>
            </div>
            <div className="col-lg-3">
              <input
                type={"text"}
                className="bg-light form-control "
                placeholder="Lorem Ipsum Set Del Tor"
              />
            </div>
          </div>
          <div className="row container mt-4 ">
            <div className="col-lg-3">
              <span>Include Footer Section</span>
            </div>
            <div className="col-lg-3">
              <select class="classic form-control">
                <option>CSS </option>
                <option>No external background image</option>
                <option>No wrapper</option>
              </select>{" "}
            </div>
            <div className="col-lg-3">
              <span> Footer Section Row Count</span>
            </div>
            <div className="col-lg-3">
              <input
                type={"text"}
                className="bg-light form-control "
                placeholder="Lorem Ipsum Set Del Tor"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
