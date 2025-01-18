import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiqWy1taPKCsOwMdH5f4cMuoSNzUURb1ov3g&s"
            alt=""
            style={{width:"150px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://cdn.justgotochef.com/uploads/1522907489-Britannia%20Marie%20Gold-Logo.jpg"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D12AQFM60D1HJjHeg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1701867832918?e=2147483647&v=beta&t=qtI3PN5TE4TmIK0dLqJ31ymyru4RLTh-hJLTFaopzjQ"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://cdn.worldvectorlogo.com/logos/cadbury-4.svg"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://1000logos.net/wp-content/uploads/2020/06/Lays-Logo.png"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
