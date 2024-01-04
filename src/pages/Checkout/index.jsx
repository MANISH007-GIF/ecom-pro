import React from "react";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  Radio,
  RadioGroup,
  Text,
  TextArea,
} from "components";
import C07ShopOneBreadcrumbs from "components/C07ShopOneBreadcrumbs";
import Footer from "components/Footer";
import Header from "components/Header";

const CheckoutPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="bg-white-A700 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
          <C07ShopOneBreadcrumbs
            className="bg-cover bg-gradient1  bg-no-repeat flex flex-col h-[120px] items-start justify-end p-[45px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_breadcrumbs.png')" }}
            homeimage="images/img_home.svg"
            homeEight="Shopping Cart"
            vectortwoimage="images/img_vector_gray_600.svg"
            languagetext="Checkout"
          />
          <div className="flex md:flex-col flex-row gap-6 items-start justify-center max-w-[1320px] mt-8 mx-auto md:px-5 w-full">
            <div className="h-[706px] md:h-[889px] sm:h-[983px] relative w-[67%] md:w-full">
              <div className="flex flex-col gap-2 h-full items-start justify-start ml-auto mt-[244px] w-auto">
                <Text
                  className="text-gray-900 text-sm w-auto"
                  size="txtPoppinsRegular14Gray900"
                >
                  Zip Code
                </Text>
                <Input
                  name="inputfield"
                  placeholder="Zip Code"
                  className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                  wrapClassName="border border-gray-300_01 border-solid w-full"
                  type="number"
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></Input>
              </div>
              <div className="absolute flex flex-col gap-8 h-full inset-[0] items-center justify-start m-auto w-auto">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                      size="txtPoppinsMedium24"
                    >
                      Billing Information
                    </Text>
                    <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between mt-[17px] w-full">
                      <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-gray-900 text-sm w-auto"
                          size="txtPoppinsRegular14Gray900"
                        >
                          First name
                        </Text>
                        <Input
                          name="inputfield_One"
                          placeholder="Your first name"
                          className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                          wrapClassName="border border-gray-300_01 border-solid w-full"
                          type="text"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-gray-900 text-sm w-auto"
                          size="txtPoppinsRegular14Gray900"
                        >
                          Last name
                        </Text>
                        <Input
                          name="inputfield_Two"
                          placeholder="Your last name"
                          className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                          wrapClassName="border border-gray-300_01 border-solid w-full"
                          type="text"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-gray-900 text-sm w-auto"
                          size="txtPoppinsRegular14Gray900"
                        >
                          <span className="text-gray-900 font-poppins text-left font-normal">
                            Company Name{" "}
                          </span>
                          <span className="text-gray-600 font-poppins text-left font-normal">
                            (optional)
                          </span>
                        </Text>
                        <Input
                          name="inputfield_Three"
                          placeholder="Company name"
                          className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                          wrapClassName="border border-gray-300_01 border-solid w-full"
                          type="text"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start mt-[15px] w-auto md:w-full">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtPoppinsRegular14Gray900"
                      >
                        Street Address
                      </Text>
                      <Input
                        name="inputfield_Four"
                        placeholder="Email"
                        className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                        wrapClassName="border border-gray-300_01 border-solid w-full"
                        type="email"
                        shape="round"
                        color="white_A700"
                        size="xs"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-4 items-center justify-start mt-[15px] w-[67%] md:w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <Text
                          className="text-gray-900 text-sm w-auto"
                          size="txtPoppinsRegular14Gray900"
                        >
                          Country / Region
                        </Text>
                        <Input
                          name="inputfield_Five"
                          placeholder="Select"
                          className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                          wrapClassName="border border-gray-300_01 border-solid flex w-auto"
                          suffix={
                            <Img
                              className="mt-1 mb-[3px] h-4 ml-[35px]"
                              src="images/img_arrowdown_gray_500.svg"
                              alt="arrow_down"
                            />
                          }
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-auto">
                        <Text
                          className="text-gray-900 text-sm w-auto"
                          size="txtPoppinsRegular14Gray900"
                        >
                          States
                        </Text>
                        <Input
                          name="inputfield_Six"
                          placeholder="Selects"
                          className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                          wrapClassName="border border-gray-300_01 border-solid flex w-auto"
                          suffix={
                            <Img
                              className="mt-1 mb-[3px] h-4 ml-[35px]"
                              src="images/img_arrowdown_gray_500.svg"
                              alt="arrow_down"
                            />
                          }
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-4 items-center justify-between mt-[15px] w-full">
                      <div className="flex sm:flex-1 flex-col gap-2 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-gray-900 text-sm w-auto"
                          size="txtPoppinsRegular14Gray900"
                        >
                          Email
                        </Text>
                        <Input
                          name="inputfield_Seven"
                          placeholder="Email Address"
                          className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                          wrapClassName="border border-gray-300_01 border-solid w-full"
                          type="email"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex sm:flex-1 flex-col gap-2 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-gray-900 text-sm w-auto"
                          size="txtPoppinsRegular14Gray900"
                        >
                          Phone
                        </Text>
                        <Input
                          name="inputfield_Eight"
                          placeholder="Phone number"
                          className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                          wrapClassName="border border-gray-300_01 border-solid w-full"
                          type="number"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                    <CheckBox
                      className="!text-gray-800 mt-5 text-left text-sm"
                      inputClassName="border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[3px] w-5"
                      name="shiptoadifferen_One"
                      id="shiptoadifferen_One"
                      label="Ship to a different address"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    ></CheckBox>
                  </div>
                </div>
                <Line className="bg-gray-300_01 h-px w-full" />
                <div className="flex flex-col gap-5 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                    size="txtPoppinsMedium24"
                  >
                    Additional Info
                  </Text>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPoppinsRegular14Gray900"
                    >
                      Order Notes (Optional)
                    </Text>
                    <TextArea
                      className="bg-white-A700 border border-gray-300_01 border-solid pb-[35px] pl-4 sm:pr-5 pr-[35px] pt-3.5 rounded-md text-base placeholder:text-gray-500 text-gray-500 text-left w-full"
                      name="inputfield_Nine"
                      placeholder="Notes about your order, e.g. special notes for delivery"
                    ></TextArea>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300_01 border-solid flex sm:flex-1 flex-col gap-6 items-start justify-start mb-[126px] p-6 sm:px-5 rounded-lg w-auto sm:w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-gray-900 text-xl w-auto"
                  size="txtPoppinsMedium20"
                >
                  Order Summery
                </Text>
                <List
                  className="flex flex-col items-start w-auto"
                  orientation="vertical"
                >
                  <div className="flex flex-row gap-1 items-center justify-between my-0 w-[377px] sm:w-full">
                    <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                      <Img
                        className="h-[60px] md:h-auto object-cover w-[60px]"
                        src="images/img_image_7.png"
                        alt="image"
                      />
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtPoppinsRegular14Gray900"
                      >
                        Green Capsicum
                      </Text>
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtPoppinsRegular14Gray900"
                      >
                        x5
                      </Text>
                    </div>
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPoppinsMedium14Gray900"
                    >
                      $70.00
                    </Text>
                  </div>
                  <div className="flex flex-row gap-1 items-center justify-between my-0 w-[377px] sm:w-full">
                    <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                      <Img
                        className="h-[60px] md:h-auto object-cover w-[60px]"
                        src="images/img_image_100x100.png"
                        alt="image"
                      />
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtPoppinsRegular14Gray900"
                      >
                        Red Capsicum
                      </Text>
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtPoppinsRegular14Gray900"
                      >
                        x1
                      </Text>
                    </div>
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPoppinsMedium14Gray900"
                    >
                      $14.00
                    </Text>
                  </div>
                </List>
                <div className="flex flex-col gap-px items-start justify-start w-auto sm:w-full">
                  <div className="bg-white-A700 flex flex-row items-center justify-between py-3 w-[376px] sm:w-full">
                    <Text
                      className="text-gray-800 text-sm w-auto"
                      size="txtPoppinsRegular14Gray800"
                    >
                      Subtotal:
                    </Text>
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPoppinsMedium14Gray900"
                    >
                      $84.00
                    </Text>
                  </div>
                  <Line className="bg-gray-300_01 h-px w-full" />
                  <div className="bg-white-A700 flex flex-row items-center justify-between py-3 w-[376px] sm:w-full">
                    <Text
                      className="text-gray-800 text-sm w-auto"
                      size="txtPoppinsRegular14Gray800"
                    >
                      Shipping:
                    </Text>
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPoppinsMedium14Gray900"
                    >
                      Free
                    </Text>
                  </div>
                  <Line className="bg-gray-300_01 h-px w-full" />
                  <div className="bg-white-A700 flex flex-row items-center justify-between pt-3 w-[376px] sm:w-full">
                    <Text
                      className="text-base text-gray-800 w-auto"
                      size="txtPoppinsRegular16Gray800"
                    >
                      Total:
                    </Text>
                    <Text
                      className="text-gray-900 text-lg w-auto"
                      size="txtPoppinsSemiBold18"
                    >
                      $84.00
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[13px] items-start justify-start w-[47%] md:w-full">
                <Text
                  className="text-gray-900 text-xl"
                  size="txtPoppinsMedium20"
                >
                  Payment Method
                </Text>
                <RadioGroup
                  selectedValue="CashonDelivery"
                  className="flex flex-col gap-2.5 items-start justify-start w-auto"
                  name="method"
                >
                  <Radio
                    value="CashonDelivery"
                    className="text-gray-800 text-left text-sm"
                    inputClassName="bg-white-A700 border border-green-A700 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                    checked={true}
                    name="method"
                    label="Cash on Delivery"
                    id="CashonDelivery"
                  ></Radio>
                  <Radio
                    value="Paypal"
                    className="text-gray-800 text-left text-sm"
                    inputClassName="bg-white-A700 border border-green-A700 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                    checked={false}
                    name="method"
                    label="Paypal"
                    id="Paypal"
                  ></Radio>
                  <Radio
                    value="AmazonPay"
                    className="text-gray-900 text-left text-sm"
                    inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                    checked={false}
                    name="method"
                    label="Amazon Pay"
                    id="AmazonPay"
                  ></Radio>
                </RadioGroup>
              </div>
              <Button
                className="cursor-pointer font-semibold rounded-[25px] text-base text-center w-[376px]"
                color="green_A700"
                size="md"
                variant="fill"
              >
                Place Order
              </Button>
            </div>
          </div>
          <Footer className="flex items-center justify-center mt-20 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
