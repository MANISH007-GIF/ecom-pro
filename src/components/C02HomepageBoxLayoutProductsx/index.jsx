import React from "react";

import { Button, Img, Text } from "components";

const C02HomepageBoxLayoutProductsx = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-[248px]">
          <Img
            className="h-[246px] md:h-auto object-cover w-[246px]"
            alt="image"
            src={props?.productimage}
          />
        </div>
        <div className="md:h-11 h-[91px] pb-4 pt-3 px-4 relative w-[248px] md:w-full">
          <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[13%] w-auto">
            <Text
              className="text-gray-800 text-sm w-auto"
              size="txtPoppinsRegular14Gray800"
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
            <Img className="h-5" src="images/img_bag.svg" alt="bag" />
          </Button>
        </div>
      </div>
    </>
  );
};

C02HomepageBoxLayoutProductsx.defaultProps = {
  productimage: "images/img_image_5.png",
  productname: "Chanise Cabbage",
  productprice: "$14.99",
};

export default C02HomepageBoxLayoutProductsx;
