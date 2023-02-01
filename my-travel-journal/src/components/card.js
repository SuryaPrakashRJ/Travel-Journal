
export default function Card(props) {

    return (
        <div className="card flex bg-white">
            <img src={props.image} alt="fuji" className="h-48 w-80"></img>
            <div className=" pl-6 space-y-2 flex flex-col justify-center">
                <h2 className="text-2xl font-extrabold text-black font-TextFont">{props.name}</h2>
                <p className="text-black font-bold font-TextFont">{props.date}</p>
                <p className="text-black font-TextFont">{props.about}</p>
                <a href={`${props.location}`} target='_blank' rel="noreferrer">Visit On Google Maps</a>
            </div>
        </div>
    )
}