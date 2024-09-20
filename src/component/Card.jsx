import React from "react";

function Card({user , handleRemove , id}) {
  return (
    <>
    <div className="h-56 bg-zinc-400 w-52 p-1 rounded-xl flex flex-wrap justify-center flex-col items-center m-2 ">
          <div className="w-14 h-14 rounded-full  bg-zinc-200 overflow-hidden">
            <img className="w-full h-full object-cover " src={user.image} alt="" />
          </div>
          <h1 className="text-1xl pb-2 font-semibold "> {user.name} </h1>
          <h4 className="text-sm p-1 text-gray-200">
            {" "}
            {user.email} {" "}
          </h4>
          <p className="leading-1 text-xs tracking-tight font-semibold pt-1 text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            ut saepe, ipsum natus.
          </p>
          <button onClick={()=>handleRemove(id)}  className="bg-red-700 text-xs mt-4 p-2 font-semibold rounded-md ">
            {" "}
            Remove It{" "}
          </button>
        </div>
      {/* {users.map((itmes, index) => {
        return 
      })} */}
    </>
  );
}

export default Card;
