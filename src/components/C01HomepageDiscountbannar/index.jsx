import React from "react";

import { Button, Img, Text } from "components";

const C01HomepageDiscountbannar = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_discountbannar.png')" }}
      >
        <div className="flex flex-col gap-4 items-start justify-center md:ml-[0] ml-[777px] mt-[5px] w-auto sm:w-full">
          <div className="flex flex-col gap-3 items-start justify-start w-auto">
            <Text
              className="text-base text-white-A700 tracking-[0.32px] uppercase w-auto"
              size="txtPoppinsMedium16"
            >
              {props?.summersaleOne}
            </Text>
            {props?.offerOne}
          </div>
          <Text
            className="leading-[150.00%] max-w-[441px] md:max-w-full text-base text-white-A700_99"
            size="txtPoppinsRegular16WhiteA70099"
          >
            {props?.duration}
          </Text>
        </div>
        <Button
          className="cursor-pointer flex items-center justify-center mb-[9px] min-w-[192px] md:ml-[0] ml-[777px] rounded-[25px]"
          rightIcon={
            <Img
              className="mt-1 mb-[7px] ml-4"
              src="images/img_arrowleft_white_a700.svg"
              alt="arrow_left"
            />
          }
          color="green_A700"
          size="lg"
          variant="fill"
        >
          <div className="font-poppins font-semibold text-base text-left">
            {props?.shopNowTwo}
          </div>
        </Button>
      </div>
    </>
  );
};

C01HomepageDiscountbannar.defaultProps = {
  summersaleOne: "Summer Sale",
  offerOne: (
    <Text
      className="md:text-5xl sm:text-[42px] text-[56px] text-white-A700 w-auto"
      size="txtPoppinsSemiBold56WhiteA700"
    >
      <span className="text-orange-600 font-poppins text-left font-semibold">
        37%
      </span>
      <span className="text-white-A700 font-poppins text-left font-semibold">
        {" "}
      </span>
      <span className="text-white-A700 font-poppins text-left font-normal">
        OFF
      </span>
    </Text>
  ),
  duration:
    "Free on all your order, Free Shipping and  30 days money-back guarantee",
  shopNowTwo: "Shop Now",
};

export default C01HomepageDiscountbannar;
