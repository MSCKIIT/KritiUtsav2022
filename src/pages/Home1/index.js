import React from "react";

import { Stack, Column, Button, Text, Row, Img } from "components";
import Footer from "components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Home1Page = () => {
  const navigate = useNavigate();

  function navsign() {
    navigate("/signin");
  }
  function navmusic() {
    navigate("/music");
  }

  function navtheatre() {
    navigate("/theatre");
  }

  function navdance() {
    navigate("/dance");
  }
  
  function navliterary() {
    navigate("/literary");
  }
  
  function navarts() {
    navigate("/arts");
  }
  return (
    <>
      <Stack className="bg-white_A700 font-montserrat lg:h-[1280px] xl:h-[1602px] 2xl:h-[1802px] 3xl:h-[2162px] mx-[auto] w-[100%]">
        <Stack className="absolute bottom-[0] lg:h-[1334px] xl:h-[1668px] 2xl:h-[1877px] 3xl:h-[2252px] w-[100%]">
          <Stack className="absolute 2xl:h-[1113px] 3xl:h-[1336px] lg:h-[791px] xl:h-[990px] top-[0] w-[100%]">
            <Stack className="absolute bg-orange_50 2xl:h-[1059px] 3xl:h-[1271px] lg:h-[753px] xl:h-[942px] lg:px-[17px] xl:px-[21px] 2xl:px-[24px] 3xl:px-[28px] top-[0] w-[100%]">
              <Stack className="absolute lg:h-[498px] xl:h-[623px] 2xl:h-[701px] 3xl:h-[841px] inset-x-[0] mx-[auto] top-[0] w-[92%]">
                <Stack className="absolute lg:h-[125px] xl:h-[156px] 2xl:h-[176px] 3xl:h-[211px] right-[37%] top-[1%] w-[12%]">
                  {/* <Column className="absolute bg-bluegray_900 items-center justify-start left-[4%] lg:py-[33px] xl:py-[41px] 2xl:py-[47px] 3xl:py-[56px] right-[1%] rounded-radius10 shadow-bs1 w-[94%]">
                    {/* <Button
                      className="font-semibold lg:mb-[22px] xl:mb-[27px] 2xl:mb-[31px] 3xl:mb-[37px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[100%]"
                      variant="OutlineBlack9003f"
                    >
                      Brochure
                    </Button>
                  </Column>
                  <Text
                    className="absolute bottom-[5%] font-semibold leading-[normal] text-center text-orange_51 w-[100%]"
                    variant="body4"
                  >
                    Eligibility Certificate
                  </Text> */}
                </Stack>
                <Row className="absolute items-center justify-center right-[7%] top-[1%] w-[59%]">
                  <Text
                    className="font-semibold text-bluegray_900 w-[auto]"
                    variant="body3"
                  >
                    About
                  </Text>
                  <Text
                    className="font-semibold lg:ml-[32px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] text-bluegray_900 w-[auto]"
                    variant="body3"
                  >
                    Events
                  </Text>
                  <Text
                    className="font-semibold lg:ml-[32px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] text-orange_50 w-[auto]"
                    variant="body3"
                  >
                    Downloads
                  </Text>
                  <Text
                    className="font-semibold lg:ml-[32px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] text-bluegray_900 w-[auto]"
                    variant="body3"
                  >
                    Contact
                  </Text>
                  <Button
                    className="common-pointer font-bold lg:ml-[32px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center w-[29%]"
                    onClick={navsign}
                    shape="RoundedBorder23"
                    size="sm"
                  >
                    Signin/Signup
                  </Button>
                </Row>
                <Stack
                  className="absolute bg-cover bg-repeat bottom-[0] lg:h-[404px] xl:h-[506px] 2xl:h-[569px] 3xl:h-[682px] left-[0] 3xl:px-[100px] lg:px-[59px] xl:px-[74px] 2xl:px-[84px] lg:w-[403px] xl:w-[505px] 2xl:w-[568px] 3xl:w-[681px]"
                  style={{ backgroundImage: "url('images/img_group29.png')" }}
                >
                  <Img
                    src="images/img_logoforweb1.png"
                    className="absolute lg:h-[176px] xl:h-[220px] 2xl:h-[248px] 3xl:h-[297px] inset-[0] justify-center m-[auto] w-[70%]"
                    alt="logoforwebOne"
                  />
                </Stack>
                <Img
                  src="images/img_logoforweb1.png"
                  className="absolute lg:h-[47px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] left-[5%] top-[0] w-[8%]"
                  alt="logoforwebTwo"
                />
                <Column className="absolute bottom-[15%] justify-start right-[0] w-[57%]">
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
                      23rd - 27th December 2022
                    </Text>
                  </Column>
                  <Row className="items-center justify-end ml-[10%] w-[70%]">
                    <Text
                      className="font-semibold text-bluegray_900 w-[auto]"
                      variant="body6"
                    >
                      Organised by
                    </Text>
                    <Text
                      className="font-semibold lg:ml-[136px] xl:ml-[170px] 2xl:ml-[192px] 3xl:ml-[230px] text-bluegray_900 w-[auto]"
                      variant="body6"
                    >
                      Under the Aegis of
                    </Text>
                  </Row>
                  <Row className="items-start justify-between 2xl:ml-[103px] 3xl:ml-[123px] lg:ml-[73px] xl:ml-[91px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[70%]">
                    <Column className="items-center justify-start 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[60%]">
                      <Img
                        src="images/img_kiit25color1.png"
                        className="lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] w-[100%]"
                        alt="KIIT25ColorOne"
                      />
                      <Img
                        src="images/img_kiitfulllogo.png"
                        className="lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]"
                        alt="KIITFullLogo"
                      />
                    </Column>
                    <Column className="items-center justify-start lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] w-[20%]">
                      <Img
                        src="images/img_g94_105X105.svg"
                        className="2xl:h-[106px] 3xl:h-[127px] lg:h-[75px] xl:h-[94px] 2xl:w-[105px] 3xl:w-[126px] lg:w-[74px] xl:w-[93px]"
                        alt="g94"
                      />
                      <Text
                        className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] text-bluegray_900 w-[auto]"
                        variant="body6"
                      >
                        NEW DELHI
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Stack>
            </Stack>
            <Img
              src="images/img_border11.png"
              className="absolute bottom-[0] lg:h-[282px] xl:h-[353px] 2xl:h-[397px] 3xl:h-[476px] w-[100%]"
              alt="borderEleven"
            />
          </Stack>
          <Column className="absolute bg-pink_900 bottom-[0] items-center justify-start lg:py-[29px] xl:py-[36px] 2xl:py-[41px] 3xl:py-[49px] w-[100%]">
            <Column className="items-center justify-start lg:mb-[24px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[40px] w-[100%]">
              <Stack className="lg:h-[422px] xl:h-[528px] 2xl:h-[594px] 3xl:h-[713px] w-[67%]">
                <Column className="absolute items-center justify-start top-[0] w-[100%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Column
                      className="common-pointer bg-cover bg-repeat lg:h-[211px] xl:h-[264px] 2xl:h-[297px] 3xl:h-[356px] lg:px-[5px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] lg:w-[210px] xl:w-[263px] 2xl:w-[296px] 3xl:w-[355px]"
                      style={{
                        backgroundImage: "url('images/img_group20.png')",
                      }}
                      onClick={navmusic}
                    >
                      <Row className="items-center lg:ml-[57px] xl:ml-[72px] 2xl:ml-[81px] 3xl:ml-[97px] mr-[auto] lg:mt-[180px] xl:mt-[225px] 2xl:mt-[254px] 3xl:mt-[304px] w-[35%]">
                        <Text className="rowmusic" variant="body4">
                          MUSIC
                        </Text>
                        <Img
                          src="images/img_arrowright.svg"
                          className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[6%]"
                          alt="arrowright"
                        />
                      </Row>
                    </Column>
                    <Column
                      className="common-pointer bg-cover bg-repeat lg:h-[211px] xl:h-[264px] 2xl:h-[297px] 3xl:h-[356px] items-end 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] lg:w-[210px] xl:w-[263px] 2xl:w-[296px] 3xl:w-[355px]"
                      style={{
                        backgroundImage: "url('images/img_group21.png')",
                      }}
                      onClick={navarts}
                    >
                      <Row className="items-center justify-end lg:mr-[39px] xl:mr-[48px] 2xl:mr-[55px] 3xl:mr-[66px] lg:mt-[177px] xl:mt-[222px] 2xl:mt-[250px] 3xl:mt-[300px] w-[52%]">
                        <Text className="rowmusic" variant="body4">
                          FINE ARTS
                        </Text>
                        <Img
                          src="images/img_arrowright.svg"
                          className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] w-[4%]"
                          alt="arrowright One"
                        />
                      </Row>
                    </Column>
                    <Column
                      className="common-pointer bg-cover bg-repeat lg:h-[211px] xl:h-[264px] 2xl:h-[297px] 3xl:h-[356px] items-center 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] lg:w-[210px] xl:w-[263px] 2xl:w-[296px] 3xl:w-[355px]"
                      style={{
                        backgroundImage: "url('images/img_group22.png')",
                      }}
                      onClick={navtheatre}
                    >
                      <Row className="items-center justify-center lg:mt-[177px] xl:mt-[222px] 2xl:mt-[250px] 3xl:mt-[300px] w-[45%]">
                        <Text className="rowmusic" variant="body4">
                          THEATRE
                        </Text>
                        <Img
                          src="images/img_arrowright.svg"
                          className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[5%]"
                          alt="arrowright Two"
                        />
                      </Row>
                    </Column>
                  </Row>
                </Column>
                <Column
                  className="common-pointer absolute bg-cover bg-repeat bottom-[0] lg:h-[212px] xl:h-[266px] 2xl:h-[299px] 3xl:h-[358px] items-center justify-end left-[17%] lg:px-[12px] xl:px-[15px] 2xl:px-[17px] 3xl:px-[20px] lg:w-[211px] xl:w-[265px] 2xl:w-[298px] 3xl:w-[357px]"
                  style={{ backgroundImage: "url('images/img_group23.png')" }}
                  onClick={navdance}
                >
                  <Row className="items-center justify-center lg:mt-[169px] xl:mt-[212px] 2xl:mt-[239px] 3xl:mt-[286px] w-[38%]">
                    <Text className="rowmusic" variant="body4">
                      DANCE
                    </Text>
                    <Img
                      src="images/img_arrowright.svg"
                      className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[6%]"
                      alt="arrowright Three"
                    />
                  </Row>
                </Column>
                <Column
                  className="common-pointer absolute bg-cover bg-repeat bottom-[0] lg:h-[237px] xl:h-[296px] 2xl:h-[333px] 3xl:h-[399px] justify-end lg:px-[11px] xl:px-[14px] 2xl:px-[16px] 3xl:px-[19px] right-[13%] lg:w-[236px] xl:w-[295px] 2xl:w-[332px] 3xl:w-[398px]"
                  style={{ backgroundImage: "url('images/img_group24.png')" }}
                  onClick={navliterary}
                >
                  <Row className="items-center lg:ml-[46px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] mr-[auto] lg:mt-[194px] xl:mt-[243px] 2xl:mt-[274px] 3xl:mt-[328px] w-[45%]">
                    <Text className="rowmusic" variant="body4">
                      LITERARY
                    </Text>
                    <Img
                      src="images/img_arrowright.svg"
                      className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] w-[4%]"
                      alt="arrowright Four"
                    />
                  </Row>
                </Column>
              </Stack>
              <Footer className="bg-cyan_800 lg:mt-[46px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] shadow-bs w-[100%]" />
            </Column>
          </Column>
        </Stack>
        <Text
          className="absolute bottom-[42%] inset-x-[0] mx-[auto] text-orange_51 lg:tracking-ls3 xl:tracking-ls4 2xl:tracking-ls5 3xl:tracking-ls6 w-[max-content]"
          as="h2"
          variant="h2"
        >
          EVENTS
        </Text>
      </Stack>
    </>
  );
};

export default Home1Page;