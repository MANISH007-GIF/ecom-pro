import React from "react";

import { Button, Img, Line, List, Text } from "components";

const C04HomepageFeatured = (props) => {
  return (
    <>
      <List className={props.className} orientation="horizontal">
        <div className="bg-green-A700 flex flex-col gap-4 items-start justify-start p-10 sm:px-5 rounded-bl-lg rounded-tl-lg w-auto">
          <Button
            className="flex h-[70px] items-center justify-center rounded-[50%] w-[70px]"
            shape="circle"
            color="white_A700"
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
              className="text-lg text-white-A700 w-auto"
              size="txtPoppinsSemiBold18WhiteA700"
            >
              {props?.freeshipping}
            </Text>
            <Text
              className="text-sm text-white-A700 w-auto"
              size="txtPoppinsRegular14WhiteA700"
            >
              {props?.freeshippingwitOne}
            </Text>
          </div>
        </div>
        <Line className="self-center rotate-[-90deg] bg-gray-300_03 w-[1%] flex flex-col" />
        <div className="flex flex-col gap-4 items-start justify-start p-10 sm:px-5 w-auto">
          <Button
            className="border border-gray-300_03 border-solid flex h-[70px] items-center justify-center rounded-[50%] w-[70px]"
            shape="circle"
            color="white_A700"
            size="xl"
            variant="fill"
          >
            <Img
              className="h-8"
              src="images/img_headphones1.svg"
              alt="headphonesOne"
            />
          </Button>
          <div className="flex flex-col gap-2 items-start justify-center w-auto">
            <Text
              className="text-gray-900 text-lg w-auto"
              size="txtPoppinsSemiBold18"
            >
              {props?.greatsupport247one}
            </Text>
            <Text
              className="text-gray-500 text-sm w-auto"
              size="txtPoppinsRegular14"
            >
              {props?.instantaccesstoOne}
            </Text>
          </div>
        </div>
        <Line className="self-center rotate-[-90deg] bg-gray-300_03 w-[1%] flex flex-col" />
        <div className="flex flex-col gap-4 items-start justify-start p-10 sm:px-5 w-auto">
          <Button
            className="border border-gray-300_03 border-solid flex h-[70px] items-center justify-center rounded-[50%] w-[70px]"
            shape="circle"
            color="white_A700"
            size="xl"
            variant="fill"
          >
            <Img
              className="h-8"
              src="images/img_shoppingbag.svg"
              alt="shoppingbag"
            />
          </Button>
          <div className="flex flex-col gap-2 items-start justify-center w-auto">
            <Text
              className="text-gray-900 text-lg w-auto"
              size="txtPoppinsSemiBold18"
            >
              {props?.p100sucurepaymenone}
            </Text>
            <Text
              className="text-gray-600 text-sm w-auto"
              size="txtPoppinsRegular14Gray600"
            >
              {props?.instantaccessto}
            </Text>
          </div>
        </div>
        <Line className="self-center rotate-[-90deg] bg-gray-300_03 w-[1%] flex flex-col" />
        <div className="flex flex-col gap-4 items-start justify-start p-10 sm:px-5 w-auto">
          <Button
            className="border border-gray-300_03 border-solid flex h-[70px] items-center justify-center rounded-[50%] w-[70px]"
            shape="circle"
            color="white_A700"
            size="xl"
            variant="fill"
          >
            <Img className="h-8" src="images/img_package.svg" alt="package" />
          </Button>
          <div className="flex flex-col gap-2 items-start justify-center w-auto">
            <Text
              className="text-gray-900 text-lg w-auto"
              size="txtPoppinsSemiBold18"
            >
              {props?.moneybackguaranOne}
            </Text>
            <Text
              className="text-gray-500 text-sm w-auto"
              size="txtPoppinsRegular14"
            >
              {props?.duration}
            </Text>
          </div>
        </div>
      </List>
    </>
  );
};

C04HomepageFeatured.defaultProps = {
  freeshipping: "Free Shipping",
  freeshippingwitOne: "Free shipping with discount",
  greatsupport247one: "Great Support 24/7",
  instantaccesstoOne: "Instant access to Contact",
  p100sucurepaymenone: "100% Sucure Payment",
  instantaccessto: "We ensure your money is save",
  moneybackguaranOne: "Money-Back Guarantee",
  duration: "30 days money-back guarantee",
};

export default C04HomepageFeatured;
