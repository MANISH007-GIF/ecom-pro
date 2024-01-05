import React from "react";

import {
  Button,
  FloatingInput,
  Img,
  Input,
  List,
  PagerIndicator,
  SelectBox,
  Text,
} from "components";
import C01HomepageBlogcard from "components/C01HomepageBlogcard";
import C01HomepageBlogcard1 from "components/C01HomepageBlogcard1";
import C01HomepageColumnuser from "components/C01HomepageColumnuser";
import C02HomepageBoxLayoutBannar2 from "components/C02HomepageBoxLayoutBannar2";
import C02HomepageBoxLayoutProduct from "components/C02HomepageBoxLayoutProduct";
import C02HomepageBoxLayoutProduct1 from "components/C02HomepageBoxLayoutProduct1";
import C02HomepageBoxLayoutProductsx from "components/C02HomepageBoxLayoutProductsx";
import C02HomepageBoxLayoutProductsx1 from "components/C02HomepageBoxLayoutProductsx1";
import C03HomepageCategories from "components/C03HomepageCategories";
import C05HomepageBannar from "components/C05HomepageBannar";
import C05HomepageBannar1 from "components/C05HomepageBannar1";
import C05HomepageColumnlock from "components/C05HomepageColumnlock";
import C05HomepageContactus from "components/C05HomepageContactus";
import C05HomepageFooter from "components/C05HomepageFooter";
import C05HomepageNavigation from "components/C05HomepageNavigation";
import C05HomepageOurlocation from "components/C05HomepageOurlocation";
import C05HomepageProductx from "components/C05HomepageProductx";
import C05HomepageProductx1 from "components/C05HomepageProductx1";
import C05HomepageProductx2 from "components/C05HomepageProductx2";

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

