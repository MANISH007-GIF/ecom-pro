import React from "react";

import { Button, Datepicker, Img, Input, Line, List, Text } from "components";
import C01HomepageBlogcard from "components/C01HomepageBlogcard";
import C01HomepageBlogcard1 from "components/C01HomepageBlogcard1";
import C07ShopOneBreadcrumbs from "components/C07ShopOneBreadcrumbs";
import Footer from "components/Footer";
import Header from "components/Header";

const BlogListPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <Header className="bg-white-A700 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
          <C07ShopOneBreadcrumbs
            className="bg-cover bg-gradient1  bg-no-repeat flex flex-col h-[120px] items-start justify-end p-[45px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_breadcrumbs.png')" }}
            homeimage="images/img_home.svg"
            languagetext="Blog"
          />
          <div className="flex flex-col items-center justify-start max-w-[1320px] mt-8 mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-8 items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[131px]"
                  rightIcon={
                    <Img
                      className="mt-0.5 mb-px ml-3"
                      src="images/img_filter_24px.svg"
                      alt="Filter 24px"
                    />
                  }
                  shape="round"
                  color="green_A700"
                  size="md"
                  variant="fill"
                >
                  <div className="font-semibold text-left text-sm">Filter</div>
                </Button>
                <div className="flex flex-row gap-2 items-center justify-start md:ml-[0] ml-[315px] w-auto">
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtPoppinsRegular14Gray600"
                  >
                    Sort by:
                  </Text>
                  <div className="border border-gray-300_01 border-solid flex flex-row items-center justify-between px-4 py-2.5 rounded w-auto">
                    <Text
                      className="text-gray-800 text-sm w-auto"
                      size="txtPoppinsRegular14Gray800"
                    >
                      Latest
                    </Text>
                    <Img
                      className="h-3.5 w-3.5"
                      src="images/img_checkmark_gray_800.svg"
                      alt="checkmark_Four"
                    />
                  </div>
                </div>
                <Text
                  className="md:ml-[0] ml-[511px] text-base text-gray-900"
                  size="txtPoppinsRegular16Gray900"
                >
                  <span className="text-gray-900 font-poppins text-left font-semibold">
                    52
                  </span>
                  <span className="text-gray-900 font-poppins text-left font-normal">
                    {" "}
                  </span>
                  <span className="text-gray-700 font-poppins text-left font-normal">
                    Results Found
                  </span>
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-6 items-start justify-between w-full">
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
                        className="text-gray-900 text-xl w-auto"
                        size="txtPoppinsMedium20"
                      >
                        Top Categories
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-between w-[424px] sm:w-full">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtPoppinsRegular14Gray900"
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
                    <div className="flex flex-row items-start justify-between w-[424px] sm:w-full">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtPoppinsRegular14Gray900"
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
                    <div className="flex flex-row items-start justify-between w-[424px] sm:w-full">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtPoppinsRegular14Gray900"
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
                    <div className="flex flex-row items-start justify-between w-[424px] sm:w-full">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtPoppinsRegular14Gray900"
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
                    <div className="flex flex-row items-start justify-between w-[424px] sm:w-full">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtPoppinsRegular14Gray900"
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
                    <div className="flex flex-row items-start justify-between w-[424px] sm:w-full">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtPoppinsRegular14Gray900"
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
                    <div className="flex flex-row items-start justify-between w-[424px] sm:w-full">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtPoppinsRegular14Gray900"
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
                        className="text-gray-900 text-xl w-auto"
                        size="txtPoppinsMedium20"
                      >
                        Popular Tag
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[89%] md:w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <div className="flex flex-row gap-2 items-center justify-between w-full">
                          <Button
                            className="cursor-pointer min-w-[86px] rounded-[16px] text-center text-sm"
                            color="gray_100"
                            size="sm"
                            variant="fill"
                          >
                            Healthy
                          </Button>
                          <Button
                            className="cursor-pointer min-w-[82px] rounded-[16px] text-center text-sm"
                            color="green_A700"
                            size="sm"
                            variant="fill"
                          >
                            Low fat
                          </Button>
                          <Button
                            className="cursor-pointer min-w-[110px] rounded-[16px] text-center text-sm"
                            color="gray_100"
                            size="sm"
                            variant="fill"
                          >
                            Vegetarian
                          </Button>
                          <Button
                            className="cursor-pointer min-w-[74px] rounded-[16px] text-center text-sm"
                            color="gray_100"
                            size="sm"
                            variant="fill"
                          >
                            Bread
                          </Button>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-between w-[97%] md:w-full">
                          <Button
                            className="cursor-pointer min-w-[97px] rounded-[16px] text-center text-sm"
                            color="gray_100"
                            size="sm"
                            variant="fill"
                          >
                            Kid foods
                          </Button>
                          <Button
                            className="cursor-pointer min-w-[94px] rounded-[16px] text-center text-sm"
                            color="gray_100"
                            size="sm"
                            variant="fill"
                          >
                            Vitamins
                          </Button>
                          <Button
                            className="cursor-pointer min-w-[82px] rounded-[16px] text-center text-sm"
                            color="gray_100"
                            size="sm"
                            variant="fill"
                          >
                            Snacks
                          </Button>
                          <Button
                            className="cursor-pointer min-w-[65px] rounded-[16px] text-center text-sm"
                            color="gray_100"
                            size="sm"
                            variant="fill"
                          >
                            Tiffin
                          </Button>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-start w-[66%] md:w-full">
                          <Button
                            className="cursor-pointer min-w-[68px] rounded-[16px] text-center text-sm"
                            color="gray_100"
                            size="sm"
                            variant="fill"
                          >
                            Meat
                          </Button>
                          <Button
                            className="cursor-pointer min-w-[83px] rounded-[16px] text-center text-sm"
                            color="gray_100"
                            size="sm"
                            variant="fill"
                          >
                            Launch
                          </Button>
                          <Button
                            className="cursor-pointer min-w-[78px] rounded-[16px] text-center text-sm"
                            color="gray_100"
                            size="sm"
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
                        className="text-gray-900 text-xl w-auto"
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
                            className="h-[100px] md:h-auto object-cover rounded-md w-[100px]"
                            src="images/img_gallery.png"
                            alt="gallery"
                          />
                          <Img
                            className="h-[100px] md:h-auto object-cover rounded-md w-[100px]"
                            src="images/img_gallery_100x100.png"
                            alt="gallery_One"
                          />
                          <Img
                            className="h-[100px] md:h-auto object-cover rounded-md w-[100px]"
                            src="images/img_gallery_1.png"
                            alt="gallery_Two"
                          />
                          <Img
                            className="h-[100px] md:h-auto object-cover rounded-md w-[100px]"
                            src="images/img_gallery_2.png"
                            alt="gallery_Three"
                          />
                        </div>
                        <div className="flex flex-1 sm:flex-col flex-row gap-2 items-center justify-between my-0 w-full">
                          <Img
                            className="h-[100px] md:h-auto object-cover rounded-md w-[100px]"
                            src="images/img_gallery_3.png"
                            alt="gallery"
                          />
                          <Img
                            className="h-[100px] md:h-auto object-cover rounded-md w-[100px]"
                            src="images/img_gallery_4.png"
                            alt="gallery_One"
                          />
                          <Img
                            className="h-[100px] md:h-auto object-cover rounded-md w-[100px]"
                            src="images/img_gallery_5.png"
                            alt="gallery_Two"
                          />
                          <Img
                            className="h-[100px] md:h-auto object-cover rounded-md w-[100px]"
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
                        className="text-gray-900 text-xl w-auto"
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
                            className="leading-[150.00%] max-w-[312px] md:max-w-full text-base text-gray-900"
                            size="txtPoppinsMedium16"
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
                            className="leading-[150.00%] max-w-[312px] md:max-w-full text-base text-gray-900"
                            size="txtPoppinsMedium16"
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
                            className="leading-[150.00%] max-w-[312px] md:max-w-full text-base text-gray-900"
                            size="txtPoppinsMedium16"
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
                <div className="flex md:flex-1 flex-col items-center justify-start w-[67%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="md:gap-5 gap-6 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                      <C01HomepageBlogcard1
                        className="hover:cursor-pointer flex flex-1 flex-col items-start justify-start hover:shadow-bs3 hover:w-full w-full"
                        userimage="images/img_image_64.png"
                        datetext="18"
                        monthtext="Nov"
                        infotext="Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum."
                      />
                      <C01HomepageBlogcard
                        className="hover:cursor-pointer flex flex-1 flex-col items-start justify-start hover:shadow-bs3 shadow-bs3 hover:w-full w-full"
                        image="images/img_image_65.png"
                      />
                      <C01HomepageBlogcard1
                        className="hover:cursor-pointer flex flex-1 flex-col items-start justify-start hover:shadow-bs3 hover:w-full w-full"
                        userimage="images/img_image_66.png"
                        datetext="18"
                        monthtext="Nov"
                        infotext="Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum."
                      />
                      <div className="hover:cursor-pointer flex flex-1 flex-col items-start justify-start hover:shadow-bs3 hover:w-full w-full">
                        <div className="h-[324px] relative w-full">
                          <Img
                            className="h-[324px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                            src="images/img_image_67.png"
                            alt="image"
                          />
                          <Button
                            className="absolute flex h-16 inset-[0] items-center justify-center m-auto rounded-[50%] shadow-bs20 w-16"
                            shape="circle"
                            color="white_A700"
                            size="2xl"
                            variant="fill"
                          >
                            <Img
                              src="images/img_vector_green_800.svg"
                              alt="vector"
                            />
                          </Button>
                          <div className="absolute bg-white-A700_d8 bottom-[7%] flex flex-col h-[58px] items-center justify-start left-[6%] p-[5px] rounded w-[58px]">
                            <Text
                              className="text-center text-gray-900 text-xl"
                              size="txtPoppinsMedium20"
                            >
                              18
                            </Text>
                            <Text
                              className="text-center text-gray-600 text-xs tracking-[0.36px] uppercase"
                              size="txtPoppinsMedium12"
                            >
                              Nov
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white-A700 flex flex-col gap-5 items-start justify-start outline outline-[1px] outline-gray-300_01 p-6 sm:px-5 rounded-bl-lg rounded-br-lg w-auto sm:w-full">
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
                                  Food
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
                                  By Admin
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
                                  65 Comments
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="leading-[150.00%] max-w-[376px] md:max-w-full text-gray-900 text-lg"
                              size="txtPoppinsMedium18"
                            >
                              Curabitur porttitor orci eget neque accumsan
                              venenatis. Nunc fermentum.
                            </Text>
                          </div>
                          <div className="flex flex-row gap-3 items-center justify-start w-auto">
                            <Text
                              className="text-base text-green-A700 w-auto"
                              size="txtPoppinsSemiBold16GreenA700"
                            >
                              Read More
                            </Text>
                            <Img
                              className="h-3 w-[15px]"
                              src="images/img_arrowleft.svg"
                              alt="arrowleft"
                            />
                          </div>
                        </div>
                      </div>
                      <C01HomepageBlogcard1
                        className="hover:cursor-pointer flex flex-1 flex-col items-start justify-start hover:shadow-bs3 hover:w-full w-full"
                        userimage="images/img_image_68.png"
                        datetext="18"
                        monthtext="Nov"
                        infotext="Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum."
                      />
                      <div className="hover:cursor-pointer flex flex-1 flex-col items-start justify-start hover:shadow-bs3 hover:w-full w-full">
                        <div className="h-[324px] relative w-full">
                          <Img
                            className="h-[324px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                            src="images/img_image_69.png"
                            alt="image"
                          />
                          <div className="absolute bg-white-A700_d8 bottom-[7%] flex flex-col h-[58px] items-center justify-start left-[6%] p-[5px] rounded w-[58px]">
                            <Text
                              className="text-center text-gray-900 text-xl"
                              size="txtPoppinsMedium20"
                            >
                              18
                            </Text>
                            <Text
                              className="text-center text-gray-600 text-xs tracking-[0.36px] uppercase"
                              size="txtPoppinsMedium12"
                            >
                              Nov
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white-A700 flex flex-col gap-5 items-start justify-start outline outline-[1px] outline-gray-300_01 p-6 sm:px-5 rounded-bl-lg rounded-br-lg w-auto sm:w-full">
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
                                  Food
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
                                  By Admin
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
                                  65 Comments
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="leading-[150.00%] max-w-[376px] md:max-w-full text-gray-900 text-lg"
                              size="txtPoppinsMedium18"
                            >
                              Curabitur porttitor orci eget neque accumsan
                              venenatis. Nunc fermentum.
                            </Text>
                          </div>
                          <div className="flex flex-row gap-3 items-center justify-start w-auto">
                            <Text
                              className="text-base text-green-A700 w-auto"
                              size="txtPoppinsSemiBold16GreenA700"
                            >
                              Read More
                            </Text>
                            <Img
                              className="h-3 w-[15px]"
                              src="images/img_arrowleft.svg"
                              alt="arrowleft"
                            />
                          </div>
                        </div>
                      </div>
                      <C01HomepageBlogcard1
                        className="hover:cursor-pointer flex flex-1 flex-col items-start justify-start hover:shadow-bs3 hover:w-full w-full"
                        userimage="images/img_image_70.png"
                        datetext="18"
                        monthtext="Nov"
                        infotext="Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum."
                      />
                      <div className="hover:cursor-pointer flex flex-1 flex-col items-start justify-start hover:shadow-bs3 hover:w-full w-full">
                        <div className="h-[324px] relative w-full">
                          <Img
                            className="h-[324px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                            src="images/img_image_71.png"
                            alt="image"
                          />
                          <div className="absolute bg-white-A700_d8 bottom-[7%] flex flex-col h-[58px] items-center justify-start left-[6%] p-[5px] rounded w-[58px]">
                            <Text
                              className="text-center text-gray-900 text-xl"
                              size="txtPoppinsMedium20"
                            >
                              18
                            </Text>
                            <Text
                              className="text-center text-gray-600 text-xs tracking-[0.36px] uppercase"
                              size="txtPoppinsMedium12"
                            >
                              Nov
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white-A700 flex flex-col gap-5 items-start justify-start outline outline-[1px] outline-gray-300_01 p-6 sm:px-5 rounded-bl-lg rounded-br-lg w-auto sm:w-full">
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
                                  Food
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
                                  By Admin
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
                                  65 Comments
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="leading-[150.00%] max-w-[376px] md:max-w-full text-gray-900 text-lg"
                              size="txtPoppinsMedium18"
                            >
                              Curabitur porttitor orci eget neque accumsan
                              venenatis. Nunc fermentum.
                            </Text>
                          </div>
                          <div className="flex flex-row gap-3 items-center justify-start w-auto">
                            <Text
                              className="text-base text-green-A700 w-auto"
                              size="txtPoppinsSemiBold16GreenA700"
                            >
                              Read More
                            </Text>
                            <Img
                              className="h-3 w-[15px]"
                              src="images/img_arrowleft.svg"
                              alt="arrowleft"
                            />
                          </div>
                        </div>
                      </div>
                      <C01HomepageBlogcard1
                        className="hover:cursor-pointer flex flex-1 flex-col items-start justify-start hover:shadow-bs3 hover:w-full w-full"
                        userimage="images/img_image_72.png"
                        datetext="18"
                        monthtext="Nov"
                        infotext="Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum."
                      />
                      <div className="hover:cursor-pointer flex flex-1 flex-col items-start justify-start hover:shadow-bs3 hover:w-full w-full">
                        <div className="h-[324px] relative w-full">
                          <Img
                            className="h-[324px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                            src="images/img_image_73.png"
                            alt="image"
                          />
                          <div className="absolute bg-white-A700_d8 bottom-[7%] flex flex-col h-[58px] items-center justify-start left-[6%] p-[5px] rounded w-[58px]">
                            <Text
                              className="text-center text-gray-900 text-xl"
                              size="txtPoppinsMedium20"
                            >
                              18
                            </Text>
                            <Text
                              className="text-center text-gray-600 text-xs tracking-[0.36px] uppercase"
                              size="txtPoppinsMedium12"
                            >
                              Nov
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white-A700 flex flex-col gap-5 items-start justify-start outline outline-[1px] outline-gray-300_01 p-6 sm:px-5 rounded-bl-lg rounded-br-lg w-auto sm:w-full">
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
                                  Food
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
                                  By Admin
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
                                  65 Comments
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="leading-[150.00%] max-w-[376px] md:max-w-full text-gray-900 text-lg"
                              size="txtPoppinsMedium18"
                            >
                              Curabitur porttitor orci eget neque accumsan
                              venenatis. Nunc fermentum.
                            </Text>
                          </div>
                          <div className="flex flex-row gap-3 items-center justify-start w-auto">
                            <Text
                              className="text-base text-green-A700 w-auto"
                              size="txtPoppinsSemiBold16GreenA700"
                            >
                              Read More
                            </Text>
                            <Img
                              className="h-3 w-[15px]"
                              src="images/img_arrowleft.svg"
                              alt="arrowleft"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end mt-10 md:px-10 sm:px-5 px-[562px] w-full">
          <div className="flex flex-row gap-3 items-start justify-start w-auto">
            <Button
              className="flex h-9 items-center justify-center rounded-[50%] w-9"
              shape="circle"
              color="gray_100"
              size="sm"
              variant="fill"
            >
              <Img
                className="h-5"
                src="images/img_arrowleft_gray_400.svg"
                alt="arrowleft"
              />
            </Button>
            <div className="flex flex-row items-start justify-start w-auto">
              <Text
                className="bg-green-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-white-A700 w-9"
                size="txtPoppinsMedium16WhiteA700"
              >
                1
              </Text>
              <Text
                className="bg-white-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-700 w-9"
                size="txtPoppinsRegular16Gray700"
              >
                2
              </Text>
              <Text
                className="bg-white-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-700 w-9"
                size="txtPoppinsRegular16Gray700"
              >
                3
              </Text>
              <Text
                className="bg-white-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-700 w-9"
                size="txtPoppinsRegular16Gray700"
              >
                4
              </Text>
              <Text
                className="bg-white-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-700 w-9"
                size="txtPoppinsRegular16Gray700"
              >
                5
              </Text>
              <Text
                className="bg-white-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-700 w-9"
                size="txtPoppinsRegular16Gray700"
              >
                ...
              </Text>
              <Text
                className="bg-white-A700 flex h-9 items-center justify-center rounded-[50%] text-base text-center text-gray-700 w-9"
                size="txtPoppinsRegular16Gray700"
              >
                21
              </Text>
            </div>
            <Button
              className="border border-gray-300_01 border-solid flex h-9 items-center justify-center rotate-[180deg] rounded-[50%] w-9"
              shape="circle"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              <Img
                className="h-5"
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center mt-20 w-full">
          <Footer className="flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default BlogListPage;
