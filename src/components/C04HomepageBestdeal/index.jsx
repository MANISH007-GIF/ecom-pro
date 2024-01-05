import React from "react";

import { Button, Img, Text } from "components";

const C04HomepageBestdeal = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[308px] sm:h-auto md:ml-[0] ml-[114px] object-cover w-[29%] md:w-full"
          src="images/img_image_484x819.png"
          alt="image_One"
        />
        <div className="h-[495px] sm:h-[582px] relative w-[62%] md:w-full">
          <Img
            className="absolute h-[495px] inset-y-[0] my-auto object-cover right-[0] w-[63%]"
            src="images/img_image_495x704.png"
            alt="image_Two"
          />
          <div className="absolute flex flex-col gap-3 items-center justify-start left-[0] top-[13%] w-auto">
            <Text
              className="text-base text-center text-green-A700 tracking-[0.32px] uppercase w-auto"
              size="txtPoppinsMedium16GreenA700"
            >
              {props?.bestdealstext}
            </Text>
            <Text
              className="leading-[120.00%] max-w-[508px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
              size="txtPoppinsSemiBold40Black900"
            >
              {props?.specialproductstext}
            </Text>
          </div>
          <div className="absolute bottom-[37%] flex sm:flex-col flex-row gap-2 items-center justify-start left-[3%] w-auto">
            <div className="bg-white-A700 flex flex-col gap-1 items-center justify-start px-2 py-5 rounded-md w-24">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-center text-green-A700 w-auto"
                size="txtPoppinsRegular32GreenA700"
              >
                {props?.daystext}
              </Text>
              <Text
                className="text-center text-gray-600_01 text-sm tracking-[0.42px] uppercase w-auto"
                size="txtPoppinsMedium14Gray60001"
              >
                {props?.dayslabel}
              </Text>
            </div>
            <Text
              className="text-center text-gray-600_01 text-xl w-auto"
              size="txtPoppinsRegular20Gray60001"
            >
              {props?.sixteen}
            </Text>
            <div className="bg-white-A700 flex flex-col gap-1 items-center justify-start px-2 py-5 rounded-md w-24">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-center text-green-A700 w-auto"
                size="txtPoppinsRegular32GreenA700"
              >
                {props?.hourstext}
              </Text>
              <Text
                className="text-center text-gray-600_01 text-sm tracking-[0.42px] uppercase w-auto"
                size="txtPoppinsRegular14Gray60001"
              >
                {props?.hourslabel}
              </Text>
            </div>
            <Text
              className="text-center text-gray-600_01 text-xl w-auto"
              size="txtPoppinsRegular20Gray60001"
            >
              {props?.seventeen}
            </Text>
            <div className="bg-white-A700 flex flex-col gap-1 items-center justify-start px-2 py-5 rounded-md w-24">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-center text-green-A700 w-auto"
                size="txtPoppinsRegular32GreenA700"
              >
                {props?.minutestext}
              </Text>
              <Text
                className="text-center text-gray-600_01 text-sm tracking-[0.42px] uppercase w-auto"
                size="txtPoppinsRegular14Gray60001"
              >
                {props?.minuteslabel}
              </Text>
            </div>
            <Text
              className="text-center text-gray-600_01 text-xl w-auto"
              size="txtPoppinsRegular20Gray60001"
            >
              {props?.nineteen}
            </Text>
            <div className="bg-white-A700 flex flex-col gap-1 items-center justify-start px-2 py-5 rounded-md w-24">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-center text-green-A700 w-auto"
                size="txtPoppinsRegular32GreenA700"
              >
                {props?.secondstext}
              </Text>
              <Text
                className="text-center text-gray-600_01 text-sm tracking-[0.42px] uppercase w-auto"
                size="txtPoppinsRegular14Gray60001"
              >
                {props?.secondslabel}
              </Text>
            </div>
          </div>
          <Button
            className="bottom-[20%] cursor-pointer flex items-center justify-center left-[14%] min-w-[191px] rounded-[25px]"
            rightIcon={
              <Img
                className="mt-1 mb-[7px] ml-4 left-[1%] absolute inset-y-[1%]"
                src="images/img_arrowleft_white_a700.svg"
                alt="arrow_left"
              />
            }
            color="green_A700"
            size="lg"
            variant="fill"
          >
            <div className="font-poppins font-semibold text-base text-left">
              {props?.shopNowOne}
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

C04HomepageBestdeal.defaultProps = {
  bestdealstext: "Best Deals",
  specialproductstext: "Our Special Products Deal of the Month",
  daystext: "00",
  dayslabel: "Days",
  sixteen: ":",
  hourstext: "02",
  hourslabel: "Hours",
  seventeen: ":",
  minutestext: "18",
  minuteslabel: "Mins",
  nineteen: ":",
  secondstext: "46",
  secondslabel: "Secs",
  shopNowOne: "Shop now",
};

export default C04HomepageBestdeal;
