import { Link } from "react-router-dom";

function Selection() {
  return (
    <>
      <div className="container mt-5">
        <div className="header theme-color-bg text-white selection-type">
          <h2>Select Printer Type</h2>
        </div>
        <div className="w-100 d-flex">
          <div className="w-50">
            <Link to={"/Dossettings"} className="type-title">
              <div className="selection d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
                <div>
                  <svg
                    class="svg-class"
                    width="123"
                    height="104"
                    viewBox="0 0 123 104"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_1489)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.47 0H117.4C120.41 0 122.87 2.46 122.87 5.47V98.05C122.87 101.06 120.41 103.52 117.4 103.52H5.47C2.46 103.52 0 101.06 0 98.05V5.47C0 2.46 2.46 0 5.47 0ZM31.84 38.55L49.63 56.97L51.77 59.1L49.65 61.26L31.68 80.31L26.61 75.31L42.46 59.16L26.81 43.6L31.84 38.55ZM94.1 79.41H54.69V72.57H94.1V79.41ZM38.19 9.83C41.38 9.83 43.97 12.42 43.97 15.61C43.97 18.8 41.38 21.39 38.19 21.39C35 21.39 32.41 18.8 32.41 15.61C32.41 12.42 35 9.83 38.19 9.83ZM18.95 9.83C22.14 9.83 24.73 12.42 24.73 15.61C24.73 18.8 22.14 21.39 18.95 21.39C15.76 21.39 13.17 18.8 13.17 15.61C13.17 12.42 15.75 9.83 18.95 9.83ZM7.49 5.41H115.4C116.55 5.41 117.49 6.35 117.49 7.5V25.82H5.4V7.5C5.4 6.35 6.34 5.41 7.49 5.41Z"
                        fill="#1479FF"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_1489">
                        <rect width="122.88" height="103.53" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <h4 className="mt-5">MS Dos Printer</h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-50">
            <Link to={"/windowsettings"} className="type-title">
              <div className="selection d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
                <div>
                  <svg
                    class="svg-class"
                    width="123"
                    height="120"
                    viewBox="0 0 123 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_1492)">
                      <path
                        d="M25.25 0H97.62C104.57 0 110.88 2.84 115.46 7.42C120.04 12 122.88 18.31 122.88 25.26V94.34C122.88 101.29 120.04 107.6 115.46 112.18C110.88 116.76 104.57 119.6 97.62 119.6H25.25C18.3 119.6 11.99 116.76 7.41 112.18C2.84 107.6 0 101.29 0 94.34V25.26C0 18.31 2.84 12 7.42 7.42C11.99 2.84 18.31 0 25.25 0ZM36.79 49.51L36.77 33.47L56.51 30.79V49.51H36.79ZM59.8 30.31L86.11 26.48V49.51H59.8V30.31ZM86.11 52.8L86.1 75.83L59.79 72.13V52.8H86.11ZM56.51 71.7L36.79 69V52.8H56.51V71.7ZM98.33 100.22L99.66 100.13C104.49 99.65 108.84 97.47 112.1 94.21C114.62 91.69 116.5 88.51 117.44 84.97V25.26C117.44 19.81 115.21 14.86 111.62 11.27C108.03 7.68 103.07 5.45 97.63 5.45H25.25C19.8 5.45 14.85 7.68 11.26 11.27C7.67 14.86 5.44 19.82 5.44 25.26V84.98C6.38 88.52 8.26 91.69 10.78 94.21C14.5 97.93 19.62 100.23 25.26 100.23H97.63C97.86 100.23 98.1 100.23 98.33 100.22Z"
                        fill="#1479FF"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_1492">
                        <rect width="122.88" height="119.59" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <h4 className="mt-5">Windows Printer</h4>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Selection;
