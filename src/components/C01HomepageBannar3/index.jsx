import React from "react";

import { Button, Img, Text } from "components";

const C01HomepageBannar3 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-[536px] inset-[0] justify-center m-auto object-cover rounded-lg w-full"
          alt="rectangleFiftyFour"
          src={props?.rectanglefiftyfour}
        />
        <div className="absolute flex flex-col gap-1.5 inset-x-[0] items-center justify-start mx-auto top-[6%] w-[66%]">
          <Text
            className="text-center text-sm text-white-A700 tracking-[0.42px] uppercase"
            size="txtPoppinsMedium14WhiteA700"
          >
            {props?.offer}
          </Text>
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700"
            size="txtPoppinsSemiBold40WhiteA700"
          >
            {props?.lowfatmeat}
          </Text>
          <div className="flex flex-col gap-7 items-center justify-start w-3/5 md:w-full">
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Text
                className="text-center text-lg text-white-A700 w-auto"
                size="txtPoppinsRegular18WhiteA700"
              >
                {props?.startedat}
              </Text>
              <Text
                className="text-center text-orange-600 text-xl w-auto"
                size="txtPoppinsSemiBold20"
              >
                {props?.price}
              </Text>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[162px]"
              rightIcon={
                <Img
                  className="mt-[3px] mb-[5px] ml-3"
                  src="images/img_arrowleft.svg"
                  alt="arrow_left"
                />
              }
              shape="round"
              color="white_A700"
              size="md"
              variant="fill"
            >
              <div className="!text-green-A700 font-poppins font-semibold text-justify text-sm">
                {props?.shopNow}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

C01HomepageBannar3.defaultProps = {
  rectanglefiftyfour: "images/img_rectangle54_536x424.png",
  offer: "85% Fat Free",
  lowfatmeat: "Low-Fat Meat",
  startedat: "Started at",
  price: "$79.99",
  shopNow: "Shop Now",
};

export default C01HomepageBannar3;
