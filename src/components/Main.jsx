import React from "react";
import Button from "./Button";
import PassGen from "./PassGen";
import Image from "../images/pass-lock.png";
import reload from "../images/reload.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Main(props) {
  const { slider, setSlider, password, generatePassword } = props;
  const notify = () =>
    toast.success("Password copied to Clipboard", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  return (
    <div className="main">
      <div className="side-image">
        <img src={Image} alt="SideImage" />
        <div className="slogan">
          Generate strong Passwords for your social accounts
        </div>
      </div>
      <div className="generated-password">
        <div className="password">
          <div className="password-field">{password}</div>
          <img
            className="reloadButton"
            src={reload}
            onClick={() => {
              generatePassword();
            }}
            alt="reload"
          />
        </div>

        <CopyToClipboard text={password} onCopy={notify}>
          <Button text={"Copy"} />
        </CopyToClipboard>

        <ToastContainer
          position="bottom-center"
          autoClose={1000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
      </div>
      <PassGen
        slider={slider}
        setSlider={setSlider}
        upperCase={props.upperCase}
        lowerCase={props.lowerCase}
        numbers={props.numbers}
        symbols={props.symbols}
        generatePassword={props.generatePassword}
      />
      <span className="credits">
        Made with ❤️ by
        <a
          href="https://github.com/mafzaldev"
          target="_blank"
          rel="noopener noreferrer"
          className="credits"
        >
          @mafzaldev
        </a>
      </span>
    </div>
  );
}
