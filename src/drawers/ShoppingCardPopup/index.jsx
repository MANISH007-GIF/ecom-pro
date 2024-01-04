import React from "react";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";

import { Button, Img, Line, List, Text } from "components";

const ShoppingCardPopupDrawer = (props) => {
  return (
    <Drawer placement="right" className="!w-[24%]" {...props}>
      <div>
        <div className="flex flex-col font-poppins items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[1464px] sm:w-full md:w-full">
          <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col gap-4 h-[1080px] md:h-auto items-center justify-between p-10 md:px-5 w-auto sm:w-full">
            <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-row gap-3 items-center justify-between w-[376px] sm:w-full">
                <Text
                  className="text-gray-900 text-xl w-auto"
                  size="txtPoppinsMedium20"
                >
                  <span className="text-gray-900 font-poppins text-left font-medium">
                    Shopping Card{" "}
                  </span>
                  <span className="text-gray-900 font-poppins text-left font-medium">
                    (2)
                  </span>
                </Text>
                <Button
                  className="flex h-[45px] items-center justify-center w-[45px]"
                  shape="round"
                  color="white_A700"
                  size="md"
                  variant="fill"
                >
                  <Img className="h-[25px]" src="images/img_x1.svg" alt="x1" />
                </Button>
              </div>
              <List
                className="flex flex-col gap-3 items-center w-full"
                orientation="vertical"
              >
                <div className="bg-white-A700 flex sm:flex-1 sm:flex-col flex-row gap-2 items-center justify-start w-auto sm:w-full">
                  <Img
                    className="h-[100px] md:h-auto object-cover w-[120px] sm:w-full"
                    src="images/img_rectangle5.png"
                    alt="rectangleFive"
                  />
                  <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPoppinsRegular14Gray900"
                    >
                      Fresh Indian Orange
                    </Text>
                    <div className="flex flex-row gap-1 items-center justify-start w-auto">
                      <Text
                        className="text-gray-600 text-sm w-auto"
                        size="txtPoppinsRegular14Gray600"
                      >
                        1 kg
                      </Text>
                      <Text
                        className="text-gray-600 text-sm w-auto"
                        size="txtPoppinsRegular14Gray600"
                      >
                        x
                      </Text>
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtPoppinsSemiBold14"
                      >
                        12.00
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-6 w-6"
                    src="images/img_close_blue_gray_100.svg"
                    alt="close"
                  />
                </div>
                <Line className="self-center h-px bg-gray-300_01 w-full" />
                <div className="bg-white-A700 flex sm:flex-1 sm:flex-col flex-row gap-2 items-center justify-start w-auto sm:w-full">
                  <Img
                    className="h-[100px] md:h-auto object-cover w-[120px] sm:w-full"
                    src="images/img_rectangle5_100x120.png"
                    alt="rectangleFive"
                  />
                  <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPoppinsRegular14Gray900"
                    >
                      Green Apple
                    </Text>
                    <div className="flex flex-row gap-1 items-center justify-start w-auto">
                      <Text
                        className="text-gray-600 text-sm w-auto"
                        size="txtPoppinsRegular14Gray600"
                      >
                        1 kg
                      </Text>
                      <Text
                        className="text-gray-600 text-sm w-auto"
                        size="txtPoppinsRegular14Gray600"
                      >
                        x
                      </Text>
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtPoppinsSemiBold14"
                      >
                        14.00
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-6 w-6"
                    src="images/img_close_blue_gray_100.svg"
                    alt="close"
                  />
                </div>
              </List>
            </div>
            <div className="flex flex-col items-start justify-start w-auto sm:w-full">
              <div className="bg-white-A700 flex flex-row items-center justify-between py-6 w-[376px] sm:w-full">
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtPoppinsRegular16Gray900"
                >
                  2 Product
                </Text>
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtPoppinsSemiBold16"
                >
                  $26.00
                </Text>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                <Button
                  className="cursor-pointer font-semibold rounded-[25px] text-base text-center w-[376px]"
                  color="green_A700"
                  size="md"
                  variant="fill"
                >
                  Checkout
                </Button>
                <Button
                  className="cursor-pointer font-semibold rounded-[25px] text-base text-center w-[376px]"
                  color="green_500_19"
                  size="md"
                  variant="fill"
                >
                  Go To Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default ShoppingCardPopupDrawer;
