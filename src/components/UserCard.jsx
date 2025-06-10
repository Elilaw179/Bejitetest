// import React from "react";
// import { FaCheck } from "react-icons/fa";

// const UserCard = ({ user, isAdded, onAdd }) => (
//   <div className="mx-4 my-3 rounded-lg">
//     <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-3 gap-3 sm:gap-0">
//       <div className="flex items-center gap-4 sm:w-[300px] rounded-md px-2 py-1">
//         <img
//           className="rounded-full w-12 h-12 sm:w-[47px] sm:h-[47px]"
//           src={user.img}
//           alt={user.name}
//         />
//         <p className="text-lg sm:text-[20px] font-bold text-[#FF6F61] whitespace-nowrap">
//           {user.name}
//         </p>
//       </div>
//       <div className=" text-center rounded-md w-20 py-1">
//         <p className="text-[#FF6F61] text-xs sm:text-sm font-normal">{user.role}</p>
//       </div>
//       <div
//         className={`flex justify-center items-center gap-2 rounded-3xl px-4 py-1.5 shadow-2xl cursor-pointer w-28 ${
//           isAdded ? "bg-[#E0E0E040]" : "bg-[#E85A50]"
//         }`}
//         onClick={() => onAdd(user.id)}
//       >
//         {isAdded ? (
//           <>
//             <FaCheck className="text-[#E85A50] text-[8px]" />
//             <p className="text-[#E85A50] font-medium text-center">Added</p>
//           </>
//         ) : (
//           <>
//             <p className="text-white font-bold text-center text-lg">+</p>
//             <p className="text-white font-medium text-center">Add</p>
//           </>
//         )}
//       </div>
//     </div>
//   </div>
// );

// export default UserCard;















import React from "react";
import { FaCheck } from "react-icons/fa";

const UserCard = ({ user, isAdded, onAdd }) => (
  <div className="px-4 py-3 w-full">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
      {/* For small screens — stack image + name + role */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 w-full sm:w-[300px] text-center sm:text-left">
        <div className="flex justify-center sm:justify-start mb-2 sm:mb-0">
          <img
            className="rounded-full w-12 h-12 object-cover"
            src={user.img}
            alt={user.name}
          />
        </div>
        <div className="flex flex-col items-center sm:items-start justify-center">
          <p className="text-lg sm:text-[20px] font-bold text-[#FF6F61]">{user.name}</p>
          <p className="text-[#FF6F61] text-sm sm:text-base mt-1">{user.role}</p>
        </div>
      </div>

      {/* Add/Added Button */}
      <div
        className={`flex justify-center items-center gap-2 rounded-3xl px-4 py-1.5 shadow-2xl cursor-pointer w-full sm:w-28 mx-auto sm:mx-0 ${
          isAdded ? "bg-[#E0E0E040]" : "bg-[#E85A50]"
        }`}
        onClick={() => onAdd(user.id)}
      >
        {isAdded ? (
          <>
            <FaCheck className="text-[#E85A50] text-xs" />
            <p className="text-[#E85A50] font-medium">Added</p>
          </>
        ) : (
          <>
            <p className="text-white font-bold text-lg">+</p>
            <p className="text-white font-medium">Add</p>
          </>
        )}
      </div>
    </div>
  </div>
);

export default UserCard;
