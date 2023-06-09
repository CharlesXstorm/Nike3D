// import React from 'react'

import { state } from "../store";
import { useSnapshot } from "valtio";

const Nav = () => {
  const snap = useSnapshot(state);
  return (
    <div
      className={`absolute p-10 pointer-events-none w-full z-10 bottom-[100px] sm:bottom-[10px] flex justify-center items-center gap-[5%]`}
    >
      <div className="left flex justify-start">
        <button
          onClick={() => {
            state.changePos = -3;
            state.direction = "left";
            setTimeout(() => {
              state.index =
                snap.index - 1 < 0 ? snap.indexLen - 1 : snap.index - 1;
              state.changePos = 0;
            }, [500]);
          }}
          className="w-[40%] pointer-events-auto hover:backdrop-blur-md hover:rounded-xl"
        >
          <svg
            version="1.1"
            id="svgarrow"
            x="0px"
            y="0px"
            width="100%"
            //   height="200px"
            viewBox="0 0 300 200"
            enableBackground="new 0 0 300 200"
            // className="bg-[rgba(0,255,0,1)] sm:bg-[rgba(0,255,0,0.4)] p-[10px] backdrop-blur-md"
            className="p-[10px] hover:fill-lime-400"
            fill="#fff"
            // style={{
            //   backgroundColor: "rgba(0,255,0,0.4)",
            //   backdropFilter: "blur(12px)",
            //   padding: "10px",
            // }}
          >
            <path
              id="arrow"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.487,98.138c1.676-2.233,3.113-4.704,5.064-6.664
	c25.01-25.119,50.101-50.157,75.146-75.24c2.75-2.753,5.742-4.494,9.772-3.3c5.963,1.767,8.285,8.766,4.524,13.706
	c-0.635,0.834-1.403,1.572-2.148,2.317C97.832,48.977,77.817,68.997,57.78,88.994c-0.602,0.6-1.449,0.954-2.182,1.421
	c0.219,0.294,0.437,0.589,0.656,0.883c0.94,0,1.879,0,2.818,0c68.054,0,136.107,0.037,204.161-0.069
	c5.498-0.009,9.434,1.615,11.448,6.909c0,1.298,0,2.596,0,3.894c-2.154,5.279-6.123,6.919-11.716,6.909
	c-67.973-0.123-135.945-0.08-203.917-0.08c-0.936,0-1.871,0-2.807,0c-0.267,0.356-0.535,0.713-0.802,1.068
	c0.792,0.409,1.749,0.652,2.351,1.253c20.124,20.023,40.205,40.092,60.321,60.124c2.757,2.746,4.461,5.767,3.353,9.78
	c-1.669,6.047-8.521,8.464-13.58,4.776c-0.846-0.617-1.601-1.371-2.345-2.114c-25.412-25.405-50.832-50.803-76.188-76.264
	c-1.551-1.557-2.589-3.623-3.866-5.453C25.487,100.733,25.487,99.436,25.487,98.138z"
            />
          </svg>
        </button>
      </div>

      <div className="right flex justify-end">
        <button
          onClick={() => {
            state.direction = "right";
            state.changePos = -3;
            setTimeout(() => {
              state.index =
                snap.index + 1 > snap.indexLen - 1 ? 0 : snap.index + 1;
              state.changePos = 0;
            }, [500]);
          }}
          className="w-[40%] pointer-events-auto hover:backdrop-blur-md hover:rounded-xl"
        >
          <svg
            className="origin-[50%, 50%] rotate-[180deg] p-[10px] hover:fill-lime-400"
            version="1.1"
            id="svgarrow"
            x="0px"
            y="0px"
            width="100%"
            //   height="200px"
            viewBox="0 0 300 200"
            enableBackground="new 0 0 300 200"
            fill="#fff"

            // style={{ backgroundColor: "lime", padding: "10px" }}
          >
            <path
              id="arrow"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.487,98.138c1.676-2.233,3.113-4.704,5.064-6.664
	c25.01-25.119,50.101-50.157,75.146-75.24c2.75-2.753,5.742-4.494,9.772-3.3c5.963,1.767,8.285,8.766,4.524,13.706
	c-0.635,0.834-1.403,1.572-2.148,2.317C97.832,48.977,77.817,68.997,57.78,88.994c-0.602,0.6-1.449,0.954-2.182,1.421
	c0.219,0.294,0.437,0.589,0.656,0.883c0.94,0,1.879,0,2.818,0c68.054,0,136.107,0.037,204.161-0.069
	c5.498-0.009,9.434,1.615,11.448,6.909c0,1.298,0,2.596,0,3.894c-2.154,5.279-6.123,6.919-11.716,6.909
	c-67.973-0.123-135.945-0.08-203.917-0.08c-0.936,0-1.871,0-2.807,0c-0.267,0.356-0.535,0.713-0.802,1.068
	c0.792,0.409,1.749,0.652,2.351,1.253c20.124,20.023,40.205,40.092,60.321,60.124c2.757,2.746,4.461,5.767,3.353,9.78
	c-1.669,6.047-8.521,8.464-13.58,4.776c-0.846-0.617-1.601-1.371-2.345-2.114c-25.412-25.405-50.832-50.803-76.188-76.264
	c-1.551-1.557-2.589-3.623-3.866-5.453C25.487,100.733,25.487,99.436,25.487,98.138z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Nav;
