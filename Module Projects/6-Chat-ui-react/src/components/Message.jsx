
function Message({ message, time, sender = true }) {
    return (
        <div>
            {sender == true ? <div className="d-flex justify-content-between m-2">
                <div />
                <div className="sender px-3 py-2 rounded">
                    <p className="mb-0">{message}</p>
                    <p className="text-muted small mb-0">{time}</p>
                </div>
            </div> : <div className="d-flex justify-content-between m-2">
                <div className="receiver px-3 py-2 rounded">
                    <p className="mb-0">{message}</p>
                    <p className="text-muted small mb-0">{time}</p>
                </div>
                <div></div>
            </div>}
        </div>
    )
}

export default Message;