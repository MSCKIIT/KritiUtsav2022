import React from "react";

import { Column, Row, Img, Stack, Text } from "components";

const RegnLiveSoonPage = () => {
  return (
    <>
      <Column className="bg-bluegray_900 font-montserrat items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-between overflow-auto w-[100%]">
          <aside className="w-[17%]">
            <div className="">
              <Img
                src="images/img_border12.png"
                className="lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] w-[94%]"
                alt="borderTwelve"
              />
            </div>
          </aside>
          <Column className="items-center w-[55%]">
            <Row className="items-center justify-center w-[22%]">
              <Img
                src="images/img_kiitlogohd1.png"
                className="lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] w-[45%]"
                alt="KIITlogoHDOne"
              />
              <Img
                src="images/img_g94.svg"
                className="lg:h-[42px] xl:h-[53px] 2xl:h-[59px] 3xl:h-[71px] lg:ml-[26px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] lg:w-[41px] xl:w-[52px] 2xl:w-[58px] 3xl:w-[70px]"
                alt="g94"
              />
            </Row>
            <Stack className="lg:h-[303px] xl:h-[379px] 2xl:h-[427px] 3xl:h-[512px] lg:mt-[21px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[302px] xl:w-[378px] 2xl:w-[426px] 3xl:w-[511px]">
              <Img
                src="images/img_group29.png"
                className="absolute lg:h-[293px] xl:h-[366px] 2xl:h-[412px] 3xl:h-[494px] inset-[0] justify-center m-[auto] lg:w-[292px] xl:w-[365px] 2xl:w-[411px] 3xl:w-[493px]"
                alt="CIrcleOne"
              />
              <Img
                src="images/img_logoforweb1.png"
                className="absolute lg:h-[127px] xl:h-[159px] 2xl:h-[179px] 3xl:h-[215px] inset-[0] justify-center m-[auto] w-[68%]"
                alt="logoforwebOne"
              />
            </Stack>
            <Column className="items-center justify-start lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[80%]">
              <Text
                className="font-extrabold text-orange_100 w-[auto]"
                variant="body1"
              >
                36TH INTER UNIVERSITY EAST ZONE YOUTH FESTIVAL
              </Text>
              <Text
                className="font-extrabold lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] text-orange_100 lg:tracking-ls3 2xl:tracking-ls4 xl:tracking-ls4 3xl:tracking-ls5 w-[auto]"
                variant="body1"
              >
                23rd - 27th December 2022
              </Text>
            </Column>
            <Column className="items-center justify-start lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] w-[100%]">
              <Text
                className="italic my-[3px] text-orange_100 w-[auto]"
                as="h1"
                variant="h1"
              >
                REGISTRATIONS LIVE SOON!
              </Text>
            </Column>
          </Column>
          <Stack className="lg:h-[587px] xl:h-[734px] 2xl:h-[826px] 3xl:h-[991px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] w-[17%]">
            <Img
              src="images/img_border11_1080X307.png"
              className="absolute lg:h-[576px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] inset-[0] justify-center m-[auto] w-[94%]"
              alt="borderEleven"
            />
          </Stack>
        </Row>
      </Column>
    </>
  );
};

export default RegnLiveSoonPage;
