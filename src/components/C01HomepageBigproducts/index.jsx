import React from "react";

import { Button, Img, List, Text } from "components";

const C01HomepageBigproducts = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="md:h-[446px] h-[448px] relative w-full">
          <div className="absolute h-[446px] inset-[0] justify-center m-auto w-full">
            <Img
              className="absolute h-[446px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_image_446x525.png"
              alt="image_One"
            />
            <div className="absolute flex flex-row gap-2 items-center justify-start left-[5%] top-[5%] w-auto">
              <div className="bg-red-400 flex flex-row gap-1 items-center justify-center px-2 py-[3px] rounded w-auto">
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtPoppinsRegular14WhiteA700"
                >
                  {props?.sale}
                </Text>
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtPoppinsMedium14WhiteA700"
                >
                  {props?.fifty}
                </Text>
              </div>
              <Text
                className="bg-blue-A400 justify-center px-2 py-0.5 rounded text-sm text-white-A700 w-auto"
                size="txtPoppinsRegular14WhiteA700"
              >
                {props?.tag}
              </Text>
            </div>
          </div>
          <div className="absolute bottom-[5%] flex sm:flex-col flex-row gap-2 inset-x-[0] items-center justify-start mx-auto sm:px-5 px-6 w-auto">
            <Button
              className="flex h-[46px] items-center justify-center rounded-[50%] w-[46px]"
              shape="circle"
              color="gray_100"
              size="md"
              variant="fill"
            >
              <Img
                className="h-5"
                src="images/img_favorite.svg"
                alt="favorite_One"
              />
            </Button>
            <Button
              className="cursor-pointer flex items-center justify-center w-[371px]"
              rightIcon={
                <div className="h-[15px] mt-[3px] mb-0.5 w-[15px] outline-white-A700 outline-[0.5px] outline">
                  <Img
                    className="h-[15px]"
                    src="images/img_bag_white_a700.svg"
                    alt="bag"
                  />
                </div>
              }
              shape="round"
              color="green_A700"
              size="md"
              variant="fill"
            >
              <div className="font-poppins font-semibold text-left text-sm">
                {props?.addToCart}
              </div>
            </Button>
            <Button
              className="flex h-[46px] items-center justify-center rounded-[50%] w-[46px]"
              shape="circle"
              color="gray_100"
              size="md"
              variant="fill"
            >
              <Img className="h-5" src="images/img_eye1.svg" alt="eyeOne" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-start pt-1.5 sm:px-5 px-6 w-auto md:w-full">
          <div className="flex flex-col gap-[5px] items-center justify-start w-[34%] md:w-full">
            <Text
              className="text-center text-green-800 text-lg w-auto"
              size="txtPoppinsRegular18Green800"
            >
              {props?.language}
            </Text>
            <div className="flex flex-row gap-1 items-start justify-start w-auto">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                size="txtPoppinsMedium24"
              >
                {props?.priceOne}
              </Text>
              <Text
                className="line-through text-2xl md:text-[22px] text-gray-500 sm:text-xl w-auto"
                size="txtPoppinsRegular24Gray500"
              >
                {props?.priceTwo}
              </Text>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start w-auto">
            <Img
              className="h-[18px] w-[18px]"
              src="images/img_star1.svg"
              alt="starOne"
            />
            <Img
              className="h-[18px] w-[18px]"
              src="images/img_star1.svg"
              alt="starTwo"
            />
            <Img
              className="h-[18px] w-[18px]"
              src="images/img_star1.svg"
              alt="starThree"
            />
            <Img
              className="h-[18px] w-[18px]"
              src="images/img_star1.svg"
              alt="starFour"
            />
            <Img
              className="h-[18px] w-[18px]"
              src="images/img_star1.svg"
              alt="starFive"
            />
            <Text
              className="text-gray-600 text-xs w-auto"
              size="txtPoppinsRegular12Gray600"
            >
              {props?.languageOne}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-1.5 items-center justify-center pb-6 pt-[18px] w-auto">
          <Text
            className="text-center text-gray-500 text-sm w-auto"
            size="txtPoppinsRegular14"
          >
            {props?.hurryupoffer}
          </Text>
          <div className="flex flex-row items-start justify-start w-auto">
            <List
              className="sm:flex-col flex-row gap-px grid grid-cols-2 w-[48%]"
              orientation="horizontal"
            >
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-center text-gray-900 text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  {props?.one}
                </Text>
                <Text
                  className="text-[10px] text-center text-gray-500 tracking-[0.30px] uppercase w-auto"
                  size="txtPoppinsMedium10Gray500"
                >
                  {props?.days}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-center text-gray-900 text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  {props?.twentythree}
                </Text>
                <Text
                  className="text-[10px] text-center text-gray-500 tracking-[0.30px] uppercase w-auto"
                  size="txtPoppinsMedium10Gray500"
                >
                  {props?.hours}
                </Text>
              </div>
            </List>
            <Text
              className="text-center text-gray-600 text-xl w-auto"
              size="txtPoppinsRegular20Gray600"
            >
              {props?.six}
            </Text>
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-center text-gray-900 text-lg w-auto"
                size="txtPoppinsMedium18"
              >
                {props?.thirtyfour}
              </Text>
              <Text
                className="text-[10px] text-center text-gray-500 tracking-[0.30px] uppercase w-auto"
                size="txtPoppinsMedium10Gray500"
              >
                {props?.minsOne}
              </Text>
            </div>
            <Text
              className="text-center text-gray-600 text-xl w-auto"
              size="txtPoppinsRegular20Gray600"
            >
              {props?.seven}
            </Text>
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-center text-gray-900 text-lg w-auto"
                size="txtPoppinsMedium18"
              >
                {props?.fiftyseven}
              </Text>
              <Text
                className="text-[10px] text-center text-gray-500 tracking-[0.30px] uppercase w-auto"
                size="txtPoppinsMedium10Gray500"
              >
                {props?.secsOne}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C01HomepageBigproducts.defaultProps = {
  sale: "Sale",
  fifty: "50%",
  tag: "Best Sale",
  addToCart: "Add to Cart",
  language: "Chinese cabbage",
  priceOne: "$12.00",
  priceTwo: "$24.00",
  languageOne: " (524 Feedback)",
  hurryupoffer: "Hurry up! Offer ends In:",
  one: "01",
  days: "Days",
  twentythree: "23",
  hours: "Hours",
  six: ":",
  thirtyfour: "34",
  minsOne: "Mins",
  seven: ":",
  fiftyseven: "57",
  secsOne: "Secs",
};

export default C01HomepageBigproducts;
