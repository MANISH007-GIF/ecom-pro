import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import C05HomepageProductx from "components/C05HomepageProductx";
import C05HomepageProductx1 from "components/C05HomepageProductx1";
import C05HomepageProductx2 from "components/C05HomepageProductx2";
import C08ShopTwoBreadcumb from "components/C08ShopTwoBreadcumb";
import Header from "components/Header";

const ShopTwoPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-start mt-6 md:px-10 sm:px-5 px-[300px] w-full">
          <C08ShopTwoBreadcumb className="flex flex-row gap-3 items-center justify-start w-auto" />
        </div>
        <div
          className="bg-cover bg-no-repeat md:h-[266px] h-[358px] max-w-[1320px] mt-[21px] mx-auto p-[57px] md:px-5 relative rounded-[10px] w-full"
          style={{ backgroundImage: "url('images/img_discountbannar.png')" }}
        >
          <div className="absolute bg-orange-600 flex flex-col items-center justify-end left-[36%] py-[25px] rounded-[50%] top-[16%] w-[100px]">
            <Text
              className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-auto"
              size="txtPoppinsSemiBold24WhiteA700"
            >
              56%
            </Text>
            <Text
              className="text-center text-sm text-white-A700_cc tracking-[0.42px] uppercase w-auto"
              size="txtPoppinsMedium14WhiteA700cc"
            >
              Off
            </Text>
          </div>
          <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[5%] my-auto w-[33%]">
            <div className="flex flex-col gap-8 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-sm text-white-A700 tracking-[0.42px] uppercase w-auto"
                    size="txtPoppinsMedium14"
                  >
                    Best Deals
                  </Text>
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
                    size="txtPoppinsSemiBold40WhiteA700"
                  >
                    Sale of the Month
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <div className="flex flex-col gap-1 items-center justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-green-A700 sm:text-xl w-auto"
                      size="txtPoppinsRegular24"
                    >
                      00
                    </Text>
                    <Text
                      className="text-center text-white-A700_87 text-xs tracking-[0.36px] uppercase w-auto"
                      size="txtPoppinsRegular12WhiteA70087"
                    >
                      Days
                    </Text>
                  </div>
                  <Text
                    className="text-2xl md:text-[22px] text-center text-white-A700_87 sm:text-xl w-auto"
                    size="txtPoppinsRegular24WhiteA70087"
                  >
                    :
                  </Text>
                  <div className="flex flex-col gap-1 items-center justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-green-A700 sm:text-xl w-auto"
                      size="txtPoppinsRegular24"
                    >
                      02
                    </Text>
                    <Text
                      className="text-center text-white-A700_87 text-xs tracking-[0.36px] uppercase w-auto"
                      size="txtPoppinsRegular12WhiteA70087"
                    >
                      Hours
                    </Text>
                  </div>
                  <Text
                    className="text-2xl md:text-[22px] text-center text-white-A700_87 sm:text-xl w-auto"
                    size="txtPoppinsRegular24WhiteA70087"
                  >
                    :
                  </Text>
                  <div className="flex flex-col gap-1 items-center justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-green-A700 sm:text-xl w-auto"
                      size="txtPoppinsRegular24"
                    >
                      18
                    </Text>
                    <Text
                      className="text-center text-white-A700_87 text-xs tracking-[0.36px] uppercase w-auto"
                      size="txtPoppinsRegular12WhiteA70087"
                    >
                      Mins
                    </Text>
                  </div>
                  <Text
                    className="text-2xl md:text-[22px] text-center text-white-A700_87 sm:text-xl w-auto"
                    size="txtPoppinsRegular24WhiteA70087"
                  >
                    :
                  </Text>
                  <div className="flex flex-col gap-1 items-center justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-green-A700 sm:text-xl w-auto"
                      size="txtPoppinsRegular24"
                    >
                      46
                    </Text>
                    <Text
                      className="text-center text-white-A700_87 text-xs tracking-[0.36px] uppercase w-auto"
                      size="txtPoppinsRegular12WhiteA70087"
                    >
                      Secs
                    </Text>
                  </div>
                </div>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[162px]"
                rightIcon={
                  <Img
                    className="mt-[3px] mb-[5px] ml-3"
                    src="images/img_arrowleft_white_a700.svg"
                    alt="arrow_left"
                  />
                }
                shape="round"
                color="green_A700"
                size="lg"
                variant="fill"
              >
                <div className="font-semibold text-justify text-sm">
                  Shop Now
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center justify-start mt-10 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] w-full">
            <List
              className="sm:flex-1 sm:flex-col flex-row gap-4 grid sm:grid-cols-1 grid-cols-3 justify-start w-auto sm:w-full"
              orientation="horizontal"
            >
              <div className="border border-gray-300_01 border-solid flex flex-row gap-5 items-center justify-start px-4 py-2.5 rounded w-auto">
                <Text
                  className="text-gray-800 text-sm w-auto"
                  size="txtPoppinsRegular14Gray800"
                >
                  Select Category
                </Text>
                <Img
                  className="h-3.5 w-3.5"
                  src="images/img_checkmark_gray_800.svg"
                  alt="checkmark"
                />
              </div>
              <div className="border border-gray-300_01 border-solid flex flex-row gap-[52px] items-center justify-start px-4 py-2.5 rounded w-auto">
                <Text
                  className="text-gray-800 text-sm w-auto"
                  size="txtPoppinsRegular14Gray800"
                >
                  Select Price
                </Text>
                <Img
                  className="h-3.5 w-3.5"
                  src="images/img_checkmark_gray_800.svg"
                  alt="checkmark"
                />
              </div>
              <div className="border border-gray-300_01 border-solid flex flex-row items-center justify-between px-4 py-2.5 rounded w-auto">
                <Text
                  className="text-gray-800 text-sm w-auto"
                  size="txtPoppinsRegular14Gray800"
                >
                  Select Rating
                </Text>
                <Img
                  className="h-3.5 w-3.5"
                  src="images/img_checkmark_gray_800.svg"
                  alt="checkmark"
                />
              </div>
            </List>
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
              <div className="border border-gray-300_01 border-solid flex flex-row gap-[35px] items-center justify-between px-4 py-2.5 rounded w-auto">
                <Text
                  className="text-gray-800 text-sm w-auto"
                  size="txtPoppinsRegular14Gray800"
                >
                  Sort by: Latest
                </Text>
                <Img
                  className="h-3.5 w-3.5"
                  src="images/img_checkmark_gray_800.svg"
                  alt="checkmark"
                />
              </div>
              <div className="border border-gray-300_01 border-solid flex flex-row items-center justify-between px-4 py-2.5 rounded w-auto">
                <Text
                  className="text-gray-800 text-sm w-auto"
                  size="txtPoppinsRegular14Gray800"
                >
                  Show: 16
                </Text>
                <Img
                  className="h-3.5 w-3.5"
                  src="images/img_checkmark_gray_800.svg"
                  alt="checkmark_One"
                />
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-row items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] py-4 shadow-bs5 w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between max-w-[1320px] mx-auto w-full">
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-gray-600 text-sm w-auto"
                  size="txtPoppinsRegular14Gray600"
                >
                  Active Filters:
                </Text>
                <div className="flex flex-row gap-2 items-center justify-center w-auto">
                  <Text
                    className="text-gray-900_01 text-sm w-auto"
                    size="txtPoppinsMedium14Gray90001"
                  >
                    Wing Chair
                  </Text>
                  <Img
                    className="h-3 w-3"
                    src="images/img_close_blue_gray_300.svg"
                    alt="close"
                  />
                </div>
                <div className="flex flex-row gap-4 items-start justify-between w-[44%] sm:w-full">
                  <Text
                    className="text-gray-900_01 text-sm"
                    size="txtPoppinsMedium14Gray90001"
                  >
                    Min $300 - Max 500
                  </Text>
                  <div className="h-[26px] md:h-[27px] mt-[3px] relative w-[14%]">
                    <Img
                      className="absolute h-3 left-[0] top-[0] w-3"
                      src="images/img_close_blue_gray_900_01.svg"
                      alt="close_One"
                    />
                    <Img
                      className="absolute bottom-[0] h-6 inset-x-[0] mx-auto w-6"
                      src="images/img_hand3.svg"
                      alt="handThree"
                    />
                  </div>
                </div>
              </div>
              <Text
                className="text-gray-900_01 text-right text-sm w-auto"
                size="txtPoppinsRegular14Gray90001"
              >
                <span className="text-gray-900_01 font-poppins font-medium">
                  2,547
                </span>
                <span className="text-gray-900_01 font-poppins font-normal">
                  {" "}
                </span>
                <span className="text-gray-600 font-poppins font-normal">
                  Results found.
                </span>
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1320px] mt-8 mx-auto md:px-5 w-full">
          <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
            <C05HomepageProductx1
              className="h-[407px] relative w-full"
              productimage="images/img_image_58.png"
              productname="Red Chili"
            />
            <C05HomepageProductx1
              className="h-[407px] relative w-full"
              productimage="images/img_image_50.png"
              productname="Big Potatos"
            />
            <C05HomepageProductx2
              className="md:h-[397px] h-[407px] relative w-full"
              productimage="images/img_image_5.png"
              productname="Chanise Cabbage"
            />
            <C05HomepageProductx
              className="md:h-[397px] h-[407px] relative w-full"
              image="images/img_image_20.png"
              greenapple="Ladies Finger"
            />
            <C05HomepageProductx1
              className="h-[407px] relative w-full"
              productimage="images/img_image_59.png"
              productname="Red Tomato"
            />
            <C05HomepageProductx1
              className="h-[407px] relative w-full"
              productimage="images/img_image_8.png"
              productname="Eggplant"
            />
            <C05HomepageProductx1
              className="h-[407px] relative w-full"
              productimage="images/img_image_51.png"
              productname="Fresh Cauliflower"
            />
            <C05HomepageProductx1
              className="h-[407px] relative w-full"
              productimage="images/img_image_52.png"
              productname="Green Apple"
            />
            <C05HomepageProductx1
              className="h-[407px] relative w-full"
              productimage="images/img_image_60.png"
              productname="Fresh Mango"
            />
            <C05HomepageProductx1
              className="h-[407px] relative w-full"
              productimage="images/img_image_7.png"
              productname="Green Capsicum"
            />
            <C05HomepageProductx1
              className="h-[407px] relative w-full"
              productimage="images/img_image_53.png"
              productname="Green Chili"
            />
            <C05HomepageProductx
              className="md:h-[397px] h-[407px] relative w-full"
              image="images/img_image_54.png"
              sale="Sale"
              fifty="50%"
              greenapple="Green Cucumber"
            />
            <C05HomepageProductx1
              className="h-[407px] relative w-full"
              productimage="images/img_image_20.png"
              productname="Green Littuce"
            />
            <C05HomepageProductx1
              className="h-[407px] relative w-full"
              productimage="images/img_image_55.png"
              productname="Green Littuce"
            />
            <C05HomepageProductx1
              className="h-[407px] relative w-full"
              productimage="images/img_image_56.png"
              productname="Ladies Finger"
            />
            <C05HomepageProductx1
              className="h-[407px] relative w-full"
              productimage="images/img_image_57.png"
              productname="Green Capsicum"
            />
          </div>
        </div>
        <div className="flex flex-row gap-3 items-start justify-start mt-[39px] md:px-5 w-auto">
          <Button
            className="flex h-9 items-center justify-center rounded-[50%] w-9"
            shape="circle"
            color="gray_100"
            size="md"
            variant="fill"
          >
            <Img
              className="h-5"
              src="images/img_arrowleft_gray_400.svg"
              alt="arrowleft"
            />
          </Button>
          <div className="flex flex-row items-start justify-start w-auto">
            <Text
              className="bg-green-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-white-A700 w-9"
              size="txtPoppinsMedium16"
            >
              1
            </Text>
            <Text
              className="bg-white-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-700 w-9"
              size="txtPoppinsRegular16Gray700"
            >
              2
            </Text>
            <Text
              className="bg-white-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-700 w-9"
              size="txtPoppinsRegular16Gray700"
            >
              3
            </Text>
            <Text
              className="bg-white-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-700 w-9"
              size="txtPoppinsRegular16Gray700"
            >
              4
            </Text>
            <Text
              className="bg-white-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-700 w-9"
              size="txtPoppinsRegular16Gray700"
            >
              5
            </Text>
            <Text
              className="bg-white-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-700 w-9"
              size="txtPoppinsRegular16Gray700"
            >
              ...
            </Text>
            <Text
              className="bg-white-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-700 w-9"
              size="txtPoppinsRegular16Gray700"
            >
              21
            </Text>
          </div>
          <Button
            className="border border-gray-300_01 border-solid flex h-9 items-center justify-center rotate-[180deg] rounded-[50%] w-9"
            shape="circle"
            color="white_A700"
            size="md"
            variant="fill"
          >
            <Img
              className="h-5"
              src="images/img_arrowright.svg"
              alt="arrowright"
            />
          </Button>
        </div>
        <footer className="flex items-center justify-center mt-20 md:px-5 w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="bg-gray-100_01 flex md:flex-col flex-row md:gap-5 items-center justify-start p-[38px] sm:px-5 w-full">
              <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start md:ml-[0] ml-[261px] w-auto sm:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl w-auto"
                  size="txtPoppinsSemiBold24"
                >
                  Subcribe our Newsletter
                </Text>
                <Text
                  className="leading-[150.00%] md:max-w-full max-w-md text-gray-500 text-sm"
                  size="txtPoppinsRegular14"
                >
                  Pellentesque eu nibh eget mauris congue mattis mattis nec
                  tellus. Phasellus imperdiet elit eu magna.
                </Text>
              </div>
              <div className="h-[52px] ml-28 md:ml-[0] relative w-[30%] md:w-full">
                <Input
                  name="inputfield"
                  placeholder="Your email address"
                  className="!placeholder:text-gray-600 !text-gray-600 p-0 text-base text-left w-full"
                  wrapClassName="absolute border border-gray-300_01 border-solid inset-y-[0] left-[0] my-auto rounded-[26px] w-[92%]"
                  type="email"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></Input>
                <Button
                  className="absolute cursor-pointer font-semibold h-full inset-y-[0] min-w-[162px] my-auto right-[0] rounded-[26px] text-base text-center"
                  color="green_A700"
                  size="lg"
                  variant="fill"
                >
                  Subscribe
                </Button>
              </div>
              <div className="flex flex-row gap-2 items-start justify-start ml-10 md:ml-[0] w-auto">
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
                    alt="facebookOne"
                  />
                </Button>
                <Button
                  className="flex h-10 items-center justify-center w-10"
                  shape="circle"
                  size="lg"
                >
                  <Img
                    className="h-[18px]"
                    src="images/img_twitter1.svg"
                    alt="twitterOne"
                  />
                </Button>
                <Img
                  className="h-10 rounded-[50%] w-10"
                  src="images/img_user_gray_800.svg"
                  alt="user"
                />
                <Img
                  className="h-10 rounded-[50%] w-10"
                  src="images/img_info.svg"
                  alt="info"
                />
              </div>
            </div>
            <div className="bg-gray-900_01 flex flex-col md:gap-10 gap-[60px] items-start justify-center pt-[60px] md:px-10 sm:px-5 px-[300px] w-auto md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[95%] md:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Img
                      className="h-8 w-8"
                      src="images/img_plant1.svg"
                      alt="plantOne_One"
                    />
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-0.96px] w-auto"
                      size="txtPoppinsMedium32"
                    >
                      Ecobazar
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[336px] md:max-w-full text-gray-600 text-sm"
                    size="txtPoppinsRegular14Gray600"
                  >
                    Morbi cursus porttitor enim lobortis molestie. Duis gravida
                    turpis dui, eget bibendum magna congue nec.
                  </Text>
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Text
                      className="bg-gray-900_01 justify-center py-[5px] text-shadow-ts text-sm text-white-A700 w-auto"
                      size="txtPoppinsMedium14"
                    >
                      (219) 555-0114
                    </Text>
                    <Text
                      className="text-base text-gray-600 w-auto"
                      size="txtPoppinsRegular16"
                    >
                      or
                    </Text>
                    <Text
                      className="bg-gray-900_01 justify-center pb-1 pt-[7px] text-shadow-ts text-sm text-white-A700 w-auto"
                      size="txtPoppinsMedium14"
                    >
                      Proxy@gmail.com
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-5 items-start justify-start ml-28 md:ml-[0] w-auto">
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtPoppinsMedium16"
                  >
                    My Account
                  </Text>
                  <ul className="flex flex-col gap-3 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">My Account</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">Order History</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-sm text-white-A700">
                        <Text size="txtPoppinsRegular14WhiteA700">
                          Shoping Cart
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">Wishlist</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-5 items-start justify-start md:ml-[0] ml-[129px] w-auto">
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtPoppinsMedium16"
                  >
                    Helps
                  </Text>
                  <ul className="flex flex-col gap-3 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">Contact</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">Faqs</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">
                          Terms & Condition
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">Privacy Policy</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-5 items-start justify-start md:ml-[0] ml-[95px] w-auto">
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtPoppinsMedium16"
                  >
                    Proxy
                  </Text>
                  <ul className="flex flex-col gap-3 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">About</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">Shop</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">Product</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">Track Order</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-5 items-start justify-start md:ml-[0] ml-[141px] w-auto">
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtPoppinsMedium16"
                  >
                    Categories
                  </Text>
                  <ul className="flex flex-col gap-3 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">
                          Fruit & Vegetables
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">Meat & Fish</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">Bread & Bakery</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">Beauty & Health</Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray-900_01 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1320px] py-6 shadow-bs8 w-full">
                <Text
                  className="text-gray-600 text-sm w-auto"
                  size="txtPoppinsRegular14Gray600"
                >
                  Ecobazar eCommerce © 2021. All Rights Reserved
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <div className="bg-gray-900_01 border border-blue_gray-900 border-solid flex flex-col items-center justify-start p-1.5 rounded-[5px] w-[17%]">
                    <Img
                      className="h-[13px] my-0.5"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                  </div>
                  <div className="bg-gray-900_01 border border-blue_gray-900 border-solid flex flex-col items-center justify-start p-1.5 rounded-[5px] w-[17%]">
                    <Img
                      className="h-2.5 my-1"
                      src="images/img_settings_white_a700.svg"
                      alt="settings_One"
                    />
                  </div>
                  <div className="bg-gray-900_01 border border-blue_gray-900 border-solid flex flex-col items-end justify-end rounded-[5px] w-[17%]">
                    <Img
                      className="h-[18px] mt-2.5"
                      src="images/img_settings_white_a700_18x39.svg"
                      alt="settings_Two"
                    />
                  </div>
                  <div className="bg-gray-900_01 border border-blue_gray-900 border-solid flex flex-col items-center justify-start p-1.5 rounded-[5px] w-[17%]">
                    <Img
                      className="h-[17px]"
                      src="images/img_user_red_a700.svg"
                      alt="user_One"
                    />
                  </div>
                  <div className="h-8 relative w-[24%]">
                    <div className="absolute bg-gray-900_01 border border-blue_gray-900 border-solid flex flex-row h-full inset-[0] items-start justify-center m-auto pb-[5px] px-[5px] rounded-[5px] w-full">
                      <Img
                        className="h-[11px] mt-1 w-[11px]"
                        src="images/img_lock1.svg"
                        alt="lockOne"
                      />
                      <Text
                        className="mb-[9px] ml-0.5 text-[11px] text-white-A700"
                        size="txtPoppinsRegular11"
                      >
                        Secure
                      </Text>
                    </div>
                    <Text
                      className="absolute bottom-[0] inset-x-[0] mx-auto text-center text-white-A700 text-xs w-max"
                      size="txtPoppinsSemiBold12"
                    >
                      Payment
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ShopTwoPage;
