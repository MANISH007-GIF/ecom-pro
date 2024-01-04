import React from "react";

import { Button, Img, Text } from "components";

const C01HomepageProduct5n = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto outline outline-[0.5px] outline-gray-300_01 pb-[87px] w-full">
          <div className="h-60 md:h-[230px] p-[5px] relative w-[264px] md:w-full">
            <Img
              className="absolute h-[230px] inset-[0] justify-center m-auto object-cover w-[254px] sm:w-full"
              alt="image"
              src={props?.image}
            />
            <div className="absolute bg-red-400 flex flex-row gap-1 items-center justify-center left-[6%] px-2 py-[3px] rounded top-[7%] w-auto">
              <Text
                className="text-sm text-white-A700 w-auto"
                size="txtPoppinsRegular14WhiteA700"
              >
                {props?.sale}
              </Text>
              <Text
                className="text-sm text-white-A700 w-auto"
                size="txtPoppinsMedium14WhiteA700"
              >
                {props?.fifty}
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[0] flex flex-col gap-1.5 inset-x-[0] items-start justify-center mx-auto p-3 w-auto md:w-full">
          <div className="md:h-[45px] h-[51px] relative w-full">
            <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[0] w-auto">
              <Text
                className="text-gray-800 text-sm w-auto"
                size="txtPoppinsRegular14Gray800"
              >
                {props?.greenapple}
              </Text>
              <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtPoppinsMedium16"
                >
                  {props?.price}
                </Text>
                <Text
                  className="line-through text-base text-gray-500 w-auto"
                  size="txtPoppinsRegular16Gray500"
                >
                  {props?.priceOne}
                </Text>
              </div>
            </div>
            <Button
              className="absolute bottom-[0] flex h-10 items-center justify-center right-[2%] rounded-[50%] w-10"
              shape="circle"
              color="gray_100"
              size="md"
              variant="fill"
            >
              <Img className="h-5" src="images/img_bag.svg" alt="bag" />
            </Button>
          </div>
          <Img
            className="h-3 w-[60px]"
            src="images/img_close.svg"
            alt="close"
          />
        </div>
      </div>
    </>
  );
};

C01HomepageProduct5n.defaultProps = {
  image: "images/img_image.png",
  sale: "Sale",
  fifty: "50%",
  greenapple: "Green Apple",
  price: "$14.99",
  priceOne: "$20.99",
};

export default C01HomepageProduct5n;
