
// import { ChevronLeft } from "lucide-react";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function EmailCheck() {
// //   const [email, setEmail] = useState("");
//   const navigate = useNavigate();

// //   const isDisabled = !email;

//   return (
//     <div className="bg-white">
//       <div className="flex w-[80%] mx-auto justify-between absolute right-4 left-4 top-1/12 transform -translate-y-1/2 z-10">
//         <div>
//           <img src="/assets/images/logo.png" alt="" srcset="" />
//         </div>
//       </div>

//       <div className="flex w-full h-screen justify-between relative">
//         <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 w-[50%] mx-auto">
//           <div className="w-full space-y-7">
//             <div className="space-y-6 w-[70%] mx-auto flex flex-col items-center">
//               <img src="/assets/images/emailcheck.png" alt="" srcset="" />

//               <h1 className="text-3xl font-bold text-pink-600">
//                 Check Your Email
//               </h1>

//               <p className="text-center">
//                 We’ve sent a password reset link to your inbox. Follow the
//                 instructions to reset your password.
//               </p>
//               <button
//                 // disabled={isDisabled}
//                 className={`w-[70%] py-4 rounded-[20px] text-white  bg-[#FF3C61] font-semibold transition shadow-md cursor-pointer`}
//               >
//                 Resend Email
//               </button>

//               <div className="flex cursor-pointer gap-x-2"  onClick={() => {
//                 navigate("/");
//               }}> <ChevronLeft /> <span>Go Back To Login</span></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EmailCheck;




















import { ChevronLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function EmailCheck() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      {/* Logo Header */}
      <div className="w-full px-4 py-6 flex justify-start items-center max-w-screen-xl mx-auto">
        <img src="/assets/images/logo.png" alt="logo" className="h-10" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center w-full px-4 flex-1">
        <div className="w-full max-w-md flex flex-col items-center space-y-6 mt-4">
          <img
            src="/assets/images/emailcheck.png"
            alt="email-check"
            className="w-28 sm:w-32 md:w-36"
          />

          <h1 className="text-2xl sm:text-3xl font-bold text-pink-600 text-center">
            Check Your Email
          </h1>

          <p className="text-center text-sm sm:text-base text-gray-700">
            We’ve sent a password reset link to your inbox.
            <br className="hidden sm:block" />
            Follow the instructions to reset your password.
          </p>

          <button
            className="w-full max-w-xs py-3 rounded-xl text-white bg-[#FF3C61] font-semibold transition shadow-md"
          >
            Resend Email
          </button>

          <div
            className="flex items-center gap-2 text-pink-600 font-medium cursor-pointer mt-4"
            onClick={() => navigate("/")}
          >
            <ChevronLeft />
            <span>Go Back To Login</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailCheck;

