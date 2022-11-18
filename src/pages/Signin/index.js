import React from "react";
import Header from "components/Header";
import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Stack,
  Input,
  SelectBox,
} from "components";
import Footer from "components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const SigninPage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/");
  }
  function handleNavigate2() {
    navigate("/dashboard");
  }
  function handleNavigate3() {
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
                {/* <Row className="items-center justify-between lg:ml-[105px] xl:ml-[131px] 2xl:ml-[148px] 3xl:ml-[177px] w-[81%]">
                  <Img
                    src="images/img_logoforweb1.png"
                    className="common-pointer lg:h-[47px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] w-[9%]"
                    onClick={handleNavigate1}
                    alt="logoforwebTwo"
                  />
                  <Row className="items-center justify-between w-[66%]">
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
                      className="font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center w-[29%]"
                      shape="RoundedBorder23"
                      size="sm"
                    >
                      Signin/Signup
                    </Button>
                  </Row>
                </Row> */}
                <Row className="items-start lg:ml-[51px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] 3xl:mt-[109px] lg:mt-[64px] xl:mt-[80px] 2xl:mt-[91px] w-[85%]">
                  <Stack
                    className="bg-cover bg-repeat lg:h-[286px] xl:h-[358px] 2xl:h-[403px] 3xl:h-[483px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:px-[25px] xl:px-[32px] 2xl:px-[36px] 3xl:px-[43px] lg:w-[285px] xl:w-[357px] 2xl:w-[402px] 3xl:w-[482px]"
                    style={{ backgroundImage: "url('images/img_group29.png')" }}
                  >
                    <Img
                      src="images/img_logoforweb1.png"
                      className="absolute lg:h-[126px] xl:h-[157px] 2xl:h-[177px] 3xl:h-[212px] inset-[0] justify-center m-[auto] w-[70%]"
                      alt="logoforwebOne"
                    />
                    <Img
                      src="images/img_mail_12X30.svg"
                      className="absolute bottom-[21%] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] left-[0] w-[7%]"
                      alt="mail"
                    />
                  </Stack>
                  <Column className="items-center justify-start xl:ml-[112px] 2xl:ml-[126px] 3xl:ml-[151px] lg:ml-[89px] w-[57%]">
                    <Column className="bg-pink_900 items-center justify-start 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius20 shadow-bs3 w-[100%]">
                      <Row className="items-center justify-between w-[97%]">
                        <Column className="items-center w-[43%]">
                          <Text
                            className="font-bold text-white_A700 lg:tracking-ls1 2xl:tracking-ls2 xl:tracking-ls2 3xl:tracking-ls3 w-[auto]"
                            variant="body2"
                          >
                            Sign up
                          </Text>
                          <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                            <Input
                              className="placeholder:text-orange_50_99 GroupThirtySix"
                              wrapClassName="w-[100%]"
                              type="text"
                              name="GroupThirtySix"
                              placeholder="Full Name*"
                              shape="RoundedBorder17"
                            ></Input>
                            <SelectBox
                              className="font-extrabold xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-orange_50_99 w-[100%]"
                              placeholderClassName="text-orange_50_99"
                              name="GroupThirtyFour"
                              placeholder="University*"
                              isSearchable={false}
                              isMulti={false}
                              indicator={
                                <Img
                                  src="images/img_arrowdown.svg"
                                  className="lg:w-[8px] lg:h-[5px] lg:mr-[12px] xl:w-[10px] xl:h-[7px] xl:mr-[16px] 2xl:w-[12px] 2xl:h-[8px] 2xl:mr-[18px] 3xl:w-[14px] 3xl:h-[9px] 3xl:mr-[21px]"
                                  alt="arrow_down"
                                />
                              }
                              shape="RoundedBorder17"
                              variant="OutlineBlack90051"
                            ></SelectBox>
                            <SelectBox
                              className="font-extrabold xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-orange_50_99 w-[100%]"
                              placeholderClassName="text-orange_50_99"
                              name="GroupThirtyTwo"
                              placeholder="State*"
                              isSearchable={false}
                              isMulti={false}
                              indicator={
                                <Img
                                  src="images/img_arrowdown.svg"
                                  className="lg:w-[8px] lg:h-[5px] lg:mr-[12px] xl:w-[10px] xl:h-[7px] xl:mr-[16px] 2xl:w-[12px] 2xl:h-[8px] 2xl:mr-[18px] 3xl:w-[14px] 3xl:h-[9px] 3xl:mr-[21px]"
                                  alt="arrow_down"
                                />
                              }
                              shape="RoundedBorder17"
                              variant="OutlineBlack90051"
                            ></SelectBox>
                            <Input
                              className="placeholder:text-orange_50_99 GroupThirtySix"
                              wrapClassName="2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%] xl:mt-[12px]"
                              name="GroupThirty"
                              placeholder="Mail id*"
                              shape="RoundedBorder17"
                            ></Input>
                            <Input
                              className="placeholder:text-orange_50_99 GroupThirtySix"
                              wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%] xl:mt-[10px]"
                              type="number"
                              name="GroupTwentyNine"
                              placeholder="Mobile no.*"
                              shape="RoundedBorder17"
                            ></Input>
                            <Input
                              className="placeholder:text-orange_50_99 GroupThirtySix"
                              wrapClassName="2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%] xl:mt-[11px]"
                              type="password"
                              name="GroupTwentyEight"
                              placeholder="Password *"
                              shape="RoundedBorder17"
                            ></Input>
                            <Row className="items-start lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[77%]">
                              <Column className="bg-bluegray_100 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] items-center justify-start mb-[3px] px-[2px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]">
                                <div className="bg-bluegray_900 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                              </Column>
                              <Text
                                className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[2px] text-orange_50 w-[auto]"
                                variant="body8"
                              >
                                *Accepting all the Terms & Conditions.
                              </Text>
                            </Row>
                            <Text
                              className="common-pointer bg-orange_300 font-bold lg:ml-[33px] xl:ml-[41px] 2xl:ml-[47px] 3xl:ml-[56px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:px-[24px] xl:px-[30px] 2xl:px-[34px] 3xl:px-[40px] py-[3px] rounded-radius17 text-pink_901 w-[166px]"
                              variant="body3"
                              onClick={handleNavigate3}
                            >
                              Register
                            </Text>
                          </Column>
                        </Column>
                        <Column className="bg-orange_300 items-center lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius20 w-[52%]">
                          <Text
                            className="font-bold text-pink_900 lg:tracking-ls1 2xl:tracking-ls2 xl:tracking-ls2 3xl:tracking-ls3 w-[auto]"
                            variant="body2"
                          >
                            Sign in
                          </Text>
                          <Column className="items-center justify-start lg:mb-[105px] xl:mb-[131px] 2xl:mb-[148px] 3xl:mb-[177px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                            <Input
                              className="placeholder:text-orange_50_99 GroupThirtySix"
                              wrapClassName="w-[100%]"
                              name="GroupThirtyFive"
                              placeholder="Mail Id*"
                              shape="RoundedBorder17"
                              variant="OutlineBlack90051_1"
                            ></Input>
                            <Input
                              className="placeholder:text-orange_50_99 GroupThirtySix"
                              wrapClassName="2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%] xl:mt-[11px]"
                              type="password"
                              name="GroupThirtyThree"
                              placeholder="Password*"
                              shape="RoundedBorder17"
                              variant="OutlineBlack90051_1"
                            ></Input>
                            <Input
                              className="placeholder:text-orange_50_99 GroupThirtySix"
                              wrapClassName="2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%] xl:mt-[11px]"
                              type="number"
                              name="GroupThirtyOne"
                              placeholder="Mobile no.*"
                              shape="RoundedBorder17"
                              variant="OutlineBlack90051_1"
                            ></Input>
                            <Column className="items-center justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[40%]">
                              <Text
                                className="text-bluegray_900 w-[auto]"
                                variant="body7"
                              >
                                Forgot Password?
                              </Text>
                            </Column>
                            <Text
                              className="common-pointer bg-pink_900 font-bold lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:px-[24px] xl:px-[31px] 2xl:px-[35px] 3xl:px-[42px] py-[3px] rounded-radius17 text-orange_100 w-[166px]"
                              variant="body3"
                              onClick={handleNavigate2}
                            >
                              Submit
                            </Text>
                          </Column>
                        </Column>
                      </Row>
                    </Column>
                    <Text
                      className="font-semibold lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] text-bluegray_900 w-[auto]"
                      variant="body6"
                    >
                      <span className="text-bluegray_900 font-montserrat font-bold lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                        NOTE
                      </span>
                      <span className="text-bluegray_900 font-montserrat lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                        : Only{" "}
                      </span>
                      <span className="text-bluegray_900 font-montserrat font-bold lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                        ONE
                      </span>
                      <span className="text-bluegray_900 font-montserrat lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px]">
                        {" "}
                        Manager per University is allowed to SignUp
                      </span>
                    </Text>
                  </Column>
                </Row>
                <Footer className="bg-cyan_800 xl:mt-[115px] 2xl:mt-[130px] 3xl:mt-[156px] lg:mt-[92px] shadow-bs w-[100%]" />
              </Column>
            </Column>
          </Column>
          <Row className="items-center justify-center lg:mt-[450px] xl:mt-[563px] 2xl:mt-[633px] 3xl:mt-[760px] w-[30%]">
            <Text className="rowmusic" variant="body4">
              DANCE
            </Text>
            <Text
              className="lg:ml-[161px] xl:ml-[201px] 2xl:ml-[227px] 3xl:ml-[272px] rowmusic"
              variant="body4"
            >
              LITERARY
            </Text>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default SigninPage;
