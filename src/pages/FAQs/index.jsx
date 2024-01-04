import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import C07ShopOneBreadcrumbs from "components/C07ShopOneBreadcrumbs";
import Footer from "components/Footer";
import Header from "components/Header";

const FAQsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
        <C07ShopOneBreadcrumbs
          className="bg-cover bg-gradient1  bg-no-repeat flex flex-col h-[120px] items-start justify-end p-[45px] md:px-10 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_breadcrumbs.png')" }}
          homeimage="images/img_home.svg"
          vectortwoimage="images/img_vector_gray_600.svg"
          languagetext="Faqs"
        />
        <div className="h-[1336px] md:h-[888px] mt-20 md:px-5 relative w-full">
          <Img
            className="absolute h-[808px] object-cover right-[8%] top-[0] w-[39%]"
            src="images/img_image_808x741.png"
            alt="image"
          />
          <div className="absolute flex flex-col items-start justify-start left-[16%] top-[8%] w-[34%]">
            <Text
              className="leading-[120.00%] text-5xl sm:text-[38px] md:text-[44px] text-gray-900 w-[83%] sm:w-full"
              size="txtPoppinsSemiBold48"
            >
              Welcome, Let’s Talk About Our Ecobazar
            </Text>
            <div className="flex flex-col items-center justify-start mt-8 w-full">
              <Input
                name="timeZone"
                placeholder="In elementum est a ante sodales iaculis."
                className="!placeholder:text-green-800 !text-green-800 font-medium p-0 text-base text-left w-full"
                wrapClassName="border border-green-300 border-solid flex rounded-tl-md rounded-tr-md w-auto md:w-full"
                suffix={
                  <div className="h-8 ml-[35px] w-8 bg-gray-100 p-2.5 rounded-[50%]">
                    <Img
                      className="h-3 my-auto"
                      src="images/img_plus1.svg"
                      alt="Plus"
                    />
                  </div>
                }
                color="white_A700"
                size="xs"
                variant="fill"
              ></Input>
              <div className="bg-white-A700 border border-green-300 border-solid flex flex-col items-start justify-start p-4 rounded-bl-md rounded-br-md w-auto md:w-full">
                <Text
                  className="leading-[150.00%] max-w-[616px] md:max-w-full text-gray-700 text-sm"
                  size="txtPoppinsRegular14Gray700"
                >
                  <>
                    Morbi porttitor ligula in nunc varius sagittis. Proin dui
                    nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis
                    ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel
                    tellus at accumsan. Donec a eros non massa vulputate ornare.
                    Vivamus ornare commodo ante, at commodo felis congue vitae.
                  </>
                </Text>
              </div>
            </div>
            <Input
              name="faqs"
              placeholder="Etiam lobortis massa eu nibh tempor elementum."
              className="font-medium p-0 placeholder:text-gray-900 text-base text-left w-full"
              wrapClassName="flex mt-[13px] w-auto md:w-full"
              suffix={
                <div className="h-8 ml-[35px] w-8 bg-white-A700 p-2.5 rounded-[50%] flex justify-center items-center">
                  <Img
                    className="h-3 my-auto"
                    src="images/img_plus1.svg"
                    alt="plus 1"
                  />
                </div>
              }
              shape="round"
              color="gray_100"
              size="xs"
              variant="fill"
            ></Input>
            <Input
              name="timeZone_One"
              placeholder="In elementum est a ante sodales iaculis."
              className="font-medium p-0 placeholder:text-gray-900 text-base text-left w-full"
              wrapClassName="flex mt-3 w-auto md:w-full"
              suffix={
                <div className="h-8 ml-[35px] w-8 bg-white-A700 p-2.5 rounded-[50%] flex justify-center items-center">
                  <Img
                    className="h-3 my-auto"
                    src="images/img_plus1.svg"
                    alt="plus 1"
                  />
                </div>
              }
              shape="round"
              color="gray_100"
              size="xs"
              variant="fill"
            ></Input>
            <Input
              name="faqs_One"
              placeholder="Aenean quis quam nec lacus semper dignissim."
              className="font-medium p-0 placeholder:text-gray-900 text-base text-left w-full"
              wrapClassName="flex mt-3 w-auto md:w-full"
              suffix={
                <div className="h-8 ml-[35px] w-8 bg-white-A700 p-2.5 rounded-[50%] flex justify-center items-center">
                  <Img
                    className="h-3 my-auto"
                    src="images/img_plus1.svg"
                    alt="plus 1"
                  />
                </div>
              }
              shape="round"
              color="gray_100"
              size="xs"
              variant="fill"
            ></Input>
            <Input
              name="faqs_Two"
              placeholder="Nulla tincidunt eros id tempus accumsan."
              className="font-medium p-0 placeholder:text-gray-900 text-base text-left w-full"
              wrapClassName="flex mt-3 w-auto md:w-full"
              suffix={
                <div className="h-8 ml-[35px] w-8 bg-white-A700 p-2.5 rounded-[50%] flex justify-center items-center">
                  <Img
                    className="h-3 my-auto"
                    src="images/img_plus1.svg"
                    alt="plus 1"
                  />
                </div>
              }
              shape="round"
              color="gray_100"
              size="xs"
              variant="fill"
            ></Input>
          </div>
          <Footer className="absolute bottom-[0] flex inset-x-[0] items-center justify-center mx-auto w-full" />
        </div>
      </div>
    </>
  );
};

export default FAQsPage;
