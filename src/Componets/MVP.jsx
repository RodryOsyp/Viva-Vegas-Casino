import React from "react";
import { Link } from "react-router-dom";
import { useBearStore } from "../STORE/store";

const MVP = () => {
  const g = useBearStore((state) => state.increasePopulation)
    const bears = useBearStore((state) => state.bears);
  return (
    <>
      <div>{bears}</div>
      <Link to={"/text"}>PON</Link>
      <button onClick={g}>Button</button>
      
    </>
  );
};

export default MVP;
