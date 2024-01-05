import React from "react";

import { Button, Img, Text } from "components";

const C05HomepageProductx2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-white-A700 border border-green-800 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[95px] rounded-lg shadow-bs2 w-full">
          <div className="md:h-[302px] h-[312px] p-[5px] relative w-[312px]">
            <Img
              className="absolute h-[302px] inset-[0] justify-center m-auto object-cover w-[302px]"
              alt="image"
              src={props?.productimage}
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
                <Img className="h-5" src="images/img_eye1.svg" alt="eyeOne" />
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[0] flex flex-col gap-1.5 inset-x-[0] items-start justify-center mx-auto p-4 w-auto md:w-full">
          <div className="md:h-11 h-[51px] relative w-full">
            <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[0] w-auto">
              <Text
                className="text-green-800 text-sm w-auto"
                size="txtPoppinsRegular14Green800"
              >
                {props?.productname}
              </Text>
              <div className="flex flex-col items-start justify-start w-auto">
                <Text
                  className="text-base text-gray-900_01 w-auto"
                  size="txtPoppinsMedium16Gray90001"
                >
                  {props?.productprice}
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
    </>
  );
};

C05HomepageProductx2.defaultProps = {
  productimage: "images/img_image_7.png",
  productname: "Green Capsicum",
  productprice: "$14.99",
};

export default C05HomepageProductx2;
