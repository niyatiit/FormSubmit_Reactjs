import React, { Component } from "react";
import { useForm } from "react-hook-form";

function Form({handleFormSubmit}) {
  const { register, handleSubmit , reset } = useForm();

  const handleFormSubmitData = (data) =>{
    handleFormSubmit(data)
    reset();
  }

  return (
    <>
      <div className=" flex justify-center items-center mb-20 gap-10">
        <form onSubmit={handleSubmit(handleFormSubmitData)}>
          <input
            {...register("name")}
            type="text"
            className="  bg-zinc-600 mt-5 mr-2 p-2 text-white rounded-md font-semibold outline-none border-none "
            placeholder="Enter the Name.."
          />

          <input
            {...register("email")}
            type="text"
            className="bg-zinc-600 mt-5 mr-2 p-2 text-white rounded-md font-semibold outline-none border-none "
            placeholder="Enter the Email.."
          />
          <input
            {...register("image")}
            type="text"
            className="bg-zinc-600 mt-5 mr-2 p-2 text-white rounded-md font-semibold outline-none border-none "
            placeholder="Enter the Image.."
          />
          <button className="bg-blue-600 p-2 text-white rounded-md font-semibold outline-none border-none">
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
