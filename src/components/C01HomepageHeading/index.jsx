import React from "react";

import { Img, Text } from "components";

const C01HomepageHeading = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-auto"
          size="txtPoppinsSemiBold32"
        >
          {props?.text}
        </Text>
        <div className="flex flex-row gap-3 items-center justify-center w-auto">
          <Text
            className="text-base text-green-A700 w-auto"
            size="txtPoppinsMedium16GreenA700"
          >
            {props?.viewall}
          </Text>
          <Img
            className="h-3 w-[15px]"
            src="images/img_arrowleft.svg"
            alt="arrowleft_Two"
          />
        </div>
      </div>
    </>
  );
};

C01HomepageHeading.defaultProps = {
  text: "Popular Categories",
  viewall: "View All",
};

export default C01HomepageHeading;
