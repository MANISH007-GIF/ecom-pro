import React from "react";

import { Img, Text } from "components";

const C10ProductsDetailsDescriptionQuantity = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-100 flex flex-col h-[34px] items-center justify-start p-2.5 rounded-[50%] w-[34px]">
          <Img className="h-3.5 w-3.5" src="images/img_minus.svg" alt="minus" />
        </div>
        <Text
          className="text-base text-center text-gray-900 w-auto"
          size="txtPoppinsRegular16Gray900"
        >
          {props?.textvalue}
        </Text>
        <div className="bg-gray-100 flex flex-col h-[34px] items-center justify-start p-2.5 rounded-[50%] w-[34px]">
          <Img
            className="h-3.5 w-3.5"
            src="images/img_plus1.svg"
            alt="plusOne"
          />
        </div>
      </div>
    </>
  );
};

C10ProductsDetailsDescriptionQuantity.defaultProps = { textvalue: "5" };

export default C10ProductsDetailsDescriptionQuantity;
