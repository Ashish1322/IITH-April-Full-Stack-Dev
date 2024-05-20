export default function Cell({value,clickFuntion,index})
{
    return (
        <div onClick={() => clickFuntion(index)} className="bg-secondary cell border d-flex justify-content-center align-items-center">
            <p>{value}</p>
        </div>
    )
}