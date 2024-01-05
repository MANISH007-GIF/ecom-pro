import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Line, List, Text } from "components";
import C01HomepageBannar from "components/C01HomepageBannar";
import C01HomepageBannar1 from "components/C01HomepageBannar1";
import C01HomepageBannar2 from "components/C01HomepageBannar2";
import C01HomepageBannar3 from "components/C01HomepageBannar3";
import C01HomepageBannar4 from "components/C01HomepageBannar4";
import C01HomepageBannarbig from "components/C01HomepageBannarbig";
import C01HomepageBigproducts from "components/C01HomepageBigproducts";
import C01HomepageBlogcard from "components/C01HomepageBlogcard";
import C01HomepageBlogcard1 from "components/C01HomepageBlogcard1";
import C01HomepageColumnThree from "components/C01HomepageColumnThree";
import C01HomepageColumnuser from "components/C01HomepageColumnuser";
import C01HomepageDiscountbannar from "components/C01HomepageDiscountbannar";
import C01HomepageHeading from "components/C01HomepageHeading";
import C01HomepageProduct5n from "components/C01HomepageProduct5n";
import C01HomepageProduct5n1 from "components/C01HomepageProduct5n1";
import C01HomepageProduct5n2 from "components/C01HomepageProduct5n2";
import Header from "components/Header";

