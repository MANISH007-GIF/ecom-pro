import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, ReactTable, Text } from "components";
import C07ShopOneBreadcrumbs from "components/C07ShopOneBreadcrumbs";
import C23UserDashboardColumnnavigation from "components/C23UserDashboardColumnnavigation";
import Footer from "components/Footer";
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
              size="txtPoppinsMedium14"
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
                      className="text-center text-gray-900 text-xl w-auto"
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
                      className="text-gray-900 text-lg"
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
                      className="mt-2.5 text-base text-gray-900"
                      size="txtPoppinsRegular16Gray900"
                    >
                      dainne.ressell@gmail.com
                    </Text>
                    <Text
                      className="mt-[3px] text-base text-gray-900"
                      size="txtPoppinsRegular16Gray900"
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
                        className="text-gray-900 text-xl"
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
          <Footer className="flex items-center justify-center mt-20 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default UserDashboardPage;