const Homepage3Page = () => {
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
  const c01HomepageColumnuserPropList = [
    {},
    { reviewername: "Dianne Russell" },
    { reviewername: "Eleanor Pena" },
  ];

  return (
    <>
      <div className="bg-white-A700 font-poppins h-[6674px] mx-auto relative w-full">
        <div className="flex flex-col items-center justify-start mb-[-40.12px] mx-auto w-full z-[1]">
          <C05HomepageNavigation className="flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="sm:h-[640px] h-[680px] md:h-[912px] md:px-5 relative w-full">
            <div className="md:h-[640px] h-[680px] m-auto w-full">
              <div className="absolute bg-gray-200 h-[640px] inset-x-[0] mx-auto top-[0] w-full"></div>
              <Img
                className="absolute bottom-[0] h-28 object-cover right-[9%] w-[5%]"
                src="images/img_top.png"
                alt="top"
              />
            </div>
            <div className="absolute h-[640px] md:h-[912px] inset-x-[0] mx-auto top-[0] w-full">
              <div className="h-[640px] m-auto w-full">
                <Img
                  className="h-[640px] m-auto object-cover w-full"
                  src="images/img_bg_640x1920.png"
                  alt="bg_Three"
                />
                <PagerIndicator
                  className="absolute bottom-[4%] flex gap-2 h-3 inset-x-[0] items-center justify-center mx-auto w-[52px]"
                  count={3}
                  activeCss="inline-block cursor-pointer rounded-[50%] h-3 bg-green-A700 w-3 relative"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer rounded-[50%] h-3 bg-gray-400_01 w-3 relative"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <div className="absolute flex flex-row flex-wrap md:gap-10 h-max inset-[0] items-center justify-between m-auto max-w-[1920px] md:px-10 sm:px-5 px-[190px] w-full">
                  <Button
                    className="border border-gray-300_01 border-solid flex h-[45px] items-center justify-center rotate-[180deg] w-[45px]"
                    shape="round"
                    color="white_A700"
                    size="lg"
                    variant="fill"
                  >
                    <Img
                      src="images/img_arrowdown_gray_900.svg"
                      alt="arrowdown_Four"
                    />
                  </Button>
                  <Button
                    className="border border-gray-300_01 border-solid flex h-[45px] items-center justify-center w-[45px]"
                    shape="round"
                    color="white_A700"
                    size="lg"
                    variant="fill"
                  >
                    <Img
                      src="images/img_arrowleft_gray_900.svg"
                      alt="arrowleft_Nine"
                    />
                  </Button>
                </div>
              </div>
              <div className="absolute flex md:flex-col flex-row gap-[38px] h-max inset-[0] items-start justify-center m-auto w-[72%]">
                <Img
                  className="h-[498px] sm:h-auto object-cover w-[54%] md:w-full"
                  src="images/img_image_498x742.png"
                  alt="image_Thirty"
                />
                <div className="flex flex-col items-start justify-start md:mt-0 mt-[81px] w-[44%] md:w-full">
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
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[5px] mt-[25px]">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01"
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
                      className="mt-1 text-gray-600 text-sm"
                      size="txtPoppinsRegular14Gray600"
                    >
                      Free shipping on all your order. we deliver, you enjoy
                    </Text>
                  </div>
                  <div className="bg-green-A700 flex flex-row gap-4 items-center justify-start md:ml-[0] ml-[5px] mt-[30px] p-[11px] rounded-[25px] w-[33%] md:w-full">
                    <Text
                      className="ml-7 mt-[3px] text-base text-white-A700"
                      size="txtPoppinsSemiBold16WhiteA700"
                    >
                      Shop now
                    </Text>
                    <Img
                      className="h-3"
                      src="images/img_arrowleft_white_a700.svg"
                      alt="arrowleft_Ten"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-start mb-[undefinedpx] mt-auto mx-auto w-full z-[1]">
          <div className="md:h-[1032px] sm:h-[960px] h-[984px] md:px-5 relative w-full">
            <List
              className="absolute bg-white-A700 bottom-[0] sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 inset-x-[0] justify-start mx-auto shadow-bs10 w-auto"
              orientation="horizontal"
            >
              <div className="hover:cursor-pointer flex flex-col gap-4 items-center justify-start hover:mx-0 py-10 hover:shadow-bs17 w-auto hover:w-full">
                <Img
                  className="md:h-auto rounded-[50%] w-[72px]"
                  src="images/img_icon_72x72.png"
                  alt="icon"
                />
                <div className="flex flex-col gap-2 items-start justify-center w-auto">
                  <Text
                    className="text-center text-gray-900_01 text-lg w-auto"
                    size="txtPoppinsSemiBold18"
                  >
                    Free Shipping
                  </Text>
                  <Text
                    className="text-center text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    Free shipping with discount
                  </Text>
                </div>
              </div>
              <div className="hover:cursor-pointer flex flex-col gap-4 items-center justify-start hover:mx-0 py-10 hover:shadow-bs17 w-auto hover:w-full">
                <Img
                  className="md:h-auto rounded-[50%] w-[72px]"
                  src="images/img_icon_72x72.png"
                  alt="icon"
                />
                <div className="flex flex-col gap-2 items-start justify-center w-auto">
                  <Text
                    className="text-center text-gray-900_01 text-lg w-auto"
                    size="txtPoppinsSemiBold18"
                  >
                    Great Support 24/7
                  </Text>
                  <Text
                    className="text-center text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    Instant access to Contact
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 hover:cursor-pointer flex flex-col gap-4 items-center justify-start hover:mx-0 py-10 hover:shadow-bs17 shadow-bs17 w-auto hover:w-full">
                <Img
                  className="md:h-auto rounded-[50%] w-[72px]"
                  src="images/img_icon_1.png"
                  alt="icon"
                />
                <div className="flex flex-col gap-2 items-start justify-center w-auto">
                  <Text
                    className="text-center text-gray-900_01 text-lg w-auto"
                    size="txtPoppinsSemiBold18"
                  >
                    100% Sucure Payment
                  </Text>
                  <Text
                    className="text-center text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    We ensure your money is save
                  </Text>
                </div>
              </div>
              <div className="hover:cursor-pointer flex flex-col gap-4 items-center justify-start hover:mx-0 py-10 hover:shadow-bs17 w-auto hover:w-full">
                <Img
                  className="md:h-auto rounded-[50%] w-[72px]"
                  src="images/img_icon_72x72.png"
                  alt="icon"
                />
                <div className="flex flex-col gap-2 items-start justify-center w-auto">
                  <Text
                    className="text-center text-gray-900_01 text-lg w-auto"
                    size="txtPoppinsSemiBold18"
                  >
                    Money-Back Guarantee
                  </Text>
                  <Text
                    className="text-center text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    30 days money-back
                  </Text>
                </div>
              </div>
            </List>
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-gray-200 flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] py-3 w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Img
                      className="h-[18px] w-[15px]"
                      src="images/img_linkedin_green_900.svg"
                      alt="linkedin_One"
                    />
                    <Text
                      className="text-green-900_01 text-xs w-auto"
                      size="txtPoppinsRegular12Green90001"
                    >
                      Store Location: Lincoln- 344, Illinois, Chicago, USA
                    </Text>
                  </div>
                  <div className="flex sm:flex-1 flex-row gap-5 items-center justify-start w-auto sm:w-full">
                    <SelectBox
                      className="text-center text-green-900_01 text-xs w-[39%] sm:w-full"
                      placeholderClassName="text-green-900_01"
                      indicator={
                        <Img
                          className="h-[3px] outline-green-900_01 outline-[0.5px] outline w-[7px]"
                          src="images/img_arrowdown_green_900.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="frameTwo"
                      options={engOptionsList}
                      isSearchable={false}
                      placeholder="Eng"
                      size="xs"
                    />
                    <SelectBox
                      className="text-center text-green-900_01 text-xs w-[41%] sm:w-full"
                      placeholderClassName="text-green-900_01"
                      indicator={
                        <Img
                          className="h-[3px] outline-green-900_01 outline-[0.5px] outline w-[7px]"
                          src="images/img_arrowdown_green_900.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="frameThree"
                      options={usdOptionsList}
                      isSearchable={false}
                      placeholder="USD"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-row items-center justify-start p-3.5 shadow-bs5 w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center ml-[285px] w-[70%]">
                    <div className="flex sm:flex-col flex-row gap-[27px] items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-row gap-1 items-center justify-start w-auto">
                        <Text
                          className="text-gray-900_01 text-sm w-auto"
                          size="txtPoppinsMedium14Gray90001"
                        >
                          Home
                        </Text>
                        <Img
                          className="h-4 w-4"
                          src="images/img_checkmark_gray_900.svg"
                          alt="checkmark_Four"
                        />
                      </div>
                      <div className="flex flex-row gap-1 items-center justify-start w-auto">
                        <Text
                          className="text-gray-600 text-sm w-auto"
                          size="txtPoppinsMedium14Gray600"
                        >
                          Shop
                        </Text>
                        <Img
                          className="h-4 w-4"
                          src="images/img_checkmark.svg"
                          alt="checkmark_Five"
                        />
                      </div>
                      <div className="flex flex-row gap-1 items-center justify-start w-auto">
                        <Text
                          className="text-gray-600 text-sm w-auto"
                          size="txtPoppinsMedium14Gray600"
                        >
                          Pages
                        </Text>
                        <Img
                          className="h-4 w-4"
                          src="images/img_checkmark.svg"
                          alt="checkmark_Six"
                        />
                      </div>
                      <div className="flex flex-row gap-1 items-center justify-start w-auto">
                        <Text
                          className="text-gray-600 text-sm w-auto"
                          size="txtPoppinsMedium14Gray600"
                        >
                          Blog
                        </Text>
                        <Img
                          className="h-4 w-4"
                          src="images/img_checkmark.svg"
                          alt="checkmark_Seven"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text
                          className="text-gray-600 text-sm w-auto"
                          size="txtPoppinsMedium14Gray600"
                        >
                          About Us
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start md:ml-[0] ml-[171px] w-auto">
                      <Img
                        className="h-8 w-8"
                        src="images/img_plant1.svg"
                        alt="plantOne_Two"
                      />
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[-0.96px] w-auto"
                        size="txtPoppinsMedium32Black900"
                      >
                        Ecobazar
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-10 items-center justify-start md:ml-[0] ml-[186px] w-auto sm:w-full">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-[34px] w-[34px]"
                          src="images/img_call_gray_900.svg"
                          alt="call_One"
                        />
                        <Text
                          className="text-gray-900_01 text-sm w-auto"
                          size="txtPoppinsMedium14Gray90001"
                        >
                          (219) 555-0114
                        </Text>
                      </div>
                      <div className="flex flex-row gap-5 items-center justify-start w-auto">
                        <Img
                          className="h-8 w-8"
                          src="images/img_search.svg"
                          alt="search_One"
                        />
                        <Img
                          className="h-8 w-8"
                          src="images/img_favorite.svg"
                          alt="favorite_Three"
                        />
                        <div className="h-9 md:h-[34px] relative w-9">
                          <Img
                            className="absolute bottom-[0] h-[34px] left-[0] w-[34px]"
                            src="images/img_bag.svg"
                            alt="bag_Three"
                          />
                          <Text
                            className="absolute bg-green-800 flex h-[18px] items-center justify-center outline outline-[1px] outline-white-A700 right-[0] rounded-[50%] text-[10px] text-center text-white-A700 top-[0] w-[18px]"
                            size="txtPoppinsMedium10"
                          >
                            2
                          </Text>
                        </div>
                        <Img
                          className="h-8 w-8"
                          src="images/img_user31_gray_900.svg"
                          alt="userThirtyOne_One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:h-[640px] h-[680px] md:h-[912px] relative w-full">
                <div className="md:h-[640px] h-[680px] m-auto w-full">
                  <div className="absolute bg-gray-200 h-[640px] inset-x-[0] mx-auto top-[0] w-full"></div>
                  <Img
                    className="absolute bottom-[0] h-28 object-cover right-[9%] w-[5%]"
                    src="images/img_top.png"
                    alt="top_One"
                  />
                </div>
                <div className="absolute h-[640px] md:h-[912px] inset-x-[0] mx-auto top-[0] w-full">
                  <div className="h-[640px] m-auto w-full">
                    <Img
                      className="h-[640px] m-auto object-cover w-full"
                      src="images/img_bg_640x1920.png"
                      alt="bg_Five"
                    />
                    <PagerIndicator
                      className="absolute bottom-[4%] flex gap-2 h-3 inset-x-[0] items-center justify-center mx-auto w-[52px]"
                      count={3}
                      activeCss="inline-block cursor-pointer rounded-[50%] h-3 bg-green-A700 w-3 relative"
                      activeIndex={1}
                      inactiveCss="inline-block cursor-pointer rounded-[50%] h-3 bg-gray-400_01 w-3 relative"
                      selectedWrapperCss="inline-block"
                      unselectedWrapperCss="inline-block"
                    />
                    <div className="absolute flex flex-row flex-wrap md:gap-10 h-max inset-[0] items-center justify-between m-auto max-w-[1920px] md:px-10 sm:px-5 px-[190px] w-full">
                      <Button
                        className="border border-gray-300_01 border-solid flex h-[45px] items-center justify-center rotate-[180deg] w-[45px]"
                        shape="round"
                        color="white_A700"
                        size="lg"
                        variant="fill"
                      >
                        <Img
                          src="images/img_arrowdown_gray_900.svg"
                          alt="arrowdown_Five"
                        />
                      </Button>
                      <Button
                        className="border border-gray-300_01 border-solid flex h-[45px] items-center justify-center w-[45px]"
                        shape="round"
                        color="white_A700"
                        size="lg"
                        variant="fill"
                      >
                        <Img
                          src="images/img_arrowleft_gray_900.svg"
                          alt="arrowleft_Eleven"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="absolute flex md:flex-col flex-row gap-[38px] h-max inset-[0] items-start justify-center m-auto w-[72%]">
                    <Img
                      className="h-[498px] sm:h-auto object-cover w-[54%] md:w-full"
                      src="images/img_image_498x742.png"
                      alt="image_ThirtyOne"
                    />
                    <div className="flex flex-col items-start justify-start md:mt-0 mt-[81px] w-[44%] md:w-full">
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
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[5px] mt-[25px]">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01"
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
                          className="mt-1 text-gray-600 text-sm"
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
                </div>
              </div>
            </div>
          </div>
          <div className="h-[1040px] mt-[73px] md:px-5 relative w-full">
            <div className="flex flex-col items-center justify-start mb-[-44px] w-[85%] z-[1]">
              <div className="flex flex-col items-end justify-start w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1320px] w-full">
                  <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 w-auto"
                      size="txtPoppinsSemiBold40"
                    >
                      Featured Products
                    </Text>
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
                      alt="arrowleft_Fourteen"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[34px] w-full">
                  <div className="md:h-[226px] h-[434px] md:mt-0 mt-[22px] relative w-[9%] md:w-full">
                    <div className="absolute bottom-[18%] md:h-[110px] h-[116px] left-[0] w-1/4">
                      <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[89%]">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[5px] w-[59%] md:w-full">
                            <Img
                              className="h-[17px] ml-0.5 md:ml-[0]"
                              src="images/img_contrast_gray_100.svg"
                              alt="contrast_Ten"
                            />
                            <Img
                              className="h-[9px] ml-0.5 md:ml-[0] mt-1.5"
                              src="images/img_contrast_gray_100.svg"
                              alt="contrast_Eleven"
                            />
                            <Img
                              className="h-2.5 mt-3"
                              src="images/img_contrast_gray_100.svg"
                              alt="contrast_Twelve"
                            />
                          </div>
                          <Img
                            className="h-3.5 mt-[3px] w-[15px]"
                            src="images/img_contrast_gray_100_14x15.svg"
                            alt="contrast_Thirteen"
                          />
                          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[7px] mt-[13px] w-[78%] md:w-full">
                            <Img
                              className="h-[9px]"
                              src="images/img_contrast_gray_100_14x15.svg"
                              alt="contrast_Fourteen"
                            />
                            <div className="flex flex-row items-start justify-evenly mt-0.5 w-full">
                              <Img
                                className="h-[11px] mt-[3px]"
                                src="images/img_user_gray_100.svg"
                                alt="user_Eight"
                              />
                              <Img
                                className="h-[9px]"
                                src="images/img_vector_gray_100.svg"
                                alt="vector_Eleven"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Img
                        className="absolute h-[13px] right-[0] top-[14%] w-3"
                        src="images/img_contrast_gray_100_13x12.svg"
                        alt="contrast_Fifteen"
                      />
                    </div>
                    <Img
                      className="absolute bottom-[41%] h-[19px] left-[17%]"
                      src="images/img_contrast_gray_100_13x12.svg"
                      alt="contrast_Sixteen"
                    />
                    <Img
                      className="absolute bottom-[15%] h-3.5 left-[17%] w-[13px]"
                      src="images/img_user_gray_100_14x13.svg"
                      alt="user_Nine"
                    />
                    <div className="absolute bottom-[19%] flex flex-row gap-[5px] items-start justify-center left-[31%] w-[29%]">
                      <Img
                        className="h-[97px] mt-1"
                        src="images/img_close_gray_100.svg"
                        alt="close_Four"
                      />
                      <div className="flex flex-col items-start justify-start w-[52%]">
                        <Img
                          className="h-3.5"
                          src="images/img_contrast_gray_100_13x12.svg"
                          alt="contrast_Seventeen"
                        />
                        <Img
                          className="h-3 ml-0.5 md:ml-[0]"
                          src="images/img_contrast_gray_100.svg"
                          alt="contrast_Eighteen"
                        />
                      </div>
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat flex md:h-[226px] h-[434px] inset-[0] justify-end m-auto sm:pr-5 pr-[33px] py-[33px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group2577.svg')",
                      }}
                    >
                      <div className="h-[207px] md:h-[226px] mb-[19px] mt-auto w-[77%]">
                        <div className="absolute flex inset-y-[0] left-[0] my-auto w-[88%]">
                          <div className="flex h-[207px] justify-end my-auto w-[47%]">
                            <Img
                              className="h-[58px] mt-auto"
                              src="images/img_close_gray_100_58x20.svg"
                              alt="close_Five"
                            />
                            <Img
                              className="absolute h-[207px] inset-[0] justify-center m-auto"
                              src="images/img_vector_gray_100_207x45.svg"
                              alt="vector_Twelve"
                            />
                          </div>
                          <Img
                            className="h-[122px] mb-[23px] ml-[-6.93px] mt-auto z-[1]"
                            src="images/img_vector_gray_100_122x57.svg"
                            alt="vector_Thirteen"
                          />
                        </div>
                        <Img
                          className="absolute h-[166px] inset-y-[0] my-auto right-[0]"
                          src="images/img_vector_gray_100_166x52.svg"
                          alt="vector_Fourteen"
                        />
                      </div>
                      <Img
                        className="absolute bottom-[13%] h-[15px] inset-x-[0] mx-auto"
                        src="images/img_user_gray_100_14x13.svg"
                        alt="user_Ten"
                      />
                    </div>
                  </div>
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[82%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="md:h-[397px] h-[407px] relative w-full">
                      <div className="absolute bg-white-A700 border border-gray-300_01 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[95px] rounded-lg w-full">
                        <div className="md:h-[302px] h-[312px] p-[5px] relative w-[312px]">
                          <Img
                            className="h-[302px] m-auto object-cover w-[302px]"
                            src="images/img_image.png"
                            alt="image"
                          />
                          <div className="absolute bg-red-400 flex flex-row gap-1 items-center justify-center left-[5%] px-2 py-[3px] rounded top-[5%] w-auto">
                            <Text
                              className="text-sm text-white-A700 w-auto"
                              size="txtPoppinsRegular14WhiteA700"
                            >
                              Sale
                            </Text>
                            <Text
                              className="text-sm text-white-A700 w-auto"
                              size="txtPoppinsMedium14"
                            >
                              50%
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-[0] flex flex-col gap-1.5 inset-x-[0] items-start justify-center mx-auto p-4 w-auto">
                        <div className="md:h-[45px] h-[51px] relative w-full">
                          <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[0] w-auto">
                            <Text
                              className="text-gray-800 text-sm w-auto"
                              size="txtPoppinsRegular14Gray800"
                            >
                              Green Apple
                            </Text>
                            <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
                              <Text
                                className="text-base text-gray-900_01 w-auto"
                                size="txtPoppinsMedium16Gray90001"
                              >
                                $14.99
                              </Text>
                              <Text
                                className="line-through text-base text-gray-500 w-auto"
                                size="txtPoppinsRegular16Gray500"
                              >
                                $20.99
                              </Text>
                            </div>
                          </div>
                          <Button
                            className="absolute bottom-[0] flex h-10 items-center justify-center right-[1%] w-10"
                            shape="circle"
                            color="gray_100"
                            size="md"
                            variant="fill"
                          >
                            <Img
                              className="h-5"
                              src="images/img_bag.svg"
                              alt="bag"
                            />
                          </Button>
                        </div>
                        <Img
                          className="h-3 w-[60px]"
                          src="images/img_close.svg"
                          alt="close"
                        />
                      </div>
                    </div>
                    <div className="h-[407px] relative w-full">
                      <div className="absolute bg-white-A700 border border-gray-300_01 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[95px] rounded-lg w-full">
                        <div className="flex flex-col items-start justify-start p-[5px] w-[312px]">
                          <Img
                            className="h-[302px] md:h-auto object-cover w-[302px]"
                            src="images/img_image_5.png"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-[0] flex flex-col gap-1.5 inset-x-[0] items-start justify-center mx-auto p-4 w-auto">
                        <div className="md:h-11 h-[51px] relative w-full">
                          <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[0] w-auto">
                            <Text
                              className="text-gray-800 text-sm w-auto"
                              size="txtPoppinsRegular14Gray800"
                            >
                              Chanise Cabbage
                            </Text>
                            <div className="flex flex-col items-start justify-start w-auto">
                              <Text
                                className="text-base text-gray-900_01 w-auto"
                                size="txtPoppinsMedium16Gray90001"
                              >
                                $14.99
                              </Text>
                            </div>
                          </div>
                          <Button
                            className="absolute bottom-[0] flex h-10 items-center justify-center right-[1%] w-10"
                            shape="circle"
                            color="gray_100"
                            size="md"
                            variant="fill"
                          >
                            <Img
                              className="h-5"
                              src="images/img_bag.svg"
                              alt="bag"
                            />
                          </Button>
                        </div>
                        <Img
                          className="h-3 w-[60px]"
                          src="images/img_close.svg"
                          alt="close"
                        />
                      </div>
                    </div>
                    <div className="md:h-[397px] h-[407px] relative w-full">
                      <div className="absolute bg-white-A700 border border-green-800 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[95px] rounded-lg shadow-bs2 w-full">
                        <div className="md:h-[302px] h-[312px] p-[5px] relative w-[312px]">
                          <Img
                            className="h-[302px] m-auto object-cover w-[302px]"
                            src="images/img_image_7.png"
                            alt="image"
                          />
                          <div className="absolute flex flex-col gap-1.5 items-center justify-start right-[2%] top-[2%] w-[13%] md:w-full">
                            <Button
                              className="border border-gray-100 border-solid flex h-10 items-center justify-center w-10"
                              shape="circle"
                              color="white_A700"
                              size="md"
                              variant="fill"
                            >
                              <Img
                                className="h-5"
                                src="images/img_favorite.svg"
                                alt="favorite"
                              />
                            </Button>
                            <Button
                              className="border border-gray-100 border-solid flex h-10 items-center justify-center w-10"
                              shape="circle"
                              color="white_A700"
                              size="md"
                              variant="fill"
                            >
                              <Img
                                className="h-5"
                                src="images/img_eye1.svg"
                                alt="eyeOne"
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-[0] flex flex-col gap-1.5 inset-x-[0] items-start justify-center mx-auto p-4 w-auto">
                        <div className="md:h-11 h-[51px] relative w-full">
                          <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[0] w-auto">
                            <Text
                              className="text-green-800 text-sm w-auto"
                              size="txtPoppinsRegular14Green800"
                            >
                              Green Capsicum
                            </Text>
                            <div className="flex flex-col items-start justify-start w-auto">
                              <Text
                                className="text-base text-gray-900_01 w-auto"
                                size="txtPoppinsMedium16Gray90001"
                              >
                                $14.99
                              </Text>
                            </div>
                          </div>
                          <Button
                            className="absolute bottom-[0] flex h-10 items-center justify-center right-[1%] rounded-[50%] w-10"
                            shape="round"
                            color="green_A700"
                            size="md"
                            variant="fill"
                          >
                            <Img
                              className="h-5"
                              src="images/img_bag_white_a700.svg"
                              alt="bag"
                            />
                          </Button>
                        </div>
                        <Img
                          className="h-3 w-[60px]"
                          src="images/img_close.svg"
                          alt="close"
                        />
                      </div>
                    </div>
                    <div className="h-[407px] relative w-full">
                      <div className="absolute bg-white-A700 border border-gray-300_01 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[95px] rounded-lg w-full">
                        <div className="flex flex-col items-start justify-start p-[5px] w-[312px]">
                          <Img
                            className="h-[302px] md:h-auto object-cover w-[302px]"
                            src="images/img_image_302x302.png"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-[0] flex flex-col gap-1.5 inset-x-[0] items-start justify-center mx-auto p-4 w-auto">
                        <div className="md:h-11 h-[51px] relative w-full">
                          <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[0] w-auto">
                            <Text
                              className="text-gray-800 text-sm w-auto"
                              size="txtPoppinsRegular14Gray800"
                            >
                              Ladies Finger
                            </Text>
                            <div className="flex flex-col items-start justify-start w-auto">
                              <Text
                                className="text-base text-gray-900_01 w-auto"
                                size="txtPoppinsMedium16Gray90001"
                              >
                                $14.99
                              </Text>
                            </div>
                          </div>
                          <Button
                            className="absolute bottom-[0] flex h-10 items-center justify-center right-[1%] w-10"
                            shape="circle"
                            color="gray_100"
                            size="md"
                            variant="fill"
                          >
                            <Img
                              className="h-5"
                              src="images/img_bag.svg"
                              alt="bag"
                            />
                          </Button>
                        </div>
                        <Img
                          className="h-3 w-[60px]"
                          src="images/img_close.svg"
                          alt="close"
                        />
                      </div>
                    </div>
                  </List>
                </div>
                <Img
                  className="h-[70px] md:h-auto mt-1 object-cover w-[5%]"
                  src="images/img_growthcloseup_70x79.png"
                  alt="growthcloseup_Three"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
              <div className="flex md:h-[1136px] h-[459px] sm:h-[510px] justify-end relative w-full">
                <div className="bg-gradient3  flex flex-col h-full items-center justify-end mt-auto mx-auto p-[27px] sm:px-5 shadow-bs5 w-full">
                  <div className="flex flex-col items-center justify-start mt-[50px] w-4/5 md:w-full">
                    <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                      <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1320px] w-full">
                        <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                          <Text
                            className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 w-auto"
                            size="txtPoppinsSemiBold40"
                          >
                            Shop by Top Categories
                          </Text>
                        </div>
                        <div className="flex flex-row gap-3 items-center justify-center w-auto">
                          <a
                            href="javascript:"
                            className="text-base text-green-A700 w-auto"
                          >
                            <Text size="txtPoppinsMedium16GreenA700">
                              View All
                            </Text>
                          </a>
                          <Img
                            className="h-3 w-[15px]"
                            src="images/img_arrowleft.svg"
                            alt="arrowleft_Twelve"
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <Button
                          className="border border-gray-300_01 border-solid flex h-[45px] items-center justify-center mb-[163px] md:mt-0 mt-[84px] rotate-[180deg] w-[45px]"
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
                          className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5"
                          orientation="horizontal"
                        >
                          <div className="bg-white-A700 border hover:border-0 border-gray-200_01 border-solid hover:cursor-pointer flex flex-col gap-5 items-center justify-start pb-6 pt-8 rounded-md hover:shadow-bs2 shadow-bs2 w-auto hover:w-full">
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
                          <div className="bg-white-A700 border hover:border-0 border-gray-200_01 border-solid hover:cursor-pointer flex flex-col gap-5 items-center justify-start pb-6 pt-8 rounded-md hover:shadow-bs2 w-auto hover:w-full">
                            <Img
                              className="h-20 w-20"
                              src="images/img_salad_1.svg"
                              alt="fruitsOne"
                            />
                            <div className="flex flex-col gap-1.5 items-center justify-start w-auto">
                              <Text
                                className="text-center text-gray-900_01 text-lg w-auto"
                                size="txtPoppinsMedium18"
                              >
                                Fresh Fruit
                              </Text>
                              <Text
                                className="text-center text-gray-600 text-sm w-auto"
                                size="txtPoppinsRegular14Gray600"
                              >
                                137 Products
                              </Text>
                            </div>
                          </div>
                          <div className="bg-white-A700 border hover:border-0 border-gray-200_01 border-solid hover:cursor-pointer flex flex-col gap-5 items-center justify-start pb-6 pt-8 rounded-md hover:shadow-bs2 w-auto hover:w-full">
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
                                Fish
                              </Text>
                              <Text
                                className="text-center text-gray-600 text-sm w-auto"
                                size="txtPoppinsRegular14Gray600"
                              >
                                34 Products
                              </Text>
                            </div>
                          </div>
                          <div className="bg-white-A700 border hover:border-0 border-gray-200_01 border-solid hover:cursor-pointer flex flex-col gap-5 items-center justify-start pb-6 pt-8 rounded-md hover:shadow-bs2 w-auto hover:w-full">
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
                          <div className="bg-white-A700 border hover:border-0 border-gray-200_01 border-solid hover:cursor-pointer flex flex-col gap-5 items-center justify-start pb-6 pt-8 rounded-md hover:shadow-bs2 w-auto hover:w-full">
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
                        </List>
                        <div className="md:h-[210px] h-[291px] relative w-1/5 md:w-full">
                          <Img
                            className="absolute bottom-[0] h-[91px] object-cover right-[15%] w-[31%]"
                            src="images/img_1903.png"
                            alt="1903_One"
                          />
                          <div className="absolute bg-white-A700 border border-gray-200_01 border-solid flex flex-col gap-5 items-center justify-end left-[0] pb-6 pt-8 rounded-md top-[0] w-auto">
                            <Img
                              className="h-20 w-20"
                              src="images/img_salad_1.svg"
                              alt="snacksOne_One"
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
                          <Button
                            className="absolute border border-gray-300_01 border-solid flex h-[45px] items-center justify-center right-[0] top-[29%] w-[45px]"
                            shape="round"
                            color="white_A700"
                            size="lg"
                            variant="fill"
                          >
                            <Img
                              src="images/img_arrowleft_gray_900.svg"
                              alt="arrowleft_Thirteen"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute bottom-[9%] h-[139px] object-cover right-[0]"
                  src="images/img_group7_gray_300_01.png"
                  alt="groupSeven_Three"
                />
              </div>
            </div>
          </div>
          <div className="h-[2371px] md:px-5 relative w-full">
            <div className="sm:h-[452px] h-[617px] md:h-[844px] mb-[-106.62px] mx-auto py-6 w-[99%] md:w-full z-[1]">
              <div className="flex flex-col gap-[26px] h-full items-start justify-start ml-auto mr-[261px] my-auto w-auto">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="leading-[120.00%] sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01"
                    size="txtPoppinsSemiBold40"
                  >
                    <>
                      100% Trusted
                      <br />
                      Organic Food Store
                    </>
                  </Text>
                </div>
                <List
                  className="flex flex-col gap-[26px] items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex sm:flex-1 flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
                    <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-auto sm:w-full">
                      <Button
                        className="flex h-6 items-center justify-center rounded-[50%] w-6"
                        shape="circle"
                        color="green_A700"
                        size="xs"
                        variant="fill"
                      >
                        <Img
                          className="h-4"
                          src="images/img_check1.svg"
                          alt="checkOne"
                        />
                      </Button>
                      <Text
                        className="text-gray-900_01 text-lg w-auto"
                        size="txtPoppinsMedium18"
                      >
                        Healthy & natural food for lovers of healthy food.
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start sm:pl-5 pl-[34px] w-auto sm:w-full">
                      <Text
                        className="leading-[150.00%] max-w-[500px] md:max-w-full text-gray-600 text-sm"
                        size="txtPoppinsRegular14Gray600"
                      >
                        Ut quis tempus erat. Phasellus euismod bibendum magna
                        non tristique. Pellentesque semper vestibulum elit sed
                        condimentum. Nunc pretium fermentum interdum.{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
                    <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-auto sm:w-full">
                      <Button
                        className="flex h-6 items-center justify-center rounded-[50%] w-6"
                        shape="circle"
                        color="green_A700"
                        size="xs"
                        variant="fill"
                      >
                        <Img
                          className="h-4"
                          src="images/img_check1.svg"
                          alt="checkOne"
                        />
                      </Button>
                      <Text
                        className="text-gray-900_01 text-lg w-auto"
                        size="txtPoppinsMedium18"
                      >
                        Every day fresh and quality products for you.
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start sm:pl-5 pl-8 w-auto sm:w-full">
                      <Text
                        className="leading-[150.00%] max-w-[504px] md:max-w-full text-gray-600 text-sm"
                        size="txtPoppinsRegular14Gray600"
                      >
                        Maecenas vehicula a justo quis laoreet. Sed in placerat
                        nibh, a posuere ex. Morbi sem neque, aliquam sed orci
                        et, rhoncus lobortis felis. Sed vestibulum nisl sit amet
                        sapien.
                      </Text>
                    </div>
                  </div>
                </List>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[192px] rounded-[25px]"
                  rightIcon={
                    <Img
                      className="ml-4"
                      src="images/img_arrowleft_white_a700.svg"
                      alt="arrow_left"
                    />
                  }
                  color="green_A700"
                  size="lg"
                  variant="fill"
                >
                  <div className="font-semibold text-base text-left">
                    Shop Now
                  </div>
                </Button>
              </div>
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-start justify-center m-auto pb-[45px] md:px-10 sm:px-5 px-[45px] w-full"
                style={{ backgroundImage: "url('images/img_group2576.png')" }}
              >
                <div className="flex md:flex-col flex-row gap-6 items-start justify-start md:ml-[0] ml-[190px] w-[46%] md:w-full">
                  <div className="md:h-[424px] h-[488px] mb-6 relative w-[43%] md:w-full">
                    <div className="absolute md:h-[400px] h-[456px] right-[0] top-[0] w-[81%]">
                      <Img
                        className="absolute h-[100px] object-cover right-[1%] top-[0] w-[33%]"
                        src="images/img_image_100x91.png"
                        alt="image_FortyFive"
                      />
                      <Img
                        className="absolute bottom-[0] h-[400px] inset-x-[0] mx-auto object-cover rounded-lg w-full"
                        src="images/img_image_400x276.png"
                        alt="image_FortySix"
                      />
                    </div>
                    <Img
                      className="absolute bottom-[0] h-[104px] left-[0] object-cover w-[104px]"
                      src="images/img_image_104x104.png"
                      alt="image_FortySeven"
                    />
                  </div>
                  <Img
                    className="h-[457px] sm:h-auto md:mt-0 mt-14 object-cover rounded-lg w-[55%] md:w-full"
                    src="images/img_image_457x444.png"
                    alt="image_FortyEight"
                  />
                </div>
              </div>
            </div>
            <div className="h-[1860px] mt-auto mx-auto w-full">
              <div className="md:h-[132px] sm:h-[209px] h-[454px] mb-[-199.3px] mx-auto w-full z-[1]">
                <Img
                  className="absolute h-[146px] object-cover right-[5%] top-[0] w-[6%]"
                  src="images/img_objects2.png"
                  alt="objectsTwo_One"
                />
                <div className="absolute bottom-[0] md:h-[331px] h-[348px] sm:h-[408px] inset-x-[0] mx-auto w-full">
                  <div className="absolute h-[331px] sm:h-[408px] inset-x-[0] mx-auto top-[0] w-full">
                    <Img
                      className="h-[331px] m-auto object-cover w-full"
                      src="images/img_bg_331x1920.png"
                      alt="bg_Seven"
                    />
                    <div className="absolute gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 h-max inset-[0] items-center justify-center m-auto w-auto">
                      <div className="bg-white-A700_11 h-[174px] md:h-[84px] py-10 relative rounded-lg w-full">
                        <Text
                          className="absolute inset-x-[0] mx-auto md:text-5xl sm:text-[42px] text-[56px] text-green-A700 top-[18%] w-max"
                          size="txtPoppinsLight56"
                        >
                          37+
                        </Text>
                        <Text
                          className="absolute bottom-[23%] inset-x-[0] mx-auto text-center text-lg text-white-A700 w-max"
                          size="txtPoppinsRegular18WhiteA700"
                        >
                          Years of Hard Work
                        </Text>
                      </div>
                      <div className="bg-white-A700_11 flex flex-col items-center justify-start py-10 rounded-lg w-full">
                        <Text
                          className="md:text-5xl sm:text-[42px] text-[56px] text-green-A700 w-auto"
                          size="txtPoppinsLight56"
                        >
                          500k+
                        </Text>
                        <Text
                          className="text-center text-lg text-white-A700 w-auto"
                          size="txtPoppinsRegular18WhiteA700"
                        >
                          Happy Customer
                        </Text>
                      </div>
                      <div className="bg-white-A700_11 h-[174px] md:h-[84px] py-10 relative rounded-lg w-full">
                        <Text
                          className="absolute inset-x-[0] mx-auto md:text-5xl sm:text-[42px] text-[56px] text-green-A700 top-[18%] w-max"
                          size="txtPoppinsLight56"
                        >
                          28
                        </Text>
                        <Text
                          className="absolute bottom-[23%] inset-x-[0] mx-auto text-center text-lg text-white-A700 w-max"
                          size="txtPoppinsRegular18WhiteA700"
                        >
                          Qualified Team Member
                        </Text>
                      </div>
                      <div className="bg-white-A700_11 flex flex-col items-center justify-start py-10 rounded-lg w-full">
                        <Text
                          className="md:text-5xl sm:text-[42px] text-[56px] text-green-A700 w-auto"
                          size="txtPoppinsLight56"
                        >
                          750k+
                        </Text>
                        <Text
                          className="text-center text-lg text-white-A700 w-auto"
                          size="txtPoppinsRegular18WhiteA700"
                        >
                          Monthly Orders
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[169px] object-cover right-[0] top-[4%]"
                    src="images/img_group8.png"
                    alt="groupEight_One"
                  />
                  <Img
                    className="absolute bottom-[0] h-[95px] right-[5%]"
                    src="images/img_globe.svg"
                    alt="globe_One"
                  />
                  <Img
                    className="absolute h-[233px] left-[0] object-cover top-[7%] w-[12%]"
                    src="images/img_pawelczerwinsk.png"
                    alt="pawelczerwinsk_One"
                  />
                </div>
              </div>
              <div className="h-[1605px] mt-auto mx-auto w-full">
                <div className="sm:h-[696px] h-[791px] md:h-[816px] mb-[-95.62px] mx-auto sm:pr-5 pr-[21px] w-[98%] md:w-full z-[1]">
                  <Img
                    className="h-[791px] m-auto object-cover"
                    src="images/img_bg_gray_300_01.png"
                    alt="bg_Six"
                  />
                  <div className="absolute bottom-[15%] flex md:flex-col flex-row md:gap-10 gap-[76px] items-start justify-center right-[5%] w-[79%]">
                    <div className="flex md:flex-col flex-row gap-6 items-center justify-between mb-[50px] w-[90%] md:w-full">
                      <div className="h-[360px] relative w-1/2 md:w-full">
                        <Img
                          className="h-[360px] m-auto object-cover rounded-[10px] w-full"
                          src="images/img_image_360x648.png"
                          alt="image_FortyOne"
                        />
                        <div className="absolute flex flex-col gap-6 h-max inset-y-[0] items-start justify-start left-[6%] my-auto w-auto">
                          <div className="flex flex-col gap-5 items-start justify-start w-auto">
                            <div className="flex flex-col gap-2 items-start justify-start w-auto">
                              <Text
                                className="text-sm text-white-A700 tracking-[0.42px] uppercase w-auto"
                                size="txtPoppinsMedium14"
                              >
                                100% Organic
                              </Text>
                              <Text
                                className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 w-auto"
                                size="txtPoppinsSemiBold36WhiteA700"
                              >
                                Fruit & Vegetable
                              </Text>
                            </div>
                            <div className="flex flex-row gap-2 items-center justify-start w-auto">
                              <Text
                                className="text-center text-sm text-white-A700_a2 w-auto"
                                size="txtPoppinsRegular14WhiteA700a2"
                              >
                                Starting at:
                              </Text>
                              <Button
                                className="cursor-pointer font-medium min-w-[62px] rounded-[5px] text-base text-center"
                                color="orange_600"
                                size="xs"
                                variant="fill"
                              >
                                $11.99
                              </Button>
                            </div>
                          </div>
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[162px]"
                            rightIcon={
                              <Img
                                className="ml-3"
                                src="images/img_arrowleft_white_a700.svg"
                                alt="arrow_left"
                              />
                            }
                            shape="round"
                            color="green_A700"
                            size="lg"
                            variant="fill"
                          >
                            <div className="font-semibold text-left text-sm">
                              Shop Now
                            </div>
                          </Button>
                        </div>
                      </div>
                      <div className="h-[360px] relative w-1/2 md:w-full">
                        <Img
                          className="h-[360px] m-auto object-cover rounded-lg w-full"
                          src="images/img_image_48.png"
                          alt="image_FortyTwo"
                        />
                        <div className="absolute flex flex-col gap-6 h-max inset-y-[0] items-start justify-start left-[6%] my-auto w-auto">
                          <div className="flex flex-col gap-4 items-start justify-start w-auto">
                            <div className="flex flex-col gap-2 items-start justify-start w-auto">
                              <Text
                                className="text-sm text-white-A700 tracking-[0.42px] uppercase w-auto"
                                size="txtPoppinsMedium14"
                              >
                                sale off the week
                              </Text>
                              <Text
                                className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 w-auto"
                                size="txtPoppinsSemiBold36WhiteA700"
                              >
                                Sales of the Year
                              </Text>
                            </div>
                            <div className="flex flex-row gap-2 items-start justify-start w-auto">
                              <div className="flex flex-col gap-1 items-center justify-start w-auto">
                                <Text
                                  className="text-center text-white-A700 text-xl w-auto"
                                  size="txtPoppinsRegular20"
                                >
                                  00
                                </Text>
                                <Text
                                  className="text-center text-white-A700_99 text-xs tracking-[0.36px] uppercase w-auto"
                                  size="txtPoppinsRegular12WhiteA70099"
                                >
                                  Days
                                </Text>
                              </div>
                              <Text
                                className="text-base text-center text-white-A700_90 w-auto"
                                size="txtPoppinsRegular16WhiteA70090"
                              >
                                :
                              </Text>
                              <div className="flex flex-col gap-1 items-center justify-start w-auto">
                                <Text
                                  className="text-center text-white-A700 text-xl w-auto"
                                  size="txtPoppinsRegular20"
                                >
                                  02
                                </Text>
                                <Text
                                  className="text-center text-white-A700_99 text-xs tracking-[0.36px] uppercase w-auto"
                                  size="txtPoppinsRegular12WhiteA70099"
                                >
                                  Hours
                                </Text>
                              </div>
                              <Text
                                className="text-base text-center text-white-A700_90 w-auto"
                                size="txtPoppinsRegular16WhiteA70090"
                              >
                                :
                              </Text>
                              <div className="flex flex-col gap-1 items-center justify-start w-auto">
                                <Text
                                  className="text-center text-white-A700 text-xl w-auto"
                                  size="txtPoppinsRegular20"
                                >
                                  18
                                </Text>
                                <Text
                                  className="text-center text-white-A700_99 text-xs tracking-[0.36px] uppercase w-auto"
                                  size="txtPoppinsRegular12WhiteA70099"
                                >
                                  Mins
                                </Text>
                              </div>
                              <Text
                                className="text-base text-center text-white-A700_90 w-auto"
                                size="txtPoppinsRegular16WhiteA70090"
                              >
                                :
                              </Text>
                              <div className="flex flex-col gap-1 items-center justify-start w-auto">
                                <Text
                                  className="text-center text-white-A700 text-xl w-auto"
                                  size="txtPoppinsRegular20"
                                >
                                  46
                                </Text>
                                <Text
                                  className="text-center text-white-A700_99 text-xs tracking-[0.36px] uppercase w-auto"
                                  size="txtPoppinsRegular12WhiteA70099"
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
                                className="ml-3"
                                src="images/img_arrowleft_white_a700.svg"
                                alt="arrow_left"
                              />
                            }
                            shape="round"
                            color="green_A700"
                            size="lg"
                            variant="fill"
                          >
                            <div className="font-semibold text-left text-sm">
                              Shop Now
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="h-[77px] sm:h-auto md:mt-0 mt-[333px] object-cover w-[6%] md:w-full"
                      src="images/img_184.png"
                      alt="OneHundredEightyFour_One"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <Img
                      className="h-[157px] md:mt-0 mt-[370px]"
                      src="images/img_group10.svg"
                      alt="groupTen_Two"
                    />
                    <Img
                      className="md:flex-1 h-[65px] sm:h-auto md:ml-[0] ml-[120px] md:mt-0 mt-[480px] object-cover w-[4%] md:w-full"
                      src="images/img_1902.png"
                      alt="1902_One"
                    />
                    <div className="flex md:flex-1 flex-col gap-[39px] items-center justify-start ml-6 md:ml-[0] w-[72%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
                        <div className="flex flex-col gap-[34px] items-center justify-start w-full">
                          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1320px] w-full">
                            <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                              <Text
                                className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 w-auto"
                                size="txtPoppinsSemiBold40"
                              >
                                Best Seller Products
                              </Text>
                            </div>
                            <div className="flex flex-row gap-3 items-center justify-center w-auto">
                              <a
                                href="javascript:"
                                className="text-base text-green-A700 w-auto"
                              >
                                <Text size="txtPoppinsMedium16GreenA700">
                                  View All
                                </Text>
                              </a>
                              <Img
                                className="h-3 w-[15px]"
                                src="images/img_arrowleft.svg"
                                alt="arrowleft_Fifteen"
                              />
                            </div>
                          </div>
                          <List
                            className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center w-full"
                            orientation="horizontal"
                          >
                            <div className="bg-white-A700 hover:border border hover:border-gray-300_01 border-gray-300_01 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start rounded-lg hover:shadow-bs2 shadow-bs2 hover:w-full w-full">
                              <div className="md:h-[246px] h-[248px] relative w-[248px]">
                                <Img
                                  className="h-[246px] m-auto object-cover w-[246px]"
                                  src="images/img_image.png"
                                  alt="image"
                                />
                                <div className="absolute flex flex-col gap-1.5 items-center justify-start right-[6%] top-[6%] w-[17%]">
                                  <Button
                                    className="border border-gray-100 border-solid flex h-10 items-center justify-center w-10"
                                    shape="circle"
                                    color="white_A700"
                                    size="md"
                                    variant="fill"
                                  >
                                    <Img
                                      className="h-5"
                                      src="images/img_favorite.svg"
                                      alt="favorite"
                                    />
                                  </Button>
                                  <Button
                                    className="border border-gray-100 border-solid flex h-10 items-center justify-center w-10"
                                    shape="circle"
                                    color="white_A700"
                                    size="md"
                                    variant="fill"
                                  >
                                    <Img
                                      className="h-5"
                                      src="images/img_eye1.svg"
                                      alt="eyeOne"
                                    />
                                  </Button>
                                </div>
                              </div>
                              <div className="md:h-11 h-[91px] pb-4 pt-3 px-4 relative w-[248px]">
                                <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[13%] w-auto">
                                  <Text
                                    className="text-gray-800 text-sm w-auto"
                                    size="txtPoppinsRegular14Gray800"
                                  >
                                    Green Apple
                                  </Text>
                                  <div className="flex flex-col items-start justify-start w-auto">
                                    <Text
                                      className="text-base text-gray-900_01 w-auto"
                                      size="txtPoppinsMedium16Gray90001"
                                    >
                                      $14.99
                                    </Text>
                                  </div>
                                </div>
                                <Img
                                  className="absolute bottom-[18%] h-3 left-[6%] w-[60px]"
                                  src="images/img_close.svg"
                                  alt="close"
                                />
                                <Button
                                  className="absolute flex h-10 inset-y-[0] items-center justify-center my-auto right-[18%] rounded-[50%] w-10"
                                  shape="round"
                                  color="green_A700"
                                  size="md"
                                  variant="fill"
                                >
                                  <Img
                                    className="h-5"
                                    src="images/img_bag_white_a700.svg"
                                    alt="bag"
                                  />
                                </Button>
                              </div>
                            </div>
                            <div className="bg-white-A700 hover:border border hover:border-gray-300_01 border-gray-300_01 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start rounded-lg hover:shadow-bs2 hover:w-full w-full">
                              <div className="flex flex-col items-start justify-start w-[248px]">
                                <Img
                                  className="h-[246px] md:h-auto object-cover w-[246px]"
                                  src="images/img_image_5.png"
                                  alt="image"
                                />
                              </div>
                              <div className="md:h-11 h-[91px] pb-4 pt-3 px-4 relative w-[248px]">
                                <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[13%] w-auto">
                                  <Text
                                    className="text-gray-800 text-sm w-auto"
                                    size="txtPoppinsRegular14Gray800"
                                  >
                                    Chanise Cabbage
                                  </Text>
                                  <div className="flex flex-col items-start justify-start w-auto">
                                    <Text
                                      className="text-base text-gray-900_01 w-auto"
                                      size="txtPoppinsMedium16Gray90001"
                                    >
                                      $14.99
                                    </Text>
                                  </div>
                                </div>
                                <Img
                                  className="absolute bottom-[18%] h-3 left-[6%] w-[60px]"
                                  src="images/img_close.svg"
                                  alt="close"
                                />
                                <Button
                                  className="absolute flex h-10 inset-y-[0] items-center justify-center my-auto right-[18%] w-10"
                                  shape="circle"
                                  color="gray_100"
                                  size="md"
                                  variant="fill"
                                >
                                  <Img
                                    className="h-5"
                                    src="images/img_bag.svg"
                                    alt="bag"
                                  />
                                </Button>
                              </div>
                            </div>
                            <div className="bg-white-A700 hover:border border hover:border-gray-300_01 border-gray-300_01 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start rounded-lg hover:shadow-bs2 hover:w-full w-full">
                              <div className="flex flex-col items-start justify-start w-[248px]">
                                <Img
                                  className="h-[246px] md:h-auto object-cover w-[246px]"
                                  src="images/img_image_246x246.png"
                                  alt="image"
                                />
                              </div>
                              <div className="md:h-11 h-[91px] pb-4 pt-3 px-4 relative w-[248px]">
                                <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[13%] w-auto">
                                  <Text
                                    className="text-gray-800 text-sm w-auto"
                                    size="txtPoppinsRegular14Gray800"
                                  >
                                    Green Lettuce
                                  </Text>
                                  <div className="flex flex-col items-start justify-start w-auto">
                                    <Text
                                      className="text-base text-gray-900_01 w-auto"
                                      size="txtPoppinsMedium16Gray90001"
                                    >
                                      $14.99
                                    </Text>
                                  </div>
                                </div>
                                <Img
                                  className="absolute bottom-[18%] h-3 left-[6%] w-[60px]"
                                  src="images/img_close.svg"
                                  alt="close"
                                />
                                <Button
                                  className="absolute flex h-10 inset-y-[0] items-center justify-center my-auto right-[18%] w-10"
                                  shape="circle"
                                  color="gray_100"
                                  size="md"
                                  variant="fill"
                                >
                                  <Img
                                    className="h-5"
                                    src="images/img_bag.svg"
                                    alt="bag"
                                  />
                                </Button>
                              </div>
                            </div>
                            <div className="bg-white-A700 hover:border border hover:border-gray-300_01 border-gray-300_01 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start rounded-lg hover:shadow-bs2 shadow-bs2 hover:w-full w-full">
                              <div className="md:h-[246px] h-[248px] relative w-[248px]">
                                <Img
                                  className="h-[246px] m-auto object-cover w-[246px]"
                                  src="images/img_image_28.png"
                                  alt="image"
                                />
                                <div className="absolute flex flex-col gap-1.5 items-center justify-start right-[6%] top-[6%] w-[17%]">
                                  <Button
                                    className="border border-gray-100 border-solid flex h-10 items-center justify-center w-10"
                                    shape="circle"
                                    color="white_A700"
                                    size="md"
                                    variant="fill"
                                  >
                                    <Img
                                      className="h-5"
                                      src="images/img_favorite.svg"
                                      alt="favorite"
                                    />
                                  </Button>
                                  <Button
                                    className="border border-gray-100 border-solid flex h-10 items-center justify-center w-10"
                                    shape="circle"
                                    color="white_A700"
                                    size="md"
                                    variant="fill"
                                  >
                                    <Img
                                      className="h-5"
                                      src="images/img_eye1.svg"
                                      alt="eyeOne"
                                    />
                                  </Button>
                                </div>
                              </div>
                              <div className="md:h-11 h-[91px] pb-4 pt-3 px-4 relative w-[248px]">
                                <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[12%] w-auto">
                                  <Text
                                    className="text-gray-800 text-sm w-auto"
                                    size="txtPoppinsRegular14Gray800"
                                  >
                                    Green Chili
                                  </Text>
                                  <div className="flex flex-col items-start justify-start w-auto">
                                    <Text
                                      className="text-base text-gray-900_01 w-auto"
                                      size="txtPoppinsMedium16Gray90001"
                                    >
                                      $14.99
                                    </Text>
                                  </div>
                                </div>
                                <Img
                                  className="absolute bottom-[18%] h-3 left-[6%] w-[60px]"
                                  src="images/img_close.svg"
                                  alt="close"
                                />
                                <Button
                                  className="absolute flex h-10 inset-y-[0] items-center justify-center my-auto right-[18%] rounded-[50%] w-10"
                                  shape="round"
                                  color="green_A700"
                                  size="md"
                                  variant="fill"
                                >
                                  <Img
                                    className="h-5"
                                    src="images/img_bag_white_a700.svg"
                                    alt="bag"
                                  />
                                </Button>
                              </div>
                            </div>
                            <div className="bg-white-A700 hover:border border hover:border-gray-300_01 border-gray-300_01 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start rounded-lg hover:shadow-bs2 hover:w-full w-full">
                              <div className="flex flex-col items-start justify-start w-[248px]">
                                <Img
                                  className="h-[246px] md:h-auto object-cover w-[246px]"
                                  src="images/img_image_20.png"
                                  alt="image"
                                />
                              </div>
                              <div className="md:h-11 h-[91px] pb-4 pt-3 px-4 relative w-[248px]">
                                <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[13%] w-auto">
                                  <Text
                                    className="text-gray-800 text-sm w-auto"
                                    size="txtPoppinsRegular14Gray800"
                                  >
                                    Corn
                                  </Text>
                                  <div className="flex flex-col items-start justify-start w-auto">
                                    <Text
                                      className="text-base text-gray-900_01 w-auto"
                                      size="txtPoppinsMedium16Gray90001"
                                    >
                                      $14.99
                                    </Text>
                                  </div>
                                </div>
                                <Img
                                  className="absolute bottom-[18%] h-3 left-[6%] w-[60px]"
                                  src="images/img_close.svg"
                                  alt="close"
                                />
                                <Button
                                  className="absolute flex h-10 inset-y-[0] items-center justify-center my-auto right-[18%] w-10"
                                  shape="circle"
                                  color="gray_100"
                                  size="md"
                                  variant="fill"
                                >
                                  <Img
                                    className="h-5"
                                    src="images/img_bag.svg"
                                    alt="bag"
                                  />
                                </Button>
                              </div>
                            </div>
                          </List>
                        </div>
                      </div>
                      <div className="md:h-[432px] h-[436px] relative w-full">
                        <Img
                          className="absolute bottom-[0] h-20 object-cover right-[0] w-[7%]"
                          src="images/img_growthcloseup.png"
                          alt="growthcloseup_Four"
                        />
                        <div className="absolute flex inset-[0] m-auto w-[1320px] md:w-full">
                          <div className="flex my-auto w-[84%] md:w-full">
                            <div className="flex my-auto w-[70%] md:w-full">
                              <div className="flex flex-col gap-4 items-start justify-start my-auto w-auto">
                                <Text
                                  className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl w-auto"
                                  size="txtPoppinsMedium24"
                                >
                                  Hot Deals
                                </Text>
                                <div className="md:h-[114px] h-[116px] relative w-[424px] sm:w-full">
                                  <div className="absolute bg-white-A700 border border-gray-300_01 border-solid flex flex-col h-full inset-y-[0] items-start justify-start left-[0] my-auto rounded-md w-[312px]">
                                    <div className="flex flex-col items-start justify-start p-[5px] w-28">
                                      <Img
                                        className="h-[102px] md:h-auto object-cover w-[102px]"
                                        src="images/img_image.png"
                                        alt="image_ThirtySix"
                                      />
                                    </div>
                                  </div>
                                  <div className="absolute flex flex-col gap-1.5 h-full inset-y-[0] items-start justify-center my-auto px-3 py-6 right-[0] w-auto">
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <Text
                                        className="text-gray-800 text-sm w-auto"
                                        size="txtPoppinsRegular14Gray800"
                                      >
                                        Green Apple
                                      </Text>
                                      <div className="flex flex-col items-start justify-start w-auto">
                                        <Text
                                          className="text-base text-gray-900_01 w-auto"
                                          size="txtPoppinsMedium16Gray90001"
                                        >
                                          $14.99
                                        </Text>
                                      </div>
                                    </div>
                                    <Img
                                      className="h-4 w-20"
                                      src="images/img_close.svg"
                                      alt="close_Six"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="md:h-[114px] h-[116px] relative w-[424px] sm:w-full">
                                    <div className="absolute bg-white-A700 border border-green-800 border-solid flex flex-col h-full inset-y-[0] items-start justify-start left-[0] my-auto rounded-md shadow-bs2 w-[312px]">
                                      <div className="flex flex-col items-start justify-start p-[5px] w-28">
                                        <Img
                                          className="h-[102px] md:h-auto object-cover w-[102px]"
                                          src="images/img_image_2.png"
                                          alt="image_ThirtySeven"
                                        />
                                      </div>
                                    </div>
                                    <div className="absolute flex flex-col gap-[7px] h-full inset-y-[0] items-start justify-center my-auto p-3 right-[0] w-[74%]">
                                      <Text
                                        className="mt-[11px] text-green-800 text-sm"
                                        size="txtPoppinsRegular14Green800"
                                      >
                                        Indian Malta
                                      </Text>
                                      <div className="h-[41px] md:h-[51px] mb-[11px] relative w-1/2">
                                        <div className="absolute flex flex-row gap-3 h-max inset-[0] items-center justify-between m-auto w-auto">
                                          <Button
                                            className="flex h-10 items-center justify-center rounded-[50%] w-10"
                                            shape="round"
                                            color="green_A700"
                                            size="md"
                                            variant="fill"
                                          >
                                            <Img
                                              className="h-5"
                                              src="images/img_bag_white_a700.svg"
                                              alt="bag_Four"
                                            />
                                          </Button>
                                          <Button
                                            className="border border-gray-100 border-solid flex h-10 items-center justify-center w-10"
                                            shape="circle"
                                            color="white_A700"
                                            size="md"
                                            variant="fill"
                                          >
                                            <Img
                                              className="h-5"
                                              src="images/img_eye1.svg"
                                              alt="eyeOne_Two"
                                            />
                                          </Button>
                                          <Button
                                            className="border border-gray-100 border-solid flex h-10 items-center justify-center w-10"
                                            shape="circle"
                                            color="white_A700"
                                            size="md"
                                            variant="fill"
                                          >
                                            <Img
                                              className="h-5"
                                              src="images/img_favorite.svg"
                                              alt="favorite_Four"
                                            />
                                          </Button>
                                        </div>
                                        <div className="absolute flex flex-row gap-3 h-max inset-[0] items-center justify-between m-auto w-auto">
                                          <Button
                                            className="flex h-10 items-center justify-center rounded-[50%] w-10"
                                            shape="round"
                                            color="green_A700"
                                            size="md"
                                            variant="fill"
                                          >
                                            <Img
                                              className="h-5"
                                              src="images/img_bag_white_a700.svg"
                                              alt="bag_Five"
                                            />
                                          </Button>
                                          <Button
                                            className="border border-gray-100 border-solid flex h-10 items-center justify-center w-10"
                                            shape="circle"
                                            color="white_A700"
                                            size="md"
                                            variant="fill"
                                          >
                                            <Img
                                              className="h-5"
                                              src="images/img_eye1.svg"
                                              alt="eyeOne_Three"
                                            />
                                          </Button>
                                          <Button
                                            className="border border-gray-100 border-solid flex h-10 items-center justify-center w-10"
                                            shape="circle"
                                            color="white_A700"
                                            size="md"
                                            variant="fill"
                                          >
                                            <Img
                                              className="h-5"
                                              src="images/img_favorite.svg"
                                              alt="favorite_Five"
                                            />
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="md:h-[114px] h-[116px] relative w-[424px] sm:w-full">
                                  <div className="absolute bg-white-A700 border border-gray-300_01 border-solid flex flex-col h-full inset-y-[0] items-start justify-start left-[0] my-auto rounded-md w-[312px]">
                                    <div className="flex flex-col items-start justify-start p-[5px] w-28">
                                      <Img
                                        className="h-[102px] md:h-auto object-cover w-[102px]"
                                        src="images/img_image_6.png"
                                        alt="image_ThirtyEight"
                                      />
                                    </div>
                                  </div>
                                  <div className="absolute flex flex-col gap-1.5 h-full inset-y-[0] items-start justify-center my-auto px-3 py-6 right-[0] w-auto">
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <Text
                                        className="text-gray-800 text-sm w-auto"
                                        size="txtPoppinsRegular14Gray800"
                                      >
                                        Green Lettuce
                                      </Text>
                                      <div className="flex flex-col items-start justify-start w-auto">
                                        <Text
                                          className="text-base text-gray-900_01 w-auto"
                                          size="txtPoppinsMedium16Gray90001"
                                        >
                                          $14.99
                                        </Text>
                                      </div>
                                    </div>
                                    <Img
                                      className="h-4 w-20"
                                      src="images/img_close.svg"
                                      alt="close_Seven"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-4 items-start justify-start ml-[-88px] my-auto w-auto z-[1]">
                                <Text
                                  className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl w-auto"
                                  size="txtPoppinsMedium24"
                                >
                                  Best Seller
                                </Text>
                                <List
                                  className="flex flex-col gap-4 items-center w-full"
                                  orientation="vertical"
                                >
                                  <div className="md:h-[114px] h-[116px] relative w-[424px] sm:w-full">
                                    <div className="absolute bg-white-A700 border border-gray-300_01 border-solid flex flex-col h-full inset-y-[0] items-start justify-start left-[0] my-auto rounded-md w-[312px]">
                                      <div className="flex flex-col items-start justify-start p-[5px] w-28">
                                        <Img
                                          className="h-[102px] md:h-auto object-cover w-[102px]"
                                          src="images/img_image_8.png"
                                          alt="image"
                                        />
                                      </div>
                                    </div>
                                    <div className="absolute flex flex-col gap-1.5 h-full inset-y-[0] items-start justify-center my-auto px-3 py-6 right-[0] w-auto">
                                      <div className="flex flex-col items-start justify-start w-auto">
                                        <Text
                                          className="text-gray-800 text-sm w-auto"
                                          size="txtPoppinsRegular14Gray800"
                                        >
                                          Eggplant
                                        </Text>
                                        <div className="flex flex-col items-start justify-start w-auto">
                                          <Text
                                            className="text-base text-gray-900_01 w-auto"
                                            size="txtPoppinsMedium16Gray90001"
                                          >
                                            $14.99
                                          </Text>
                                        </div>
                                      </div>
                                      <Img
                                        className="h-4 w-20"
                                        src="images/img_close.svg"
                                        alt="close"
                                      />
                                    </div>
                                  </div>
                                  <div className="md:h-[115px] h-[116px] relative w-[424px] sm:w-full">
                                    <div className="absolute bg-white-A700 border border-gray-300_01 border-solid flex flex-col h-full inset-y-[0] items-start justify-start left-[0] my-auto rounded-md w-[312px]">
                                      <div className="flex flex-col items-start justify-start p-[5px] w-28">
                                        <Img
                                          className="h-[102px] md:h-auto object-cover w-[102px]"
                                          src="images/img_image_102x102.png"
                                          alt="image"
                                        />
                                      </div>
                                    </div>
                                    <div className="absolute flex flex-col gap-1.5 h-full inset-y-[0] items-start justify-center my-auto px-3 py-6 right-[0] w-auto">
                                      <div className="flex flex-col items-start justify-start w-auto">
                                        <Text
                                          className="text-gray-800 text-sm w-auto"
                                          size="txtPoppinsRegular14Gray800"
                                        >
                                          Red Capsicum
                                        </Text>
                                        <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
                                          <Text
                                            className="text-base text-gray-900_01 w-auto"
                                            size="txtPoppinsMedium16Gray90001"
                                          >
                                            $14.99
                                          </Text>
                                          <Text
                                            className="text-base text-gray-500 w-auto"
                                            size="txtPoppinsRegular16Gray500"
                                          >
                                            $20.99
                                          </Text>
                                        </div>
                                      </div>
                                      <Img
                                        className="h-4 w-20"
                                        src="images/img_close.svg"
                                        alt="close"
                                      />
                                    </div>
                                  </div>
                                  <div className="md:h-[114px] h-[116px] relative w-[424px] sm:w-full">
                                    <div className="absolute bg-white-A700 border border-gray-300_01 border-solid flex flex-col h-full inset-y-[0] items-start justify-start left-[0] my-auto rounded-md w-[312px]">
                                      <div className="flex flex-col items-start justify-start p-[5px] w-28">
                                        <Img
                                          className="h-[102px] md:h-auto object-cover w-[102px]"
                                          src="images/img_image_29.png"
                                          alt="image"
                                        />
                                      </div>
                                    </div>
                                    <div className="absolute flex flex-col gap-1.5 h-full inset-y-[0] items-start justify-center my-auto px-3 py-6 right-[0] w-auto">
                                      <div className="flex flex-col items-start justify-start w-auto">
                                        <Text
                                          className="text-gray-800 text-sm w-auto"
                                          size="txtPoppinsRegular14Gray800"
                                        >
                                          Red Tomatos
                                        </Text>
                                        <div className="flex flex-col items-start justify-start w-auto">
                                          <Text
                                            className="text-base text-gray-900_01 w-auto"
                                            size="txtPoppinsMedium16Gray90001"
                                          >
                                            $14.99
                                          </Text>
                                        </div>
                                      </div>
                                      <Img
                                        className="h-4 w-20"
                                        src="images/img_close.svg"
                                        alt="close"
                                      />
                                    </div>
                                  </div>
                                </List>
                              </div>
                            </div>
                            <div className="flex flex-col gap-4 items-start justify-start ml-[-88px] my-auto w-auto z-[1]">
                              <Text
                                className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl w-auto"
                                size="txtPoppinsMedium24"
                              >
                                Top Rated
                              </Text>
                              <List
                                className="flex flex-col gap-4 items-center w-full"
                                orientation="vertical"
                              >
                                <div className="md:h-[114px] h-[116px] relative w-[424px] sm:w-full">
                                  <div className="absolute bg-white-A700 border border-gray-300_01 border-solid flex flex-col h-full inset-y-[0] items-start justify-start left-[0] my-auto rounded-md w-[312px]">
                                    <div className="flex flex-col items-start justify-start p-[5px] w-28">
                                      <Img
                                        className="h-[102px] md:h-auto object-cover w-[102px]"
                                        src="images/img_image_230x254.png"
                                        alt="image"
                                      />
                                    </div>
                                  </div>
                                  <div className="absolute flex flex-col gap-1.5 h-full inset-y-[0] items-start justify-center my-auto px-3 py-6 right-[0] w-auto">
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <Text
                                        className="text-gray-800 text-sm w-auto"
                                        size="txtPoppinsRegular14Gray800"
                                      >
                                        Big Potatos
                                      </Text>
                                      <div className="flex flex-col items-start justify-start w-auto">
                                        <Text
                                          className="text-base text-gray-900_01 w-auto"
                                          size="txtPoppinsMedium16Gray90001"
                                        >
                                          $14.99
                                        </Text>
                                      </div>
                                    </div>
                                    <Img
                                      className="h-4 w-20"
                                      src="images/img_close.svg"
                                      alt="close"
                                    />
                                  </div>
                                </div>
                                <div className="md:h-[115px] h-[116px] relative w-[424px] sm:w-full">
                                  <div className="absolute bg-white-A700 border border-gray-300_01 border-solid flex flex-col h-full inset-y-[0] items-start justify-start left-[0] my-auto rounded-md w-[312px]">
                                    <div className="flex flex-col items-start justify-start p-[5px] w-28">
                                      <Img
                                        className="h-[102px] md:h-auto object-cover w-[102px]"
                                        src="images/img_image_3.png"
                                        alt="image"
                                      />
                                    </div>
                                  </div>
                                  <div className="absolute flex flex-col gap-1.5 h-full inset-y-[0] items-start justify-center my-auto px-3 py-6 right-[0] w-auto">
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <Text
                                        className="text-gray-800 text-sm w-auto"
                                        size="txtPoppinsRegular14Gray800"
                                      >
                                        Corn
                                      </Text>
                                      <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
                                        <Text
                                          className="text-base text-gray-900_01 w-auto"
                                          size="txtPoppinsMedium16Gray90001"
                                        >
                                          $14.99
                                        </Text>
                                        <Text
                                          className="text-base text-gray-500 w-auto"
                                          size="txtPoppinsRegular16Gray500"
                                        >
                                          $20.99
                                        </Text>
                                      </div>
                                    </div>
                                    <Img
                                      className="h-4 w-20"
                                      src="images/img_close.svg"
                                      alt="close"
                                    />
                                  </div>
                                </div>
                                <div className="md:h-[114px] h-[116px] relative w-[424px] sm:w-full">
                                  <div className="absolute bg-white-A700 border border-gray-300_01 border-solid flex flex-col h-full inset-y-[0] items-start justify-start left-[0] my-auto rounded-md w-[312px]">
                                    <div className="flex flex-col items-start justify-start p-[5px] w-28">
                                      <Img
                                        className="h-[102px] md:h-auto object-cover w-[102px]"
                                        src="images/img_image_4.png"
                                        alt="image"
                                      />
                                    </div>
                                  </div>
                                  <div className="absolute flex flex-col gap-1.5 h-full inset-y-[0] items-start justify-center my-auto px-3 py-6 right-[0] w-auto">
                                    <div className="flex flex-col items-start justify-start w-auto">
                                      <Text
                                        className="text-gray-800 text-sm w-auto"
                                        size="txtPoppinsRegular14Gray800"
                                      >
                                        Fresh cauliflower
                                      </Text>
                                      <div className="flex flex-col items-start justify-start w-auto">
                                        <Text
                                          className="text-base text-gray-900_01 w-auto"
                                          size="txtPoppinsMedium16Gray90001"
                                        >
                                          $14.99
                                        </Text>
                                      </div>
                                    </div>
                                    <Img
                                      className="h-4 w-20"
                                      src="images/img_close.svg"
                                      alt="close"
                                    />
                                  </div>
                                </div>
                              </List>
                            </div>
                          </div>
                          <div className="h-[432px] ml-[-88px] my-auto w-[24%] z-[1]">
                            <Img
                              className="h-[432px] m-auto object-cover rounded-lg w-full"
                              src="images/img_rectangle54_432x312.png"
                              alt="rectangleFiftyFour_One"
                            />
                            <div className="absolute flex flex-col gap-5 inset-x-[0] items-center justify-start mx-auto top-[7%] w-auto">
                              <div className="flex flex-col gap-3 items-start justify-start w-auto">
                                <Text
                                  className="text-center text-gray-900_01 text-xs tracking-[0.36px] uppercase w-auto"
                                  size="txtPoppinsMedium12Gray90001"
                                >
                                  HOt Sale
                                </Text>
                                <Text
                                  className="leading-[120.00%] md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900_01"
                                  size="txtPoppinsSemiBold32"
                                >
                                  <span className="text-gray-900_01 font-poppins font-semibold">
                                    Save 37%
                                  </span>
                                  <span className="text-gray-900_01 font-poppins font-normal">
                                    <>
                                      {" "}
                                      on
                                      <br />
                                      Every Order
                                    </>
                                  </span>
                                </Text>
                              </div>
                              <Button
                                className="cursor-pointer flex items-center justify-center min-w-[162px]"
                                rightIcon={
                                  <Img
                                    className="ml-3"
                                    src="images/img_arrowleft.svg"
                                    alt="arrow_left"
                                  />
                                }
                                shape="round"
                                color="white_A700"
                                size="lg"
                                variant="fill"
                              >
                                <div className="!text-green-A700 font-semibold text-justify text-sm">
                                  Shop Now
                                </div>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="h-[139px] md:h-auto md:ml-[0] ml-[111px] md:mt-0 mt-[427px] object-cover"
                      src="images/img_group1.png"
                      alt="groupOne_Two"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 flex flex-col items-center justify-start mt-[76px] w-full">
            <div className="md:h-[1024px] sm:h-[1548px] h-[764px] md:px-5 relative w-full">
              <div className="md:h-[729px] h-[764px] sm:h-[891px] m-auto w-full">
                <div className="absolute h-[729px] sm:h-[891px] inset-x-[0] mx-auto top-[0] w-[97%] md:w-full">
                  <div className="flex sm:flex-col flex-row md:gap-10 h-full items-end justify-between m-auto w-full">
                    <Img
                      className="h-[163px] sm:mt-0 mt-[565px]"
                      src="images/img_vector_gray_300_01.svg"
                      alt="vector_Fifteen"
                    />
                    <div className="md:h-[374px] sm:h-[728px] h-[729px] relative w-[22%] sm:w-full">
                      <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[91%]">
                        <div className="flex flex-col md:gap-10 gap-[394px] justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              <Img
                                className="h-[198px]"
                                src="images/img_vector_gray_300_01_198x116.svg"
                                alt="vector_Sixteen"
                              />
                              <Img
                                className="h-[141px]"
                                src="images/img_vector_gray_300_01_141x192.svg"
                                alt="vector_Seventeen"
                              />
                            </div>
                          </div>
                          <Img
                            className="h-[136px] md:ml-[0] ml-[89px]"
                            src="images/img_group5.svg"
                            alt="groupFive_Two"
                          />
                        </div>
                      </div>
                      <Img
                        className="absolute bottom-[16%] h-[289px] right-[3%]"
                        src="images/img_vector_gray_300_01_289x149.svg"
                        alt="vector_Eighteen"
                      />
                      <Img
                        className="absolute h-28 right-[5%] top-[22%]"
                        src="images/img_group3.svg"
                        alt="groupThree_One"
                      />
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-[62px] items-start justify-end p-2.5 right-[0] top-[0] w-[12%]"
                        style={{
                          backgroundImage: "url('images/img_group2574.png')",
                        }}
                      >
                        <Img
                          className="h-9 mt-1"
                          src="images/img_contrast.svg"
                          alt="contrast_Nineteen"
                        />
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[241px] left-[4%] top-[0]"
                    src="images/img_group1_gray_300_01.svg"
                    alt="groupOne_Three"
                  />
                </div>
                <Img
                  className="absolute h-[11px] left-[1%] top-[0]"
                  src="images/img_vector_gray_300_01_11x5.svg"
                  alt="vector_Nineteen"
                />
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-[65px] items-end justify-start left-[0] p-3.5 top-[0] w-[8%]"
                  style={{ backgroundImage: "url('images/img_group2573.svg')" }}
                >
                  <Img
                    className="h-6 mb-2.5"
                    src="images/img_settings_gray_300_01.svg"
                    alt="settings_Five"
                  />
                </div>
                <Img
                  className="absolute h-40 left-[0] top-[11%]"
                  src="images/img_group10_gray_300_01.svg"
                  alt="groupTen_Three"
                />
                <Img
                  className="absolute bottom-[22%] h-[157px] left-[6%]"
                  src="images/img_group4.svg"
                  alt="groupFour_One"
                />
                <Img
                  className="absolute bottom-[32%] h-[234px] left-[0]"
                  src="images/img_group6.svg"
                  alt="groupSix_One"
                />
                <Img
                  className="absolute bottom-[0] h-10 left-[0]"
                  src="images/img_group7_gray_300_01_40x107.svg"
                  alt="groupSeven_Four"
                />
                <Img
                  className="absolute h-[91px] left-[28%] object-cover top-[16%] w-[4%]"
                  src="images/img_410.png"
                  alt="FourHundredTen_One"
                />
              </div>
              <div className="absolute md:h-[60px] h-[77px] inset-x-[0] mx-auto top-[10%] w-[1920px] md:w-full">
                <Text
                  className="absolute inset-x-[0] mx-auto text-base text-center text-green-A700 top-[0] uppercase w-max"
                  size="txtSegoeScript16"
                >
                  Blog
                </Text>
                <Text
                  className="absolute bottom-[-1%] inset-x-[0] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900_01 w-max"
                  size="txtPoppinsSemiBold40"
                >
                  Latest News
                </Text>
              </div>
              <List
                className="absolute bottom-[10%] sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 inset-x-[0] justify-start mx-auto w-auto"
                orientation="horizontal"
              >
                <div className="hover:cursor-pointer flex flex-col items-start justify-start hover:shadow-bs3 shadow-bs3 w-auto hover:w-full sm:w-full">
                  <div className="h-[324px] relative w-full">
                    <Img
                      className="h-[324px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                      src="images/img_image_324x424.png"
                      alt="image"
                    />
                    <div className="absolute bg-white-A700 bottom-[7%] flex flex-col h-[58px] items-center justify-start left-[6%] p-[5px] rounded w-[58px]">
                      <Text
                        className="text-center text-gray-900_01 text-xl"
                        size="txtPoppinsMedium20"
                      >
                        18
                      </Text>
                      <Text
                        className="text-center text-gray-600 text-xs tracking-[0.36px] uppercase"
                        size="txtPoppinsMedium12"
                      >
                        Nov
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-bl-lg rounded-br-lg w-auto sm:w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-row gap-4 items-start justify-start w-auto">
                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                          <Img
                            className="h-5 w-5"
                            src="images/img_tag1.svg"
                            alt="tagOne"
                          />
                          <Text
                            className="text-gray-800 text-sm w-auto"
                            size="txtPoppinsRegular14Gray800"
                          >
                            Food
                          </Text>
                        </div>
                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                          <Img
                            className="h-5 w-5"
                            src="images/img_user31.svg"
                            alt="userThirtyOne"
                          />
                          <Text
                            className="text-gray-800 text-sm w-auto"
                            size="txtPoppinsRegular14Gray800"
                          >
                            By Admin
                          </Text>
                        </div>
                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_bookmark.svg"
                            alt="bookmark"
                          />
                          <Text
                            className="text-gray-700 text-sm w-auto"
                            size="txtPoppinsRegular14Gray700"
                          >
                            65 Comments
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[150.00%] max-w-[376px] md:max-w-full text-green-800 text-lg"
                        size="txtPoppinsMedium18Green800"
                      >
                        Curabitur porttitor orci eget neque accumsan venenatis.
                        Nunc fermentum.
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
                <div className="hover:cursor-pointer flex flex-col items-start justify-start hover:shadow-bs3 w-auto hover:w-full sm:w-full">
                  <div className="h-[324px] relative w-full">
                    <Img
                      className="h-[324px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                      src="images/img_image_24.png"
                      alt="image"
                    />
                    <div className="absolute bg-white-A700_d8 bottom-[7%] flex flex-col h-[58px] items-center justify-start left-[6%] p-[5px] rounded w-[58px]">
                      <Text
                        className="text-center text-gray-900_01 text-xl"
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
                  <div className="bg-white-A700 flex flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-bl-lg rounded-br-lg w-auto sm:w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-row gap-4 items-start justify-start w-auto">
                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                          <Img
                            className="h-5 w-5"
                            src="images/img_tag1.svg"
                            alt="tagOne"
                          />
                          <Text
                            className="text-gray-800 text-sm w-auto"
                            size="txtPoppinsRegular14Gray800"
                          >
                            Food
                          </Text>
                        </div>
                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                          <Img
                            className="h-5 w-5"
                            src="images/img_user31.svg"
                            alt="userThirtyOne"
                          />
                          <Text
                            className="text-gray-800 text-sm w-auto"
                            size="txtPoppinsRegular14Gray800"
                          >
                            By Admin
                          </Text>
                        </div>
                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_bookmark.svg"
                            alt="bookmark"
                          />
                          <Text
                            className="text-gray-700 text-sm w-auto"
                            size="txtPoppinsRegular14Gray700"
                          >
                            65 Comments
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[150.00%] max-w-[376px] md:max-w-full text-gray-900_01 text-lg"
                        size="txtPoppinsMedium18"
                      >
                        Curabitur porttitor orci eget neque accumsan venenatis.
                        Nunc fermentum.
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
                <div className="hover:cursor-pointer flex flex-col items-start justify-start hover:shadow-bs3 w-auto hover:w-full sm:w-full">
                  <div className="h-[324px] relative w-full">
                    <Img
                      className="h-[324px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                      src="images/img_image_25.png"
                      alt="image"
                    />
                    <div className="absolute bg-white-A700_d8 bottom-[7%] flex flex-col h-[58px] items-center justify-start left-[6%] p-[5px] rounded w-[58px]">
                      <Text
                        className="text-center text-gray-900_01 text-xl"
                        size="txtPoppinsMedium20"
                      >
                        18
                      </Text>
                      <Text
                        className="text-center text-gray-600 text-xs tracking-[0.36px] uppercase"
                        size="txtPoppinsMedium12"
                      >
                        Nov
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-bl-lg rounded-br-lg w-auto sm:w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-row gap-4 items-start justify-start w-auto">
                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                          <Img
                            className="h-5 w-5"
                            src="images/img_tag1.svg"
                            alt="tagOne"
                          />
                          <Text
                            className="text-gray-800 text-sm w-auto"
                            size="txtPoppinsRegular14Gray800"
                          >
                            Food
                          </Text>
                        </div>
                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                          <Img
                            className="h-5 w-5"
                            src="images/img_user31.svg"
                            alt="userThirtyOne"
                          />
                          <Text
                            className="text-gray-800 text-sm w-auto"
                            size="txtPoppinsRegular14Gray800"
                          >
                            By Admin
                          </Text>
                        </div>
                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_bookmark.svg"
                            alt="bookmark"
                          />
                          <Text
                            className="text-gray-700 text-sm w-auto"
                            size="txtPoppinsRegular14Gray700"
                          >
                            65 Comments
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="leading-[150.00%] max-w-[376px] md:max-w-full text-gray-900_01 text-lg"
                        size="txtPoppinsMedium18"
                      >
                        Curabitur porttitor orci eget neque accumsan venenatis.
                        Nunc fermentum.
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
          <div className="bg-gradient4  sm:h-[442px] h-[504px] md:h-[945px] pt-[61px] md:px-5 relative w-full">
            <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-5 items-start justify-start right-[3%] w-[89%]">
              <Img
                className="h-[111px] sm:h-auto md:mt-0 mt-[368px] object-cover w-[7%] md:w-full"
                src="images/img_38.png"
                alt="ThirtyEight_One"
              />
              <div className="h-[294px] md:h-[602px] sm:h-[880px] mb-[70px] md:ml-[0] ml-[9px] md:mt-0 mt-[78px] relative w-[82%] md:w-full">
                <Img
                  className="absolute h-[90px] object-cover right-[0] top-[0] w-[8%]"
                  src="images/img_growthcloseup.png"
                  alt="growthcloseup_Five"
                />
                <List
                  className="absolute bottom-[0] sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start left-[0] w-auto"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 flex flex-col gap-4 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs4 w-auto sm:w-full">
                    <Img
                      className="h-[26px] w-8"
                      src="images/img_user.svg"
                      alt="user"
                    />
                    <Text
                      className="leading-[150.00%] max-w-[376px] md:max-w-full text-gray-800 text-sm"
                      size="txtPoppinsRegular14Gray800"
                    >
                      Pellentesque eu nibh eget mauris congue mattis mattis nec
                      tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                      cursus velit sodales. Donec sed neque eget
                    </Text>
                    <div className="flex flex-row items-center justify-between pt-2 w-[376px] sm:w-full">
                      <div className="flex flex-row gap-3 items-center justify-start w-[168px]">
                        <Img
                          className="h-14 md:h-auto rounded-[50%] w-14"
                          src="images/img_image_56x56.png"
                          alt="image"
                        />
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-base text-center text-gray-900_01 w-auto"
                            size="txtPoppinsMedium16Gray90001"
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
                  <div className="bg-white-A700 flex flex-col gap-4 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs4 w-auto sm:w-full">
                    <Img
                      className="h-[26px] w-8"
                      src="images/img_user.svg"
                      alt="user"
                    />
                    <Text
                      className="leading-[150.00%] max-w-[376px] md:max-w-full text-gray-800 text-sm"
                      size="txtPoppinsRegular14Gray800"
                    >
                      Pellentesque eu nibh eget mauris congue mattis mattis nec
                      tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                      cursus velit sodales. Donec sed neque eget
                    </Text>
                    <div className="flex flex-row items-center justify-between pt-2 w-[376px] sm:w-full">
                      <div className="flex flex-row gap-3 items-center justify-start w-[186px]">
                        <Img
                          className="h-14 md:h-auto rounded-[50%] w-14"
                          src="images/img_image_26.png"
                          alt="image"
                        />
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-base text-center text-gray-900_01 w-auto"
                            size="txtPoppinsMedium16Gray90001"
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
                  <div className="bg-white-A700 flex flex-col gap-4 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs4 w-auto sm:w-full">
                    <Img
                      className="h-[26px] w-8"
                      src="images/img_user.svg"
                      alt="user"
                    />
                    <Text
                      className="leading-[150.00%] max-w-[376px] md:max-w-full text-gray-800 text-sm"
                      size="txtPoppinsRegular14Gray800"
                    >
                      Pellentesque eu nibh eget mauris congue mattis mattis nec
                      tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                      cursus velit sodales. Donec sed neque eget
                    </Text>
                    <div className="flex flex-row items-center justify-between pt-2 w-[376px] sm:w-full">
                      <div className="flex flex-row gap-3 items-center justify-start w-[173px]">
                        <Img
                          className="h-14 md:h-auto rounded-[50%] w-14"
                          src="images/img_image_27.png"
                          alt="image"
                        />
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-base text-center text-gray-900_01 w-auto"
                            size="txtPoppinsMedium16Gray90001"
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
                className="h-48 ml-24 md:ml-[0]"
                src="images/img_group12.svg"
                alt="groupTwelve_One"
              />
            </div>
            <div className="absolute flex md:flex-col flex-row md:gap-10 inset-x-[0] items-center justify-between max-w-[1920px] mx-auto md:px-10 sm:px-5 px-[300px] top-[13%] w-full">
              <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-base text-green-A700 uppercase w-auto"
                  size="txtSegoeScript16"
                >
                  Testimonial
                </Text>
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 w-auto"
                  size="txtPoppinsSemiBold40"
                >
                  What Our Customer Says
                </Text>
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
                    alt="arrowleft_Sixteen"
                  />
                </Button>
              </div>
            </div>
          </div>
          <Img
            className="h-[197px] max-w-[1320px] mx-auto w-full"
            src="images/img_companylogo_gray_300_01.svg"
            alt="companylogo_One"
          />
          <div className="flex md:flex-col flex-row gap-6 items-center justify-center max-w-[1320px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 border border-green-700_33 border-solid flex flex-col gap-4 items-start justify-start p-5 rounded-lg w-auto">
              <Img
                className="h-[62px] w-14"
                src="images/img_floatingicon_green_a700.svg"
                alt="floatingicon_One"
              />
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                <Text
                  className="text-gray-900_01 text-sm tracking-[0.42px] uppercase w-auto"
                  size="txtPoppinsMedium14Gray90001"
                >
                  Our Location
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[272px] md:max-w-full text-gray-700 text-sm"
                  size="txtPoppinsRegular14Gray700"
                >
                  1901 Thornridge Cir. Shiloh, Washington DC 20020, United
                  States
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 border border-green-700_33 border-solid flex flex-col gap-4 items-start justify-start p-5 rounded-lg w-auto">
              <Img
                className="h-[62px] w-14"
                src="images/img_user_green_a700_62x56.svg"
                alt="user_Eleven"
              />
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                <Text
                  className="text-gray-900_01 text-sm tracking-[0.42px] uppercase w-auto"
                  size="txtPoppinsMedium14Gray90001"
                >
                  Call Us 24/7
                </Text>
                <Text
                  className="text-2xl md:text-[22px] text-green-A700 sm:text-xl w-[183px]"
                  size="txtPoppinsRegular24"
                >
                  (303) 555-0105
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 border border-green-700_33 border-solid flex md:flex-1 flex-col gap-3.5 items-start justify-start p-5 rounded-lg w-auto md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[62px] items-center justify-start p-4 w-[10%] md:w-full"
                style={{
                  backgroundImage: "url('images/img_icon_green_a700.svg')",
                }}
              >
                <Img
                  className="h-6 my-[3px] w-6"
                  src="images/img_lock.svg"
                  alt="lock_One"
                />
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full">
                <Text
                  className="text-gray-900_01 text-sm tracking-[0.42px] uppercase w-auto"
                  size="txtPoppinsMedium14Gray90001"
                >
                  Subscribe Newsletter
                </Text>
                <div className="h-[45px] relative w-full">
                  <Input
                    name="inputfield_One"
                    placeholder="Your email address"
                    className="p-0 placeholder:text-gray-500 text-left text-sm w-full"
                    wrapClassName="absolute border border-gray-300_01 border-solid inset-y-[0] left-[0] my-auto rounded-[22px] w-[93%]"
                    type="email"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  ></Input>
                  <Button
                    className="absolute cursor-pointer font-semibold h-full inset-y-[0] min-w-[136px] my-auto right-[0] text-center text-sm"
                    shape="round"
                    color="green_A700"
                    size="lg"
                    variant="fill"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900_01 md:h-[1124px] h-[399px] sm:h-[600px] mt-20 md:px-5 relative w-full">
            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
              <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[69%] md:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        className="h-8 w-8"
                        src="images/img_plant1.svg"
                        alt="plantOne_Three"
                      />
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-0.96px] w-auto"
                        size="txtPoppinsMedium32"
                      >
                        Ecobazar
                      </Text>
                    </div>
                    <Text
                      className="leading-[150.00%] max-w-[300px] md:max-w-full text-gray-500 text-sm"
                      size="txtPoppinsRegular14"
                    >
                      Morbi cursus porttitor enim lobortis molestie. Duis
                      gravida turpis dui, eget bibendum magn.
                    </Text>
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
                          alt="facebookOne_One"
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
                          alt="twitterOne_One"
                        />
                      </Button>
                      <Img
                        className="h-10 rounded-[50%] w-10"
                        src="images/img_settings_gray_400.svg"
                        alt="settings_Six"
                      />
                      <Img
                        className="h-10 rounded-[50%] w-10"
                        src="images/img_info_gray_400.svg"
                        alt="info_One"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[119px] md:mt-0 mt-[5px] w-auto">
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtPoppinsMedium18WhiteA700"
                    >
                      My Account
                    </Text>
                    <Img
                      className="h-0.5 w-6"
                      src="images/img_line14.svg"
                      alt="lineFourteen_Four"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start pt-2 w-auto">
                      <Text
                        className="text-gray-500 text-sm w-auto"
                        size="txtPoppinsRegular14"
                      >
                        My Account
                      </Text>
                      <Text
                        className="text-gray-500 text-sm w-auto"
                        size="txtPoppinsRegular14"
                      >
                        Order History
                      </Text>
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtPoppinsRegular14WhiteA700"
                      >
                        Shoping Cart
                      </Text>
                      <Text
                        className="text-gray-500 text-sm w-auto"
                        size="txtPoppinsRegular14"
                      >
                        Wishlist
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[90px] md:mt-0 mt-[5px] w-auto">
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtPoppinsMedium18WhiteA700"
                    >
                      Helps
                    </Text>
                    <Img
                      className="h-0.5 w-6"
                      src="images/img_line14.svg"
                      alt="lineFourteen_Five"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start pt-2 w-auto">
                      <Text
                        className="text-gray-500 text-sm w-auto"
                        size="txtPoppinsRegular14"
                      >
                        Contact
                      </Text>
                      <a
                        href="javascript:"
                        className="text-gray-500 text-sm w-auto"
                      >
                        <Text size="txtPoppinsRegular14">Faqs</Text>
                      </a>
                      <Text
                        className="text-gray-500 text-sm w-auto"
                        size="txtPoppinsRegular14"
                      >
                        Terms & Condition
                      </Text>
                      <a
                        href="javascript:"
                        className="text-gray-500 text-sm w-auto"
                      >
                        <Text size="txtPoppinsRegular14">Privacy Policy</Text>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[90px] md:mt-0 mt-[5px] w-auto">
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtPoppinsMedium18WhiteA700"
                    >
                      Proxy
                    </Text>
                    <Img
                      className="h-0.5 w-6"
                      src="images/img_line14.svg"
                      alt="lineFourteen_Six"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start pt-2 w-auto">
                      <Text
                        className="text-gray-500 text-sm w-auto"
                        size="txtPoppinsRegular14"
                      >
                        About
                      </Text>
                      <Text
                        className="text-gray-500 text-sm w-auto"
                        size="txtPoppinsRegular14"
                      >
                        Shop
                      </Text>
                      <Text
                        className="text-gray-500 text-sm w-auto"
                        size="txtPoppinsRegular14"
                      >
                        Product
                      </Text>
                      <Text
                        className="text-gray-500 text-sm w-auto"
                        size="txtPoppinsRegular14"
                      >
                        Track Order
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[90px] md:mt-0 mt-[5px] w-auto">
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtPoppinsMedium18WhiteA700"
                    >
                      Download Mobile App
                    </Text>
                    <Img
                      className="h-0.5 w-6"
                      src="images/img_line14.svg"
                      alt="lineFourteen_Seven"
                    />
                    <div className="flex flex-row gap-2 items-start justify-start pt-2 w-auto sm:w-full">
                      <FloatingInput
                        wrapClassName="bg-blue_gray-900 border-0 flex pb-2 pl-[35px] pr-[30px] pt-[26px] rounded top-[0] w-full"
                        className="font-medium p-0 placeholder:bg-blue_gray-900 placeholder:left-[35px] placeholder:text-gray-400 placeholder:top-[0] sm:px-5 text-base text-left text-white-A700 w-full"
                        name="appstore_One"
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
                        name="googleplay_One"
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
                <div className="bg-gray-900_01 flex flex-row items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] py-6 shadow-bs8 w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                    <Text
                      className="md:mt-0 my-[5px] text-gray-600 text-sm w-auto"
                      size="txtPoppinsRegular14Gray600"
                    >
                      Ecobazar eCommerce © 2021. All Rights Reserved
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-start w-auto">
                      <div className="bg-gray-900_01 border border-blue_gray-900 border-solid flex flex-col items-center justify-start p-1.5 rounded-[5px] w-[17%]">
                        <Img
                          className="h-[13px] my-0.5"
                          src="images/img_settings.svg"
                          alt="settings_Seven"
                        />
                      </div>
                      <div className="bg-gray-900_01 border border-blue_gray-900 border-solid flex flex-col items-center justify-start p-1.5 rounded-[5px] w-[17%]">
                        <Img
                          className="h-2.5 my-1"
                          src="images/img_settings_white_a700.svg"
                          alt="settings_Eight"
                        />
                      </div>
                      <div className="bg-gray-900_01 border border-blue_gray-900 border-solid flex flex-col items-end justify-end rounded-[5px] w-[17%]">
                        <Img
                          className="h-[18px] mt-2.5"
                          src="images/img_settings_white_a700_18x39.svg"
                          alt="settings_Nine"
                        />
                      </div>
                      <div className="bg-gray-900_01 border border-blue_gray-900 border-solid flex flex-col items-center justify-start p-1.5 rounded-[5px] w-[17%]">
                        <Img
                          className="h-[17px]"
                          src="images/img_user_red_a700.svg"
                          alt="user_Twelve"
                        />
                      </div>
                      <div className="h-8 relative w-[24%]">
                        <div className="absolute bg-gray-900_01 border border-blue_gray-900 border-solid flex flex-row h-full inset-[0] items-start justify-center m-auto pb-[5px] px-[5px] rounded-[5px] w-full">
                          <Img
                            className="h-[11px] mt-1 w-[11px]"
                            src="images/img_lock1.svg"
                            alt="lockOne_One"
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
            </div>
            <div className="absolute flex sm:flex-col flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto top-[0] w-full">
              <div
                className="bg-cover bg-no-repeat flex sm:flex-1 flex-col h-[373px] items-start justify-end p-[23px] sm:px-5 w-[17%] sm:w-full"
                style={{ backgroundImage: "url('images/img_group2571.svg')" }}
              >
                <Img
                  className="h-[85px] md:h-auto md:ml-[0] ml-[83px] mt-60 object-cover w-[29%]"
                  src="images/img_1904.png"
                  alt="1904_One"
                />
              </div>
              <div className="md:h-40 sm:h-[149px] h-[269px] sm:mt-0 mt-[11px] relative w-[12%] sm:w-full">
                <Img
                  className="absolute bottom-[0] h-[67px] inset-x-[0] mx-auto"
                  src="images/img_vector_blue_gray_900.svg"
                  alt="vector_Twenty"
                />
                <div className="absolute bottom-[20%] h-[119px] md:h-[84px] right-[0] w-[52%]">
                  <Img
                    className="absolute h-[84px] left-[0] top-[0]"
                    src="images/img_vector.svg"
                    alt="vector_TwentyOne"
                  />
                  <Img
                    className="absolute bottom-[0] h-[62px] right-[0]"
                    src="images/img_group7.svg"
                    alt="groupSeven_Five"
                  />
                </div>
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-[70px] items-end justify-end p-[3px] right-[7%] top-[0] w-[71px]"
                  style={{ backgroundImage: "url('images/img_group2572.svg')" }}
                >
                  <Img
                    className="h-[9px] mr-2 mt-[54px]"
                    src="images/img_user_blue_gray_900.svg"
                    alt="user_Thirteen"
                  />
                </div>
                <Img
                  className="absolute h-[149px] left-[0] top-[0]"
                  src="images/img_group5_blue_gray_900.svg"
                  alt="groupFive_Three"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[73px] items-center justify-start mb-[undefinedpx] mt-auto mx-auto w-full z-[1]">
          <List
            className="bg-white-A700 sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start max-w-[1320px] mx-auto md:px-5 shadow-bs10 w-full"
            orientation="horizontal"
          >
            <div className="hover:cursor-pointer flex flex-col gap-4 items-center justify-start hover:mx-0 py-10 hover:shadow-bs17 w-auto hover:w-full">
              <Img
                className="md:h-auto rounded-[50%] w-[72px]"
                src="images/img_icon_72x72.png"
                alt="icon"
              />
              <div className="flex flex-col gap-2 items-start justify-center w-auto">
                <Text
                  className="text-center text-gray-900_01 text-lg w-auto"
                  size="txtPoppinsSemiBold18"
                >
                  Free Shipping
                </Text>
                <Text
                  className="text-center text-gray-500 text-sm w-auto"
                  size="txtPoppinsRegular14"
                >
                  Free shipping with discount
                </Text>
              </div>
            </div>
            <div className="hover:cursor-pointer flex flex-col gap-4 items-center justify-start hover:mx-0 py-10 hover:shadow-bs17 w-auto hover:w-full">
              <Img
                className="md:h-auto rounded-[50%] w-[72px]"
                src="images/img_icon_72x72.png"
                alt="icon"
              />
              <div className="flex flex-col gap-2 items-start justify-center w-auto">
                <Text
                  className="text-center text-gray-900_01 text-lg w-auto"
                  size="txtPoppinsSemiBold18"
                >
                  Great Support 24/7
                </Text>
                <Text
                  className="text-center text-gray-500 text-sm w-auto"
                  size="txtPoppinsRegular14"
                >
                  Instant access to Contact
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 hover:cursor-pointer flex flex-col gap-4 items-center justify-start hover:mx-0 py-10 hover:shadow-bs17 shadow-bs17 w-auto hover:w-full">
              <Img
                className="md:h-auto rounded-[50%] w-[72px]"
                src="images/img_icon_1.png"
                alt="icon"
              />
              <div className="flex flex-col gap-2 items-start justify-center w-auto">
                <Text
                  className="text-center text-gray-900_01 text-lg w-auto"
                  size="txtPoppinsSemiBold18"
                >
                  100% Sucure Payment
                </Text>
                <Text
                  className="text-center text-gray-500 text-sm w-auto"
                  size="txtPoppinsRegular14"
                >
                  We ensure your money is save
                </Text>
              </div>
            </div>
            <div className="hover:cursor-pointer flex flex-col gap-4 items-center justify-start hover:mx-0 py-10 hover:shadow-bs17 w-auto hover:w-full">
              <Img
                className="md:h-auto rounded-[50%] w-[72px]"
                src="images/img_icon_72x72.png"
                alt="icon"
              />
              <div className="flex flex-col gap-2 items-start justify-center w-auto">
                <Text
                  className="text-center text-gray-900_01 text-lg w-auto"
                  size="txtPoppinsSemiBold18"
                >
                  Money-Back Guarantee
                </Text>
                <Text
                  className="text-center text-gray-500 text-sm w-auto"
                  size="txtPoppinsRegular14"
                >
                  30 days money-back
                </Text>
              </div>
            </div>
          </List>
          <div className="h-[5616px] md:px-5 relative w-full">
            <div className="flex flex-col items-center justify-start mb-[-44px] w-[85%] z-[1]">
              <div className="flex flex-col items-end justify-start w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1320px] w-full">
                  <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 w-auto"
                      size="txtPoppinsSemiBold40"
                    >
                      Featured Products
                    </Text>
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
                      alt="arrowleft_Eight"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[34px] w-full">
                  <div className="md:h-[226px] h-[434px] md:mt-0 mt-[22px] relative w-[9%] md:w-full">
                    <div className="absolute bottom-[18%] md:h-[110px] h-[116px] left-[0] w-1/4">
                      <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[89%]">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[5px] w-[59%] md:w-full">
                            <Img
                              className="h-[17px] ml-0.5 md:ml-[0]"
                              src="images/img_contrast_gray_100.svg"
                              alt="contrast_One"
                            />
                            <Img
                              className="h-[9px] ml-0.5 md:ml-[0] mt-1.5"
                              src="images/img_contrast_gray_100.svg"
                              alt="contrast_Two"
                            />
                            <Img
                              className="h-2.5 mt-3"
                              src="images/img_contrast_gray_100.svg"
                              alt="contrast_Three"
                            />
                          </div>
                          <Img
                            className="h-3.5 mt-[3px] w-[15px]"
                            src="images/img_contrast_gray_100_14x15.svg"
                            alt="contrast_Four"
                          />
                          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[7px] mt-[13px] w-[78%] md:w-full">
                            <Img
                              className="h-[9px]"
                              src="images/img_contrast_gray_100_14x15.svg"
                              alt="contrast_Five"
                            />
                            <div className="flex flex-row items-start justify-evenly mt-0.5 w-full">
                              <Img
                                className="h-[11px] mt-[3px]"
                                src="images/img_user_gray_100.svg"
                                alt="user_Three"
                              />
                              <Img
                                className="h-[9px]"
                                src="images/img_vector_gray_100.svg"
                                alt="vector_Seven"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Img
                        className="absolute h-[13px] right-[0] top-[14%] w-3"
                        src="images/img_contrast_gray_100_13x12.svg"
                        alt="contrast_Six"
                      />
                    </div>
                    <Img
                      className="absolute bottom-[41%] h-[19px] left-[17%]"
                      src="images/img_contrast_gray_100_13x12.svg"
                      alt="contrast_Seven"
                    />
                    <Img
                      className="absolute bottom-[15%] h-3.5 left-[17%] w-[13px]"
                      src="images/img_user_gray_100_14x13.svg"
                      alt="user_Four"
                    />
                    <div className="absolute bottom-[19%] flex flex-row gap-[5px] items-start justify-center left-[31%] w-[29%]">
                      <Img
                        className="h-[97px] mt-1"
                        src="images/img_close_gray_100.svg"
                        alt="close_Two"
                      />
                      <div className="flex flex-col items-start justify-start w-[52%]">
                        <Img
                          className="h-3.5"
                          src="images/img_contrast_gray_100_13x12.svg"
                          alt="contrast_Eight"
                        />
                        <Img
                          className="h-3 ml-0.5 md:ml-[0]"
                          src="images/img_contrast_gray_100.svg"
                          alt="contrast_Nine"
                        />
                      </div>
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat flex md:h-[226px] h-[434px] inset-[0] justify-end m-auto sm:pr-5 pr-[33px] py-[33px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group2577.svg')",
                      }}
                    >
                      <div className="h-[207px] md:h-[226px] mb-[19px] mt-auto w-[77%]">
                        <div className="absolute flex inset-y-[0] left-[0] my-auto w-[88%]">
                          <div className="flex h-[207px] justify-end my-auto w-[47%]">
                            <Img
                              className="h-[58px] mt-auto"
                              src="images/img_close_gray_100_58x20.svg"
                              alt="close_Three"
                            />
                            <Img
                              className="absolute h-[207px] inset-[0] justify-center m-auto"
                              src="images/img_vector_gray_100_207x45.svg"
                              alt="vector_Eight"
                            />
                          </div>
                          <Img
                            className="h-[122px] mb-[23px] ml-[-6.93px] mt-auto z-[1]"
                            src="images/img_vector_gray_100_122x57.svg"
                            alt="vector_Nine"
                          />
                        </div>
                        <Img
                          className="absolute h-[166px] inset-y-[0] my-auto right-[0]"
                          src="images/img_vector_gray_100_166x52.svg"
                          alt="vector_Ten"
                        />
                      </div>
                      <Img
                        className="absolute bottom-[13%] h-[15px] inset-x-[0] mx-auto"
                        src="images/img_user_gray_100_14x13.svg"
                        alt="user_Five"
                      />
                    </div>
                  </div>
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[82%] md:w-full"
                    orientation="horizontal"
                  >
                    <C05HomepageProductx
                      className="md:h-[397px] h-[407px] relative w-full"
                      sale="Sale"
                      fifty="50%"
                    />
                    <C05HomepageProductx1 className="h-[407px] relative w-full" />
                    <C05HomepageProductx2 className="md:h-[397px] h-[407px] relative w-full" />
                    <C05HomepageProductx1
                      className="h-[407px] relative w-full"
                      productimage="images/img_image_302x302.png"
                      productname="Ladies Finger"
                    />
                  </List>
                </div>
                <Img
                  className="h-[70px] md:h-auto mt-1 object-cover w-[5%]"
                  src="images/img_growthcloseup_70x79.png"
                  alt="growthcloseup_Two"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex md:h-[1136px] h-[459px] sm:h-[510px] justify-end relative w-full">
                  <div className="bg-gradient3  flex flex-col h-full items-center justify-end mt-auto mx-auto p-[27px] sm:px-5 shadow-bs5 w-full">
                    <div className="flex flex-col items-center justify-start mt-[50px] w-4/5 md:w-full">
                      <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                        <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1320px] w-full">
                          <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 w-auto"
                              size="txtPoppinsSemiBold40"
                            >
                              Shop by Top Categories
                            </Text>
                          </div>
                          <div className="flex flex-row gap-3 items-center justify-center w-auto">
                            <a
                              href="javascript:"
                              className="text-base text-green-A700 w-auto"
                            >
                              <Text size="txtPoppinsMedium16GreenA700">
                                View All
                              </Text>
                            </a>
                            <Img
                              className="h-3 w-[15px]"
                              src="images/img_arrowleft.svg"
                              alt="arrowleft"
                            />
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <Button
                            className="border border-gray-300_01 border-solid flex h-[45px] items-center justify-center mb-[163px] md:mt-0 mt-[84px] rotate-[180deg] w-[45px]"
                            shape="round"
                            color="white_A700"
                            size="lg"
                            variant="fill"
                          >
                            <Img
                              src="images/img_arrowdown_gray_900.svg"
                              alt="arrowdown"
                            />
                          </Button>
                          <List
                            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5"
                            orientation="horizontal"
                          >
                            <div className="bg-white-A700 border hover:border-0 border-gray-200_01 border-solid hover:cursor-pointer flex flex-col gap-5 items-center justify-start pb-6 pt-8 rounded-md hover:shadow-bs2 shadow-bs2 w-auto hover:w-full">
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
                            <C03HomepageCategories className="bg-white-A700 border hover:border-0 border-gray-200_01 border-solid hover:cursor-pointer flex flex-col gap-5 items-center justify-start pb-6 pt-8 rounded-md hover:shadow-bs2 w-auto hover:w-full" />
                            <div className="bg-white-A700 border hover:border-0 border-gray-200_01 border-solid hover:cursor-pointer flex flex-col gap-5 items-center justify-start pb-6 pt-8 rounded-md hover:shadow-bs2 w-auto hover:w-full">
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
                                  Fish
                                </Text>
                                <Text
                                  className="text-center text-gray-600 text-sm w-auto"
                                  size="txtPoppinsRegular14Gray600"
                                >
                                  34 Products
                                </Text>
                              </div>
                            </div>
                            <div className="bg-white-A700 border hover:border-0 border-gray-200_01 border-solid hover:cursor-pointer flex flex-col gap-5 items-center justify-start pb-6 pt-8 rounded-md hover:shadow-bs2 w-auto hover:w-full">
                              <Img
                                className="h-20 w-20"
                                src="images/img_meat1_gray_900.svg"
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
                            <div className="bg-white-A700 border hover:border-0 border-gray-200_01 border-solid hover:cursor-pointer flex flex-col gap-5 items-center justify-start pb-6 pt-8 rounded-md hover:shadow-bs2 w-auto hover:w-full">
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
                          </List>
                          <div className="md:h-[210px] h-[291px] relative w-1/5 md:w-full">
                            <Img
                              className="absolute bottom-[0] h-[91px] object-cover right-[15%] w-[31%]"
                              src="images/img_1903.png"
                              alt="1903"
                            />
                            <div className="absolute bg-white-A700 border border-gray-200_01 border-solid flex flex-col gap-5 items-center justify-end left-[0] pb-6 pt-8 rounded-md top-[0] w-auto">
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
                            <Button
                              className="absolute border border-gray-300_01 border-solid flex h-[45px] items-center justify-center right-[0] top-[29%] w-[45px]"
                              shape="round"
                              color="white_A700"
                              size="lg"
                              variant="fill"
                            >
                              <Img
                                src="images/img_arrowleft_gray_900.svg"
                                alt="arrowleft_One"
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute bottom-[9%] h-[139px] object-cover right-[0]"
                    src="images/img_group7_gray_300_01.png"
                    alt="groupSeven"
                  />
                </div>
              </div>
              <div className="h-[4576px] relative w-full">
                <div className="sm:h-[452px] h-[617px] md:h-[844px] mb-[-106.62px] mx-auto py-6 w-[99%] md:w-full z-[1]">
                  <div className="flex flex-col gap-[26px] h-full items-start justify-start ml-auto mr-[261px] my-auto w-auto">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="leading-[120.00%] sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01"
                        size="txtPoppinsSemiBold40"
                      >
                        <>
                          100% Trusted
                          <br />
                          Organic Food Store
                        </>
                      </Text>
                    </div>
                    <List
                      className="flex flex-col gap-[26px] items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex sm:flex-1 flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
                        <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-auto sm:w-full">
                          <Button
                            className="flex h-6 items-center justify-center rounded-[50%] w-6"
                            shape="circle"
                            color="green_A700"
                            size="xs"
                            variant="fill"
                          >
                            <Img
                              className="h-4"
                              src="images/img_check1.svg"
                              alt="checkOne"
                            />
                          </Button>
                          <Text
                            className="text-gray-900_01 text-lg w-auto"
                            size="txtPoppinsMedium18"
                          >
                            Healthy & natural food for lovers of healthy food.
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start sm:pl-5 pl-[34px] w-auto sm:w-full">
                          <Text
                            className="leading-[150.00%] max-w-[500px] md:max-w-full text-gray-600 text-sm"
                            size="txtPoppinsRegular14Gray600"
                          >
                            Ut quis tempus erat. Phasellus euismod bibendum
                            magna non tristique. Pellentesque semper vestibulum
                            elit sed condimentum. Nunc pretium fermentum
                            interdum.{" "}
                          </Text>
                        </div>
                      </div>
                      <div className="flex sm:flex-1 flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
                        <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-auto sm:w-full">
                          <Button
                            className="flex h-6 items-center justify-center rounded-[50%] w-6"
                            shape="circle"
                            color="green_A700"
                            size="xs"
                            variant="fill"
                          >
                            <Img
                              className="h-4"
                              src="images/img_check1.svg"
                              alt="checkOne"
                            />
                          </Button>
                          <Text
                            className="text-gray-900_01 text-lg w-auto"
                            size="txtPoppinsMedium18"
                          >
                            Every day fresh and quality products for you.
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start sm:pl-5 pl-8 w-auto sm:w-full">
                          <Text
                            className="leading-[150.00%] max-w-[504px] md:max-w-full text-gray-600 text-sm"
                            size="txtPoppinsRegular14Gray600"
                          >
                            Maecenas vehicula a justo quis laoreet. Sed in
                            placerat nibh, a posuere ex. Morbi sem neque,
                            aliquam sed orci et, rhoncus lobortis felis. Sed
                            vestibulum nisl sit amet sapien.
                          </Text>
                        </div>
                      </div>
                    </List>
                    <div className="bg-green-A700 flex flex-row gap-4 items-center justify-center px-10 sm:px-5 py-4 rounded-[25px] w-auto">
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtPoppinsSemiBold16WhiteA700"
                      >
                        Shop Now
                      </Text>
                      <Img
                        className="h-3 w-[15px]"
                        src="images/img_arrowleft_white_a700.svg"
                        alt="arrowleft_Seven"
                      />
                    </div>
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-start justify-center m-auto pb-[45px] md:px-10 sm:px-5 px-[45px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group2576.png')",
                    }}
                  >
                    <div className="flex md:flex-col flex-row gap-6 items-start justify-start md:ml-[0] ml-[190px] w-[46%] md:w-full">
                      <div className="md:h-[424px] h-[488px] mb-6 relative w-[43%] md:w-full">
                        <div className="absolute md:h-[400px] h-[456px] right-[0] top-[0] w-[81%]">
                          <Img
                            className="absolute h-[100px] object-cover right-[1%] top-[0] w-[33%]"
                            src="images/img_image_100x91.png"
                            alt="image_TwentySix"
                          />
                          <Img
                            className="absolute bottom-[0] h-[400px] inset-x-[0] mx-auto object-cover rounded-lg w-full"
                            src="images/img_image_400x276.png"
                            alt="image_TwentySeven"
                          />
                        </div>
                        <Img
                          className="absolute bottom-[0] h-[104px] left-[0] object-cover w-[104px]"
                          src="images/img_image_104x104.png"
                          alt="image_TwentyEight"
                        />
                      </div>
                      <Img
                        className="h-[457px] sm:h-auto md:mt-0 mt-14 object-cover rounded-lg w-[55%] md:w-full"
                        src="images/img_image_457x444.png"
                        alt="image_TwentyNine"
                      />
                    </div>
                  </div>
                </div>
                <div className="h-[4065px] mt-auto mx-auto w-full">
                  <div className="md:h-[132px] sm:h-[209px] h-[454px] mb-[-199.3px] mx-auto w-full z-[1]">
                    <Img
                      className="absolute h-[146px] object-cover right-[5%] top-[0] w-[6%]"
                      src="images/img_objects2.png"
                      alt="objectsTwo"
                    />
                    <div className="absolute bottom-[0] md:h-[331px] h-[348px] sm:h-[408px] inset-x-[0] mx-auto w-full">
                      <div className="absolute h-[331px] sm:h-[408px] inset-x-[0] mx-auto top-[0] w-full">
                        <Img
                          className="h-[331px] m-auto object-cover w-full"
                          src="images/img_bg_331x1920.png"
                          alt="bg_One"
                        />
                        <div className="absolute gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 h-max inset-[0] items-center justify-center m-auto w-auto">
                          <div className="bg-white-A700_11 h-[174px] md:h-[84px] py-10 relative rounded-lg w-full">
                            <Text
                              className="absolute inset-x-[0] mx-auto md:text-5xl sm:text-[42px] text-[56px] text-green-A700 top-[18%] w-max"
                              size="txtPoppinsLight56"
                            >
                              37+
                            </Text>
                            <Text
                              className="absolute bottom-[23%] inset-x-[0] mx-auto text-center text-lg text-white-A700 w-max"
                              size="txtPoppinsRegular18WhiteA700"
                            >
                              Years of Hard Work
                            </Text>
                          </div>
                          <div className="bg-white-A700_11 flex flex-col items-center justify-start py-10 rounded-lg w-full">
                            <Text
                              className="md:text-5xl sm:text-[42px] text-[56px] text-green-A700 w-auto"
                              size="txtPoppinsLight56"
                            >
                              500k+
                            </Text>
                            <Text
                              className="text-center text-lg text-white-A700 w-auto"
                              size="txtPoppinsRegular18WhiteA700"
                            >
                              Happy Customer
                            </Text>
                          </div>
                          <div className="bg-white-A700_11 h-[174px] md:h-[84px] py-10 relative rounded-lg w-full">
                            <Text
                              className="absolute inset-x-[0] mx-auto md:text-5xl sm:text-[42px] text-[56px] text-green-A700 top-[18%] w-max"
                              size="txtPoppinsLight56"
                            >
                              28
                            </Text>
                            <Text
                              className="absolute bottom-[23%] inset-x-[0] mx-auto text-center text-lg text-white-A700 w-max"
                              size="txtPoppinsRegular18WhiteA700"
                            >
                              Qualified Team Member
                            </Text>
                          </div>
                          <div className="bg-white-A700_11 flex flex-col items-center justify-start py-10 rounded-lg w-full">
                            <Text
                              className="md:text-5xl sm:text-[42px] text-[56px] text-green-A700 w-auto"
                              size="txtPoppinsLight56"
                            >
                              750k+
                            </Text>
                            <Text
                              className="text-center text-lg text-white-A700 w-auto"
                              size="txtPoppinsRegular18WhiteA700"
                            >
                              Monthly Orders
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Img
                        className="absolute h-[169px] object-cover right-[0] top-[4%]"
                        src="images/img_group8.png"
                        alt="groupEight"
                      />
                      <Img
                        className="absolute bottom-[0] h-[95px] right-[5%]"
                        src="images/img_globe.svg"
                        alt="globe"
                      />
                      <Img
                        className="absolute h-[233px] left-[0] object-cover top-[7%] w-[12%]"
                        src="images/img_pawelczerwinsk.png"
                        alt="pawelczerwinsk"
                      />
                    </div>
                  </div>
                  <div className="h-[3810px] mt-auto mx-auto w-full">
                    <div className="sm:h-[696px] h-[791px] md:h-[816px] mb-[-95.62px] mx-auto sm:pr-5 pr-[21px] w-[98%] md:w-full z-[1]">
                      <Img
                        className="h-[791px] m-auto object-cover"
                        src="images/img_bg_gray_300_01.png"
                        alt="bg"
                      />
                      <div className="absolute bottom-[15%] flex md:flex-col flex-row md:gap-10 gap-[76px] items-start justify-center right-[5%] w-[79%]">
                        <div className="flex md:flex-col flex-row gap-6 items-center justify-between mb-[50px] w-[90%] md:w-full">
                          <C05HomepageBannar
                            className="h-[360px] relative w-1/2 md:w-full"
                            priceTwo="$11.99"
                            shopnowOne="Shop Now"
                            arrowleftFive="images/img_arrowleft_white_a700.svg"
                          />
                          <C05HomepageBannar1
                            className="h-[360px] relative w-1/2 md:w-full"
                            shopnowTwo="Shop Now"
                            arrowleftSix="images/img_arrowleft_white_a700.svg"
                          />
                        </div>
                        <Img
                          className="h-[77px] sm:h-auto md:mt-0 mt-[333px] object-cover w-[6%] md:w-full"
                          src="images/img_184.png"
                          alt="OneHundredEightyFour"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                            <Img
                              className="h-[157px] md:mt-0 mt-[370px]"
                              src="images/img_group10.svg"
                              alt="groupTen"
                            />
                            <Img
                              className="md:flex-1 h-[65px] sm:h-auto md:ml-[0] ml-[120px] md:mt-0 mt-[480px] object-cover w-[4%] md:w-full"
                              src="images/img_1902.png"
                              alt="1902"
                            />
                            <div className="flex md:flex-1 flex-col gap-[39px] items-center justify-start ml-6 md:ml-[0] w-[72%] md:w-full">
                              <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
                                <div className="flex flex-col gap-[34px] items-center justify-start w-full">
                                  <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1320px] w-full">
                                    <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                                      <Text
                                        className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 w-auto"
                                        size="txtPoppinsSemiBold40"
                                      >
                                        Best Seller Products
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-3 items-center justify-center w-auto">
                                      <a
                                        href="javascript:"
                                        className="text-base text-green-A700 w-auto"
                                      >
                                        <Text size="txtPoppinsMedium16GreenA700">
                                          View All
                                        </Text>
                                      </a>
                                      <Img
                                        className="h-3 w-[15px]"
                                        src="images/img_arrowleft.svg"
                                        alt="arrowleft_Two"
                                      />
                                    </div>
                                  </div>
                                  <List
                                    className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center w-full"
                                    orientation="horizontal"
                                  >
                                    <C02HomepageBoxLayoutProductsx1
                                      className="bg-white-A700 hover:border border hover:border-gray-300_01 border-gray-300_01 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start rounded-lg hover:shadow-bs2 shadow-bs2 hover:w-full w-full"
                                      image="images/img_image.png"
                                      greenappletext="Green Apple"
                                    />
                                    <C02HomepageBoxLayoutProductsx className="bg-white-A700 hover:border border hover:border-gray-300_01 border-gray-300_01 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start rounded-lg hover:shadow-bs2 hover:w-full w-full" />
                                    <C02HomepageBoxLayoutProductsx
                                      className="bg-white-A700 hover:border border hover:border-gray-300_01 border-gray-300_01 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start rounded-lg hover:shadow-bs2 hover:w-full w-full"
                                      productimage="images/img_image_246x246.png"
                                      productname="Green Lettuce"
                                    />
                                    <C02HomepageBoxLayoutProductsx1 className="bg-white-A700 hover:border border hover:border-gray-300_01 border-gray-300_01 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start rounded-lg hover:shadow-bs2 shadow-bs2 hover:w-full w-full" />
                                    <C02HomepageBoxLayoutProductsx
                                      className="bg-white-A700 hover:border border hover:border-gray-300_01 border-gray-300_01 hover:border-solid border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start rounded-lg hover:shadow-bs2 hover:w-full w-full"
                                      productimage="images/img_image_20.png"
                                      productname="Corn"
                                    />
                                  </List>
                                </div>
                              </div>
                              <div className="md:h-[432px] h-[436px] relative w-full">
                                <Img
                                  className="absolute bottom-[0] h-20 object-cover right-[0] w-[7%]"
                                  src="images/img_growthcloseup.png"
                                  alt="growthcloseup"
                                />
                                <div className="absolute flex inset-[0] m-auto w-[1320px] md:w-full">
                                  <div className="flex my-auto w-[84%] md:w-full">
                                    <div className="flex my-auto w-[70%] md:w-full">
                                      <div className="flex flex-col gap-4 items-start justify-start my-auto w-auto">
                                        <Text
                                          className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl w-auto"
                                          size="txtPoppinsMedium24"
                                        >
                                          Hot Deals
                                        </Text>
                                        <C02HomepageBoxLayoutProduct
                                          className="md:h-[114px] h-[116px] relative w-[424px] sm:w-full"
                                          productimage="images/img_image.png"
                                          productname="Green Apple"
                                        />
                                        <C02HomepageBoxLayoutProduct1 className="flex flex-col items-center justify-start w-full" />
                                        <C02HomepageBoxLayoutProduct
                                          className="md:h-[114px] h-[116px] relative w-[424px] sm:w-full"
                                          productimage="images/img_image_6.png"
                                          productname="Green Lettuce"
                                        />
                                      </div>
                                      <div className="flex flex-col gap-4 items-start justify-start ml-[-88px] my-auto w-auto z-[1]">
                                        <Text
                                          className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl w-auto"
                                          size="txtPoppinsMedium24"
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
                                        className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl w-auto"
                                        size="txtPoppinsMedium24"
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
                                    className="h-[432px] ml-[-88px] my-auto w-[24%] z-[1]"
                                    startingat2399={
                                      <Text className="font-semibold leading-[120.00%] md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900_01">
                                        <span className="text-gray-900_01 font-poppins">
                                          Save 37%
                                        </span>
                                        <span className="text-gray-900_01 font-poppins font-normal">
                                          <>
                                            {" "}
                                            on
                                            <br />
                                            Every Order
                                          </>
                                        </span>
                                      </Text>
                                    }
                                    shopnow="Shop Now"
                                    arrowleftThree="images/img_arrowleft.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <Img
                              className="h-[139px] md:h-auto md:ml-[0] ml-[111px] md:mt-0 mt-[427px] object-cover"
                              src="images/img_group1.png"
                              alt="groupOne"
                            />
                          </div>
                        </div>
                        <div className="bg-gray-100 flex flex-col items-center justify-start mt-[76px] w-full">
                          <div className="md:h-[1024px] sm:h-[1548px] h-[764px] relative w-full">
                            <div className="md:h-[729px] h-[764px] sm:h-[891px] m-auto w-full">
                              <div className="absolute h-[729px] sm:h-[891px] inset-x-[0] mx-auto top-[0] w-[97%] md:w-full">
                                <div className="flex sm:flex-col flex-row md:gap-10 h-full items-end justify-between m-auto w-full">
                                  <Img
                                    className="h-[163px] sm:mt-0 mt-[565px]"
                                    src="images/img_vector_gray_300_01.svg"
                                    alt="vector"
                                  />
                                  <div className="md:h-[374px] sm:h-[728px] h-[729px] relative w-[22%] sm:w-full">
                                    <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[91%]">
                                      <div className="flex flex-col md:gap-10 gap-[394px] justify-start w-full">
                                        <div className="flex flex-col items-center justify-start w-full">
                                          <div className="flex flex-row items-start justify-between w-full">
                                            <Img
                                              className="h-[198px]"
                                              src="images/img_vector_gray_300_01_198x116.svg"
                                              alt="vector_One"
                                            />
                                            <Img
                                              className="h-[141px]"
                                              src="images/img_vector_gray_300_01_141x192.svg"
                                              alt="vector_Two"
                                            />
                                          </div>
                                        </div>
                                        <Img
                                          className="h-[136px] md:ml-[0] ml-[89px]"
                                          src="images/img_group5.svg"
                                          alt="groupFive"
                                        />
                                      </div>
                                    </div>
                                    <Img
                                      className="absolute bottom-[16%] h-[289px] right-[3%]"
                                      src="images/img_vector_gray_300_01_289x149.svg"
                                      alt="vector_Three"
                                    />
                                    <Img
                                      className="absolute h-28 right-[5%] top-[22%]"
                                      src="images/img_group3.svg"
                                      alt="groupThree"
                                    />
                                    <div
                                      className="absolute bg-cover bg-no-repeat flex flex-col h-[62px] items-start justify-end p-2.5 right-[0] top-[0] w-[12%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group2574.png')",
                                      }}
                                    >
                                      <Img
                                        className="h-9 mt-1"
                                        src="images/img_contrast.svg"
                                        alt="contrast"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  className="absolute h-[241px] left-[4%] top-[0]"
                                  src="images/img_group1_gray_300_01.svg"
                                  alt="groupOne_One"
                                />
                              </div>
                              <Img
                                className="absolute h-[11px] left-[1%] top-[0]"
                                src="images/img_vector_gray_300_01_11x5.svg"
                                alt="vector_Four"
                              />
                              <div
                                className="absolute bg-cover bg-no-repeat flex flex-col h-[65px] items-end justify-start left-[0] p-3.5 top-[0] w-[8%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group2573.svg')",
                                }}
                              >
                                <Img
                                  className="h-6 mb-2.5"
                                  src="images/img_settings_gray_300_01.svg"
                                  alt="settings"
                                />
                              </div>
                              <Img
                                className="absolute h-40 left-[0] top-[11%]"
                                src="images/img_group10_gray_300_01.svg"
                                alt="groupTen_One"
                              />
                              <Img
                                className="absolute bottom-[22%] h-[157px] left-[6%]"
                                src="images/img_group4.svg"
                                alt="groupFour"
                              />
                              <Img
                                className="absolute bottom-[32%] h-[234px] left-[0]"
                                src="images/img_group6.svg"
                                alt="groupSix"
                              />
                              <Img
                                className="absolute bottom-[0] h-10 left-[0]"
                                src="images/img_group7_gray_300_01_40x107.svg"
                                alt="groupSeven_One"
                              />
                              <Img
                                className="absolute h-[91px] left-[28%] object-cover top-[16%] w-[4%]"
                                src="images/img_410.png"
                                alt="FourHundredTen"
                              />
                            </div>
                            <div className="absolute md:h-[60px] h-[77px] inset-x-[0] mx-auto top-[10%] w-[1920px] md:w-full">
                              <Text
                                className="absolute inset-x-[0] mx-auto text-base text-center text-green-A700 top-[0] uppercase w-max"
                                size="txtSegoeScript16"
                              >
                                Blog
                              </Text>
                              <Text
                                className="absolute bottom-[-1%] inset-x-[0] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900_01 w-max"
                                size="txtPoppinsSemiBold40"
                              >
                                Latest News
                              </Text>
                            </div>
                            <List
                              className="absolute bottom-[10%] sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 inset-x-[0] justify-start mx-auto w-auto"
                              orientation="horizontal"
                            >
                              <C01HomepageBlogcard className="hover:cursor-pointer flex flex-col items-start justify-start hover:shadow-bs3 shadow-bs3 w-auto hover:w-full sm:w-full" />
                              <C01HomepageBlogcard1
                                className="hover:cursor-pointer flex flex-col items-start justify-start hover:shadow-bs3 w-auto hover:w-full sm:w-full"
                                datetext="23"
                                descriptiontext="Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum."
                              />
                              <C01HomepageBlogcard1
                                className="hover:cursor-pointer flex flex-col items-start justify-start hover:shadow-bs3 w-auto hover:w-full sm:w-full"
                                userimage="images/img_image_25.png"
                                datetext="18"
                                monthtext="Nov"
                                descriptiontext="Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum."
                              />
                            </List>
                          </div>
                        </div>
                        <div className="bg-gradient4  sm:h-[442px] h-[504px] md:h-[945px] pt-[61px] relative w-full">
                          <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-5 items-start justify-start right-[3%] w-[89%]">
                            <Img
                              className="h-[111px] sm:h-auto md:mt-0 mt-[368px] object-cover w-[7%] md:w-full"
                              src="images/img_38.png"
                              alt="ThirtyEight"
                            />
                            <div className="h-[294px] md:h-[602px] sm:h-[880px] mb-[70px] md:ml-[0] ml-[9px] md:mt-0 mt-[78px] relative w-[82%] md:w-full">
                              <Img
                                className="absolute h-[90px] object-cover right-[0] top-[0] w-[8%]"
                                src="images/img_growthcloseup.png"
                                alt="growthcloseup_One"
                              />
                              <List
                                className="absolute bottom-[0] sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start left-[0] w-auto"
                                orientation="horizontal"
                              >
                                {c01HomepageColumnuserPropList.map(
                                  (props, index) => (
                                    <React.Fragment
                                      key={`C01HomepageColumnuser${index}`}
                                    >
                                      <C01HomepageColumnuser
                                        className="bg-white-A700 flex flex-col gap-4 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs4 w-auto sm:w-full"
                                        {...props}
                                      />
                                    </React.Fragment>
                                  ),
                                )}
                              </List>
                            </div>
                            <Img
                              className="h-48 ml-24 md:ml-[0]"
                              src="images/img_group12.svg"
                              alt="groupTwelve"
                            />
                          </div>
                          <div className="absolute flex md:flex-col flex-row md:gap-10 inset-x-[0] items-center justify-between max-w-[1920px] mx-auto md:px-10 sm:px-5 px-[300px] top-[13%] w-full">
                            <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                              <Text
                                className="text-base text-green-A700 uppercase w-auto"
                                size="txtSegoeScript16"
                              >
                                Testimonial
                              </Text>
                              <Text
                                className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 w-auto"
                                size="txtPoppinsSemiBold40"
                              >
                                What Our Customer Says
                              </Text>
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
                                  alt="arrowdown_One"
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
                                  alt="arrowleft_Four"
                                />
                              </Button>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="h-[197px]"
                          src="images/img_companylogo_gray_300_01.svg"
                          alt="companylogo"
                        />
                        <div className="flex md:flex-col flex-row gap-6 items-center justify-center w-[69%] md:w-full">
                          <C05HomepageOurlocation className="bg-white-A700 border border-green-700_33 border-solid flex flex-col gap-4 items-start justify-start p-5 rounded-lg w-auto" />
                          <C05HomepageContactus className="bg-white-A700 border border-green-700_33 border-solid flex flex-col gap-4 items-start justify-start p-5 rounded-lg w-auto" />
                          <C05HomepageColumnlock
                            className="bg-white-A700 border border-green-700_33 border-solid flex flex-col gap-3.5 items-start justify-start p-5 rounded-lg w-auto md:w-full"
                            subscribebuttontext="Subscribe"
                          />
                        </div>
                        <C05HomepageFooter className="bg-gray-900_01 flex items-center justify-center mt-20 w-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage3Page;
