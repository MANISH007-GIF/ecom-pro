import React from "react";

import {
  Button,
  FloatingInput,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";
import C01HomepageBannar2 from "components/C01HomepageBannar2";
import C01HomepageBannar3 from "components/C01HomepageBannar3";
import C01HomepageBannar4 from "components/C01HomepageBannar4";
import C01HomepageColumnThree from "components/C01HomepageColumnThree";
import C01HomepageColumnuser from "components/C01HomepageColumnuser";
import C02HomepageBoxLayoutBannar1 from "components/C02HomepageBoxLayoutBannar1";
import C02HomepageBoxLayoutProduct from "components/C02HomepageBoxLayoutProduct";
import C02HomepageBoxLayoutProduct1 from "components/C02HomepageBoxLayoutProduct1";
import C02HomepageBoxLayoutProductsx from "components/C02HomepageBoxLayoutProductsx";
import C02HomepageBoxLayoutProductsx1 from "components/C02HomepageBoxLayoutProductsx1";
import C03HomepageCategories from "components/C03HomepageCategories";
import Header from "components/Header";

const Homepage1Page = () => {
  const c02HomepageBoxLayoutProductPropList = [
    { productname: "Eggplant", productimage: "images/img_image_8.png" },
    {},
    { productname: "Red Tomatos", productimage: "images/img_image_29.png" },
  ];
  const c02HomepageBoxLayoutProductPropList1 = [
    {
      productname: "Big Potatos",
      productimage: "images/img_image_230x254.png",
    },
    { productname: "Corn", productimage: "images/img_image_3.png" },
    {
      productname: "Fresh cauliflower",
      productimage: "images/img_image_4.png",
    },
  ];
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const c01HomepageColumnuserPropList = [
    {},
    { reviewername: "Dianne Russell" },
    { reviewername: "Eleanor Pena" },
  ];
  const c01HomepageColumnuserPropList1 = [
    {},
    { reviewername: "Dianne Russell" },
    { reviewername: "Eleanor Pena" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col gap-6 items-center justify-start w-full">
          <Header className="bg-white-A700 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col max-w-[1520px] mx-auto md:px-5 relative w-full">
            <div className="bg-gray-200 flex flex-col md:gap-10 gap-[71px] items-center justify-center mx-auto p-[52px] md:px-10 sm:px-5 rounded-lg w-full">
              <div className="h-[503px] md:h-[549px] mt-[65px] relative w-[97%] md:w-full">
                <div className="absolute md:h-[484px] h-[503px] inset-y-[0] my-auto right-[0] w-3/5 md:w-full">
                  <Img
                    className="absolute h-[484px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_shadow.png"
                    alt="shadow"
                  />
                  <div className="absolute h-[484px] inset-[0] justify-center m-auto w-full">
                    <Img
                      className="h-[484px] m-auto object-cover w-full"
                      src="images/img_image_484x819.png"
                      alt="image"
                    />
                    <Img
                      className="absolute h-[484px] inset-[0] justify-center m-auto object-cover w-full"
                      src="images/img_image_484x819.png"
                      alt="highlight"
                    />
                  </div>
                </div>
                <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[0] my-auto w-[44%]">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[5px] text-center text-green-A700 text-sm tracking-[0.28px] uppercase"
                      size="txtPoppinsMedium14GreenA700"
                    >
                      Welcome to shopery
                    </Text>
                    <Text
                      className="leading-[120.00%] mt-1 md:text-5xl text-7xl text-gray-900_01"
                      size="txtPoppinsSemiBold72"
                    >
                      <>
                        Fresh & Healthy
                        <br />
                        Organic Food
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[5px] mt-[25px] w-auto">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01 w-auto"
                      size="txtPoppinsRegular32"
                    >
                      <span className="text-gray-900_01 font-poppins text-left font-normal">
                        Sale up to{" "}
                      </span>
                      <span className="text-orange-600 font-poppins text-left font-semibold">
                        30% OFF
                      </span>
                    </Text>
                    <Text
                      className="text-gray-600 text-sm w-auto"
                      size="txtPoppinsRegular14Gray600"
                    >
                      Free shipping on all your order. we deliver, you enjoy
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[191px] md:ml-[0] ml-[5px] mt-[30px] rounded-[25px]"
                    rightIcon={
                      <Img
                        className="mt-1 mb-[7px] ml-4"
                        src="images/img_arrowleft_white_a700.svg"
                        alt="arrow_left"
                      />
                    }
                    color="green_A700"
                    size="lg"
                    variant="fill"
                  >
                    <div className="font-semibold text-base text-left">
                      Shop now
                    </div>
                  </Button>
                </div>
              </div>
              <PagerIndicator
                className="flex gap-2 h-2 items-center justify-start mb-[51px] w-12"
                count={3}
                activeCss="inline-block cursor-pointer h-2 bg-green-A700 w-4 rounded"
                activeIndex={1}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-2 bg-gray-400_01 w-2"
                selectedWrapperCss="inline-block"
                unselectedWrapperCss="inline-block"
              />
            </div>
            <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1400px] mt-[-64px] mx-auto p-10 sm:px-5 rounded-lg shadow-bs9 w-full z-[1]">
              <List
                className="md:flex-1 sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 w-[49%] md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-row gap-4 items-center justify-center w-auto">
                  <Img
                    className="h-10 w-10"
                    src="images/img_deliverytruck1.svg"
                    alt="deliverytruckOne"
                  />
                  <div className="flex flex-col gap-2 items-start justify-center w-auto">
                    <Text
                      className="text-base text-gray-900_01 w-auto"
                      size="txtPoppinsSemiBold16"
                    >
                      Free Shipping
                    </Text>
                    <Text
                      className="text-gray-500 text-sm w-auto"
                      size="txtPoppinsRegular14"
                    >
                      Free shipping on all your order
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center justify-center w-auto">
                  <Img
                    className="h-10 w-10"
                    src="images/img_headphones1.svg"
                    alt="headphonesOne"
                  />
                  <div className="flex flex-col gap-2 items-start justify-center w-auto">
                    <Text
                      className="text-base text-gray-900_01 w-auto"
                      size="txtPoppinsSemiBold16"
                    >
                      Customer Support 24/7
                    </Text>
                    <Text
                      className="text-gray-500 text-sm w-auto"
                      size="txtPoppinsRegular14"
                    >
                      Instant access to Support
                    </Text>
                  </div>
                </div>
              </List>
              <List
                className="md:flex-1 sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 w-[49%] md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-row gap-4 items-center justify-center w-auto">
                  <Img
                    className="h-10 w-10"
                    src="images/img_bag_green_a700.svg"
                    alt="bag"
                  />
                  <div className="flex flex-col gap-2 items-start justify-center w-auto">
                    <Text
                      className="text-base text-gray-900_01 w-auto"
                      size="txtPoppinsSemiBold16"
                    >
                      100% Secure Payment
                    </Text>
                    <Text
                      className="text-gray-500 text-sm w-auto"
                      size="txtPoppinsRegular14"
                    >
                      We ensure your money is save
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center justify-center w-auto">
                  <Img
                    className="h-10 w-10"
                    src="images/img_package.svg"
                    alt="package"
                  />
                  <div className="flex flex-col gap-2 items-start justify-center w-auto">
                    <Text
                      className="text-base text-gray-900_01 w-auto"
                      size="txtPoppinsSemiBold16"
                    >
                      Money-Back Guarantee
                    </Text>
                    <Text
                      className="text-gray-500 text-sm w-auto"
                      size="txtPoppinsRegular14"
                    >
                      30 Days Money-Back Guarantee
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1320px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-auto sm:w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 w-auto"
              size="txtPoppinsSemiBold40"
            >
              Featured Products
            </Text>
            <PagerIndicator
              className="flex gap-1 h-1 items-start justify-start w-[72px]"
              count={3}
              activeCss="inline-block cursor-pointer h-1 bg-green-A700 w-10"
              activeIndex={1}
              inactiveCss="inline-block cursor-pointer h-1 bg-green-A700_75 w-3"
              selectedWrapperCss="inline-block"
              unselectedWrapperCss="inline-block"
            />
          </div>
          <div className="flex flex-col gap-[49px] items-center justify-start w-full">
            <List
              className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
              <C02HomepageBoxLayoutProductsx
                className="bg-white-A700 hover:border border hover:border-gray-300_01 border-gray-300_01 hover:border-solid border-solid hover:cursor-pointer flex flex-col items-center justify-start hover:mx-0 rounded-lg hover:shadow-bs2 hover:w-full w-full"
                productimage="images/img_image.png"
                productname="Green Apple"
              />
              <C02HomepageBoxLayoutProductsx className="bg-white-A700 hover:border border hover:border-gray-300_01 border-gray-300_01 hover:border-solid border-solid hover:cursor-pointer flex flex-col items-center justify-start hover:mx-0 rounded-lg hover:shadow-bs2 hover:w-full w-full" />
              <C02HomepageBoxLayoutProductsx
                className="bg-white-A700 hover:border border hover:border-gray-300_01 border-gray-300_01 hover:border-solid border-solid hover:cursor-pointer flex flex-col items-center justify-start hover:mx-0 rounded-lg hover:shadow-bs2 hover:w-full w-full"
                productimage="images/img_image_33.png"
                productname="Green Lettuce"
              />
              <C02HomepageBoxLayoutProductsx1
                className="bg-white-A700 hover:border border hover:border-gray-300_01 border-gray-300_01 hover:border-solid border-solid hover:cursor-pointer flex flex-col items-center justify-start hover:mx-0 rounded-lg hover:shadow-bs2 shadow-bs2 hover:w-full w-full"
                image="images/img_image_7.png"
              />
              <C02HomepageBoxLayoutProductsx
                className="bg-white-A700 hover:border border hover:border-gray-300_01 border-gray-300_01 hover:border-solid border-solid hover:cursor-pointer flex flex-col items-center justify-start hover:mx-0 rounded-lg hover:shadow-bs2 hover:w-full w-full"
                productimage="images/img_image_34.png"
                productname="Corn"
              />
            </List>
            <div className="flex relative w-[1320px] md:w-full">
              <div className="flex my-auto w-[84%] md:w-full">
                <div className="flex my-auto w-[70%] md:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start my-auto w-auto">
                    <Text
                      className="text-gray-900_01 text-xl w-auto"
                      size="txtPoppinsMedium20"
                    >
                      Hot Deals
                    </Text>
                    <C02HomepageBoxLayoutProduct
                      className="md:h-[114px] h-[116px] relative w-[424px] sm:w-full"
                      productimage="images/img_image.png"
                      productname="Green Apple"
                    />
                    <C02HomepageBoxLayoutProduct1 className="md:h-[115px] h-[116px] relative w-[424px] sm:w-full" />
                    <C02HomepageBoxLayoutProduct
                      className="md:h-[114px] h-[116px] relative w-[424px] sm:w-full"
                      productimage="images/img_image_6.png"
                      productname="Green Lettuce"
                    />
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start ml-[-88px] my-auto w-auto z-[1]">
                    <Text
                      className="text-gray-900_01 text-xl w-auto"
                      size="txtPoppinsMedium20"
                    >
                      Best Seller
                    </Text>
                    <List
                      className="flex flex-col gap-4 items-center w-full"
                      orientation="vertical"
                    >
                      {c02HomepageBoxLayoutProductPropList.map(
                        (props, index) => (
                          <React.Fragment
                            key={`C02HomepageBoxLayoutProduct${index}`}
                          >
                            <C02HomepageBoxLayoutProduct
                              className="md:h-[114px] h-[116px] relative w-[424px] sm:w-full"
                              {...props}
                            />
                          </React.Fragment>
                        ),
                      )}
                    </List>
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start ml-[-88px] my-auto w-auto z-[1]">
                  <Text
                    className="text-gray-900_01 text-xl w-auto"
                    size="txtPoppinsMedium20"
                  >
                    Top Rated
                  </Text>
                  <List
                    className="flex flex-col gap-4 items-center w-full"
                    orientation="vertical"
                  >
                    {c02HomepageBoxLayoutProductPropList1.map(
                      (props, index) => (
                        <React.Fragment
                          key={`C02HomepageBoxLayoutProduct${index}`}
                        >
                          <C02HomepageBoxLayoutProduct
                            className="md:h-[114px] h-[116px] relative w-[424px] sm:w-full"
                            {...props}
                          />
                        </React.Fragment>
                      ),
                    )}
                  </List>
                </div>
              </div>
              <C02HomepageBoxLayoutBannar1
                className="h-[426px] ml-[-88px] my-auto w-[24%] z-[1]"
                imageTwo="images/img_image_426x312.png"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1490px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[50px] items-center justify-start w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-auto">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 w-auto"
                size="txtPoppinsSemiBold40"
              >
                Top Category
              </Text>
              <PagerIndicator
                className="flex gap-1 h-1 items-start justify-start w-[72px]"
                count={3}
                activeCss="inline-block cursor-pointer h-1 bg-green-A700 w-10"
                activeIndex={1}
                inactiveCss="inline-block cursor-pointer h-1 bg-green-A700_75 w-3"
                selectedWrapperCss="inline-block"
                unselectedWrapperCss="inline-block"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <Button
                className="border border-gray-300_01 border-solid flex h-[45px] items-center justify-center md:mt-0 my-[82px] rotate-[180deg] w-[45px]"
                shape="round"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                <Img
                  src="images/img_arrowdown_gray_900.svg"
                  alt="arrowdown_Six"
                />
              </Button>
              <List
                className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6"
                orientation="horizontal"
              >
                <div className="bg-white-A700 border hover:border-0 border-gray-200_01 border-solid hover:cursor-pointer flex flex-col gap-5 items-center justify-start sm:ml-[0] hover:mx-0 pb-6 pt-8 rounded-md hover:shadow-bs2 shadow-bs2 w-auto hover:w-full">
                  <Img
                    className="h-20 w-20"
                    src="images/img_salad_1_white_a700.svg"
                    alt="vegetable"
                  />
                  <div className="flex flex-col gap-1.5 items-center justify-start w-auto">
                    <Text
                      className="text-center text-green-800 text-lg w-auto"
                      size="txtPoppinsMedium18Green800"
                    >
                      Vegetables
                    </Text>
                    <Text
                      className="text-center text-gray-600 text-sm w-auto"
                      size="txtPoppinsRegular14Gray600"
                    >
                      165 Products
                    </Text>
                  </div>
                </div>
                <C03HomepageCategories className="bg-white-A700 border hover:border-0 border-gray-200_01 border-solid hover:cursor-pointer flex flex-col gap-5 items-center justify-start sm:ml-[0] hover:mx-0 pb-6 pt-8 rounded-md hover:shadow-bs2 w-auto hover:w-full" />
                <div className="bg-white-A700 border hover:border-0 border-gray-200_01 border-solid hover:cursor-pointer flex flex-col gap-5 items-center justify-start sm:ml-[0] hover:mx-0 pb-6 pt-8 rounded-md hover:shadow-bs2 w-auto hover:w-full">
                  <Img
                    className="h-20 w-20"
                    src="images/img_salad_1.svg"
                    alt="fishOne"
                  />
                  <div className="flex flex-col gap-1.5 items-center justify-start w-auto">
                    <Text
                      className="text-center text-gray-900_01 text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      River Fish
                    </Text>
                    <Text
                      className="text-center text-gray-600 text-sm w-auto"
                      size="txtPoppinsRegular14Gray600"
                    >
                      34 Products
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border hover:border-0 border-gray-200_01 border-solid hover:cursor-pointer flex flex-col gap-5 items-center justify-start sm:ml-[0] hover:mx-0 pb-6 pt-8 rounded-md hover:shadow-bs2 w-auto hover:w-full">
                  <Img
                    className="h-20 w-20"
                    src="images/img_meat1.svg"
                    alt="meatOne"
                  />
                  <div className="flex flex-col gap-1.5 items-center justify-start w-auto">
                    <Text
                      className="text-center text-gray-900_01 text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      Meat
                    </Text>
                    <Text
                      className="text-center text-gray-600 text-sm w-auto"
                      size="txtPoppinsRegular14Gray600"
                    >
                      165 Products
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border hover:border-0 border-gray-200_01 border-solid hover:cursor-pointer flex flex-col gap-5 items-center justify-start sm:ml-[0] hover:mx-0 pb-6 pt-8 rounded-md hover:shadow-bs2 w-auto hover:w-full">
                  <Img
                    className="h-20 w-20"
                    src="images/img_salad_1_white_a700.svg"
                    alt="softdrinkOne"
                  />
                  <div className="flex flex-col gap-1.5 items-center justify-start w-auto">
                    <Text
                      className="text-center text-gray-900_01 text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      Water and Drinks
                    </Text>
                    <Text
                      className="text-center text-gray-600 text-sm w-auto"
                      size="txtPoppinsRegular14Gray600"
                    >
                      48 Products
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border hover:border-0 border-gray-200_01 border-solid hover:cursor-pointer flex flex-col gap-5 items-center justify-start sm:ml-[0] hover:mx-0 pb-6 pt-8 rounded-md hover:shadow-bs2 w-auto hover:w-full">
                  <Img
                    className="h-20 w-20"
                    src="images/img_salad_1.svg"
                    alt="snacksOne"
                  />
                  <div className="flex flex-col gap-1.5 items-center justify-start w-auto">
                    <Text
                      className="text-center text-gray-900_01 text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      Snacks
                    </Text>
                    <Text
                      className="text-center text-gray-600 text-sm w-auto"
                      size="txtPoppinsRegular14Gray600"
                    >
                      165 Products
                    </Text>
                  </div>
                </div>
              </List>
              <Button
                className="border border-gray-300_01 border-solid flex h-[45px] items-center justify-center md:mt-0 my-[82px] w-[45px]"
                shape="round"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                <Img src="images/img_arrowleft_gray_900.svg" alt="arrowleft" />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-[1320px] mx-auto md:px-5 w-full">
          <C01HomepageBannar2 className="h-[536px] relative w-[33%] md:w-full" />
          <List
            className="md:flex-1 sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
            orientation="horizontal"
          >
            <C01HomepageBannar3
              className="h-[536px] relative w-full"
              rectanglefiftyfour="images/img_rectangle54_4.png"
            />
            <C01HomepageBannar4
              className="h-[536px] relative w-full"
              rectanglefiftyfour="images/img_rectangle54_5.png"
            />
          </List>
        </div>
        <div className="flex flex-col gap-[50px] items-center justify-start md:px-10 sm:px-5 px-[300px] w-auto md:w-full">
          <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between max-w-[1320px] mx-auto w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 w-auto"
                size="txtPoppinsSemiBold40"
              >
                Newest Products
              </Text>
              <PagerIndicator
                className="flex gap-1 h-1 items-start justify-start w-[72px]"
                count={3}
                activeCss="inline-block cursor-pointer h-1 bg-green-A700 w-10"
                activeIndex={1}
                inactiveCss="inline-block cursor-pointer h-1 bg-green-A700_75 w-3"
                selectedWrapperCss="inline-block"
                unselectedWrapperCss="inline-block"
              />
            </div>
            <div className="flex flex-row gap-3 items-center justify-center w-auto">
              <a
                href="javascript:"
                className="text-base text-green-A700 w-auto"
              >
                <Text size="txtPoppinsMedium16GreenA700">View All</Text>
              </a>
              <Img
                className="h-3 w-[15px]"
                src="images/img_arrowleft.svg"
                alt="arrowleft_One"
              />
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-start max-w-[1320px] mx-auto w-full"
            orientation="horizontal"
          >
            <C02HomepageBoxLayoutProductsx
              className="bg-white-A700 hover:border border hover:border-gray-300_01 border-gray-300_01 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start hover:mx-0 rounded-lg hover:shadow-bs2 hover:w-full w-full"
              productimage="images/img_image.png"
              productname="Green Appl"
            />
            <C02HomepageBoxLayoutProductsx className="bg-white-A700 hover:border border hover:border-gray-300_01 border-gray-300_01 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start hover:mx-0 rounded-lg hover:shadow-bs2 hover:w-full w-full" />
            <C02HomepageBoxLayoutProductsx
              className="bg-white-A700 hover:border border hover:border-gray-300_01 border-gray-300_01 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start hover:mx-0 rounded-lg hover:shadow-bs2 hover:w-full w-full"
              productimage="images/img_image_246x246.png"
              productname="Green Lettuce"
            />
            <C02HomepageBoxLayoutProductsx1
              className="bg-white-A700 hover:border border hover:border-gray-300_01 border-gray-300_01 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start hover:mx-0 rounded-lg hover:shadow-bs2 shadow-bs2 hover:w-full w-full"
              image="images/img_image_7.png"
            />
            <C02HomepageBoxLayoutProductsx
              className="bg-white-A700 hover:border border hover:border-gray-300_01 border-gray-300_01 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start hover:mx-0 rounded-lg hover:shadow-bs2 hover:w-full w-full"
              productimage="images/img_image_20.png"
              productname="Corn"
            />
          </List>
        </div>
        <div className="bg-gray-200 flex flex-col gap-[50px] items-center justify-start py-[100px] w-auto md:w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 w-auto"
                size="txtPoppinsSemiBold40"
              >
                Client Testimonial
              </Text>
              <PagerIndicator
                className="flex gap-1 h-1 items-start justify-start w-[72px]"
                count={3}
                activeCss="inline-block cursor-pointer h-1 bg-green-A700 w-10"
                activeIndex={sliderState}
                inactiveCss="inline-block cursor-pointer h-1 bg-green-A700_75 w-3"
                sliderRef={sliderRef}
                selectedWrapperCss="inline-block"
                unselectedWrapperCss="inline-block"
              />
            </div>
            <div className="flex flex-row gap-3 items-start justify-start w-auto">
              <Button
                className="border border-gray-300_01 border-solid flex h-[45px] items-center justify-center rotate-[180deg] w-[45px]"
                shape="round"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                <Img
                  src="images/img_arrowdown_gray_900.svg"
                  alt="arrowdown_Seven"
                />
              </Button>
              <Button
                className="flex h-[45px] items-center justify-center w-[45px]"
                shape="round"
                color="green_A700"
                size="lg"
                variant="fill"
              >
                <Img
                  src="images/img_arrowleft_white_a700.svg"
                  alt="arrowleft_Two"
                />
              </Button>
            </div>
          </div>
          <Slider
            autoPlay
            autoPlayInterval={2000}
            activeIndex={sliderState}
            responsive={{
              0: { items: 1 },
              550: { items: 1 },
              1050: { items: 1 },
            }}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            ref={sliderRef}
            className="max-w-[1320px] mx-auto md:px-5 w-full"
            items={[...Array(5)].map(() => (
              <React.Fragment key={Math.random()}>
                <List
                  className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mx-2.5"
                  orientation="horizontal"
                >
                  {c01HomepageColumnuserPropList1.map((props, index) => (
                    <React.Fragment key={`C01HomepageColumnuser${index}`}>
                      <C01HomepageColumnuser
                        className="bg-white-A700 flex flex-col gap-4 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs13 w-auto sm:w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </List>
              </React.Fragment>
            ))}
            renderDotsItem={({ isActive }) => {
              if (isActive) {
                return (
                  <div className="inline-block cursor-pointer h-2 bg-green-A700 w-4 rounded" />
                );
              }
              return (
                <div
                  className="inline-block cursor-pointer rounded-[50%] h-2 bg-gray-400_01 w-2"
                  role="button"
                  tabIndex={0}
                />
              );
            }}
          />
          <PagerIndicator
            className="flex gap-2 h-2 items-center justify-start w-20"
            count={5}
            activeCss="inline-block cursor-pointer h-2 bg-green-A700 w-4 rounded"
            activeIndex={sliderState}
            inactiveCss="inline-block cursor-pointer rounded-[50%] h-2 bg-gray-400_01 w-2"
            sliderRef={sliderRef}
            selectedWrapperCss="inline-block"
            unselectedWrapperCss="inline-block"
          />
        </div>
        <C01HomepageColumnThree
          className="flex flex-col items-center justify-start max-w-[1320px] mx-auto md:px-5 w-full"
          image="images/img_instagrampost_5.png"
          image1="images/img_instagrampost_6.png"
        />
        <footer className="bg-gray-900_01 flex items-center justify-center md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-20 items-center justify-center w-full">
            <div className="bg-gray-100 flex md:flex-col flex-row md:gap-10 gap-[115px] items-center justify-start p-[49px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-row gap-[9.76px] items-center justify-start md:ml-[0] ml-[250px] w-auto">
                <Img
                  className="h-[39px] w-[39px]"
                  src="images/img_plant1.svg"
                  alt="plantOne_One"
                />
                <Text
                  className="sm:text-[35.04px] md:text-[37.04px] text-[39.04px] text-gray-900_01 tracking-[-1.17px] w-auto"
                  size="txtPoppinsMedium3904"
                >
                  Ecobazar
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl w-auto"
                  size="txtPoppinsMedium24"
                >
                  Subcribe our Newsletter
                </Text>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtPoppinsRegular14"
                >
                  Pellentesque eu nibh eget mauris congue mattis matti.
                </Text>
              </div>
              <div className="h-[52px] relative w-[30%] md:w-full">
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
            </div>
            <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-[69%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtPoppinsMedium20WhiteA700"
                  >
                    About Shopery
                  </Text>
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
                <div className="flex flex-col gap-5 items-start justify-start w-auto">
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtPoppinsMedium20WhiteA700"
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
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">Settings</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-5 items-start justify-start w-auto">
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtPoppinsMedium20WhiteA700"
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
                <div className="flex flex-col gap-5 items-start justify-start w-auto">
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtPoppinsMedium20WhiteA700"
                  >
                    Proxy
                  </Text>
                  <ul className="flex flex-col gap-3 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <a href="javascript:" className="text-base text-gray-500">
                        <Text size="txtPoppinsRegular16Gray500">About</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-base text-gray-500">
                        <Text size="txtPoppinsRegular16Gray500">Shop</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-base text-gray-500">
                        <Text size="txtPoppinsRegular16Gray500">Product</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">Products Details</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">Track Order</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-5 items-start justify-start w-auto">
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtPoppinsMedium20WhiteA700"
                  >
                    Download our Mobile App
                  </Text>
                  <div className="flex flex-row gap-2 items-start justify-start w-auto sm:w-full">
                    <FloatingInput
                      wrapClassName="bg-blue_gray-900 border-0 flex pb-2 pl-[35px] pr-[30px] pt-[26px] rounded top-[0] w-full"
                      className="font-medium p-0 placeholder:bg-blue_gray-900 placeholder:left-[35px] placeholder:text-gray-400 placeholder:top-[0] sm:px-5 text-base text-left text-white-A700 w-full"
                      name="appstore"
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
                      className="font-medium p-0 placeholder:bg-blue_gray-900 placeholder:left-[35px] placeholder:text-gray-400 placeholder:top-[0] sm:pl-5 text-base text-left text-white-A700 w-full"
                      name="googleplay"
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
              <div className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-start py-6 shadow-bs8 w-full">
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
                      src="images/img_twitter1_gray_400.svg"
                      alt="twitterOne"
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
                    alt="info"
                  />
                </div>
                <Text
                  className="md:ml-[0] ml-[308px] text-gray-600 text-sm"
                  size="txtPoppinsRegular14Gray600"
                >
                  Ecobazar eCommerce © 2021. All Rights Reserved
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start ml-52 md:ml-[0] w-auto">
                  <div className="bg-gray-900_01 border border-blue_gray-900 border-solid flex flex-col items-center justify-start p-1.5 rounded-[5px] w-[17%]">
                    <Img
                      className="h-[13px] my-0.5"
                      src="images/img_settings.svg"
                      alt="settings_Two"
                    />
                  </div>
                  <div className="bg-gray-900_01 border border-blue_gray-900 border-solid flex flex-col items-center justify-start p-1.5 rounded-[5px] w-[17%]">
                    <Img
                      className="h-2.5 my-1"
                      src="images/img_settings_white_a700.svg"
                      alt="settings_Three"
                    />
                  </div>
                  <div className="bg-gray-900_01 border border-blue_gray-900 border-solid flex flex-col items-end justify-end rounded-[5px] w-[17%]">
                    <Img
                      className="h-[18px] mt-2.5"
                      src="images/img_settings_white_a700_18x39.svg"
                      alt="settings_Four"
                    />
                  </div>
                  <div className="bg-gray-900_01 border border-blue_gray-900 border-solid flex flex-col items-center justify-start p-1.5 rounded-[5px] w-[17%]">
                    <Img
                      className="h-[17px]"
                      src="images/img_user_red_a700.svg"
                      alt="user"
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

export default Homepage1Page;
