import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import C07ShopOneBreadcrumbs from "components/C07ShopOneBreadcrumbs";
import Header from "components/Header";

const ContactPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="bg-white-A700 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
          <C07ShopOneBreadcrumbs
            className="bg-cover bg-gradient1  bg-no-repeat flex flex-col h-[120px] items-start justify-end p-[47px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_breadcrumbs.png')" }}
            homeimage="images/img_home.svg"
            languagetext="Contact"
          />
          <div className="flex md:flex-col flex-row gap-6 items-center justify-center max-w-[1320px] mt-20 mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex flex-col items-start justify-start px-5 rounded-lg shadow-bs21 w-auto">
              <div className="flex flex-col gap-4 items-center justify-start py-6 w-auto">
                <Img
                  className="h-[51px] w-[51px]"
                  src="images/img_mappin.svg"
                  alt="mappin"
                />
                <Text
                  className="leading-[170.00%] max-w-[272px] md:max-w-full text-base text-blue_gray-900 text-center"
                  size="txtPoppinsRegular16Bluegray900"
                >
                  2715 Ash Dr. San Jose, South Dakota 83475
                </Text>
              </div>
              <Line className="bg-gray-300_01 h-px w-full" />
              <div className="flex flex-col gap-4 items-center justify-start py-6 w-auto">
                <Img
                  className="h-[51px] w-[51px]"
                  src="images/img_lock_green_800.svg"
                  alt="lock"
                />
                <Text
                  className="leading-[170.00%] text-base text-blue_gray-900 text-center"
                  size="txtPoppinsRegular16Bluegray900"
                >
                  <>
                    Proxy@gmail.com
                    <br />
                    Help.proxy@gmail.com
                  </>
                </Text>
              </div>
              <Line className="bg-gray-300_01 h-px w-full" />
              <div className="flex flex-col gap-4 items-center justify-start py-6 w-auto">
                <Img
                  className="h-[51px] w-[51px]"
                  src="images/img_call_green_800.svg"
                  alt="call_One"
                />
                <Text
                  className="leading-[170.00%] text-base text-blue_gray-900 text-center"
                  size="txtPoppinsRegular16Bluegray900"
                >
                  <>
                    (219) 555-0114
                    <br />
                    (164) 333-0487
                  </>
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[46px] md:px-10 sm:px-5 rounded-lg shadow-bs21 w-3/4 md:w-full">
              <div className="flex flex-col items-start justify-start mb-[3px] w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                  size="txtPoppinsSemiBold24"
                >
                  Just Say Hello!
                </Text>
                <Text
                  className="leading-[150.00%] mt-[5px] text-gray-600 text-sm w-[55%] sm:w-full"
                  size="txtPoppinsRegular14Gray600"
                >
                  Do you fancy saying hi to me or you want to get started with
                  your project and you need my help? Feel free to contact me.
                </Text>
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-between mt-6 w-full">
                  <Input
                    name="inputfield"
                    placeholder="Template Cookie"
                    className="!placeholder:text-gray-700 !text-gray-700 p-0 text-base text-left w-full"
                    wrapClassName="border border-gray-300_01 border-solid sm:flex-1 sm:w-full"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  ></Input>
                  <Input
                    name="email"
                    placeholder="zakirsoft@gmail.com"
                    className="!placeholder:text-gray-700 !text-gray-700 p-0 text-base text-left w-full"
                    wrapClassName="border border-gray-300_01 border-solid sm:flex-1 sm:w-full"
                    type="email"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  ></Input>
                </div>
                <Input
                  name="inputfield_One"
                  placeholder="Hello|"
                  className="!placeholder:text-gray-900_01 !text-gray-900_01 p-0 text-base text-left w-full"
                  wrapClassName="border border-green-A700 border-solid mt-4 w-full"
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></Input>
                <Input
                  name="inputfield_Two"
                  placeholder="Subjects"
                  className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                  wrapClassName="border border-gray-300_01 border-solid mt-4 w-full"
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></Input>
                <Button
                  className="cursor-pointer font-semibold min-w-[199px] mt-6 rounded-[25px] text-base text-center"
                  color="green_A700"
                  size="lg"
                  variant="fill"
                >
                  Send Message
                </Button>
              </div>
            </div>
          </div>
          <Img
            className="h-[400px] sm:h-auto mt-20 object-cover w-full"
            src="images/img_mapimage.png"
            alt="mapimage"
          />
          <footer className="flex items-center justify-center md:px-5 w-full">
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
                    name="inputfield_Three"
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
                      Morbi cursus porttitor enim lobortis molestie. Duis
                      gravida turpis dui, eget bibendum magna congue nec.
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
                        <a
                          href="javascript:"
                          className="text-sm text-white-A700"
                        >
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
                          <Text size="txtPoppinsRegular14">
                            Beauty & Health
                          </Text>
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
      </div>
    </>
  );
};

export default ContactPage;
