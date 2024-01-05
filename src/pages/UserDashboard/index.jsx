import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, ReactTable, Text } from "components";
import C07ShopOneBreadcrumbs from "components/C07ShopOneBreadcrumbs";
import C23UserDashboardColumnnavigation from "components/C23UserDashboardColumnnavigation";
import Header from "components/Header";

const UserDashboardPage = () => {
  const table2Data = React.useRef([
    {
      orderid: "738",
      date: "8 Sep, 2020",
      total: "$135.00 (5 Products)",
      status: "View Details",
    },
    {
      orderid: "703",
      date: "24 May, 2020",
      total: "$25.00 (1 Product)",
      status: "View Details",
    },
    {
      orderid: "130",
      date: "22 Oct, 2020",
      total: "$250.00 (4 Products)",
      status: "View Details",
    },
    {
      orderid: "561",
      date: "1 Feb, 2020",
      total: "$35.00 (1 Products)",
      status: "View Details",
    },
    {
      orderid: "536",
      date: "21 Sep, 2020",
      total: "$578.00 (13 Products)",
      status: "View Details",
    },
    {
      orderid: "492",
      date: "22 Oct, 2020",
      total: "$345.00 (7 Products)",
      status: "View Details",
    },
  ]);
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper();
    return [
      table2ColumnHelper.accessor("orderid", {
        cell: (info) => (
          <div className="flex flex-col justify-start p-[11px]">
            <Text
              className="ml-3 md:ml-[0] text-blue_gray-900 text-sm"
              size="txtPoppinsRegular14Bluegray900"
            >
              #
            </Text>
            <Text
              className="ml-6 md:ml-[0] mr-[127px] text-blue_gray-900 text-sm"
              size="txtPoppinsRegular14Bluegray900"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[200px] sm:pl-5 pl-6 py-2 text-gray-800 text-xs tracking-[0.36px] uppercase"
            size="txtPoppinsMedium12Gray800"
          >
            Order ID
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("date", {
        cell: (info) => (
          <Text
            className="pb-2.5 pt-[13px] text-blue_gray-900 text-sm"
            size="txtPoppinsRegular14Bluegray900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[224px] py-2 text-gray-800 text-xs tracking-[0.36px] uppercase"
            size="txtPoppinsMedium12Gray800"
          >
            Date
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("total", {
        cell: (info) => (
          <Text
            className="py-[11px] text-blue_gray-900 text-sm"
            size="txtPoppinsRegular14Bluegray900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[268px] py-2 text-gray-800 text-xs tracking-[0.36px] uppercase"
            size="txtPoppinsMedium12Gray800"
          >
            Total
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("status", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-between pr-2.5 py-2.5">
            <Text
              className="mt-0.5 text-blue_gray-900 text-sm"
              size="txtPoppinsRegular14Bluegray900"
            >
              Processing
            </Text>
            <Text
              className="mr-[13px] text-green-A700 text-sm"
              size="txtPoppinsMedium14GreenA700"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[292px] py-2 text-gray-800 text-xs tracking-[0.36px] uppercase"
            size="txtPoppinsMedium12Gray800"
          >
            Status
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
            className="bg-cover bg-gradient1  bg-no-repeat flex flex-col h-[120px] items-start justify-end p-[47px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_breadcrumbs.png')" }}
            homeimage="images/img_home.svg"
            homeEight="Account"
            vectortwoimage="images/img_vector_gray_600.svg"
            languagetext="Dashboard"
          />
          <div className="flex md:flex-col flex-row gap-6 items-start justify-center max-w-[1320px] mt-8 mx-auto md:px-5 w-full">
            <C23UserDashboardColumnnavigation
              className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col items-start justify-start mb-72 pb-3 rounded-lg w-auto"
              dashboardtwoimage="images/img_dashboard2_blue_gray_100.svg"
              orderhistorytext="Order History"
              dashboardtwooneimage="images/img_dashboard2_blue_gray_100_24x24.svg"
              settingstext="Settings"
            />
            <div className="flex md:flex-1 flex-col gap-6 items-center justify-start w-3/4 md:w-full">
              <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                <div className="bg-white-A700 border border-gray-300_01 border-solid flex md:flex-1 flex-col items-center justify-start p-8 sm:px-5 rounded-lg w-[55%] md:w-full">
                  <Img
                    className="h-[120px] md:h-auto rounded-[50%] w-[120px]"
                    src="images/img_ellipse5.png"
                    alt="ellipseFive"
                  />
                  <div className="flex flex-col gap-0.5 items-center justify-start mt-[7px] w-auto">
                    <Text
                      className="text-center text-gray-900_01 text-xl w-auto"
                      size="txtPoppinsMedium20"
                    >
                      Dianne Russell
                    </Text>
                    <Text
                      className="text-center text-gray-600 text-sm w-auto"
                      size="txtPoppinsRegular14Gray600"
                    >
                      Customer
                    </Text>
                  </div>
                  <Text
                    className="mt-[9px] text-base text-center text-green-A700"
                    size="txtPoppinsMedium16GreenA700"
                  >
                    Edit Profile
                  </Text>
                </div>
                <div className="bg-white-A700 border border-gray-300_01 border-solid flex md:flex-1 flex-col items-start justify-start p-7 sm:px-5 rounded-lg w-[44%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[3px] text-gray-500 text-sm tracking-[0.42px] uppercase"
                    size="txtPoppinsMedium14Gray500"
                  >
                    Billing Address
                  </Text>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[3px] mt-3.5">
                    <Text
                      className="text-gray-900_01 text-lg"
                      size="txtPoppinsMedium18"
                    >
                      Dainne Russell
                    </Text>
                    <Text
                      className="leading-[150.00%] mt-2 text-gray-700 text-sm w-full"
                      size="txtPoppinsRegular14Gray700"
                    >
                      4140 Parker Rd. Allentown, New Mexico 31134
                    </Text>
                    <Text
                      className="mt-2.5 text-base text-gray-900_01"
                      size="txtPoppinsRegular16Gray90001"
                    >
                      dainne.ressell@gmail.com
                    </Text>
                    <Text
                      className="mt-[3px] text-base text-gray-900_01"
                      size="txtPoppinsRegular16Gray90001"
                    >
                      (671) 555-0110
                    </Text>
                  </div>
                  <Text
                    className="mb-[3px] md:ml-[0] ml-[3px] mt-[18px] text-base text-green-A700"
                    size="txtPoppinsMedium16GreenA700"
                  >
                    Edit Address
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col items-center justify-start py-[17px] rounded-lg w-full">
                <div className="flex flex-col items-center justify-start mb-1.5 w-full">
                  <div className="flex flex-col items-center justify-start pb-6 sm:px-5 px-6 w-full">
                    <div className="flex flex-row sm:gap-10 items-start justify-between mb-[26px] w-full">
                      <Text
                        className="text-gray-900_01 text-xl"
                        size="txtPoppinsMedium20"
                      >
                        Recet Order History
                      </Text>
                      <a
                        href="javascript:"
                        className="text-base text-green-A700"
                      >
                        <Text size="txtPoppinsMedium16GreenA700">View All</Text>
                      </a>
                    </div>
                  </div>
                  <div className="overflow-auto w-full">
                    <ReactTable
                      columns={table2Columns}
                      data={table2Data.current}
                      rowClass={""}
                      headerClass="bg-gray-100"
                    />
                  </div>
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

export default UserDashboardPage;
