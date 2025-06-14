// import React from "react";

// const RoleCard = ({ imageSrc, title, description, buttonText, onClick }) => (
//   <div className="w-full max-w-[468px] h-auto sm:h-[290px] rounded-2xl relative border-2 border-[#82828226] px-4 py-6 sm:px-0 sm:py-0">
//     <div className="bg-[#333333] w-[70px] sm:w-[90px] p-2 sm:p-3 rounded-full m-auto absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//       <img src={imageSrc} alt={title} className="w-full" />
//     </div>

//     <div className="text-center mt-16 sm:mt-12">
//       <p className="text-[28px] sm:text-[36px] text-[#FF3C61] font-medium">{title}</p>
//       <p className="text-[#FF3C61] text-[13px] sm:text-[14px] font-normal">{description}</p>
//       <button
//         onClick={onClick}
//         className="bg-[#FF3C61] cursor-pointer shadow-md text-white w-full max-w-[321px] h-[45px] sm:h-[53px] rounded-3xl m-auto mt-6 text-[14px] sm:text-[16px]"
//       >
//         {buttonText}
//       </button>
//     </div>
//   </div>
// );

// export default RoleCard;

















import React from "react";

const RoleCard = ({ imageSrc, title, description, buttonText, onClick }) => (
  <div className="w-full max-w-[450px] border-2 border-[#82828226] rounded-2xl px-6 py-8 relative bg-white shadow-sm">
    {/* Icon */}
    <div className="bg-[#333333] w-[70px] sm:w-[90px] p-3 rounded-full mx-auto absolute -top-10 left-1/2 transform -translate-x-1/2">
      <img src={imageSrc} alt={title} className="w-full" />
    </div>

    {/* Card Content */}
    <div className="mt-12 text-center">
      <p className="text-2xl sm:text-3xl text-[#FF3C61] font-semibold">{title}</p>
      <p className="text-[#FF3C61] text-sm sm:text-base mt-2">{description}</p>

      <button
        onClick={onClick}
        className="bg-[#FF3C61] hover:bg-[#e53355] text-white w-full max-w-[320px] h-[48px] sm:h-[53px] rounded-3xl mt-6 text-sm sm:text-base shadow"
      >
        {buttonText}
      </button>
    </div>
  </div>
);

export default RoleCard;

