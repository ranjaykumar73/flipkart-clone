import React, { useEffect, useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { Card } from "./Card";
import { Footer } from "./Footer";
// import data from "./db.json";

const Home = () => {
  const Images = [
    "https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/4eff64868f4b702b.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/fd77eeeb2d597bb0.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/0944d5fb3c43e1de.jpeg?q=20",
  ];

  let [currentImage, setCurrentImage] = useState(0);

  

  function decCount() {
    if (currentImage === 0) {
      setCurrentImage(Images.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  }

  function incCount() {
    setCurrentImage((currentImage + 1) % Images.length);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      incCount();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentImage]);


//   function Mobile(){
//     const furnitureData = data.filter((item) => item.type === "Mobile");
// const furnitureImages = furnitureData.map((item) => item.img);

//   }

  return (
    <div className="bg-gray-100 h-auto ">
      <div className="flex justify-center items-center ">
        <div
          className="flex justify-center items-center"
          style={{ marginTop: "6rem" }}
        >
          <div className="flex gap-72  items-center bg-white  py-1 px-20 ">
            <div className="text-center font-semibold cursor-pointer">
            
              <img className="w-14" src="./mobile.webp" alt="" />
              Mobile
            </div>
            <div className="text-center font-semibold cursor-pointer">
              <img className="w-14" src="./fashion.webp" alt="" />
              Fashion
            </div>
            <div className="text-center font-semibold cursor-pointer">
              <img className="w-14 ml-3" src="./electronic.webp" alt="" />
              Electronics
            </div>
            <div className="text-center font-semibold cursor-pointer">
              <img className="w-14 ml-1" src="./furniture.webp" alt="" />
              Furniture
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-between w-[100%] h-[40vh] mt-[20px] max-w-[1700px]">
        <button onClick={decCount}>
          <GrPrevious />
        </button>
        <div
          style={{ maxWidth: "1650px", display: "flex", overflow: "hidden" }}
        >
          {Images.map((item, i) => (
            <img
              key={item}
              src={item}
              className={
                "w-[1650px] max-w-[1650px] object-contain " +
                (currentImage === i ? "hidden" : "block")
              }
              alt=""
            />
          ))}
        </div>

        <button onClick={incCount}>
          <GrNext />
        </button>
      </div>
      <Card />
      <Footer/>
    </div>
  );
};

export default Home;
