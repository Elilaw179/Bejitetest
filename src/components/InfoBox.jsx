// import React from "react";

// const InfoBox = ({ text, position }) => {
//     const base =
//         "absolute w-[250px] h-[80px] text-center text-[12px] font-normal text-white bg-[#333333] p-5 rounded-tl-[50px] rounded-br-[50px] shadow-lg z-20";

//     const positionClass =
//         position === "above-icon"
//             ? "bottom-full mb-0 left-35 transform -translate-x-1/2" : "top-full mt-3 left-[-120px] transform -translate-x-1/2";
//     return (
//         <div className={`${base} ${positionClass}`}>
//             <p>{text}</p>
//         </div>
//     );
// };

// export default InfoBox;




// import React from "react";

// const InfoBox = ({ text, position }) => {
//   const base =
//     "absolute z-20 text-center text-xs font-normal text-white bg-[#333333] p-4 rounded-tl-[50px] rounded-br-[50px] shadow-lg";

//   const positionClass = {
//     "above-icon":
//       "hidden sm:block bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-[250px]",
//     "below-card":
//       "hidden sm:block top-full mt-2 left-1/2 transform -translate-x-1/2 w-[250px]",
//     "mobile":
//       "block sm:hidden mt-3 w-full max-w-[90vw] mx-auto relative static bg-[#333333] rounded-2xl",
//   };

//   return (
//     <>
//       {/* For larger screens */}
//       <div className={`${base} ${positionClass[position]}`}>
//         <p>{text}</p>
//       </div>

//       {/* For mobile screens — override position */}
//       <div className={`${base} ${positionClass["mobile"]}`}>
//         <p>{text}</p>
//       </div>
//     </>
//   );
// };

// export default InfoBox;





















import React from "react";

const InfoBox = ({ text, position }) => {
  const base =
    "absolute z-20 text-center text-xs font-normal text-white bg-[#333333] p-4 rounded-tl-[50px] rounded-br-[50px] shadow-lg";

  const positionClass = {
    "above-icon": "hidden sm:block bottom-full mb-3 left-0 sm:w-[250px]", 
    "below-card": "hidden sm:block top-full mt-3 right-0 sm:w-[250px]",   
    "mobile": "block sm:hidden mt-3 w-full max-w-[90vw] mx-auto relative static bg-[#333333] rounded-2xl",
  };

  return (
    <>
      <div className={`${base} ${positionClass[position]}`}>
        <p>{text}</p>
      </div>
      <div className={`${base} ${positionClass["mobile"]}`}>
        <p>{text}</p>
      </div>
    </>
  );
};

export default InfoBox;

