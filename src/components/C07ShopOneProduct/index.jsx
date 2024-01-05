import React from "react";

import { Img, Text } from "components";

const C07ShopOneProduct = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start p-[5px] w-28">
          <Img
            className="h-[102px] md:h-auto object-cover w-[102px]"
            alt="image"
            src={props?.productimage}
          />
        </div>
        <div className="flex flex-col gap-1.5 items-start justify-center px-3 py-6 w-auto">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-gray-800 text-sm w-auto"
              size="txtPoppinsRegular14Gray800"
            >
              {props?.productname}
            </Text>
            <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
              <Text
                className="text-base text-gray-900_01 w-auto"
                size="txtPoppinsMedium16Gray90001"
              >
                {props?.originalprice}
              </Text>
              <Text
                className="line-through text-base text-gray-500 w-auto"
                size="txtPoppinsRegular16Gray500"
              >
                {props?.discountedprice}
              </Text>
            </div>
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

C07ShopOneProduct.defaultProps = {
  productimage: "images/img_image_49.png",
  productname: "Red Capsicum",
  originalprice: "$32.00",
  discountedprice: "$20.99",
};

export default C07ShopOneProduct;
