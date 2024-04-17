import imagePlaceholder from "../assets/image-placeholder.png";
// import { GetDevDataTypes } from "../types/types";

const ReadComponent = ({
  username,
  firstname,
  middlename,
  lastname,
  bio,
  stacks,
  links,
}: {
  // fix this, think a better type for this
  username: string;
  firstname: string;
  middlename: string;
  lastname: string;
  bio: string;
  stacks: [];
}) => {
  return (
    <div className="read-container">
      <div className="read-content-wrapper">
        <div className="image-wrapper">
          <img src={imagePlaceholder} alt="image" />
        </div>
        <div className="name-wrapper">
          <p>
            {firstname && `${firstname} `}
            {middlename && `${middlename} `}
            {lastname && `${lastname} `}
          </p>
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
              stacks?.map((stack: string, key: number) => (
                <li key={key}>{stack}</li>
              ))
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
            {links && JSON.parse(links).length ? (
              links?.map((link: { title: string; link: string }) => (
                <li>
                  <a href={link.link}>{link.title}</a>
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
