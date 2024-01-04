import React from "react";

import { Button, Img, Input, List, Text } from "components";

const C11ProductsDetailsAdditionalInfoFooter = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-100_01 flex md:flex-col flex-row md:gap-5 items-center justify-start p-[38px] sm:px-5 w-full">
          <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start md:ml-[0] ml-[261px] w-auto sm:w-full">
            <Text
              className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
              size="txtPoppinsSemiBold24Gray900"
            >
              {props?.subcribeournewsOne}
            </Text>
            <Text
              className="leading-[150.00%] md:max-w-full max-w-md text-gray-500 text-sm"
              size="txtPoppinsRegular14"
            >
              {props?.pellentesqueeu}
            </Text>
          </div>
          <div className="h-[52px] ml-28 md:ml-[0] relative w-[30%] md:w-full">
            <Input
              name="inputfield"
              placeholder="Your email address"
              className="!placeholder:text-gray-600 !text-gray-600 font-poppins p-0 text-base text-left w-full"
              wrapClassName="absolute border border-gray-300_01 border-solid inset-y-[0] left-[0] my-auto rounded-[26px] w-[92%]"
              color="white_A700"
              size="xs"
              variant="fill"
            ></Input>
            <Button
              className="absolute cursor-pointer font-poppins font-semibold h-full inset-y-[0] min-w-[162px] my-auto right-[0] rounded-[26px] text-base text-center"
              color="green_A700"
              size="md"
              variant="fill"
            >
              {props?.subscribe}
            </Button>
          </div>
          <div className="flex flex-row gap-2 items-start justify-start ml-10 md:ml-[0] w-auto">
            <Button
              className="flex h-10 items-center justify-center rounded-[50%] w-10"
              shape="round"
              color="green_A700"
              size="md"
              variant="fill"
            >
              <Img
                className="h-[18px]"
                src="images/img_facebook1.svg"
                alt="facebookOne_One"
              />
            </Button>
            <Button
              className="flex h-10 items-center justify-center rounded-[50%] w-10"
              shape="circle"
              size="md"
            >
              <Img
                className="h-[18px]"
                src="images/img_twitter1.svg"
                alt="twitterOne_One"
              />
            </Button>
            <Img
              className="h-10 rounded-[50%] w-10"
              src="images/img_user_gray_800.svg"
              alt="user_Two"
            />
            <Img
              className="h-10 rounded-[50%] w-10"
              src="images/img_info.svg"
              alt="info_One"
            />
          </div>
        </div>
        <div className="bg-gray-900 flex flex-col md:gap-10 gap-[60px] items-start justify-center pt-[60px] md:px-10 sm:px-5 px-[300px] w-auto md:w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[95%] md:w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img
                  className="h-8 w-8"
                  src="images/img_plant1.svg"
                  alt="plantOne_One"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-0.96px] w-auto"
                  size="txtPoppinsMedium32WhiteA700"
                >
                  {props?.ecobazarOne}
                </Text>
              </div>
              <Text
                className="leading-[150.00%] max-w-[336px] md:max-w-full text-gray-600 text-sm"
                size="txtPoppinsRegular14Gray600"
              >
                {props?.morbicursusportOne}
              </Text>
              <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <Text
                  className="bg-gray-900 justify-center py-[5px] text-shadow-ts text-sm text-white-A700 w-auto"
                  size="txtPoppinsMedium14WhiteA700"
                >
                  {props?.button}
                </Text>
                <Text
                  className="text-base text-gray-600 w-auto"
                  size="txtPoppinsRegular16"
                >
                  {props?.or}
                </Text>
                <Text
                  className="bg-gray-900 justify-center pb-1 pt-[7px] text-shadow-ts text-sm text-white-A700 w-auto"
                  size="txtPoppinsMedium14WhiteA700"
                >
                  {props?.email}
                </Text>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row md:gap-10 gap-[129px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[65%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-5 items-start justify-start w-auto">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtPoppinsMedium16WhiteA700"
                >
                  {props?.myaccount}
                </Text>
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <Text
                    className="text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    {props?.myaccountOne}
                  </Text>
                  <Text
                    className="text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    {props?.orderhistory}
                  </Text>
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtPoppinsRegular14WhiteA700"
                  >
                    {props?.shopingcart}
                  </Text>
                  <Text
                    className="text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    {props?.wishlist}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-auto">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtPoppinsMedium16WhiteA700"
                >
                  {props?.helps}
                </Text>
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <Text
                    className="text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    {props?.contact}
                  </Text>
                  <Text
                    className="text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    {props?.faqs}
                  </Text>
                  <Text
                    className="text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    {props?.termscondition}
                  </Text>
                  <Text
                    className="text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    {props?.privacypolicy}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-auto">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtPoppinsMedium16WhiteA700"
                >
                  {props?.proxy}
                </Text>
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <Text
                    className="text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    {props?.about}
                  </Text>
                  <Text
                    className="text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    {props?.shop}
                  </Text>
                  <Text
                    className="text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    {props?.product}
                  </Text>
                  <Text
                    className="text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    {props?.trackorder}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-auto">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtPoppinsMedium16WhiteA700"
                >
                  {props?.categories}
                </Text>
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <Text
                    className="text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    {props?.fruitvegetableslink}
                  </Text>
                  <Text
                    className="text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    {props?.meatfishlink}
                  </Text>
                  <Text
                    className="text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    {props?.breadbakerylink}
                  </Text>
                  <Text
                    className="text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    {props?.beautyhealthlink}
                  </Text>
                </div>
              </div>
            </List>
          </div>
          <div className="bg-gray-900 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1320px] py-6 shadow-bs8 w-full">
            <Text
              className="text-gray-600 text-sm w-auto"
              size="txtPoppinsRegular14Gray600"
            >
              {props?.ecobazarecommerOne}
            </Text>
            <div className="flex flex-row gap-2 items-start justify-start w-auto">
              <div className="bg-gray-900 border border-blue_gray-900 border-solid flex flex-col items-center justify-start p-1.5 rounded-[5px] w-[17%]">
                <Img
                  className="h-[13px] my-0.5"
                  src="images/img_settings.svg"
                  alt="settings"
                />
              </div>
              <div className="bg-gray-900 border border-blue_gray-900 border-solid flex flex-col items-center justify-start p-1.5 rounded-[5px] w-[17%]">
                <Img
                  className="h-2.5 my-1"
                  src="images/img_settings_white_a700.svg"
                  alt="settings_One"
                />
              </div>
              <div className="bg-gray-900 border border-blue_gray-900 border-solid flex flex-col items-end justify-end rounded-[5px] w-[17%]">
                <Img
                  className="h-[18px] mt-2.5"
                  src="images/img_settings_white_a700_18x39.svg"
                  alt="settings_Two"
                />
              </div>
              <div className="bg-gray-900 border border-blue_gray-900 border-solid flex flex-col items-center justify-start p-1.5 rounded-[5px] w-[17%]">
                <Img
                  className="h-[17px]"
                  src="images/img_user_red_a700.svg"
                  alt="user_Three"
                />
              </div>
              <div className="h-8 relative w-[24%]">
                <div className="absolute bg-gray-900 border border-blue_gray-900 border-solid flex flex-row h-full inset-[0] items-start justify-center m-auto pb-[5px] px-[5px] rounded-[5px] w-full">
                  <Img
                    className="h-[11px] mt-1 w-[11px]"
                    src="images/img_lock1.svg"
                    alt="lockOne"
                  />
                  <Text
                    className="mb-[9px] ml-0.5 text-[11px] text-white-A700"
                    size="txtPoppinsRegular11"
                  >
                    {props?.secure}
                  </Text>
                </div>
                <Text
                  className="absolute bottom-[0] inset-x-[0] mx-auto text-center text-white-A700 text-xs w-max"
                  size="txtPoppinsSemiBold12"
                >
                  {props?.payment}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C11ProductsDetailsAdditionalInfoFooter.defaultProps = {
  subcribeournewsOne: "Subcribe our Newsletter",
  pellentesqueeu:
    "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.",
  subscribe: "Subscribe",
  ecobazarOne: "Ecobazar",
  morbicursusportOne:
    "Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.",
  button: "(219) 555-0114",
  or: "or",
  email: "Proxy@gmail.com",
  myaccount: "My Account",
  myaccountOne: "My Account",
  orderhistory: "Order History",
  shopingcart: "Shoping Cart",
  wishlist: "Wishlist",
  helps: "Helps",
  contact: "Contact",
  faqs: "Faqs",
  termscondition: "Terms & Condition",
  privacypolicy: "Privacy Policy",
  proxy: "Proxy",
  about: "About",
  shop: "Shop",
  product: "Product",
  trackorder: "Track Order",
  categories: "Categories",
  fruitvegetableslink: "Fruit & Vegetables",
  meatfishlink: "Meat & Fish",
  breadbakerylink: "Bread & Bakery",
  beautyhealthlink: "Beauty & Health",
  ecobazarecommerOne: "Ecobazar eCommerce © 2021. All Rights Reserved",
  secure: "Secure",
  payment: "Payment",
};

export default C11ProductsDetailsAdditionalInfoFooter;
