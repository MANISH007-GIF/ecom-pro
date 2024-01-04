import React from "react";

import { Img, Text } from "components";

const C02HomepageBoxLayoutTeamcard1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[280px] sm:h-auto object-cover w-full"
          alt="image"
          src={props?.userimage}
        />
        <div className="flex flex-col gap-1 items-start justify-start w-auto">
          <Text
            className="text-gray-900 text-lg w-auto"
            size="txtPoppinsMedium18"
          >
            {props?.username}
          </Text>
          <Text
            className="text-gray-600 text-sm w-auto"
            size="txtPoppinsRegular14Gray600"
          >
            {props?.userrole}
          </Text>
        </div>
      </div>
    </>
  );
};

C02HomepageBoxLayoutTeamcard1.defaultProps = {
  userimage: "images/img_image_30.png",
  username: "Jane Cooper",
  userrole: "Worker",
};

export default C02HomepageBoxLayoutTeamcard1;
