import React from "react";
import Card from "./Card";

function Cards({ users , handleRemove }) {
  return (
    <>
      <div className="max-h-72 w-full rounded-lg p-5 flex flex-wrap justify-center overflow-auto">
        {users.map((item, index) => {
          return <Card user={item} key={index} id={index} handleRemove={handleRemove} />;
        })}
      </div>
    </>
  );
}

export default Cards;
