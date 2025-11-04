import React from "react";
import { useForm } from "react-hook-form";
import img from "../../../public/map.jpg";

const Contact = ({ dark }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section
      className={`flex  flex-col items-center justify-between gap-6 ${
        dark ? "bg-black" : "bg-white text-neutral-950"
      } py-24 px-12 md:px-12 lg:px-18`}
    >
      <h1 className="font-poppins text-2xl md:text-4xl lg:text-5xl">Contact</h1>
      <div className="w-1 rounded-full h-9 bg-amber-700 "></div>
      <div className="w-2 h-2 rounded-full  bg-amber-700 "></div>

      <div className="flex flex-col sm:flex-row justify-between items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`${
            dark ? "bg-neutral-800" : "bg-neutral-300"
          } w-full rounded-md p-4 mb-6 flex flex-col gap-4`}
          action=""
        >
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              className={`outline p-1 ${
                dark
                  ? "bg-neutral-700 outline-neutral-900"
                  : "bg-neutral-200 outline-neutral-600"
              } mt-2 indent-2 w-full `}
              {...register("name", { required: "Full Name is required" })}
            />
            {errors.name && (
              <p className="text-red-400 mt-2">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="name">Email</label>
            <br />
            <input
              type="email"
              placeholder="Email"
              className={`outline p-1 ${
                dark
                  ? "bg-neutral-700 outline-neutral-900"
                  : "bg-neutral-200 outline-neutral-600"
              } mt-2 indent-2 w-full `}
              {...register("email", { required: "Email Name is required" })}
            />
            {errors.email && (
              <p className="text-red-400 mt-2">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="name">Subject</label>
            <br />
            <input
              type="text"
              placeholder="Subject"
              className={`outline p-1 ${
                dark
                  ? "bg-neutral-700 outline-neutral-900"
                  : "bg-neutral-200 outline-neutral-600"
              } mt-2 indent-2 w-full `}
              {...register("subject", { required: "Subject Name is required" })}
            />
            {errors.subject && (
              <p className="text-red-400 mt-2">{errors.subject.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="name">Coment</label>
            <br />
            <textarea
              name=""
              rows={10}
              className={`outline p-1 ${
                dark
                  ? "bg-neutral-700 outline-neutral-900"
                  : "bg-neutral-200 outline-neutral-600"
              } mt-2 indent-2 w-full `}
              id=""
            ></textarea>
            {errors.subject && (
              <p className="text-red-400 mt-2">{errors.subject.message}</p>
            )}
          </div>

          <button
            className="mt-8 self-center px-4 py-2 rounded-full bg-linear-to-b from-black  to-amber-600 hover:bg-transparent hover:inset-1 hover:border-b duration-200 delay-150 transition-all hover:inset-ring-current"
            type="submit"
          >
            Submit
          </button>
        </form>
        <img src={img} className="sm:w-[70%] sm:rotate-90" alt="" />
      </div>
    </section>
  );
};

export default Contact;
