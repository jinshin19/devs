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
  return (
    <div className="read-container">
      <div className="read-content-wrapper">
        <div className="image-wrapper">
          <img src={imagePlaceholder} alt="image" />
        </div>
        <div className="name-wrapper">
          <p>{`${firstname} ${middlename} ${lastname}`}</p>
          <small>{username && `@${username}`}</small>
        </div>
        <div className="bio-wrapper">
          <p style={{ textAlign: "center" }}>{bio && `" ${bio} "`}</p>
        </div>
        <div className="stacks-wrapper">
          <div className="title-wrapper">
            <p> Stacks </p>
          </div>
          <ul>
            {stacks ? (
              stacks?.map((stack, key) => <li key={key}>{stack}</li>)
            ) : (
              <li>No stacks to show</li>
            )}
          </ul>
        </div>
        <div className="links-wrapper">
          <div className="title-wrapper">
            <p> Social Links </p>
          </div>
          <ul>
            {links ? (
              links?.map((link) => (
                <li>
                  <a href="#">{link}</a>
                </li>
              ))
            ) : (
              <li>No Social Links to show</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReadComponent;
