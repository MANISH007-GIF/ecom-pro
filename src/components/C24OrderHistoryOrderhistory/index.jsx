import React from "react";

import { Text } from "components";

const C24OrderHistoryOrderhistory = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-auto">
          <Text
            className="text-blue_gray-900 text-sm w-auto"
            size="txtPoppinsRegular14Bluegray900"
          >
            {props?.dynamictext}
          </Text>
          <Text
            className="text-blue_gray-900 text-sm w-auto"
            size="txtPoppinsRegular14Bluegray900"
          >
            {props?.dynamictext1}
          </Text>
        </div>
        <Text
          className="md:ml-[0] ml-[130px] text-blue_gray-900 text-sm"
          size="txtPoppinsRegular14Bluegray900"
        >
          {props?.dynamictext2}
        </Text>
        <Text
          className="ml-36 md:ml-[0] text-blue_gray-900 text-sm"
          size="txtPoppinsRegular14Bluegray900"
        >
          {props?.dynamictext3}
        </Text>
        <Text
          className="md:ml-[0] ml-[125px] md:mt-0 mt-0.5 text-blue_gray-900 text-sm"
          size="txtPoppinsRegular14Bluegray900"
        >
          {props?.dynamictext4}
        </Text>
        <Text
          className="md:ml-[0] ml-[106px] text-green-A700 text-sm"
          size="txtPoppinsMedium14GreenA700"
        >
          {props?.dynamictext5}
        </Text>
      </div>
    </>
  );
};

C24OrderHistoryOrderhistory.defaultProps = {
  dynamictext: "#",
  dynamictext1: "3933",
  dynamictext2: "4 April, 2021",
  dynamictext3: "$135.00 (5 Products)",
  dynamictext4: "Processing",
  dynamictext5: "View Details",
};

export default C24OrderHistoryOrderhistory;
