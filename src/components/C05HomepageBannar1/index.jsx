import React from "react";

import { Img, Text } from "components";

const C05HomepageBannar1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-[360px] inset-[0] justify-center m-auto object-cover rounded-lg w-full"
          src="images/img_image_48.png"
          alt="image_TwentyThree"
        />
        <div className="absolute flex flex-col gap-6 h-max inset-y-[0] items-start justify-start left-[6%] my-auto w-auto">
          <div className="flex flex-col gap-4 items-start justify-start w-auto">
            <div className="flex flex-col gap-2 items-start justify-start w-auto">
              <Text
                className="text-sm text-white-A700 tracking-[0.42px] uppercase w-auto"
                size="txtPoppinsMedium14"
              >
                {props?.saleofweektext}
              </Text>
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 w-auto"
                size="txtPoppinsSemiBold36WhiteA700"
              >
                {props?.salesofyeartext}
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-start justify-start w-auto">
              <div className="flex flex-col gap-1 items-center justify-start w-auto">
                <Text
                  className="text-center text-white-A700 text-xl w-auto"
                  size="txtPoppinsRegular20"
                >
                  {props?.zerotext}
                </Text>
                <Text
                  className="text-center text-white-A700_99 text-xs tracking-[0.36px] uppercase w-auto"
                  size="txtPoppinsRegular12WhiteA70099"
                >
                  {props?.daystext}
                </Text>
              </div>
              <Text
                className="text-base text-center text-white-A700_90 w-auto"
                size="txtPoppinsRegular16WhiteA70090"
              >
                {props?.twenty}
              </Text>
              <div className="flex flex-col gap-1 items-center justify-start w-auto">
                <Text
                  className="text-center text-white-A700 text-xl w-auto"
                  size="txtPoppinsRegular20"
                >
                  {props?.twotext}
                </Text>
                <Text
                  className="text-center text-white-A700_99 text-xs tracking-[0.36px] uppercase w-auto"
                  size="txtPoppinsRegular12WhiteA70099"
                >
                  {props?.hourstext}
                </Text>
              </div>
              <Text
                className="text-base text-center text-white-A700_90 w-auto"
                size="txtPoppinsRegular16WhiteA70090"
              >
                {props?.twentyone}
              </Text>
              <div className="flex flex-col gap-1 items-center justify-start w-auto">
                <Text
                  className="text-center text-white-A700 text-xl w-auto"
                  size="txtPoppinsRegular20"
                >
                  {props?.eighteentext}
                </Text>
                <Text
                  className="text-center text-white-A700_99 text-xs tracking-[0.36px] uppercase w-auto"
                  size="txtPoppinsRegular12WhiteA70099"
                >
                  {props?.minstext}
                </Text>
              </div>
              <Text
                className="text-base text-center text-white-A700_90 w-auto"
                size="txtPoppinsRegular16WhiteA70090"
              >
                {props?.twentytwo}
              </Text>
              <div className="flex flex-col gap-1 items-center justify-start w-auto">
                <Text
                  className="text-center text-white-A700 text-xl w-auto"
                  size="txtPoppinsRegular20"
                >
                  {props?.fortysixtext}
                </Text>
                <Text
                  className="text-center text-white-A700_99 text-xs tracking-[0.36px] uppercase w-auto"
                  size="txtPoppinsRegular12WhiteA70099"
                >
                  {props?.secstext}
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-green-A700 flex flex-row gap-3 items-center justify-center sm:px-5 px-8 py-3.5 rounded-[22px] w-auto">
            {!!props?.shopnowTwo ? (
              <Text
                className="text-sm text-white-A700 w-auto"
                size="txtPoppinsSemiBold14WhiteA700"
              >
                {props?.shopnowTwo}
              </Text>
            ) : null}
            {!!props?.arrowleftSix ? (
              <Img
                className="h-3 w-[15px]"
                alt="arrowleft_Six"
                src={props?.arrowleftSix}
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

C05HomepageBannar1.defaultProps = {
  saleofweektext: "sale off the week",
  salesofyeartext: "Sales of the Year",
  zerotext: "00",
  daystext: "Days",
  twenty: ":",
  twotext: "02",
  hourstext: "Hours",
  twentyone: ":",
  eighteentext: "18",
  minstext: "Mins",
  twentytwo: ":",
  fortysixtext: "46",
  secstext: "Secs",
};

export default C05HomepageBannar1;
