import React from "react";

import { Img, SelectBox, Text } from "components";

const engOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const usdOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const C05HomepageNavigation = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-200 flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] py-3 w-full">
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <Img
              className="h-[18px] w-[15px]"
              src="images/img_linkedin_green_900.svg"
              alt="linkedin_One"
            />
            <Text
              className="text-green-900_01 text-xs w-auto"
              size="txtPoppinsRegular12Green90001"
            >
              {props?.storelocationtext}
            </Text>
          </div>
          <div className="flex sm:flex-1 flex-row gap-5 items-center justify-start w-auto sm:w-full">
            <SelectBox
              className="font-poppins text-center text-green-900_01 text-xs w-[39%] sm:w-full"
              placeholderClassName="text-green-900_01"
              indicator={
                <Img
                  className="h-[3px] outline-green-900_01 outline-[0.5px] outline w-[7px]"
                  src="images/img_arrowdown_green_900.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="frameTwo"
              options={engOptionsList}
              isSearchable={false}
              placeholder="Eng"
              size="xs"
            />
            <SelectBox
              className="font-poppins text-center text-green-900_01 text-xs w-[41%] sm:w-full"
              placeholderClassName="text-green-900_01"
              indicator={
                <Img
                  className="h-[3px] outline-green-900_01 outline-[0.5px] outline w-[7px]"
                  src="images/img_arrowdown_green_900.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="frameThree"
              options={usdOptionsList}
              isSearchable={false}
              placeholder="USD"
            />
          </div>
        </div>
        <div className="bg-white-A700 flex flex-row items-center justify-start p-3.5 shadow-bs5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center ml-[285px] w-[70%]">
            <div className="flex sm:flex-col flex-row gap-[27px] items-start justify-start w-auto sm:w-full">
              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                <Text
                  className="text-gray-900_01 text-sm w-auto"
                  size="txtPoppinsMedium14Gray90001"
                >
                  {props?.homeFive}
                </Text>
                <Img
                  className="h-4 w-4"
                  src="images/img_checkmark_gray_900.svg"
                  alt="checkmark_Four"
                />
              </div>
              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                <Text
                  className="text-gray-600 text-sm w-auto"
                  size="txtPoppinsMedium14Gray600"
                >
                  {props?.homeSix}
                </Text>
                <Img
                  className="h-4 w-4"
                  src="images/img_checkmark.svg"
                  alt="checkmark_Five"
                />
              </div>
              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                <Text
                  className="text-gray-600 text-sm w-auto"
                  size="txtPoppinsMedium14Gray600"
                >
                  {props?.homeSeven}
                </Text>
                <Img
                  className="h-4 w-4"
                  src="images/img_checkmark.svg"
                  alt="checkmark_Six"
                />
              </div>
              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                <Text
                  className="text-gray-600 text-sm w-auto"
                  size="txtPoppinsMedium14Gray600"
                >
                  {props?.homeEight}
                </Text>
                <Img
                  className="h-4 w-4"
                  src="images/img_checkmark.svg"
                  alt="checkmark_Seven"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-gray-600 text-sm w-auto"
                  size="txtPoppinsMedium14Gray600"
                >
                  {props?.homeNine}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start md:ml-[0] ml-[171px] w-auto">
              <Img
                className="h-8 w-8"
                src="images/img_plant1.svg"
                alt="plantOne_Two"
              />
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[-0.96px] w-auto"
                size="txtPoppinsMedium32Black900"
              >
                {props?.ecobazarTwo}
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-10 items-center justify-start md:ml-[0] ml-[186px] w-auto sm:w-full">
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img
                  className="h-[34px] w-[34px]"
                  src="images/img_call_gray_900.svg"
                  alt="call_One"
                />
                <Text
                  className="text-gray-900_01 text-sm w-auto"
                  size="txtPoppinsMedium14Gray90001"
                >
                  {props?.phonenumber}
                </Text>
              </div>
              <div className="flex flex-row gap-5 items-center justify-start w-auto">
                <Img
                  className="h-8 w-8"
                  src="images/img_search.svg"
                  alt="search_One"
                />
                <Img
                  className="h-8 w-8"
                  src="images/img_favorite.svg"
                  alt="favorite_Three"
                />
                <div className="h-9 md:h-[34px] relative w-9">
                  <Img
                    className="absolute bottom-[0] h-[34px] left-[0] w-[34px]"
                    src="images/img_bag.svg"
                    alt="bag_Three"
                  />
                  <Text
                    className="absolute bg-green-800 flex h-[18px] items-center justify-center outline outline-[1px] outline-white-A700 right-[0] rounded-[50%] text-[10px] text-center text-white-A700 top-[0] w-[18px]"
                    size="txtPoppinsMedium10"
                  >
                    {props?.cartitemcount}
                  </Text>
                </div>
                <Img
                  className="h-8 w-8"
                  src="images/img_user31_gray_900.svg"
                  alt="userThirtyOne_One"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C05HomepageNavigation.defaultProps = {
  storelocationtext: "Store Location: Lincoln- 344, Illinois, Chicago, USA",
  homeFive: "Home",
  homeSix: "Shop",
  homeSeven: "Pages",
  homeEight: "Blog",
  homeNine: "About Us",
  ecobazarTwo: "Ecobazar",
  phonenumber: "(219) 555-0114",
  cartitemcount: "2",
};

export default C05HomepageNavigation;
