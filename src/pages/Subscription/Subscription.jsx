import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/input";

import "./Subscription.scss";

export default function SubscriptionPage() {
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
        <Input name="SubEmail" placeholder="Your email address..." />
        <Button type="primary" text="Notify Me" />
      </div>
    </>
  );
}
