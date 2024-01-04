import React from "react";

import { Button, Img, Text } from "components";

const C01HomepageProduct5n1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto outline outline-[0.5px] outline-gray-300_01 pb-[87px] w-full">
          <div className="flex flex-col items-start justify-start p-[5px] w-auto md:w-full">
            <Img
              className="h-[230px] md:h-auto object-cover w-[254px] sm:w-full"
              alt="image_One"
              src={props?.productimage}
            />
          </div>
        </div>
        <div className="absolute bottom-[0] flex flex-col gap-1.5 inset-x-[0] items-start justify-center mx-auto p-3 w-auto md:w-full">
          <div className="md:h-11 h-[51px] relative w-full">
            <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[0] w-auto">
              <Text
                className="text-gray-800 text-sm w-auto"
                size="txtPoppinsRegular14Gray800"
              >
                {props?.productname}
              </Text>
              <div className="flex flex-col items-start justify-start w-auto">
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtPoppinsMedium16"
                >
                  {props?.productprice}
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
              <Img className="h-5" src="images/img_bag.svg" alt="bag_One" />
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

C01HomepageProduct5n1.defaultProps = {
  productimage: "images/img_image_230x254.png",
  productname: "Big Potatoes",
  productprice: "$20.00",
};

export default C01HomepageProduct5n1;
