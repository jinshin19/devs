import imagePlaceholder from "../assets/image-placeholder.png";
import { DevTypes } from "../types/types";

const ReadComponent = ({
  id,
  username,
  firstname,
  middlename,
  lastname,
  bio,
  stacks,
  links,
}: DevTypes) => {
  console.log("bio", bio);
  console.log(firstname);
  console.log(middlename);
  console.log(lastname);

  return (
    <div className="read-container">
      <div className="read-content-wrapper">
        <div className="image-wrapper">
          <img src={imagePlaceholder} alt="image" />
        </div>
        <div className="name-wrapper">
          <p>{`${firstname} ${middlename} ${lastname}`}</p>
        </div>
        <div className="bio-wrapper">
          <p>{`"${bio}"`}</p>
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
  );
};

export default ReadComponent;
