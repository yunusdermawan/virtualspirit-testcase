import "./Container.css"
import vectaryImage from "./assets/tablet-view-picture.png"

const Container = () => {
    return (
        <div className="container">
            <div className="left"></div>
            <div className="right">
                <img src={vectaryImage} alt="tablet-image" />
            </div>
        </div>
    )
}

export default Container;