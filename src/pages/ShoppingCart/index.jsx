import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, ReactTable, Text } from "components";
import C07ShopOneBreadcrumbs from "components/C07ShopOneBreadcrumbs";
import Header from "components/Header";

const ShoppingCartPage = () => {
  const table1Data = React.useRef([
    {
      product: "Green Capsicum",
      priceOne: "$14.00",
      quantity: "images/img_plus1.svg",
      subtotal: "images/img_close_blue_gray_100.svg",
    },
    {
      product: "Red Capsicum",
      priceOne: "$14.00",
      quantity: "images/img_plus1.svg",
      subtotal: "images/img_close_blue_gray_100.svg",
    },
  ]);
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("product", {
        cell: (info) => (
          <div className="flex flex-row gap-3 items-center justify-start p-2.5">
            <Img
              className="h-[100px] md:h-auto ml-[9px] object-cover w-[100px]"
              src="images/img_image_7.png"
              alt="image"
            />
            <Text
              className="text-base text-gray-900_01"
              size="txtPoppinsRegular16Gray90001"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[403px] pb-[13px] pl-5 text-gray-600 text-sm tracking-[0.42px] uppercase"
            size="txtPoppinsMedium14Gray600"
          >
            Product
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("priceOne", {
        cell: (info) => (
          <Text
            className="py-[35px] text-base text-gray-900_01"
            size="txtPoppinsRegular16Gray90001"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[114px] pb-[13px] text-gray-600 text-sm tracking-[0.42px] uppercase"
            size="txtPoppinsMedium14Gray600"
          >
            price
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("quantity", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center sm:pr-5 pr-[35px] py-[35px]">
            <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-row items-center justify-between mr-[26px] p-2 rounded-[25px] w-[83%]">
              <div className="bg-gray-100 flex flex-col h-[34px] items-center justify-start p-2.5 rounded-[50%] w-[34px]">
                <Img
                  className="h-3.5 w-3.5"
                  src="images/img_minus.svg"
                  alt="minus"
                />
              </div>
              <Text
                className="text-base text-center text-gray-900_01"
                size="txtPoppinsRegular16Gray90001"
              >
                5
              </Text>
              <div className="bg-gray-100 flex flex-col h-[34px] items-center justify-start p-2.5 rounded-[50%] w-[34px]">
                <Img
                  className="h-3.5 w-3.5"
                  alt="plusOne"
                  src={info?.getValue()}
                />
              </div>
            </div>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[186px] pb-3 text-center text-gray-600 text-sm tracking-[0.42px] uppercase"
            size="txtPoppinsMedium14Gray600"
          >
            Quantity
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("subtotal", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-between pr-5 py-5">
            <Text
              className="text-base text-gray-900_01"
              size="txtPoppinsMedium16Gray90001"
            >
              $70.00
            </Text>
            <Img
              className="h-6 my-[29px] w-6"
              alt="close"
              src={info?.getValue()}
            />
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[169px] pb-[13px] text-gray-600 text-sm tracking-[0.42px] uppercase"
            size="txtPoppinsMedium14Gray600"
          >
            Subtotal
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header className="bg-white-A700 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
          <C07ShopOneBreadcrumbs
            className="bg-cover bg-gradient1  bg-no-repeat flex flex-col h-[120px] items-start justify-end p-[45px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_breadcrumbs.png')" }}
            homeimage="images/img_home.svg"
            vectortwoimage="images/img_vector_gray_600.svg"
            languagetext="Shopping cart"
          />
          <Text
            className="md:ml-[0] ml-[814px] mt-[37px] md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900_01"
            size="txtPoppinsSemiBold32"
          >
            My Shopping Cart
          </Text>
          <div className="flex md:flex-col flex-row gap-6 items-start justify-center max-w-[1320px] mt-6 mx-auto md:px-5 w-full">
            <div className="bg-white-A700 border border-gray-300_01 border-solid flex md:flex-1 flex-col items-center justify-start py-3 rounded-lg w-[67%] md:w-full">
              <div className="overflow-auto w-full">
                <ReactTable
                  columns={table1Columns}
                  data={table1Data.current}
                  rowClass={""}
                  headerClass=""
                />
              </div>
              <Line className="bg-gray-300_01 h-px w-[96%]" />
              <Line className="bg-gray-300_01 h-px mt-[123px] w-full" />
              <div className="flex flex-row flex-wrap sm:gap-10 items-center justify-between max-w-[832px] mb-[3px] mt-[15px] w-full">
                <Button
                  className="!text-gray-800 cursor-pointer font-semibold min-w-[168px] text-center text-sm"
                  shape="round"
                  color="gray_100"
                  size="lg"
                  variant="fill"
                >
                  Return to shop
                </Button>
                <Button
                  className="!text-gray-800 cursor-pointer font-semibold min-w-[151px] text-center text-sm"
                  shape="round"
                  color="gray_100"
                  size="lg"
                  variant="fill"
                >
                  Update Cart
                </Button>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300_01 border-solid flex md:flex-1 flex-col items-start justify-start mb-[75px] p-[23px] sm:px-5 rounded-lg w-[33%] md:w-full">
              <Text
                className="text-gray-900_01 text-xl"
                size="txtPoppinsMedium20"
              >
                Cart Total
              </Text>
              <div className="flex flex-col items-center justify-start mt-[7px] w-full">
                <div className="bg-white-A700 flex flex-row items-center justify-between py-3 shadow-bs5 w-[376px] sm:w-full">
                  <Text
                    className="text-gray-800 text-sm w-auto"
                    size="txtPoppinsRegular14Gray800"
                  >
                    Subtotal:
                  </Text>
                  <Text
                    className="text-gray-900_01 text-sm w-auto"
                    size="txtPoppinsMedium14Gray90001"
                  >
                    $84.00
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-row items-center justify-between py-3 shadow-bs5 w-[376px] sm:w-full">
                  <Text
                    className="text-gray-800 text-sm w-auto"
                    size="txtPoppinsRegular14Gray800"
                  >
                    Shipping:
                  </Text>
                  <Text
                    className="text-gray-900_01 text-sm w-auto"
                    size="txtPoppinsMedium14Gray90001"
                  >
                    Free
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-row items-center justify-between py-3 w-[376px] sm:w-full">
                  <Text
                    className="text-base text-gray-800 w-auto"
                    size="txtPoppinsRegular16Gray800"
                  >
                    Total:
                  </Text>
                  <Text
                    className="text-base text-gray-900_01 w-auto"
                    size="txtPoppinsSemiBold16"
                  >
                    $84.00
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer font-semibold mt-5 rounded-[25px] text-base text-center w-[376px]"
                color="green_A700"
                size="lg"
                variant="fill"
              >
                <>Proceed to checkout</>
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 border border-gray-300_01 border-solid flex md:flex-col flex-row gap-6 items-center justify-start md:ml-[0] ml-[300px] mt-6 p-5 md:px-5 rounded-lg w-auto md:w-full">
            <Text
              className="text-gray-900_01 text-xl w-auto"
              size="txtPoppinsMedium20"
            >
              Coupon Code
            </Text>
            <div className="flex relative w-[81%] md:w-full">
              <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col items-start justify-end my-auto sm:px-5 px-6 py-3.5 rounded-[26px] w-auto">
                <Text
                  className="text-base text-gray-500 w-auto"
                  size="txtPoppinsRegular16Gray500"
                >
                  Enter code
                </Text>
              </div>
              <Button
                className="cursor-pointer font-semibold min-w-[196px] ml-[-59px] my-auto rounded-[26px] text-base text-center z-[1]"
                color="blue_gray_900"
                size="lg"
                variant="fill"
              >
                Apply Coupon
              </Button>
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

export default ShoppingCartPage;
