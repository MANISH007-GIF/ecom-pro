import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Text,
} from "components";
import C01HomepageProduct5n from "components/C01HomepageProduct5n";
import C01HomepageProduct5n1 from "components/C01HomepageProduct5n1";
import C01HomepageProduct5n2 from "components/C01HomepageProduct5n2";
import C04HomepageBannar from "components/C04HomepageBannar";
import C04HomepageBannar1 from "components/C04HomepageBannar1";
import C04HomepageBannar2 from "components/C04HomepageBannar2";
import C04HomepageBestdeal from "components/C04HomepageBestdeal";
import C04HomepageFeatured from "components/C04HomepageFeatured";
import C04HomepageProducts from "components/C04HomepageProducts";
import C04HomepageVideo from "components/C04HomepageVideo";

const Homepage2Page = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <header className="bg-white-A700 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full">
          <div className="bg-blue_gray-900 flex flex-1 flex-row md:gap-10 items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] py-3 shadow-bs5 w-full">
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Img
                className="h-[18px] w-[15px]"
                src="images/img_linkedin_gray_400.svg"
                alt="linkedin"
              />
              <Text
                className="text-gray-400 text-xs w-auto"
                size="txtPoppinsRegular12"
              >
                Store Location: Lincoln- 344, Illinois, Chicago, USA
              </Text>
            </div>
            <ul className="flex flex-row gap-5 sm:hidden items-center justify-start w-auto common-row-list">
              <li>
                <a href="javascript:">
                  <div className="flex flex-row gap-1.5 items-center justify-start">
                    <Text
                      className="text-center text-gray-400 text-xs w-auto"
                      size="txtPoppinsRegular12"
                    >
                      Eng
                    </Text>
                    <Img
                      className="h-[3px]"
                      src="images/img_arrowdown_gray_400.svg"
                      alt="arrowdown"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div className="flex flex-row gap-1.5 items-center justify-start">
                    <Text
                      className="text-center text-gray-400 text-xs w-auto"
                      size="txtPoppinsRegular12"
                    >
                      USD
                    </Text>
                    <Img
                      className="h-[3px]"
                      src="images/img_arrowdown_gray_400.svg"
                      alt="arrowdown_One"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <Line className="bg-white-A700_19 h-[15px] w-px" />
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <ul className="flex flex-row gap-1 items-start justify-start">
                    <li>
                      <a href="javascript:" className="text-gray-400 text-xs">
                        <Text size="txtPoppinsRegular12">Sign In</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-400 text-xs">
                        <Text size="txtPoppinsRegular12">/</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-400 text-xs">
                        <Text size="txtPoppinsRegular12">Sign Up</Text>
                      </a>
                    </li>
                  </ul>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-[21px] sm:px-5 w-full">
            <div className="flex flex-row gap-2 items-center justify-start md:ml-[0] ml-[278px] w-auto">
              <Img
                className="h-8 w-8"
                src="images/img_plant1.svg"
                alt="plantOne"
              />
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[-0.96px] w-auto"
                size="txtPoppinsMedium32"
              >
                Ecobazar
              </Text>
            </div>
            <div className="border border-gray-300_01 border-solid flex sm:flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start md:ml-[0] ml-[228px] rounded-md w-auto sm:w-full">
              <div className="flex flex-row gap-2 items-center justify-start px-[17px] py-3 w-[400px] sm:w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_search.svg"
                  alt="search"
                />
                <Text
                  className="text-[15px] text-gray-600 w-auto"
                  size="txtPoppinsRegular15"
                >
                  Search
                </Text>
              </div>
              <Button
                className="cursor-pointer font-semibold min-w-[98px] rounded-br-md rounded-tr-md text-center text-sm"
                color="green_A700"
                size="md"
                variant="fill"
              >
                Search
              </Button>
            </div>
            <div className="flex flex-row gap-4 items-center justify-start md:ml-[0] ml-[220px] w-auto">
              <Img
                className="h-8 w-8"
                src="images/img_favorite.svg"
                alt="favorite"
              />
              <Line className="bg-blue_gray-100 h-6 w-px" />
              <div className="flex flex-row gap-3 items-center justify-start w-auto">
                <div className="h-9 md:h-[34px] relative w-9">
                  <Img
                    className="absolute bottom-[0] h-[34px] left-[0] w-[34px]"
                    src="images/img_bag.svg"
                    alt="bag"
                  />
                  <Text
                    className="absolute bg-green-800 flex h-[18px] items-center justify-center outline outline-[1px] outline-white-A700 right-[0] rounded-[50%] text-[10px] text-center text-white-A700 top-[0] w-[18px]"
                    size="txtPoppinsMedium10"
                  >
                    2
                  </Text>
                </div>
                <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                  <Text
                    className="text-[11px] text-gray-800 w-auto"
                    size="txtPoppinsRegular11Gray800"
                  >
                    Shopping cart:
                  </Text>
                  <Text
                    className="text-gray-900 text-sm w-auto"
                    size="txtPoppinsMedium14Gray900"
                  >
                    $57.00
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] w-full">
            <ul className="flex md:flex-1 md:flex-col flex-row gap-8 items-center justify-start w-auto md:w-full">
              <li>
                <a href="javascript:">
                  <div className="bg-green-A700 flex flex-row gap-2 items-center justify-start sm:px-5 px-6 py-4">
                    <Img
                      className="h-6 w-6"
                      src="images/img_menu_1.svg"
                      alt="menuOne"
                    />
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtPoppinsMedium14WhiteA700"
                    >
                      All Categories
                    </Text>
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown_Two"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div className="flex flex-row gap-1 items-center justify-start">
                    <Text
                      className="text-green-A700 text-sm w-auto"
                      size="txtPoppinsMedium14"
                    >
                      Home
                    </Text>
                    <Img
                      className="h-4 w-4"
                      src="images/img_checkmark_green_a700.svg"
                      alt="checkmark"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div className="flex flex-row gap-1 items-center justify-start">
                    <Text
                      className="text-gray-600 text-sm w-auto"
                      size="txtPoppinsMedium14Gray600"
                    >
                      Shop
                    </Text>
                    <Img
                      className="h-4 w-4"
                      src="images/img_checkmark.svg"
                      alt="checkmark_One"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div className="flex flex-row gap-1 items-center justify-start">
                    <Text
                      className="text-gray-600 text-sm w-auto"
                      size="txtPoppinsMedium14Gray600"
                    >
                      Pages
                    </Text>
                    <Img
                      className="h-4 w-4"
                      src="images/img_checkmark.svg"
                      alt="checkmark_Two"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div className="flex flex-row gap-1 items-center justify-start">
                    <Text
                      className="text-gray-600 text-sm w-auto"
                      size="txtPoppinsMedium14Gray600"
                    >
                      Blog
                    </Text>
                    <Img
                      className="h-4 w-4"
                      src="images/img_checkmark.svg"
                      alt="checkmark_Three"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-gray-600 text-sm w-auto"
                      size="txtPoppinsMedium14Gray600"
                    >
                      About Us
                    </Text>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div className="flex flex-col items-center justify-start">
                    <a
                      href="javascript:"
                      className="text-gray-600 text-sm w-auto"
                    >
                      <Text size="txtPoppinsMedium14Gray600">Contact Us</Text>
                    </a>
                  </div>
                </a>
              </li>
            </ul>
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Img
                className="h-7 w-7"
                src="images/img_call_gray_900.svg"
                alt="call"
              />
              <Text
                className="text-gray-900 text-sm w-auto"
                size="txtPoppinsMedium14Gray900"
              >
                (219) 555-0114
              </Text>
            </div>
          </div>
        </header>
        <div className="bg-white-A700 flex flex-col gap-7 items-center justify-end p-8 sm:px-5 w-full">
          <div className="h-[564px] sm:h-[600px] md:h-[911px] max-w-[1540px] mt-9 mx-auto md:px-5 relative w-full">
            <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[88%]">
              <div className="flex md:flex-col flex-row gap-[18px] items-center justify-between w-full">
                <div className="h-[564px] relative w-[59%] md:w-full">
                  <Img
                    className="h-[564px] m-auto object-cover w-full"
                    src="images/img_image_564x795.png"
                    alt="image"
                  />
                  <div className="absolute bg-orange-600 flex flex-col h-[100px] items-center justify-start p-[15px] right-[5%] rounded-[50%] top-[27%] w-[100px]">
                    <div className="flex flex-col items-center justify-start mb-[5px] w-[65px]">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-auto"
                        size="txtPoppinsSemiBold32WhiteA700"
                      >
                        70%
                      </Text>
                      <Text
                        className="text-base text-center text-white-A700 tracking-[0.32px] uppercase w-auto"
                        size="txtPoppinsMedium16WhiteA700"
                      >
                        off
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start w-2/5 md:w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-center text-green-A700 text-sm tracking-[0.28px] uppercase w-auto"
                      size="txtSegoeScript14"
                    >
                      Welcome to shopery
                    </Text>
                    <Text
                      className="leading-[120.00%] md:text-5xl sm:text-[42px] text-[56px] text-black-900"
                      size="txtPoppinsSemiBold56"
                    >
                      <>
                        Fresh & Healthy
                        <br />
                        Organic Food
                      </>
                    </Text>
                  </div>
                  <Text
                    className="mt-[21px] text-gray-600_01 text-lg"
                    size="txtPoppinsRegular18"
                  >
                    Free shipping on all your order. we deliver, you enjoy
                  </Text>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[191px] mt-[29px] rounded-[25px]"
                    rightIcon={
                      <Img
                        className="mt-1 mb-[7px] ml-4"
                        src="images/img_arrowleft_white_a700.svg"
                        alt="arrow_left"
                      />
                    }
                    color="green_A700"
                    size="md"
                    variant="fill"
                  >
                    <div className="font-semibold text-base text-left">
                      Shop now
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-row md:gap-10 h-max inset-[0] items-center justify-between m-auto w-full">
              <Button
                className="border border-gray-300_03 border-solid flex h-[45px] items-center justify-center rotate-[180deg] w-[45px]"
                shape="round"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                <Img
                  src="images/img_arrowdown_black_900.svg"
                  alt="arrowdown_Three"
                />
              </Button>
              <Button
                className="border border-gray-300_03 border-solid flex h-[45px] items-center justify-center w-[45px]"
                shape="round"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                <Img src="images/img_arrowleft_black_900.svg" alt="arrowleft" />
              </Button>
            </div>
          </div>
          <PagerIndicator
            className="flex gap-2 h-2 items-center justify-start w-12"
            count={3}
            activeCss="inline-block cursor-pointer h-2 bg-green-A700 w-4 rounded"
            activeIndex={1}
            inactiveCss="inline-block cursor-pointer rounded-[50%] h-2 bg-gray-400_01 w-2"
            selectedWrapperCss="inline-block"
            unselectedWrapperCss="inline-block"
          />
        </div>
        <div className="h-[1432px] md:h-[1996px] sm:h-[Infinitypx] mt-[50px] md:px-5 relative w-full">
          <div className="absolute bg-gray-200 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[100px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col gap-[50px] items-center justify-start mt-[108px] w-auto md:w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-auto sm:w-full">
                <div className="flex flex-col items-center justify-start w-auto sm:w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900 w-auto"
                    size="txtPoppinsSemiBold40"
                  >
                    Introducing Our Products
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-6 items-start justify-center w-auto sm:w-full">
                  <Text
                    className="bg-gray-200 justify-center pb-[7px] px-3 text-base text-green-A700 text-shadow-ts1 w-auto"
                    size="txtPoppinsMedium16GreenA700"
                  >
                    All
                  </Text>
                  <Img
                    className="h-7 w-px"
                    src="images/img_devider.svg"
                    alt="devider_Two"
                  />
                  <Text
                    className="text-base text-gray-600 w-auto"
                    size="txtPoppinsMedium16Gray600"
                  >
                    Vegetable
                  </Text>
                  <Img
                    className="h-7 w-px"
                    src="images/img_devider.svg"
                    alt="devider_Three"
                  />
                  <Text
                    className="text-base text-gray-600 w-auto"
                    size="txtPoppinsMedium16Gray600"
                  >
                    Fruit
                  </Text>
                  <Img
                    className="h-7 w-px"
                    src="images/img_devider.svg"
                    alt="devider_Four"
                  />
                  <Text
                    className="text-base text-gray-600 w-auto"
                    size="txtPoppinsMedium16Gray600"
                  >
                    Meat & Fish
                  </Text>
                  <Img
                    className="h-7 w-px"
                    src="images/img_devider.svg"
                    alt="devider_Five"
                  />
                  <a
                    href="javascript:"
                    className="text-base text-gray-600 w-auto"
                  >
                    <Text size="txtPoppinsMedium16Gray600">View All</Text>
                  </a>
                </div>
              </div>
              <C04HomepageProducts className="flex flex-col items-center justify-start w-full" />
            </div>
          </div>
          <C04HomepageFeatured className="absolute bg-white-A700 border border-gray-300_01 border-solid sm:flex-col flex-row md:gap-10 grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] md:grid-cols-[repeat(1,_1fr_1px)_1fr] grid-cols-[repeat(3,_1fr_1px)_1fr] inset-x-[0] justify-between max-w-[1320px] mx-auto rounded-lg shadow-bs7 top-[0] w-full" />
        </div>
        <List
          className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1320px] mt-[100px] mx-auto md:px-5 w-full"
          orientation="horizontal"
        >
          <C04HomepageBannar
            className="h-[255px] relative w-full"
            price={
              <Text className="text-base text-justify text-white-A700 w-auto">
                <span className="text-white-A700_cc font-poppins text-sm font-normal">
                  Starting at
                </span>
                <span className="text-white-A700 font-poppins text-sm font-normal">
                  {" "}
                </span>
                <span className="text-white-A700 font-poppins text-xl font-medium">
                  $14.99
                </span>
              </Text>
            }
          />
          <C04HomepageBannar1 className="h-[255px] relative w-full" />
          <C04HomepageBannar2 className="h-[255px] relative w-full" />
        </List>
        <C04HomepageBestdeal className="bg-gray-200 flex md:flex-col flex-row gap-[39px] items-center justify-start mt-[100px] pt-8 sm:px-5 px-8 w-full" />
        <div className="flex flex-col items-center justify-start max-w-[1320px] mt-[93px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-11 items-center justify-start w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
              size="txtPoppinsSemiBold40Black900"
            >
              Featured Products
            </Text>
            <List
              className="sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center w-full"
              orientation="horizontal"
            >
              <C01HomepageProduct5n className="md:h-[317px] h-[327px] relative w-full" />
              <C01HomepageProduct5n1
                className="h-[327px] relative w-full"
                productimage="images/img_image_2.png"
                productname="Fresh Indian Malta"
              />
              <C01HomepageProduct5n2 className="md:h-[317px] h-[327px] relative w-full" />
              <C01HomepageProduct5n1
                className="h-[327px] relative w-full"
                productimage="images/img_image_6.png"
                productname="Green Lettuce"
                productprice="$9.00"
              />
              <C01HomepageProduct5n1
                className="h-[327px] relative w-full"
                productimage="images/img_image_8.png"
                productname="Eggplant"
                productprice="$34.00"
              />
            </List>
          </div>
        </div>
        <div className="h-[1314px] md:h-[1546px] sm:h-[1957px] mt-[99px] md:px-5 relative w-full">
          <div className="absolute bg-gray-200 flex flex-col gap-[33px] inset-x-[0] items-center justify-start mx-auto p-[97px] md:px-10 sm:px-5 top-[0] w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
              size="txtPoppinsSemiBold40Black900"
            >
              What our Clients Says
            </Text>
            <List
              className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start mb-[362px] w-auto md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-4 items-center justify-start w-auto sm:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[252px] items-center justify-start p-8 sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_quote.svg')" }}
                >
                  <div className="flex flex-col gap-6 items-center justify-start mb-3 w-full">
                    <Img className="h-8" src="images/img_user.svg" alt="user" />
                    <Text
                      className="leading-[150.00%] text-base text-center text-green-800_01 w-full"
                      size="txtPoppinsRegular16Green80001"
                    >
                      “Aenean et nisl eget eros consectetur vestibulum vel id
                      erat. Aliquam feugiat massa dui. Sed sagittis diam sit
                      amet ante sodales semper. Aliquam commodo lorem laoreet
                      ultricies ele. ”
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-3.5 items-center justify-start w-auto">
                  <Img
                    className="h-16 md:h-auto rounded-[50%] w-16"
                    src="images/img_image_64x64.png"
                    alt="image"
                  />
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-base text-black-900 text-center w-auto"
                      size="txtPoppinsMedium16Black900"
                    >
                      Jenny Wilson
                    </Text>
                    <Text
                      className="text-center text-gray-600_01 text-sm w-auto"
                      size="txtPoppinsRegular14Gray60001"
                    >
                      Customer
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center justify-start w-auto sm:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[252px] items-center justify-start p-8 sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_quote.svg')" }}
                >
                  <div className="flex flex-col gap-6 items-center justify-start mb-3 w-full">
                    <Img className="h-8" src="images/img_user.svg" alt="user" />
                    <Text
                      className="leading-[150.00%] text-base text-center text-green-800_01 w-full"
                      size="txtPoppinsRegular16Green80001"
                    >
                      “Proin sed neque nec tellus malesuada ultrices eget a
                      justo. Nullam a nibh faucibus, semper risus ac, ultricies
                      est. Maecenas eget purus in enim imperdiet dapibus in ac
                      mi. Fusce faucibus lacus felis”
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-3.5 items-center justify-start w-auto">
                  <Img
                    className="h-16 md:h-auto rounded-[50%] w-16"
                    src="images/img_image_37.png"
                    alt="image"
                  />
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-base text-black-900 text-center w-auto"
                      size="txtPoppinsMedium16Black900"
                    >
                      Guy Hawkins
                    </Text>
                    <Text
                      className="text-center text-gray-600_01 text-sm w-auto"
                      size="txtPoppinsRegular14Gray60001"
                    >
                      Customer
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center justify-start w-auto sm:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[252px] items-center justify-start p-8 sm:px-5 w-full"
                  style={{ backgroundImage: "url('images/img_quote.svg')" }}
                >
                  <div className="flex flex-col gap-6 items-center justify-start mb-3 w-full">
                    <Img className="h-8" src="images/img_user.svg" alt="user" />
                    <Text
                      className="leading-[150.00%] text-base text-center text-green-800_01 w-full"
                      size="txtPoppinsRegular16Green80001"
                    >
                      “Nam sed odio diam. Mauris sagittis sapien sed convallis
                      cursus. Proin mattis ultrices urna ac eleifend. Cras vel
                      nisi nec lectus sagittis venenatis. Curabitur laoreet leo
                      sed lorem pulvina”
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-3.5 items-center justify-start w-auto">
                  <Img
                    className="h-16 md:h-auto rounded-[50%] w-16"
                    src="images/img_image_38.png"
                    alt="image"
                  />
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-base text-black-900 text-center w-auto"
                      size="txtPoppinsMedium16Black900"
                    >
                      Kathryn Murphy
                    </Text>
                    <Text
                      className="text-center text-gray-600_01 text-sm w-auto"
                      size="txtPoppinsRegular14Gray60001"
                    >
                      Customer
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <C04HomepageVideo className="absolute bottom-[0] h-[642px] inset-x-[0] mx-auto w-[69%] md:w-full" />
        </div>
        <div className="h-[1482px] mt-[191px] md:px-5 relative w-full">
          <div className="flex flex-col items-center justify-start mb-[-256px] mx-auto w-[69%] z-[1]">
            <div className="flex flex-col gap-[43px] items-center justify-start w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                size="txtPoppinsSemiBold40Black900"
              >
                Latest News
              </Text>
              <List
                className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 hover:cursor-pointer flex sm:flex-1 flex-col items-start justify-start rounded-lg hover:shadow-bs16 w-auto hover:w-full sm:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:h-[276px] h-[300px] justify-end pt-6 sm:px-5 px-6 relative w-[424px] sm:w-full">
                      <Img
                        className="h-[276px] mt-auto mx-auto object-cover rounded w-[376px] md:w-full"
                        src="images/img_image_276x376.png"
                        alt="image"
                      />
                      <div className="absolute bg-white-A700 bottom-[0] flex flex-col h-[58px] items-center justify-start left-[8%] p-[5px] rounded w-[58px]">
                        <Text
                          className="text-center text-gray-900 text-xl"
                          size="txtPoppinsMedium20"
                        >
                          23
                        </Text>
                        <Text
                          className="text-center text-gray-600 text-xs tracking-[0.36px] uppercase"
                          size="txtPoppinsMedium12"
                        >
                          Jan
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start p-6 sm:px-5 w-auto sm:w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="leading-[150.00%] max-w-[376px] md:max-w-full text-black-900 text-lg"
                        size="txtPoppinsMedium18Black900"
                      >
                        Curabitur porttitor orci eget neque accumsan venenatis.
                      </Text>
                      <Text
                        className="leading-[150.00%] max-w-[376px] md:max-w-full text-gray-600_01 text-sm"
                        size="txtPoppinsRegular14Gray60001"
                      >
                        Nulla libero lorem, euismod venenatis nibh sed, sodales
                        dictum ex. Etiam nisi augue, malesuada et pulvinar at,
                        posuere eu neque.
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3 items-center justify-start w-auto">
                      <Text
                        className="text-base text-green-A700 w-auto"
                        size="txtPoppinsSemiBold16GreenA700"
                      >
                        Read More
                      </Text>
                      <Img
                        className="h-3 w-[15px]"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex sm:flex-1 flex-col items-start justify-start rounded-lg hover:shadow-bs16 shadow-bs16 w-auto hover:w-full sm:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:h-[276px] h-[300px] justify-end pt-6 sm:px-5 px-6 relative w-[424px] sm:w-full">
                      <Img
                        className="h-[276px] mt-auto mx-auto object-cover rounded w-[376px] md:w-full"
                        src="images/img_image_46.png"
                        alt="image"
                      />
                      <div className="absolute bg-white-A700_a2 bottom-[0] flex flex-col h-[58px] items-center justify-start left-[8%] p-[5px] rounded w-[58px]">
                        <Text
                          className="text-center text-gray-900 text-xl"
                          size="txtPoppinsMedium20"
                        >
                          23
                        </Text>
                        <Text
                          className="text-center text-gray-600 text-xs tracking-[0.36px] uppercase"
                          size="txtPoppinsMedium12"
                        >
                          Jan
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start p-6 sm:px-5 w-auto sm:w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="leading-[150.00%] max-w-[376px] md:max-w-full text-black-900 text-lg"
                        size="txtPoppinsMedium18Black900"
                      >
                        Curabitur porttitor orci eget neque accumsan venenatis.
                      </Text>
                      <Text
                        className="leading-[150.00%] max-w-[376px] md:max-w-full text-gray-600_01 text-sm"
                        size="txtPoppinsRegular14Gray60001"
                      >
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit.{" "}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3 items-center justify-start w-auto">
                      <Text
                        className="text-base text-green-A700 w-auto"
                        size="txtPoppinsSemiBold16GreenA700"
                      >
                        Read More
                      </Text>
                      <Img
                        className="h-3 w-[15px]"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex sm:flex-1 flex-col items-start justify-start rounded-lg hover:shadow-bs16 w-auto hover:w-full sm:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:h-[276px] h-[300px] justify-end pt-6 sm:px-5 px-6 relative w-[424px] sm:w-full">
                      <Img
                        className="h-[276px] mt-auto mx-auto object-cover rounded w-[376px] md:w-full"
                        src="images/img_image_47.png"
                        alt="image"
                      />
                      <div className="absolute bg-white-A700_a2 bottom-[0] flex flex-col h-[58px] items-center justify-start left-[8%] p-[5px] rounded w-[58px]">
                        <Text
                          className="text-center text-gray-900 text-xl"
                          size="txtPoppinsMedium20"
                        >
                          23
                        </Text>
                        <Text
                          className="text-center text-gray-600 text-xs tracking-[0.36px] uppercase"
                          size="txtPoppinsMedium12"
                        >
                          Jan
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start p-6 sm:px-5 w-auto sm:w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="leading-[150.00%] max-w-[376px] md:max-w-full text-black-900 text-lg"
                        size="txtPoppinsMedium18Black900"
                      >
                        Curabitur porttitor orci eget neque accumsan venenatis.
                      </Text>
                      <Text
                        className="leading-[150.00%] max-w-[376px] md:max-w-full text-gray-600_01 text-sm"
                        size="txtPoppinsRegular14Gray60001"
                      >
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit.
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3 items-center justify-start w-auto">
                      <Text
                        className="text-base text-green-A700 w-auto"
                        size="txtPoppinsSemiBold16GreenA700"
                      >
                        Read More
                      </Text>
                      <Img
                        className="h-3 w-[15px]"
                        src="images/img_arrowleft.svg"
                        alt="arrowleft"
                      />
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <footer className="flex items-center justify-center mt-auto mx-auto w-full">
            <div className="h-[1122px] md:h-[2091px] sm:h-[585px] relative w-full">
              <div className="absolute bg-black-900 flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-auto md:w-full">
                <div className="bg-gray-200 flex flex-col items-center justify-end py-[49px] w-full">
                  <div className="flex flex-col gap-[47px] items-center justify-start mt-[307px] w-full">
                    <Line className="bg-gray-400_99 h-px w-full" />
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[69%] md:w-full">
                      <div className="flex flex-row gap-[9.76px] items-center justify-start w-auto">
                        <Img
                          className="h-[39px] w-[39px]"
                          src="images/img_plant1.svg"
                          alt="plantOne_One"
                        />
                        <Text
                          className="sm:text-[35.04px] md:text-[37.04px] text-[39.04px] text-black-900 tracking-[-1.17px] w-auto"
                          size="txtPoppinsMedium3904Black900"
                        >
                          Ecobazar
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-3/4 md:w-full">
                        <div className="flex flex-col gap-1 items-start justify-start w-auto sm:w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                            size="txtPoppinsMedium24Black900"
                          >
                            Subcribe our Newsletter
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-sm w-auto"
                            size="txtPoppinsRegular14Bluegray400"
                          >
                            Pellentesque eu nibh eget mauris congue mattis
                            matti.
                          </Text>
                        </div>
                        <div className="h-[52px] relative w-[55%] md:w-full">
                          <Input
                            name="inputfield"
                            placeholder="Your email address"
                            className="!placeholder:text-gray-600_01 !text-gray-600_01 p-0 text-base text-left w-full"
                            wrapClassName="absolute border border-gray-300_03 border-solid inset-y-[0] left-[0] my-auto rounded-[26px] w-[92%]"
                            type="email"
                            color="white_A700"
                            size="xs"
                            variant="fill"
                          ></Input>
                          <Button
                            className="absolute cursor-pointer font-semibold h-full inset-y-[0] min-w-[162px] my-auto right-[0] rounded-[26px] text-base text-center"
                            color="green_A700"
                            size="md"
                            variant="fill"
                          >
                            Subscribe
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[39px] inset-x-[0] items-start justify-between mx-auto w-full">
                <div className="md:h-[1467px] h-[530px] md:mt-0 mt-[41px] relative w-[85%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 h-full items-start justify-between m-auto w-full">
                    <div className="h-[530px] relative w-2/5 md:w-full">
                      <div className="absolute flex flex-col gap-4 items-start justify-start right-[0] top-[7%] w-auto">
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtPoppinsMedium20WhiteA700"
                        >
                          About Shopery
                        </Text>
                        <Text
                          className="leading-[150.00%] max-w-[336px] md:max-w-full text-gray-600_01 text-sm"
                          size="txtPoppinsRegular14Gray60001"
                        >
                          Morbi cursus porttitor enim lobortis molestie. Duis
                          gravida turpis dui, eget bibendum magna congue nec.
                        </Text>
                        <div className="flex flex-row gap-4 items-center justify-start w-auto">
                          <div className="bg-black-900 flex flex-col items-center justify-center py-1.5 shadow-bs14 w-auto">
                            <Text
                              className="text-sm text-white-A700 w-auto"
                              size="txtPoppinsMedium14WhiteA700"
                            >
                              (219) 555-0114
                            </Text>
                          </div>
                          <Text
                            className="text-base text-gray-600_01 w-auto"
                            size="txtPoppinsRegular16Gray60001"
                          >
                            or
                          </Text>
                          <Text
                            className="bg-black-900 justify-center pb-1 pt-[7px] text-shadow-ts text-sm text-white-A700 w-auto"
                            size="txtPoppinsMedium14WhiteA700"
                          >
                            Proxy@gmail.com
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="absolute h-[530px] inset-y-[0] left-[0] my-auto object-cover"
                        src="images/img_left.png"
                        alt="left"
                      />
                    </div>
                    <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-start justify-between md:mt-0 mt-[39px] w-[57%] md:w-full">
                      <div className="flex flex-col gap-5 items-start justify-start w-auto">
                        <Text
                          className="text-white-A700 text-xl w-auto"
                          size="txtPoppinsMedium20WhiteA700"
                        >
                          My Account
                        </Text>
                        <ul className="flex flex-col gap-3 items-start justify-start w-auto md:w-full common-column-list">
                          <li>
                            <a
                              href="javascript:"
                              className="text-blue_gray-400 text-sm"
                            >
                              <Text size="txtPoppinsRegular14Bluegray400">
                                My Account
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-blue_gray-400 text-sm"
                            >
                              <Text size="txtPoppinsRegular14Bluegray400">
                                Order History
                              </Text>
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
                            <a
                              href="javascript:"
                              className="text-blue_gray-400 text-sm"
                            >
                              <Text size="txtPoppinsRegular14Bluegray400">
                                Wishlist
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-blue_gray-400 text-sm"
                            >
                              <Text size="txtPoppinsRegular14Bluegray400">
                                Settings
                              </Text>
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
                            <a
                              href="javascript:"
                              className="text-blue_gray-400 text-sm"
                            >
                              <Text size="txtPoppinsRegular14Bluegray400">
                                Contact
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-blue_gray-400 text-sm"
                            >
                              <Text size="txtPoppinsRegular14Bluegray400">
                                Faqs
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-blue_gray-400 text-sm"
                            >
                              <Text size="txtPoppinsRegular14Bluegray400">
                                Terms & Condition
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-blue_gray-400 text-sm"
                            >
                              <Text size="txtPoppinsRegular14Bluegray400">
                                Privacy Policy
                              </Text>
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
                            <a
                              href="javascript:"
                              className="text-base text-blue_gray-400"
                            >
                              <Text size="txtPoppinsRegular16Bluegray400">
                                About
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-base text-blue_gray-400"
                            >
                              <Text size="txtPoppinsRegular16Bluegray400">
                                Shop
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-base text-blue_gray-400"
                            >
                              <Text size="txtPoppinsRegular16Bluegray400">
                                Product
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-blue_gray-400 text-sm"
                            >
                              <Text size="txtPoppinsRegular14Bluegray400">
                                Products Details
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-blue_gray-400 text-sm"
                            >
                              <Text size="txtPoppinsRegular14Bluegray400">
                                Track Order
                              </Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col items-center justify-start md:mt-0 mt-0.5 w-[35%] md:w-full">
                        <ul className="flex flex-col items-start justify-start w-full common-column-list">
                          <li>
                            <a
                              href="javascript:"
                              className="text-white-A700 text-xl"
                            >
                              <Text size="txtPoppinsMedium20WhiteA700">
                                Instagram
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:">
                              <div className="flex flex-row gap-3 items-center justify-between mt-[17px]">
                                <Img
                                  className="h-[69px] md:h-auto object-cover rounded w-[69px]"
                                  src="images/img_image_69x69.png"
                                  alt="image_Four"
                                />
                                <Img
                                  className="h-[69px] md:h-auto object-cover rounded w-[69px]"
                                  src="images/img_image_39.png"
                                  alt="image_Five"
                                />
                                <Img
                                  className="h-[69px] md:h-auto object-cover rounded w-[69px]"
                                  src="images/img_image_40.png"
                                  alt="image_Six"
                                />
                                <Img
                                  className="h-[69px] md:h-auto object-cover rounded w-[69px]"
                                  src="images/img_image_41.png"
                                  alt="image_Seven"
                                />
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:">
                              <div className="flex flex-row gap-3 items-center justify-between mt-2.5">
                                <Img
                                  className="h-[69px] md:h-auto object-cover rounded w-[69px]"
                                  src="images/img_image_42.png"
                                  alt="image_Eight"
                                />
                                <Img
                                  className="h-[69px] md:h-auto object-cover rounded w-[69px]"
                                  src="images/img_image_43.png"
                                  alt="image_Nine"
                                />
                                <Img
                                  className="h-[69px] md:h-auto object-cover rounded w-[69px]"
                                  src="images/img_image_44.png"
                                  alt="image_Ten"
                                />
                                <Img
                                  className="h-[69px] md:h-auto object-cover w-[69px]"
                                  src="images/img_image_45.png"
                                  alt="image_Eleven"
                                />
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-black-900 bottom-[17%] flex md:flex-col flex-row md:gap-5 items-center justify-start py-6 right-[0] shadow-bs15 w-[82%]">
                    <div className="flex flex-row gap-2 items-start justify-start w-auto">
                      <Button
                        className="flex h-10 items-center justify-center rounded-[50%] w-10"
                        shape="round"
                        color="green_A700"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-[18px]"
                          src="images/img_facebook1.svg"
                          alt="facebookOne"
                        />
                      </Button>
                      <Button
                        className="flex h-10 items-center justify-center rounded-[50%] w-10"
                        shape="circle"
                        size="md"
                      >
                        <Img
                          className="h-[18px]"
                          src="images/img_twitter1_gray_500_01.svg"
                          alt="twitterOne"
                        />
                      </Button>
                      <Img
                        className="h-10 rounded-[50%] w-10"
                        src="images/img_settings_gray_500_01.svg"
                        alt="settings_One"
                      />
                      <Img
                        className="h-10 rounded-[50%] w-10"
                        src="images/img_info_gray_500_01.svg"
                        alt="info"
                      />
                    </div>
                    <Text
                      className="md:ml-[0] ml-[319px] text-gray-600_01 text-sm"
                      size="txtPoppinsRegular14Gray60001"
                    >
                      Shopery eCommerce © 2021. All Rights Reserved
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-start md:ml-[0] ml-[205px] w-auto">
                      <div className="bg-black-900 border border-gray-900_01 border-solid flex flex-col items-center justify-start p-1.5 rounded-[5px] w-[17%]">
                        <Img
                          className="h-[13px] my-0.5"
                          src="images/img_settings.svg"
                          alt="settings_Two"
                        />
                      </div>
                      <div className="bg-black-900 border border-gray-900_01 border-solid flex flex-col items-center justify-start p-1.5 rounded-[5px] w-[17%]">
                        <Img
                          className="h-2.5 my-1"
                          src="images/img_settings_white_a700.svg"
                          alt="settings_Three"
                        />
                      </div>
                      <div className="bg-black-900 border border-gray-900_01 border-solid flex flex-col items-end justify-end rounded-[5px] w-[17%]">
                        <Img
                          className="h-[18px] mt-2.5"
                          src="images/img_settings_white_a700_18x39.svg"
                          alt="settings_Four"
                        />
                      </div>
                      <div className="bg-black-900 border border-gray-900_01 border-solid flex flex-col items-center justify-start p-1.5 rounded-[5px] w-[17%]">
                        <Img
                          className="h-[17px]"
                          src="images/img_user_red_a700.svg"
                          alt="user"
                        />
                      </div>
                      <div className="h-8 relative w-[24%]">
                        <div className="absolute bg-black-900 border border-gray-900_01 border-solid flex flex-row h-full inset-[0] items-start justify-center m-auto pb-[5px] px-[5px] rounded-[5px] w-full">
                          <Img
                            className="h-[11px] mt-1 w-[11px]"
                            src="images/img_lock1_black_900.svg"
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
                <Img
                  className="h-[585px] md:h-auto object-cover"
                  src="images/img_group17.png"
                  alt="groupSeventeen"
                />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Homepage2Page;
