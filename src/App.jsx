import React, { useState } from "react";
import Cards from "./component/Cards";
import Form from "./component/Form";

function App() {
  const[users , setUsers] = useState([])

  const handleFormSubmit = (data) => {
    setUsers([...users , data])
  }

  const handleRemove = (id) =>{
    setUsers(()=>users.filter((item,index)=>index!=id))
  }
  return (
    <>
      <div className="bg-zinc-800 w-full h-screen text-white ">
        <div className="container mx-auto">
          <Form handleFormSubmit={handleFormSubmit} />
          <Cards handleRemove={handleRemove} users={users}/>
        </div>
      </div>
    </>
  );
}

export default App;
