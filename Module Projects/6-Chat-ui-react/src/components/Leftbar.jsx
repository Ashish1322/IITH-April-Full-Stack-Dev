import FriendCard from "./FriendCard"

export default function Leftbar() {
    return (
        <div className="col col-3 p-3 left border-end border-1 ">
            <div className="mb-3 d-flex flex-row border border-1 rounded ">
                <div className="border-end border-1 p-2">
                    <i className="fa-solid fa-magnifying-glass" />
                </div>
                <input
                    type="text"
                    placeholder="Search..."
                    className="px-2 border-0 outline-none"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                />
            </div>
            <div className="overflow-auto" style={{ height: 470 }}>
                <FriendCard name="Ashish Kumar" img="https://bootdey.com/img/Content/avatar/avatar1.png" minute="7" />
                <FriendCard name="Swapnil" img="https://bootdey.com/img/Content/avatar/avatar2.png" minute="5" />
                <FriendCard name="Roshni" img="https://bootdey.com/img/Content/avatar/avatar3.png" minute="7" />
                <FriendCard name="Haindavi" img="https://bootdey.com/img/Content/avatar/avatar4.png" minute="7" />
                <FriendCard name="Lasyavi" img="https://bootdey.com/img/Content/avatar/avatar5.png" minute="7" />
                <FriendCard name="Nishtah Jain" img="https://bootdey.com/img/Content/avatar/avatar6.png" minute="7" />
                <FriendCard name="Akhil" img="https://bootdey.com/img/Content/avatar/avatar7.png" minute="7" />
                <FriendCard name="Rabia" img="https://bootdey.com/img/Content/avatar/avatar8.png" minute="7" />
                <FriendCard name="Deepkia" img="https://bootdey.com/img/Content/avatar/avatar1.png" minute="7" />

                
            </div>
        </div>

    )
}
