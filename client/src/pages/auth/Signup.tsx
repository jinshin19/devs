import { useState } from "react";
import { Link } from "react-router-dom";
import { SignupDevTypes } from "../../types/types";
import ShowPassword from "../../components/ShowPassword";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateDev } from "../../services/mutation";

/**
 * note to myself:
 * Improved this later, make the validation here instead doing that in the backend,
 * validation for the username, firstname, lastname values. if === 0 then required
 */

const Signup = () => {
  const [show, setShow] = useState(false);
  const createDev = useCreateDev();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupDevTypes>();

  const signUpHandler: SubmitHandler<SignupDevTypes> = (data) => {
    createDev.mutate(data);
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
              {errors?.username?.type == "required" ? (
                <p className="required"> Username is required </p>
              ) : (
                <p> Username </p>
              )}
              <input
                id="Username"
                type="text"
                placeholder="Username..."
                {...register("username", { required: true })}
                aria-invalid
              />
            </label>
          </div>
          <div className="label-wrapper">
            <label htmlFor="Firstname">
              {errors?.firstname ? (
                <p className="required"> Firstname is required </p>
              ) : (
                <p> Firstname </p>
              )}
              <input
                id="Firstname"
                type="text"
                placeholder="Firstname..."
                {...register("firstname", { required: true })}
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
              {errors?.password ? (
                <p className="required"> Password is required </p>
              ) : (
                <p> Password </p>
              )}
              <div className="password-wrapper">
                <input
                  id="Password"
                  type={show ? "text" : "password"}
                  placeholder="Password ..."
                  {...register("password", { required: true })}
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
