import { useState } from "react";
import Warning from "./Warning";

export default function Textarea({ text, setText }) {
  const [warningText, setWarningText] = useState("");

  const handleTextChange = (e) => {
    let newText = e.target.value;

    // Simple check validation
    if (newText === "<script>") {
      setWarningText("No Script tags allowed");

      newText = newText.replace("<script>", "");
    } else if (newText === "@") {
      setWarningText("No @ tags allowed");

      newText = newText.replace("@", "");
    } else {
      setWarningText("");
    }

    setText(newText);
  };
  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter Your Text"
        spellCheck={false}
      />
      <Warning warningText={warningText} />
    </div>
  );
}
