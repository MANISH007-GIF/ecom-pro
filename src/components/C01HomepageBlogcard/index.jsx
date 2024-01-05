import React from "react";

import { Img, Text } from "components";

const C01HomepageBlogcard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[324px] relative w-full">
          <Img
            className="absolute h-[324px] inset-[0] justify-center m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
            alt="image"
            src={props?.userimage}
          />
          <div className="absolute bg-white-A700 bottom-[7%] flex flex-col h-[58px] items-center justify-start left-[6%] p-[5px] rounded w-[58px]">
            <Text
              className="text-center text-gray-900_01 text-xl"
              size="txtPoppinsMedium20"
            >
              {props?.age}
            </Text>
            <Text
              className="text-center text-gray-600 text-xs tracking-[0.36px] uppercase"
              size="txtPoppinsMedium12"
            >
              {props?.month}
            </Text>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-bl-lg rounded-br-lg w-auto md:w-full">
          <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
            <div className="flex flex-row gap-4 items-start justify-start w-auto">
              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                <Img
                  className="h-5 w-5"
                  src="images/img_tag1.svg"
                  alt="tagOne"
                />
                <Text
                  className="text-gray-800 text-sm w-auto"
                  size="txtPoppinsRegular14Gray800"
                >
                  {props?.category}
                </Text>
              </div>
              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                <Img
                  className="h-5 w-5"
                  src="images/img_user31.svg"
                  alt="userThirtyOne"
                />
                <Text
                  className="text-gray-800 text-sm w-auto"
                  size="txtPoppinsRegular14Gray800"
                >
                  {props?.admin}
                </Text>
              </div>
              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                <Img
                  className="h-[18px] w-[18px]"
                  src="images/img_bookmark.svg"
                  alt="bookmark"
                />
                <Text
                  className="text-gray-700 text-sm w-auto"
                  size="txtPoppinsRegular14Gray700"
                >
                  {props?.commentscounter}
                </Text>
              </div>
            </div>
            <Text
              className="leading-[150.00%] max-w-[376px] md:max-w-full text-green-800 text-lg"
              size="txtPoppinsMedium18Green800"
            >
              {props?.description}
            </Text>
          </div>
          <div className="flex flex-row gap-3 items-center justify-start w-auto">
            <Text
              className="text-base text-green-A700 w-auto"
              size="txtPoppinsSemiBold16GreenA700"
            >
              {props?.readmore}
            </Text>
            <Img
              className="h-3 w-[15px]"
              src="images/img_arrowleft.svg"
              alt="arrowleft"
            />
          </div>
        </div>
      </div>
    </>
  );
};

C01HomepageBlogcard.defaultProps = {
  userimage: "images/img_image_324x424.png",
  age: "18",
  month: "Nov",
  category: "Food",
  admin: "By Admin",
  commentscounter: "65 Comments",
  description:
    "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
  readmore: "Read More",
};

export default C01HomepageBlogcard;
