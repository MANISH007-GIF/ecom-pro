import React from "react";

import { Img, Text } from "components";

const C01HomepageBannar = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-72 inset-[0] justify-center m-auto object-cover rounded-[10px] w-full"
          src="images/img_bg.png"
          alt="bg"
        />
        <div className="absolute flex flex-col gap-6 items-start justify-start left-[8%] top-[10%] w-auto">
          <div className="flex flex-col gap-3 items-start justify-start w-auto">
            <div className="flex flex-col gap-2 items-start justify-start w-auto">
              <Text
                className="text-gray-900_01 text-sm tracking-[0.42px] uppercase w-auto"
                size="txtPoppinsMedium14Gray90001"
              >
                {props?.summersale}
              </Text>
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01 w-auto"
                size="txtPoppinsSemiBold32"
              >
                {props?.offer}
              </Text>
            </div>
            <Text
              className="text-gray-700 text-sm w-auto"
              size="txtPoppinsRegular14Gray700"
            >
              {props?.onlyfruitvegetaOne}
            </Text>
          </div>
          <div className="flex flex-row gap-3 items-center justify-center w-auto">
            <Text
              className="text-base text-green-A700 w-auto"
              size="txtPoppinsSemiBold16GreenA700"
            >
              {props?.shopnow}
            </Text>
            <Img
              className="h-3 w-[15px]"
              src="images/img_arrowleft.svg"
              alt="arrowleft"
            />
          </div>
        </div>
      </div>
    </>
  );
};

C01HomepageBannar.defaultProps = {
  summersale: "Summer Sale",
  offer: "75% OFF",
  onlyfruitvegetaOne: "Only Fruit & Vegetable",
  shopnow: "Shop Now",
};

export default C01HomepageBannar;
