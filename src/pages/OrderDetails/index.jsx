import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, List, ReactTable, Text } from "components";
import C07ShopOneBreadcrumbs from "components/C07ShopOneBreadcrumbs";
import C23UserDashboardColumnnavigation from "components/C23UserDashboardColumnnavigation";
import Header from "components/Header";

const OrderDetailsPage = () => {
  const table3Data = React.useRef([
    {
      product: "Red Capsicum",
      priceThree: "$14.00",
      quantity: "x5",
      subtotalOne: "$70.00",
    },
    {
      product: "Green Capsicum",
      priceThree: "$14.00",
      quantity: "x2",
      subtotalOne: "$28.00",
    },
    {
      product: "Green Chili",
      priceThree: "$26.70",
      quantity: "x10",
      subtotalOne: "$267.00",
    },
  ]);
  const table3Columns = React.useMemo(() => {
    const table3ColumnHelper = createColumnHelper();
    return [
      table3ColumnHelper.accessor("product", {
        cell: (info) => (
          <div className="flex flex-row gap-3 items-center justify-start p-2">
            <Img
              className="h-[70px] md:h-auto ml-3 mt-1 object-cover w-[70px]"
              src="images/img_image_49.png"
              alt="image"
            />
            <Text
              className="text-gray-900_01 text-sm"
              size="txtPoppinsRegular14Gray90001"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[424px] pl-5 py-2 text-gray-800 text-xs tracking-[0.36px] uppercase"
            size="txtPoppinsMedium12Gray800"
          >
            Product
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("priceThree", {
        cell: (info) => (
          <Text
            className="pb-8 pt-[35px] text-gray-900_01 text-sm"
            size="txtPoppinsRegular14Gray90001"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[169px] py-2 text-gray-800 text-xs tracking-[0.36px] uppercase"
            size="txtPoppinsMedium12Gray800"
          >
            Price
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("quantity", {
        cell: (info) => (
          <Text
            className="pb-8 pt-[35px] text-gray-900_01 text-sm"
            size="txtPoppinsRegular14Gray90001"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[191px] py-2 text-gray-800 text-xs tracking-[0.36px] uppercase"
            size="txtPoppinsMedium12Gray800"
          >
            Quantity
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("subtotalOne", {
        cell: (info) => (
          <Text
            className="pb-8 pt-[35px] text-gray-900_01 text-sm"
            size="txtPoppinsMedium14Gray90001"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[200px] py-2 text-gray-800 text-xs tracking-[0.36px] uppercase"
            size="txtPoppinsMedium12Gray800"
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
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="bg-white-A700 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
          <C07ShopOneBreadcrumbs
            className="bg-cover bg-gradient1  bg-no-repeat flex flex-col h-[120px] items-start justify-end p-[46px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_breadcrumbs.png')" }}
            homeimage="images/img_home.svg"
            homeSeven="Account"
            vectoroneimage="images/img_vector_gray_500.svg"
            homeEight="Order  History"
            vectortwoimage="images/img_vector_gray_600.svg"
            languagetext="Order Detail"
          />
          <div className="flex md:flex-col flex-row gap-6 items-start justify-center max-w-[1320px] mt-8 mx-auto md:px-5 w-full">
            <C23UserDashboardColumnnavigation
              className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col items-start justify-start mb-[407px] pb-3 rounded-lg w-auto"
              dashboardtwooneimage="images/img_dashboard2_blue_gray_100_24x24.svg"
              settingstext="Settings"
            />
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start outline outline-[1px] outline-gray-300_01 pb-5 rounded-lg w-3/4 md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-10 gap-[509px] items-center justify-start sm:px-5 px-6 py-4 rounded-tl-lg rounded-tr-lg shadow-bs5 w-auto md:w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Text
                      className="text-gray-900_01 text-xl w-auto"
                      size="txtPoppinsMedium20"
                    >
                      Order Details
                    </Text>
                    <Text
                      className="text-gray-800 text-sm w-auto"
                      size="txtPoppinsRegular14Gray800"
                    >
                      •
                    </Text>
                    <Text
                      className="text-gray-800 text-sm w-auto"
                      size="txtPoppinsRegular14Gray800"
                    >
                      April 24, 2021
                    </Text>
                    <Text
                      className="text-gray-800 text-sm w-auto"
                      size="txtPoppinsRegular14Gray800"
                    >
                      •
                    </Text>
                    <Text
                      className="text-gray-800 text-sm w-auto"
                      size="txtPoppinsRegular14Gray800"
                    >
                      3 Products
                    </Text>
                  </div>
                  <Text
                    className="text-base text-green-A700 w-auto"
                    size="txtPoppinsMedium16GreenA700"
                  >
                    Back to List
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-6 items-center justify-between mt-6 w-[96%] md:w-full">
                  <List
                    className="bg-white-A700 border border-gray-300_01 border-solid sm:flex-col flex-row gap-px grid sm:grid-cols-1 grid-cols-2 rounded-md w-[67%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col gap-3.5 items-start justify-start mb-5 sm:ml-[0] sm:mt-0 mt-3.5 w-full">
                      <Text
                        className="ml-5 md:ml-[0] text-gray-500 text-sm tracking-[0.42px] uppercase"
                        size="txtPoppinsMedium14Gray500"
                      >
                        Billing Address
                      </Text>
                      <Line className="bg-gray-300_01 h-px w-full" />
                      <div className="flex flex-col items-start justify-start ml-5 md:ml-[0] w-[91%] md:w-full">
                        <Text
                          className="text-base text-gray-900_01"
                          size="txtPoppinsRegular16Gray90001"
                        >
                          Dainne Russell
                        </Text>
                        <Text
                          className="leading-[150.00%] mt-2 text-gray-700 text-sm w-full"
                          size="txtPoppinsRegular14Gray700"
                        >
                          4140 Parker Rd. Allentown, New Mexico 31134
                        </Text>
                        <div className="flex flex-col gap-1 items-start justify-start mt-8 w-auto">
                          <Text
                            className="text-gray-500 text-xs tracking-[0.36px] uppercase w-auto"
                            size="txtPoppinsMedium12Gray500"
                          >
                            Email
                          </Text>
                          <Text
                            className="text-gray-900_01 text-sm w-auto"
                            size="txtPoppinsRegular14Gray90001"
                          >
                            dainne.ressell@gmail.com
                          </Text>
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start mt-[7px] w-auto">
                          <Text
                            className="text-gray-500 text-xs tracking-[0.36px] uppercase w-auto"
                            size="txtPoppinsMedium12Gray500"
                          >
                            Phone
                          </Text>
                          <Text
                            className="text-gray-900_01 text-sm w-auto"
                            size="txtPoppinsRegular14Gray90001"
                          >
                            (671) 555-0110
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="h-[280px] sm:ml-[0] relative w-full">
                      <div className="absolute flex flex-col gap-3.5 h-max inset-[0] items-start justify-center m-auto w-full">
                        <Text
                          className="ml-5 md:ml-[0] text-gray-500 text-sm tracking-[0.42px] uppercase"
                          size="txtPoppinsMedium14Gray500"
                        >
                          Shipping Address
                        </Text>
                        <Line className="bg-gray-300_01 h-px w-full" />
                        <div className="flex flex-col items-start justify-start ml-5 md:ml-[0] w-[91%] md:w-full">
                          <Text
                            className="text-base text-gray-900_01"
                            size="txtPoppinsRegular16Gray90001"
                          >
                            Dainne Russell
                          </Text>
                          <Text
                            className="leading-[150.00%] mt-2 text-gray-700 text-sm w-full"
                            size="txtPoppinsRegular14Gray700"
                          >
                            4140 Parker Rd. Allentown, New Mexico 31134
                          </Text>
                          <div className="flex flex-col gap-1 items-start justify-start mt-8 w-auto">
                            <Text
                              className="text-gray-500 text-xs tracking-[0.36px] uppercase w-auto"
                              size="txtPoppinsMedium12Gray500"
                            >
                              Email
                            </Text>
                            <Text
                              className="text-gray-900_01 text-sm w-auto"
                              size="txtPoppinsRegular14Gray90001"
                            >
                              dainne.ressell@gmail.com
                            </Text>
                          </div>
                          <div className="flex flex-col gap-1 items-start justify-start mt-[7px] w-auto">
                            <Text
                              className="text-gray-500 text-xs tracking-[0.36px] uppercase w-auto"
                              size="txtPoppinsMedium12Gray500"
                            >
                              Phone
                            </Text>
                            <Text
                              className="text-gray-900_01 text-sm w-auto"
                              size="txtPoppinsRegular14Gray90001"
                            >
                              (671) 555-0110
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Line className="absolute bg-gray-300_01 h-[280px] inset-y-[0] left-[0] my-auto w-px" />
                    </div>
                  </List>
                  <div className="border border-gray-300_01 border-solid flex flex-col items-start justify-start rounded-md w-auto">
                    <div className="flex flex-row gap-5 items-start justify-start px-5 py-[18px] w-auto">
                      <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                        <Text
                          className="text-gray-500 text-xs tracking-[0.36px] uppercase w-auto"
                          size="txtPoppinsMedium12Gray500"
                        >
                          Order ID:
                        </Text>
                        <Text
                          className="text-gray-900_01 text-sm w-auto"
                          size="txtPoppinsRegular14Gray90001"
                        >
                          #4152
                        </Text>
                      </div>
                      <Line className="bg-gray-300_01 h-10 w-px" />
                      <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                        <Text
                          className="text-gray-500 text-xs tracking-[0.36px] uppercase w-auto"
                          size="txtPoppinsMedium12Gray500"
                        >
                          Payment Method:
                        </Text>
                        <Text
                          className="text-gray-900_01 text-sm w-auto"
                          size="txtPoppinsRegular14Gray90001"
                        >
                          Paypal
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-gray-300_01 h-px w-full" />
                    <div className="flex flex-col gap-px items-start justify-start px-5 py-[18px] w-auto">
                      <div className="flex flex-row items-center justify-between pb-3 w-[248px]">
                        <Text
                          className="text-gray-700 text-sm w-auto"
                          size="txtPoppinsRegular14Gray700"
                        >
                          Subtotal:
                        </Text>
                        <Text
                          className="text-gray-900_01 text-sm w-auto"
                          size="txtPoppinsMedium14Gray90001"
                        >
                          $365.00
                        </Text>
                      </div>
                      <Line className="bg-gray-300_01 h-px w-full" />
                      <div className="flex flex-row items-center justify-between py-3 w-[248px]">
                        <Text
                          className="text-gray-700 text-sm w-auto"
                          size="txtPoppinsRegular14Gray700"
                        >
                          Discount
                        </Text>
                        <Text
                          className="text-gray-900_01 text-sm w-auto"
                          size="txtPoppinsMedium14Gray90001"
                        >
                          20%
                        </Text>
                      </div>
                      <Line className="bg-gray-300_01 h-px w-full" />
                      <div className="flex flex-row items-center justify-between py-3 w-[248px]">
                        <Text
                          className="text-gray-700 text-sm w-auto"
                          size="txtPoppinsRegular14Gray700"
                        >
                          Shipping
                        </Text>
                        <Text
                          className="text-gray-900_01 text-sm w-auto"
                          size="txtPoppinsMedium14Gray90001"
                        >
                          Free
                        </Text>
                      </div>
                      <Line className="bg-gray-300_01 h-px w-full" />
                      <div className="flex flex-row items-center justify-between pt-3 w-[248px]">
                        <Text
                          className="text-gray-900_01 text-lg w-auto"
                          size="txtPoppinsRegular18Gray90001"
                        >
                          Total
                        </Text>
                        <Text
                          className="text-green-800 text-lg w-auto"
                          size="txtPoppinsSemiBold18Green800"
                        >
                          $84.00
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mt-10 w-[86%] md:w-full">
                  <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                    <div className="h-10 md:h-[120px] sm:h-[397px] relative w-[95%] md:w-full">
                      <Img
                        className="h-px m-auto"
                        src="images/img_line.svg"
                        alt="line"
                      />
                      <div className="absolute md:gap-10 gap-[79px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 h-full inset-[0] items-center justify-between m-auto max-w-[800px] w-full">
                        <Button
                          className="flex h-10 items-center justify-center rounded-[50%] w-10"
                          shape="round"
                          color="green_A700"
                          size="md"
                          variant="fill"
                        >
                          <Img
                            className="h-5"
                            src="images/img_check.svg"
                            alt="check"
                          />
                        </Button>
                        <Text
                          className="bg-green-A700 flex h-10 items-center justify-center rounded-[50%] text-center text-sm text-white-A700 w-10"
                          size="txtPoppinsMedium14"
                        >
                          02
                        </Text>
                        <div className="bg-white-A700 flex flex-col h-10 items-center justify-start outline-[0.5px] outline-dashed outline-green-A700 p-[9px] rounded-[50%] w-10">
                          <Text
                            className="text-center text-green-A700 text-sm"
                            size="txtPoppinsRegular14GreenA700"
                          >
                            03
                          </Text>
                        </div>
                        <div className="bg-white-A700 flex flex-col h-10 items-center justify-start outline-[0.5px] outline-dashed outline-green-A700 p-[9px] rounded-[50%] w-10">
                          <Text
                            className="text-center text-green-A700 text-sm"
                            size="txtPoppinsRegular14GreenA700"
                          >
                            04
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-center text-green-800 text-sm"
                        size="txtPoppinsRegular14Green800"
                      >
                        Order received
                      </Text>
                      <Text
                        className="text-center text-green-800 text-sm"
                        size="txtPoppinsMedium14Green800"
                      >
                        Processing
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-center text-sm"
                        size="txtPoppinsRegular14Bluegray900"
                      >
                        On the way
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-center text-sm"
                        size="txtPoppinsRegular14Bluegray900"
                      >
                        Delivered
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="overflow-auto mt-[38px] w-full">
                  <ReactTable
                    columns={table3Columns}
                    data={table3Data.current}
                    rowClass={"border-b border-gray-300_01"}
                    headerClass="bg-gray-100"
                  />
                </div>
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

export default OrderDetailsPage;
