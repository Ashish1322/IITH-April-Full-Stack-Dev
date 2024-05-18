function SendBox() {
    return <div className="mb-3 d-flex flex-row border border-1 rounded ">
        <div className="border-end border-1 p-2">
            <i className="fa fa-send" />
        </div>
        <input
            type="text"
            placeholder="Search..."
            className="px-2 border-0 outline-none  flex-grow-1"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
        />
    </div>
}

export default SendBox