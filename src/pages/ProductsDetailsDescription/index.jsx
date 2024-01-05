import React from "react";

import { Button, CheckBox, Img, Input, Line, List, Text } from "components";
import C05HomepageProductx from "components/C05HomepageProductx";
import C05HomepageProductx1 from "components/C05HomepageProductx1";
import C05HomepageProductx2 from "components/C05HomepageProductx2";
import C07ShopOneBreadcrumbs from "components/C07ShopOneBreadcrumbs";
import C10ProductsDetailsDescriptionQuantity from "components/C10ProductsDetailsDescriptionQuantity";
import Header from "components/Header";

const ProductsDetailsDescriptionPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
        <C07ShopOneBreadcrumbs
          className="bg-cover bg-gradient1  bg-no-repeat flex flex-col h-[120px] items-start justify-end p-[45px] md:px-10 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_breadcrumbs.png')" }}
          vectorimage="images/img_vector_gray_500.svg"
          homeSeven="Category"
          vectoroneimage="images/img_vector_gray_500.svg"
          homeEight="Vegetables"
          vectortwoimage="images/img_vector_gray_500.svg"
        />
        <div className="flex flex-col items-center justify-start mt-8 w-auto md:w-full">
          <div className="flex md:flex-col flex-row gap-6 items-start justify-center max-w-[1320px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-0.5 w-1/2 md:w-full">
              <div className="flex md:flex-col flex-row gap-3 items-center justify-between w-full">
                <div className="flex flex-col gap-14 items-center justify-start">
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_gray_500_24x24.svg"
                    alt="arrowdown_Two"
                  />
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[90px] md:h-auto object-cover rounded-bl-sm rounded-br-sm w-full"
                        src="images/img_productimage.png"
                        alt="productimage"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[90px] md:h-auto object-cover rounded-bl-sm rounded-br-sm w-full"
                        src="images/img_productimage_90x80.png"
                        alt="productimage_One"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[90px] md:h-auto object-cover rounded-bl-sm rounded-br-sm w-full"
                        src="images/img_productimage_1.png"
                        alt="productimage_Two"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[90px] md:h-auto object-cover rounded-bl-[3px] rounded-br-[3px] w-full"
                        src="images/img_productimage_2.png"
                        alt="productimage_Three"
                      />
                    </div>
                  </div>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_gray_500_24x24.svg"
                    alt="arrowdown_Three"
                  />
                </div>
                <Img
                  className="sm:flex-1 h-[556px] md:h-auto object-cover w-[556px] sm:w-full"
                  src="images/img_image_5.png"
                  alt="productimage_Four"
                />
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-6 items-start justify-start w-auto md:w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                  <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-auto sm:w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900_01 w-auto"
                      size="txtPoppinsSemiBold36"
                    >
                      Chinese Cabbage
                    </Text>
                    <Button
                      className="cursor-pointer min-w-[71px] rounded text-center text-sm"
                      color="green_700_33"
                      size="xs"
                      variant="fill"
                    >
                      In Stock
                    </Button>
                  </div>
                  <div className="flex flex-row gap-3 items-start justify-start w-auto">
                    <div className="flex flex-row items-center justify-start w-auto">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_star1.svg"
                        alt="starOne"
                      />
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_star1.svg"
                        alt="starTwo"
                      />
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_star1.svg"
                        alt="starThree"
                      />
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_star1.svg"
                        alt="starFour"
                      />
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_star1.svg"
                        alt="starFive"
                      />
                      <Text
                        className="text-gray-700 text-sm w-auto"
                        size="txtPoppinsRegular14Gray700"
                      >
                        {" "}
                        4 Review
                      </Text>
                    </div>
                    <Text
                      className="text-gray-400 text-sm w-auto"
                      size="txtPoppinsMedium14Gray400"
                    >
                      •
                    </Text>
                    <div className="flex flex-row gap-1 items-start justify-start w-auto">
                      <Text
                        className="text-blue_gray-900 text-sm w-auto"
                        size="txtPoppinsMedium14Bluegray900"
                      >
                        SKU:
                      </Text>
                      <Text
                        className="text-gray-700 text-sm w-auto"
                        size="txtPoppinsRegular14Gray700"
                      >
                        2,51,594
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center justify-start w-auto">
                  <div className="flex flex-row gap-1 items-center justify-start w-auto">
                    <Text
                      className="line-through text-gray-400 text-xl w-auto"
                      size="txtPoppinsRegular20Gray400"
                    >
                      $48.00
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-green-800 sm:text-xl w-auto"
                      size="txtPoppinsMedium24Green800"
                    >
                      $17.28
                    </Text>
                  </div>
                  <Text
                    className="bg-red-400_19 justify-center px-2.5 py-0.5 rounded-[13px] text-red-400 text-sm w-auto"
                    size="txtPoppinsMedium14Red400"
                  >
                    64% Off
                  </Text>
                </div>
                <Line className="bg-gray-300_01 h-px w-full" />
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[648px] w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtPoppinsRegular14Gray90001"
                    >
                      Brand:
                    </Text>
                    <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col font-dancingscript h-14 items-center justify-center p-[7px] rounded w-14">
                      <Img
                        className="h-3 mt-[7px]"
                        src="images/img_user_green_800_02.svg"
                        alt="user"
                      />
                      <Text
                        className="my-0.5 text-[13px] text-gray-700_02"
                        size="txtDancingScriptBold13"
                      >
                        farmary
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtPoppinsRegular14Gray90001"
                    >
                      Share item:
                    </Text>
                    <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                      <Button
                        className="flex h-10 items-center justify-center rounded-[50%] w-10"
                        shape="round"
                        color="green_A700"
                        size="lg"
                        variant="fill"
                      >
                        <Img
                          className="h-[18px]"
                          src="images/img_facebook1_white_a700.svg"
                          alt="facebookOne"
                        />
                      </Button>
                      <Button
                        className="flex h-10 items-center justify-center w-10"
                        shape="circle"
                        size="lg"
                      >
                        <Img
                          className="h-[18px]"
                          src="images/img_twitter1.svg"
                          alt="twitterOne"
                        />
                      </Button>
                      <Img
                        className="h-10 rounded-[50%] w-10"
                        src="images/img_user_gray_800.svg"
                        alt="user_One"
                      />
                      <Img
                        className="h-10 rounded-[50%] w-10"
                        src="images/img_info_gray_800.svg"
                        alt="info"
                      />
                    </div>
                  </div>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[568px] md:max-w-full text-gray-600 text-sm"
                  size="txtPoppinsRegular14Gray600"
                >
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
                  consequat nec, ultrices et ipsum. Nulla varius magna a
                  consequat pulvinar.{" "}
                </Text>
              </div>
              <div className="bg-white-A700 border border-solid border-white-A700 flex md:flex-col flex-row gap-3 items-center justify-center py-[18px] shadow-bs5 w-auto md:w-full">
                <C10ProductsDetailsDescriptionQuantity className="bg-white-A700 border border-gray-300_01 border-solid flex flex-row items-center justify-between p-2 rounded-[25px] w-auto" />
                <Button
                  className="cursor-pointer flex items-center justify-center rounded-[25px] w-[447px]"
                  rightIcon={
                    <div className="h-[15px] ml-4 w-[15px] outline-white-A700 outline-[0.5px] outline my-1">
                      <Img
                        className="h-[15px]"
                        src="images/img_bag_white_a700.svg"
                        alt="bag"
                      />
                    </div>
                  }
                  color="green_A700"
                  size="lg"
                  variant="fill"
                >
                  <div className="font-semibold text-base text-left">
                    Add to Cart
                  </div>
                </Button>
                <Button
                  className="flex h-[52px] items-center justify-center rounded-[50%] w-[52px]"
                  shape="circle"
                  color="green_700_19"
                  size="xl"
                  variant="fill"
                >
                  <Img
                    className="h-5"
                    src="images/img_favorite_green_800.svg"
                    alt="favorite_One"
                  />
                </Button>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
                  <Text
                    className="text-gray-900_01 text-sm w-auto"
                    size="txtPoppinsMedium14Gray90001"
                  >
                    Category:
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtPoppinsRegular14Gray600"
                  >
                    Vegetables
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-1.5 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-gray-900_01 text-sm w-auto"
                    size="txtPoppinsMedium14Gray90001"
                  >
                    Tag:
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtPoppinsRegular14Gray600"
                  >
                    Vegetables
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtPoppinsRegular14Gray600"
                  >
                    Healthy
                  </Text>
                  <Text
                    className="text-gray-900_01 text-sm underline w-auto"
                    size="txtPoppinsRegular14Gray90001"
                  >
                    Chinese
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtPoppinsRegular14Gray600"
                  >
                    Cabbage
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtPoppinsRegular14Gray600"
                  >
                    Green Cabbage
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-8 items-center justify-start w-full">
              <div className="bg-white-A700 flex flex-row items-start justify-start md:px-10 sm:px-5 px-[689px] shadow-bs5 w-auto md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center w-full">
                  <Button
                    className="!text-gray-900_01 cursor-pointer font-medium min-w-[132px] shadow-bs19 text-base text-center"
                    shape="square"
                    color="white_A700"
                    size="xl"
                    variant="fill"
                  >
                    Descriptions
                  </Button>
                  <Button
                    className="!text-gray-600 cursor-pointer font-medium min-w-[214px] text-base text-center"
                    shape="square"
                    color="white_A700"
                    size="xl"
                    variant="fill"
                  >
                    Additional Information
                  </Button>
                  <Button
                    className="!text-gray-600 cursor-pointer font-medium min-w-[196px] text-base text-center"
                    shape="square"
                    color="white_A700"
                    size="xl"
                    variant="fill"
                  >
                    Customer Feedback
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1320px] mx-auto md:px-5 w-full">
                <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-auto md:w-full">
                  <Text
                    className="leading-[150.00%] text-gray-600 text-sm"
                    size="txtPoppinsRegular14Gray600"
                  >
                    <>
                      Sed commodo aliquam dui ac porta. Fusce ipsum felis,
                      imperdiet at posuere ac, viverra at mauris. Maecenas
                      tincidunt ligula a sem vestibulum pharetra. Maecenas
                      auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam
                      tincidunt metus vel dui interdum sollicitudin. Mauris sem
                      ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed
                      et condimentum arcu, id molestie tellus. Nulla facilisi.
                      Nam scelerisque vitae justo a convallis. Morbi urna ipsum,
                      placerat quis commodo quis, egestas elementum leo. Donec
                      convallis mollis enim. Aliquam id mi quam. Phasellus nec
                      fringilla elit.
                      <br />
                      <br />
                      Nulla mauris tellus, feugiat quis pharetra sed, gravida ac
                      dui. Sed iaculis, metus faucibus elementum tincidunt,
                      turpis mi viverra velit, pellentesque tristique neque mi
                      eget nulla. Proin luctus elementum neque et pharetra.{" "}
                    </>
                  </Text>
                  <div className="flex flex-col gap-3.5 items-start justify-start w-auto md:w-full">
                    <CheckBox
                      className="sm:pr-5 text-left text-sm"
                      inputClassName="h-5 mr-[5px] w-5"
                      name="100goffreshleav_One"
                      id="100goffreshleav_One"
                      label="100 g of fresh leaves provides."
                      shape="round"
                      color="green_A700"
                      size="xs"
                      variant="fill"
                    ></CheckBox>
                    <CheckBox
                      className="sm:pr-5 text-left text-sm"
                      inputClassName="h-5 mr-[5px] w-5"
                      name="aliquamacestat"
                      id="aliquamacestat"
                      label="Aliquam ac est at augue volutpat elementum."
                      shape="round"
                      color="green_A700"
                      size="xs"
                      variant="fill"
                    ></CheckBox>
                    <CheckBox
                      className="sm:pr-5 text-left text-sm"
                      inputClassName="h-5 mr-[5px] w-5"
                      name="quisquenecenim"
                      id="quisquenecenim"
                      label="Quisque nec enim eget sapien molestie."
                      shape="round"
                      color="green_A700"
                      size="xs"
                      variant="fill"
                    ></CheckBox>
                    <CheckBox
                      className="sm:pr-5 text-left text-sm"
                      inputClassName="h-5 mr-[5px] w-5"
                      name="proinconvallis"
                      id="proinconvallis"
                      label="Proin convallis odio volutpat finibus posuere."
                      shape="round"
                      color="green_A700"
                      size="xs"
                      variant="fill"
                    ></CheckBox>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[648px] md:max-w-full text-gray-600 text-sm"
                    size="txtPoppinsRegular14Gray600"
                  >
                    Cras et diam maximus, accumsan sapien et, sollicitudin
                    velit. Nulla blandit eros non turpis lobortis iaculis at ut
                    massa.{" "}
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col gap-5 items-center justify-start w-[41%] md:w-full">
                  <div className="h-[300px] relative w-full">
                    <Img
                      className="h-[300px] m-auto object-cover rounded-md w-full"
                      src="images/img_image_300x536.png"
                      alt="image_Five"
                    />
                    <Button
                      className="absolute flex h-[50px] inset-[0] items-center justify-center m-auto rounded-[50%] w-[50px]"
                      shape="circle"
                      color="green_A700"
                      size="xl"
                      variant="fill"
                    >
                      <Img
                        src="images/img_vector_white_a700.svg"
                        alt="vector_Three"
                      />
                    </Button>
                  </div>
                  <div className="bg-white-A700 border border-gray-300_01 border-solid flex sm:flex-col flex-row gap-[30px] items-center justify-between px-5 py-6 rounded-md w-[537px] sm:w-full">
                    <div className="flex flex-row gap-3 items-center justify-center w-auto">
                      <Img
                        className="h-8 w-8"
                        src="images/img_pricetag1.svg"
                        alt="pricetagOne"
                      />
                      <div className="flex flex-col gap-1.5 items-start justify-center w-auto">
                        <Text
                          className="text-gray-900_01 text-sm w-auto"
                          size="txtPoppinsMedium14Gray90001"
                        >
                          64% Discount
                        </Text>
                        <Text
                          className="text-[13px] text-gray-600 w-auto"
                          size="txtPoppinsRegular13"
                        >
                          Save your 64% money with us
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-3 items-center justify-center w-auto">
                      <Img
                        className="h-8 w-8"
                        src="images/img_leaf1.svg"
                        alt="leafOne"
                      />
                      <div className="flex flex-col gap-1.5 items-start justify-center w-auto">
                        <Text
                          className="text-gray-900_01 text-sm w-auto"
                          size="txtPoppinsMedium14Gray90001"
                        >
                          100% Organic
                        </Text>
                        <Text
                          className="text-[13px] text-gray-600 w-auto"
                          size="txtPoppinsRegular13"
                        >
                          100% Organic Vegetables
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[27px] items-center justify-start max-w-[1320px] mt-[74px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-between max-w-[1320px] w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01 w-auto"
              size="txtPoppinsSemiBold32"
            >
              Related Products
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-auto md:w-full"
            orientation="horizontal"
          >
            <C05HomepageProductx
              className="md:h-[397px] h-[407px] relative w-full"
              sale="Sale"
              fifty="50%"
            />
            <C05HomepageProductx1
              className="h-[407px] relative w-full"
              productimage="images/img_image_51.png"
            />
            <C05HomepageProductx2 className="md:h-[397px] h-[407px] relative w-full" />
            <C05HomepageProductx1
              className="h-[407px] relative w-full"
              productimage="images/img_image_302x302.png"
              productname="Ladies Finger"
            />
          </List>
        </div>
        <footer className="flex items-center justify-center mt-[79px] md:px-5 w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="bg-gray-100_01 flex md:flex-col flex-row md:gap-5 items-center justify-start p-[38px] sm:px-5 w-full">
              <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start md:ml-[0] ml-[261px] w-auto sm:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl w-auto"
                  size="txtPoppinsSemiBold24"
                >
                  Subcribe our Newsletter
                </Text>
                <Text
                  className="leading-[150.00%] md:max-w-full max-w-md text-gray-500 text-sm"
                  size="txtPoppinsRegular14"
                >
                  Pellentesque eu nibh eget mauris congue mattis mattis nec
                  tellus. Phasellus imperdiet elit eu magna.
                </Text>
              </div>
              <div className="h-[52px] ml-28 md:ml-[0] relative w-[30%] md:w-full">
                <Input
                  name="inputfield"
                  placeholder="Your email address"
                  className="!placeholder:text-gray-600 !text-gray-600 p-0 text-base text-left w-full"
                  wrapClassName="absolute border border-gray-300_01 border-solid inset-y-[0] left-[0] my-auto rounded-[26px] w-[92%]"
                  type="email"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></Input>
                <Button
                  className="absolute cursor-pointer font-semibold h-full inset-y-[0] min-w-[162px] my-auto right-[0] rounded-[26px] text-base text-center"
                  color="green_A700"
                  size="lg"
                  variant="fill"
                >
                  Subscribe
                </Button>
              </div>
              <div className="flex flex-row gap-2 items-start justify-start ml-10 md:ml-[0] w-auto">
                <Button
                  className="flex h-10 items-center justify-center rounded-[50%] w-10"
                  shape="round"
                  color="green_A700"
                  size="lg"
                  variant="fill"
                >
                  <Img
                    className="h-[18px]"
                    src="images/img_facebook1.svg"
                    alt="facebookOne_One"
                  />
                </Button>
                <Button
                  className="flex h-10 items-center justify-center w-10"
                  shape="circle"
                  size="lg"
                >
                  <Img
                    className="h-[18px]"
                    src="images/img_twitter1.svg"
                    alt="twitterOne_One"
                  />
                </Button>
                <Img
                  className="h-10 rounded-[50%] w-10"
                  src="images/img_user_gray_800.svg"
                  alt="user_Two"
                />
                <Img
                  className="h-10 rounded-[50%] w-10"
                  src="images/img_info.svg"
                  alt="info_One"
                />
              </div>
            </div>
            <div className="bg-gray-900_01 flex flex-col md:gap-10 gap-[60px] items-start justify-center pt-[60px] md:px-10 sm:px-5 px-[300px] w-auto md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[95%] md:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Img
                      className="h-8 w-8"
                      src="images/img_plant1.svg"
                      alt="plantOne_One"
                    />
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-0.96px] w-auto"
                      size="txtPoppinsMedium32"
                    >
                      Ecobazar
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] max-w-[336px] md:max-w-full text-gray-600 text-sm"
                    size="txtPoppinsRegular14Gray600"
                  >
                    Morbi cursus porttitor enim lobortis molestie. Duis gravida
                    turpis dui, eget bibendum magna congue nec.
                  </Text>
                  <div className="flex flex-row gap-4 items-center justify-start w-auto">
                    <Text
                      className="bg-gray-900_01 justify-center py-[5px] text-shadow-ts text-sm text-white-A700 w-auto"
                      size="txtPoppinsMedium14"
                    >
                      (219) 555-0114
                    </Text>
                    <Text
                      className="text-base text-gray-600 w-auto"
                      size="txtPoppinsRegular16"
                    >
                      or
                    </Text>
                    <Text
                      className="bg-gray-900_01 justify-center pb-1 pt-[7px] text-shadow-ts text-sm text-white-A700 w-auto"
                      size="txtPoppinsMedium14"
                    >
                      Proxy@gmail.com
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-5 items-start justify-start ml-28 md:ml-[0] w-auto">
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtPoppinsMedium16"
                  >
                    My Account
                  </Text>
                  <ul className="flex flex-col gap-3 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">My Account</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">Order History</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-sm text-white-A700">
                        <Text size="txtPoppinsRegular14WhiteA700">
                          Shoping Cart
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">Wishlist</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-5 items-start justify-start md:ml-[0] ml-[129px] w-auto">
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtPoppinsMedium16"
                  >
                    Helps
                  </Text>
                  <ul className="flex flex-col gap-3 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">Contact</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">Faqs</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">
                          Terms & Condition
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">Privacy Policy</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-5 items-start justify-start md:ml-[0] ml-[95px] w-auto">
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtPoppinsMedium16"
                  >
                    Proxy
                  </Text>
                  <ul className="flex flex-col gap-3 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">About</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">Shop</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">Product</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">Track Order</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-5 items-start justify-start md:ml-[0] ml-[141px] w-auto">
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtPoppinsMedium16"
                  >
                    Categories
                  </Text>
                  <ul className="flex flex-col gap-3 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">
                          Fruit & Vegetables
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">Meat & Fish</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">Bread & Bakery</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray-500 text-sm">
                        <Text size="txtPoppinsRegular14">Beauty & Health</Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray-900_01 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1320px] py-6 shadow-bs8 w-full">
                <Text
                  className="text-gray-600 text-sm w-auto"
                  size="txtPoppinsRegular14Gray600"
                >
                  Ecobazar eCommerce © 2021. All Rights Reserved
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <div className="bg-gray-900_01 border border-blue_gray-900 border-solid flex flex-col items-center justify-start p-1.5 rounded-[5px] w-[17%]">
                    <Img
                      className="h-[13px] my-0.5"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                  </div>
                  <div className="bg-gray-900_01 border border-blue_gray-900 border-solid flex flex-col items-center justify-start p-1.5 rounded-[5px] w-[17%]">
                    <Img
                      className="h-2.5 my-1"
                      src="images/img_settings_white_a700.svg"
                      alt="settings_One"
                    />
                  </div>
                  <div className="bg-gray-900_01 border border-blue_gray-900 border-solid flex flex-col items-end justify-end rounded-[5px] w-[17%]">
                    <Img
                      className="h-[18px] mt-2.5"
                      src="images/img_settings_white_a700_18x39.svg"
                      alt="settings_Two"
                    />
                  </div>
                  <div className="bg-gray-900_01 border border-blue_gray-900 border-solid flex flex-col items-center justify-start p-1.5 rounded-[5px] w-[17%]">
                    <Img
                      className="h-[17px]"
                      src="images/img_user_red_a700.svg"
                      alt="user_Three"
                    />
                  </div>
                  <div className="h-8 relative w-[24%]">
                    <div className="absolute bg-gray-900_01 border border-blue_gray-900 border-solid flex flex-row h-full inset-[0] items-start justify-center m-auto pb-[5px] px-[5px] rounded-[5px] w-full">
                      <Img
                        className="h-[11px] mt-1 w-[11px]"
                        src="images/img_lock1.svg"
                        alt="lockOne"
                      />
                      <Text
                        className="mb-[9px] ml-0.5 text-[11px] text-white-A700"
                        size="txtPoppinsRegular11"
                      >
                        Secure
                      </Text>
                    </div>
                    <Text
                      className="absolute bottom-[0] inset-x-[0] mx-auto text-center text-white-A700 text-xs w-max"
                      size="txtPoppinsSemiBold12"
                    >
                      Payment
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ProductsDetailsDescriptionPage;
