import React from "react";

import { Img, Line, Text } from "components";

const ThumbnailPage = () => {
  return (
    <>
      <div className="bg-gradient2  flex sm:flex-col md:flex-col flex-row font-dmsans sm:gap-10 md:gap-10 gap-[156px] items-start mx-auto overflow-auto w-full">
        <div className="overflow-x-auto w-full">
          <div className="sm:h-[1078px] h-[1427px] md:h-[2329px] md:px-5 relative w-full">
            <div className="absolute bottom-[5%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="sm:h-[1077px] h-[1078px] md:h-[1620px] relative w-1/2 md:w-full">
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-end justify-center m-auto p-[99px] md:px-10 sm:px-5 w-[98%]"
                    style={{
                      backgroundImage: "url('images/img_group2589.png')",
                    }}
                  >
                    <div className="flex md:flex-col flex-row gap-[57.6px] items-center justify-center mb-[17px] mt-[602px] w-auto md:w-full">
                      <div className="flex flex-col gap-[14.4px] items-start justify-start w-auto">
                        <Text
                          className="md:text-5xl text-[115.2px] text-yellow-500 w-auto"
                          size="txtDMSansBold1152"
                        >
                          55+
                        </Text>
                        <Text
                          className="leading-[120.00%] sm:text-[36.8px] md:text-[42.8px] text-[46.8px] text-white-A700"
                          size="txtDMSansRegular468"
                        >
                          <>
                            Beautiful
                            <br />
                            page
                          </>
                        </Text>
                      </div>
                      <Line className="bg-white-A700_6c h-36 md:h-[3px] w-[3px] md:w-full" />
                      <div className="flex flex-col gap-[14.4px] items-start justify-start w-auto">
                        <Text
                          className="md:text-5xl text-[115.2px] text-yellow-500 w-auto"
                          size="txtDMSansBold1152"
                        >
                          99+
                        </Text>
                        <Text
                          className="leading-[120.00%] sm:text-[36.8px] md:text-[42.8px] text-[46.8px] text-white-A700"
                          size="txtDMSansRegular468"
                        >
                          <>
                            Figma UI
                            <br />
                            Components
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex md:flex-col flex-row font-poppins gap-[21.6px] items-center justify-start right-[0] top-[13%] w-auto">
                    <Img
                      className="h-[142px] w-[142px]"
                      src="images/img_plant1.svg"
                      alt="plantOne"
                    />
                    <Text
                      className="md:text-5xl text-[142.48px] text-white-A700 tracking-[-4.27px] w-auto"
                      size="txtPoppinsMedium14248"
                    >
                      Shopery
                    </Text>
                  </div>
                </div>
                <Img
                  className="h-[669px] md:h-auto md:mt-0 mt-[262px] object-cover rounded-[7px]"
                  src="images/img_01homepage1.png"
                  alt="01homepageOne"
                />
              </div>
            </div>
            <Img
              className="absolute bottom-[5%] h-[111px] object-cover right-[0] rounded-[7px] w-[34%]"
              src="images/img_01homepage2.png"
              alt="01homepageTwo"
            />
            <div className="absolute flex flex-col gap-[39px] justify-start left-[11%] top-[35%] w-[46%]">
              <Img
                className="h-[90px] md:h-auto md:ml-[0] ml-[763px] object-cover w-[12%] sm:w-full"
                src="images/img_growthcloseup_90x104.png"
                alt="growthcloseup"
              />
              <Text
                className="leading-[140.00%] mr-[82px] md:text-5xl text-7xl text-white-A700"
                size="txtDMSansMedium72"
              >
                <>
                  Organic eCommerce
                  <br />
                  Figma Template
                </>
              </Text>
            </div>
            <Img
              className="absolute bottom-[0] h-[178px] object-cover right-[38%] w-[9%]"
              src="images/img_31.png"
              alt="ThirtyOne"
            />
            <Img
              className="absolute h-[168px] inset-x-[0] mx-auto object-cover top-[19%] w-[13%]"
              src="images/img_objects1.png"
              alt="objectsOne"
            />
            <Img
              className="absolute h-[135px] object-cover right-[44%] top-[19%] w-[9%]"
              src="images/img_objects2_135x157.png"
              alt="objectsTwo"
            />
            <Img
              className="absolute h-[504px] object-cover right-[0] rounded-[7px] top-[0] w-2/5"
              src="images/img_01homepage2_504x763.png"
              alt="01homepageTwo_One"
            />
          </div>
        </div>
        <Img
          className="h-[504px] sm:h-auto object-cover rounded-[7px] w-2/5 md:w-full"
          src="images/img_01homepage2_1.png"
          alt="01homepageTwo_Two"
        />
      </div>
    </>
  );
};

export default ThumbnailPage;
