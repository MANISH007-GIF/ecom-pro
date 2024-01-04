import React from "react";

import { Text } from "components";

const C07ShopOneCategories = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 border border-green-A700 border-solid flex flex-col h-5 items-center justify-start p-1 rounded-[50%] w-5">
          {!!props?.dynamicproperty1 ? (
            <div className="bg-green-A700 h-3 rounded-[50%] w-3"></div>
          ) : null}
        </div>
        <div className="flex flex-row items-start justify-start w-auto">
          <Text
            className="text-gray-900 text-sm w-auto"
            size="txtPoppinsRegular14Gray900"
          >
            {props?.dynamicproperty2}
          </Text>
          <Text
            className="text-gray-600 text-sm w-auto"
            size="txtPoppinsRegular14Gray600"
          >
            {props?.dynamicproperty3}
          </Text>
        </div>
      </div>
    </>
  );
};

C07ShopOneCategories.defaultProps = {
  dynamicproperty2: "Vegetables",
  dynamicproperty3: " (150)",
};

export default C07ShopOneCategories;
