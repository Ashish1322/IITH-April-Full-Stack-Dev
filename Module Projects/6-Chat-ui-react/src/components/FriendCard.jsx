export default function FriendCard({name, img, minute}) {
    return (
        <div className="bg-cool p-1 px-2 d-flex flex-row gap-3">
            <img
                className="rounded-circle chatimage"
                src={img}
            />
            <div>   
                <p className="mb-0">{name}</p>
                <p className="text-muted small">left {minute}mins ago</p>
            </div>
        </div>
    )
}