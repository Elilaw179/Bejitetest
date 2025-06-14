
// import { Eye, EyeOff } from 'lucide-react';
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// function SignUp() {

//   const [email, setEmail] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const isDisabled = !email || !firstName || !lastName;

//   const navigate = useNavigate();

//   return (
//     <div className="bg-white">
//       <div className="flex w-[80%] mx-auto justify-between absolute right-4 left-4 top-1/12 transform -translate-y-1/2 z-10">
//         <div>
//           <img src="/assets/images/logo.png" alt="" srcset="" />
//         </div>

//         <div className="flex items-center gap-x-3">
//           <h1 className="text-[#828282] text-xl font-medium">Already have account?</h1>

//           <button className="bg-[#E6335740] py-3 px-7 rounded-2xl shadow cursor-pointer text-white" onClick={() => {
//             navigate("/")
//           }}>
//             Sign in
//           </button>
//         </div>
//       </div>

//       <div className="flex w-full h-screen justify-between relative">
//         <div className="w-[60%] relative h-screen">
//           <img
//             src="/assets/images/auth.svg"
//             alt=""
//             srcset=""
//             className="w-full h-screen"
//           />

//           <img
//             src="/assets/images/auth_text.png"
//             alt=""
//             srcset=""
//             className="absolute top-[40%] left-[40%] transform -translate-x-1/2 -translate-y-1/2"
//           />
//         </div>

//         <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 w-[40%]">
//           <div className="w-[70%] space-y-7 flex flex-col items-center">
//             <h2 className="text-3xl font-bold text-pink-600 text-center">
//               Sign Up
//             </h2>
//             <p className="text-center text-pink-400 text-md">
//               Create your account in a few steps
//             </p>

//             <div className="space-y-6">
//               <input
//                 type="text"
//                 placeholder="First name"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//                 className="w-full px-4 py-3 border border-pink-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 placeholder-pink-300"
//               />
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//                 className="w-full px-4 py-3 border border-pink-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 placeholder-pink-300"
//               />

//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-4 py-3 border border-pink-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 placeholder-pink-300"
//               />
//             </div>

//             <button
//               disabled={isDisabled}
//               className={`w-full py-4 rounded-full text-white font-semibold transition shadow-md cursor-pointer mb-10 ${
//                 isDisabled
//                   ? "bg-[#E6335740] cursor-not-allowed"
//                   : "bg-[#FF3C61]"
//               }`}
//               onClick={() => {
//                 navigate("/signup-role")
//               }}
//             >
//               Continue
//             </button>

//             <p className="text-[#FF6F61] text-xl">or signup with</p>
//             <div className="flex gap-x-10">
//               <img
//                 src="/assets/images/linkedin.svg"
//                 alt=""
//                 srcset=""
//                 className="cursor-pointer "
//               />
//               <img
//                 src="/assets/images/google.svg"
//                 alt=""
//                 srcset=""
//                 className="cursor-pointer"
//               />
//               <img
//                 src="/assets/images/x.svg"
//                 alt=""
//                 srcset=""
//                 className="cursor-pointer"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUp





















import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react'
import { FaGoogle, FaLinkedin } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function SignUp() {

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isDisabled = !email || !firstName || !lastName;

  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="w-full px-4 py-6 flex justify-between items-center max-w-screen-xl mx-auto">
        <img src="/assets/images/logo.png" alt="Logo" className="h-10" />
        <div className="flex items-center gap-3">
          <h1 className="text-[#828282] text-base sm:text-xl font-medium">Already have an account?</h1>
          <button
            className="bg-[#E6335740] py-2 px-5 sm:py-3 sm:px-7 rounded-2xl shadow text-white"
            onClick={() => navigate("/")}
          >
            Sign in
          </button>
        </div>
      </div>

     
      <div className="flex flex-col lg:flex-row flex-1">
        <div className="w-full lg:w-1/2 relative hidden lg:block">
          <img src="/assets/images/auth.svg" alt="Auth" className="w-full h-full object-cover" />
          <img
            src="/assets/images/auth_text.png"
            alt="Text"
            className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-6 py-10">
          <div className="w-full max-w-md space-y-7 mb-[20%]">
            <h2 className="text-3xl font-bold text-pink-600 text-center">Sign Up</h2>
            <p className="text-center text-pink-400 text-md">Create your account in a few steps</p>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-3 border border-pink-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 placeholder-pink-300"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-3 border border-pink-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 placeholder-pink-300"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-pink-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 placeholder-pink-300"
              />
            </div>

            <button
              disabled={isDisabled}
              className={`w-full py-4 rounded-full text-white font-semibold shadow-md transition mb-6 ${
                isDisabled ? "bg-[#E6335740] cursor-not-allowed" : "bg-[#FF3C61]"
              }`}
              onClick={() => navigate("/signup-role")}
            >
              Continue
            </button>

            <p className="text-[#FF6F61] text-center text-xl">or signup with</p>
            <div className="flex justify-center gap-6 mt-4">
              <FaLinkedin className="text-blue-600 text-3xl" /> 
             <img src="/assets/images/google.png" alt="google" className="w-8 h-8 cursor-pointer" />
              <img src="/assets/images/x.svg" alt="Twitter" className="w-8 h-8 cursor-pointer" />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
