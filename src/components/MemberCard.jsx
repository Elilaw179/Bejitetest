// import React from "react";
// import InfoBox from "./InfoBox";

// const MemberCard = ({
//     label,
//     iconSrc,
//     infoText,
//     position,
//     showInfo,
//     setShowInfo,
//     containerRef,
//     onClick,
// }) => (
//     <div className="w-[274px] h-[164px] relative">
//         <img onClick={onClick} className="m-auto cursor-pointer" src={iconSrc} alt="" />
//         <div className="gap-4 flex justify-center items-center w-[274px] h-[53px] bg-[#E63357] shadow-2xl rounded-2xl mt-5 relative">
//             <p className="text-center text-white text-[16px] font-medium">{label}</p>
//             <div className="relative" ref={containerRef}>
//                 {showInfo && <InfoBox text={infoText} position={position} />}
//                 <img
//                     className="w-[23px] h-[23px] cursor-pointer"
//                     src="/assets/images/questiontag.svg"
//                     alt=""
//                     onClick={() => setShowInfo((prev) => !prev)}
//                 />
//             </div>
//         </div>
//     </div>
// );

// export default MemberCard;



















import React from "react";
import InfoBox from "./InfoBox";

const MemberCard = ({
  label,
  iconSrc,
  infoText,
  position,
  showInfo,
  setShowInfo,
  containerRef,
  onClick,
}) => (
  <div className="w-[90%] sm:w-[270px] h-auto relative text-center">
    <img onClick={onClick} className="m-auto cursor-pointer" src={iconSrc} alt={label} />
    <div className="mt-5 relative bg-[#E63357] shadow-2xl rounded-2xl py-3 flex justify-center items-center gap-2">
      <p className="text-white text-sm sm:text-base font-medium">{label}</p>
      <div ref={containerRef} className="relative">
        {showInfo && <InfoBox text={infoText} position={position} />}
        <img
          src="/assets/images/questiontag.svg"
          alt="info"
          className="w-5 h-5 cursor-pointer"
          onClick={() => setShowInfo((prev) => !prev)}
        />
      </div>
    </div>
  </div>
);

export default MemberCard;

