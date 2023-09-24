import Lottie from "lottie-react";
import avatar from '../../assets/avater.json'

const Introduction = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto mt-16 flex flex-col lg:flex-row gap-10 p-5">
        <div className="flex items-center justify-between flex-col lg:flex-row-reverse">
        <Lottie animationData={avatar} className="max-w-lg flex-1 rounded-lg" loop={true}></Lottie>
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-semibold">Let me <span className="text-sky-600">introduce</span> myself</h1>
            <h2 className="text-4xl font-bold mt-10">I'm <span className="text-sky-600">Mostak Ahmed</span>,</h2>
            <h3 className="text-xl py-3 font-medium"> a second-year Electrical Electronic Engineering student at Hajee Mohammad Science and Technology University</h3>
            <p className="py-6 text-xl font-medium">
            I'm passionate about front-end development, turning designs into seamless user experiences. <br />Let's innovate together!!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
