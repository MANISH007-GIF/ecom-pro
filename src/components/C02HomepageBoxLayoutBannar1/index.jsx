import React from "react";

import { Button, Img, Text } from "components";

const C02HomepageBoxLayoutBannar1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-[335px] inset-[0] justify-center m-auto object-cover w-full"
          alt="image_Two"
          src={props?.imageTwo}
        />
        <div className="absolute flex flex-col gap-4 inset-x-[0] items-center justify-start mx-auto top-[6%] w-auto md:w-full">
          <div className="flex flex-col gap-2 items-center justify-start w-auto md:w-full">
            <Text
              className="text-center text-gray-900_01 text-xs tracking-[0.36px] uppercase w-auto"
              size="txtPoppinsMedium12Gray90001"
            >
              {props?.summersale}
            </Text>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-green-A700 w-auto"
              size="txtPoppinsSemiBold32GreenA700"
            >
              {props?.offerOne}
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
            <div className="!text-green-A700 font-poppins font-semibold text-justify text-sm">
              {props?.shopNowTwo}
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

C02HomepageBoxLayoutBannar1.defaultProps = {
  imageTwo: "images/img_image_335x248.png",
  summersale: "Summer Sale",
  offerOne: "75% off",
  shopNowTwo: "Shop Now",
};

export default C02HomepageBoxLayoutBannar1;
