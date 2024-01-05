import React from "react";

import { Button, CheckBox, Img, Input, Line, List, Text } from "components";
import C01HomepageColumnuser from "components/C01HomepageColumnuser";
import C02HomepageBoxLayoutTeamcard from "components/C02HomepageBoxLayoutTeamcard";
import C02HomepageBoxLayoutTeamcard1 from "components/C02HomepageBoxLayoutTeamcard1";
import C07ShopOneBreadcrumbs from "components/C07ShopOneBreadcrumbs";
import Header from "components/Header";

const AboutPage = () => {
  const c02HomepageBoxLayoutTeamcard1PropList = [
    { userimage: "images/img_image_76.png" },
    {
      username: "Cody Fisher",
      userimage: "images/img_image_77.png",
      userrole: "Security Guard",
    },
    {
      username: "Robert Fox",
      userimage: "images/img_image_78.png",
      userrole: "Senior Farmer Manager",
    },
  ];
  const c01HomepageColumnuserPropList = [
    {},
    { reviewername: "Dianne Russell" },
    { reviewername: "Eleanor Pena" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
        <C07ShopOneBreadcrumbs
          className="bg-cover bg-gradient1  bg-no-repeat flex flex-col h-[120px] items-start justify-end p-[47px] md:px-10 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_breadcrumbs.png')" }}
          homeimage="images/img_home.svg"
          languagetext="About"
        />
        <div className="flex flex-col items-center justify-start max-w-[1364px] mt-20 mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-[41px] items-center justify-between w-full">
            <div className="flex flex-col gap-8 items-center justify-start">
              <Text
                className="leading-[120.00%] md:text-5xl sm:text-[42px] text-[56px] text-gray-900_01 w-full"
                size="txtPoppinsSemiBold56Gray90001"
              >
                100% Trusted Organic Food Store
              </Text>
              <Text
                className="leading-[150.00%] text-gray-700 text-lg w-[98%] sm:w-full"
                size="txtPoppinsRegular18Gray700"
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
            <Img
              className="h-[492px] md:h-auto object-cover rounded-lg"
              src="images/img_image_492x716.png"
              alt="image"
            />
          </div>
        </div>
        <div className="bg-gradient5  h-[685px] md:h-[765px] mt-20 pr-[300px] md:px-5 relative shadow-bs5 w-full">
          <div className="absolute h-[685px] inset-y-[0] left-[0] my-auto w-[85%] md:w-full">
            <div className="absolute h-[685px] inset-y-[0] left-[0] my-auto w-[70%] md:w-full">
              <Img
                className="h-[685px] m-auto object-cover w-full"
                src="images/img_bg_685x1129.png"
                alt="bg"
              />
              <Img
                className="absolute h-[685px] inset-[0] justify-center m-auto object-cover w-[66%]"
                src="images/img_image_685x745.png"
                alt="image_One"
              />
            </div>
            <div className="absolute flex flex-col gap-5 items-start justify-start right-[5%] top-[12%] w-auto">
              <Text
                className="leading-[120.00%] md:text-5xl sm:text-[42px] text-[56px] text-black-900"
                size="txtPoppinsSemiBold56"
              >
                <>
                  100% Trusted
                  <br />
                  Organic Food Store
                </>
              </Text>
              <Text
                className="leading-[150.00%] max-w-[570px] md:max-w-full text-base text-gray-600"
                size="txtPoppinsRegular16"
              >
                Pellentesque a ante vulputate leo porttitor luctus sed eget
                eros. Nulla et rhoncus neque. Duis non diam eget est luctus
                tincidunt a a mi. Nulla eu eros consequat tortor tincidunt
                feugiat.{" "}
              </Text>
            </div>
            <div className="absolute bg-white-A700 bottom-[41%] flex flex-row gap-4 items-center justify-center right-[21%] w-auto">
              <Button
                className="flex h-[72px] items-center justify-center rounded-[50%] w-[72px]"
                shape="circle"
                color="green_A700_19"
                size="xl"
                variant="fill"
              >
                <Img
                  className="h-10"
                  src="images/img_leaf2.svg"
                  alt="leafTwo"
                />
              </Button>
              <div className="flex flex-col gap-2 items-start justify-center w-auto">
                <Text
                  className="text-gray-900_01 text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  100% Organic food
                </Text>
                <Text
                  className="text-gray-600 text-sm w-auto"
                  size="txtPoppinsRegular14Gray600"
                >
                  100% healthy & Fresh food.
                </Text>
              </div>
            </div>
            <div className="absolute bg-white-A700 bottom-[27%] flex flex-row gap-4 items-center justify-center right-[21%] w-auto">
              <Button
                className="flex h-[72px] items-center justify-center rounded-[50%] w-[72px]"
                shape="circle"
                color="green_A700_19"
                size="xl"
                variant="fill"
              >
                <Img
                  className="h-10"
                  src="images/img_thumbsup.svg"
                  alt="thumbsup"
                />
              </Button>
              <div className="flex flex-col gap-2 items-start justify-center w-auto">
                <Text
                  className="text-gray-900_01 text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  Customer Feedback
                </Text>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtPoppinsRegular14"
                >
                  Our happy customer
                </Text>
              </div>
            </div>
            <div className="absolute bg-white-A700 bottom-[13%] flex flex-row gap-4 items-center justify-center right-[21%] w-auto">
              <Button
                className="flex h-[72px] items-center justify-center rounded-[50%] w-[72px]"
                shape="circle"
                color="green_A700_19"
                size="xl"
                variant="fill"
              >
                <Img
                  className="h-10"
                  src="images/img_deliverytruck1.svg"
                  alt="deliverytruckOne"
                />
              </Button>
              <div className="flex flex-col gap-2 items-start justify-center w-auto">
                <Text
                  className="text-gray-900_01 text-lg w-auto"
                  size="txtPoppinsMedium18"
                >
                  Free Shipping
                </Text>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtPoppinsRegular14"
                >
                  Free shipping with discount
                </Text>
              </div>
            </div>
            <List
              className="absolute bottom-[13%] flex flex-col gap-6 right-[0] w-1/5"
              orientation="vertical"
            >
              <div className="bg-white-A700 flex flex-row gap-4 items-center justify-start w-auto">
                <Button
                  className="flex h-[72px] items-center justify-center rounded-[50%] w-[72px]"
                  shape="circle"
                  color="green_A700_19"
                  size="xl"
                  variant="fill"
                >
                  <Img
                    className="h-9"
                    src="images/img_headphones1.svg"
                    alt="headphonesOne"
                  />
                </Button>
                <div className="flex flex-col gap-2 items-start justify-center w-auto">
                  <Text
                    className="text-gray-900_01 text-lg w-auto"
                    size="txtPoppinsMedium18"
                  >
                    Great Support 24/7
                  </Text>
                  <Text
                    className="text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    Instant access to Contact
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-row gap-4 items-center justify-start w-auto">
                <Button
                  className="flex h-[72px] items-center justify-center rounded-[50%] w-[72px]"
                  shape="circle"
                  color="green_A700_19"
                  size="xl"
                  variant="fill"
                >
                  <Img
                    className="h-9"
                    src="images/img_bag_green_a700.svg"
                    alt="bag"
                  />
                </Button>
                <div className="flex flex-col gap-2 items-start justify-center w-auto">
                  <Text
                    className="text-gray-900_01 text-lg w-auto"
                    size="txtPoppinsMedium18"
                  >
                    100% Sucure Payment
                  </Text>
                  <Text
                    className="text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    We ensure your money is save
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-row gap-4 items-center justify-start w-auto">
                <Button
                  className="flex h-[72px] items-center justify-center rounded-[50%] w-[72px]"
                  shape="circle"
                  color="green_A700_19"
                  size="xl"
                  variant="fill"
                >
                  <Img
                    className="h-9"
                    src="images/img_package.svg"
                    alt="package"
                  />
                </Button>
                <div className="flex flex-col gap-2 items-start justify-center w-auto">
                  <Text
                    className="text-gray-900_01 text-lg w-auto"
                    size="txtPoppinsMedium18"
                  >
                    100% Organic Food
                  </Text>
                  <Text
                    className="text-gray-500 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    100% healthy & Fresh food.
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="h-[1302px] mt-20 md:px-5 relative w-full">
          <div className="flex md:flex-col flex-row gap-[29px] items-start justify-center mb-[-10px] ml-auto mr-36 pb-2.5 w-[77%] z-[1]">
            <div className="flex flex-col items-start justify-start md:mt-0 mt-20 w-[38%] md:w-full">
              <Text
                className="leading-[120.00%] text-5xl sm:text-[38px] md:text-[44px] text-gray-900_01 w-full"
                size="txtPoppinsSemiBold48"
              >
                We Delivered, You Enjoy Your Order.
              </Text>
              <Text
                className="leading-[150.00%] mt-6 text-base text-gray-700 w-[98%] sm:w-full"
                size="txtPoppinsRegular16Gray700"
              >
                Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
                ultrices consectetur velit dapibus eu. Mauris sollicitudin
                dignissim diam, ac mattis eros accumsan rhoncus. Curabitur
                auctor bibendum nunc eget elementum.
              </Text>
              <div className="flex flex-col gap-4 items-start justify-start mt-5 w-auto sm:w-full">
                <CheckBox
                  className="sm:pr-5 text-left text-sm"
                  inputClassName="h-5 mr-[5px] w-5"
                  name="sedinmetuspelle_One"
                  id="sedinmetuspelle_One"
                  label="Sed in metus pellentesque."
                  shape="round"
                  color="green_A700_63"
                  size="xs"
                  variant="fill"
                ></CheckBox>
                <CheckBox
                  className="sm:pr-5 text-left text-sm"
                  inputClassName="h-5 mr-[5px] w-5"
                  name="fusceetexcommod_One"
                  id="fusceetexcommod_One"
                  label="Fusce et ex commodo, aliquam nulla efficitur, tempus lorem."
                  shape="round"
                  color="green_A700_63"
                  size="xs"
                  variant="fill"
                ></CheckBox>
                <CheckBox
                  className="sm:pr-5 text-left text-sm"
                  inputClassName="h-5 mr-[5px] w-5"
                  name="maecenasutnunc"
                  id="maecenasutnunc"
                  label="Maecenas ut nunc fringilla erat varius."
                  shape="round"
                  color="green_A700_63"
                  size="xs"
                  variant="fill"
                ></CheckBox>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[192px] mt-[29px] rounded-[25px]"
                rightIcon={
                  <Img
                    className="mt-1 mb-[7px] ml-4"
                    src="images/img_arrowleft_white_a700.svg"
                    alt="arrow_left"
                  />
                }
                color="green_A700"
                size="lg"
                variant="fill"
              >
                <div className="font-semibold text-base text-left">
                  Shop Now
                </div>
              </Button>
            </div>
            <Img
              className="h-[606px] sm:h-auto object-cover w-[61%] md:w-full"
              src="images/img_image_606x895.png"
              alt="image_Three"
            />
          </div>
          <div className="bg-gradient6  flex flex-col items-center justify-start mt-auto mx-auto p-[73px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col gap-[50px] items-center justify-start mb-1.5 w-[84%] md:w-full">
              <div className="flex flex-col gap-3 items-center justify-start w-auto md:w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-900_01 w-auto"
                  size="txtPoppinsSemiBold48"
                >
                  Our Awesome Team
                </Text>
                <Text
                  className="leading-[150.00%] md:max-w-full max-w-screen-sm text-base text-center text-gray-700"
                  size="txtPoppinsRegular16Gray700"
                >
                  Pellentesque a ante vulputate leo porttitor luctus sed eget
                  eros. Nulla et rhoncus neque. Duis non diam eget est luctus
                  tincidunt a a mi.
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Button
                  className="border border-gray-300_01 border-solid flex h-[45px] items-center justify-center md:mt-0 my-[161px] rotate-[180deg] w-[45px]"
                  shape="round"
                  color="white_A700"
                  size="lg"
                  variant="fill"
                >
                  <Img
                    src="images/img_arrowdown_gray_900.svg"
                    alt="arrowdown_Two"
                  />
                </Button>
                <C02HomepageBoxLayoutTeamcard
                  className="bg-white-A700 flex flex-col gap-4 items-center justify-start pb-5 rounded-[10px] shadow-bs6"
                  userimage="images/img_image_75.png"
                />
                <List
                  className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3"
                  orientation="horizontal"
                >
                  {c02HomepageBoxLayoutTeamcard1PropList.map((props, index) => (
                    <React.Fragment
                      key={`C02HomepageBoxLayoutTeamcard1${index}`}
                    >
                      <C02HomepageBoxLayoutTeamcard1
                        className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col gap-4 items-center justify-start sm:ml-[0] pb-5 rounded-lg w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </List>
                <Button
                  className="border border-gray-300_01 border-solid flex h-[45px] items-center justify-center md:mt-0 my-[161px] w-[45px]"
                  shape="round"
                  color="white_A700"
                  size="lg"
                  variant="fill"
                >
                  <Img
                    src="images/img_arrowleft_gray_900.svg"
                    alt="arrowleft"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 flex flex-col gap-[50px] items-center justify-center py-[100px] w-auto md:w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-900_01 w-auto"
              size="txtPoppinsSemiBold48"
            >
              Client Testimonail
            </Text>
            <div className="flex flex-row gap-3 items-start justify-start w-auto">
              <Button
                className="border border-gray-300_01 border-solid flex h-[45px] items-center justify-center rotate-[180deg] w-[45px]"
                shape="round"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                <Img
                  src="images/img_arrowdown_gray_900.svg"
                  alt="arrowdown_Three"
                />
              </Button>
              <Button
                className="flex h-[45px] items-center justify-center w-[45px]"
                shape="round"
                color="green_A700"
                size="lg"
                variant="fill"
              >
                <Img
                  src="images/img_arrowleft_white_a700.svg"
                  alt="arrowleft_One"
                />
              </Button>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1320px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            {c01HomepageColumnuserPropList.map((props, index) => (
              <React.Fragment key={`C01HomepageColumnuser${index}`}>
                <C01HomepageColumnuser
                  className="bg-white-A700 flex sm:flex-1 flex-col gap-4 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs4 w-auto sm:w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
        </div>
        <Img
          className="h-48 max-w-[1320px] mx-auto w-full"
          src="images/img_companylogo_gray_400.svg"
          alt="companylogo"
        />
        <footer className="flex items-center justify-center md:px-5 w-full">
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
                  alt="user"
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
                      alt="user_One"
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

export default AboutPage;
