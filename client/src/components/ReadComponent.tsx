import imagePlaceholder from "../assets/image-placeholder.png";


const ReadComponent = () => {

    return (
        <div className="read-container">
            <div className="read-content-wrapper">
                <div className="image-wrapper">
                    <img src={imagePlaceholder} alt="image" />
                </div>
                <div className="name-wrapper">
                    <p> Joshua Philip Concepcion Unilongo </p>
                </div>
                <div className="bio-wrapper">
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatibus ducimus architecto, reprehenderit dignissimos, quidem dolorem vel corrupti repellat exercitationem soluta iure odit quo inventore consequatur dolor numquam, quibusdam praesentium? </p>
                </div>
                <div className="stacks-wrapper">
                    <div className="title-wrapper">
                        <p> Stacks </p>
                    </div>
                    <ul>
                        <li> HTML </li>
                        <li> CSS </li>
                        <li> JAVASCRIPT </li>
                    </ul>
                </div>
                <div className="links-wrapper">
                    <div className="title-wrapper">
                        <p> Social Links </p>
                    </div>
                    <ul>
                        <li>
                            <a href=""> Facebook </a>
                        </li>
                        <li>
                            <a href=""> Google </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default ReadComponent