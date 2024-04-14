import copy from "copy-to-clipboard";
import styles from "./style.module.css";
import Copy from "@/icons/Copy";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";
import { ReactElement } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CopyToclipboardProps {
  text: string;
  children: ReactElement;
}

const CopyToclipboard: React.FC<CopyToclipboardProps> = ({
  text,
  children,
}) => {
  function copyToclipboard() {
    copy(text);
  }
  return (
    <>
      <ToastContainer />
      <button onClick={copyToclipboard} className={styles.button}>
        <VisuallyHidden>copy to clipboard</VisuallyHidden>
        {children}
        <Copy />
      </button>
    </>
  );
};

export default CopyToclipboard;
