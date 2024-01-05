import React from "react";

import {
  Button,
  CheckBox,
  Datepicker,
  Img,
  Input,
  Line,
  List,
  Text,
  TextArea,
} from "components";
import C07ShopOneBreadcrumbs from "components/C07ShopOneBreadcrumbs";
import C18SingleBlogBlogdetail from "components/C18SingleBlogBlogdetail";
import Header from "components/Header";

const SingleBlogPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="h-[311px] md:px-5 relative w-full">
            <Header className="bg-white-A700 flex md:flex-col md:gap-5 items-center justify-center mb-[-4px] mx-auto w-full z-[1]" />
            <C07ShopOneBreadcrumbs
              className="bg-cover bg-gradient1  bg-no-repeat flex flex-col h-[120px] items-start justify-end mt-auto mx-auto p-[45px] md:px-10 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_breadcrumbs.png')" }}
              homeimage="images/img_home.svg"
              vectoroneimage="images/img_vector_gray_500.svg"
              homeEight="Blog"
              languagetext="Single Blog"
            />
          </div>
          <div className="flex md:flex-col flex-row gap-12 items-start justify-center max-w-[1320px] mt-8 mx-auto md:px-5 w-full">
            <C18SingleBlogBlogdetail className="flex md:flex-1 flex-col items-center justify-start w-[67%] md:w-full" />
            <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col items-start justify-start pb-7 w-auto sm:w-full">
                <Input
                  name="inputfield"
                  placeholder="Search..."
                  className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                  wrapClassName="border border-gray-300_01 border-solid flex w-full"
                  prefix={
                    <Img
                      className="mt-px mb-0.5 h-5 mr-2"
                      src="images/img_search.svg"
                      alt="Search 1"
                    />
                  }
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></Input>
              </div>
              <Line className="bg-gray-300_01 h-px w-full" />
              <div className="bg-white-A700 flex flex-col gap-4 items-start justify-start pb-7 pt-5 w-auto sm:w-full">
                <div className="flex flex-col items-start justify-start pb-1 w-auto sm:w-full">
                  <Text
                    className="text-gray-900_01 text-xl w-auto"
                    size="txtPoppinsMedium20"
                  >
                    Top Categories
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-[400px] sm:w-full">
                  <Text
                    className="text-gray-900_01 text-sm w-auto"
                    size="txtPoppinsRegular14Gray90001"
                  >
                    Fresh Fruit
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtPoppinsRegular14Gray600"
                  >
                    {" "}
                    (134)
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-[400px] sm:w-full">
                  <Text
                    className="text-gray-900_01 text-sm w-auto"
                    size="txtPoppinsRegular14Gray90001"
                  >
                    Vegetables
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtPoppinsRegular14Gray600"
                  >
                    {" "}
                    (150)
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-[400px] sm:w-full">
                  <Text
                    className="text-gray-900_01 text-sm w-auto"
                    size="txtPoppinsRegular14Gray90001"
                  >
                    Cooking
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtPoppinsRegular14Gray600"
                  >
                    {" "}
                    (54)
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-[400px] sm:w-full">
                  <Text
                    className="text-gray-900_01 text-sm w-auto"
                    size="txtPoppinsRegular14Gray90001"
                  >
                    Snacks
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtPoppinsRegular14Gray600"
                  >
                    {" "}
                    (47)
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-[400px] sm:w-full">
                  <Text
                    className="text-gray-900_01 text-sm w-auto"
                    size="txtPoppinsRegular14Gray90001"
                  >
                    Beverages
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtPoppinsRegular14Gray600"
                  >
                    {" "}
                    (43)
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-[400px] sm:w-full">
                  <Text
                    className="text-gray-900_01 text-sm w-auto"
                    size="txtPoppinsRegular14Gray90001"
                  >
                    Beauty & Health
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtPoppinsRegular14Gray600"
                  >
                    {" "}
                    (38)
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-[400px] sm:w-full">
                  <Text
                    className="text-gray-900_01 text-sm w-auto"
                    size="txtPoppinsRegular14Gray90001"
                  >
                    Bread & Bakery
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtPoppinsRegular14Gray600"
                  >
                    {" "}
                    (15)
                  </Text>
                </div>
              </div>
              <Line className="bg-gray-300_01 h-px w-full" />
              <div className="bg-white-A700 flex flex-col gap-4 items-start justify-start pb-7 pt-5 w-auto sm:w-full">
                <div className="flex flex-col items-start justify-start pb-1 w-auto sm:w-full">
                  <Text
                    className="text-gray-900_01 text-xl w-auto"
                    size="txtPoppinsMedium20"
                  >
                    Popular Tag
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-[94%] md:w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <div className="flex flex-row gap-2 items-center justify-between w-full">
                      <Button
                        className="cursor-pointer min-w-[86px] rounded-[16px] text-center text-sm"
                        color="gray_100"
                        size="xs"
                        variant="fill"
                      >
                        Healthy
                      </Button>
                      <Button
                        className="cursor-pointer min-w-[82px] rounded-[16px] text-center text-sm"
                        color="green_A700"
                        size="xs"
                        variant="fill"
                      >
                        Low fat
                      </Button>
                      <Button
                        className="cursor-pointer min-w-[110px] rounded-[16px] text-center text-sm"
                        color="gray_100"
                        size="xs"
                        variant="fill"
                      >
                        Vegetarian
                      </Button>
                      <Button
                        className="cursor-pointer min-w-[74px] rounded-[16px] text-center text-sm"
                        color="gray_100"
                        size="xs"
                        variant="fill"
                      >
                        Bread
                      </Button>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-between w-[97%] md:w-full">
                      <Button
                        className="cursor-pointer min-w-[97px] rounded-[16px] text-center text-sm"
                        color="gray_100"
                        size="xs"
                        variant="fill"
                      >
                        Kid foods
                      </Button>
                      <Button
                        className="cursor-pointer min-w-[94px] rounded-[16px] text-center text-sm"
                        color="gray_100"
                        size="xs"
                        variant="fill"
                      >
                        Vitamins
                      </Button>
                      <Button
                        className="cursor-pointer min-w-[82px] rounded-[16px] text-center text-sm"
                        color="gray_100"
                        size="xs"
                        variant="fill"
                      >
                        Snacks
                      </Button>
                      <Button
                        className="cursor-pointer min-w-[65px] rounded-[16px] text-center text-sm"
                        color="gray_100"
                        size="xs"
                        variant="fill"
                      >
                        Tiffin
                      </Button>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-[66%] md:w-full">
                      <Button
                        className="cursor-pointer min-w-[68px] rounded-[16px] text-center text-sm"
                        color="gray_100"
                        size="xs"
                        variant="fill"
                      >
                        Meat
                      </Button>
                      <Button
                        className="cursor-pointer min-w-[83px] rounded-[16px] text-center text-sm"
                        color="gray_100"
                        size="xs"
                        variant="fill"
                      >
                        Launch
                      </Button>
                      <Button
                        className="cursor-pointer min-w-[78px] rounded-[16px] text-center text-sm"
                        color="gray_100"
                        size="xs"
                        variant="fill"
                      >
                        Dinner
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Line className="bg-gray-300_01 h-px w-full" />
              <div className="bg-white-A700 flex flex-col gap-4 items-start justify-start pb-7 pt-5 w-auto sm:w-full">
                <div className="flex flex-col items-start justify-start pb-1 w-auto sm:w-full">
                  <Text
                    className="text-gray-900_01 text-xl w-auto"
                    size="txtPoppinsMedium20"
                  >
                    Our Gallery
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <List
                    className="flex flex-col gap-2 items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 sm:flex-col flex-row gap-2 items-center justify-between my-0 w-full">
                      <Img
                        className="h-[94px] md:h-auto object-cover rounded-md w-[94px]"
                        src="images/img_gallery.png"
                        alt="gallery"
                      />
                      <Img
                        className="h-[94px] md:h-auto object-cover rounded-md w-[94px]"
                        src="images/img_gallery_100x100.png"
                        alt="gallery_One"
                      />
                      <Img
                        className="h-[94px] md:h-auto object-cover rounded-md w-[94px]"
                        src="images/img_gallery_1.png"
                        alt="gallery_Two"
                      />
                      <Img
                        className="h-[94px] md:h-auto object-cover rounded-md w-[94px]"
                        src="images/img_gallery_2.png"
                        alt="gallery_Three"
                      />
                    </div>
                    <div className="flex flex-1 sm:flex-col flex-row gap-2 items-center justify-between my-0 w-full">
                      <Img
                        className="h-[94px] md:h-auto object-cover rounded-md w-[94px]"
                        src="images/img_gallery_3.png"
                        alt="gallery"
                      />
                      <Img
                        className="h-[94px] md:h-auto object-cover rounded-md w-[94px]"
                        src="images/img_gallery_4.png"
                        alt="gallery_One"
                      />
                      <Img
                        className="h-[94px] md:h-auto object-cover rounded-md w-[94px]"
                        src="images/img_gallery_5.png"
                        alt="gallery_Two"
                      />
                      <Img
                        className="h-[94px] md:h-auto object-cover rounded-md w-[94px]"
                        src="images/img_gallery_6.png"
                        alt="gallery_Three"
                      />
                    </div>
                  </List>
                </div>
              </div>
              <Line className="bg-gray-300_01 h-px w-full" />
              <div className="bg-white-A700 flex flex-col gap-4 items-start justify-start pt-5 w-auto sm:w-full">
                <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-gray-900_01 text-xl w-auto"
                    size="txtPoppinsMedium20"
                  >
                    Recently Added
                  </Text>
                </div>
                <List
                  className="flex flex-col gap-4 items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-3 items-start justify-start pb-1 w-auto sm:w-full">
                    <Img
                      className="h-[77px] md:h-auto object-cover rounded-md w-[100px] sm:w-full"
                      src="images/img_image_77x100.png"
                      alt="image"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="leading-[150.00%] max-w-[288px] md:max-w-full text-base text-gray-900_01"
                        size="txtPoppinsMedium16Gray90001"
                      >
                        Curabitur porttitor orci eget nequ accumsan.
                      </Text>
                      <Datepicker
                        className="date"
                        placeholder="Apr 25, 2021"
                      ></Datepicker>
                    </div>
                  </div>
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-3 items-start justify-start py-1 w-auto sm:w-full">
                    <Img
                      className="h-[77px] md:h-auto object-cover rounded-md w-[100px] sm:w-full"
                      src="images/img_gallery_5.png"
                      alt="image"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="leading-[150.00%] max-w-[288px] md:max-w-full text-base text-gray-900_01"
                        size="txtPoppinsMedium16Gray90001"
                      >
                        Donec mattis arcu faucibus suscipit viverra.
                      </Text>
                      <Datepicker
                        className="date"
                        placeholder="Apr 25, 2021"
                      ></Datepicker>
                    </div>
                  </div>
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-3 items-start justify-start pt-1 w-auto sm:w-full">
                    <Img
                      className="h-[77px] md:h-auto object-cover rounded-md w-[100px] sm:w-full"
                      src="images/img_image_63.png"
                      alt="image"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="leading-[150.00%] max-w-[288px] md:max-w-full text-base text-gray-900_01"
                        size="txtPoppinsMedium16Gray90001"
                      >
                        Quisque posuere tempus rutrum. Integer velit ex.
                      </Text>
                      <Datepicker
                        className="date"
                        placeholder="Apr 25, 2021"
                      ></Datepicker>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-start justify-start md:ml-[0] ml-[300px] mt-[39px] md:px-5 w-[46%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                  size="txtPoppinsMedium24"
                >
                  Leave a Comment
                </Text>
                <div className="flex md:flex-col flex-row gap-4 items-center justify-between mt-[15px] w-full">
                  <div className="flex sm:flex-1 flex-col gap-1.5 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtPoppinsRegular14Gray90001"
                    >
                      Full Name
                    </Text>
                    <Input
                      name="inputfield_One"
                      placeholder="Zakir Hossen"
                      className="!placeholder:text-gray-700 !text-gray-700 p-0 text-base text-left w-full"
                      wrapClassName="border border-gray-300_01 border-solid w-full"
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-1.5 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtPoppinsRegular14Gray90001"
                    >
                      Email
                    </Text>
                    <Input
                      name="inputfield_Two"
                      placeholder="zakirsoft.20@g|"
                      className="!placeholder:text-gray-900_01 !text-gray-900_01 p-0 text-base text-left w-full"
                      wrapClassName="border border-green-A700 border-solid w-full"
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start mt-4 w-auto md:w-full">
                  <Text
                    className="text-gray-900_01 text-sm w-auto"
                    size="txtPoppinsRegular14Gray90001"
                  >
                    Message
                  </Text>
                  <TextArea
                    className="bg-white-A700 border border-gray-300_01 border-solid pb-[35px] pl-4 sm:pr-5 pr-[35px] pt-[13px] rounded-md text-base placeholder:text-gray-700 text-gray-700 text-left w-full"
                    name="inputfield_Three"
                    placeholder="Write your comment here…"
                  ></TextArea>
                </div>
                <CheckBox
                  className="mt-4 text-left text-sm"
                  inputClassName="border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[3px] w-5"
                  name="savemynameand"
                  id="savemynameand"
                  label="Save my name and email in this browser for the next time I comment."
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></CheckBox>
                <Button
                  className="cursor-pointer font-semibold min-w-[211px] mt-[23px] rounded-[25px] text-base text-center"
                  color="green_A700"
                  size="lg"
                  variant="fill"
                >
                  Post Comments
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl w-auto"
                size="txtPoppinsMedium24"
              >
                Comments
              </Text>
              <List
                className="flex flex-col gap-[23.5px] items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-3 items-start justify-between w-full">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_ellipse8.png"
                      alt="ellipseEight"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
                        <Text
                          className="text-gray-900_01 text-sm w-auto"
                          size="txtPoppinsMedium14Gray90001"
                        >
                          Annette Black
                        </Text>
                        <Text
                          className="text-gray-900_01 text-sm w-auto"
                          size="txtPoppinsRegular14Gray90001"
                        >
                          •
                        </Text>
                        <Text
                          className="text-gray-500 text-sm w-auto"
                          size="txtPoppinsRegular14"
                        >
                          26 Apr, 2021
                        </Text>
                      </div>
                      <Text
                        className="leading-[150.00%] mt-[3px] text-gray-700 text-sm w-full"
                        size="txtPoppinsRegular14Gray700"
                      >
                        In a nisi commodo, porttitor ligula consequat, tincidunt
                        dui. Nulla volutpat, metus eu aliquam malesuada, elit
                        libero venenatis urna, consequat maximus arcu diam non
                        diam.
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="self-center h-px bg-gray-300_01 w-full" />
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-3 items-start justify-between w-full">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_ellipse8_40x40.png"
                      alt="ellipseEight"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
                        <Text
                          className="text-gray-900_01 text-sm w-auto"
                          size="txtPoppinsMedium14Gray90001"
                        >
                          Devon Lane
                        </Text>
                        <Text
                          className="text-gray-900_01 text-sm w-auto"
                          size="txtPoppinsRegular14Gray90001"
                        >
                          •
                        </Text>
                        <Text
                          className="text-gray-500 text-sm w-auto"
                          size="txtPoppinsRegular14"
                        >
                          24 Apr, 2021
                        </Text>
                      </div>
                      <Text
                        className="leading-[150.00%] mt-[3px] text-gray-700 text-sm w-full"
                        size="txtPoppinsRegular14Gray700"
                      >
                        Quisque eget tortor lobortis, facilisis metus eu,
                        elementum est. Nunc sit amet erat quis ex convallis
                        suscipit. Nam hendrerit, velit ut aliquam euismod, nibh
                        tortor rutrum nisi, ac sodales nunc eros porta nisi. Sed
                        scelerisque, est eget aliquam venenatis, est sem tempor
                        eros.
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex flex-col items-center justify-start w-3/4 md:w-full">
                <div className="flex md:flex-col flex-row gap-3 items-start justify-between w-full">
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src="images/img_ellipse8_1.png"
                    alt="ellipseEight"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-start">
                    <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
                      <Text
                        className="text-gray-900_01 text-sm w-auto"
                        size="txtPoppinsMedium14Gray90001"
                      >
                        Jacob Jones
                      </Text>
                      <Text
                        className="text-gray-900_01 text-sm w-auto"
                        size="txtPoppinsRegular14Gray90001"
                      >
                        •
                      </Text>
                      <Text
                        className="text-gray-500 text-sm w-auto"
                        size="txtPoppinsRegular14"
                      >
                        20 Apr, 2021
                      </Text>
                    </div>
                    <Text
                      className="text-gray-700 text-sm"
                      size="txtPoppinsRegular14Gray700"
                    >
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia curae.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex md:flex-col flex-row gap-3 items-start justify-between w-full">
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src="images/img_ellipse8_2.png"
                    alt="ellipseEight_One"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
                      <Text
                        className="text-gray-900_01 text-sm w-auto"
                        size="txtPoppinsMedium14Gray90001"
                      >
                        Jane Cooper
                      </Text>
                      <Text
                        className="text-gray-900_01 text-sm w-auto"
                        size="txtPoppinsRegular14Gray90001"
                      >
                        •
                      </Text>
                      <Text
                        className="text-gray-500 text-sm w-auto"
                        size="txtPoppinsRegular14"
                      >
                        18 Apr, 2021
                      </Text>
                    </div>
                    <Text
                      className="leading-[150.00%] mt-[3px] text-gray-700 text-sm w-full"
                      size="txtPoppinsRegular14Gray700"
                    >
                      Pellentesque feugiat, nibh vel vehicula pretium, nibh nibh
                      bibendum elit, a volutpat arcu dui nec orci. Aenean dui
                      odio, ullamcorper quis turpis ac, volutpat imperdiet ex.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[32%] md:w-full">
                <div className="flex flex-row gap-3 items-start justify-between w-full">
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src="images/img_ellipse8_3.png"
                    alt="ellipseEight_Two"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
                      <Text
                        className="text-gray-900_01 text-sm w-auto"
                        size="txtPoppinsMedium14Gray90001"
                      >
                        Darrell Steward
                      </Text>
                      <Text
                        className="text-gray-900_01 text-sm w-auto"
                        size="txtPoppinsRegular14Gray90001"
                      >
                        •
                      </Text>
                      <Text
                        className="text-gray-500 text-sm w-auto"
                        size="txtPoppinsRegular14"
                      >
                        7 Apr, 2021
                      </Text>
                    </div>
                    <Text
                      className="mt-[3px] text-gray-700 text-sm"
                      size="txtPoppinsRegular14Gray700"
                    >
                      Nulla molestie interdum ultricies.{" "}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="!text-green-A700 cursor-pointer font-semibold min-w-[138px] outline outline-[1px] outline-green-A700 text-center text-sm"
              shape="round"
              color="white_A700"
              size="lg"
              variant="fill"
            >
              Load More
            </Button>
          </div>
          <footer className="flex items-center justify-center mt-20 md:px-5 w-full">
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
                    name="inputfield_Four"
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
                    alt="user_One"
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
                      Morbi cursus porttitor enim lobortis molestie. Duis
                      gravida turpis dui, eget bibendum magna congue nec.
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
                        <a
                          href="javascript:"
                          className="text-sm text-white-A700"
                        >
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
                          <Text size="txtPoppinsRegular14">
                            Beauty & Health
                          </Text>
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
                        alt="settings_One"
                      />
                    </div>
                    <div className="bg-gray-900_01 border border-blue_gray-900 border-solid flex flex-col items-center justify-start p-1.5 rounded-[5px] w-[17%]">
                      <Img
                        className="h-2.5 my-1"
                        src="images/img_settings_white_a700.svg"
                        alt="settings_Two"
                      />
                    </div>
                    <div className="bg-gray-900_01 border border-blue_gray-900 border-solid flex flex-col items-end justify-end rounded-[5px] w-[17%]">
                      <Img
                        className="h-[18px] mt-2.5"
                        src="images/img_settings_white_a700_18x39.svg"
                        alt="settings_Three"
                      />
                    </div>
                    <div className="bg-gray-900_01 border border-blue_gray-900 border-solid flex flex-col items-center justify-start p-1.5 rounded-[5px] w-[17%]">
                      <Img
                        className="h-[17px]"
                        src="images/img_user_red_a700.svg"
                        alt="user_Two"
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
      </div>
    </>
  );
};

export default SingleBlogPage;
