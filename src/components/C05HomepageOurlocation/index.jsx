import React from "react";

import { Img, Text } from "components";

const C05HomepageOurlocation = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[62px] w-14"
          src="images/img_floatingicon.svg"
          alt="floatingicon"
        />
        <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
          <Text
            className="text-gray-900 text-sm tracking-[0.42px] uppercase w-auto"
            size="txtPoppinsMedium14Gray900"
          >
            {props?.locationtext}
          </Text>
          <Text
            className="leading-[150.00%] max-w-[272px] md:max-w-full text-gray-700 text-sm"
            size="txtPoppinsRegular14Gray700"
          >
            {props?.addresstext}
          </Text>
        </div>
      </div>
    </>
  );
};

C05HomepageOurlocation.defaultProps = {
  locationtext: "Our Location",
  addresstext:
    "1901 Thornridge Cir. Shiloh, Washington DC 20020, United States",
};

export default C05HomepageOurlocation;
