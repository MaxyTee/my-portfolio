import MaxyHero from "../../../public/maxyHero.png";
import "../../App.css";
import SocialIcon from "../Cards/SocialIcon";
const Hero = () => {
  return (
    <section className="bg-img px-12 py-8  ">
      <div className="flex sm:flex-row flex-col justify-between mb-12 items-center text-white sm:gap-2 gap-8">
        <div className="md:w-[40%] w-full">
          <h2 className="uppercase mb-2 leading-tight  text-amber-600/60 font-bold">
            HELLO!
          </h2>
          <h1 className="font-space sm:text-4xl mb-2 text-xl font-extrabold lg:text-6xl ">
            I am{" "}
            <span className="bg-linear-to-br from-amber-600 via-amber-600 to-black   text-transparent bg-clip-text ">
              Mariam <br /> Tairu
            </span>
          </h1>
          <p className="font-inter">a Frontend Developer.</p>

          <div className="mt-6 flex gap-2">
            <button className=" px-4 py-2 rounded-full bg-linear-to-b from-black  to-amber-600 hover:bg-transparent hover:inset-1 hover:border-b duration-200 delay-150 transition-all hover:inset-ring-current">
              Learn More
            </button>
            <button className=" px-4 py-2 rounded-full bg-transparent border-b cursor-pointer hover:bg-linear-to-b from-black to-amber-600 transition-all duration-200 delay-150 hover:inset-ring-current">
              Get in touch
            </button>
          </div>
          <div className="mt-12">
            <SocialIcon />
          </div>
        </div>
        <img
          src={MaxyHero}
          className=" w-[40%] object-fill rounded-md border-2 border-amber-600 overflow-hidden "
          alt="User Image"
        />
      </div>
    </section>
  );
};

export default Hero;
