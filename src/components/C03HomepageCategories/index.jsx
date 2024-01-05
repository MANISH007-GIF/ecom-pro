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
            className="text-center text-gray-900_01 text-lg w-auto"
            size="txtPoppinsMedium18"
          >
            {props?.text}
          </Text>
          <Text
            className="text-center text-gray-600 text-sm w-auto"
            size="txtPoppinsRegular14Gray600"
          >
            {props?.text1}
          </Text>
        </div>
      </div>
    </>
  );
};

C03HomepageCategories.defaultProps = {
  text: "Fresh Fruit",
  text1: "137 Products",
};

export default C03HomepageCategories;
