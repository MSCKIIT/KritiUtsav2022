import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Img, Text, Button } from "components";

const Header = (props) => {
    const navigate = useNavigate();
    

  function handleNavigate1() {
     navigate("/");
  }

  function navsign() {
    navigate("/signin");
  }
  return (
    <>
      <header className={props.className}>
      <Row className="items-center lg:ml-[44px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] w-[82%]">
                    <Img
                      src="images/img_logoforweb1.png"
                      className="common-pointer lg:h-[47px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] w-[10%]"
                      onClick={handleNavigate1}
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
                        className="common-pointer font-bold lg:ml-[32px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center w-[29%]"
                        onClick={navsign}
                        shape="RoundedBorder23"
                        size="sm"
                      >
                        Sign Up/ Login
                      </Button>
                    </Row>
                  </Row>
      </header>
    </>
  );
};

export default Header;
