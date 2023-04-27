import { MessageLeft } from "./MessageLeft";
import { MessageRigth } from "./MessageRigth";

export function Message(props) {
  return (
    <>
      {props.sender === 'customer' ? <MessageLeft {...props} /> : <MessageRigth {...props} />}
    </>
  );
}
