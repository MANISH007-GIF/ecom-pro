import React from "react";

import { Img, Text } from "components";

const C02HomepageBoxLayoutBannar2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-[432px] inset-[0] justify-center m-auto object-cover rounded-lg w-full"
          alt="rectangleFiftyFour"
          src={props?.rectanglefiftyfour}
        />
        <div className="absolute flex flex-col gap-5 inset-x-[0] items-center justify-start mx-auto top-[7%] w-auto md:w-full">
          <div className="flex flex-col gap-3 items-start justify-start w-auto md:w-full">
            <Text
              className="text-center text-gray-900 text-xs tracking-[0.36px] uppercase w-auto"
              size="txtPoppinsMedium12Gray900"
            >
              {props?.summerfruitcoll}
            </Text>
            {props?.startingat2399}
          </div>
          <div className="bg-white-A700 flex flex-row gap-3 items-center justify-center sm:px-5 px-8 py-3.5 rounded-[22px] w-auto">
            {!!props?.shopnow ? (
              <Text
                className="text-green-A700 text-justify text-sm w-auto"
                size="txtPoppinsSemiBold14GreenA700"
              >
                {props?.shopnow}
              </Text>
            ) : null}
            {!!props?.arrowleftThree ? (
              <Img
                className="h-3 w-[15px]"
                alt="arrowleft_Three"
                src={props?.arrowleftThree}
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

C02HomepageBoxLayoutBannar2.defaultProps = {
  rectanglefiftyfour: "images/img_rectangle54_432x312.png",
  summerfruitcoll: "HOt Sale",
  startingat2399: (
    <Text
      className="leading-[120.00%] max-w-[312px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900"
      size="txtPoppinsSemiBold32"
    >
      <span className="text-gray-900 font-poppins font-semibold">Save 37%</span>
      <span className="text-gray-900 font-poppins font-normal">
        <>
          {" "}
          on
          <br />
          Every Order
        </>
      </span>
    </Text>
  ),
};

export default C02HomepageBoxLayoutBannar2;
