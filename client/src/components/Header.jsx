/* eslint-disable react/prop-types */
// import React from 'react'
import { useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import { state } from "../store";
import AlertBox from "./UI/AlertBox";
import { AnimatePresence } from "framer-motion";
import Techs from "./Techs";
import Cart from "./Cart";
import Favourite from "./Favourite";
// import { motion } from "framer-motion";

const Header = () => {
  const [width, setWidth] = useState(["10%", "10%"]);
  const [xDist, setXdist] = useState("0px");
  const [isClicked, setIsClicked] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);

  const snap = useSnapshot(state);

  useEffect(() => {
    const calcWidth = () => {
      window.innerWidth < 540
        ? setWidth(["60%", "30%"])
        : window.innerWidth < 1020
        ? setWidth(["30%", "20%"])
        : setWidth(["10%", "10%"]);
    };
    calcWidth();

    window.addEventListener("resize", calcWidth);

    return () => window.removeEventListener("resize", calcWidth);
  }, []);
  return (
    <div className="fixed pointer-events-none p-10 xl:p-20 xl:pt-5 pt-5 w-full top-0 flex justify-center items-start gap-[10%] z-10">
      {
        //collapsible tech stack icon
        <div className="flex w-[50%] pointer-events-auto justify-start items-center">
          <button
            onMouseOver={() => setXdist("60px")}
            onMouseOut={() => setXdist(isClicked ? "60px" : "0px")}
            onClick={() => {
              switch (
                width[0] //checking device width
              ) {
                case "10%": //desktop
                  xDist === "60px" && !isClicked
                    ? setXdist("60px")
                    : setXdist("0px");
                  break;
                case "30%": //tablet
                  !isClicked ? setXdist("60px") : setXdist("0px");
                  break;
                case "60%": //mobile
                  !isClicked ? setXdist("60px") : setXdist("0px");
                  break;
              }
              // xDist === "60px" && !isClicked ? setXdist("60px") : setXdist("0px");
              setIsCart(false);
              setIsFavourite(false);
              setIsClicked((prev) => !prev);

              state.isTech = !snap.isTech;
            }}
            style={{ width: `${width[1]}` }}
          >
            <svg
              version="1.1"
              id="logo"
              x="0px"
              y="0px"
              width="100%"
              //   height="200px"
              viewBox="0 0 200 200"
              enableBackground="new 0 0 200 200"
              fill="#fff"
              // stroke={"#fff"}
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
                // initial={{ x: 0, pathLength: 1 }}
                // whileHover={{ x: 100, pathLength: 1 }}
                // transition={{ duration: 0.5 }}
                style={{
                  transform: `translateX(${xDist})`,
                  transition: "all 0.1s linear",
                }}
                fillRule="evenodd"
                stroke={"#fff"}
                clipRule="evenodd"
                d="M125.25,103.6c0,0.221-4.478,0.4-10,0.4h-80c-5.523,0-10-0.18-10-0.4V100.4
	c0-0.221,4.477-0.4,10-0.4h80c5.522,0,10,0.18,10,0.4V103.6z"
              />
              <path
                style={{
                  transform: `translateX(${"-" + xDist})`,
                  transition: "all 0.1s linear",
                }}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M174.75,121.1c0,0.221-6.694,0.4-14.95,0.4H40.2c-8.257,0-14.95-0.18-14.95-0.4
	V117.9c0-0.221,6.693-0.4,14.95-0.4h119.6c8.256,0,14.95,0.18,14.95,0.4V121.1z"
              />
            </svg>
          </button>
        </div>
      }
      {
        //cart and favourite icon
        <div className="flex flex-row w-[50%] gap-4  justify-end items-center ">
          <button
            className="relative pointer-events-auto cursor-pointer"
            style={{ width: `${width[1]}` }}
            onClick={() => {
              setIsCart((prev) => !prev);
              setIsFavourite(false);
              setXdist("0px");
              setIsClicked(false);
              state.isTech = false;
            }}
          >
            {snap.cart.length > 0 && (
              <span className="absolute right-0 top-2 flex items-center justify-center w-[10%] h-[10%] p-2 rounded-full bg-red-500 text-white text-[0.8em]">
                {snap.cart.length}
              </span>
            )}
            <svg
              version="1.1"
              id="cart"
              x="0px"
              y="0px"
              // width={width[1]}
              width={"100%"}
              //   height="200px"
              viewBox="0 0 200 200"
              enableBackground="new 0 0 200 200"
              fill="#fff"
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
                stroke="#fff"
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
                stroke="#fff"
                strokeWidth="4"
                strokeMiterlimit="10"
                cx="139.173"
                cy="158"
                r="9.5"
              />
            </svg>
          </button>
          <button
            className="relative pointer-events-auto cursor-pointer flex flex-row justify-center items-start"
            style={{ width: width[1] }}
            onClick={() => {
              setIsFavourite((prev) => !prev);
              setIsCart(false);
              setXdist("0px");
              setIsClicked(false);
              state.isTech = false;
            }}
          >
            {snap.favourite.length > 0 && (
              <span className="absolute right-0 flex items-center justify-center w-[10%] h-[10%] p-2 rounded-full bg-red-500 text-white text-[0.8em]">
                {snap.favourite.length}
              </span>
            )}
            <svg
              version="1.1"
              id="heartsvg"
              x="0px"
              y="0px"
              width="60%"
              viewBox="0 0 200 200"
              enableBackground="new 0 0 200 200"
            >
              <path
                fillRule="evenodd"
                fill="#fff"
                clipRule="evenodd"
                d="M100.187,44.869c1.772-1.672,3.641-3.521,5.601-5.267
	c6.774-6.033,14.203-11.009,22.797-14.132c8.406-3.055,16.982-3.169,25.654-1.625c10.779,1.919,20.257,6.461,28.029,14.285
	c7.71,7.76,12.232,17.175,14.041,27.887c3.078,18.235-1.45,34.704-11.847,49.753c-5.935,8.592-12.997,16.204-20.838,23.031
	c-10.329,8.994-20.919,17.688-31.399,26.509c-8.909,7.498-17.537,15.282-25.143,24.146c-3.581,4.174-10.287,4.392-13.799,0.309
	c-9.19-10.687-19.832-19.798-30.609-28.788c-9.181-7.658-18.401-15.279-27.333-23.221c-8.782-7.808-16.611-16.513-22.71-26.655
	C5.539,99.309,2.091,86.586,2.977,72.812c0.829-12.909,5.114-24.451,14.146-33.953c7.876-8.287,17.666-12.919,28.808-15.056
	c15.897-3.049,29.847,1.318,42.389,10.973C92.387,37.906,96.158,41.424,100.187,44.869z"
              />
            </svg>
          </button>
        </div>
      }
      <AnimatePresence mode="wait">
        {snap.isTech && <Techs key={"tech"} />}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {isCart && <Cart setIsCart={setIsCart} />}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {isFavourite && <Favourite />}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {snap.isAdded[snap.index] && (
          <AlertBox
            text={snap.alertBox.text}
            progress={snap.alertBox.progress}
            error={snap.alertBox.error}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
