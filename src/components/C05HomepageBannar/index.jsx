import React from "react";

import { Img, Text } from "components";

const C05HomepageBannar = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-[360px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-full"
          src="images/img_image_360x648.png"
          alt="image_TwentyTwo"
        />
        <div className="absolute flex flex-col gap-6 h-max inset-y-[0] items-start justify-start left-[6%] my-auto w-auto">
          <div className="flex flex-col gap-5 items-start justify-start w-auto">
            <div className="flex flex-col gap-2 items-start justify-start w-auto">
              <Text
                className="text-sm text-white-A700 tracking-[0.42px] uppercase w-auto"
                size="txtPoppinsMedium14"
              >
                {props?.p100organic}
              </Text>
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 w-auto"
                size="txtPoppinsSemiBold36WhiteA700"
              >
                {props?.fruitvegetable}
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Text
                className="text-center text-sm text-white-A700_a2 w-auto"
                size="txtPoppinsRegular14WhiteA700a2"
              >
                {props?.startingat}
              </Text>
              <div className="bg-orange-600 flex flex-col items-start justify-start px-2 py-1 rounded-[5px] w-auto">
                {!!props?.priceTwo ? (
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtPoppinsMedium16"
                  >
                    {props?.priceTwo}
                  </Text>
                ) : null}
              </div>
            </div>
          </div>
          <div className="bg-green-A700 flex flex-row gap-3 items-center justify-center sm:px-5 px-8 py-3.5 rounded-[22px] w-auto">
            {!!props?.shopnowOne ? (
              <Text
                className="text-sm text-white-A700 w-auto"
                size="txtPoppinsSemiBold14WhiteA700"
              >
                {props?.shopnowOne}
              </Text>
            ) : null}
            {!!props?.arrowleftFive ? (
              <Img
                className="h-3 w-[15px]"
                alt="arrowleft_Five"
                src={props?.arrowleftFive}
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

C05HomepageBannar.defaultProps = {
  p100organic: "100% Organic",
  fruitvegetable: "Fruit & Vegetable",
  startingat: "Starting at:",
};

export default C05HomepageBannar;
