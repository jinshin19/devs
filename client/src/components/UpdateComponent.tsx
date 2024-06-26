import { useEffect } from "react";
import imagePlaceHolder from "../assets/image-placeholder.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useUpdateDev } from "../services/mutation";
import { TupdateDevSchema, updateDevSchema } from "../types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGetDevByIDQuery } from "../services/queries";

const UpdateComponent = () => {
  const { id } = useParams();
  const { data } = useGetDevByIDQuery(id!);
  const updateDev = useUpdateDev();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<TupdateDevSchema>({
    defaultValues: {
      middlename: "",
      stacks: "",
    },
    resolver: zodResolver(updateDevSchema),
  });

  const { fields, remove, append } = useFieldArray({
    control,
    name: "links",
  });

  const addLinkHandler = () => append({ title: "", link: "" });
  const deleteLinkHandler = (index: number) => remove(index);

  const updateHandler: SubmitHandler<TupdateDevSchema> = (data) => {
    updateDev.mutate({ ...(id ? { id } : {}), ...data });
  };

  useEffect(() => {
    const fetchData = async () => {
      setValue("bio", data?.data.bio);
      setValue("username", data?.data.username);
      setValue("firstname", data?.data.firstname);
      setValue("middlename", data?.data.middlename);
      setValue("lastname", data?.data.lastname);
      setValue("stacks", data?.data.stacks);
      const parsedLinks = data?.data.links && JSON.parse(data.data.links);
      parsedLinks?.forEach(
        ({ title, link }: { title: string; link: string }) => {
          append({ title, link });
        }
      );
    };
    fetchData();
  }, [id, setValue, append, data]);

  return (
    <div className="update-container">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit(updateHandler)}>
          <input type="hidden" name="id" value={id} />
          <div className="title-wrapper">
            <p> Update </p>
          </div>
          <div className="image-wrapper">
            <div className="image-container">
              <img src={imagePlaceHolder} alt="" />
            </div>
            <label htmlFor="File">
              <p> File: downloads/ </p>
              <p> Upload File </p>
              <input
                id="File"
                type="file"
                name="file"
                placeholder="File..."
                hidden
              />
            </label>
          </div>
          <div className="label-wrapper bio-wrapper">
            <label htmlFor="Bio">
              <p> Bio </p>
              <textarea
                id="Bio"
                placeholder="Bio..."
                {...register("bio")}
              ></textarea>
            </label>
          </div>
          <div className="label-wrapper">
            <label htmlFor="Username">
              {errors.username ? (
                <p className="required"> {errors.username?.message} </p>
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
            <label htmlFor="Firstname">
              {errors.firstname ? (
                <p className="required">{errors.firstname?.message}</p>
              ) : (
                <p>Firstname</p>
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
            <label htmlFor="Firstname">
              <p> Middlename </p>
              <input
                id="Middlename"
                type="text"
                placeholder="Middlename..."
                {...register("middlename")}
              />
            </label>
          </div>
          <div className="label-wrapper">
            <label htmlFor="Lastname">
              {errors.lastname ? (
                <p className="required"> {errors.lastname?.message} </p>
              ) : (
                <p> Lastname </p>
              )}
              <input
                id="Lastname"
                type="text"
                placeholder="Lastname..."
                {...register("lastname")}
              />
            </label>
          </div>
          <h2> Stacks </h2>
          <div className="label-wrapper stack-wrapper">
            <label htmlFor="Stacks">
              {errors.stacks ? (
                <p className="required"> {errors.stacks?.message} </p>
              ) : (
                <p> Stacks </p>
              )}
              <textarea
                id="Stacks"
                placeholder="Enter stack and add comma ( e.g: html, css, js )"
                {...register("stacks")}
              ></textarea>
            </label>
          </div>
          <h2> Social Links </h2>
          <div className="label-wrapper links-wrapper">
            <div className="input-wrapper">
              {fields &&
                fields?.map((item, index) => (
                  <div className="inputs" key={item?.id}>
                    <input
                      type="text"
                      placeholder="Title..."
                      {...register(`links.${index}.title`)}
                      defaultValue={item?.title}
                    />
                    <input
                      type="text"
                      placeholder="Link..."
                      {...register(`links.${index}.link`)}
                      defaultValue={item?.link}
                    />
                    <button
                      type="button"
                      onClick={() => deleteLinkHandler(index)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                ))}
            </div>
            <div className="add-wrapper">
              <button type="button" onClick={addLinkHandler}>
                <p>
                  Add New <FontAwesomeIcon icon={faPlus} />{" "}
                </p>
              </button>
            </div>
          </div>
          <div className="buttons-wrapper">
            <button type="submit"> Update </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateComponent;
