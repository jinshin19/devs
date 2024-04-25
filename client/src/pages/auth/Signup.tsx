import { useState } from "react";
import { Link } from "react-router-dom";
import ShowPassword from "../../components/ShowPassword";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateDev } from "../../services/mutation";
import { TDevSchema, DevSchema } from "../../types/schema";

const Signup = () => {
  const [show, setShow] = useState(false);
  const createDev = useCreateDev();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<TDevSchema>({
    resolver: zodResolver(DevSchema),
  });

  const signUpHandler: SubmitHandler<TDevSchema> = (data) => {
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
              {errors?.username ? (
                <p className="required"> {errors?.username.message} </p>
              ) : (
                <p> Username </p>
              )}
              <input
                id="Username"
                type="text"
                placeholder="Username..."
                {...register("username")}
                aria-invalid
              />
            </label>
          </div>
          <div className="label-wrapper">
            <label htmlFor="Firstname">
              {errors?.firstname ? (
                <p className="required"> {errors?.firstname.message} </p>
              ) : (
                <p> Firstname </p>
              )}
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
              {errors?.password ? (
                <p className="required"> {errors?.password.message} </p>
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
          <div className="label-wrapper">
            <label htmlFor="ConfirmPassword">
              {errors?.confirmPassword ? (
                <p className="required"> {errors?.confirmPassword.message} </p>
              ) : (
                <p> Confirm Password </p>
              )}
              <input
                id="ConfirmPassword"
                type={show ? "text" : "password"}
                placeholder="Confirm Password ..."
                {...register("confirmPassword", {
                  validate: (value) => {
                    console.log(value);
                    try {
                      DevSchema.parse({
                        password: getValues("password"),
                        confirmPassword: value,
                      });
                    } catch (error) {
                      console.log("errr", error);
                      const confirmPasswordIssue = error?.issues?.find(
                        (issue) => issue.path[0] === "confirmPassword"
                      );
                      return (
                        confirmPasswordIssue?.message || "Validation failed"
                      );
                    }
                  },
                })}
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
