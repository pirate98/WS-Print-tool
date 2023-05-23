import './common.css'
function CommonHeader() {
  return (
    <>
      <nav class="navbar navbar-expand-lg theme-color-bg color-white" style={{height: 25}}>
        <div class="container-fluid">
          {/* <a class="navbar-brand color-white" href="#">
            WonderSoft 
          </a> */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active color-white" aria-current="page" href="#">
                  Save
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link color-white" href="#">
                  Save As
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link color-white "  href="#">
                  Preview
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link color-white "  href="#">
                  Export
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link color-white "  href="#">
                  Import
                </a>
              </li>  <li class="nav-item">
                <a class="nav-link color-white "  href="#">
                  Delete
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link color-white "  href="#">
                  Exit
                </a>
              </li>
              {/* <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default CommonHeader;
