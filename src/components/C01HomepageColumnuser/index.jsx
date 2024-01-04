import React from "react";

import { Img, Text } from "components";

const C01HomepageColumnuser = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img className="h-[26px] w-8" src="images/img_user.svg" alt="user" />
        <Text
          className="leading-[150.00%] max-w-[376px] md:max-w-full text-gray-800 text-sm"
          size="txtPoppinsRegular14Gray800"
        >
          {props?.description}
        </Text>
        <div className="flex flex-row items-center justify-between pt-2 w-[376px] sm:w-full">
          <div className="flex flex-row gap-3 items-center justify-start w-[168px]">
            <Img
              className="h-14 md:h-auto rounded-[50%] w-14"
              src="images/img_image_56x56.png"
              alt="image"
            />
            <div className="flex flex-col items-start justify-start w-auto">
              <Text
                className="text-base text-center text-gray-900 w-auto"
                size="txtPoppinsMedium16"
              >
                {props?.reviewername}
              </Text>
              <Text
                className="text-center text-gray-500 text-sm w-auto"
                size="txtPoppinsRegular14"
              >
                {props?.reviewerrole}
              </Text>
            </div>
          </div>
          <Img
            className="h-5 w-[104px]"
            src="images/img_rating.svg"
            alt="rating"
          />
        </div>
      </div>
    </>
  );
};

C01HomepageColumnuser.defaultProps = {
  description:
    "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
  reviewername: "Robert Fox",
  reviewerrole: "Customer",
};

export default C01HomepageColumnuser;
