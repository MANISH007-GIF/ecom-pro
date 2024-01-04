import React from "react";

import { Button, Img, Input, List, Text } from "components";

const C02HomepageBoxLayoutFooter = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-900 flex md:flex-col flex-row md:gap-10 gap-[74px] items-center justify-start p-[60px] md:px-10 sm:px-5 w-auto md:w-full">
          <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-auto sm:w-full">
            <Img
              className="h-14 w-14"
              src="images/img_arrowdown_green_a700.svg"
              alt="arrowdown"
            />
            <div className="flex flex-col gap-1 items-start justify-start w-auto sm:w-full">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                size="txtPoppinsMedium24WhiteA700"
              >
                {props?.subcribeournewsOne}
              </Text>
              <Text
                className="text-gray-700 text-sm w-auto"
                size="txtPoppinsRegular14Gray700"
              >
                {props?.pellentesqueeu}
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-6 items-center justify-start w-auto md:w-full">
            <div className="h-[52px] relative w-[70%] md:w-full">
              <Input
                name="inputfield"
                placeholder="Your email address"
                className="!placeholder:text-gray-500 !text-gray-500 font-poppins justify-center p-0 text-base text-left w-full"
                wrapClassName="absolute inset-[0] m-auto rounded-[26px] w-[98%]"
                color="blue_gray_900"
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
            <div className="flex flex-row gap-2 items-start justify-start w-auto">
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
                  src="images/img_twitter1_gray_400.svg"
                  alt="twitterOne_One"
                />
              </Button>
              <Img
                className="h-10 rounded-[50%] w-10"
                src="images/img_settings_gray_400.svg"
                alt="settings_One"
              />
              <Img
                className="h-10 rounded-[50%] w-10"
                src="images/img_info_gray_400.svg"
                alt="info_One"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-100 flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1320px] p-[60px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-4 items-start justify-start w-auto">
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Img
                className="h-8 w-8"
                src="images/img_plant1.svg"
                alt="plantOne_One"
              />
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 tracking-[-0.96px] w-auto"
                size="txtPoppinsMedium32Gray900"
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
                className="bg-gray-100 justify-center py-[5px] text-gray-900 text-shadow-ts text-sm w-auto"
                size="txtPoppinsMedium14Gray900"
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
                className="bg-gray-100 justify-center pb-1 pt-[7px] text-gray-900 text-shadow-ts text-sm w-auto"
                size="txtPoppinsMedium14Gray900"
              >
                {props?.email}
              </Text>
            </div>
          </div>
          <List
            className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[61px] grid sm:grid-cols-1 grid-cols-3 w-[36%] md:w-full"
            orientation="horizontal"
          >
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <Text
                className="text-base text-gray-900 w-auto"
                size="txtPoppinsMedium16"
              >
                {props?.myaccount}
              </Text>
              <div className="flex flex-col gap-3 items-start justify-start w-auto">
                <Text
                  className="text-gray-700 text-sm w-auto"
                  size="txtPoppinsRegular14Gray700"
                >
                  {props?.myaccountOne}
                </Text>
                <Text
                  className="text-gray-700 text-sm w-auto"
                  size="txtPoppinsRegular14Gray700"
                >
                  {props?.orderhistory}
                </Text>
                <Text
                  className="text-gray-700 text-sm w-auto"
                  size="txtPoppinsRegular14Gray700"
                >
                  {props?.shopingcart}
                </Text>
                <Text
                  className="text-gray-700 text-sm w-auto"
                  size="txtPoppinsRegular14Gray700"
                >
                  {props?.wishlist}
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <Text
                className="text-base text-gray-900 w-auto"
                size="txtPoppinsMedium16"
              >
                {props?.helps}
              </Text>
              <div className="flex flex-col gap-3 items-start justify-start w-auto">
                <Text
                  className="text-gray-700 text-sm w-auto"
                  size="txtPoppinsRegular14Gray700"
                >
                  {props?.contact}
                </Text>
                <Text
                  className="text-gray-700 text-sm w-auto"
                  size="txtPoppinsRegular14Gray700"
                >
                  {props?.faqs}
                </Text>
                <Text
                  className="text-gray-700 text-sm w-auto"
                  size="txtPoppinsRegular14Gray700"
                >
                  {props?.termscondition}
                </Text>
                <Text
                  className="text-gray-700 text-sm w-auto"
                  size="txtPoppinsRegular14Gray700"
                >
                  {props?.privacypolicy}
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <Text
                className="text-base text-gray-900 w-auto"
                size="txtPoppinsMedium16"
              >
                {props?.proxy}
              </Text>
              <div className="flex flex-col gap-3 items-start justify-start w-auto">
                <Text
                  className="text-gray-700 text-sm w-auto"
                  size="txtPoppinsRegular14Gray700"
                >
                  {props?.about}
                </Text>
                <Text
                  className="text-gray-700 text-sm w-auto"
                  size="txtPoppinsRegular14Gray700"
                >
                  {props?.shop}
                </Text>
                <Text
                  className="text-gray-700 text-sm w-auto"
                  size="txtPoppinsRegular14Gray700"
                >
                  {props?.product}
                </Text>
                <Text
                  className="text-gray-700 text-sm w-auto"
                  size="txtPoppinsRegular14Gray700"
                >
                  {props?.trackorder}
                </Text>
              </div>
            </div>
          </List>
          <div className="flex flex-col gap-4 items-start justify-start w-auto">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtPoppinsMedium16"
            >
              {props?.downloadmobile}
            </Text>
            <List
              className="sm:flex-col flex-row gap-2 grid grid-cols-2 justify-start w-auto"
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-row gap-1.5 items-center justify-start p-2.5 w-auto">
                <Img
                  className="h-7 w-7"
                  src="images/img_applenegative.svg"
                  alt="applenegative"
                />
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-[11px] text-gray-800 w-auto"
                    size="txtPoppinsRegular11Gray800"
                  >
                    {props?.downloadonthe}
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-[79px]"
                    size="txtPoppinsMedium16"
                  >
                    {props?.appstore}
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-row gap-1.5 items-center justify-start p-2.5 w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_icongoogleplay.svg"
                  alt="icongoogleplay"
                />
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-[11px] text-gray-800 w-auto"
                    size="txtPoppinsRegular11Gray800"
                  >
                    {props?.downloadonthe1}
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-[97px]"
                    size="txtPoppinsMedium16"
                  >
                    {props?.googleplay}
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1320px] py-6 w-full">
          <Text
            className="text-gray-600 text-sm w-auto"
            size="txtPoppinsRegular14Gray600"
          >
            {props?.copyrighttext}
          </Text>
          <div className="flex flex-row gap-1 items-center justify-start w-auto">
            <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col items-center justify-start p-1.5 rounded-[5px] w-[18%]">
              <Img
                className="h-[13px] my-0.5"
                src="images/img_settings_black_900_01.svg"
                alt="settings_Two"
              />
            </div>
            <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col items-center justify-start p-1.5 rounded-[5px] w-[17%]">
              <Img
                className="h-2.5 my-1"
                src="images/img_settings_indigo_900.svg"
                alt="settings_Three"
              />
            </div>
            <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col items-end justify-end rounded-[5px] w-[17%]">
              <Img
                className="h-[18px] mt-2.5"
                src="images/img_settings_black_900_01_18x38.svg"
                alt="settings_Four"
              />
            </div>
            <div className="h-8 relative w-[26%]">
              <div className="absolute bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-row h-full inset-[0] items-start justify-center m-auto pb-[5px] px-[5px] rounded w-full">
                <Img
                  className="h-[11px] mt-1 w-[11px]"
                  src="images/img_lock1_gray_900.svg"
                  alt="lockOne"
                />
                <Text
                  className="mb-[9px] ml-0.5 text-[11px] text-gray-900"
                  size="txtPoppinsRegular11Gray900"
                >
                  {props?.secure}
                </Text>
              </div>
              <Text
                className="absolute bottom-[0] inset-x-[0] mx-auto text-center text-gray-900 text-xs w-max"
                size="txtPoppinsSemiBold12Gray900"
              >
                {props?.paymenttext}
              </Text>
            </div>
            <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-col items-center justify-start p-1.5 rounded-[5px] w-[18%]">
              <Img
                className="h-[17px]"
                src="images/img_user_red_a700.svg"
                alt="user"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C02HomepageBoxLayoutFooter.defaultProps = {
  subcribeournewsOne: "Subcribe our Newsletter",
  pellentesqueeu: "Pellentesque eu nibh eget mauris congue mattis matti.",
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
  downloadmobile: "Download Mobile App",
  downloadonthe: "Download on the",
  appstore: "App Store",
  downloadonthe1: "Download on the",
  googleplay: "Google play",
  copyrighttext: "Ecobazar eCommerce © 2021. All Rights Reserved",
  secure: "Secure",
  paymenttext: "Payment",
};

export default C02HomepageBoxLayoutFooter;
