export function CurrentChatBar() {
    return (
        <div className="top d-flex justify-content-between align-items-center border-bottom border-1 pt-2 px-3">
            <div className="px-2 d-flex flex-row  gap-3">
                <img
                    className="rounded-circle chatimage-sm mt-1"
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                />
                <div>
                    <p className="mb-0">Ashish Kumar</p>
                    <p className="text-muted small">left 7mins ago</p>
                </div>
            </div>
            <div className="d-flex gap-1">
                <div className="border border-secondary px-2 py-0 rounded secondary-hover">
                    <i className="fa fa-camera" />
                </div>
                <div className="border border-primary px-2 py-0 primary-hover rounded">
                    <i className="fa fa-image" />
                </div>
                <div className="border border-info px-2 py-0 rounded info-hover">
                    <i className="fa fa-cogs" />
                </div>
                <div className="border border-warning px-2 py-0 rounded warning-hover">
                    <i className="fa fa-question" />
                </div>
            </div>
        </div>
    )
}