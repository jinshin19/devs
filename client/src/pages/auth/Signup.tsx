import { useState } from "react";
import { Link } from "react-router-dom";
import { SignupDevTypes } from "../../types/types";
import ShowPassword from "../../components/ShowPassword";
import { SubmitHandler, useForm } from "react-hook-form";

const Signup = () => {
  const [show, setShow] = useState(false);

  const { register, handleSubmit } = useForm<SignupDevTypes>();

  const signUpHandler: SubmitHandler<SignupDevTypes> = (data) => {
    console.log(data);
    Modify the existing mutation in the services folder
    change the url to '/devs/auth/signin'
  };

  return (
    <div className="wrapper signup">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit(signUpHandler)}>
          <div className="title-wrapper">
            <p> Signup </p>
          </div>
          <div className="label-wrapper">
            <label htmlFor="Username">
              <p> Username </p>
              <input
                id="Username"
                type="text"
                placeholder="Username..."
                {...register("username")}
              />
            </label>
          </div>
          <div className="label-wrapper">
            <label htmlFor="Firstname">
              <p> Firstname </p>
              <input
                id="Firstname"
                type="text"
                placeholder="Firstname..."
                {...register("firstname")}
              />
            </label>
          </div>
          <div className="label-wrapper">
            <label htmlFor="Lastname">
              <p> Lastname </p>
              <input
                id="Lastname"
                type="text"
                placeholder="Lastname..."
                {...register("lastname")}
              />
            </label>
          </div>
          <div className="label-wrapper">
            <label htmlFor="Password">
              <p> Password </p>
              <div className="password-wrapper">
                <input
                  id="Password"
                  type={show ? "text" : "password"}
                  placeholder="Password ..."
                  {...register("password")}
                />
                <ShowPassword show={show} setShow={setShow} />
              </div>
            </label>
          </div>
          <div className="label-wrapper">
            <label htmlFor="ConfirmPassword">
              <p> Confirm Password </p>
              <input
                id="ConfirmPassword"
                type={show ? "text" : "password"}
                placeholder="Confirm Password ..."
                {...register("confirm_password")}
              />
            </label>
          </div>
          <div className="buttons-wrapper">
            <button type="submit"> Signup </button>
          </div>
          <div className="extra-wrapper">
            <p>
              Already have an account? <Link to={"/login"}> login </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
