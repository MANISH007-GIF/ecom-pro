import React from "react";

import { Img, Text } from "components";

const C05HomepageContactus = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[62px] w-14"
          src="images/img_user_green_a700.svg"
          alt="user"
        />
        <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
          <Text
            className="text-gray-900 text-sm tracking-[0.42px] uppercase w-auto"
            size="txtPoppinsMedium14Gray900"
          >
            {props?.callus247}
          </Text>
          <Text
            className="text-2xl md:text-[22px] text-green-A700 sm:text-xl w-[183px]"
            size="txtPoppinsRegular24"
          >
            {props?.p3035550105}
          </Text>
        </div>
      </div>
    </>
  );
};

C05HomepageContactus.defaultProps = {
  callus247: "Call Us 24/7",
  p3035550105: "(303) 555-0105",
};

export default C05HomepageContactus;
