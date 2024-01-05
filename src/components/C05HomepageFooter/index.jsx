import React from "react";

import { Button, FloatingInput, Img, Text } from "components";

const C05HomepageFooter = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[69%] md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Img
                    className="h-8 w-8"
                    src="images/img_plant1.svg"
                    alt="plantOne_Three"
                  />
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-0.96px] w-auto"
                    size="txtPoppinsMedium32"
                  >
                    {props?.ecobazarThree}
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[300px] md:max-w-full text-gray-500 text-sm"
                  size="txtPoppinsRegular14"
                >
                  {props?.morbicursusportThree}
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Button
                    className="flex h-10 items-center justify-center rounded-[50%] w-10"
                    shape="round"
                    color="green_A700"
                    size="lg"
                    variant="fill"
                  >
                    <Img
                      className="h-[18px]"
                      src="images/img_facebook1.svg"
                      alt="facebookOne_One"
                    />
                  </Button>
                  <Button
                    className="flex h-10 items-center justify-center w-10"
                    shape="circle"
                    size="lg"
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
                    alt="settings_Six"
                  />
                  <Img
                    className="h-10 rounded-[50%] w-10"
                    src="images/img_info_gray_400.svg"
                    alt="info_One"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[119px] md:mt-0 mt-[5px] w-auto">
                <Text
                  className="text-lg text-white-A700 w-auto"
                  size="txtPoppinsMedium18WhiteA700"
                >
                  {props?.myaccountTwo}
                </Text>
                <Img
                  className="h-0.5 w-6"
                  src="images/img_line14.svg"
                  alt="lineFourteen_Four"
                />
                <div className="flex flex-col gap-3 items-start justify-start pt-2 w-auto">
                  <Text
                    className="text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    {props?.myaccountThree}
                  </Text>
                  <Text
                    className="text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    {props?.orderhistoryOne}
                  </Text>
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtPoppinsRegular14WhiteA700"
                  >
                    {props?.shopingcartOne}
                  </Text>
                  <Text
                    className="text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    {props?.wishlistOne}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[90px] md:mt-0 mt-[5px] w-auto">
                <Text
                  className="text-lg text-white-A700 w-auto"
                  size="txtPoppinsMedium18WhiteA700"
                >
                  {props?.helpsOne}
                </Text>
                <Img
                  className="h-0.5 w-6"
                  src="images/img_line14.svg"
                  alt="lineFourteen_Five"
                />
                <div className="flex flex-col gap-3 items-start justify-start pt-2 w-auto">
                  <Text
                    className="text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    {props?.contactOne}
                  </Text>
                  <Text
                    className="text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    {props?.faqsOne}
                  </Text>
                  <Text
                    className="text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    {props?.termsconditionOne}
                  </Text>
                  <Text
                    className="text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    {props?.privacypolicyOne}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[90px] md:mt-0 mt-[5px] w-auto">
                <Text
                  className="text-lg text-white-A700 w-auto"
                  size="txtPoppinsMedium18WhiteA700"
                >
                  {props?.proxyOne}
                </Text>
                <Img
                  className="h-0.5 w-6"
                  src="images/img_line14.svg"
                  alt="lineFourteen_Six"
                />
                <div className="flex flex-col gap-3 items-start justify-start pt-2 w-auto">
                  <Text
                    className="text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    {props?.aboutOne}
                  </Text>
                  <Text
                    className="text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    {props?.shopOne}
                  </Text>
                  <Text
                    className="text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    {props?.productOne}
                  </Text>
                  <Text
                    className="text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    {props?.trackorderOne}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[90px] md:mt-0 mt-[5px] w-auto">
                <Text
                  className="text-lg text-white-A700 w-auto"
                  size="txtPoppinsMedium18WhiteA700"
                >
                  {props?.downloadmobiletext}
                </Text>
                <Img
                  className="h-0.5 w-6"
                  src="images/img_line14.svg"
                  alt="lineFourteen_Seven"
                />
                <div className="flex flex-row gap-2 items-start justify-start pt-2 w-auto sm:w-full">
                  <FloatingInput
                    wrapClassName="bg-blue_gray-900 border-0 flex pb-2 pl-[35px] pr-[30px] pt-[26px] rounded top-[0] w-full"
                    className="font-medium font-poppins p-0 placeholder:bg-blue_gray-900 placeholder:left-[35px] placeholder:text-gray-400 placeholder:top-[0] sm:px-5 text-base text-left text-white-A700 w-full"
                    name="appstore_One"
                    labelClasses="bg-blue_gray-900 left-[35px] top-[0] text-gray-400"
                    focusedClasses="translate-y-[26px] scale-[1]"
                    wrapperClasses="sm:w-full sm:mx-0 w-1/2 top-[0]"
                    labelText="Download on the"
                    defaultText="App Store"
                    prefix={
                      <Img
                        className="top-[0] my-auto"
                        src="images/img_applenegative_1.svg"
                        alt="Apple---Negative 1"
                      />
                    }
                  ></FloatingInput>
                  <FloatingInput
                    wrapClassName="bg-blue_gray-900 border-0 flex pb-2 pl-[35px] pr-3 pt-[26px] rounded top-[0] w-full"
                    className="font-medium font-poppins p-0 placeholder:bg-blue_gray-900 placeholder:left-[35px] placeholder:text-gray-400 placeholder:top-[0] sm:pl-5 text-base text-left text-white-A700 w-full"
                    name="googleplay_One"
                    labelClasses="bg-blue_gray-900 left-[35px] top-[0] text-gray-400"
                    focusedClasses="translate-y-[26px] scale-[1]"
                    wrapperClasses="sm:w-full sm:mx-0 w-[49%] top-[0]"
                    labelText="Download on the"
                    defaultText="Google play"
                    prefix={
                      <Img
                        className="top-[0] my-auto"
                        src="images/img_icongoogleplay_1.svg"
                        alt="Icon=google-play 1"
                      />
                    }
                  ></FloatingInput>
                </div>
              </div>
            </div>
            <div className="bg-gray-900_01 flex flex-row items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] py-6 shadow-bs8 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                <Text
                  className="md:mt-0 my-[5px] text-gray-600 text-sm w-auto"
                  size="txtPoppinsRegular14Gray600"
                >
                  {props?.copyrighttext}
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <div className="bg-gray-900_01 border border-blue_gray-900 border-solid flex flex-col items-center justify-start p-1.5 rounded-[5px] w-[17%]">
                    <Img
                      className="h-[13px] my-0.5"
                      src="images/img_settings.svg"
                      alt="settings_Seven"
                    />
                  </div>
                  <div className="bg-gray-900_01 border border-blue_gray-900 border-solid flex flex-col items-center justify-start p-1.5 rounded-[5px] w-[17%]">
                    <Img
                      className="h-2.5 my-1"
                      src="images/img_settings_white_a700.svg"
                      alt="settings_Eight"
                    />
                  </div>
                  <div className="bg-gray-900_01 border border-blue_gray-900 border-solid flex flex-col items-end justify-end rounded-[5px] w-[17%]">
                    <Img
                      className="h-[18px] mt-2.5"
                      src="images/img_settings_white_a700_18x39.svg"
                      alt="settings_Nine"
                    />
                  </div>
                  <div className="bg-gray-900_01 border border-blue_gray-900 border-solid flex flex-col items-center justify-start p-1.5 rounded-[5px] w-[17%]">
                    <Img
                      className="h-[17px]"
                      src="images/img_user_red_a700.svg"
                      alt="user_Twelve"
                    />
                  </div>
                  <div className="h-8 relative w-[24%]">
                    <div className="absolute bg-gray-900_01 border border-blue_gray-900 border-solid flex flex-row h-full inset-[0] items-start justify-center m-auto pb-[5px] px-[5px] rounded-[5px] w-full">
                      <Img
                        className="h-[11px] mt-1 w-[11px]"
                        src="images/img_lock1.svg"
                        alt="lockOne_One"
                      />
                      <Text
                        className="mb-[9px] ml-0.5 text-[11px] text-white-A700"
                        size="txtPoppinsRegular11"
                      >
                        {props?.secureOne}
                      </Text>
                    </div>
                    <Text
                      className="absolute bottom-[0] inset-x-[0] mx-auto text-center text-white-A700 text-xs w-max"
                      size="txtPoppinsSemiBold12"
                    >
                      {props?.paymentOne}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex sm:flex-col flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto top-[0] w-full">
          <div
            className="bg-cover bg-no-repeat flex sm:flex-1 flex-col h-[373px] items-start justify-end p-[23px] sm:px-5 w-[17%] sm:w-full"
            style={{ backgroundImage: "url('images/img_group2571.svg')" }}
          >
            <Img
              className="h-[85px] md:h-auto md:ml-[0] ml-[83px] mt-60 object-cover w-[29%]"
              src="images/img_1904.png"
              alt="1904_One"
            />
          </div>
          <div className="md:h-40 sm:h-[149px] h-[269px] sm:mt-0 mt-[11px] relative w-[12%] sm:w-full">
            <Img
              className="absolute bottom-[0] h-[67px] inset-x-[0] mx-auto"
              src="images/img_vector_blue_gray_900.svg"
              alt="vector_Twenty"
            />
            <div className="absolute bottom-[20%] h-[119px] md:h-[84px] right-[0] w-[52%]">
              <Img
                className="absolute h-[84px] left-[0] top-[0]"
                src="images/img_vector.svg"
                alt="vector_TwentyOne"
              />
              <Img
                className="absolute bottom-[0] h-[62px] right-[0]"
                src="images/img_group7.svg"
                alt="groupSeven_Five"
              />
            </div>
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-[70px] items-end justify-end p-[3px] right-[7%] top-[0] w-[71px]"
              style={{ backgroundImage: "url('images/img_group2572.svg')" }}
            >
              <Img
                className="h-[9px] mr-2 mt-[54px]"
                src="images/img_user_blue_gray_900.svg"
                alt="user_Thirteen"
              />
            </div>
            <Img
              className="absolute h-[149px] left-[0] top-[0]"
              src="images/img_group5_blue_gray_900.svg"
              alt="groupFive_Three"
            />
          </div>
        </div>
      </div>
    </>
  );
};

C05HomepageFooter.defaultProps = {
  ecobazarThree: "Ecobazar",
  morbicursusportThree:
    "Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magn.",
  myaccountTwo: "My Account",
  myaccountThree: "My Account",
  orderhistoryOne: "Order History",
  shopingcartOne: "Shoping Cart",
  wishlistOne: "Wishlist",
  helpsOne: "Helps",
  contactOne: "Contact",
  faqsOne: "Faqs",
  termsconditionOne: "Terms & Condition",
  privacypolicyOne: "Privacy Policy",
  proxyOne: "Proxy",
  aboutOne: "About",
  shopOne: "Shop",
  productOne: "Product",
  trackorderOne: "Track Order",
  downloadmobiletext: "Download Mobile App",
  copyrighttext: "Ecobazar eCommerce © 2021. All Rights Reserved",
  secureOne: "Secure",
  paymentOne: "Payment",
};

export default C05HomepageFooter;
