import React from "react";

import { Img, Text } from "components";

const C04HomepageVideo = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-[642px] inset-[0] justify-center m-auto object-cover rounded-[20px] w-full"
          src="images/img_image_642x1320.png"
          alt="image_Three"
        />
        <div className="absolute bottom-1/4 flex flex-col gap-8 inset-x-[0] items-center justify-center mx-auto w-auto">
          <div className="flex flex-col gap-3 items-center justify-start w-auto sm:w-full">
            <Text
              className="text-base text-center text-white-A700 tracking-[0.32px] uppercase w-auto"
              size="txtSegoeScript16WhiteA700"
            >
              {props?.videotext}
            </Text>
            <Text
              className="leading-[120.00%] max-w-[495px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700"
              size="txtPoppinsSemiBold36WhiteA700"
            >
              {props?.organicfarmtext}
            </Text>
          </div>
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

C04HomepageVideo.defaultProps = {
  videotext: "Video",
  organicfarmtext: "We’re the Best Organic Farm in the World",
};

export default C04HomepageVideo;
