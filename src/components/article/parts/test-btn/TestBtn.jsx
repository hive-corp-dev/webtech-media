import { useState } from "react";
import styles from "./test-btn.module.scss";

export default function TestBtn() {
  const [text, setText] = useState("TestBtn");

  return <div onClick={() => setText("aaa")}>{text}</div>;
}
