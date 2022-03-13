import React from "react";
import { useForm } from "react-hook-form";
import Form from "../../components/form/Form";
import FormInput from "../../components/form/form_input/FormInput";
import axios from "axios";

const CreateUser = () => {
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  //   const submit = (form, e) => {
  //     e.preventDefault();
  //     console.log(
  //       `Thanks for signing up, ${form.firstName} ${form.lastName}! We've sent you an email to ${form.emailAddress}.`
  //     );
  //   };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_ROOT_V2}user/`,
        data
      );

      console.log(response);
    } catch (error) {
      if (error) console.log(error.response);
    }
  };

  return (
    <div>
      <div>
        <div className="row">
          <div className="col-10">
            <h2 className="page-header">Create User</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card__body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-6">
                      {/* <FormInput label={"First Name"} name={"first_name"} /> */}

                      <p>
                        {errors.title && errors.title.message
                          ? errors.title.message
                          : null}
                      </p>
                      <input
                        type="text"
                        className="form-control"
                        {...register("username", {
                          required: "First name is required.",
                        })}
                      />
                    </div>

                    <div className="col-6">
                      {/* <FormInput label={"First Name"} name={"first_name"} /> */}

                      <p>
                        {errors.password && errors.password.message
                          ? errors.password.message
                          : null}
                      </p>
                      <input
                        type="text"
                        className="form-control"
                        {...register("password", {
                          required: "Password is required.",
                        })}
                      />
                    </div>

                    <div className="col-6">
                      <FormInput label={"Last Name"} name={"last_name"} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <FormInput
                        label={"Email"}
                        type={"email"}
                        name={"email"}
                      />
                    </div>
                    <div className="col-6">
                      <FormInput
                        label={"Password"}
                        type={"password"}
                        name={"password"}
                      />
                    </div>
                  </div>

                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
