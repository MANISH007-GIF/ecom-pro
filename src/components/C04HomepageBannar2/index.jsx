import React from "react";

import { Button, Img, Text } from "components";

const C04HomepageBannar2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-[255px] inset-[0] justify-center m-auto object-cover rounded-lg w-full"
          src="images/img_image_36.png"
          alt="image"
        />
        <div className="absolute flex flex-col gap-5 h-max inset-y-[0] items-start justify-start left-[8%] my-auto w-auto">
          <div className="flex flex-col gap-2 items-start justify-start w-auto">
            <Text
              className="text-black-900 text-sm tracking-[0.42px] uppercase w-auto"
              size="txtPoppinsMedium14Black900"
            >
              {props?.p100organic}
            </Text>
            <Text
              className="leading-[120.00%] max-w-[188px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900"
              size="txtPoppinsSemiBold32Black900"
            >
              {props?.quickbreakfast}
            </Text>
          </div>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[162px]"
            rightIcon={
              <Img
                className="ml-3"
                src="images/img_arrowleft.svg"
                alt="arrow_left"
              />
            }
            shape="round"
            color="white_A700"
            size="lg"
            variant="fill"
          >
            <div className="!text-green-A700 font-poppins font-semibold text-left text-sm">
              {props?.shopNow}
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

C04HomepageBannar2.defaultProps = {
  p100organic: "100% Organic",
  quickbreakfast: "Quick Breakfast",
  shopNow: "Shop Now",
};

export default C04HomepageBannar2;
