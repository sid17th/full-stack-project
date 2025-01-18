import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://media.istockphoto.com/id/1162934513/photo/set-of-raw-cereals-grains-pasta-and-canned-food.jpg?s=1024x1024&w=is&k=20&c=h8UqHHp6CZKPzYvTP9xALYbpvUPTnDKOWcnHbLy8g8s=",
          backgroundSize: '100% 100%', // Increases the size of the image
          backgroundPosition: 'center',
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%] ml-[36px]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Empowering Local Shops,  <br /> Elevating Your Grocery Experience
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
        At Grocerease, we believe in the power of community. Our platform is designed to connect you with local shopkeepers, bringing you the freshest products directly from neighborhood stores while supporting small businesses.
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
