import { Link } from "react-router-dom";
import "../../Common/common.css";
import Table from "./Common/Table";
import DescriptionIcon from "@mui/icons-material/Description";
import SettingsIcon from "@mui/icons-material/Settings";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import Select from "./Common/Select";
import PlusMinusAdjuster from "./Common/PlusMinusAdjuster";

function PrintSettings() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 d-flex p-1 my-1 align-items-center justify-content-center">
            <ViewModuleIcon fontSize="large"/>
            <span className="PrintSettingsText m-2">Module Name</span>
            <Select />
          </div>
          <div className="col-lg-4 d-flex p-1 my-1 align-items-center justify-content-center">
            <SettingsIcon fontSize="large"/>
            <span className="PrintSettingsText m-2">Setting Name</span>
            <Select />
          </div>
          <div className="col-lg-4 d-flex p-1 my-1 align-items-center justify-content-center">
            <DescriptionIcon fontSize="large"/>
            <span className="PrintSettingsText m-2">Paper Format</span>
            <Select />
          </div>
        </div>
        <div className="text-center">
          <Link to={"/"}>+ Add New Setting</Link>
        </div>

        <hr />

        <div className="card p-3 shadow-lg">
          <div className="row">
            <div className="col-md-3">
              <div className="d-flex justify-content-between adjustor">
                <div className="setGtext">Paper Height (inch)</div>
                <div className="col-6 d-flex py-2">
                  <PlusMinusAdjuster />
                </div>
              </div>
              <div className="d-flex justify-content-between adjustor">
                <div className="setGtext">Paper Width (inch)</div>
                <div className="col-6 d-flex py-2">
                  <PlusMinusAdjuster />
                </div>
              </div>
              <div className="d-flex justify-content-between adjustor">
                <div className="setGtext">Character Per inch(CPI)</div>
                <div className="col-6 d-flex py-2">
                  <PlusMinusAdjuster />
                </div>
              </div>
              <div className="d-flex justify-content-between adjustor">
                <div className="setGtext">Paper Feed</div>
                <div className="col-6 d-flex py-2">
                  <PlusMinusAdjuster />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="d-flex justify-content-between adjustor">
                <div className="setGtext">Line At Top</div>
                <div className="col-6 d-flex py-2">
                  <PlusMinusAdjuster />
                </div>
              </div>
              <div className="d-flex justify-content-between adjustor">
                <div className="setGtext">Lines for Header</div>
                <div className="col-6 d-flex py-2">
                  <PlusMinusAdjuster />
                </div>
              </div>
              <div className="d-flex justify-content-between adjustor">
                <div className="setGtext">Lines For Detail</div>
                <div className="col-6 d-flex py-2">
                  <PlusMinusAdjuster />
                </div>
              </div>
              <div className="d-flex justify-content-between adjustor">
                <div className="setGtext">Lines for Footer</div>
                <div className="col-6 d-flex py-2">
                  <PlusMinusAdjuster />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="d-flex justify-content-between adjustor">
                <div className="setGtext">Lines At Bottom</div>
                <div className="col-6 d-flex py-2">
                  <PlusMinusAdjuster />
                </div>
              </div>
              <div className="d-flex justify-content-between adjustor">
                <div className="setGtext">Order for Sub Tot</div>
                <div className="col-6 d-flex py-2">
                  <PlusMinusAdjuster />
                </div>
              </div>
              <div className="d-flex justify-content-between adjustor">
                <div className="setGtext">Top Margin</div>
                <div className="col-6 d-flex py-2">
                  <PlusMinusAdjuster />
                </div>
              </div>
              <div className="d-flex justify-content-between adjustor">
                <div className="setGtext">Left Margin</div>
                <div className="col-6 d-flex py-2">
                  <PlusMinusAdjuster />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="d-flex justify-content-between adjustor">
                <div className="setGtext">Bottom Margin</div>
                <div className="col-6 d-flex py-2">
                  <PlusMinusAdjuster />
                </div>
              </div>
              <div className="d-flex justify-content-between adjustor">
                <div className="setGtext">Order By</div>
                <div className="col-6 d-flex py-2">
                  <Select />
                </div>
              </div>
              <div className="d-flex justify-content-between adjustor">
                <div className="setGtext">Then Order by</div>
                <div className="col-6 d-flex py-2">
                  <Select />
                </div>
              </div>
              <div className="d-flex justify-content-between adjustor">
                <div className="setGtext">Then Order By</div>
                <div className="col-6 d-flex py-2">
                  <Select />
                </div>
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
          <Table />
        </div>
      </div>
    </>
  );
}

export default PrintSettings;
