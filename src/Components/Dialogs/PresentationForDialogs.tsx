import {Messages, textArreaValueforDialogs, TsarType, Users} from "../../Redux/state";
import Dialogusers from "./Dialogusers/Dialogusers";
import Message from "./Messages/Messages";
import {ChangeDialogValueAC, combinerTypes, NewMessageAC} from "../../Redux/dialogReducer";
import Dialogs from "./Dialogs";


type DialoguserspropsType = {
    users: Array<Users>
    messages: Array<Messages>
    dispatch: (action: combinerTypes) => void
    textArreaValueforDialogs: string
}


const PresentationForDialogs = (props: DialoguserspropsType) => {

    let sendMessage = () => {
        props.dispatch(NewMessageAC(props.textArreaValueforDialogs))
    }

    const takeValueFoo = (event:string) => {
        props.dispatch(ChangeDialogValueAC(event))
    }

    //DIALOG RESULT V V V V

    return <div>
      <Dialogs
          users={props.users}
          messages={props.messages}
          sendMessage={sendMessage}
          takeValueFoo={takeValueFoo}
          textArreaValueforDialogs={props.textArreaValueforDialogs}
      />
    </div>
}
export default PresentationForDialogs;
