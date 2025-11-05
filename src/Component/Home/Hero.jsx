import MaxyHero from "../../../public/bg1.png";
import "../../App.css";
import SocialIcon from "../Cards/SocialIcon";
const Hero = ({ dark }) => {
  return (
    <section className="bg-img sm:px-12 py-8 px-8  pt-20  ">
      <div className="flex sm:flex-row flex-col justify-between mb-12 items-center text-white sm:gap-2 gap-8">
        <div className="md:w-[40%] w-full">
          <h2 className="uppercase mb-2 leading-tight  text-amber-600/60 font-bold">
            HELLO!
          </h2>
          <h1 className="font-space sm:text-4xl mb-2 text-xl font-extrabold lg:text-5xl ">
            I am{" "}
            <span className="bg-linear-to-br from-amber-600 via-amber-600 to-black   text-transparent bg-clip-text ">
              Mariam <br /> Tairu
            </span>{" "}
            a Frontend Developer.
          </h1>
          <p className="font-poppins">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
            quaerat! Lorem ipsum dolor sit amet.
          </p>

          <div className="mt-6 flex gap-2">
            <button className=" px-4 py-2 rounded-full bg-amber-700 hover:bg-transparent hover:border-1 hover:border-amber-700  duration-200 delay-150 transition-all ">
              Learn More
            </button>
            <button className=" px-4 py-2 rounded-full bg-transparent border hover:border-0 cursor-pointer hover:bg-amber-700 tansition-all duration-200 delay-150">
              Get in touch
            </button>
          </div>
          <div className="mt-12">
            <SocialIcon />
          </div>
        </div>
        <img
          src={MaxyHero}
          className=" sm:w-[40%] object-cover rounded-md border-2 border-amber-600 overflow-hidden "
          alt="User Image"
        />
      </div>
    </section>
  );
};

export default Hero;
