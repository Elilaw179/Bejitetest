// import React from "react";

// const Resume = () => {
//   return (
//     <div>
//       <div className="flex justify-between absolute inset-x-4 top-12 z-10 max-w-7xl mx-auto">
//         <img
//           src="/assets/images/logo.png"
//           alt="logo"
//           className="h-12 sm:h-16"
//         />
//       </div>

//       <div className=" mt-20  flex flex-col items-center justify-center min-h-screen px-4 mx-auto w-full max-w-4xl">
//         <div>
//           <img src="/assets/images/Frame.svg" alt="" />
//         </div>

//         <div className="w-full max-w-3xl text-center mb-10 ">
//           <p className="text-3xl sm:text-2xl md:text-5xl font-medium text-[#FF3C61] mt-10">
//             Build Your Resume. Get Noticed.
//           </p>
//           <p className="text-[#FF6F61] font-normal text-2xl sm:text-base md:text-lg mt-2">
//             Follow the next steps to create a smart, professional CV that
//             connects <br /> you to the right employers faster and easier.
//           </p>
//         </div>

//         <div className="mt-4  bg-[#E63357] border-[#E63357] rounded-[30px] border-[1.5px]">
//           <button className="  w-[321px] shadow-[#00000040] h-12 rounded-[30px] font-normal text-white transition-all duration-300 ">
//             Get Started
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Resume;



























import React from "react";

const Resume = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      {/* Header Logo */}
      <div className="w-full px-4 py-6 flex justify-start items-center max-w-screen-xl mx-auto">
        <img
          src="/assets/images/logo.png"
          alt="logo"
          className="h-12 sm:h-16"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center w-full px-4 max-w-4xl text-center mt-[10%]">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg mb-6 mt-auto">
          <img src="/assets/images/Frame.svg" alt="Resume Visual" className="m-auto" />
        </div>

        <div className="w-full max-w-3xl mb-8">
          <p className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#FF3C61] mb-4">
            Build Your Resume. Get Noticed.
          </p>
          <p className="text-[#FF6F61] text-base sm:text-lg md:text-xl font-normal leading-relaxed">
            Follow the next steps to create a smart, professional CV that connects <br className="hidden sm:block" />
            you to the right employers faster and easier.
          </p>
        </div>

        <div className="mt-4 w-full flex justify-center">
          <button className="w-full max-w-[321px] h-12 bg-[#E63357] border border-[#E63357] rounded-[30px] text-white shadow-md text-base font-medium transition-all hover:bg-[#d42d4d]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;

