import SendBox from "./SendBox"
import Message from "./Message"
import {CurrentChatBar} from "./CurrentChatBar"

export default function Rightbar() {
    return (
        <div className="col col-9 p-0 right">
            
            <CurrentChatBar />   
            <div className="middle overflow-auto" style={{ height: 420 }}>
                <Message message="Hello HOw are you ?" time="10pm today" />
                <Message message="I am Good What about you ?" time="10pm today" sender={false} />
                <Message message="Going To play today." time="10pm today" sender={false} />
                

            </div>
            <div className="bottom m-2 mt-3">
                <SendBox />
            </div>
        </div>

    )
}