import React from "react";

import { Stack, Column, Row, Img, Text, Button } from "components";
import Footer from "components/Footer/Footer";

const MusicPage = () => {
  return (
    <>
      <Stack className="bg-white_A700 font-montserrat lg:h-[1280px] xl:h-[1602px] 2xl:h-[1802px] 3xl:h-[2162px] mx-[auto] w-[100%]">
        <Stack className="absolute lg:h-[1280px] xl:h-[1602px] 2xl:h-[1802px] 3xl:h-[2162px] w-[100%]">
          <Stack className="absolute 2xl:h-[1113px] 3xl:h-[1336px] lg:h-[791px] xl:h-[990px] top-[0] w-[100%]">
            <Column className="absolute bg-orange_50 items-center justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] top-[0] w-[100%]">
              <Column className="items-center justify-start lg:mb-[224px] xl:mb-[281px] 2xl:mb-[316px] 3xl:mb-[379px] w-[95%]">
                <Column className="justify-start w-[100%]">
                  <Row className="items-center lg:ml-[44px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] w-[82%]">
                    <Img
                      src="images/img_logoforweb1.png"
                      className="lg:h-[47px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] w-[10%]"
                      alt="logoforwebTwo"
                    />
                    <Row className="items-center justify-between lg:ml-[206px] xl:ml-[257px] 2xl:ml-[290px] 3xl:ml-[348px] w-[64%]">
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        variant="body3"
                      >
                        About
                      </Text>
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        variant="body3"
                      >
                        Events
                      </Text>
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        variant="body3"
                      >
                        Downloads
                      </Text>
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        variant="body3"
                      >
                        Contact
                      </Text>
                      <Button
                        className="font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center w-[20%]"
                        shape="RoundedBorder23"
                        size="sm"
                      >
                        Signin
                      </Button>
                    </Row>
                  </Row>
                  <Row className="items-start justify-evenly lg:mt-[43px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] w-[100%]">
                    <Stack
                      className="bg-cover bg-repeat lg:h-[404px] xl:h-[506px] 2xl:h-[569px] 3xl:h-[682px] 3xl:px-[100px] lg:px-[59px] xl:px-[74px] 2xl:px-[84px] lg:w-[403px] xl:w-[505px] 2xl:w-[568px] 3xl:w-[681px]"
                      style={{
                        backgroundImage: "url('images/img_group29.png')",
                      }}
                    >
                      <Img
                        src="images/img_logoforweb1.png"
                        className="absolute lg:h-[176px] xl:h-[220px] 2xl:h-[248px] 3xl:h-[297px] inset-[0] justify-center m-[auto] w-[70%]"
                        alt="logoforwebOne"
                      />
                    </Stack>
                    <Column className="justify-start lg:mt-[139px] xl:mt-[174px] 2xl:mt-[196px] 3xl:mt-[235px] w-[57%]">
                      <Column className="items-center justify-start w-[100%]">
                        <Text
                          className="leading-[normal] text-bluegray_900 text-center w-[100%]"
                          as="h3"
                          variant="h3"
                        >
                          36TH INTER UNIVERSITY EAST ZONE YOUTH FESTIVAL
                        </Text>
                        <Text
                          className="lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] text-bluegray_900 lg:tracking-ls4 xl:tracking-ls5 2xl:tracking-ls6 3xl:tracking-ls7 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          23rd - 27th December, 2022
                        </Text>
                      </Column>
                      <Row className="items-center lg:ml-[135px] xl:ml-[169px] 2xl:ml-[190px] 3xl:ml-[228px] 3xl:mt-[108px] lg:mt-[64px] xl:mt-[80px] 2xl:mt-[90px] w-[43%]">
                        <Img
                          src="images/img_kiitlogohd1.png"
                          className="3xl:h-[117px] lg:h-[69px] xl:h-[87px] 2xl:h-[98px] w-[39%]"
                          alt="KIITlogoHDOne"
                        />
                        <Img
                          src="images/img_globe.svg"
                          className="3xl:h-[115px] lg:h-[68px] xl:h-[85px] 2xl:h-[96px] 2xl:ml-[101px] 3xl:ml-[121px] lg:ml-[71px] xl:ml-[89px] 3xl:w-[114px] lg:w-[67px] xl:w-[84px] 2xl:w-[95px]"
                          alt="globe"
                        />
                      </Row>
                    </Column>
                  </Row>
                </Column>
              </Column>
            </Column>
            <Img
              src="images/img_border11_396X1440.png"
              className="absolute bottom-[0] lg:h-[282px] xl:h-[353px] 2xl:h-[397px] 3xl:h-[476px] w-[100%]"
              alt="borderEleven"
            />
          </Stack>
          <Column className="absolute bg-pink_900 bottom-[0] items-center justify-end lg:pt-[32px] xl:pt-[40px] 2xl:pt-[45px] 3xl:pt-[54px] w-[100%]">
            <Column className="items-center justify-start w-[100%]">
              <Text
                className="text-orange_51 lg:tracking-ls3 xl:tracking-ls4 2xl:tracking-ls5 3xl:tracking-ls6 w-[auto]"
                as="h2"
                variant="h2"
              >
                EVENTS
              </Text>
              <Stack className="lg:h-[422px] xl:h-[528px] 2xl:h-[594px] 3xl:h-[713px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[67%]">
                <Stack className="absolute lg:h-[422px] xl:h-[528px] 2xl:h-[594px] 3xl:h-[713px] w-[100%]">
                  <Column className="absolute items-center justify-start top-[0] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Column
                        className="bg-cover bg-repeat lg:h-[211px] xl:h-[264px] 2xl:h-[297px] 3xl:h-[356px] items-center 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] lg:w-[210px] xl:w-[263px] 2xl:w-[296px] 3xl:w-[355px]"
                        style={{
                          backgroundImage: "url('images/img_group20.png')",
                        }}
                      >
                        <Text
                          className="lg:mt-[177px] xl:mt-[222px] 2xl:mt-[250px] 3xl:mt-[300px] rowmusic"
                          variant="body4"
                        >
                          MUSIC
                        </Text>
                      </Column>
                      <Column className="items-center w-[65%]">
                        <Row className="items-center justify-between w-[100%]">
                          <Img
                            src="images/img_group21.png"
                            className="lg:h-[211px] xl:h-[264px] 2xl:h-[297px] 3xl:h-[356px] lg:w-[210px] xl:w-[263px] 2xl:w-[296px] 3xl:w-[355px]"
                            alt="fineartsOne"
                          />
                          <Img
                            src="images/img_group22.png"
                            className="lg:h-[211px] xl:h-[264px] 2xl:h-[297px] 3xl:h-[356px] lg:w-[210px] xl:w-[263px] 2xl:w-[296px] 3xl:w-[355px]"
                            alt="THreatreOne"
                          />
                        </Row>
                      </Column>
                    </Row>
                  </Column>
                  <Column
                    className="absolute bg-cover bg-repeat bottom-[0] lg:h-[212px] xl:h-[266px] 2xl:h-[299px] 3xl:h-[358px] items-center justify-end left-[17%] lg:px-[12px] xl:px-[15px] 2xl:px-[17px] 3xl:px-[20px] lg:w-[211px] xl:w-[265px] 2xl:w-[298px] 3xl:w-[357px]"
                    style={{ backgroundImage: "url('images/img_group23.png')" }}
                  >
                    <Text
                      className="lg:mt-[169px] xl:mt-[212px] 2xl:mt-[239px] 3xl:mt-[286px] rowmusic"
                      variant="body4"
                    >
                      DANCE
                    </Text>
                  </Column>
                  <Column
                    className="absolute bg-cover bg-repeat bottom-[0] lg:h-[237px] xl:h-[296px] 2xl:h-[333px] 3xl:h-[399px] justify-end lg:px-[12px] xl:px-[15px] 2xl:px-[17px] 3xl:px-[20px] right-[13%] lg:w-[236px] xl:w-[295px] 2xl:w-[332px] 3xl:w-[398px]"
                    style={{ backgroundImage: "url('images/img_group24.png')" }}
                  >
                    <Text
                      className="lg:ml-[48px] xl:ml-[60px] 2xl:ml-[68px] 3xl:ml-[81px] lg:mt-[193px] xl:mt-[241px] 2xl:mt-[272px] 3xl:mt-[326px] rowmusic"
                      variant="body4"
                    >
                      LITERARY
                    </Text>
                  </Column>
                </Stack>
                <Row className="absolute items-center justify-between right-[10%] top-[44%] w-[47%]">
                  <Text className="rowmusic" variant="body4">
                    FINE ARTS
                  </Text>
                  <Text className="rowmusic" variant="body4">
                    THEATRE
                  </Text>
                </Row>
              </Stack>
              <Footer className="bg-cyan_800 lg:mt-[46px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] shadow-bs w-[100%]" />
            </Column>
          </Column>
        </Stack>
        <Column className="absolute bg-cyan_800 border-bw5 border-red_600 border-solid bottom-[22%] inset-x-[0] items-center justify-start mx-[auto] lg:p-[26px] xl:p-[32px] 2xl:p-[37px] 3xl:p-[44px] rounded-radius20 shadow-bs2 w-[38%]">
          <Text
            className="text-orange_51 lg:tracking-ls2 xl:tracking-ls3 3xl:tracking-ls4 2xl:tracking-ls4 w-[auto]"
            as="h4"
            variant="h4"
          >
            MUSIC
          </Text>
          <Text
            className="font-medium leading-[normal] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] text-white_A700 w-[99%]"
            variant="body1"
          >
            <span className="text-white_A700 font-montserrat lg:text-[35px] xl:text-[44px] 2xl:text-[50px] 3xl:text-[60px]">
              ·{" "}
            </span>
            <span className="text-white_A700 font-montserrat lg:text-[21px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px]">
              Classical Vocal Solo (Hindustani or Karnatak)
              <br />
            </span>
            <span className="text-white_A700 font-montserrat lg:text-[35px] xl:text-[44px] 2xl:text-[50px] 3xl:text-[60px]">
              ·{" "}
            </span>
            <span className="text-white_A700 font-montserrat lg:text-[21px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px]">
              Classical Instrumental Solo (Percussion)
              <br />
            </span>
            <span className="text-white_A700 font-montserrat lg:text-[35px] xl:text-[44px] 2xl:text-[50px] 3xl:text-[60px]">
              ·{" "}
            </span>
            <span className="text-white_A700 font-montserrat lg:text-[21px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px]">
              Classical Instrumental Solo (Non-Percussion)
              <br />
            </span>
            <span className="text-white_A700 font-montserrat lg:text-[35px] xl:text-[44px] 2xl:text-[50px] 3xl:text-[60px]">
              ·{" "}
            </span>
            <span className="text-white_A700 font-montserrat lg:text-[21px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px]">
              Light Vocal (Indian)
              <br />
            </span>
            <span className="text-white_A700 font-montserrat lg:text-[35px] xl:text-[44px] 2xl:text-[50px] 3xl:text-[60px]">
              ·{" "}
            </span>
            <span className="text-white_A700 font-montserrat lg:text-[21px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px]">
              Western Vocal (Solo)
              <br />
            </span>
            <span className="text-white_A700 font-montserrat lg:text-[35px] xl:text-[44px] 2xl:text-[50px] 3xl:text-[60px]">
              ·{" "}
            </span>
            <span className="text-white_A700 font-montserrat lg:text-[21px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px]">
              Group Song (Indian)
              <br />
            </span>
            <span className="text-white_A700 font-montserrat lg:text-[35px] xl:text-[44px] 2xl:text-[50px] 3xl:text-[60px]">
              ·{" "}
            </span>
            <span className="text-white_A700 font-montserrat lg:text-[21px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px]">
              Group Song (Western)
              <br />
            </span>
            <span className="text-white_A700 font-montserrat lg:text-[35px] xl:text-[44px] 2xl:text-[50px] 3xl:text-[60px]">
              ·{" "}
            </span>
            <span className="text-white_A700 font-montserrat lg:text-[21px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px]">
              Folk Orchestra
              <br />
            </span>
            <span className="text-white_A700 font-montserrat lg:text-[35px] xl:text-[44px] 2xl:text-[50px] 3xl:text-[60px]">
              ·{" "}
            </span>
            <span className="text-white_A700 font-montserrat lg:text-[21px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px]">
              Western Instrumental (Solo)
              <br />
            </span>
          </Text>
        </Column>
      </Stack>
    </>
  );
};

export default MusicPage;
