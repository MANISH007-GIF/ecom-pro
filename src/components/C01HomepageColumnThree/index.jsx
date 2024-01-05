import React from "react";

import { Img, Text } from "components";

const C01HomepageColumnThree = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-center justify-start w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900_01"
            size="txtPoppinsSemiBold32"
          >
            {props?.text}
          </Text>
          <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-center justify-between w-full">
            <Img
              className="h-[200px] md:h-auto object-cover rounded-[10px] w-[200px]"
              src="images/img_instagrampost.png"
              alt="instagrampost"
            />
            <div className="h-[200px] relative w-[200px]">
              <Img
                className="absolute h-[200px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-[200px]"
                src="images/img_instagrampost_200x200.png"
                alt="instagrampost_One"
              />
              <Img
                className="absolute h-8 inset-[0] justify-center m-auto w-8"
                src="images/img_icons.svg"
                alt="icons"
              />
            </div>
            <Img
              className="h-[200px] md:h-auto object-cover rounded-[10px] w-[200px]"
              src="images/img_instagrampost_1.png"
              alt="instagrampost_Two"
            />
            <Img
              className="h-[200px] md:h-auto object-cover rounded-[10px] w-[200px]"
              src="images/img_instagrampost_2.png"
              alt="instagrampost_Three"
            />
            <Img
              className="h-[200px] md:h-auto object-cover rounded-[10px] w-[200px]"
              alt="instagrampost_Four"
              src={props?.image}
            />
            <Img
              className="h-[200px] md:h-auto object-cover rounded-[10px] w-[200px]"
              alt="instagrampost_Five"
              src={props?.image1}
            />
          </div>
        </div>
      </div>
    </>
  );
};

C01HomepageColumnThree.defaultProps = {
  text: "Follow us on Instagram",
  image: "images/img_instagrampost_3.png",
  image1: "images/img_instagrampost_4.png",
};

export default C01HomepageColumnThree;
