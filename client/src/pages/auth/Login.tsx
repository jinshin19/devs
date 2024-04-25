import { useState } from "react";
import { Link } from "react-router-dom";
import ShowPassword from "../../components/ShowPassword";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginDev } from "../../services/mutation";
import { LoginSchema, TLoginSchema } from "../../types/schema";
import { zodResolver } from "@hookform/resolvers/zod";

const Login = () => {
  const [show, setShow] = useState(false);
  const loginDev = useLoginDev();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema),
  });
  const loginHandler: SubmitHandler<TLoginSchema> = async (data) => {
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
            Welcome to Devs, a platform where developers connect, collaborate,
            and showcase their skills! Sign up or log in to explore a community
            of talented developers. Browse through developer profiles in card
            view, each featuring a picture and name. Click on a card to delve
            into the details of that developer's skills and projects. Choose
            your dev for collaboration and join us to discover, connect, and
            collaborate with fellow developers!
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
                <p className="required"> {errors?.username?.message} </p>
              ) : (
                <p> Username </p>
              )}
              <input
                id="Username"
                type="text"
                placeholder="Username..."
                {...register("username")}
              />
            </label>
          </div>
          <div className="label-wrapper">
            <label htmlFor="Password">
              {errors.password ? (
                <p className="required"> {errors?.password?.message} </p>
              ) : (
                <p> Password </p>
              )}
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
