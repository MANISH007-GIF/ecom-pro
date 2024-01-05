import React from "react";

import { Button, Img, Text } from "components";

const C04HomepageBannar = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-[255px] inset-[0] justify-center m-auto object-cover rounded-lg w-full"
          src="images/img_image_255x424.png"
          alt="image"
        />
        <div className="absolute flex flex-col gap-4 h-max inset-y-[0] items-start justify-start left-[6%] my-auto w-auto">
          <div className="flex flex-col gap-2 items-start justify-start w-auto">
            <Text
              className="leading-[120.00%] max-w-[183px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-justify text-white-A700"
              size="txtPoppinsSemiBold32WhiteA700"
            >
              {props?.p100freshcowmilkone}
            </Text>
            {props?.price}
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
            <div className="!text-green-A700 font-poppins font-semibold text-justify text-sm">
              {props?.shopNow}
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

C04HomepageBannar.defaultProps = {
  p100freshcowmilkone: (
    <>
      100% Fresh <br />
      Cow Milk
    </>
  ),
  price: (
    <Text
      className="text-base text-justify text-white-A700 w-auto"
      size="txtPoppinsRegular16WhiteA700"
    >
      <span className="text-white-A700_cc font-poppins text-sm font-normal">
        Starting at
      </span>
      <span className="text-white-A700 font-poppins text-sm font-normal">
        {" "}
      </span>
      <span className="text-white-A700 font-poppins text-xl font-medium">
        $14.99
      </span>
    </Text>
  ),
  shopNow: "Shop Now",
};

export default C04HomepageBannar;
