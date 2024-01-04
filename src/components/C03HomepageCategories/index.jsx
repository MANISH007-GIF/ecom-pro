import React from "react";

import { Img, Text } from "components";

const C03HomepageCategories = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-20 w-20"
          src="images/img_salad_1.svg"
          alt="fruitsOne"
        />
        <div className="flex flex-col gap-1.5 items-center justify-start w-auto md:w-full">
          <Text
            className="text-center text-gray-900 text-lg w-auto"
            size="txtPoppinsMedium18"
          >
            {props?.fruittext}
          </Text>
          <Text
            className="text-center text-gray-600 text-sm w-auto"
            size="txtPoppinsRegular14Gray600"
          >
            {props?.productcount}
          </Text>
        </div>
      </div>
    </>
  );
};

C03HomepageCategories.defaultProps = {
  fruittext: "Fresh Fruit",
  productcount: "137 Products",
};

export default C03HomepageCategories;
