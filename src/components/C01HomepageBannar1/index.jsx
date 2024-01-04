import React from "react";

import { Img, Text } from "components";

const C01HomepageBannar1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-72 inset-[0] justify-center m-auto object-cover rounded-[10px] w-full"
          src="images/img_bg_288x423.png"
          alt="bg_One"
        />
        <div className="absolute flex flex-col gap-8 h-max inset-[0] items-center justify-start m-auto w-auto">
          <div className="flex flex-col gap-3 items-center justify-center w-auto">
            <Text
              className="text-center text-sm text-white-A700 tracking-[0.42px] uppercase w-auto"
              size="txtPoppinsMedium14WhiteA700"
            >
              {props?.bestdealtext}
            </Text>
            <Text
              className="leading-[120.00%] max-w-[343px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
              size="txtPoppinsSemiBold32WhiteA700"
            >
              {props?.specialproductstext}
            </Text>
          </div>
          <div className="flex flex-row gap-3 items-center justify-center w-auto">
            <Text
              className="text-base text-center text-green-A700 w-auto"
              size="txtPoppinsSemiBold16GreenA700"
            >
              {props?.shopnowtext}
            </Text>
            <Img
              className="h-3 w-[15px]"
              src="images/img_arrowleft.svg"
              alt="arrowleft_One"
            />
          </div>
        </div>
      </div>
    </>
  );
};

C01HomepageBannar1.defaultProps = {
  bestdealtext: "Best Deal",
  specialproductstext: "Special Products Deal of the Month",
  shopnowtext: "Shop Now",
};

export default C01HomepageBannar1;
