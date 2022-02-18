import { Link } from "react-router-dom"

const ImageClicker = ({elem}) => {
    return (
        <Link to={"/gallery/images/" + elem.objectID}>
        <div className='imgContainer' >
                    <h2>{elem.objectName}</h2>
                    <img src={elem.primaryImageSmall} alt="Kép" />
                </div>
            </Link>
        )
}

export default ImageClicker