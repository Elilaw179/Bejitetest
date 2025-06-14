

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import RoleCard from "../components/RoleCard";

// const SignUpRole = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-white">
//       <div className="flex w-[80%] mx-auto justify-center sm:justify-between absolute right-4 left-4 top-8 sm:top-1/12 transform -translate-y-1/2 z-10">
//         <img src="/assets/images/logo.png" alt="logo" className="w-[120px] sm:w-auto" />
//       </div>

//       <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 w-full sm:w-[90%] md:w-[70%] lg:w-[50%] mx-auto">
//         <div className="w-full space-y-5 sm:space-y-7 text-center">
//           <p className="text-[36px] sm:text-[48px] font-bold text-[#FF3C61]">Sign UP As</p>
//         </div>

//         <div className="w-full lg:gap-16 mt-16 sm:mt-40 flex flex-col sm:flex-row gap-20 sm:gap-5 justify-center items-center">
//           <RoleCard
//             imageSrc="/assets/images/user.png"
//             title="JOBSEEKER"
//             description={
//               <>
//                 Looking for a job? Find your next <br />
//                 opportunity with Bejite's smart tools.
//               </>
//             }
//             buttonText="Sign up as a jobseeker"
//             onClick={() => navigate("/jobseeker-option")}
//           />

//           <RoleCard
//             imageSrc="/assets/images/strongbox.svg"
//             title="EMPLOYER"
//             description={
//               <>
//                 Need talent? Connect with qualified <br />
//                 candidates using Bejite's smart tools.
//               </>
//             }
//             buttonText="Sign up as an employer"
//             onClick={() => navigate("/")}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpRole;

















import React from "react";
import { useNavigate } from "react-router-dom";
import RoleCard from "../components/RoleCard";

const SignUpRole = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header with left-aligned logo */}
      <div className="w-full px-4 py-6 flex items-center max-w-screen-xl mx-auto">
        <img src="/assets/images/logo.png" alt="logo" className="h-10" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center w-full px-4 py-10 sm:py-20 mt-[5%]">
        <p className="text-3xl sm:text-5xl font-bold text-[#FF3C61] text-center">Sign UP As</p>

        {/* Role Cards */}
        <div className="mt-20 flex flex-col sm:flex-row gap-10 flex-wrap justify-center items-center w-full max-w-5xl">
          <RoleCard
            imageSrc="/assets/images/user.png"
            title="JOBSEEKER"
            description={
              <>
                Looking for a job? Find your next <br />
                opportunity with Bejite's smart tools.
              </>
            }
            buttonText="Sign up as a jobseeker"
            onClick={() => navigate("/jobseeker-option")}
          /> <br/>

          <RoleCard
            imageSrc="/assets/images/strongbox.svg"
            title="EMPLOYER"
            description={
              <>
                Need talent? Connect with qualified <br />
                candidates using Bejite's smart tools.
              </>
            }
            buttonText="Sign up as an employer"
            onClick={() => navigate("/")}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpRole;
