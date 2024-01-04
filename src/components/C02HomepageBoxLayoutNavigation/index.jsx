import React from "react";

import { Button, Img, SelectBox, Text } from "components";

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
const allcategoriesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const navlinksOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const C02HomepageBoxLayoutNavigation = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1320px] py-4 shadow-bs5 w-full">
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <Img
              className="h-[18px] w-[15px]"
              src="images/img_linkedin_gray_600.svg"
              alt="linkedin"
            />
            <Text
              className="text-gray-600 text-xs w-auto"
              size="txtPoppinsRegular12Gray600"
            >
              {props?.storelocationtext}
            </Text>
          </div>
          <div className="flex sm:flex-1 flex-row gap-5 items-center justify-start w-auto sm:w-full">
            <SelectBox
              className="font-poppins text-center text-gray-600 text-xs w-[39%] sm:w-full"
              placeholderClassName="text-gray-600"
              indicator={
                <Img
                  className="h-[3px] outline-gray-600 outline-[0.5px] outline w-[7px]"
                  src="images/img_arrowdown_gray_600.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="eng"
              options={engOptionsList}
              isSearchable={false}
              placeholder="Eng"
              size="xs"
            />
            <SelectBox
              className="font-poppins text-center text-gray-600 text-xs w-[41%] sm:w-full"
              placeholderClassName="text-gray-600"
              indicator={
                <Img
                  className="h-[3px] outline-gray-600 outline-[0.5px] outline w-[7px]"
                  src="images/img_arrowdown_gray_600.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="usd"
              options={usdOptionsList}
              isSearchable={false}
              placeholder="USD"
            />
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1320px] py-5 w-full">
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <Img
              className="h-8 w-8"
              src="images/img_plant1.svg"
              alt="plantOne"
            />
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[-0.96px] w-auto"
              size="txtPoppinsMedium32"
            >
              {props?.ecobazar}
            </Text>
          </div>
          <div className="bg-white-A700 border border-gray-300_01 border-solid flex sm:flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start rounded w-auto sm:w-full">
            <div className="flex flex-row gap-2 items-center justify-start px-[18px] py-3 w-[312px]">
              <Img
                className="h-5 w-5"
                src="images/img_search.svg"
                alt="search"
              />
              <Text
                className="text-gray-500 text-sm w-auto"
                size="txtPoppinsRegular14"
              >
                {props?.searchtext}
              </Text>
            </div>
            <Button
              className="cursor-pointer font-poppins font-semibold min-w-[98px] rounded-br rounded-tr text-center text-sm"
              color="green_A700"
              size="md"
              variant="fill"
            >
              {props?.searchbutton}
            </Button>
          </div>
          <div className="flex flex-row gap-3 items-center justify-start w-auto">
            <Img
              className="h-10 w-10"
              src="images/img_call_gray_900.svg"
              alt="call"
            />
            <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
              <Text
                className="text-gray-500 text-sm w-auto"
                size="txtPoppinsRegular14"
              >
                {props?.customerservicetext}
              </Text>
              <Text
                className="text-gray-900 text-xl w-auto"
                size="txtPoppinsMedium20"
              >
                {props?.phonenumbertext}
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1320px] w-full">
          <div className="flex md:flex-1 md:flex-col flex-row gap-8 items-center justify-start w-auto md:w-full">
            <SelectBox
              className="!text-white-A700 font-medium font-poppins sm:pr-5 pr-6 text-base text-left w-[36%] md:w-full"
              placeholderClassName="!text-white-A700"
              indicator={
                <Img
                  className="h-5 w-5"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
              isSearchable={false}
              placeholder="All Categories"
              getOptionLabel={(e) => (
                <div className="flex items-center">
                  <Img
                    className="h-8 mr-4 w-8 p-4"
                    src="images/img_menu_1.svg"
                    alt="menu 1"
                  />
                  <span>{e.label}</span>
                </div>
              )}
              name="allcategories"
              isMulti={false}
              options={allcategoriesOptionsList}
              shape="square"
              color="blue_gray_900"
              variant="fill"
            />
            <SelectBox
              className="font-medium font-poppins text-left text-sm text-white-A700 w-[8%] md:w-full"
              placeholderClassName="text-white-A700"
              indicator={
                <Img
                  className="h-4 w-4"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="navlinks"
              options={navlinksOptionsList}
              isSearchable={false}
              placeholder="Home"
            />
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <Text
                className="text-gray-600 text-sm w-auto"
                size="txtPoppinsMedium14Gray600"
              >
                {props?.home}
              </Text>
              <Img
                className="h-4 w-4"
                src="images/img_checkmark.svg"
                alt="checkmark"
              />
            </div>
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <Text
                className="text-gray-600 text-sm w-auto"
                size="txtPoppinsMedium14Gray600"
              >
                {props?.homeOne}
              </Text>
              <Img
                className="h-4 w-4"
                src="images/img_checkmark.svg"
                alt="checkmark_One"
              />
            </div>
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <Text
                className="text-gray-600 text-sm w-auto"
                size="txtPoppinsMedium14Gray600"
              >
                {props?.homeTwo}
              </Text>
              <Img
                className="h-4 w-4"
                src="images/img_checkmark.svg"
                alt="checkmark_Two"
              />
            </div>
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-gray-600 text-sm w-auto"
                size="txtPoppinsMedium14Gray600"
              >
                {props?.homeThree}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-gray-600 text-sm w-auto"
                size="txtPoppinsMedium14Gray600"
              >
                {props?.homeFour}
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-6 items-center justify-start sm:pr-5 pr-6 py-[15px] w-auto">
            <Img
              className="h-8 w-8"
              src="images/img_favorite_white_a700.svg"
              alt="favorite"
            />
            <div className="h-9 md:h-[34px] relative w-9">
              <Img
                className="absolute bottom-[0] h-[34px] left-[0] w-[34px]"
                src="images/img_bag_white_a700.svg"
                alt="bag"
              />
              <Text
                className="absolute bg-green-800 flex h-[18px] items-center justify-center outline outline-[1px] outline-blue_gray-900 right-[0] rounded-[50%] text-[10px] text-center text-white-A700 top-[0] w-[18px]"
                size="txtPoppinsMedium10"
              >
                {props?.cartitemcounttext}
              </Text>
            </div>
            <Img
              className="h-8 w-8"
              src="images/img_user31_white_a700.svg"
              alt="userThirtyOne"
            />
          </div>
        </div>
      </div>
    </>
  );
};

C02HomepageBoxLayoutNavigation.defaultProps = {
  storelocationtext: "Store Location: Lincoln- 344, Illinois, Chicago, USA",
  ecobazar: "Ecobazar",
  searchtext: "Search",
  searchbutton: "Search",
  customerservicetext: "Customer Services",
  phonenumbertext: "(219) 555-0114",
  home: "Shop",
  homeOne: "Pages",
  homeTwo: "Blog",
  homeThree: "About Us",
  homeFour: "Contact Us",
  cartitemcounttext: "2",
};

export default C02HomepageBoxLayoutNavigation;
