import React from "react";
const header = ()=>{
    const titulo = "header";
    const a = 5;
    const b = 6;
    return (
      <div>
        <h2>
            {titulo}
        </h2>
        <p>
            {a+b}
        </p>
      </div>
    );
  }
  
  export default header;