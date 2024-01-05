import React from "react";

import { Button, CheckBox, Img, Input, Text } from "components";

const C06NewsletterPopupNewsletter = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-0.5 w-full">
          <Img
            className="h-[380px] md:h-auto md:mt-0 mt-0.5 object-cover rounded"
            src="images/img_bg_380x354.png"
            alt="bg"
          />
          <div className="flex flex-col items-start justify-start">
            <div className="md:h-24 h-[138px] relative w-full">
              <Button
                className="absolute flex h-[45px] items-center justify-center right-[0] top-[0] w-[45px]"
                shape="round"
                color="white_A700"
                size="md"
                variant="fill"
              >
                <Img className="h-[25px]" src="images/img_x1.svg" alt="x1" />
              </Button>
              <Text
                className="absolute bottom-[0] leading-[120.00%] left-[0] sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900_01 w-[94%] sm:w-full"
                size="txtPoppinsSemiBold40"
              >
                {props?.subcribeournews}
              </Text>
            </div>
            {props?.offer}
            <div className="h-[49px] md:h-[73px] mt-6 relative w-[94%] sm:w-full">
              <Input
                name="description"
                placeholder="Enter your email"
                className="!placeholder:text-gray-600 !text-gray-600 font-poppins p-0 text-left text-sm w-full"
                wrapClassName="absolute border border-gray-300_01 border-solid inset-y-[0] left-[0] my-auto rounded-[24px] w-[81%]"
                color="white_A700"
                size="sm"
                variant="fill"
              ></Input>
              <Button
                className="absolute cursor-pointer font-poppins font-semibold h-full inset-y-[0] min-w-[147px] my-auto right-[0] rounded-[24px] text-center text-sm"
                shape="round"
                color="green_A700"
                size="xl"
                variant="fill"
              >
                {props?.subscribe}
              </Button>
            </div>
            <CheckBox
              className="font-poppins md:ml-[0] ml-[114px] mt-12 text-left text-sm"
              inputClassName="border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[3px] w-5"
              name="donotshowthis"
              id="donotshowthis"
              label="Do not show this window"
              color="white_A700"
              variant="fill"
            ></CheckBox>
          </div>
        </div>
      </div>
    </>
  );
};

C06NewsletterPopupNewsletter.defaultProps = {
  subcribeournews: "Subcribe to Our Newsletter",
  offer: (
    <Text
      className="leading-[150.00%] mt-3 text-base text-center text-gray-500 w-[94%] sm:w-full"
      size="txtPoppinsRegular16Gray500"
    >
      <span className="text-gray-500 font-poppins font-normal">
        Subscribe to our newlletter and Save your{" "}
      </span>
      <span className="text-orange-600 font-poppins font-semibold">
        20% money
      </span>
      <span className="text-gray-500 font-poppins font-normal">
        {" "}
        with discount code today.
      </span>
    </Text>
  ),
  subscribe: "Subscribe",
};

export default C06NewsletterPopupNewsletter;
