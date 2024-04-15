import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginDevTypes } from "../../types/types";
import ShowPassword from "../../components/ShowPassword";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginDev } from "../../services/mutation";

const Login = () => {
  const [show, setShow] = useState(false);
  const loginDev = useLoginDev();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginDevTypes>();
  const loginHandler: SubmitHandler<LoginDevTypes> = async (data) => {
    loginDev.mutate(data);
  };
  return (
    <div className="wrapper login">
      <div className="about-wrapper">
        <div className="title-wrapper">
          <p> Devs</p>
        </div>
        <div className="content-wrapper">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, facere
            cupiditate obcaecati cumque, voluptates repudiandae, repellendus
            assumenda laborum eaque quibusdam architecto ratione dicta ipsum
            reiciendis a harum pariatur illum adipisci?
          </p>
        </div>
      </div>

      <div className="form-wrapper">
        <form onSubmit={handleSubmit(loginHandler)}>
          <div className="title-wrapper">
            <p> Login </p>
          </div>
          <div className="label-wrapper">
            <label htmlFor="Username">
              {errors?.username ? (
                <p> Username is required</p>
              ) : (
                <p> Username </p>
              )}
              <input
                id="Username"
                type="text"
                placeholder="Username..."
                {...register("username", { required: true })}
              />
            </label>
          </div>
          <div className="label-wrapper">
            <label htmlFor="Password">
              {errors.password ? (
                <p> Password is required </p>
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
          <div className="buttons-wrapper">
            <button type="submit"> Login </button>
          </div>
          <div className="extra-wrapper">
            <p>
              Dont have an account yet? <Link to={"/signup"}>Signup</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
