import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import C07ShopOneBreadcrumbs from "components/C07ShopOneBreadcrumbs";
import Footer from "components/Footer";
import Header from "components/Header";

const ErrorPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
        <C07ShopOneBreadcrumbs
          className="bg-cover bg-gradient1  bg-no-repeat flex flex-col h-[120px] items-start justify-end p-[45px] md:px-10 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_breadcrumbs.png')" }}
          homeimage="images/img_home.svg"
          languagetext="404 Error Page"
        />
        <div className="flex flex-col items-center justify-start mt-20 md:px-5 w-[32%] md:w-full">
          <Img
            className="h-[354px]"
            src="images/img_salad_1.svg"
            alt="illustration"
          />
          <Text
            className="mt-[29px] sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900"
            size="txtPoppinsSemiBold40"
          >
            Oops! page not found
          </Text>
          <Text
            className="leading-[150.00%] mt-2.5 text-base text-center text-gray-600 w-full"
            size="txtPoppinsRegular16"
          >
            Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros.
            Maecenas sagittis tortor at metus mollis
          </Text>
          <Button
            className="cursor-pointer font-semibold min-w-[163px] mt-6 text-center text-sm"
            shape="round"
            color="green_A700"
            size="md"
            variant="fill"
          >
            Back to Home
          </Button>
        </div>
        <Footer className="flex items-center justify-center mt-20 md:px-5 w-full" />
      </div>
    </>
  );
};

export default ErrorPagePage;
