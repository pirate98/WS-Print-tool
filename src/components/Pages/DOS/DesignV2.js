import { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../../constants/ItemTypes";

import "../../Common/common.css";
import ControlProp from "./ControlProp";
import Elements from "./Elements";
import { memo } from "react";

const Design = memo(function Design() {
  const [elements, setElements] = useState([]);
  console.log(elements);
  const [captionText, setCaptionText] = useState("");
  const [lineCharecter, setLineCharecter] = useState(20);
  const [alignment, setAlignment] = useState("flex-start");
  const [visible, setVisible] = useState(false);
  const [hasDropped, setHasDropped] = useState(false);
  const [hasDroppedOnChild, setHasDroppedOnChild] = useState(false);

  const handleAlignment = (id) => {
    setAlignment(id);
  };

  const handleCaptionChange = (e) => {
    setCaptionText(e.target.value);
  };

  const handleRangeChange = (e) => {
    setLineCharecter(e.target.value);
  };

  // const [, drop] = useDrop(
  //   () => ({
  //     accept: ItemTypes.CAPTION,
  //     drop(_item, monitor) {
  //       const didDrop = monitor.didDrop();
  //       if (didDrop) {
  //         return;
  //       }
  //       setHasDropped(true);
  //       setHasDroppedOnChild(didDrop);
  //     },
  //     collect: (monitor) => ({
  //       isOver: monitor.isOver(),
  //       isOverCurrent: monitor.isOver({ shallow: true }),
  //     }),
  //   }),
  //   [setHasDropped, setHasDroppedOnChild]
  // );

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.CAPTION,
      drop(_item, monitor) {
        const didDrop = monitor.didDrop();
        if (didDrop) {
          return;
        }
        setHasDropped(true);
        setHasDroppedOnChild(didDrop);
        const { x, y } = monitor.getClientOffset() ?? {};
        const { x: initialX, y: initialY } =
          monitor.getInitialClientOffset() ?? {};
        setElements((prevBoxes) => [
          ...prevBoxes,
          {
            left: parseInt(x - initialX),
            top: parseInt(y - initialY),
          },
        ]);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
      }),
    }),
    [setHasDropped, setHasDroppedOnChild, setElements]
  );

  return (
    <>
      <div className=" row  mt-3">
        <div className={visible === true ? "col-lg-1" : "col-lg-3"}>
          <div
            class={visible === true ? `card shadow-lg w-25` : `card shadow-lg`}
          >
            <div class="card-header d-flex justify-content-between">
              <span className={visible === true ? "d-none" : "text-center"}>
                Controls{" "}
              </span>
              <span
                className="text-end ml-3"
                onClick={(e) => {
                  e.preventDefault();
                  setVisible(!visible);
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="15.5" cy="15.5" r="15.5" fill="#1479FF" />
                  <g clip-path="url(#clip0_1_2082)">
                    <path
                      d="M14.0162 24C13.8064 23.9425 13.5887 23.8978 13.3885 23.8252C12.9939 23.6831 12.7637 23.4083 12.5404 23.1351L10.6002 20.7714C10.0916 20.1518 9.58293 19.5321 9.0741 18.9122C8.62063 18.3609 8.16355 17.8111 7.71139 17.259C7.53251 17.0405 7.34013 16.8261 7.1938 16.5945C6.93994 16.193 6.92547 15.77 7.21386 15.3812C7.6009 14.859 8.03267 14.3565 8.44865 13.8477C9.03179 13.1332 9.6168 12.4203 10.2037 11.7089C10.7039 11.1001 11.205 10.4917 11.7068 9.8837C12.031 9.49035 12.3602 9.09955 12.6772 8.70262C12.9708 8.33559 13.3806 8.10505 13.9268 8.02223C13.9467 8.01684 13.9657 8.00936 13.983 8L14.4763 8C14.5223 8.01252 14.567 8.02837 14.6137 8.03731C15.8324 8.26913 16.3773 9.32549 15.7019 10.1434C14.8504 11.1778 13.9995 12.2124 13.1491 13.247C12.4243 14.1278 11.699 15.0082 10.9731 15.8883C10.9074 15.9663 10.9054 16.0273 10.9731 16.1068C11.6115 16.8736 12.2473 17.642 12.8804 18.412C13.5688 19.2502 14.2561 20.0889 14.9422 20.9281C15.2461 21.3012 15.5624 21.6693 15.8301 22.0583C16.181 22.5666 15.9636 23.2777 15.3987 23.6511C15.1182 23.8364 14.79 23.9295 14.445 24L14.0162 24Z"
                      fill="white"
                    />
                    <path
                      d="M21.4815 8C21.6045 8.03271 21.7281 8.06313 21.8498 8.0984C22.0687 8.16101 22.2691 8.25712 22.4394 8.38104C22.6096 8.50497 22.746 8.65419 22.8407 8.81986C22.9354 8.98553 22.9863 9.16428 22.9904 9.34553C22.9946 9.52677 22.9519 9.70683 22.8649 9.87501C22.7248 10.148 22.4927 10.3936 22.2891 10.6451C21.8906 11.1379 21.4828 11.6258 21.0787 12.1163C20.4536 12.8754 19.8288 13.6345 19.2043 14.3936C18.7801 14.9094 18.3575 15.426 17.9366 15.9435C17.9257 15.9627 17.9206 15.9837 17.9217 16.0047C17.9227 16.0256 17.93 16.0462 17.9428 16.0647C18.6143 16.8861 19.2886 17.7063 19.9655 18.5252C20.6013 19.2992 21.2355 20.0738 21.8682 20.8491C22.1865 21.2401 22.519 21.6258 22.8067 22.0304C23.0773 22.4115 23.0527 22.8181 22.8166 23.2092C22.5739 23.6112 22.1589 23.8558 21.6055 23.9624C21.5528 23.9727 21.5019 23.988 21.4499 24L21.0224 24C21.0095 23.9925 20.995 23.9866 20.9797 23.9826C20.4535 23.9185 20.0359 23.7173 19.7432 23.3725C19.3486 22.9079 18.9649 22.4381 18.5788 21.9691C17.8164 21.0418 17.0547 20.114 16.2937 19.1857C15.6229 18.3691 14.9425 17.5571 14.2848 16.7341C13.8988 16.2512 13.9057 15.7465 14.2875 15.2613C14.7058 14.7287 15.1474 14.2073 15.5795 13.68C16.2823 12.8238 16.985 11.9675 17.6877 11.1111C18.2881 10.3802 18.8888 9.64975 19.4897 8.91961C19.7199 8.64 19.9373 8.3476 20.3365 8.19067C20.5338 8.11399 20.7485 8.06287 20.9553 8L21.4815 8Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_2082">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(23 24) rotate(180)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
            <div
              className={visible === true ? "w-20" : "card-body"}
              style={{ "max-height": "125vh", "overflow-y": "scroll" }}
            >
              <div className="">
                <div className="d-flex align-items-center">
                  <input className="form-control" type={"text"} />

                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5119 17.1552L15.281 12.9243C16.1552 11.6068 16.6668 10.0293 16.6668 8.33342C16.6668 3.73837 12.9285 0 8.33342 0C3.73837 0 0 3.73837 0 8.33342C0 12.9285 3.73837 16.6668 8.33342 16.6668C10.0293 16.6668 11.6068 16.1552 12.9243 15.281L17.1552 19.5119C17.8052 20.1627 18.8619 20.1627 19.5119 19.5119C20.1627 18.861 20.1627 17.806 19.5119 17.1552ZM2.50003 8.33342C2.50003 5.11672 5.11672 2.50003 8.33342 2.50003C11.5501 2.50003 14.1668 5.11672 14.1668 8.33342C14.1668 11.5501 11.5501 14.1668 8.33342 14.1668C5.11672 14.1668 2.50003 11.5501 2.50003 8.33342Z"
                      fill="#1479FF"
                    />
                  </svg>
                </div>

                {/* <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                  <svg
                    width="19"
                    height="15"
                    viewBox="0 0 19 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.8145 0H0.185547C0.136337 0 0.0891422 0.0193671 0.0543454 0.0538407C0.0195486 0.0883143 0 0.135071 0 0.183824L0 14.8162C0 14.8649 0.0195486 14.9117 0.0543454 14.9462C0.0891422 14.9806 0.136337 15 0.185547 15H18.8145C18.8637 15 18.9109 14.9806 18.9457 14.9462C18.9805 14.9117 19 14.8649 19 14.8162V0.183824C19 0.135071 18.9805 0.0883143 18.9457 0.0538407C18.9109 0.0193671 18.8637 0 18.8145 0ZM5.26953 12.9412V12.1324C5.26953 12.0836 5.28908 12.0368 5.32388 12.0024C5.35867 11.9679 5.40587 11.9485 5.45508 11.9485H13.5449C13.5941 11.9485 13.6413 11.9679 13.6761 12.0024C13.7109 12.0368 13.7305 12.0836 13.7305 12.1324V12.9412C13.7305 12.9899 13.7109 13.0367 13.6761 13.0712C13.6413 13.1056 13.5941 13.125 13.5449 13.125H5.45508C5.40587 13.125 5.35867 13.1056 5.32388 13.0712C5.28908 13.0367 5.26953 12.9899 5.26953 12.9412ZM16.1426 11.0662C16.1426 11.1149 16.123 11.1617 16.0882 11.1962C16.0534 11.2306 16.0062 11.25 15.957 11.25H3.04297C2.99376 11.25 2.94656 11.2306 2.91177 11.1962C2.87697 11.1617 2.85742 11.1149 2.85742 11.0662V10.2574C2.85742 10.2086 2.87697 10.1618 2.91177 10.1274C2.94656 10.0929 2.99376 10.0735 3.04297 10.0735H15.957C16.0062 10.0735 16.0534 10.0929 16.0882 10.1274C16.123 10.1618 16.1426 10.2086 16.1426 10.2574V11.0662Z"
                      fill="#1479FF"
                    />
                  </svg>
                  <span style={{ "margin-left": "1rem" }}>Caption</span>
                </div> */}
                <Elements title="Caption" />
                <Elements title="Value" />
                {/* <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.225 0C4.12996 0 0 4.12996 0 9.225C0 14.32 4.12996 18.45 9.225 18.45C14.32 18.45 18.45 14.32 18.45 9.225C18.45 4.12996 14.32 0 9.225 0ZM10.4718 13.863H8.71975V7.26008C8.08039 7.85686 7.32607 8.29824 6.4575 8.58493V6.99965C6.91449 6.84992 7.41122 6.56536 7.94698 6.14669C8.48345 5.72802 8.85032 5.2398 9.05044 4.68204H10.4718V13.863Z"
                        fill="#1479FF"
                      />
                    </svg>
                    <span style={{ "margin-left": "1rem" }}>Value</span>
                  </div> */}
                <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 10C0.5 9.5858 0.83579 9.25 1.25 9.25H2.75C3.16421 9.25 3.5 9.5858 3.5 10C3.5 10.4142 3.16421 10.75 2.75 10.75H1.25C0.83579 10.75 0.5 10.4142 0.5 10Z"
                      fill="#1479FF"
                    />
                    <path
                      d="M4.5 10C4.5 9.5858 4.83579 9.25 5.25 9.25H6.75C7.16421 9.25 7.5 9.5858 7.5 10C7.5 10.4142 7.16421 10.75 6.75 10.75H5.25C4.83579 10.75 4.5 10.4142 4.5 10Z"
                      fill="#1479FF"
                    />
                    <path
                      d="M8.5 10C8.5 9.5858 8.8358 9.25 9.25 9.25H10.75C11.1642 9.25 11.5 9.5858 11.5 10C11.5 10.4142 11.1642 10.75 10.75 10.75H9.25C8.8358 10.75 8.5 10.4142 8.5 10Z"
                      fill="#1479FF"
                    />
                    <path
                      d="M12.5 10C12.5 9.5858 12.8358 9.25 13.25 9.25H14.75C15.1642 9.25 15.5 9.5858 15.5 10C15.5 10.4142 15.1642 10.75 14.75 10.75H13.25C12.8358 10.75 12.5 10.4142 12.5 10Z"
                      fill="#1479FF"
                    />
                    <path
                      d="M16.5 10C16.5 9.5858 16.8358 9.25 17.25 9.25H18.75C19.1642 9.25 19.5 9.5858 19.5 10C19.5 10.4142 19.1642 10.75 18.75 10.75H17.25C16.8358 10.75 16.5 10.4142 16.5 10Z"
                      fill="#1479FF"
                    />
                    <path
                      d="M3 0C2.44772 0 2 0.44772 2 1V5C2 6.104 2.896 7 4 7H16C17.104 7 18 6.104 18 5V1C18 0.44772 17.5523 0 17 0H3Z"
                      fill="#1479FF"
                    />
                    <path
                      d="M17 20C17.5523 20 18 19.5523 18 19V15C18 13.896 17.104 13 16 13H4C2.896 13 2 13.896 2 15V19C2 19.5523 2.44772 20 3 20H17Z"
                      fill="#1479FF"
                    />
                  </svg>
                  <span style={{ "margin-left": "1rem" }}>Line Break</span>
                </div>
                <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                  <svg
                    width="16"
                    height="6"
                    viewBox="0 0 16 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 0V4H2V0H0V6H16V0H14Z" fill="#1479FF" />
                  </svg>
                  <span style={{ "margin-left": "1rem" }}>Space</span>
                </div>
                <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                  <svg
                    width="18"
                    height="4"
                    viewBox="0 0 18 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="18" height="4" fill="#1479FF" />
                  </svg>
                  <span style={{ "margin-left": "1rem" }}>Line </span>
                </div>
                <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                  <svg
                    width="19"
                    height="15"
                    viewBox="0 0 19 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.8145 0H0.185547C0.136337 0 0.0891422 0.0193671 0.0543454 0.0538407C0.0195486 0.0883143 0 0.135071 0 0.183824L0 14.8162C0 14.8649 0.0195486 14.9117 0.0543454 14.9462C0.0891422 14.9806 0.136337 15 0.185547 15H18.8145C18.8637 15 18.9109 14.9806 18.9457 14.9462C18.9805 14.9117 19 14.8649 19 14.8162V0.183824C19 0.135071 18.9805 0.0883143 18.9457 0.0538407C18.9109 0.0193671 18.8637 0 18.8145 0ZM5.26953 12.9412V12.1324C5.26953 12.0836 5.28908 12.0368 5.32388 12.0024C5.35867 11.9679 5.40587 11.9485 5.45508 11.9485H13.5449C13.5941 11.9485 13.6413 11.9679 13.6761 12.0024C13.7109 12.0368 13.7305 12.0836 13.7305 12.1324V12.9412C13.7305 12.9899 13.7109 13.0367 13.6761 13.0712C13.6413 13.1056 13.5941 13.125 13.5449 13.125H5.45508C5.40587 13.125 5.35867 13.1056 5.32388 13.0712C5.28908 13.0367 5.26953 12.9899 5.26953 12.9412ZM16.1426 11.0662C16.1426 11.1149 16.123 11.1617 16.0882 11.1962C16.0534 11.2306 16.0062 11.25 15.957 11.25H3.04297C2.99376 11.25 2.94656 11.2306 2.91177 11.1962C2.87697 11.1617 2.85742 11.1149 2.85742 11.0662V10.2574C2.85742 10.2086 2.87697 10.1618 2.91177 10.1274C2.94656 10.0929 2.99376 10.0735 3.04297 10.0735H15.957C16.0062 10.0735 16.0534 10.0929 16.0882 10.1274C16.123 10.1618 16.1426 10.2086 16.1426 10.2574V11.0662Z"
                      fill="#1479FF"
                    />
                  </svg>
                  <span style={{ "margin-left": "1rem" }}>Fixed VAT</span>
                </div>
                <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.225 0C4.12996 0 0 4.12996 0 9.225C0 14.32 4.12996 18.45 9.225 18.45C14.32 18.45 18.45 14.32 18.45 9.225C18.45 4.12996 14.32 0 9.225 0ZM10.4718 13.863H8.71975V7.26008C8.08039 7.85686 7.32607 8.29824 6.4575 8.58493V6.99965C6.91449 6.84992 7.41122 6.56536 7.94698 6.14669C8.48345 5.72802 8.85032 5.2398 9.05044 4.68204H10.4718V13.863Z"
                      fill="#1479FF"
                    />
                  </svg>
                  <span style={{ "margin-left": "1rem" }}>Dynamic VAT</span>
                </div>
                <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 10C0.5 9.5858 0.83579 9.25 1.25 9.25H2.75C3.16421 9.25 3.5 9.5858 3.5 10C3.5 10.4142 3.16421 10.75 2.75 10.75H1.25C0.83579 10.75 0.5 10.4142 0.5 10Z"
                      fill="#1479FF"
                    />
                    <path
                      d="M4.5 10C4.5 9.5858 4.83579 9.25 5.25 9.25H6.75C7.16421 9.25 7.5 9.5858 7.5 10C7.5 10.4142 7.16421 10.75 6.75 10.75H5.25C4.83579 10.75 4.5 10.4142 4.5 10Z"
                      fill="#1479FF"
                    />
                    <path
                      d="M8.5 10C8.5 9.5858 8.8358 9.25 9.25 9.25H10.75C11.1642 9.25 11.5 9.5858 11.5 10C11.5 10.4142 11.1642 10.75 10.75 10.75H9.25C8.8358 10.75 8.5 10.4142 8.5 10Z"
                      fill="#1479FF"
                    />
                    <path
                      d="M12.5 10C12.5 9.5858 12.8358 9.25 13.25 9.25H14.75C15.1642 9.25 15.5 9.5858 15.5 10C15.5 10.4142 15.1642 10.75 14.75 10.75H13.25C12.8358 10.75 12.5 10.4142 12.5 10Z"
                      fill="#1479FF"
                    />
                    <path
                      d="M16.5 10C16.5 9.5858 16.8358 9.25 17.25 9.25H18.75C19.1642 9.25 19.5 9.5858 19.5 10C19.5 10.4142 19.1642 10.75 18.75 10.75H17.25C16.8358 10.75 16.5 10.4142 16.5 10Z"
                      fill="#1479FF"
                    />
                    <path
                      d="M3 0C2.44772 0 2 0.44772 2 1V5C2 6.104 2.896 7 4 7H16C17.104 7 18 6.104 18 5V1C18 0.44772 17.5523 0 17 0H3Z"
                      fill="#1479FF"
                    />
                    <path
                      d="M17 20C17.5523 20 18 19.5523 18 19V15C18 13.896 17.104 13 16 13H4C2.896 13 2 13.896 2 15V19C2 19.5523 2.44772 20 3 20H17Z"
                      fill="#1479FF"
                    />
                  </svg>
                  <span style={{ "margin-left": "1rem" }}>Column Break</span>
                </div>
                <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                  <svg
                    width="16"
                    height="6"
                    viewBox="0 0 16 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 0V4H2V0H0V6H16V0H14Z" fill="#1479FF" />
                  </svg>
                  <span style={{ "margin-left": "1rem" }}>Subtotal Line</span>
                </div>
                <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                  <svg
                    width="18"
                    height="4"
                    viewBox="0 0 18 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="18" height="4" fill="#1479FF" />
                  </svg>

                  <span style={{ "margin-left": "1rem" }}>
                    Sub Header LineT
                  </span>
                </div>
                <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                  <svg
                    width="19"
                    height="15"
                    viewBox="0 0 19 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.8145 0H0.185547C0.136337 0 0.0891422 0.0193671 0.0543454 0.0538407C0.0195486 0.0883143 0 0.135071 0 0.183824L0 14.8162C0 14.8649 0.0195486 14.9117 0.0543454 14.9462C0.0891422 14.9806 0.136337 15 0.185547 15H18.8145C18.8637 15 18.9109 14.9806 18.9457 14.9462C18.9805 14.9117 19 14.8649 19 14.8162V0.183824C19 0.135071 18.9805 0.0883143 18.9457 0.0538407C18.9109 0.0193671 18.8637 0 18.8145 0ZM5.26953 12.9412V12.1324C5.26953 12.0836 5.28908 12.0368 5.32388 12.0024C5.35867 11.9679 5.40587 11.9485 5.45508 11.9485H13.5449C13.5941 11.9485 13.6413 11.9679 13.6761 12.0024C13.7109 12.0368 13.7305 12.0836 13.7305 12.1324V12.9412C13.7305 12.9899 13.7109 13.0367 13.6761 13.0712C13.6413 13.1056 13.5941 13.125 13.5449 13.125H5.45508C5.40587 13.125 5.35867 13.1056 5.32388 13.0712C5.28908 13.0367 5.26953 12.9899 5.26953 12.9412ZM16.1426 11.0662C16.1426 11.1149 16.123 11.1617 16.0882 11.1962C16.0534 11.2306 16.0062 11.25 15.957 11.25H3.04297C2.99376 11.25 2.94656 11.2306 2.91177 11.1962C2.87697 11.1617 2.85742 11.1149 2.85742 11.0662V10.2574C2.85742 10.2086 2.87697 10.1618 2.91177 10.1274C2.94656 10.0929 2.99376 10.0735 3.04297 10.0735H15.957C16.0062 10.0735 16.0534 10.0929 16.0882 10.1274C16.123 10.1618 16.1426 10.2086 16.1426 10.2574V11.0662Z"
                      fill="#1479FF"
                    />
                  </svg>
                  <span style={{ "margin-left": "1rem" }}>Wonder</span>
                </div>
                <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.225 0C4.12996 0 0 4.12996 0 9.225C0 14.32 4.12996 18.45 9.225 18.45C14.32 18.45 18.45 14.32 18.45 9.225C18.45 4.12996 14.32 0 9.225 0ZM10.4718 13.863H8.71975V7.26008C8.08039 7.85686 7.32607 8.29824 6.4575 8.58493V6.99965C6.91449 6.84992 7.41122 6.56536 7.94698 6.14669C8.48345 5.72802 8.85032 5.2398 9.05044 4.68204H10.4718V13.863Z"
                      fill="#1479FF"
                    />
                  </svg>
                  <span style={{ "margin-left": "1rem" }}>OrgName</span>
                </div>
                <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 10C0.5 9.5858 0.83579 9.25 1.25 9.25H2.75C3.16421 9.25 3.5 9.5858 3.5 10C3.5 10.4142 3.16421 10.75 2.75 10.75H1.25C0.83579 10.75 0.5 10.4142 0.5 10Z"
                      fill="#1479FF"
                    />
                    <path
                      d="M4.5 10C4.5 9.5858 4.83579 9.25 5.25 9.25H6.75C7.16421 9.25 7.5 9.5858 7.5 10C7.5 10.4142 7.16421 10.75 6.75 10.75H5.25C4.83579 10.75 4.5 10.4142 4.5 10Z"
                      fill="#1479FF"
                    />
                    <path
                      d="M8.5 10C8.5 9.5858 8.8358 9.25 9.25 9.25H10.75C11.1642 9.25 11.5 9.5858 11.5 10C11.5 10.4142 11.1642 10.75 10.75 10.75H9.25C8.8358 10.75 8.5 10.4142 8.5 10Z"
                      fill="#1479FF"
                    />
                    <path
                      d="M12.5 10C12.5 9.5858 12.8358 9.25 13.25 9.25H14.75C15.1642 9.25 15.5 9.5858 15.5 10C15.5 10.4142 15.1642 10.75 14.75 10.75H13.25C12.8358 10.75 12.5 10.4142 12.5 10Z"
                      fill="#1479FF"
                    />
                    <path
                      d="M16.5 10C16.5 9.5858 16.8358 9.25 17.25 9.25H18.75C19.1642 9.25 19.5 9.5858 19.5 10C19.5 10.4142 19.1642 10.75 18.75 10.75H17.25C16.8358 10.75 16.5 10.4142 16.5 10Z"
                      fill="#1479FF"
                    />
                    <path
                      d="M3 0C2.44772 0 2 0.44772 2 1V5C2 6.104 2.896 7 4 7H16C17.104 7 18 6.104 18 5V1C18 0.44772 17.5523 0 17 0H3Z"
                      fill="#1479FF"
                    />
                    <path
                      d="M17 20C17.5523 20 18 19.5523 18 19V15C18 13.896 17.104 13 16 13H4C2.896 13 2 13.896 2 15V19C2 19.5523 2.44772 20 3 20H17Z"
                      fill="#1479FF"
                    />
                  </svg>
                  <span style={{ "margin-left": "1rem" }}>Payment</span>
                </div>
                <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                  <svg
                    width="16"
                    height="6"
                    viewBox="0 0 16 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 0V4H2V0H0V6H16V0H14Z" fill="#1479FF" />
                  </svg>
                  <span style={{ "margin-left": "1rem" }}>Dynamic Payment</span>
                </div>
                <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 14V13H10V10H13V12H15V14H14V16H12V18H10V15H12V14H13ZM18 18H14V16H16V14H18V18ZM0 0H8V8H0V0ZM10 0H18V8H10V0ZM0 10H8V18H0V10ZM15 10H18V12H15V10ZM3 3V5H5V3H3ZM3 13V15H5V13H3ZM13 3V5H15V3H13Z"
                      fill="#1479FF"
                    />
                  </svg>
                  <span style={{ "margin-left": "1rem" }}>QR Code</span>
                </div>
                <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                  <svg
                    width="18"
                    height="4"
                    viewBox="0 0 18 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="18" height="4" fill="#1479FF" />
                  </svg>
                  <span style={{ "margin-left": "1rem" }}>Barcode</span>
                </div>
                <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                  <svg
                    width="18"
                    height="4"
                    viewBox="0 0 18 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="18" height="4" fill="#1479FF" />
                  </svg>
                  <span style={{ "margin-left": "1rem" }}>Barcode</span>
                </div>
                <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                  <svg
                    width="18"
                    height="4"
                    viewBox="0 0 18 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="18" height="4" fill="#1479FF" />
                  </svg>
                  <span style={{ "margin-left": "1rem" }}>Barcode</span>
                </div>
                <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                  <svg
                    width="18"
                    height="4"
                    viewBox="0 0 18 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="18" height="4" fill="#1479FF" />
                  </svg>
                  <span style={{ "margin-left": "1rem" }}>Barcode</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={visible === true ? "col-lg-7" : "col-lg-6 "}>
          <div class="card  shadow-lg">
            <div class="card-header">
              <span>Page Design </span>
              {/* <span className="tetx-end">Zoom  </span> */}
            </div>
            <div class="card-body">
              <div
                className="Header text-start d-flex align-items-center"
                style={{ height: "20vh" }}
              >
                <span>Header</span>
                <svg
                  width="8"
                  height="138"
                  viewBox="0 0 8 138"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.01626 1C6.61727 1 3.02635 1 1.28076 1V136.74H7.01626"
                    stroke="black"
                    stroke-opacity="0.6"
                    stroke-width="0.477958"
                    stroke-dasharray="3.82 3.82"
                  />
                </svg>

                <div
                  ref={drop}
                  className="border"
                  style={{ height: "138px", width: "90%" }}
                >
                  {hasDropped &&
                    elements.map(({ left, top }, index) => (
                      <span
                        key={index}
                        style={{
                          display: "flex",
                          position: "absolute",
                          left,
                          top: top + 30 * index,
                          justifyContent: alignment,
                        }}
                      >
                        {lineCharecter <= 20 ? (
                          <input type="text" value={captionText} disabled />
                        ) : (
                          <textarea type="text" value={captionText} disabled />
                        )}
                        {hasDroppedOnChild && " on child"}
                      </span>
                    ))}
                </div>
              </div>
              <div
                className="Body text-start d-flex align-items-center"
                style={{ height: "80vh" }}
              >
                <span>Body &nbsp; &nbsp; </span>
                <svg
                  width="8"
                  height="442"
                  viewBox="0 0 8 442"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.01626 1.29932C6.61727 1.29932 3.02635 1.29932 1.28076 1.29932V441.021H7.01626"
                    stroke="black"
                    stroke-opacity="0.6"
                    stroke-width="0.477958"
                    stroke-dasharray="3.82 3.82"
                  />
                </svg>

                <div
                  className="border"
                  style={{ height: "442px", width: "90%" }}
                ></div>
              </div>
              <div
                className="Footer text-start d-flex align-items-center"
                style={{ height: "20vh" }}
              >
                <span>Footer</span>
                <svg
                  width="8"
                  height="138"
                  viewBox="0 0 8 138"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.01626 1C6.61727 1 3.02635 1 1.28076 1V136.74H7.01626"
                    stroke="black"
                    stroke-opacity="0.6"
                    stroke-width="0.477958"
                    stroke-dasharray="3.82 3.82"
                  />
                </svg>

                <div
                  className="border"
                  style={{ height: "138px", width: "90%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 ">
          <div className="card  shadow-lg">
            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  class="nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home1"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Control Properties
                </button>
                <button
                  class="nav-link"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile1"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Components{" "}
                </button>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-home1"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <ControlProp
                  handleAlignment={handleAlignment}
                  handleCaptionChange={handleCaptionChange}
                  handleRangeChange={handleRangeChange}
                  lineCharecter={lineCharecter}
                  hasDropped={hasDropped}
                  captionText={captionText}
                  style={{
                    "max-height": "110vh",
                    "overflow-y": "scroll",
                    "overflow-x": "hidden",
                  }}
                />
              </div>
              <div
                class="tab-pane fade"
                id="nav-profile1"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
                style={{
                  "max-height": "125vh",
                  "overflow-y": "scroll",
                  "overflow-x": "hidden",
                }}
              >
                <div className="d-flex row align-items-center p-2">
                  <div className="col-lg-3">
                    <span>Header</span>
                  </div>
                  <div className="col-lg-9">
                    <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                      <svg
                        width="19"
                        height="15"
                        viewBox="0 0 19 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.8145 0H0.185547C0.136337 0 0.0891422 0.0193671 0.0543454 0.0538407C0.0195486 0.0883143 0 0.135071 0 0.183824L0 14.8162C0 14.8649 0.0195486 14.9117 0.0543454 14.9462C0.0891422 14.9806 0.136337 15 0.185547 15H18.8145C18.8637 15 18.9109 14.9806 18.9457 14.9462C18.9805 14.9117 19 14.8649 19 14.8162V0.183824C19 0.135071 18.9805 0.0883143 18.9457 0.0538407C18.9109 0.0193671 18.8637 0 18.8145 0ZM5.26953 12.9412V12.1324C5.26953 12.0836 5.28908 12.0368 5.32388 12.0024C5.35867 11.9679 5.40587 11.9485 5.45508 11.9485H13.5449C13.5941 11.9485 13.6413 11.9679 13.6761 12.0024C13.7109 12.0368 13.7305 12.0836 13.7305 12.1324V12.9412C13.7305 12.9899 13.7109 13.0367 13.6761 13.0712C13.6413 13.1056 13.5941 13.125 13.5449 13.125H5.45508C5.40587 13.125 5.35867 13.1056 5.32388 13.0712C5.28908 13.0367 5.26953 12.9899 5.26953 12.9412ZM16.1426 11.0662C16.1426 11.1149 16.123 11.1617 16.0882 11.1962C16.0534 11.2306 16.0062 11.25 15.957 11.25H3.04297C2.99376 11.25 2.94656 11.2306 2.91177 11.1962C2.87697 11.1617 2.85742 11.1149 2.85742 11.0662V10.2574C2.85742 10.2086 2.87697 10.1618 2.91177 10.1274C2.94656 10.0929 2.99376 10.0735 3.04297 10.0735H15.957C16.0062 10.0735 16.0534 10.0929 16.0882 10.1274C16.123 10.1618 16.1426 10.2086 16.1426 10.2574V11.0662Z"
                          fill="#1479FF"
                        />
                      </svg>
                      <span style={{ "margin-left": "1rem" }}>Caption</span>
                    </div>
                    <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.225 0C4.12996 0 0 4.12996 0 9.225C0 14.32 4.12996 18.45 9.225 18.45C14.32 18.45 18.45 14.32 18.45 9.225C18.45 4.12996 14.32 0 9.225 0ZM10.4718 13.863H8.71975V7.26008C8.08039 7.85686 7.32607 8.29824 6.4575 8.58493V6.99965C6.91449 6.84992 7.41122 6.56536 7.94698 6.14669C8.48345 5.72802 8.85032 5.2398 9.05044 4.68204H10.4718V13.863Z"
                          fill="#1479FF"
                        />
                      </svg>
                      <span style={{ "margin-left": "1rem" }}>Value</span>
                    </div>
                    <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.5 10C0.5 9.5858 0.83579 9.25 1.25 9.25H2.75C3.16421 9.25 3.5 9.5858 3.5 10C3.5 10.4142 3.16421 10.75 2.75 10.75H1.25C0.83579 10.75 0.5 10.4142 0.5 10Z"
                          fill="#1479FF"
                        />
                        <path
                          d="M4.5 10C4.5 9.5858 4.83579 9.25 5.25 9.25H6.75C7.16421 9.25 7.5 9.5858 7.5 10C7.5 10.4142 7.16421 10.75 6.75 10.75H5.25C4.83579 10.75 4.5 10.4142 4.5 10Z"
                          fill="#1479FF"
                        />
                        <path
                          d="M8.5 10C8.5 9.5858 8.8358 9.25 9.25 9.25H10.75C11.1642 9.25 11.5 9.5858 11.5 10C11.5 10.4142 11.1642 10.75 10.75 10.75H9.25C8.8358 10.75 8.5 10.4142 8.5 10Z"
                          fill="#1479FF"
                        />
                        <path
                          d="M12.5 10C12.5 9.5858 12.8358 9.25 13.25 9.25H14.75C15.1642 9.25 15.5 9.5858 15.5 10C15.5 10.4142 15.1642 10.75 14.75 10.75H13.25C12.8358 10.75 12.5 10.4142 12.5 10Z"
                          fill="#1479FF"
                        />
                        <path
                          d="M16.5 10C16.5 9.5858 16.8358 9.25 17.25 9.25H18.75C19.1642 9.25 19.5 9.5858 19.5 10C19.5 10.4142 19.1642 10.75 18.75 10.75H17.25C16.8358 10.75 16.5 10.4142 16.5 10Z"
                          fill="#1479FF"
                        />
                        <path
                          d="M3 0C2.44772 0 2 0.44772 2 1V5C2 6.104 2.896 7 4 7H16C17.104 7 18 6.104 18 5V1C18 0.44772 17.5523 0 17 0H3Z"
                          fill="#1479FF"
                        />
                        <path
                          d="M17 20C17.5523 20 18 19.5523 18 19V15C18 13.896 17.104 13 16 13H4C2.896 13 2 13.896 2 15V19C2 19.5523 2.44772 20 3 20H17Z"
                          fill="#1479FF"
                        />
                      </svg>
                      <span style={{ "margin-left": "1rem" }}>Line Break</span>
                    </div>
                  </div>
                </div>
                <div className="d-flex row align-items-center p-2">
                  <div className="col-lg-3">
                    <span>Body</span>
                  </div>
                  <div className="col-lg-9">
                    <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                      <svg
                        width="19"
                        height="15"
                        viewBox="0 0 19 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.8145 0H0.185547C0.136337 0 0.0891422 0.0193671 0.0543454 0.0538407C0.0195486 0.0883143 0 0.135071 0 0.183824L0 14.8162C0 14.8649 0.0195486 14.9117 0.0543454 14.9462C0.0891422 14.9806 0.136337 15 0.185547 15H18.8145C18.8637 15 18.9109 14.9806 18.9457 14.9462C18.9805 14.9117 19 14.8649 19 14.8162V0.183824C19 0.135071 18.9805 0.0883143 18.9457 0.0538407C18.9109 0.0193671 18.8637 0 18.8145 0ZM5.26953 12.9412V12.1324C5.26953 12.0836 5.28908 12.0368 5.32388 12.0024C5.35867 11.9679 5.40587 11.9485 5.45508 11.9485H13.5449C13.5941 11.9485 13.6413 11.9679 13.6761 12.0024C13.7109 12.0368 13.7305 12.0836 13.7305 12.1324V12.9412C13.7305 12.9899 13.7109 13.0367 13.6761 13.0712C13.6413 13.1056 13.5941 13.125 13.5449 13.125H5.45508C5.40587 13.125 5.35867 13.1056 5.32388 13.0712C5.28908 13.0367 5.26953 12.9899 5.26953 12.9412ZM16.1426 11.0662C16.1426 11.1149 16.123 11.1617 16.0882 11.1962C16.0534 11.2306 16.0062 11.25 15.957 11.25H3.04297C2.99376 11.25 2.94656 11.2306 2.91177 11.1962C2.87697 11.1617 2.85742 11.1149 2.85742 11.0662V10.2574C2.85742 10.2086 2.87697 10.1618 2.91177 10.1274C2.94656 10.0929 2.99376 10.0735 3.04297 10.0735H15.957C16.0062 10.0735 16.0534 10.0929 16.0882 10.1274C16.123 10.1618 16.1426 10.2086 16.1426 10.2574V11.0662Z"
                          fill="#1479FF"
                        />
                      </svg>
                      <span style={{ "margin-left": "1rem" }}>Caption</span>
                    </div>
                    <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.225 0C4.12996 0 0 4.12996 0 9.225C0 14.32 4.12996 18.45 9.225 18.45C14.32 18.45 18.45 14.32 18.45 9.225C18.45 4.12996 14.32 0 9.225 0ZM10.4718 13.863H8.71975V7.26008C8.08039 7.85686 7.32607 8.29824 6.4575 8.58493V6.99965C6.91449 6.84992 7.41122 6.56536 7.94698 6.14669C8.48345 5.72802 8.85032 5.2398 9.05044 4.68204H10.4718V13.863Z"
                          fill="#1479FF"
                        />
                      </svg>
                      <span style={{ "margin-left": "1rem" }}>Value</span>
                    </div>
                    <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.5 10C0.5 9.5858 0.83579 9.25 1.25 9.25H2.75C3.16421 9.25 3.5 9.5858 3.5 10C3.5 10.4142 3.16421 10.75 2.75 10.75H1.25C0.83579 10.75 0.5 10.4142 0.5 10Z"
                          fill="#1479FF"
                        />
                        <path
                          d="M4.5 10C4.5 9.5858 4.83579 9.25 5.25 9.25H6.75C7.16421 9.25 7.5 9.5858 7.5 10C7.5 10.4142 7.16421 10.75 6.75 10.75H5.25C4.83579 10.75 4.5 10.4142 4.5 10Z"
                          fill="#1479FF"
                        />
                        <path
                          d="M8.5 10C8.5 9.5858 8.8358 9.25 9.25 9.25H10.75C11.1642 9.25 11.5 9.5858 11.5 10C11.5 10.4142 11.1642 10.75 10.75 10.75H9.25C8.8358 10.75 8.5 10.4142 8.5 10Z"
                          fill="#1479FF"
                        />
                        <path
                          d="M12.5 10C12.5 9.5858 12.8358 9.25 13.25 9.25H14.75C15.1642 9.25 15.5 9.5858 15.5 10C15.5 10.4142 15.1642 10.75 14.75 10.75H13.25C12.8358 10.75 12.5 10.4142 12.5 10Z"
                          fill="#1479FF"
                        />
                        <path
                          d="M16.5 10C16.5 9.5858 16.8358 9.25 17.25 9.25H18.75C19.1642 9.25 19.5 9.5858 19.5 10C19.5 10.4142 19.1642 10.75 18.75 10.75H17.25C16.8358 10.75 16.5 10.4142 16.5 10Z"
                          fill="#1479FF"
                        />
                        <path
                          d="M3 0C2.44772 0 2 0.44772 2 1V5C2 6.104 2.896 7 4 7H16C17.104 7 18 6.104 18 5V1C18 0.44772 17.5523 0 17 0H3Z"
                          fill="#1479FF"
                        />
                        <path
                          d="M17 20C17.5523 20 18 19.5523 18 19V15C18 13.896 17.104 13 16 13H4C2.896 13 2 13.896 2 15V19C2 19.5523 2.44772 20 3 20H17Z"
                          fill="#1479FF"
                        />
                      </svg>
                      <span style={{ "margin-left": "1rem" }}>Line Break</span>
                    </div>
                  </div>
                </div>

                <div className="d-flex row align-items-center p-2">
                  <div className="col-lg-3">
                    <span>Footer </span>
                  </div>
                  <div className="col-lg-9">
                    <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                      <svg
                        width="19"
                        height="15"
                        viewBox="0 0 19 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.8145 0H0.185547C0.136337 0 0.0891422 0.0193671 0.0543454 0.0538407C0.0195486 0.0883143 0 0.135071 0 0.183824L0 14.8162C0 14.8649 0.0195486 14.9117 0.0543454 14.9462C0.0891422 14.9806 0.136337 15 0.185547 15H18.8145C18.8637 15 18.9109 14.9806 18.9457 14.9462C18.9805 14.9117 19 14.8649 19 14.8162V0.183824C19 0.135071 18.9805 0.0883143 18.9457 0.0538407C18.9109 0.0193671 18.8637 0 18.8145 0ZM5.26953 12.9412V12.1324C5.26953 12.0836 5.28908 12.0368 5.32388 12.0024C5.35867 11.9679 5.40587 11.9485 5.45508 11.9485H13.5449C13.5941 11.9485 13.6413 11.9679 13.6761 12.0024C13.7109 12.0368 13.7305 12.0836 13.7305 12.1324V12.9412C13.7305 12.9899 13.7109 13.0367 13.6761 13.0712C13.6413 13.1056 13.5941 13.125 13.5449 13.125H5.45508C5.40587 13.125 5.35867 13.1056 5.32388 13.0712C5.28908 13.0367 5.26953 12.9899 5.26953 12.9412ZM16.1426 11.0662C16.1426 11.1149 16.123 11.1617 16.0882 11.1962C16.0534 11.2306 16.0062 11.25 15.957 11.25H3.04297C2.99376 11.25 2.94656 11.2306 2.91177 11.1962C2.87697 11.1617 2.85742 11.1149 2.85742 11.0662V10.2574C2.85742 10.2086 2.87697 10.1618 2.91177 10.1274C2.94656 10.0929 2.99376 10.0735 3.04297 10.0735H15.957C16.0062 10.0735 16.0534 10.0929 16.0882 10.1274C16.123 10.1618 16.1426 10.2086 16.1426 10.2574V11.0662Z"
                          fill="#1479FF"
                        />
                      </svg>
                      <span style={{ "margin-left": "1rem" }}>Caption</span>
                    </div>
                    <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                      <svg
                        width="19"
                        height="15"
                        viewBox="0 0 19 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.8145 0H0.185547C0.136337 0 0.0891422 0.0193671 0.0543454 0.0538407C0.0195486 0.0883143 0 0.135071 0 0.183824L0 14.8162C0 14.8649 0.0195486 14.9117 0.0543454 14.9462C0.0891422 14.9806 0.136337 15 0.185547 15H18.8145C18.8637 15 18.9109 14.9806 18.9457 14.9462C18.9805 14.9117 19 14.8649 19 14.8162V0.183824C19 0.135071 18.9805 0.0883143 18.9457 0.0538407C18.9109 0.0193671 18.8637 0 18.8145 0ZM5.26953 12.9412V12.1324C5.26953 12.0836 5.28908 12.0368 5.32388 12.0024C5.35867 11.9679 5.40587 11.9485 5.45508 11.9485H13.5449C13.5941 11.9485 13.6413 11.9679 13.6761 12.0024C13.7109 12.0368 13.7305 12.0836 13.7305 12.1324V12.9412C13.7305 12.9899 13.7109 13.0367 13.6761 13.0712C13.6413 13.1056 13.5941 13.125 13.5449 13.125H5.45508C5.40587 13.125 5.35867 13.1056 5.32388 13.0712C5.28908 13.0367 5.26953 12.9899 5.26953 12.9412ZM16.1426 11.0662C16.1426 11.1149 16.123 11.1617 16.0882 11.1962C16.0534 11.2306 16.0062 11.25 15.957 11.25H3.04297C2.99376 11.25 2.94656 11.2306 2.91177 11.1962C2.87697 11.1617 2.85742 11.1149 2.85742 11.0662V10.2574C2.85742 10.2086 2.87697 10.1618 2.91177 10.1274C2.94656 10.0929 2.99376 10.0735 3.04297 10.0735H15.957C16.0062 10.0735 16.0534 10.0929 16.0882 10.1274C16.123 10.1618 16.1426 10.2086 16.1426 10.2574V11.0662Z"
                          fill="#1479FF"
                        />
                      </svg>
                      <span style={{ "margin-left": "1rem" }}>Caption</span>
                    </div>
                    <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                      <svg
                        width="19"
                        height="15"
                        viewBox="0 0 19 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.8145 0H0.185547C0.136337 0 0.0891422 0.0193671 0.0543454 0.0538407C0.0195486 0.0883143 0 0.135071 0 0.183824L0 14.8162C0 14.8649 0.0195486 14.9117 0.0543454 14.9462C0.0891422 14.9806 0.136337 15 0.185547 15H18.8145C18.8637 15 18.9109 14.9806 18.9457 14.9462C18.9805 14.9117 19 14.8649 19 14.8162V0.183824C19 0.135071 18.9805 0.0883143 18.9457 0.0538407C18.9109 0.0193671 18.8637 0 18.8145 0ZM5.26953 12.9412V12.1324C5.26953 12.0836 5.28908 12.0368 5.32388 12.0024C5.35867 11.9679 5.40587 11.9485 5.45508 11.9485H13.5449C13.5941 11.9485 13.6413 11.9679 13.6761 12.0024C13.7109 12.0368 13.7305 12.0836 13.7305 12.1324V12.9412C13.7305 12.9899 13.7109 13.0367 13.6761 13.0712C13.6413 13.1056 13.5941 13.125 13.5449 13.125H5.45508C5.40587 13.125 5.35867 13.1056 5.32388 13.0712C5.28908 13.0367 5.26953 12.9899 5.26953 12.9412ZM16.1426 11.0662C16.1426 11.1149 16.123 11.1617 16.0882 11.1962C16.0534 11.2306 16.0062 11.25 15.957 11.25H3.04297C2.99376 11.25 2.94656 11.2306 2.91177 11.1962C2.87697 11.1617 2.85742 11.1149 2.85742 11.0662V10.2574C2.85742 10.2086 2.87697 10.1618 2.91177 10.1274C2.94656 10.0929 2.99376 10.0735 3.04297 10.0735H15.957C16.0062 10.0735 16.0534 10.0929 16.0882 10.1274C16.123 10.1618 16.1426 10.2086 16.1426 10.2574V11.0662Z"
                          fill="#1479FF"
                        />
                      </svg>
                      <span style={{ "margin-left": "1rem" }}>Caption</span>
                    </div>
                    <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                      <svg
                        width="19"
                        height="15"
                        viewBox="0 0 19 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.8145 0H0.185547C0.136337 0 0.0891422 0.0193671 0.0543454 0.0538407C0.0195486 0.0883143 0 0.135071 0 0.183824L0 14.8162C0 14.8649 0.0195486 14.9117 0.0543454 14.9462C0.0891422 14.9806 0.136337 15 0.185547 15H18.8145C18.8637 15 18.9109 14.9806 18.9457 14.9462C18.9805 14.9117 19 14.8649 19 14.8162V0.183824C19 0.135071 18.9805 0.0883143 18.9457 0.0538407C18.9109 0.0193671 18.8637 0 18.8145 0ZM5.26953 12.9412V12.1324C5.26953 12.0836 5.28908 12.0368 5.32388 12.0024C5.35867 11.9679 5.40587 11.9485 5.45508 11.9485H13.5449C13.5941 11.9485 13.6413 11.9679 13.6761 12.0024C13.7109 12.0368 13.7305 12.0836 13.7305 12.1324V12.9412C13.7305 12.9899 13.7109 13.0367 13.6761 13.0712C13.6413 13.1056 13.5941 13.125 13.5449 13.125H5.45508C5.40587 13.125 5.35867 13.1056 5.32388 13.0712C5.28908 13.0367 5.26953 12.9899 5.26953 12.9412ZM16.1426 11.0662C16.1426 11.1149 16.123 11.1617 16.0882 11.1962C16.0534 11.2306 16.0062 11.25 15.957 11.25H3.04297C2.99376 11.25 2.94656 11.2306 2.91177 11.1962C2.87697 11.1617 2.85742 11.1149 2.85742 11.0662V10.2574C2.85742 10.2086 2.87697 10.1618 2.91177 10.1274C2.94656 10.0929 2.99376 10.0735 3.04297 10.0735H15.957C16.0062 10.0735 16.0534 10.0929 16.0882 10.1274C16.123 10.1618 16.1426 10.2086 16.1426 10.2574V11.0662Z"
                          fill="#1479FF"
                        />
                      </svg>
                      <span style={{ "margin-left": "1rem" }}>Caption</span>
                    </div>
                    <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                      <svg
                        width="19"
                        height="15"
                        viewBox="0 0 19 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.8145 0H0.185547C0.136337 0 0.0891422 0.0193671 0.0543454 0.0538407C0.0195486 0.0883143 0 0.135071 0 0.183824L0 14.8162C0 14.8649 0.0195486 14.9117 0.0543454 14.9462C0.0891422 14.9806 0.136337 15 0.185547 15H18.8145C18.8637 15 18.9109 14.9806 18.9457 14.9462C18.9805 14.9117 19 14.8649 19 14.8162V0.183824C19 0.135071 18.9805 0.0883143 18.9457 0.0538407C18.9109 0.0193671 18.8637 0 18.8145 0ZM5.26953 12.9412V12.1324C5.26953 12.0836 5.28908 12.0368 5.32388 12.0024C5.35867 11.9679 5.40587 11.9485 5.45508 11.9485H13.5449C13.5941 11.9485 13.6413 11.9679 13.6761 12.0024C13.7109 12.0368 13.7305 12.0836 13.7305 12.1324V12.9412C13.7305 12.9899 13.7109 13.0367 13.6761 13.0712C13.6413 13.1056 13.5941 13.125 13.5449 13.125H5.45508C5.40587 13.125 5.35867 13.1056 5.32388 13.0712C5.28908 13.0367 5.26953 12.9899 5.26953 12.9412ZM16.1426 11.0662C16.1426 11.1149 16.123 11.1617 16.0882 11.1962C16.0534 11.2306 16.0062 11.25 15.957 11.25H3.04297C2.99376 11.25 2.94656 11.2306 2.91177 11.1962C2.87697 11.1617 2.85742 11.1149 2.85742 11.0662V10.2574C2.85742 10.2086 2.87697 10.1618 2.91177 10.1274C2.94656 10.0929 2.99376 10.0735 3.04297 10.0735H15.957C16.0062 10.0735 16.0534 10.0929 16.0882 10.1274C16.123 10.1618 16.1426 10.2086 16.1426 10.2574V11.0662Z"
                          fill="#1479FF"
                        />
                      </svg>
                      <span style={{ "margin-left": "1rem" }}>Caption</span>
                    </div>
                    <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                      <svg
                        width="19"
                        height="15"
                        viewBox="0 0 19 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.8145 0H0.185547C0.136337 0 0.0891422 0.0193671 0.0543454 0.0538407C0.0195486 0.0883143 0 0.135071 0 0.183824L0 14.8162C0 14.8649 0.0195486 14.9117 0.0543454 14.9462C0.0891422 14.9806 0.136337 15 0.185547 15H18.8145C18.8637 15 18.9109 14.9806 18.9457 14.9462C18.9805 14.9117 19 14.8649 19 14.8162V0.183824C19 0.135071 18.9805 0.0883143 18.9457 0.0538407C18.9109 0.0193671 18.8637 0 18.8145 0ZM5.26953 12.9412V12.1324C5.26953 12.0836 5.28908 12.0368 5.32388 12.0024C5.35867 11.9679 5.40587 11.9485 5.45508 11.9485H13.5449C13.5941 11.9485 13.6413 11.9679 13.6761 12.0024C13.7109 12.0368 13.7305 12.0836 13.7305 12.1324V12.9412C13.7305 12.9899 13.7109 13.0367 13.6761 13.0712C13.6413 13.1056 13.5941 13.125 13.5449 13.125H5.45508C5.40587 13.125 5.35867 13.1056 5.32388 13.0712C5.28908 13.0367 5.26953 12.9899 5.26953 12.9412ZM16.1426 11.0662C16.1426 11.1149 16.123 11.1617 16.0882 11.1962C16.0534 11.2306 16.0062 11.25 15.957 11.25H3.04297C2.99376 11.25 2.94656 11.2306 2.91177 11.1962C2.87697 11.1617 2.85742 11.1149 2.85742 11.0662V10.2574C2.85742 10.2086 2.87697 10.1618 2.91177 10.1274C2.94656 10.0929 2.99376 10.0735 3.04297 10.0735H15.957C16.0062 10.0735 16.0534 10.0929 16.0882 10.1274C16.123 10.1618 16.1426 10.2086 16.1426 10.2574V11.0662Z"
                          fill="#1479FF"
                        />
                      </svg>
                      <span style={{ "margin-left": "1rem" }}>Caption</span>
                    </div>
                    <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                      <svg
                        width="19"
                        height="15"
                        viewBox="0 0 19 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.8145 0H0.185547C0.136337 0 0.0891422 0.0193671 0.0543454 0.0538407C0.0195486 0.0883143 0 0.135071 0 0.183824L0 14.8162C0 14.8649 0.0195486 14.9117 0.0543454 14.9462C0.0891422 14.9806 0.136337 15 0.185547 15H18.8145C18.8637 15 18.9109 14.9806 18.9457 14.9462C18.9805 14.9117 19 14.8649 19 14.8162V0.183824C19 0.135071 18.9805 0.0883143 18.9457 0.0538407C18.9109 0.0193671 18.8637 0 18.8145 0ZM5.26953 12.9412V12.1324C5.26953 12.0836 5.28908 12.0368 5.32388 12.0024C5.35867 11.9679 5.40587 11.9485 5.45508 11.9485H13.5449C13.5941 11.9485 13.6413 11.9679 13.6761 12.0024C13.7109 12.0368 13.7305 12.0836 13.7305 12.1324V12.9412C13.7305 12.9899 13.7109 13.0367 13.6761 13.0712C13.6413 13.1056 13.5941 13.125 13.5449 13.125H5.45508C5.40587 13.125 5.35867 13.1056 5.32388 13.0712C5.28908 13.0367 5.26953 12.9899 5.26953 12.9412ZM16.1426 11.0662C16.1426 11.1149 16.123 11.1617 16.0882 11.1962C16.0534 11.2306 16.0062 11.25 15.957 11.25H3.04297C2.99376 11.25 2.94656 11.2306 2.91177 11.1962C2.87697 11.1617 2.85742 11.1149 2.85742 11.0662V10.2574C2.85742 10.2086 2.87697 10.1618 2.91177 10.1274C2.94656 10.0929 2.99376 10.0735 3.04297 10.0735H15.957C16.0062 10.0735 16.0534 10.0929 16.0882 10.1274C16.123 10.1618 16.1426 10.2086 16.1426 10.2574V11.0662Z"
                          fill="#1479FF"
                        />
                      </svg>
                      <span style={{ "margin-left": "1rem" }}>Caption</span>
                    </div>
                    <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.225 0C4.12996 0 0 4.12996 0 9.225C0 14.32 4.12996 18.45 9.225 18.45C14.32 18.45 18.45 14.32 18.45 9.225C18.45 4.12996 14.32 0 9.225 0ZM10.4718 13.863H8.71975V7.26008C8.08039 7.85686 7.32607 8.29824 6.4575 8.58493V6.99965C6.91449 6.84992 7.41122 6.56536 7.94698 6.14669C8.48345 5.72802 8.85032 5.2398 9.05044 4.68204H10.4718V13.863Z"
                          fill="#1479FF"
                        />
                      </svg>
                      <span style={{ "margin-left": "1rem" }}>Value</span>
                    </div>
                    <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.5 10C0.5 9.5858 0.83579 9.25 1.25 9.25H2.75C3.16421 9.25 3.5 9.5858 3.5 10C3.5 10.4142 3.16421 10.75 2.75 10.75H1.25C0.83579 10.75 0.5 10.4142 0.5 10Z"
                          fill="#1479FF"
                        />
                        <path
                          d="M4.5 10C4.5 9.5858 4.83579 9.25 5.25 9.25H6.75C7.16421 9.25 7.5 9.5858 7.5 10C7.5 10.4142 7.16421 10.75 6.75 10.75H5.25C4.83579 10.75 4.5 10.4142 4.5 10Z"
                          fill="#1479FF"
                        />
                        <path
                          d="M8.5 10C8.5 9.5858 8.8358 9.25 9.25 9.25H10.75C11.1642 9.25 11.5 9.5858 11.5 10C11.5 10.4142 11.1642 10.75 10.75 10.75H9.25C8.8358 10.75 8.5 10.4142 8.5 10Z"
                          fill="#1479FF"
                        />
                        <path
                          d="M12.5 10C12.5 9.5858 12.8358 9.25 13.25 9.25H14.75C15.1642 9.25 15.5 9.5858 15.5 10C15.5 10.4142 15.1642 10.75 14.75 10.75H13.25C12.8358 10.75 12.5 10.4142 12.5 10Z"
                          fill="#1479FF"
                        />
                        <path
                          d="M16.5 10C16.5 9.5858 16.8358 9.25 17.25 9.25H18.75C19.1642 9.25 19.5 9.5858 19.5 10C19.5 10.4142 19.1642 10.75 18.75 10.75H17.25C16.8358 10.75 16.5 10.4142 16.5 10Z"
                          fill="#1479FF"
                        />
                        <path
                          d="M3 0C2.44772 0 2 0.44772 2 1V5C2 6.104 2.896 7 4 7H16C17.104 7 18 6.104 18 5V1C18 0.44772 17.5523 0 17 0H3Z"
                          fill="#1479FF"
                        />
                        <path
                          d="M17 20C17.5523 20 18 19.5523 18 19V15C18 13.896 17.104 13 16 13H4C2.896 13 2 13.896 2 15V19C2 19.5523 2.44772 20 3 20H17Z"
                          fill="#1479FF"
                        />
                      </svg>
                      <span style={{ "margin-left": "1rem" }}>Line Break</span>
                    </div>
                    <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                      <svg
                        width="19"
                        height="15"
                        viewBox="0 0 19 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.8145 0H0.185547C0.136337 0 0.0891422 0.0193671 0.0543454 0.0538407C0.0195486 0.0883143 0 0.135071 0 0.183824L0 14.8162C0 14.8649 0.0195486 14.9117 0.0543454 14.9462C0.0891422 14.9806 0.136337 15 0.185547 15H18.8145C18.8637 15 18.9109 14.9806 18.9457 14.9462C18.9805 14.9117 19 14.8649 19 14.8162V0.183824C19 0.135071 18.9805 0.0883143 18.9457 0.0538407C18.9109 0.0193671 18.8637 0 18.8145 0ZM5.26953 12.9412V12.1324C5.26953 12.0836 5.28908 12.0368 5.32388 12.0024C5.35867 11.9679 5.40587 11.9485 5.45508 11.9485H13.5449C13.5941 11.9485 13.6413 11.9679 13.6761 12.0024C13.7109 12.0368 13.7305 12.0836 13.7305 12.1324V12.9412C13.7305 12.9899 13.7109 13.0367 13.6761 13.0712C13.6413 13.1056 13.5941 13.125 13.5449 13.125H5.45508C5.40587 13.125 5.35867 13.1056 5.32388 13.0712C5.28908 13.0367 5.26953 12.9899 5.26953 12.9412ZM16.1426 11.0662C16.1426 11.1149 16.123 11.1617 16.0882 11.1962C16.0534 11.2306 16.0062 11.25 15.957 11.25H3.04297C2.99376 11.25 2.94656 11.2306 2.91177 11.1962C2.87697 11.1617 2.85742 11.1149 2.85742 11.0662V10.2574C2.85742 10.2086 2.87697 10.1618 2.91177 10.1274C2.94656 10.0929 2.99376 10.0735 3.04297 10.0735H15.957C16.0062 10.0735 16.0534 10.0929 16.0882 10.1274C16.123 10.1618 16.1426 10.2086 16.1426 10.2574V11.0662Z"
                          fill="#1479FF"
                        />
                      </svg>
                      <span style={{ "margin-left": "1rem" }}>Caption</span>
                    </div>
                    <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                      <svg
                        width="19"
                        height="15"
                        viewBox="0 0 19 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.8145 0H0.185547C0.136337 0 0.0891422 0.0193671 0.0543454 0.0538407C0.0195486 0.0883143 0 0.135071 0 0.183824L0 14.8162C0 14.8649 0.0195486 14.9117 0.0543454 14.9462C0.0891422 14.9806 0.136337 15 0.185547 15H18.8145C18.8637 15 18.9109 14.9806 18.9457 14.9462C18.9805 14.9117 19 14.8649 19 14.8162V0.183824C19 0.135071 18.9805 0.0883143 18.9457 0.0538407C18.9109 0.0193671 18.8637 0 18.8145 0ZM5.26953 12.9412V12.1324C5.26953 12.0836 5.28908 12.0368 5.32388 12.0024C5.35867 11.9679 5.40587 11.9485 5.45508 11.9485H13.5449C13.5941 11.9485 13.6413 11.9679 13.6761 12.0024C13.7109 12.0368 13.7305 12.0836 13.7305 12.1324V12.9412C13.7305 12.9899 13.7109 13.0367 13.6761 13.0712C13.6413 13.1056 13.5941 13.125 13.5449 13.125H5.45508C5.40587 13.125 5.35867 13.1056 5.32388 13.0712C5.28908 13.0367 5.26953 12.9899 5.26953 12.9412ZM16.1426 11.0662C16.1426 11.1149 16.123 11.1617 16.0882 11.1962C16.0534 11.2306 16.0062 11.25 15.957 11.25H3.04297C2.99376 11.25 2.94656 11.2306 2.91177 11.1962C2.87697 11.1617 2.85742 11.1149 2.85742 11.0662V10.2574C2.85742 10.2086 2.87697 10.1618 2.91177 10.1274C2.94656 10.0929 2.99376 10.0735 3.04297 10.0735H15.957C16.0062 10.0735 16.0534 10.0929 16.0882 10.1274C16.123 10.1618 16.1426 10.2086 16.1426 10.2574V11.0662Z"
                          fill="#1479FF"
                        />
                      </svg>
                      <span style={{ "margin-left": "1rem" }}>Caption</span>
                    </div>
                    <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                      <svg
                        width="19"
                        height="15"
                        viewBox="0 0 19 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.8145 0H0.185547C0.136337 0 0.0891422 0.0193671 0.0543454 0.0538407C0.0195486 0.0883143 0 0.135071 0 0.183824L0 14.8162C0 14.8649 0.0195486 14.9117 0.0543454 14.9462C0.0891422 14.9806 0.136337 15 0.185547 15H18.8145C18.8637 15 18.9109 14.9806 18.9457 14.9462C18.9805 14.9117 19 14.8649 19 14.8162V0.183824C19 0.135071 18.9805 0.0883143 18.9457 0.0538407C18.9109 0.0193671 18.8637 0 18.8145 0ZM5.26953 12.9412V12.1324C5.26953 12.0836 5.28908 12.0368 5.32388 12.0024C5.35867 11.9679 5.40587 11.9485 5.45508 11.9485H13.5449C13.5941 11.9485 13.6413 11.9679 13.6761 12.0024C13.7109 12.0368 13.7305 12.0836 13.7305 12.1324V12.9412C13.7305 12.9899 13.7109 13.0367 13.6761 13.0712C13.6413 13.1056 13.5941 13.125 13.5449 13.125H5.45508C5.40587 13.125 5.35867 13.1056 5.32388 13.0712C5.28908 13.0367 5.26953 12.9899 5.26953 12.9412ZM16.1426 11.0662C16.1426 11.1149 16.123 11.1617 16.0882 11.1962C16.0534 11.2306 16.0062 11.25 15.957 11.25H3.04297C2.99376 11.25 2.94656 11.2306 2.91177 11.1962C2.87697 11.1617 2.85742 11.1149 2.85742 11.0662V10.2574C2.85742 10.2086 2.87697 10.1618 2.91177 10.1274C2.94656 10.0929 2.99376 10.0735 3.04297 10.0735H15.957C16.0062 10.0735 16.0534 10.0929 16.0882 10.1274C16.123 10.1618 16.1426 10.2086 16.1426 10.2574V11.0662Z"
                          fill="#1479FF"
                        />
                      </svg>
                      <span style={{ "margin-left": "1rem" }}>Caption</span>
                    </div>
                    <div className="bg-light d-flex p-2 mt-2 align-items-center theme-color">
                      <svg
                        width="19"
                        height="15"
                        viewBox="0 0 19 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.8145 0H0.185547C0.136337 0 0.0891422 0.0193671 0.0543454 0.0538407C0.0195486 0.0883143 0 0.135071 0 0.183824L0 14.8162C0 14.8649 0.0195486 14.9117 0.0543454 14.9462C0.0891422 14.9806 0.136337 15 0.185547 15H18.8145C18.8637 15 18.9109 14.9806 18.9457 14.9462C18.9805 14.9117 19 14.8649 19 14.8162V0.183824C19 0.135071 18.9805 0.0883143 18.9457 0.0538407C18.9109 0.0193671 18.8637 0 18.8145 0ZM5.26953 12.9412V12.1324C5.26953 12.0836 5.28908 12.0368 5.32388 12.0024C5.35867 11.9679 5.40587 11.9485 5.45508 11.9485H13.5449C13.5941 11.9485 13.6413 11.9679 13.6761 12.0024C13.7109 12.0368 13.7305 12.0836 13.7305 12.1324V12.9412C13.7305 12.9899 13.7109 13.0367 13.6761 13.0712C13.6413 13.1056 13.5941 13.125 13.5449 13.125H5.45508C5.40587 13.125 5.35867 13.1056 5.32388 13.0712C5.28908 13.0367 5.26953 12.9899 5.26953 12.9412ZM16.1426 11.0662C16.1426 11.1149 16.123 11.1617 16.0882 11.1962C16.0534 11.2306 16.0062 11.25 15.957 11.25H3.04297C2.99376 11.25 2.94656 11.2306 2.91177 11.1962C2.87697 11.1617 2.85742 11.1149 2.85742 11.0662V10.2574C2.85742 10.2086 2.87697 10.1618 2.91177 10.1274C2.94656 10.0929 2.99376 10.0735 3.04297 10.0735H15.957C16.0062 10.0735 16.0534 10.0929 16.0882 10.1274C16.123 10.1618 16.1426 10.2086 16.1426 10.2574V11.0662Z"
                          fill="#1479FF"
                        />
                      </svg>
                      <span style={{ "margin-left": "1rem" }}>Caption</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Design;
