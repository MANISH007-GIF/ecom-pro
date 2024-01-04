import React from "react";

import { Button, Img, Text } from "components";

const C01HomepageProduct5n2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto outline outline-[0.5px] outline-green-800 pb-[87px] shadow-bs2 w-full">
          <div className="h-60 md:h-[230px] p-[5px] relative w-[264px] md:w-full">
            <Img
              className="absolute h-[230px] inset-[0] justify-center m-auto object-cover w-[254px] sm:w-full"
              src="images/img_image_5.png"
              alt="image_One"
            />
            <div className="absolute flex flex-col gap-1.5 items-center justify-start right-[2%] top-[2%] w-[16%] md:w-full">
              <Button
                className="border border-gray-100 border-solid flex h-10 items-center justify-center rounded-[50%] w-10"
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
                className="border border-gray-100 border-solid flex h-10 items-center justify-center rounded-[50%] w-10"
                shape="circle"
                color="white_A700"
                size="md"
                variant="fill"
              >
                <Img className="h-5" src="images/img_eye1.svg" alt="eyeOne" />
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[0] flex flex-col gap-1.5 inset-x-[0] items-start justify-center mx-auto p-3 w-auto md:w-full">
          <div className="md:h-11 h-[51px] relative w-full">
            <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[0] w-auto">
              <Text
                className="text-green-800 text-sm w-auto"
                size="txtPoppinsRegular14Green800"
              >
                {props?.languagetext}
              </Text>
              <div className="flex flex-col items-start justify-start w-auto">
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtPoppinsMedium16"
                >
                  {props?.pricetext}
                </Text>
              </div>
            </div>
            <Button
              className="absolute bottom-[0] flex h-10 items-center justify-center right-[2%] rounded-[50%] w-10"
              shape="round"
              color="green_A700"
              size="md"
              variant="fill"
            >
              <Img
                className="h-5"
                src="images/img_bag_white_a700.svg"
                alt="bag_One"
              />
            </Button>
          </div>
          <Img
            className="h-3 w-[60px]"
            src="images/img_close.svg"
            alt="close_One"
          />
        </div>
      </div>
    </>
  );
};

C01HomepageProduct5n2.defaultProps = {
  languagetext: "Chinese cabbage",
  pricetext: "$12.00",
};

export default C01HomepageProduct5n2;
