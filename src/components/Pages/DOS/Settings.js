import PrintSettings from "./PrintSettings";
import Design from "./Design";
import Message from "./Message";
import Preview from "./Preview";
import PrintIcon from '@mui/icons-material/Print'
import ChatIcon from '@mui/icons-material/Chat'
import MarginIcon from '@mui/icons-material/Margin';
import PreviewIcon from '@mui/icons-material/Preview';
import ImportExportIcon from '@mui/icons-material/ImportExport';

function Settings() {
  return (
    <>
      <div className=" mt-3 p-3 ">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              <PrintIcon />
              <br />
              Print Settings
            </button>
            <button
              class="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              <MarginIcon />
              <br />
              Design
            </button>
            <button
              class="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              <ChatIcon />
              <br />
              Message
            </button>
            <button
              class="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-preview"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              <PreviewIcon />
              <br />
              Preview
            </button>
            <button
              class="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-import"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              <ImportExportIcon />
              <br />
              Import
            </button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <PrintSettings />
          </div>
          <div
            class="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <Design />
          </div>
          <div
            class="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <Message />
          </div>
          <div
            class="tab-pane fade"
            id="nav-preview"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
              <Preview />
          </div>

          <div
            class="tab-pane fade"
            id="nav-import"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            Import
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
