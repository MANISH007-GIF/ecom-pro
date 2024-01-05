import React from "react";

import { Button, Img, Text } from "components";

const C04HomepageProducts = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="md:gap-5 gap-px grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
          <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col items-center justify-start outline outline-[0.5px] outline-gray-300_03 hover:shadow-bs2 shadow-bs2 hover:w-full w-full">
            <div className="md:h-[300px] h-[310px] p-[5px] relative w-[330px]">
              <Img
                className="absolute h-[300px] inset-[0] justify-center m-auto object-cover w-80 md:w-full"
                src="images/img_image_300x320.png"
                alt="image"
              />
              <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto top-[2%] w-[88%] md:w-full">
                <div className="bg-red-400 flex flex-row gap-1 items-center justify-center mb-[75px] px-2 py-[3px] rounded w-auto">
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtPoppinsRegular14WhiteA700"
                  >
                    {props?.sale}
                  </Text>
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtPoppinsMedium14"
                  >
                    {props?.fifty}
                  </Text>
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                  <Button
                    className="border border-gray-100 border-solid flex h-12 items-center justify-center rounded-[50%] w-12"
                    shape="circle"
                    color="white_A700"
                    size="lg"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_favorite_black_900.svg"
                      alt="favorite"
                    />
                  </Button>
                  <Button
                    className="border border-gray-100 border-solid flex h-12 items-center justify-center rounded-[50%] w-12"
                    shape="circle"
                    color="white_A700"
                    size="lg"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_eye1_black_900.svg"
                      alt="eyeOne"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="h-[118px] md:h-[53px] p-4 relative w-full">
              <div className="absolute flex flex-col gap-0.5 inset-x-[0] items-start justify-start mx-auto top-[14%] w-auto">
                <Text
                  className="text-base text-green-900_01 w-auto"
                  size="txtPoppinsRegular16Green90001"
                >
                  {props?.greenapple}
                </Text>
                <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
                  <Text
                    className="text-black-900 text-lg w-auto"
                    size="txtPoppinsMedium18Black900"
                  >
                    {props?.price}
                  </Text>
                  <Text
                    className="line-through text-base text-blue_gray-400 w-auto"
                    size="txtPoppinsRegular16Bluegray400"
                  >
                    {props?.priceOne}
                  </Text>
                </div>
              </div>
              <Img
                className="absolute bottom-[17%] h-[18px] left-[6%] w-[98px]"
                src="images/img_close.svg"
                alt="close"
              />
              <Button
                className="absolute flex h-[50px] inset-y-[0] items-center justify-center my-auto right-[7%] rounded-[50%] w-[50px]"
                shape="circle"
                color="green_A700"
                size="xl"
                variant="fill"
              >
                <Img
                  className="h-[18px]"
                  src="images/img_bag_white_a700.svg"
                  alt="bag"
                />
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col items-center justify-start outline outline-[0.5px] outline-gray-300_03 hover:shadow-bs2 hover:w-full w-full">
            <div className="flex flex-col items-start justify-start p-[5px] w-auto">
              <Img
                className="h-[300px] sm:h-auto object-cover w-80 md:w-full"
                src="images/img_image_23.png"
                alt="image"
              />
            </div>
            <div className="h-[118px] md:h-[52px] p-4 relative w-full">
              <div className="absolute flex flex-col gap-0.5 inset-x-[0] items-start justify-start mx-auto top-[14%] w-auto">
                <Text
                  className="text-base text-green-900_01 w-auto"
                  size="txtPoppinsRegular16Green90001"
                >
                  {props?.surjapurmango}
                </Text>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-black-900 text-lg w-auto"
                    size="txtPoppinsMedium18Black900"
                  >
                    {props?.price1}
                  </Text>
                </div>
              </div>
              <Img
                className="absolute bottom-[17%] h-[18px] left-[6%] w-[98px]"
                src="images/img_close.svg"
                alt="close"
              />
              <Button
                className="absolute flex h-[50px] inset-y-[0] items-center justify-center my-auto right-[7%] rounded-[50%] w-[50px]"
                shape="circle"
                color="gray_300_03"
                size="xl"
                variant="fill"
              >
                <Img
                  className="h-[18px]"
                  src="images/img_bag_black_900.svg"
                  alt="bag"
                />
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col items-center justify-start outline outline-[0.5px] outline-gray-300_03 hover:shadow-bs2 hover:w-full w-full">
            <div className="flex flex-col items-start justify-start p-[5px] w-auto">
              <Img
                className="h-[300px] sm:h-auto object-cover w-80 md:w-full"
                src="images/img_image_22.png"
                alt="image"
              />
            </div>
            <div className="h-[118px] md:h-[52px] p-4 relative w-full">
              <div className="absolute flex flex-col gap-0.5 inset-x-[0] items-start justify-start mx-auto top-[14%] w-auto">
                <Text
                  className="text-base text-green-900_01 w-auto"
                  size="txtPoppinsRegular16Green90001"
                >
                  {props?.redtomatos}
                </Text>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-black-900 text-lg w-auto"
                    size="txtPoppinsMedium18Black900"
                  >
                    {props?.price2}
                  </Text>
                </div>
              </div>
              <Img
                className="absolute bottom-[17%] h-[18px] left-[6%] w-[98px]"
                src="images/img_close.svg"
                alt="close"
              />
              <Button
                className="absolute flex h-[50px] inset-y-[0] items-center justify-center my-auto right-[7%] rounded-[50%] w-[50px]"
                shape="circle"
                color="gray_300_03"
                size="xl"
                variant="fill"
              >
                <Img
                  className="h-[18px]"
                  src="images/img_bag_black_900.svg"
                  alt="bag"
                />
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col items-center justify-start outline outline-[0.5px] outline-gray-300_03 hover:shadow-bs2 hover:w-full w-full">
            <div className="flex flex-col items-start justify-start p-[5px] w-auto">
              <Img
                className="h-[300px] sm:h-auto object-cover w-80 md:w-full"
                src="images/img_image_4.png"
                alt="image"
              />
            </div>
            <div className="h-[118px] md:h-[52px] p-[15px] relative w-full">
              <div className="absolute flex flex-col gap-0.5 inset-x-[0] items-start justify-start mx-auto top-[13%] w-auto">
                <Text
                  className="text-base text-green-900_01 w-auto"
                  size="txtPoppinsRegular16Green90001"
                >
                  {props?.freshcaulifloweOne}
                </Text>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-black-900 text-lg w-auto"
                    size="txtPoppinsMedium18Black900"
                  >
                    {props?.price3}
                  </Text>
                </div>
              </div>
              <Img
                className="absolute bottom-[16%] h-[18px] left-[6%] w-[98px]"
                src="images/img_close.svg"
                alt="close"
              />
              <Button
                className="absolute flex h-[50px] inset-y-[0] items-center justify-center my-auto right-[7%] rounded-[50%] w-[50px]"
                shape="circle"
                color="gray_300_03"
                size="xl"
                variant="fill"
              >
                <Img
                  className="h-[18px]"
                  src="images/img_bag_black_900.svg"
                  alt="bag"
                />
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col items-center justify-start outline outline-[0.5px] outline-gray-300_03 hover:shadow-bs2 hover:w-full w-full">
            <div className="flex flex-col items-start justify-start p-[5px] w-auto">
              <Img
                className="h-[300px] sm:h-auto object-cover w-80 md:w-full"
                src="images/img_image_246x246.png"
                alt="image"
              />
            </div>
            <div className="h-[118px] md:h-[52px] p-4 relative w-full">
              <div className="absolute flex flex-col gap-0.5 inset-x-[0] items-start justify-start mx-auto top-[14%] w-auto">
                <Text
                  className="text-base text-green-900_01 w-auto"
                  size="txtPoppinsRegular16Green90001"
                >
                  {props?.greenlettuce}
                </Text>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-black-900 text-lg w-auto"
                    size="txtPoppinsMedium18Black900"
                  >
                    {props?.price4}
                  </Text>
                </div>
              </div>
              <Img
                className="absolute bottom-[17%] h-[18px] left-[6%] w-[98px]"
                src="images/img_close.svg"
                alt="close"
              />
              <Button
                className="absolute flex h-[50px] inset-y-[0] items-center justify-center my-auto right-[7%] rounded-[50%] w-[50px]"
                shape="circle"
                color="gray_300_03"
                size="xl"
                variant="fill"
              >
                <Img
                  className="h-[18px]"
                  src="images/img_bag_black_900.svg"
                  alt="bag"
                />
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col items-center justify-start outline outline-[0.5px] outline-gray-300_03 hover:shadow-bs2 hover:w-full w-full">
            <div className="flex flex-col items-start justify-start p-[5px] w-auto">
              <Img
                className="h-[300px] sm:h-auto object-cover w-80 md:w-full"
                src="images/img_image_7.png"
                alt="image"
              />
            </div>
            <div className="h-[118px] md:h-[52px] p-4 relative w-full">
              <div className="absolute flex flex-col gap-0.5 inset-x-[0] items-start justify-start mx-auto top-[14%] w-auto">
                <Text
                  className="text-base text-green-900_01 w-auto"
                  size="txtPoppinsRegular16Green90001"
                >
                  {props?.eggplant}
                </Text>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-black-900 text-lg w-auto"
                    size="txtPoppinsMedium18Black900"
                  >
                    {props?.price5}
                  </Text>
                </div>
              </div>
              <Img
                className="absolute bottom-[17%] h-[18px] left-[6%] w-[98px]"
                src="images/img_close.svg"
                alt="close"
              />
              <Button
                className="absolute flex h-[50px] inset-y-[0] items-center justify-center my-auto right-[7%] rounded-[50%] w-[50px]"
                shape="circle"
                color="gray_300_03"
                size="xl"
                variant="fill"
              >
                <Img
                  className="h-[18px]"
                  src="images/img_bag_black_900.svg"
                  alt="bag"
                />
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col items-center justify-start outline outline-[0.5px] outline-gray-300_03 hover:shadow-bs2 hover:w-full w-full">
            <div className="flex flex-col items-start justify-start p-[5px] w-auto">
              <Img
                className="h-[300px] sm:h-auto object-cover w-80 md:w-full"
                src="images/img_image_9.png"
                alt="image"
              />
            </div>
            <div className="h-[118px] md:h-[52px] p-[15px] relative w-full">
              <div className="absolute flex flex-col gap-0.5 inset-x-[0] items-start justify-start mx-auto top-[13%] w-auto">
                <Text
                  className="text-base text-green-900_01 w-auto"
                  size="txtPoppinsRegular16Green90001"
                >
                  {props?.greenchilli}
                </Text>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-black-900 text-lg w-auto"
                    size="txtPoppinsMedium18Black900"
                  >
                    {props?.price6}
                  </Text>
                </div>
              </div>
              <Img
                className="absolute bottom-[16%] h-[18px] left-[6%] w-[98px]"
                src="images/img_close.svg"
                alt="close"
              />
              <Button
                className="absolute flex h-[50px] inset-y-[0] items-center justify-center my-auto right-[7%] rounded-[50%] w-[50px]"
                shape="circle"
                color="gray_300_03"
                size="xl"
                variant="fill"
              >
                <Img
                  className="h-[18px]"
                  src="images/img_bag_black_900.svg"
                  alt="bag"
                />
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 hover:border-0 hover:cursor-pointer flex flex-1 flex-col items-center justify-start outline outline-[0.5px] outline-gray-300_03 hover:shadow-bs2 hover:w-full w-full">
            <div className="flex flex-col items-start justify-start p-[5px] w-auto">
              <Img
                className="h-[300px] sm:h-auto object-cover w-80 md:w-full"
                src="images/img_image_8.png"
                alt="image"
              />
            </div>
            <div className="h-[118px] md:h-[52px] p-4 relative w-full">
              <div className="absolute flex flex-col gap-0.5 inset-x-[0] items-start justify-start mx-auto top-[14%] w-auto">
                <Text
                  className="text-base text-green-900_01 w-auto"
                  size="txtPoppinsRegular16Green90001"
                >
                  {props?.eggplant1}
                </Text>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-black-900 text-lg w-auto"
                    size="txtPoppinsMedium18Black900"
                  >
                    {props?.price7}
                  </Text>
                </div>
              </div>
              <Img
                className="absolute bottom-[17%] h-[18px] left-[6%] w-[98px]"
                src="images/img_close.svg"
                alt="close"
              />
              <Button
                className="absolute flex h-[50px] inset-y-[0] items-center justify-center my-auto right-[7%] rounded-[50%] w-[50px]"
                shape="circle"
                color="gray_300_03"
                size="xl"
                variant="fill"
              >
                <Img
                  className="h-[18px]"
                  src="images/img_bag_black_900.svg"
                  alt="bag"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C04HomepageProducts.defaultProps = {
  sale: "Sale",
  fifty: "50%",
  greenapple: "Green Apple",
  price: "$14.99",
  priceOne: "$20.99",
  surjapurmango: "Surjapur Mango",
  price1: "$14.99",
  redtomatos: "Red Tomatos",
  price2: "$14.99",
  freshcaulifloweOne: "Fresh Cauliflower",
  price3: "$14.99",
  greenlettuce: "Green Lettuce",
  price4: "$14.99",
  eggplant: "Eggplant",
  price5: "$14.99",
  greenchilli: "Green Chilli",
  price6: "$14.99",
  eggplant1: "Eggplant",
  price7: "$14.99",
};

export default C04HomepageProducts;
