import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import C07ShopOneBreadcrumbs from "components/C07ShopOneBreadcrumbs";
import Footer from "components/Footer";
import Header from "components/Header";

const ContactPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="bg-white-A700 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
          <C07ShopOneBreadcrumbs
            className="bg-cover bg-gradient1  bg-no-repeat flex flex-col h-[120px] items-start justify-end p-[47px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_breadcrumbs.png')" }}
            homeimage="images/img_home.svg"
            languagetext="Contact"
          />
          <div className="flex md:flex-col flex-row gap-6 items-center justify-center max-w-[1320px] mt-20 mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex flex-col items-start justify-start px-5 rounded-lg shadow-bs21 w-auto">
              <div className="flex flex-col gap-4 items-center justify-start py-6 w-auto">
                <Img
                  className="h-[51px] w-[51px]"
                  src="images/img_mappin.svg"
                  alt="mappin"
                />
                <Text
                  className="leading-[170.00%] max-w-[272px] md:max-w-full text-base text-blue_gray-900 text-center"
                  size="txtPoppinsRegular16Bluegray900"
                >
                  2715 Ash Dr. San Jose, South Dakota 83475
                </Text>
              </div>
              <Line className="bg-gray-300_01 h-px w-full" />
              <div className="flex flex-col gap-4 items-center justify-start py-6 w-auto">
                <Img
                  className="h-[51px] w-[51px]"
                  src="images/img_lock_green_800.svg"
                  alt="lock"
                />
                <Text
                  className="leading-[170.00%] text-base text-blue_gray-900 text-center"
                  size="txtPoppinsRegular16Bluegray900"
                >
                  <>
                    Proxy@gmail.com
                    <br />
                    Help.proxy@gmail.com
                  </>
                </Text>
              </div>
              <Line className="bg-gray-300_01 h-px w-full" />
              <div className="flex flex-col gap-4 items-center justify-start py-6 w-auto">
                <Img
                  className="h-[51px] w-[51px]"
                  src="images/img_call_green_800.svg"
                  alt="call_One"
                />
                <Text
                  className="leading-[170.00%] text-base text-blue_gray-900 text-center"
                  size="txtPoppinsRegular16Bluegray900"
                >
                  <>
                    (219) 555-0114
                    <br />
                    (164) 333-0487
                  </>
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[46px] md:px-10 sm:px-5 rounded-lg shadow-bs21 w-3/4 md:w-full">
              <div className="flex flex-col items-start justify-start mb-[3px] w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                  size="txtPoppinsSemiBold24Gray900"
                >
                  Just Say Hello!
                </Text>
                <Text
                  className="leading-[150.00%] mt-[5px] text-gray-600 text-sm w-[55%] sm:w-full"
                  size="txtPoppinsRegular14Gray600"
                >
                  Do you fancy saying hi to me or you want to get started with
                  your project and you need my help? Feel free to contact me.
                </Text>
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-between mt-6 w-full">
                  <Input
                    name="inputfield"
                    placeholder="Template Cookie"
                    className="!placeholder:text-gray-700 !text-gray-700 p-0 text-base text-left w-full"
                    wrapClassName="border border-gray-300_01 border-solid sm:flex-1 sm:w-full"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  ></Input>
                  <Input
                    name="email"
                    placeholder="zakirsoft@gmail.com"
                    className="!placeholder:text-gray-700 !text-gray-700 p-0 text-base text-left w-full"
                    wrapClassName="border border-gray-300_01 border-solid sm:flex-1 sm:w-full"
                    type="email"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  ></Input>
                </div>
                <Input
                  name="inputfield_One"
                  placeholder="Hello|"
                  className="!placeholder:text-gray-900 !text-gray-900 p-0 text-base text-left w-full"
                  wrapClassName="border border-green-A700 border-solid mt-4 w-full"
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></Input>
                <Input
                  name="inputfield_Two"
                  placeholder="Subjects"
                  className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                  wrapClassName="border border-gray-300_01 border-solid mt-4 w-full"
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></Input>
                <Button
                  className="cursor-pointer font-semibold min-w-[199px] mt-6 rounded-[25px] text-base text-center"
                  color="green_A700"
                  size="md"
                  variant="fill"
                >
                  Send Message
                </Button>
              </div>
            </div>
          </div>
          <Img
            className="h-[400px] sm:h-auto mt-20 object-cover w-full"
            src="images/img_mapimage.png"
            alt="mapimage"
          />
          <Footer className="flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
