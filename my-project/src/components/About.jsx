import {ABOUT_TEXT} from "../constants"

export const About = () => {
  return <div className="borded-b border-neutral-900 pb-4">
    <h2 className="my-10 text-center text-4xl">About
    <span className="text-neutral-400"> Me</span>
    </h2>
    <div className="flex flex-wrap ">
        {/* <div className="w-full lg:w-1/2"></div> */}
            <div className="flex items-center justify-center">
            <p>{ABOUT_TEXT}</p>
            </div>

    </div>
  </div>;
};
