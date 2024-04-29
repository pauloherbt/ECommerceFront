import "./style.css"
import carImg from "../../assets/car.png"

export function Card(){
    return (
        <>
        <div className="card-ct">
            <img src={carImg} alt="car image" />
            <p className="desc">lorem ipsum dolor</p>
            </div>
        </>
    );
}