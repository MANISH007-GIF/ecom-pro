import React from "react";

import { Button, Img, Text } from "components";

const C18SingleBlogBlogdetail = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[600px] sm:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
          src="images/img_image_600x872.png"
          alt="image"
        />
        <div className="flex flex-col items-start justify-start mt-[31px] w-auto md:w-full">
          <div className="flex flex-row gap-4 items-start justify-start pb-2 w-auto">
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <Img
                className="h-5 w-5"
                src="images/img_tag1_green_a700.svg"
                alt="tagOne"
              />
              <Text
                className="text-gray-800 text-sm w-auto"
                size="txtPoppinsRegular14Gray800"
              >
                {props?.food}
              </Text>
            </div>
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <Img
                className="h-5 w-5"
                src="images/img_user31_green_a700.svg"
                alt="userThirtyOne"
              />
              <Text
                className="text-gray-800 text-sm w-auto"
                size="txtPoppinsRegular14Gray800"
              >
                {props?.byadmin}
              </Text>
            </div>
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <Img
                className="h-[18px] w-[18px]"
                src="images/img_bookmark_green_a700.svg"
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
            className="leading-[140.00%] max-w-[871px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
            size="txtPoppinsMedium32Gray900"
          >
            {props?.maecenastempor}
          </Text>
          <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[872px] pb-6 pt-8 shadow-bs5 w-full">
            <div className="flex flex-row gap-3 items-start justify-start w-auto">
              <Img
                className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                src="images/img_images.png"
                alt="images"
              />
              <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtPoppinsMedium16"
                >
                  {props?.cameronwilliamsOne}
                </Text>
                <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtPoppinsRegular14Gray600"
                  >
                    {props?.p4april2021}
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtPoppinsRegular14Gray600"
                  >
                    {props?.fortythree}
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtPoppinsRegular14Gray600"
                  >
                    {props?.time}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-1 items-start justify-start w-auto">
              <Button
                className="flex h-10 items-center justify-center rounded-[50%] w-10"
                shape="circle"
                size="md"
              >
                <Img
                  className="h-[18px]"
                  src="images/img_facebook1_gray_800.svg"
                  alt="facebookOne"
                />
              </Button>
              <Button
                className="flex h-10 items-center justify-center rounded-[50%] w-10"
                shape="round"
                color="green_A700"
                size="md"
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
                src="images/img_user_gray_800.svg"
                alt="user"
              />
              <Img
                className="h-10 rounded-[50%] w-10"
                src="images/img_info.svg"
                alt="info"
              />
              <Img
                className="h-10 rounded-[50%] w-10"
                src="images/img_settings_gray_800.svg"
                alt="settings"
              />
            </div>
          </div>
        </div>
        <Text
          className="leading-[150.00%] mt-6 text-gray-900 text-xl w-full"
          size="txtPoppinsMedium20"
        >
          {props?.description}
        </Text>
        <Text
          className="leading-[150.00%] mt-4 text-gray-600 text-lg w-full"
          size="txtPoppinsRegular18Gray600"
        >
          {props?.descriptionOne}
        </Text>
        <Text
          className="leading-[150.00%] mt-6 text-gray-600 text-lg w-full"
          size="txtPoppinsRegular18Gray600"
        >
          {props?.descriptionTwo}
        </Text>
        <div className="flex sm:flex-col flex-row gap-6 items-center justify-between mt-6 w-full">
          <Img
            className="h-[356px] md:h-auto object-cover rounded-lg"
            src="images/img_image_356x424.png"
            alt="image_One"
          />
          <Img
            className="h-[356px] md:h-auto object-cover rounded-lg"
            src="images/img_image_74.png"
            alt="image_Two"
          />
        </div>
        <Text
          className="leading-[150.00%] mt-6 text-gray-600 text-lg w-full"
          size="txtPoppinsRegular18Gray600"
        >
          {props?.descriptionThree}
        </Text>
        <div className="h-[250px] md:h-[274px] mt-6 relative w-full">
          <Img
            className="absolute h-[250px] inset-[0] justify-center m-auto object-cover rounded-lg w-full"
            src="images/img_rectangle51.png"
            alt="rectangleFiftyOne"
          />
          <div className="absolute flex flex-row gap-[50px] h-max inset-y-[0] items-center justify-center left-[6%] my-auto w-[38%]">
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <Text
                  className="text-gray-500 text-sm tracking-[0.42px] uppercase w-auto"
                  size="txtPoppinsMedium14Gray500"
                >
                  {props?.summersales}
                </Text>
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 w-auto"
                  size="txtPoppinsSemiBold36WhiteA700"
                >
                  {props?.freshfruit}
                </Text>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[162px]"
                rightIcon={
                  <Img
                    className="mt-[3px] mb-[5px] ml-3"
                    src="images/img_arrowleft_white_a700.svg"
                    alt="arrow_left"
                  />
                }
                shape="round"
                color="green_A700"
                size="md"
                variant="fill"
              >
                <div className="font-poppins font-semibold text-left text-sm">
                  {props?.shopNow}
                </div>
              </Button>
            </div>
            <div className="bg-gray-900 flex flex-col h-[91px] items-center justify-start mb-[15px] mt-[19px] p-3.5 rounded-[45px] w-[91px]">
              <div className="flex flex-col gap-0.5 items-center justify-center w-auto">
                <div className="md:h-[33px] h-[43px] relative w-full">
                  <Text
                    className="absolute inset-x-[0] mx-auto text-[11px] text-center text-gray-400 top-[0] tracking-[0.33px] uppercase w-max"
                    size="txtPoppinsMedium11"
                  >
                    {props?.upto}
                  </Text>
                  <Text
                    className="absolute bottom-[0] inset-x-[0] mx-auto text-2xl md:text-[22px] text-center text-orange-600 sm:text-xl w-max"
                    size="txtPoppinsSemiBold24Orange600"
                  >
                    {props?.fiftysix}
                  </Text>
                </div>
                <Text
                  className="text-center text-gray-400 text-sm w-auto"
                  size="txtPoppinsRegular14Gray400"
                >
                  {props?.off}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C18SingleBlogBlogdetail.defaultProps = {
  food: "Food",
  byadmin: "By Admin",
  commentscounter: "65 Comments",
  maecenastempor:
    "Maecenas tempor urna sed quam mollis, a placerat dui fringill Suspendisse.",
  cameronwilliamsOne: "Cameron Williamson",
  p4april2021: "4 April, 2021",
  fortythree: "•",
  time: "6 min read",
  description:
    "Maecenas lacinia felis nec placerat sollicitudin. Quisque placerat dolor at scelerisque imperdiet. Phasellus tristique felis dolor.",
  descriptionOne:
    "Maecenas elementum in risus sed condimentum. Duis convallis ante ac tempus maximus. Fusce malesuada sed velit ut dictum. Morbi faucibus vitae orci at euismod. Integer auctor augue in erat vehicula, quis fermentum ex finibus.",
  descriptionTwo: (
    <>
      Mauris pretium elit a dui pulvinar, in ornare sapien euismod. Nullam
      interdum nisl ante, id feugiat quam euismod commodo. Sed ultrices lectus
      ut iaculis rhoncus. Aenean non dignissim justo, at fermentum turpis. Sed
      molestie, ligula ut molestie ultrices, tellus ligula viverra neque,
      malesuada consectetur diam sapien volutpat risus.Quisque eget tortor
      lobortis, facilisis metus eu, elementum est. Nunc sit amet erat quis ex
      convallis suscipit. ur ridiculus mus.
    </>
  ),
  descriptionThree: (
    <>
      Sed dictum non nulla eu imperdiet. Duis elit libero, vulputate quis
      vehicula ut, vestibulum ut mauris. Nullam non felis varius dui rutrum
      rutrum in a nisi. Suspendisse elementum rutrum lorem sed luctus. Proin
      iaculis euismod metus non sollicitudin. Duis vel luctus lacus. Nullam
      faucibus iaculis convallis. In ullamcorper nibh ipsum, eget lacinia eros
      pulvinar a. Integer accumsan arcu nec faucibus ultricies.
    </>
  ),
  summersales: "Summer Sales",
  freshfruit: "Fresh Fruit",
  shopNow: "Shop Now",
  upto: "up to",
  fiftysix: "56%",
  off: "Off",
};

export default C18SingleBlogBlogdetail;
