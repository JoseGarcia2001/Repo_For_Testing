import React from "react";

const HelloWorld = () => {
  const hello = "Hello World";
  const isTrue = false;
  return (
    <div className="HelloWorld">
      <h1>{hello}</h1>
      <h2>Curso de React</h2>
      <img src="https://arepa.s3.amazonaws.com/react.png" alt="imagen React" />
      {isTrue ? <h4>Esto es true we</h4> : <h4>Pos es falso we</h4>}
      {isTrue && <h4>Es neta we</h4>}
    </div>
  );
};

export default HelloWorld;
