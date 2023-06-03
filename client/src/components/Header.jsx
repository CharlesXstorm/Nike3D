// import React from 'react'
import { useEffect, useState } from "react";

const Header = () => {
  const [width, setWidth] = useState(["10%", "10%"]);

  useEffect(() => {
    const calcWidth = () => {
      window.innerWidth < 540
        ? setWidth(["60%", "30%"])
        : window.innerWidth < 1020
        ? setWidth(["30%", "20%"])
        : setWidth(["10%", "10%"]);
    };

    window.addEventListener("resize", calcWidth);

    return () => window.removeEventListener("resize", calcWidth);
  }, [width]);
  return (
    <div className="absolute p-10 xl:p-20 xl:pt-5 pt-5 w-full top-0 flex justify-center items-center gap-[10%]">
      <div className="flex w-[50%] justify-start items-center">
        <svg
          version="1.1"
          id="logo"
          x="0px"
          y="0px"
          width={width[0]}
          //   height="200px"
          viewBox="0 0 200 200"
          enableBackground="new 0 0 200 200"
        >
          <text
            transform="matrix(1 0 0 1 39.25 162)"
            fontFamily="Montserrat"
            fontSize="24"
          >
            XSTORM
          </text>
          <text
            transform="matrix(1 0 0 1 39.25 77)"
            fontFamily="Montserrat"
            fontSize="48"
          >
            DEV
          </text>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M125.25,103.6c0,0.221-4.478,0.4-10,0.4h-80c-5.523,0-10-0.18-10-0.4V100.4
	c0-0.221,4.477-0.4,10-0.4h80c5.522,0,10,0.18,10,0.4V103.6z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M174.75,121.1c0,0.221-6.694,0.4-14.95,0.4H40.2c-8.257,0-14.95-0.18-14.95-0.4
	V117.9c0-0.221,6.693-0.4,14.95-0.4h119.6c8.256,0,14.95,0.18,14.95,0.4V121.1z"
          />
        </svg>
      </div>
      <div className="flex w-[50%] justify-end items-center ">
        <svg
          version="1.1"
          id="cart"
          x="0px"
          y="0px"
          width={width[1]}
          //   height="200px"
          viewBox="0 0 200 200"
          enableBackground="new 0 0 200 200"
        >
          <path
            id="basket"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M62.026,122.281c-5.575-26.326-11.175-52.536-16.614-78.778
	c-0.617-2.977-1.992-3.708-4.758-3.59c-4.324,0.184-8.672,0.192-12.987-0.077c-1.138-0.071-2.195-1.436-3.29-2.206
	c1.025-0.843,2.025-2.373,3.081-2.413c5.989-0.229,12.001-0.288,17.98,0.051c1.302,0.073,2.516,1.982,3.725,3.097
	c0.204,0.188,0.169,0.63,0.252,0.952c2.853,11.14,2.853,11.144,14.59,11.139c35.322-0.013,70.645-0.03,105.967-0.043
	c1,0,2.003,0.098,2.998,0.044c4.057-0.221,5.194,1.355,4.291,5.459c-4.012,18.215-7.754,36.489-11.598,54.742
	c-0.858,4.074-1.986,8.111-2.53,12.226c-0.532,4.035-2.579,5.063-6.397,5.046c-28.658-0.128-57.316-0.078-85.975-0.079
	c-2.332,0-4.673-0.085-6.993,0.09c-3.124,0.235-5.379,2.182-4.716,5.153c0.422,1.893,2.728,3.633,4.582,4.835
	c1.068,0.692,2.919,0.202,4.417,0.203c29.324,0.005,58.649,0.001,87.974,0.015c1.492,0.001,3.051-0.09,4.451,0.31
	c0.713,0.203,1.58,1.408,1.574,2.153c-0.006,0.734-0.889,1.812-1.635,2.105c-1.027,0.404-2.288,0.27-3.449,0.27
	c-30.49,0.011-60.981-0.016-91.472,0.035c-4.728,0.008-9.167-1.213-10.427-5.935c-0.833-3.122,0.056-7.049,1.228-10.227
	C56.966,125.041,59.75,124.005,62.026,122.281z M53.354,55.626c0,1.036-0.113,1.702,0.017,2.317
	c4.315,20.519,8.736,41.017,12.909,61.564c0.704,3.465,2.649,3.524,5.325,3.52c27.304-0.054,54.608-0.106,81.911,0.031
	c3.479,0.018,4.916-0.9,5.617-4.442c3.039-15.343,6.418-30.618,9.646-45.924c1.184-5.615,2.294-11.246,3.478-17.066
	C132.169,55.626,92.823,55.626,53.354,55.626z"
          />
          <circle
            id="tire2"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="none"
            stroke="#000000"
            strokeWidth="4"
            strokeMiterlimit="10"
            cx="77.286"
            cy="158"
            r="9.5"
          />
          <circle
            id="tire1"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="none"
            stroke="#000000"
            strokeWidth="4"
            strokeMiterlimit="10"
            cx="139.173"
            cy="158"
            r="9.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
