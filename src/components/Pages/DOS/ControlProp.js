import "../../Common/common.css";

function ControlProp({
  captionText,
  handleCaptionChange,
  hasDropped,
  handleRangeChange,
  lineCharecter,
  setAlignment,
  alignment,
  handleAlignment,
}) {
  return (
    <>
      <div>
        <div className="row  m-3 align-items-center">
          <div className="col-lg-3">
            <span>Text</span>
          </div>
          <div className="col-lg-9">
            <input
              disabled={!hasDropped ? true : false}
              type={"text"}
              className="form-control bg-light w-100"
              value={captionText}
              onChange={handleCaptionChange}
              maxLength={lineCharecter}
            />
          </div>
        </div>
        <div className="row  m-3 align-items-center">
          <div className="col-lg-3">
            <span>Field</span>
          </div>
          <div className="col-lg-9">
            <select class="classic form-control">
              <option>CSS </option>
              <option>No external background image</option>
              <option>No wrapper</option>
            </select>{" "}
          </div>
        </div>
        <div className="row  m-3 align-items-center">
          <div className="col-lg-3">
            <span>Max Size</span>
          </div>
          <div className="col-lg-9">
            <input type={"text"} className="form-control bg-light w-100" />
          </div>
        </div>

        <div className="row  m-3 align-items-center">
          <div className="col-lg-3">
            <span>Advance</span>
          </div>
          <div className="col-lg-9 d-flex justify-content-between">
            <button className="btn-sm border-0">
              <span className="font-s">In 1</span>
            </button>
            <button className="btn-sm border-0">
              <span className=" font-s">In 2</span>
            </button>
            <button className="btn-sm border-0">
              <span className="font-s">In 3</span>
            </button>
          </div>
        </div>

        <div className="row  m-3 align-items-center">
          <div className="col-lg-3">
            <span style={{ "word-wrap": "unset" }}>Alignment </span>
          </div>
          <div className="col-lg-9 d-flex justify-content-between">
            <button
              className="btn-sm border-0"
              onClick={() => handleAlignment("flex-start")}
              disabled={hasDropped ? false : true}
            >
              <svg
                width="23"
                height="20"
                viewBox="0 0 23 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1.38411C0.109978 1.01919 0.249208 0.67315 0.551647 0.413402C0.891526 0.121403 1.28639 -0.000334881 1.72894 0.00024621C3.02371 0.00160209 4.31849 0.00160209 5.61326 0.00024621C10.8222 0.00024621 16.0313 0.00024621 21.2407 0.00024621C21.9543 0.00024621 22.5004 0.277717 22.8315 0.920404C23.3288 1.88443 22.6704 3.0995 21.5875 3.22124C21.4242 3.24006 21.26 3.24976 21.0956 3.25029C14.6665 3.25165 8.23752 3.25252 1.80849 3.2529C1.07316 3.2529 0.497826 2.98735 0.162043 2.31212C0.0874569 2.16191 0.0529415 1.99252 0 1.83097V1.38411Z"
                  fill="black"
                />
                <path
                  d="M9.72787e-05 12.585C0.0878456 12.2113 0.232051 11.8673 0.524838 11.6006C0.875831 11.281 1.29527 11.1616 1.76033 11.1619C3.25732 11.1619 4.7542 11.1619 6.25099 11.1619C11.2355 11.1619 16.22 11.1619 21.2045 11.1619C21.8643 11.1619 22.4134 11.376 22.76 11.9559C23.4049 13.0344 22.6784 14.3384 21.4007 14.4116C21.3422 14.4148 21.2811 14.4142 21.2211 14.4142C14.7399 14.4142 8.25858 14.4142 1.77729 14.4142C1.05629 14.4142 0.499093 14.1411 0.168574 13.4865C0.0901858 13.3308 0.0547931 13.1538 -0.000488281 12.9865L9.72787e-05 12.585Z"
                  fill="black"
                />
                <path
                  d="M0 7.00683C0.0842384 6.64074 0.222295 6.30196 0.503967 6.03699C0.86783 5.69472 1.30833 5.57822 1.79943 5.57851C6.58912 5.58141 11.3786 5.58199 16.1679 5.58025C16.7292 5.58025 17.2908 5.5695 17.8515 5.58344C18.5588 5.60117 19.0914 5.92338 19.3693 6.57537C19.6348 7.19859 19.5249 7.78723 19.0733 8.29714C18.7173 8.69868 18.2464 8.83349 17.7225 8.8332C14.8339 8.83165 11.9452 8.83165 9.05651 8.8332C6.69929 8.8332 4.3415 8.81286 1.98458 8.8425C0.958507 8.85528 0.197726 8.40668 0 7.40923V7.00683Z"
                  fill="black"
                />
                <path
                  d="M0 18.1631C0.0845309 17.8127 0.214109 17.4838 0.478231 17.2246C0.821034 16.8894 1.24427 16.7441 1.71899 16.7441C5.18485 16.7425 8.65062 16.7425 12.1163 16.7441C13.0347 16.7455 13.6902 17.313 13.8092 18.1747C13.9239 19.0054 13.3386 19.8096 12.5059 19.9552C12.3433 19.9811 12.1788 19.993 12.0142 19.9906C8.61601 19.9927 5.21751 19.9805 1.81931 19.9991C0.826588 20.0046 0.152101 19.3985 0.0257432 18.6434C0.0236958 18.6306 0.00877483 18.6201 0 18.6088V18.1631Z"
                  fill="black"
                />
              </svg> 
            </button>
            <button
              className="btn-sm border-0"
              onClick={() => handleAlignment("center")}
              disabled={hasDropped ? false : true}
            >
              <svg
                width="23"
                height="20"
                viewBox="0 0 23 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1.37218C0.11027 1.01041 0.249201 0.667349 0.55164 0.40984C0.891811 0.120359 1.28639 -0.000329889 1.72922 0.000246193C3.0238 0.00159038 4.31858 0.00159038 5.61355 0.000246193C10.8227 0.000246193 16.0317 0.000246193 21.2406 0.000246193C21.9543 0.000246193 22.5004 0.275325 22.8315 0.912472C23.3288 1.86819 22.6706 3.07278 21.5875 3.19347C21.4242 3.21214 21.26 3.22176 21.0956 3.22227C14.6665 3.22362 8.23751 3.22448 1.80849 3.22486C1.07316 3.22486 0.498112 2.96159 0.162329 2.29219C0.0874501 2.14327 0.0529415 1.97534 0 1.81519V1.37218Z"
                  fill="black"
                />
                <path
                  d="M0.000390059 12.4765C0.0881384 12.1061 0.232336 11.765 0.525123 11.5006C0.876116 11.1838 1.29555 11.0654 1.76091 11.0657C3.25751 11.0657 4.7543 11.0657 6.25129 11.0657C11.2356 11.0657 16.2201 11.0657 21.2048 11.0657C21.8646 11.0657 22.4139 11.278 22.7605 11.8529C23.404 12.9221 22.6789 14.2148 21.401 14.2874C21.3425 14.2906 21.2814 14.29 21.2217 14.29C14.7403 14.29 8.25887 14.29 1.77759 14.29C1.05659 14.29 0.499678 14.0192 0.168867 13.3703C0.0901861 13.2159 0.0547931 13.0405 -0.000488281 12.8746L0.000390059 12.4765Z"
                  fill="black"
                />
                <path
                  d="M1.74536 6.9464C1.82989 6.58347 1.96766 6.24761 2.24962 5.98492C2.61348 5.64561 3.05398 5.5301 3.54479 5.53039C8.33448 5.53327 13.124 5.53385 17.9133 5.53212C18.4746 5.53212 19.0362 5.52146 19.5972 5.53529C20.3041 5.55286 20.8368 5.8723 21.1149 6.51866C21.3802 7.13651 21.2702 7.72008 20.8186 8.22559C20.4629 8.62366 19.9917 8.75731 19.4679 8.75703C16.5792 8.75549 13.6905 8.75549 10.8019 8.75703C8.44465 8.75703 6.08686 8.73686 3.72994 8.76624C2.70387 8.77892 1.94309 8.33418 1.74536 7.34534V6.9464Z"
                  fill="black"
                />
                <path
                  d="M4.58789 18.0066C4.67271 17.6592 4.80229 17.3331 5.06641 17.0762C5.40951 16.7438 5.83246 16.5998 6.30805 16.5998C9.77391 16.5982 13.2397 16.5982 16.7054 16.5998C17.6238 16.6012 18.2793 17.1638 18.398 18.0181C18.5127 18.8416 17.9277 19.6389 17.095 19.7832C16.9324 19.8089 16.7679 19.8207 16.6033 19.8184C13.2051 19.8204 9.80657 19.8083 6.40837 19.8267C5.41389 19.8322 4.74116 19.2313 4.6148 18.4827C4.61276 18.47 4.59784 18.4597 4.58877 18.4484L4.58789 18.0066Z"
                  fill="black"
                />
              </svg>
            </button>
            <button
              className="btn-sm border-0"
              onClick={() => handleAlignment("flex-end")}
              disabled={hasDropped ? false : true}
            >
              <svg
                width="23"
                height="21"
                viewBox="0 0 23 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1.3934C0.11027 1.02602 0.249201 0.677663 0.55164 0.416173C0.891811 0.122216 1.28639 -0.000338764 1.72923 0.000246224C3.02381 0.0016112 4.31858 0.0016112 5.61355 0.000246224C10.8227 0.000246224 16.0317 0.000246224 21.2406 0.000246224C21.9543 0.000246224 22.5004 0.279578 22.8315 0.926576C23.3288 1.89707 22.6706 3.12028 21.5875 3.24284C21.4242 3.2618 21.26 3.27156 21.0956 3.27209C14.6665 3.27345 8.23752 3.27433 1.80849 3.27472C1.07316 3.27472 0.498112 3.00738 0.162329 2.32762C0.0874501 2.1764 0.0529415 2.00588 0 1.84325V1.3934Z"
                  fill="black"
                />
                <path
                  d="M0.00058556 12.6695C0.0883339 12.2933 0.232532 11.947 0.525319 11.6785C0.876312 11.3567 1.29576 11.2365 1.76082 11.2368C3.25781 11.2368 4.75469 11.2368 6.25148 11.2368C11.236 11.2368 16.2205 11.2368 21.205 11.2368C21.8648 11.2368 22.4141 11.4524 22.7607 12.0362C23.4042 13.1219 22.6788 14.4347 21.4012 14.5084C21.3427 14.5116 21.2816 14.511 21.2216 14.511C14.7405 14.511 8.25925 14.511 1.77777 14.511C1.05678 14.511 0.499867 14.2361 0.169055 13.5771C0.090667 13.4203 0.0552814 13.2422 0 13.0737L0.00058556 12.6695Z"
                  fill="black"
                />
                <path
                  d="M3.48804 7.05378C3.57257 6.68523 3.71063 6.34419 3.9923 6.07743C4.35617 5.73287 4.79665 5.61558 5.28775 5.61587C10.0771 5.6188 14.8666 5.61938 19.6562 5.61763C20.2175 5.61763 20.7791 5.60681 21.3398 5.62085C22.0471 5.63869 22.5797 5.96307 22.8576 6.61942C23.1232 7.24682 23.0132 7.83942 22.5613 8.35274C22.2056 8.75697 21.7347 8.89269 21.2108 8.8924C18.3222 8.89084 15.4335 8.89084 12.5448 8.8924C10.1873 8.8924 7.82982 8.87192 5.4729 8.90176C4.44683 8.91463 3.68606 8.46301 3.48804 7.45888V7.05378Z"
                  fill="black"
                />
                <path
                  d="M9.17627 18.2849C9.2608 17.9322 9.39038 17.6011 9.6545 17.3402C9.99789 17.0026 10.42 16.8564 10.8953 16.8564C14.3609 16.8548 17.8267 16.8548 21.2926 16.8564C22.2113 16.8579 22.8665 17.4291 22.9855 18.2966C23.1002 19.1329 22.5149 19.9425 21.6822 20.089C21.5197 20.1151 21.3553 20.1271 21.1908 20.1247C17.7923 20.1268 14.3938 20.1145 10.9956 20.1332C10.0029 20.1388 9.32836 19.5286 9.20201 18.7684C9.19996 18.7556 9.18504 18.745 9.17627 18.7336V18.2849Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="row  m-3 align-items-center">
          <div className="col-lg-3">
            <span>Format</span>
          </div>
          <div className="col-lg-9">
            <select class="classic form-control">
              <option>CSS </option>
              <option>No external background image</option>
              <option>No wrapper</option>
            </select>{" "}
          </div>
        </div>

        <div className="row  m-3 align-items-center">
          <div className="col-lg-3">
            <span>Line Character</span>
          </div>
          <div className="col-lg-9 d-flex">
            <input
              disabled={hasDropped ? false : true}
              type="range"
              id="customRange1"
              onChange={handleRangeChange}
              value={lineCharecter}
            />
            <button class=" border-0">{lineCharecter}</button>
          </div>
        </div>

        <div className="row  m-3 align-items-center">
          <div className="col-lg-3">
            <span>Length </span>
          </div>
          <div className="col-lg-9 d-flex">
            <input type="range" id="customRange1" />
            <button class=" border-0"> 236</button>
          </div>
        </div>

        <div className="row  m-3 align-items-center">
          <div className="col-lg-3">
            <span>Style </span>
          </div>
          <div className="col-lg-9 d-flex">
            <button className="bg-primary border-0 p-1 m-1 rounded">
              Bold
            </button>
            <button class=" br-primary  border-0 p-1 m-1 rounded">
              {" "}
              Double width
            </button>
          </div>
        </div>

        <div className="row  m-3 align-items-center">
          <div className="col-lg-3">
            <span>CPI </span>
          </div>
          <div className="col-lg-9 d-flex">
            <input type="range" id="customRange1" />
            <button class=" border-0"> 236</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ControlProp;