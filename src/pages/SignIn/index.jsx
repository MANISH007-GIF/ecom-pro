import React from "react";

import { Button, CheckBox, Img, Input, Line, Text } from "components";
import C07ShopOneBreadcrumbs from "components/C07ShopOneBreadcrumbs";
import Footer from "components/Footer";
import Header from "components/Header";

const SignInPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
        <C07ShopOneBreadcrumbs
          className="bg-cover bg-gradient1  bg-no-repeat flex flex-col h-[120px] items-start justify-end p-[45px] md:px-10 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_breadcrumbs.png')" }}
          homeimage="images/img_home.svg"
          vectoroneimage="images/img_vector_gray_500.svg"
          homeEight="Account"
          vectortwoimage="images/img_vector_gray_600.svg"
          languagetext="Login"
        />
        <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col gap-5 items-center justify-start mt-20 pb-8 pt-6 md:px-5 px-6 rounded-lg shadow-bs21 w-auto sm:w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-auto"
            size="txtPoppinsSemiBold32"
          >
            Sign In
          </Text>
          <div className="flex flex-col gap-[19px] items-center justify-start w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                <Input
                  name="inputfield"
                  placeholder="Email"
                  className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                  wrapClassName="border border-gray-300_01 border-solid w-full"
                  type="email"
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></Input>
                <Input
                  name="inputfield_One"
                  placeholder="Password"
                  className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                  wrapClassName="border border-gray-300_01 border-solid flex w-auto sm:w-full"
                  type="password"
                  suffix={
                    <Img
                      className="mt-0.5 mb-px h-5 ml-[35px]"
                      src="images/img_eyeopen_1.svg"
                      alt="eye-open 1"
                    />
                  }
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-row items-start justify-between w-[472px] sm:w-full">
                <CheckBox
                  className="text-left text-sm"
                  inputClassName="border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[3px] w-5"
                  name="rememberme"
                  id="rememberme"
                  label="Remember me"
                  color="white_A700"
                  variant="fill"
                ></CheckBox>
                <Text
                  className="text-gray-700 text-sm w-auto"
                  size="txtPoppinsRegular14Gray700"
                >
                  Forget Password
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer font-semibold text-center text-sm w-[472px]"
              shape="round"
              color="green_A700"
              size="md"
              variant="fill"
            >
              Login
            </Button>
            <div className="flex flex-row items-start justify-start pt-1 w-auto">
              <Text
                className="text-gray-700 text-sm w-auto"
                size="txtPoppinsRegular14Gray700"
              >
                Don’t have account?
              </Text>
              <Text
                className="text-gray-900 text-sm w-auto"
                size="txtPoppinsMedium14Gray900"
              >
                {" "}
                Register
              </Text>
            </div>
          </div>
        </div>
        <Footer className="flex items-center justify-center mt-20 md:px-5 w-full" />
      </div>
    </>
  );
};

export default SignInPage;
