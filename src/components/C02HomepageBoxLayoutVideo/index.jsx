import React from "react";

import { Img, Text } from "components";

const C02HomepageBoxLayoutVideo = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-[396px] inset-[0] justify-center m-auto object-cover w-full"
          src="images/img_rectangle55.png"
          alt="rectangleFiftyFive"
        />
        <div className="absolute flex flex-col gap-[30px] h-max inset-[0] items-center justify-center m-auto w-[38%]">
          <Text
            className="leading-[120.00%] text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700 w-full"
            size="txtPoppinsSemiBold36WhiteA700"
          >
            {props?.titletext}
          </Text>
          <Img
            className="h-20 w-20"
            src="images/img_overflowmenu.svg"
            alt="overflowmenu"
          />
        </div>
      </div>
    </>
  );
};

C02HomepageBoxLayoutVideo.defaultProps = {
  titletext: "We’re the Best Organic Farm in the World",
};

export default C02HomepageBoxLayoutVideo;
