import { EDUCATION } from "../constants";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Education</h1>
      <div>
        {EDUCATION.map((education, index) => (
          <div key={index} className="mb-8 flex flex-wrap items-center lg:justify-center">
            {/* University Logo */}
            <div className="w-full lg:w-1/4 flex justify-center lg:justify-end">
              <img
                src={education.logo}
                alt={education.institution}
                className="mb-4 lg:mb-0 w-auto h-auto max-w-[100px] max-h-[100px] lg:max-w-[150px] lg:max-h-[150px]" // Set the max size for small and large screens
              />
            </div>

            {/* Education Details */}
            <div className="w-full max-w-xl lg:w-3/4 lg:pl-8">
              <h6 className="mb-2 font-semibold">{education.degree}</h6>
              <p className="mb-2 text-neutral-400">{education.institution}</p>
              <p className="mb-4 text-neutral-400">{education.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
