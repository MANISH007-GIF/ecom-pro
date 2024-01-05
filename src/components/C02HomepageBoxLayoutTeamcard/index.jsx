import React from "react";

import { Button, Img, Text } from "components";

const C02HomepageBoxLayoutTeamcard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[280px] relative w-full">
          <Img
            className="absolute h-[280px] inset-[0] justify-center m-auto object-cover w-full"
            alt="image_Eight"
            src={props?.userimage}
          />
          <div className="absolute flex flex-row gap-1 h-max inset-[0] items-center justify-center m-auto w-auto">
            <Button
              className="flex h-10 items-center justify-center w-10"
              shape="circle"
              size="lg"
            >
              <Img
                className="h-[18px]"
                src="images/img_facebook1.svg"
                alt="facebookOne"
              />
            </Button>
            <Button
              className="flex h-10 items-center justify-center rounded-[50%] w-10"
              shape="round"
              color="green_A700"
              size="lg"
              variant="fill"
            >
              <Img
                className="h-[18px]"
                src="images/img_twitter1_white_a700.svg"
                alt="twitterOne"
              />
            </Button>
            <Img
              className="h-10 rounded-[50%] w-10"
              src="images/img_settings_white_a700_40x40.svg"
              alt="settings"
            />
            <Img
              className="h-10 rounded-[50%] w-10"
              src="images/img_info_white_a700.svg"
              alt="info"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 items-start justify-start w-auto">
          <Text
            className="text-gray-900_01 text-lg w-auto"
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

C02HomepageBoxLayoutTeamcard.defaultProps = {
  userimage: "images/img_image_280x312.png",
  username: "Jenny Wilson",
  userrole: "Ceo & Founder",
};

export default C02HomepageBoxLayoutTeamcard;
