import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Line, Text } from "components";

const ProductQuickViewModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[69%]"
      overlayClassName="bg-black-900_99 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex md:flex-col flex-row gap-6 items-start justify-center max-w-[1320px] mx-auto p-[37px] md:px-5 rounded-lg w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start ml-0.5 md:ml-[0] md:mt-0 my-0.5 w-[53%] md:w-full">
            <div className="flex md:flex-col flex-row gap-3 items-center justify-between w-full">
              <div className="flex flex-col gap-14 items-center justify-start">
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_gray_500_24x24.svg"
                  alt="arrowdown"
                />
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[90px] md:h-auto object-cover rounded-bl-sm rounded-br-sm w-full"
                      src="images/img_productimage.png"
                      alt="productimage"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[90px] md:h-auto object-cover rounded-bl-sm rounded-br-sm w-full"
                      src="images/img_productimage_90x80.png"
                      alt="productimage_One"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[90px] md:h-auto object-cover rounded-bl-sm rounded-br-sm w-full"
                      src="images/img_productimage_1.png"
                      alt="productimage_Two"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[90px] md:h-auto object-cover rounded-bl-[3px] rounded-br-[3px] w-full"
                      src="images/img_productimage_2.png"
                      alt="productimage_Three"
                    />
                  </div>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_gray_500_24x24.svg"
                  alt="arrowdown_One"
                />
              </div>
              <Img
                className="sm:flex-1 h-[556px] md:h-auto object-cover w-[556px] sm:w-full"
                src="images/img_image_5.png"
                alt="productimage_Four"
              />
            </div>
          </div>
          <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start mr-0.5 w-auto sm:w-full">
            <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-auto sm:w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900_01 w-auto"
                    size="txtPoppinsSemiBold36"
                  >
                    Chinese Cabbage
                  </Text>
                  <Button
                    className="cursor-pointer min-w-[71px] rounded text-center text-sm"
                    color="green_700_33"
                    size="xs"
                    variant="fill"
                  >
                    In Stock
                  </Button>
                </div>
                <div className="flex flex-row gap-3 items-start justify-start w-auto">
                  <div className="flex flex-row items-center justify-start w-auto">
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_star1.svg"
                      alt="starOne"
                    />
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_star1.svg"
                      alt="starTwo"
                    />
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_star1.svg"
                      alt="starThree"
                    />
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_star1.svg"
                      alt="starFour"
                    />
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_star1.svg"
                      alt="starFive"
                    />
                    <Text
                      className="text-gray-700 text-sm w-auto"
                      size="txtPoppinsRegular14Gray700"
                    >
                      {" "}
                      4 Review
                    </Text>
                  </div>
                  <Text
                    className="text-gray-400 text-sm w-auto"
                    size="txtPoppinsMedium14Gray400"
                  >
                    •
                  </Text>
                  <div className="flex flex-row gap-1 items-start justify-start w-auto">
                    <Text
                      className="text-blue_gray-900 text-sm w-auto"
                      size="txtPoppinsMedium14Bluegray900"
                    >
                      SKU:
                    </Text>
                    <Text
                      className="text-gray-700 text-sm w-auto"
                      size="txtPoppinsRegular14Gray700"
                    >
                      2,51,594
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-3 items-center justify-start w-auto">
                <div className="flex flex-row gap-1 items-center justify-start w-auto">
                  <Text
                    className="line-through text-gray-400 text-xl w-auto"
                    size="txtPoppinsRegular20Gray400"
                  >
                    $48.00
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-green-800 sm:text-xl w-auto"
                    size="txtPoppinsMedium24Green800"
                  >
                    $17.28
                  </Text>
                </div>
                <Text
                  className="bg-red-400_19 justify-center px-2.5 py-0.5 rounded-[13px] text-red-400 text-sm w-auto"
                  size="txtPoppinsMedium14Red400"
                >
                  64% Off
                </Text>
              </div>
              <Line className="bg-gray-300_01 h-px w-full" />
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[568px] sm:w-full">
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Text
                    className="text-gray-900_01 text-sm w-auto"
                    size="txtPoppinsRegular14Gray90001"
                  >
                    Brand:
                  </Text>
                  <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col font-dancingscript h-14 items-center justify-center p-[7px] rounded w-14">
                    <Img
                      className="h-3 mt-[7px]"
                      src="images/img_user_green_800_02.svg"
                      alt="user"
                    />
                    <Text
                      className="my-0.5 text-[13px] text-gray-700_02"
                      size="txtDancingScriptBold13"
                    >
                      farmary
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                  <Text
                    className="text-gray-900_01 text-sm w-auto"
                    size="txtPoppinsRegular14Gray90001"
                  >
                    Share item:
                  </Text>
                  <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                    <Button
                      className="flex h-10 items-center justify-center rounded-[50%] w-10"
                      shape="round"
                      color="green_A700"
                      size="lg"
                      variant="fill"
                    >
                      <Img
                        className="h-[18px]"
                        src="images/img_facebook1_white_a700.svg"
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
                      alt="user_One"
                    />
                    <Img
                      className="h-10 rounded-[50%] w-10"
                      src="images/img_info_gray_800.svg"
                      alt="info"
                    />
                  </div>
                </div>
              </div>
              <Text
                className="leading-[150.00%] max-w-[568px] md:max-w-full text-gray-600 text-sm"
                size="txtPoppinsRegular14Gray600"
              >
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
                consequat nec, ultrices et ipsum. Nulla varius magna a consequat
                pulvinar.{" "}
              </Text>
            </div>
            <div className="bg-white-A700 border border-solid border-white-A700 flex sm:flex-col flex-row gap-3 items-center justify-center py-[18px] shadow-bs5 w-auto sm:w-full">
              <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-row items-center justify-between p-2 rounded-[25px] w-auto">
                <div className="bg-gray-100 flex flex-col h-[34px] items-center justify-start p-2.5 rounded-[50%] w-[34px]">
                  <Img
                    className="h-3.5 w-3.5"
                    src="images/img_minus.svg"
                    alt="minus"
                  />
                </div>
                <Text
                  className="text-base text-center text-gray-900_01 w-auto"
                  size="txtPoppinsRegular16Gray90001"
                >
                  5
                </Text>
                <div className="bg-gray-100 flex flex-col h-[34px] items-center justify-start p-2.5 rounded-[50%] w-[34px]">
                  <Img
                    className="h-3.5 w-3.5"
                    src="images/img_plus1.svg"
                    alt="plusOne"
                  />
                </div>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center rounded-[25px] w-[368px]"
                rightIcon={
                  <div className="h-[15px] ml-4 w-[15px] outline-white-A700 outline-[0.5px] outline my-1">
                    <Img
                      className="h-[15px]"
                      src="images/img_bag_white_a700.svg"
                      alt="bag"
                    />
                  </div>
                }
                color="green_A700"
                size="lg"
                variant="fill"
              >
                <div className="font-semibold text-base text-left">
                  Add to Cart
                </div>
              </Button>
              <Button
                className="flex h-[52px] items-center justify-center rounded-[50%] w-[52px]"
                shape="circle"
                color="green_700_19"
                size="xl"
                variant="fill"
              >
                <Img
                  className="h-5"
                  src="images/img_favorite_green_800.svg"
                  alt="favorite"
                />
              </Button>
            </div>
            <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
                <Text
                  className="text-gray-900_01 text-sm w-auto"
                  size="txtPoppinsMedium14Gray90001"
                >
                  Category:
                </Text>
                <Text
                  className="text-gray-600 text-sm w-auto"
                  size="txtPoppinsRegular14Gray600"
                >
                  Vegetables
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-1.5 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-gray-900_01 text-sm w-auto"
                  size="txtPoppinsMedium14Gray90001"
                >
                  Tag:
                </Text>
                <Text
                  className="text-gray-600 text-sm w-auto"
                  size="txtPoppinsRegular14Gray600"
                >
                  Vegetables
                </Text>
                <Text
                  className="text-gray-600 text-sm w-auto"
                  size="txtPoppinsRegular14Gray600"
                >
                  Healthy
                </Text>
                <Text
                  className="text-gray-900_01 text-sm underline w-auto"
                  size="txtPoppinsRegular14Gray90001"
                >
                  Chinese
                </Text>
                <Text
                  className="text-gray-600 text-sm w-auto"
                  size="txtPoppinsRegular14Gray600"
                >
                  Cabbage
                </Text>
                <Text
                  className="text-gray-600 text-sm w-auto"
                  size="txtPoppinsRegular14Gray600"
                >
                  Green Cabbage
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default ProductQuickViewModal;