const HomepagePage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  const c01HomepageColumnuserPropList = [
    {},
    { reviewername: "Dianne Russell" },
    { reviewername: "Eleanor Pena" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start max-w-[1319px] mt-6 mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
            <C01HomepageBannarbig
              className="bg-cover bg-gradient  bg-no-repeat flex md:flex-1 flex-col h-[600px] items-start justify-center p-[60px] md:px-10 sm:px-5 rounded-[10px] w-[67%] md:w-full"
              style={{ backgroundImage: "url('images/img_bannarbig.png')" }}
            />
            <div className="flex md:flex-1 flex-col gap-6 items-center justify-start w-[33%] md:w-full">
              <C01HomepageBannar className="h-72 relative w-full" />
              <C01HomepageBannar1 className="h-72 relative w-full" />
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1320px] mt-6 mx-auto p-10 md:px-5 rounded-lg shadow-bs9 w-full">
          <List
            className="md:flex-1 sm:flex-col flex-row gap-[5px] grid sm:grid-cols-1 grid-cols-2 w-1/2 md:w-full"
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
            className="md:flex-1 sm:flex-col flex-row gap-[5px] grid sm:grid-cols-1 grid-cols-2 w-1/2 md:w-full"
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
        <div className="flex flex-col items-center justify-start max-w-[1320px] mt-[57px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <C01HomepageHeading className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1320px] w-full" />
            <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-center min-h-[auto] w-full">
              <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300_01 pb-6 pt-4 rounded-[5px] hover:shadow-bs2 hover:w-full w-full">
                <Img
                  className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                  src="images/img_image1.png"
                  alt="imageOne"
                />
                <Text
                  className="text-center text-gray-900_01 text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  Fresh Fruit
                </Text>
              </div>
              <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300_01 pb-6 pt-4 rounded-[5px] hover:shadow-bs2 shadow-bs2 hover:w-full w-full">
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
              <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300_01 pb-6 pt-4 rounded-[5px] hover:shadow-bs2 hover:w-full w-full">
                <Img
                  className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                  src="images/img_image1_1.png"
                  alt="imageOne"
                />
                <Text
                  className="text-center text-gray-900_01 text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  Meat & Fish
                </Text>
              </div>
              <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300_01 pb-6 pt-4 rounded-[5px] hover:shadow-bs2 hover:w-full w-full">
                <Img
                  className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                  src="images/img_image1_2.png"
                  alt="imageOne"
                />
                <Text
                  className="text-center text-gray-900_01 text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  Snacks
                </Text>
              </div>
              <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300_01 pb-6 pt-4 rounded-[5px] hover:shadow-bs2 hover:w-full w-full">
                <Img
                  className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                  src="images/img_image1_3.png"
                  alt="imageOne"
                />
                <Text
                  className="text-center text-gray-900_01 text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  Beverages
                </Text>
              </div>
              <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300_01 pb-6 pt-4 rounded-[5px] hover:shadow-bs2 hover:w-full w-full">
                <Img
                  className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                  src="images/img_image1_4.png"
                  alt="imageOne"
                />
                <Text
                  className="text-center text-gray-900_01 text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  Beauty & Health
                </Text>
              </div>
              <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300_01 pb-6 pt-4 rounded-[5px] hover:shadow-bs2 hover:w-full w-full">
                <Img
                  className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                  src="images/img_image1_5.png"
                  alt="imageOne"
                />
                <Text
                  className="text-center text-gray-900_01 text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  Bread & Bakery
                </Text>
              </div>
              <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300_01 pb-6 pt-4 rounded-[5px] hover:shadow-bs2 hover:w-full w-full">
                <Img
                  className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                  src="images/img_image1_6.png"
                  alt="imageOne"
                />
                <Text
                  className="text-center text-gray-900_01 text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  Baking Needs
                </Text>
              </div>
              <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300_01 pb-6 pt-4 rounded-[5px] hover:shadow-bs2 hover:w-full w-full">
                <Img
                  className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                  src="images/img_image1_7.png"
                  alt="imageOne"
                />
                <Text
                  className="text-center text-gray-900_01 text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  Cooking
                </Text>
              </div>
              <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300_01 pb-6 pt-4 rounded-[5px] hover:shadow-bs2 hover:w-full w-full">
                <Img
                  className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                  src="images/img_image1_8.png"
                  alt="imageOne"
                />
                <Text
                  className="text-center text-gray-900_01 text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  Diabetic Food
                </Text>
              </div>
              <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300_01 pb-6 pt-4 rounded-[5px] hover:shadow-bs2 hover:w-full w-full">
                <Img
                  className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                  src="images/img_image1_9.png"
                  alt="imageOne"
                />
                <Text
                  className="text-center text-gray-900_01 text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  Dish Detergents
                </Text>
              </div>
              <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col gap-4 items-center justify-center outline outline-[1px] outline-gray-300_01 pb-6 pt-4 rounded-[5px] hover:shadow-bs2 hover:w-full w-full">
                <Img
                  className="h-[130px] md:h-auto object-cover w-[190px] sm:w-full"
                  src="images/img_image1_10.png"
                  alt="imageOne"
                />
                <Text
                  className="text-center text-gray-900_01 text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  Oil
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1320px] mt-12 mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[23px] items-center justify-start w-full">
            <C01HomepageHeading
              className="flex flex-row md:gap-10 items-center justify-between max-w-[1320px] w-full"
              text="Popular Products"
            />
            <List
              className="sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col relative w-full">
                <C01HomepageProduct5n className="md:h-[317px] h-[327px] mx-auto w-full" />
                <C01HomepageProduct5n1 className="h-[327px] mt-[-0.5px] mx-auto w-full z-[1]" />
              </div>
              <div className="flex flex-col relative w-full">
                <C01HomepageProduct5n1
                  className="h-[327px] mx-auto w-full"
                  productimage="images/img_image_2.png"
                  productname="Fresh Indian Malta"
                />
                <C01HomepageProduct5n1
                  className="h-[327px] mt-[-0.5px] mx-auto w-full z-[1]"
                  productimage="images/img_image_3.png"
                  productname="Corn"
                />
              </div>
              <div className="h-[654px] relative w-full">
                <C01HomepageProduct5n2 className="md:h-[317px] h-[327px] mb-[-0.5px] mx-auto w-full z-[1]" />
                <C01HomepageProduct5n1
                  className="h-[327px] mt-auto mx-auto w-full"
                  productimage="images/img_image_4.png"
                  productname="Fresh Cauliflower"
                  productprice="$12.00"
                />
              </div>
              <div className="flex flex-col relative w-full">
                <C01HomepageProduct5n1
                  className="h-[327px] mx-auto w-full"
                  productimage="images/img_image_6.png"
                  productname="Green Lettuce"
                  productprice="$9.00"
                />
                <C01HomepageProduct5n
                  className="md:h-[317px] h-[327px] mt-[-0.5px] mx-auto w-full z-[1]"
                  image="images/img_image_7.png"
                  greenapple="Green Capsicum"
                  price="$9.00"
                />
              </div>
              <div className="flex flex-col relative w-full">
                <C01HomepageProduct5n1
                  className="h-[327px] mx-auto w-full"
                  productimage="images/img_image_8.png"
                  productname="Eggplant"
                  productprice="$34.00"
                />
                <C01HomepageProduct5n1
                  className="h-[327px] mt-[-0.5px] mx-auto w-full z-[1]"
                  productimage="images/img_image_9.png"
                  productname="Green Chili"
                  productprice="$34.00"
                />
              </div>
            </List>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-[1320px] mt-[59px] mx-auto md:px-5 w-full">
          <C01HomepageBannar2 className="h-[536px] relative w-[33%] md:w-full" />
          <List
            className="md:flex-1 sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
            orientation="horizontal"
          >
            <C01HomepageBannar3 className="h-[536px] relative w-full" />
            <C01HomepageBannar4 className="h-[536px] relative w-full" />
          </List>
        </div>
        <div
          className="common-pointer bg-gray-100_01 flex flex-col items-center justify-start mt-[60px] p-[54px] md:px-10 sm:px-5 w-full"
          onClick={() => googleSignIn()}
        >
          <div className="flex flex-col gap-[27px] items-center justify-start max-w-[1320px] mb-[5px] mx-auto w-full">
            <C01HomepageHeading
              className="flex flex-row md:gap-10 items-center justify-between max-w-[1320px] w-full"
              text="Hot Deals"
            />
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-2/5 md:w-full">
                <C01HomepageBigproducts className="flex h-[654px] md:h-[655px] justify-end relative w-full" />
                <List
                  className="sm:flex-col flex-row gap-px grid sm:grid-cols-1 grid-cols-2 justify-center w-full"
                  orientation="horizontal"
                >
                  <C01HomepageProduct5n1
                    className="h-[327px] sm:ml-[0] relative w-full"
                    productimage="images/img_image_10.png"
                    productprice="$12.00"
                  />
                  <C01HomepageProduct5n1
                    className="h-[327px] sm:ml-[0] relative w-full"
                    productimage="images/img_image_20.png"
                    productname="Corn"
                    productprice="$12.00"
                  />
                </List>
              </div>
              <List
                className="md:flex-1 sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-3/5 md:w-full"
                orientation="horizontal"
              >
                <div className="md:h-[327px] h-[981px] sm:ml-[0] relative w-full">
                  <C01HomepageProduct5n1
                    className="absolute h-[327px] inset-[0] justify-center m-auto w-full"
                    productimage="images/img_image_4.png"
                    productname="Fresh Cauliflower"
                    productprice="$12.00"
                  />
                  <C01HomepageProduct5n1
                    className="absolute bottom-[0] h-[327px] inset-x-[0] mx-auto w-full"
                    productimage="images/img_image_21.png"
                    productname="Red Chili"
                    productprice="$12.00"
                  />
                  <C01HomepageProduct5n1
                    className="absolute h-[327px] inset-x-[0] mx-auto top-[0] w-full"
                    productimage="images/img_image_5.png"
                    productname="Chinese cabbage"
                    productprice="$12.00"
                  />
                </div>
                <div className="flex flex-col sm:ml-[0] relative w-full">
                  <div className="flex flex-col mx-auto w-full">
                    <C01HomepageProduct5n1
                      className="h-[327px] mx-auto w-full"
                      productimage="images/img_image_6.png"
                      productname="Green Lettuce"
                      productprice="$9.00"
                    />
                    <C01HomepageProduct5n
                      className="md:h-[317px] h-[327px] mt-[-0.5px] mx-auto w-full z-[1]"
                      image="images/img_image_7.png"
                      greenapple="Green Capsicum"
                      price="$9.00"
                    />
                  </div>
                  <C01HomepageProduct5n
                    className="md:h-[317px] h-[327px] mt-[-0.5px] mx-auto w-full z-[1]"
                    image="images/img_image_22.png"
                    greenapple="Red Tomatos"
                    price="$9.00"
                  />
                </div>
                <div className="md:h-[327px] h-[981px] sm:ml-[0] relative w-full">
                  <C01HomepageProduct5n1
                    className="absolute h-[327px] inset-[0] justify-center m-auto w-full"
                    productimage="images/img_image_9.png"
                    productname="Green Chili"
                    productprice="$34.00"
                  />
                  <C01HomepageProduct5n1
                    className="absolute bottom-[0] h-[327px] inset-x-[0] mx-auto w-full"
                    productimage="images/img_image_23.png"
                    productname="Surjapur Mango"
                    productprice="$34.00"
                  />
                  <C01HomepageProduct5n1
                    className="absolute h-[327px] inset-x-[0] mx-auto top-[0] w-full"
                    productimage="images/img_image_8.png"
                    productname="Eggplant"
                    productprice="$34.00"
                  />
                </div>
              </List>
            </div>
          </div>
        </div>
        <C01HomepageDiscountbannar
          className="bg-cover bg-no-repeat flex flex-col gap-7 h-[358px] items-start justify-center max-w-[1320px] mt-[60px] mx-auto p-[51px] md:px-5 rounded-[10px] w-full"
          style={{ backgroundImage: "url('images/img_discountbannar.png')" }}
          offerOne={
            <Text className="font-semibold md:text-5xl sm:text-[42px] text-[56px] text-white-A700 w-auto">
              <span className="text-orange-600 font-poppins text-left">
                37%
              </span>
              <span className="text-white-A700 font-poppins text-left"> </span>
              <span className="text-white-A700 font-poppins text-left font-normal">
                OFF
              </span>
            </Text>
          }
        />
        <div className="flex flex-col items-center justify-start max-w-[1320px] mt-[54px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[27px] items-center justify-start w-full">
            <C01HomepageHeading
              className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1320px] w-full"
              text="Featured Products"
            />
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
        <div className="flex flex-col items-center justify-start max-w-[1320px] mt-[54px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[27px] items-center justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900_01"
              size="txtPoppinsSemiBold32"
            >
              Latest News
            </Text>
            <List
              className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              <C01HomepageBlogcard className="hover:cursor-pointer flex sm:flex-1 flex-col items-start justify-start hover:shadow-bs3 shadow-bs3 w-auto hover:w-full sm:w-full" />
              <C01HomepageBlogcard1 className="hover:cursor-pointer flex sm:flex-1 flex-col items-start justify-start hover:shadow-bs3 w-auto hover:w-full sm:w-full" />
              <C01HomepageBlogcard1
                className="hover:cursor-pointer flex sm:flex-1 flex-col items-start justify-start hover:shadow-bs3 w-auto hover:w-full sm:w-full"
                userimage="images/img_image_25.png"
                datetext="21"
                monthtext="Feb"
                descriptiontext="Maecenas blandit risus elementum mauris malesuada."
              />
            </List>
          </div>
        </div>
        <div className="bg-gray-100 flex flex-col gap-8 items-center justify-center mt-[60px] py-[60px] w-auto md:w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900_01 w-auto"
              size="txtPoppinsSemiBold32"
            >
              Client Testimonials
            </Text>
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
                  alt="arrowdown_Six"
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
                  alt="arrowleft_Six"
                />
              </Button>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1320px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            {c01HomepageColumnuserPropList.map((props, index) => (
              <React.Fragment key={`C01HomepageColumnuser${index}`}>
                <C01HomepageColumnuser
                  className="bg-white-A700 flex sm:flex-1 flex-col gap-4 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs4 w-auto sm:w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
        </div>
        <Img
          className="h-[152px] max-w-[1320px] mx-auto w-full"
          src="images/img_companylogo.svg"
          alt="companylogo"
        />
        <C01HomepageColumnThree className="flex flex-col items-center justify-start max-w-[1320px] mx-auto md:px-5 w-full" />
        <footer className="flex items-center justify-center mt-[60px] md:px-5 w-full">
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
                        <Text size="txtPoppinsRegular14">Beauty & Health</Text>
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
    </>
  );
};

export default HomepagePage;
