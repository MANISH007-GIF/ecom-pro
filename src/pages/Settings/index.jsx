import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import C07ShopOneBreadcrumbs from "components/C07ShopOneBreadcrumbs";
import C23UserDashboardColumnnavigation from "components/C23UserDashboardColumnnavigation";
import Header from "components/Header";

const SettingsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header className="bg-white-A700 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
          <C07ShopOneBreadcrumbs
            className="bg-cover bg-gradient1  bg-no-repeat flex flex-col h-[120px] items-start justify-end p-[45px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_breadcrumbs.png')" }}
            homeimage="images/img_home.svg"
            homeSeven="Account"
            vectoroneimage="images/img_vector_gray_500.svg"
            languagetext="Settings"
          />
          <div className="flex md:flex-col flex-row gap-6 items-start justify-center max-w-[1320px] mt-8 mx-auto md:px-5 w-full">
            <C23UserDashboardColumnnavigation
              className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col items-start justify-start mb-[115px] pb-3 rounded-lg w-auto"
              dashboardtwoimage="images/img_dashboard2_blue_gray_100.svg"
              orderhistorytext="Order History"
            />
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start outline outline-[1px] outline-gray-300_01 py-0.5 rounded-lg w-3/4 md:w-full">
              <div className="flex flex-col gap-[23px] justify-start mb-[22px] w-full">
                <div className="bg-white-A700 flex flex-col items-start justify-end p-[13px] rounded-tl-lg rounded-tr-lg shadow-bs5 w-full">
                  <Text
                    className="ml-2.5 md:ml-[0] mt-1 text-gray-900_01 text-xl"
                    size="txtPoppinsMedium20"
                  >
                    Account Settings
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start ml-6 md:ml-[0] w-[87%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-col gap-1.5 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-gray-900_01 text-sm w-auto"
                          size="txtPoppinsRegular14Gray90001"
                        >
                          First name
                        </Text>
                        <Input
                          name="inputfield"
                          placeholder="Dianne"
                          className="!placeholder:text-gray-700 !text-gray-700 p-0 text-base text-left w-full"
                          wrapClassName="border border-gray-300_01 border-solid w-full"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-1.5 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-gray-900_01 text-sm w-auto"
                          size="txtPoppinsRegular14Gray90001"
                        >
                          Last Name
                        </Text>
                        <Input
                          name="inputfield_One"
                          placeholder="Russell"
                          className="!placeholder:text-gray-700 !text-gray-700 p-0 text-base text-left w-full"
                          wrapClassName="border border-gray-300_01 border-solid w-full"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-1.5 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-gray-900_01 text-sm w-auto"
                          size="txtPoppinsRegular14Gray90001"
                        >
                          Email
                        </Text>
                        <Input
                          name="email_One"
                          placeholder="dianne.russell@gmail.com"
                          className="!placeholder:text-gray-700 !text-gray-700 p-0 text-base text-left w-full"
                          wrapClassName="border border-gray-300_01 border-solid w-full"
                          type="email"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-1.5 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-gray-900_01 text-sm w-auto"
                          size="txtPoppinsRegular14Gray90001"
                        >
                          Phone Number
                        </Text>
                        <Input
                          name="inputfield_Two"
                          placeholder="(603) 555-0123"
                          className="!placeholder:text-gray-700 !text-gray-700 p-0 text-base text-left w-full"
                          wrapClassName="border border-gray-300_01 border-solid w-full"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-5 items-center justify-start w-[27%] md:w-full">
                      <Img
                        className="h-56 md:h-auto rounded-[50%] w-56"
                        src="images/img_image_224x224.png"
                        alt="image"
                      />
                      <Button
                        className="!text-green-A700 cursor-pointer font-semibold min-w-[159px] outline outline-[1px] outline-green-A700 text-center text-sm"
                        shape="round"
                        color="white_A700"
                        size="lg"
                        variant="fill"
                      >
                        Chose Image
                      </Button>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold min-w-[167px] text-center text-sm"
                    shape="round"
                    color="green_A700"
                    size="lg"
                    variant="fill"
                  >
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-start md:ml-[0] ml-[636px] mt-6 outline outline-[1px] outline-gray-300_01 md:px-5 py-0.5 rounded-lg w-[52%] md:w-full">
            <div className="flex flex-col gap-[23px] items-center justify-start mb-[22px] w-full">
              <div className="bg-white-A700 flex flex-col items-start justify-end p-[13px] rounded-tl-lg rounded-tr-lg shadow-bs5 w-full">
                <Text
                  className="ml-2.5 md:ml-[0] mt-1 text-gray-900_01 text-xl"
                  size="txtPoppinsMedium20"
                >
                  Billing Address
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-[96%] md:w-full">
                <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                  <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtPoppinsRegular14Gray90001"
                    >
                      First name
                    </Text>
                    <Input
                      name="inputfield_Three"
                      placeholder="Dianne"
                      className="!placeholder:text-gray-700 !text-gray-700 p-0 text-base text-left w-full"
                      wrapClassName="border border-gray-300_01 border-solid w-full"
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtPoppinsRegular14Gray90001"
                    >
                      Last name
                    </Text>
                    <Input
                      name="inputfield_Four"
                      placeholder="Dianne"
                      className="!placeholder:text-gray-700 !text-gray-700 p-0 text-base text-left w-full"
                      wrapClassName="border border-gray-300_01 border-solid w-full"
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtPoppinsRegular14Gray90001"
                    >
                      <span className="text-gray-900_01 font-poppins text-left font-normal">
                        Company Name{" "}
                      </span>
                      <span className="text-gray-600 font-poppins text-left font-normal">
                        (optional)
                      </span>
                    </Text>
                    <Input
                      name="inputfield_Five"
                      placeholder="Zakirsoft"
                      className="!placeholder:text-gray-700 !text-gray-700 p-0 text-base text-left w-full"
                      wrapClassName="border border-gray-300_01 border-solid w-full"
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start mt-[15px] w-auto md:w-full">
                  <Text
                    className="text-gray-900_01 text-sm w-auto"
                    size="txtPoppinsRegular14Gray90001"
                  >
                    Street Address
                  </Text>
                  <Input
                    name="par|Counter"
                    placeholder="4140 Par|"
                    className="!placeholder:text-gray-900_01 !text-gray-900_01 p-0 text-base text-left w-full"
                    wrapClassName="border border-green-A700 border-solid w-full"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  ></Input>
                </div>
                <div className="gap-[15px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between mt-[15px] w-full">
                  <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtPoppinsRegular14Gray90001"
                    >
                      Country / Region
                    </Text>
                    <Input
                      name="inputfield_Six"
                      placeholder="United States"
                      className="!placeholder:text-gray-700 !text-gray-700 p-0 text-base text-left w-full"
                      wrapClassName="border border-gray-300_01 border-solid flex w-auto"
                      suffix={
                        <Img
                          className="mt-1 mb-[3px] h-4 ml-[35px]"
                          src="images/img_arrowdown_gray_500.svg"
                          alt="arrow_down"
                        />
                      }
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtPoppinsRegular14Gray90001"
                    >
                      States
                    </Text>
                    <Input
                      name="inputfield_Seven"
                      placeholder="Washington DC"
                      className="!placeholder:text-gray-700 !text-gray-700 p-0 text-base text-left w-full"
                      wrapClassName="border border-gray-300_01 border-solid flex w-auto"
                      suffix={
                        <Img
                          className="mt-0.5 mb-[5px] h-4 ml-[35px]"
                          src="images/img_arrowdown_gray_500.svg"
                          alt="arrow_down"
                        />
                      }
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtPoppinsRegular14Gray90001"
                    >
                      Zip Code
                    </Text>
                    <Input
                      name="zipcode_One"
                      placeholder="20033"
                      className="!placeholder:text-gray-700 !text-gray-700 p-0 text-base text-left w-full"
                      wrapClassName="border border-gray-300_01 border-solid w-full"
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-4 items-center justify-between mt-[15px] w-full">
                  <div className="flex sm:flex-1 flex-col gap-1.5 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtPoppinsRegular14Gray90001"
                    >
                      Email
                    </Text>
                    <Input
                      name="email_Three"
                      placeholder="dianne.russell@gmail.com"
                      className="!placeholder:text-gray-700 !text-gray-700 p-0 text-base text-left w-full"
                      wrapClassName="border border-gray-300_01 border-solid w-full"
                      type="email"
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-1.5 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtPoppinsRegular14Gray90001"
                    >
                      Phone
                    </Text>
                    <Input
                      name="inputfield_Eight"
                      placeholder="(603) 555-0123"
                      className="!placeholder:text-gray-700 !text-gray-700 p-0 text-base text-left w-full"
                      wrapClassName="border border-gray-300_01 border-solid w-full"
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-semibold min-w-[167px] mt-6 text-center text-sm"
                  shape="round"
                  color="green_A700"
                  size="lg"
                  variant="fill"
                >
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-start md:ml-[0] ml-[636px] mt-6 outline outline-[1px] outline-gray-300_01 md:px-5 py-0.5 rounded-lg w-[52%] md:w-full">
            <div className="flex flex-col gap-[23px] items-center justify-start mb-[22px] w-full">
              <Input
                name="heading"
                placeholder="Change Password"
                className="!placeholder:text-gray-900_01 !text-gray-900_01 font-medium p-0 text-left text-xl w-full"
                wrapClassName="rounded-tl-lg rounded-tr-lg shadow-bs5 w-full"
                type="password"
                color="white_A700"
                size="sm"
                variant="fill"
              ></Input>
              <div className="flex flex-col items-start justify-start w-[96%] md:w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-gray-900_01 text-sm w-auto"
                    size="txtPoppinsRegular14Gray90001"
                  >
                    Current Password
                  </Text>
                  <Input
                    name="inputfield_Nine"
                    placeholder="Password"
                    className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                    wrapClassName="border border-gray-300_01 border-solid flex w-auto md:w-full"
                    type="password"
                    suffix={
                      <Img
                        className="mt-0.5 mb-px h-5 ml-[35px]"
                        src="images/img_eyeopen_1.svg"
                        alt="eye-open 1"
                      />
                    }
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex md:flex-col flex-row gap-4 items-center justify-between mt-[15px] w-full">
                  <div className="flex sm:flex-1 flex-col gap-1.5 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtPoppinsRegular14Gray90001"
                    >
                      New Password Password
                    </Text>
                    <Input
                      name="inputfield_Ten"
                      placeholder="Password"
                      className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                      wrapClassName="border border-gray-300_01 border-solid flex w-auto sm:w-full"
                      type="password"
                      suffix={
                        <Img
                          className="mt-0.5 mb-px h-5 ml-[35px]"
                          src="images/img_eyeopen_1.svg"
                          alt="eye-open 1"
                        />
                      }
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-1.5 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtPoppinsRegular14Gray90001"
                    >
                      Confirm Password
                    </Text>
                    <Input
                      name="inputfield_Eleven"
                      placeholder="Password"
                      className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                      wrapClassName="border border-gray-300_01 border-solid flex w-auto sm:w-full"
                      type="password"
                      suffix={
                        <Img
                          className="mt-0.5 mb-px h-5 ml-[35px]"
                          src="images/img_eyeopen_1.svg"
                          alt="eye-open 1"
                        />
                      }
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <Text
                  className="bg-green-A700 justify-center mt-6 pb-2.5 pt-[13px] sm:px-5 px-8 rounded-[22px] text-sm text-white-A700 w-auto"
                  size="txtPoppinsSemiBold14WhiteA700"
                >
                  Change Password
                </Text>
              </div>
            </div>
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
                  <Text
                    className="absolute bg-white-A700 border border-gray-300_01 border-solid h-full inset-y-[0] justify-center left-[0] my-auto pl-6 pr-[35px] sm:px-5 py-[13px] rounded-[26px] text-base text-gray-600 w-[492px]"
                    size="txtPoppinsRegular16"
                  >
                    Your email address
                  </Text>
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

export default SettingsPage;
