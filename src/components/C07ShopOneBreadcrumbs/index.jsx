import React from "react";

import { Img, Text } from "components";

const C07ShopOneBreadcrumbs = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_breadcrumbs.png')" }}
      >
        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[254px] mt-0.5 w-[24%] md:w-full">
          <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-auto sm:w-full">
            <Img className="h-6 w-6" alt="home_Six" src={props?.homeimage} />
            {!!props?.vectorimage ? (
              <Img className="h-2 w-1" alt="vector" src={props?.vectorimage} />
            ) : null}
            {!!props?.homeSeven ? (
              <Text
                className="text-base text-gray-500 w-auto"
                size="txtPoppinsRegular16Gray500"
              >
                {props?.homeSeven}
              </Text>
            ) : null}
            {!!props?.vectoroneimage ? (
              <Img
                className="h-2 w-1"
                alt="vector_One"
                src={props?.vectoroneimage}
              />
            ) : null}
            {!!props?.homeEight ? (
              <Text
                className="text-base text-gray-500 w-auto"
                size="txtPoppinsRegular16Gray500"
              >
                {props?.homeEight}
              </Text>
            ) : null}
            {!!props?.vectortwoimage ? (
              <Img
                className="h-2 w-1"
                alt="vector_Two"
                src={props?.vectortwoimage}
              />
            ) : null}
            <Text
              className="text-base text-green-A700 w-auto"
              size="txtPoppinsRegular16GreenA700"
            >
              {props?.languagetext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

C07ShopOneBreadcrumbs.defaultProps = {
  homeimage: "images/img_home_gray_500.svg",
  languagetext: "Chinese Cabbage",
};

export default C07ShopOneBreadcrumbs;
