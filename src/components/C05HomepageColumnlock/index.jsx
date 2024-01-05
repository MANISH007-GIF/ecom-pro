import React from "react";

import { Img, Input, Text } from "components";

const C05HomepageColumnlock = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[62px] items-center justify-start p-4 w-[10%] md:w-full"
          style={{ backgroundImage: "url('images/img_icon.svg')" }}
        >
          <Img
            className="h-6 my-[3px] w-6"
            src="images/img_lock.svg"
            alt="lock"
          />
        </div>
        <div className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full">
          <Text
            className="text-gray-900_01 text-sm tracking-[0.42px] uppercase w-auto"
            size="txtPoppinsMedium14Gray90001"
          >
            {props?.subscribenewsleOne}
          </Text>
          <div className="h-[45px] md:h-[49px] relative w-full">
            <Input
              name="inputfield"
              placeholder="Your email address"
              className="font-poppins p-0 placeholder:text-gray-500 text-left text-sm w-full"
              wrapClassName="absolute border border-gray-300_01 border-solid inset-y-[0] left-[0] my-auto rounded-[22px] w-[93%]"
              color="white_A700"
              size="xs"
              variant="fill"
            ></Input>
            <div className="absolute bg-green-A700 flex flex-col h-full inset-y-[0] items-center justify-center my-auto sm:px-5 px-8 py-3.5 right-[0] rounded-[22px] w-auto">
              {!!props?.subscribebuttontext ? (
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtPoppinsSemiBold14WhiteA700"
                >
                  {props?.subscribebuttontext}
                </Text>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C05HomepageColumnlock.defaultProps = {
  subscribenewsleOne: "Subscribe Newsletter",
};

export default C05HomepageColumnlock;
