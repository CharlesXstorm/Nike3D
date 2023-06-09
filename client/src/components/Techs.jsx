// import React from 'react'
import Card from "./UI/Card";

const Techs = () => {
  return (
    <Card position="left">
      <p className="text-white flex justify-start gap-[15px] align-center font-black text-5md">
        Created with:
      </p>
      <p className="text-white flex justify-start gap-[15px] align-center font-black text-5md">
        <img width="30px" src="/react.png" alt="icon" />
        React
      </p>
      <p className="text-white flex justify-start gap-[15px] align-center font-black text-5md">
        <img width="30px" src="/threejs.png" alt="icon" />
        ThreeJS
      </p>
      <p className="text-white flex justify-start gap-[15px] align-center font-black text-5md">
        <img width="30px" src="/openai.png" alt="icon" />
        OpenAI API
      </p>
      <p className="text-white flex justify-start gap-[15px] align-center font-black text-5md">
        <img width="30px" src="/framer.png" alt="icon" />
        Framer-Motion
      </p>
      <p className="text-white flex justify-start gap-[15px] align-center font-black text-5md">
        <img width="30px" src="/tail.png" alt="icon" />
        TailWindCSS
      </p>
    </Card>
  );
};

export default Techs;
