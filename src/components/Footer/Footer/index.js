import React from "react";

import { Row, Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <Row className="items-center mx-[auto] lg:my-[17px] xl:my-[22px] 2xl:my-[25px] 3xl:my-[30px] w-[85%]">
          <Row className="items-center w-[20%]">
            <Img
              src="images/img_mail.svg"
              className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[12%]"
              alt="mail"
            />
            <Text className="rowmail" variant="body4">
              kriti.utsav@kiit.ac.in
            </Text>
          </Row>
          <Row className="items-center justify-center lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] w-[15%]">
            <Img
              src="images/img_call.svg"
              className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
              alt="call"
            />
            <Text className="rowmail" variant="body4">
              +91 9178358687
            </Text>
          </Row>
          <Row className="items-center lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] w-[55%]">
            <Img
              src="images/img_location.svg"
              className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
              alt="location"
            />
            <Text className="rowmail" variant="body4">
              Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar.
            </Text>
          </Row>
        </Row>
      </footer>
    </>
  );
};

export default Footer;
