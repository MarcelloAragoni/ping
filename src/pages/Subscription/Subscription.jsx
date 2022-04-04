import { useState } from "react";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/input";

import "./Subscription.scss";

export default function SubscriptionPage() {
  const [inputState, setInputState] = useState("");

  function handleButtonClick() {
    window.alert(inputState);
  }

  function handleRevertButton() {
    window.alert(revertButton(inputState));
  }

  function revertButton(s) {
    return s.split("").reverse().join("");
  }

  return (
    <>
      <div className="info">
        <h1>
          PING <span>.</span>
        </h1>
        <p>
          We are lauching <span>soon!</span>
        </p>
        <p>Subscribe and get notified</p>
      </div>
      <div className="subscription">
        <Input
          setInputState={setInputState}
          value={inputState}
          type="text"
          name="SubEmail"
          placeholder="Your email address..."
        />
        <Button onClick={handleButtonClick} type="primary" text="Notify Me" />
        <Button
          onClick={handleRevertButton}
          type="primary"
          text="Revert Text"
        />
      </div>
    </>
  );
}
