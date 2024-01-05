import React from "react";

import { Button, Img, Line, PagerIndicator, Text } from "components";

const C02HomepageBoxLayoutBannar = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-[560px] inset-[0] justify-center m-auto object-cover rounded-[12px] w-full"
          src="images/img_rectangle52.png"
          alt="rectangleFiftyTwo"
        />
        <div className="absolute bottom-[6%] flex flex-col md:gap-10 gap-[99px] items-start justify-start left-[5%] w-[39%]">
          <div className="flex flex-col gap-8 items-start justify-start w-auto sm:w-full">
            <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
              <Text
                className="leading-[120.00%] max-w-[382px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                size="txtPoppinsSemiBold48WhiteA700"
              >
                {props?.freshhealthy}
              </Text>
              <div className="flex flex-row gap-3 items-center justify-start w-auto">
                <Line className="bg-green-A700 h-14 w-0.5" />
                {props?.offer}
              </div>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[191px] rounded-[25px]"
              rightIcon={
                <Img
                  className="mt-1 mb-[7px] ml-4"
                  src="images/img_arrowleft_white_a700.svg"
                  alt="arrow_left"
                />
              }
              color="green_A700"
              size="lg"
              variant="fill"
            >
              <div className="font-poppins font-semibold text-base text-left">
                {props?.shopNow}
              </div>
            </Button>
          </div>
          <PagerIndicator
            className="flex gap-2 h-2.5 items-center justify-start w-[46px]"
            count={3}
            activeCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-white-A700 w-2.5"
            activeIndex={1}
            inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-white-A700_4c w-2.5"
            selectedWrapperCss="inline-block"
            unselectedWrapperCss="inline-block"
          />
        </div>
      </div>
    </>
  );
};

C02HomepageBoxLayoutBannar.defaultProps = {
  freshhealthy: (
    <>
      Fresh & Healthy
      <br />
      Organic Food
    </>
  ),
  offer: (
    <Text
      className="leading-[120.00%] max-w-[137px] md:max-w-full text-2xl md:text-[22px] text-white-A700_99 sm:text-xl tracking-[0.72px] uppercase"
      size="txtPoppinsMedium24WhiteA70099"
    >
      <span className="text-white-A700_99 font-poppins text-left font-medium">
        <>
          Sale Up to
          <br />
        </>
      </span>
      <span className="text-white-A700 font-poppins text-left font-medium">
        48%
      </span>
      <span className="text-white-A700_99 font-poppins text-left font-medium">
        {" "}
        off
      </span>
    </Text>
  ),
  shopNow: "Shop now",
};

export default C02HomepageBoxLayoutBannar;
