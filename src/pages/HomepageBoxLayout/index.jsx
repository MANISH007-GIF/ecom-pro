import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  SelectBox,
  Text,
} from "components";
import C01HomepageBannar2 from "components/C01HomepageBannar2";
import C01HomepageBannar3 from "components/C01HomepageBannar3";
import C01HomepageBannar4 from "components/C01HomepageBannar4";
import C02HomepageBoxLayoutBannar from "components/C02HomepageBoxLayoutBannar";
import C02HomepageBoxLayoutBannar1 from "components/C02HomepageBoxLayoutBannar1";
import C02HomepageBoxLayoutBannar2 from "components/C02HomepageBoxLayoutBannar2";
import C02HomepageBoxLayoutFooter from "components/C02HomepageBoxLayoutFooter";
import C02HomepageBoxLayoutNavigation from "components/C02HomepageBoxLayoutNavigation";
import C02HomepageBoxLayoutProduct from "components/C02HomepageBoxLayoutProduct";
import C02HomepageBoxLayoutProduct1 from "components/C02HomepageBoxLayoutProduct1";
import C02HomepageBoxLayoutProductsx from "components/C02HomepageBoxLayoutProductsx";
import C02HomepageBoxLayoutProductsx1 from "components/C02HomepageBoxLayoutProductsx1";
import C02HomepageBoxLayoutTeamcard from "components/C02HomepageBoxLayoutTeamcard";
import C02HomepageBoxLayoutTeamcard1 from "components/C02HomepageBoxLayoutTeamcard1";
import C02HomepageBoxLayoutVideo from "components/C02HomepageBoxLayoutVideo";

const engOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const usdOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const allcategoriesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const navlinksOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HomepageBoxLayoutPage = () => {
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
  const c02HomepageBoxLayoutTeamcard1PropList = [
    {},
    {
      username: "Cody Fisher",
      userimage: "images/img_image_31.png",
      userrole: "Security Guard",
    },
    {
      username: "Robert Fox",
      userimage: "images/img_image_32.png",
      userrole: "Senior Farmer Manager",
    },
  ];

  return (
    <>
      <div
        className="bg-cover bg-gray-200 bg-no-repeat flex flex-col font-poppins h-[5510px] items-center justify-start mx-auto p-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_02homepageboxlayout.png')" }}
      >
        <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1400px] mx-auto px-10 md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <C02HomepageBoxLayoutNavigation className="bg-white-A700 flex flex-col items-center justify-start w-auto md:w-full" />
              <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-row gap-3 items-center justify-start p-4 w-full">
                    <Img
                      className="h-6 ml-1 w-6"
                      src="images/img_apple1.svg"
                      alt="appleOne"
                    />
                    <Text
                      className="text-gray-900 text-sm"
                      size="txtPoppinsRegular14Gray900"
                    >
                      Fresh Fruit
                    </Text>
                  </div>
                  <Input
                    name="menu"
                    placeholder="Vegetables"
                    className="font-medium p-0 placeholder:text-white-A700 text-left text-sm w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-6 mr-3"
                        src="images/img_salad_1.svg"
                        alt="salad 1"
                      />
                    }
                    shape="square"
                    color="green_A700"
                    size="sm"
                    variant="fill"
                  ></Input>
                  <div className="flex flex-row gap-3 items-center justify-start p-4 w-full">
                    <Img
                      className="h-6 ml-1 w-6"
                      src="images/img_fish2.svg"
                      alt="fishTwo"
                    />
                    <Text
                      className="text-gray-900 text-sm"
                      size="txtPoppinsRegular14Gray900"
                    >
                      River Fish
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start p-4 w-full">
                    <Img
                      className="h-6 ml-1 w-6"
                      src="images/img_meat2.svg"
                      alt="meatTwo"
                    />
                    <Text
                      className="text-gray-900 text-sm"
                      size="txtPoppinsRegular14Gray900"
                    >
                      Chicken & Meat
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start p-4 w-full">
                    <Img
                      className="h-6 ml-1 w-6"
                      src="images/img_coffee1.svg"
                      alt="coffeeOne"
                    />
                    <Text
                      className="text-gray-900 text-sm"
                      size="txtPoppinsRegular14Gray900"
                    >
                      Drink & Water
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start p-[15px] w-full">
                    <Img
                      className="h-6 ml-1 w-6"
                      src="images/img_icecream1.svg"
                      alt="icecreamOne"
                    />
                    <Text
                      className="text-gray-900 text-sm"
                      size="txtPoppinsRegular14Gray900"
                    >
                      Yogurt & Ice Cream
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start p-4 w-full">
                    <Img
                      className="h-6 ml-1 w-6"
                      src="images/img_salad_1.svg"
                      alt="cupcakeOne"
                    />
                    <Text
                      className="text-gray-900 text-sm"
                      size="txtPoppinsRegular14Gray900"
                    >
                      Cake & Bread
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start p-4 w-full">
                    <Img
                      className="h-6 ml-1 w-6"
                      src="images/img_pie1.svg"
                      alt="pieOne"
                    />
                    <Text
                      className="text-gray-900 text-sm"
                      size="txtPoppinsRegular14Gray900"
                    >
                      Butter & Cream
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start p-[15px] w-full">
                    <Img
                      className="h-6 ml-1 w-6"
                      src="images/img_food1.svg"
                      alt="foodOne"
                    />
                    <Text
                      className="text-gray-900 text-sm"
                      size="txtPoppinsRegular14Gray900"
                    >
                      Cooking
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start outline outline-[0.5px] outline-gray-300_01 p-[15px] w-full">
                    <Img
                      className="h-6 ml-1 w-6"
                      src="images/img_plussolid1.svg"
                      alt="plussolidOne"
                    />
                    <Text
                      className="text-gray-900 text-sm"
                      size="txtPoppinsRegular14Gray900"
                    >
                      View all Category
                    </Text>
                  </div>
                </div>
                <C02HomepageBoxLayoutBannar
                  className="h-[560px] relative rounded-[12px] w-3/4 md:w-full"
                  offer={
                    <Text className="font-medium leading-[120.00%] text-2xl md:text-[22px] text-white-A700_99 sm:text-xl tracking-[0.72px] uppercase">
                      <span className="text-white-A700_99 font-poppins text-left">
                        <>
                          Sale Up to
                          <br />
                        </>
                      </span>
                      <span className="text-white-A700 font-poppins text-left">
                        48%
                      </span>
                      <span className="text-white-A700_99 font-poppins text-left">
                        {" "}
                        off
                      </span>
                    </Text>
                  }
                />
              </div>
              <List
                className="bg-white-A700 sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start shadow-bs10 w-auto md:w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 hover:cursor-pointer flex flex-row gap-4 items-center justify-start hover:mx-0 py-[30px] hover:shadow-bs11 w-auto hover:w-full">
                  <Button
                    className="flex h-[72px] items-center justify-center w-[72px]"
                    shape="circle"
                    color="gray_200"
                    size="lg"
                    variant="fill"
                  >
                    <Img
                      className="h-10"
                      src="images/img_deliverytruck1.svg"
                      alt="deliverytruckOne"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-center w-auto">
                    <Text
                      className="text-gray-900 text-lg w-auto"
                      size="txtPoppinsSemiBold18"
                    >
                      Free Shipping
                    </Text>
                    <Text
                      className="text-gray-500 text-sm w-auto"
                      size="txtPoppinsRegular14"
                    >
                      Free shipping with discount
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-row gap-4 items-center justify-start hover:mx-0 py-[30px] hover:shadow-bs11 w-auto hover:w-full">
                  <Button
                    className="flex h-[72px] items-center justify-center w-[72px]"
                    shape="circle"
                    color="gray_200"
                    size="xl"
                    variant="fill"
                  >
                    <Img
                      className="h-9"
                      src="images/img_headphones1.svg"
                      alt="headphonesOne"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-center w-auto">
                    <Text
                      className="text-gray-900 text-lg w-auto"
                      size="txtPoppinsSemiBold18"
                    >
                      Great Support 24/7
                    </Text>
                    <Text
                      className="text-gray-500 text-sm w-auto"
                      size="txtPoppinsRegular14"
                    >
                      Instant access to Contact
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-row gap-4 items-center justify-start hover:mx-0 py-[30px] hover:shadow-bs11 shadow-bs11 w-auto hover:w-full">
                  <Button
                    className="flex h-[72px] items-center justify-center w-[72px]"
                    shape="circle"
                    color="green_A700"
                    size="xl"
                    variant="fill"
                  >
                    <Img
                      className="h-9"
                      src="images/img_bag_white_a700_72x72.svg"
                      alt="bag"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-center w-auto">
                    <Text
                      className="text-gray-900 text-lg w-auto"
                      size="txtPoppinsSemiBold18"
                    >
                      100% Sucure Payment
                    </Text>
                    <Text
                      className="text-gray-500 text-sm w-auto"
                      size="txtPoppinsRegular14"
                    >
                      We ensure your money is save
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-row gap-4 items-center justify-start hover:mx-0 py-[30px] hover:shadow-bs11 w-auto hover:w-full">
                  <Button
                    className="flex h-[72px] items-center justify-center w-[72px]"
                    shape="circle"
                    color="gray_200"
                    size="xl"
                    variant="fill"
                  >
                    <Img
                      className="h-9"
                      src="images/img_package.svg"
                      alt="package"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-center w-auto">
                    <Text
                      className="text-gray-900 text-lg w-auto"
                      size="txtPoppinsSemiBold18"
                    >
                      Money-Back Guarantee
                    </Text>
                    <Text
                      className="text-gray-500 text-sm w-auto"
                      size="txtPoppinsRegular14"
                    >
                      30 days money-back
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-6 items-start justify-start mt-[60px] w-auto md:w-full">
            <C01HomepageBannar2 className="h-[536px] relative w-[33%] md:w-full" />
            <List
              className="sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
              orientation="horizontal"
            >
              <C01HomepageBannar3
                className="h-[536px] relative w-full"
                rectanglefiftyfour="images/img_rectangle54_2.png"
              />
              <C01HomepageBannar4
                className="h-[536px] relative w-full"
                rectanglefiftyfour="images/img_rectangle54_3.png"
              />
            </List>
          </div>
          <div className="flex flex-col items-center justify-start mt-14 w-full">
            <div className="flex flex-col gap-[27px] items-center justify-start w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-auto md:w-full">
                <Text
                  className="text-center text-green-A700 text-sm tracking-[0.28px] uppercase w-auto"
                  size="txtPoppinsMedium14"
                >
                  Category
                </Text>
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900 w-auto"
                  size="txtPoppinsSemiBold36"
                >
                  Shop by Top Categories
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-center min-h-[auto] w-full">
                  <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300_01 pb-6 pt-4 hover:shadow-bs2 hover:w-full w-full">
                    <Img
                      className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                      src="images/img_image1.png"
                      alt="imageOne"
                    />
                    <Text
                      className="text-center text-gray-900 text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      Fresh Fruit
                    </Text>
                  </div>
                  <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300_01 pb-6 pt-4 hover:shadow-bs2 shadow-bs2 hover:w-full w-full">
                    <Img
                      className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                      src="images/img_image1_130x190.png"
                      alt="imageOne"
                    />
                    <Text
                      className="text-center text-green-800 text-lg w-auto"
                      size="txtPoppinsMedium18Green800"
                    >
                      Fresh Vegetables
                    </Text>
                  </div>
                  <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300_01 pb-6 pt-4 hover:shadow-bs2 hover:w-full w-full">
                    <Img
                      className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                      src="images/img_image1_1.png"
                      alt="imageOne"
                    />
                    <Text
                      className="text-center text-gray-900 text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      Meat & Fish
                    </Text>
                  </div>
                  <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300_01 pb-6 pt-4 hover:shadow-bs2 hover:w-full w-full">
                    <Img
                      className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                      src="images/img_image1_2.png"
                      alt="imageOne"
                    />
                    <Text
                      className="text-center text-gray-900 text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      Snacks
                    </Text>
                  </div>
                  <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300_01 pb-6 pt-4 hover:shadow-bs2 hover:w-full w-full">
                    <Img
                      className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                      src="images/img_image1_3.png"
                      alt="imageOne"
                    />
                    <Text
                      className="text-center text-gray-900 text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      Beverages
                    </Text>
                  </div>
                  <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300_01 pb-6 pt-4 hover:shadow-bs2 hover:w-full w-full">
                    <Img
                      className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                      src="images/img_image1_4.png"
                      alt="imageOne"
                    />
                    <Text
                      className="text-center text-gray-900 text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      Beauty & Health
                    </Text>
                  </div>
                  <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300_01 pb-6 pt-4 hover:shadow-bs2 hover:w-full w-full">
                    <Img
                      className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                      src="images/img_image1_5.png"
                      alt="imageOne"
                    />
                    <Text
                      className="text-center text-gray-900 text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      Bread & Bakery
                    </Text>
                  </div>
                  <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300_01 pb-6 pt-4 hover:shadow-bs2 hover:w-full w-full">
                    <Img
                      className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                      src="images/img_image1_6.png"
                      alt="imageOne"
                    />
                    <Text
                      className="text-center text-gray-900 text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      Baking Needs
                    </Text>
                  </div>
                  <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300_01 pb-6 pt-4 hover:shadow-bs2 hover:w-full w-full">
                    <Img
                      className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                      src="images/img_image1_7.png"
                      alt="imageOne"
                    />
                    <Text
                      className="text-center text-gray-900 text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      Cooking
                    </Text>
                  </div>
                  <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300_01 pb-6 pt-4 hover:shadow-bs2 hover:w-full w-full">
                    <Img
                      className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                      src="images/img_image1_8.png"
                      alt="imageOne"
                    />
                    <Text
                      className="text-center text-gray-900 text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      Diabetic Food
                    </Text>
                  </div>
                  <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300_01 pb-6 pt-4 hover:shadow-bs2 hover:w-full w-full">
                    <Img
                      className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                      src="images/img_image1_9.png"
                      alt="imageOne"
                    />
                    <Text
                      className="text-center text-gray-900 text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      Dish Detergents
                    </Text>
                  </div>
                  <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300_01 pb-6 pt-4 hover:shadow-bs2 hover:w-full w-full">
                    <Img
                      className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                      src="images/img_image1_10.png"
                      alt="imageOne"
                    />
                    <Text
                      className="text-center text-gray-900 text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      Oil
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center justify-start mt-[60px] w-full">
            <div className="flex flex-col gap-2 items-center justify-start w-auto md:w-full">
              <Text
                className="text-center text-green-A700 text-sm tracking-[0.28px] uppercase w-auto"
                size="txtPoppinsMedium14"
              >
                Products
              </Text>
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900 w-auto"
                size="txtPoppinsSemiBold36"
              >
                Our Featured Products
              </Text>
            </div>
            <div className="flex flex-col gap-[23px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row gap-5 items-center justify-between max-w-[1320px] w-full">
                <C02HomepageBoxLayoutBannar1 className="h-[335px] relative w-[19%] md:w-full" />
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-4/5 md:w-full"
                  orientation="horizontal"
                >
                  <C02HomepageBoxLayoutProductsx className="bg-white-A700 hover:border border hover:border-gray-300_01 border-gray-300_01 hover:border-solid border-solid hover:cursor-pointer flex flex-col items-center justify-start hover:shadow-bs2 hover:w-full w-full" />
                  <C02HomepageBoxLayoutProductsx
                    className="bg-white-A700 hover:border border hover:border-gray-300_01 border-gray-300_01 hover:border-solid border-solid hover:cursor-pointer flex flex-col items-center justify-start hover:shadow-bs2 hover:w-full w-full"
                    productimage="images/img_image_246x246.png"
                    productname="Green Lettuce"
                  />
                  <C02HomepageBoxLayoutProductsx1 className="bg-white-A700 hover:border border hover:border-gray-300_01 border-gray-300_01 hover:border-solid border-solid hover:cursor-pointer flex flex-col items-center justify-start hover:shadow-bs2 shadow-bs2 hover:w-full w-full" />
                  <C02HomepageBoxLayoutProductsx
                    className="bg-white-A700 hover:border border hover:border-gray-300_01 border-gray-300_01 hover:border-solid border-solid hover:cursor-pointer flex flex-col items-center justify-start hover:shadow-bs2 hover:w-full w-full"
                    productimage="images/img_image_20.png"
                    productname="Corn"
                  />
                </List>
              </div>
              <div className="flex relative w-full">
                <div className="flex my-auto w-[84%] md:w-full">
                  <div className="flex my-auto w-[70%] md:w-full">
                    <div className="flex flex-col gap-4 items-start justify-start my-auto w-[424px]">
                      <Text
                        className="text-gray-900 text-lg w-auto"
                        size="txtPoppinsMedium18"
                      >
                        Hot Deals
                      </Text>
                      <C02HomepageBoxLayoutProduct
                        className="md:h-[114px] h-[116px] relative w-[424px] sm:w-full"
                        productimage="images/img_image.png"
                        productname="Green Apple"
                      />
                      <div className="flex flex-col items-center justify-start w-full">
                        <C02HomepageBoxLayoutProduct1
                          className="md:h-[114px] h-[116px] relative w-[424px] sm:w-full"
                          bagtwo="images/img_bag_white_a700.svg"
                          eyeoneone="images/img_eye1.svg"
                          favoritetwo="images/img_favorite.svg"
                        />
                      </div>
                      <C02HomepageBoxLayoutProduct
                        className="md:h-[114px] h-[116px] relative w-[424px] sm:w-full"
                        productimage="images/img_image_6.png"
                        productname="Green Lettuce"
                      />
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start ml-[-88px] my-auto w-[424px] z-[1]">
                      <Text
                        className="text-gray-900 text-lg w-auto"
                        size="txtPoppinsMedium18"
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
                  <div className="flex flex-col gap-4 items-start justify-start ml-[-88px] my-auto w-[424px] z-[1]">
                    <Text
                      className="text-gray-900 text-lg w-auto"
                      size="txtPoppinsMedium18"
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
                <C02HomepageBoxLayoutBannar2
                  className="h-[423px] ml-[-88px] my-auto w-[24%] z-[1]"
                  startingat2399={
                    <Text className="font-semibold leading-[120.00%] md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900">
                      <span className="text-gray-900 font-poppins">
                        Save 37%
                      </span>
                      <span className="text-gray-900 font-poppins font-normal">
                        <>
                          {" "}
                          on
                          <br />
                          Every Order
                        </>
                      </span>
                    </Text>
                  }
                  rectanglefiftyfour="images/img_rectangle54_423x312.png"
                />
              </div>
            </div>
          </div>
          <C02HomepageBoxLayoutVideo className="h-[396px] md:h-[456px] mt-[60px] relative w-full" />
          <div className="flex flex-col items-center justify-start mt-14 w-full">
            <div className="flex flex-col gap-8 items-center justify-start w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-auto md:w-full">
                <Text
                  className="text-center text-green-A700 text-sm tracking-[0.28px] uppercase w-auto"
                  size="txtPoppinsMedium14"
                >
                  Team
                </Text>
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900 w-auto"
                  size="txtPoppinsSemiBold36"
                >
                  Our Professional Members
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                <C02HomepageBoxLayoutTeamcard className="bg-white-A700 flex md:flex-1 flex-col gap-4 items-center justify-start pb-5 shadow-bs6 w-[24%] md:w-full" />
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-3/4 md:w-full"
                  orientation="horizontal"
                >
                  {c02HomepageBoxLayoutTeamcard1PropList.map((props, index) => (
                    <React.Fragment
                      key={`C02HomepageBoxLayoutTeamcard1${index}`}
                    >
                      <C02HomepageBoxLayoutTeamcard1
                        className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col gap-4 items-center justify-start sm:ml-[0] pb-5 w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </List>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 flex flex-col gap-9 items-center justify-center mt-[60px] p-[60px] md:px-10 sm:px-5 w-auto md:w-full">
            <div className="flex flex-col gap-2 items-center justify-start w-auto md:w-full">
              <Text
                className="text-center text-green-A700 text-sm tracking-[0.28px] uppercase w-auto"
                size="txtPoppinsMedium14"
              >
                Client Testiomial
              </Text>
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900 w-auto"
                size="txtPoppinsSemiBold36"
              >
                What our Client Says
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-col gap-4 items-start justify-start p-6 sm:px-5 shadow-bs4 w-auto sm:w-full">
                <Img
                  className="h-[26px] w-8"
                  src="images/img_user.svg"
                  alt="user"
                />
                <Text
                  className="leading-[150.00%] max-w-[336px] md:max-w-full text-gray-800 text-sm"
                  size="txtPoppinsRegular14Gray800"
                >
                  Pellentesque eu nibh eget mauris congue mattis mattis nec
                  tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                  cursus velit sodales. Donec sed neque eget
                </Text>
                <div className="flex flex-row items-center justify-between pt-2 w-[336px]">
                  <div className="flex flex-row gap-3 items-center justify-start w-[168px]">
                    <Img
                      className="h-14 md:h-auto rounded-[50%] w-14"
                      src="images/img_image_56x56.png"
                      alt="image"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-center text-gray-900 w-auto"
                        size="txtPoppinsMedium16"
                      >
                        Robert Fox
                      </Text>
                      <Text
                        className="text-center text-gray-500 text-sm w-auto"
                        size="txtPoppinsRegular14"
                      >
                        Customer
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-5 w-[104px]"
                    src="images/img_rating.svg"
                    alt="rating"
                  />
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col gap-4 items-start justify-start p-6 sm:px-5 shadow-bs4 w-auto sm:w-full">
                <Img
                  className="h-[26px] w-8"
                  src="images/img_user.svg"
                  alt="user"
                />
                <Text
                  className="leading-[150.00%] max-w-[336px] md:max-w-full text-gray-800 text-sm"
                  size="txtPoppinsRegular14Gray800"
                >
                  Pellentesque eu nibh eget mauris congue mattis mattis nec
                  tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                  cursus velit sodales. Donec sed neque eget
                </Text>
                <div className="flex flex-row items-center justify-between pt-2 w-[336px]">
                  <div className="flex flex-row gap-3 items-center justify-start w-[186px]">
                    <Img
                      className="h-14 md:h-auto rounded-[50%] w-14"
                      src="images/img_image_26.png"
                      alt="image"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-center text-gray-900 w-auto"
                        size="txtPoppinsMedium16"
                      >
                        Dianne Russell
                      </Text>
                      <Text
                        className="text-center text-gray-500 text-sm w-auto"
                        size="txtPoppinsRegular14"
                      >
                        Customer
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-5 w-[104px]"
                    src="images/img_rating.svg"
                    alt="rating"
                  />
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col gap-4 items-start justify-start p-6 sm:px-5 shadow-bs4 w-auto sm:w-full">
                <Img
                  className="h-[26px] w-8"
                  src="images/img_user.svg"
                  alt="user"
                />
                <Text
                  className="leading-[150.00%] max-w-[336px] md:max-w-full text-gray-800 text-sm"
                  size="txtPoppinsRegular14Gray800"
                >
                  Pellentesque eu nibh eget mauris congue mattis mattis nec
                  tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                  cursus velit sodales. Donec sed neque eget
                </Text>
                <div className="flex flex-row items-center justify-between pt-2 w-[336px]">
                  <div className="flex flex-row gap-3 items-center justify-start w-[173px]">
                    <Img
                      className="h-14 md:h-auto rounded-[50%] w-14"
                      src="images/img_image_27.png"
                      alt="image"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-center text-gray-900 w-auto"
                        size="txtPoppinsMedium16"
                      >
                        Eleanor Pena
                      </Text>
                      <Text
                        className="text-center text-gray-500 text-sm w-auto"
                        size="txtPoppinsRegular14"
                      >
                        Customer
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-5 w-[104px]"
                    src="images/img_rating.svg"
                    alt="rating"
                  />
                </div>
              </div>
            </List>
          </div>
          <Img
            className="h-[152px] mt-[60px] w-[1320px]"
            src="images/img_companylogo_white_a700.svg"
            alt="companylogo"
          />
          <C02HomepageBoxLayoutFooter className="bg-white-A700 flex flex-col items-start justify-start mt-[60px] w-auto md:w-full" />
        </div>
      </div>
    </>
  );
};

export default HomepageBoxLayoutPage;
