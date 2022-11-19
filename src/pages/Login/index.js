import React from "react";
import Header from "components/Header";
import { Column, Row, Img, Text, Button, Stack, Input } from "components";
import Footer from "components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  function handleNavigate23() {
    navigate("/");
  }
  function handleNavigate24() {
    navigate("/dashboard");
  }

  return (
    <>
      <Column className="bg-white_A700 font-montserrat items-center justify-end mx-[auto] w-[100%]">
        <Column className="items-center justify-end w-[100%]">
          <Column className="bg-orange_50 items-center justify-start lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] w-[100%]">
            <Column className="items-center justify-start lg:mb-[39px] xl:mb-[48px] 2xl:mb-[55px] 3xl:mb-[66px] w-[100%]">
            <Header className="lg:mt-[46px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] w-[100%]" />
              <Column className="justify-start w-[100%]">
                {/* <Row className="items-center lg:ml-[105px] xl:ml-[131px] 2xl:ml-[148px] 3xl:ml-[177px] w-[75%]">
                  <Img
                    src="images/img_logoforweb1.png"
                    className="common-pointer logoforwebTwo1"
                    onClick={handleNavigate23}
                    alt="logoforwebTwo"
                  />
                  <Row className="items-center justify-between lg:ml-[206px] xl:ml-[257px] 2xl:ml-[290px] 3xl:ml-[348px] w-[63%]">
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
                      className="font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[19%]"
                      shape="RoundedBorder23"
                      size="sm"
                      variant="FillBluegray900"
                    >
                      Login
                    </Button>
                  </Row>
                </Row> */}
                <Row className="items-start 2xl:ml-[109px] 3xl:ml-[130px] lg:ml-[77px] xl:ml-[96px] 3xl:mt-[102px] lg:mt-[60px] xl:mt-[75px] 2xl:mt-[85px] w-[75%]">
                  <Stack className="lg:h-[312px] xl:h-[390px] 2xl:h-[439px] 3xl:h-[526px] w-[41%]">
                    <Stack
                      className="absolute bg-cover bg-repeat lg:h-[312px] xl:h-[390px] 2xl:h-[439px] 3xl:h-[526px] left-[1%] lg:px-[45px] xl:px-[56px] 2xl:px-[64px] 3xl:px-[76px] lg:w-[311px] xl:w-[389px] 2xl:w-[438px] 3xl:w-[525px]"
                      style={{
                        backgroundImage: "url('images/img_group29.png')",
                      }}
                    >
                      <Img
                        src="images/img_logoforweb1.png"
                        className="absolute lg:h-[137px] xl:h-[171px] 2xl:h-[193px] 3xl:h-[231px] inset-[0] justify-center m-[auto] w-[70%]"
                        alt="logoforwebOne"
                      />
                    </Stack>
                    <Img
                      src="images/img_mail_12X30.svg"
                      className="absolute bottom-[27%] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] left-[0] w-[7%]"
                      alt="mail"
                    />
                  </Stack>
                  <Column className="bg-bluegray_900 items-center justify-center lg:ml-[207px] xl:ml-[259px] 2xl:ml-[292px] 3xl:ml-[350px] lg:mt-[49px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius20 shadow-bs3 w-[32%]">
                    <Text
                      className="lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] text-orange_100 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 2xl:tracking-ls2 w-[auto]"
                      variant="body2"
                    >
                      University Login Portal
                    </Text>
                    <Column className="items-center justify-start lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] rounded-radius20 w-[94%]">
                      <Input
                        className="placeholder:text-orange_50_99 Group189"
                        wrapClassName="bg-pink_900 rounded-radius10 shadow-bs3 w-[100%]"
                        type="text"
                        name="GroupFiftyNine"
                        placeholder="Username*"
                        shape="RoundedBorder17"
                        size="md"
                        variant="OutlineBlack90051_2"
                      ></Input>
                      <Input
                        className="placeholder:text-orange_50_99 Group189"
                        wrapClassName="bg-pink_900 rounded-radius10 shadow-bs3 2xl:mt-[20px] 3xl:mt-[24px] lg:mt-[14px] w-[100%] xl:mt-[17px]"
                        type="password"
                        name="GroupSixty"
                        placeholder="Password*"
                        shape="RoundedBorder17"
                        variant="OutlineBlack90051_2"
                      ></Input>
                    </Column>
                    <Text
                      className="common-pointer bg-pink_900 font-bold lg:mb-[34px] xl:mb-[42px] 2xl:mb-[48px] 3xl:mb-[57px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:px-[24px] xl:px-[31px] 2xl:px-[35px] 3xl:px-[42px] py-[3px] rounded-radius17 text-orange_100 w-[166px]"
                      variant="body3"
                      onClick={handleNavigate24}
                    >
                      Submit
                    </Text>
                  </Column>
                </Row>
                <Text
                  className="font-extrabold leading-[normal] 3xl:ml-[118px] lg:ml-[70px] xl:ml-[88px] 2xl:ml-[99px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] text-bluegray_900 text-center w-[32%]"
                  as="h5"
                  variant="h5"
                >
                  36TH INTER UNIVERSITY EAST ZONE YOUTH FESTIVAL
                </Text>
                <Text
                  className="font-bold lg:ml-[118px] xl:ml-[147px] 2xl:ml-[166px] 3xl:ml-[199px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] text-bluegray_900 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 2xl:tracking-ls2 w-[auto]"
                  variant="body5"
                >
                  23rd - 27th December 2022
                </Text>
                <Footer className="bg-cyan_800 lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] shadow-bs w-[100%]" />
              </Column>
            </Column>
          </Column>
          <Row className="items-center justify-center lg:mt-[450px] xl:mt-[563px] 2xl:mt-[633px] 3xl:mt-[760px] w-[30%]">
            <Text className="rowmusic" variant="body5">
              DANCE
            </Text>
            <Text
              className="lg:ml-[161px] xl:ml-[201px] 2xl:ml-[227px] 3xl:ml-[272px] rowmusic"
              variant="body5"
            >
              LITERARY
            </Text>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default LoginPage;
