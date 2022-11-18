// import React from "react";

// import {
//   Column,
//   Row,
//   Img,
//   Text,
//   Button,
//   Stack,
//   SelectBox,
//   Input,
// } from "components";
// import Footer from "components/Footer/Footer";
// import { useNavigate } from "react-router-dom";

// const DashboardDancePage = () => {
//   const navigate = useNavigate();

//   function handleNavigate4() {
//     navigate("/");
//   }
//   function handleNavigate11() {
//     navigate("/dashboardlit");
//   }
//   function handleNavigate12() {
//     navigate("/dashboardmusic");
//   }
//   function handleNavigate13() {
//     navigate("/dashboardtheatre");
//   }

//   return (
//     <>
//       <Column className="bg-orange_51 font-montserrat items-center justify-end mx-[auto] lg:pt-[17px] xl:pt-[21px] 2xl:pt-[24px] 3xl:pt-[28px] w-[100%]">
//         <Column className="items-center justify-start w-[100%]">
//           <Row className="items-center justify-between w-[76%]">
//             <Img
//               src="images/img_logoforweb1.png"
//               className="common-pointer logoforwebTwo1"
//               onClick={handleNavigate4}
//               alt="logoforwebTwo"
//             />
//             <Row className="items-center justify-between w-[64%]">
//               <Text
//                 className="font-semibold text-bluegray_900 w-[auto]"
//                 variant="body3"
//               >
//                 About
//               </Text>
//               <Text
//                 className="font-semibold text-bluegray_900 w-[auto]"
//                 variant="body3"
//               >
//                 Events
//               </Text>
//               <Text
//                 className="font-semibold text-bluegray_900 w-[auto]"
//                 variant="body3"
//               >
//                 Downloads
//               </Text>
//               <Text
//                 className="font-semibold text-bluegray_900 w-[auto]"
//                 variant="body3"
//               >
//                 Contact
//               </Text>
//               <Button
//                 className="font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[21%]"
//                 shape="RoundedBorder23"
//                 size="sm"
//                 variant="FillBluegray900"
//               >
//                 Logout
//               </Button>
//             </Row>
//           </Row>
//           <Column className="items-center justify-start lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
//             <Stack className="lg:h-[1861px] xl:h-[2329px] 2xl:h-[2619px] 3xl:h-[3143px] w-[100%]">
//               <Img
//                 src="images/img_bghome2.png"
//                 className="bghomeTwo"
//                 alt="bghomeTwo"
//               />
//               <Column className="absolute bg-white_A700 inset-x-[2%] items-center justify-end lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius20 w-[96%]">
//                 <Column className="items-center justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[91%]">
//                   <Column className="justify-start w-[100%]">
//                     <Column className="justify-start 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] w-[72%]">
//                       <Row className="items-start w-[95%]">
//                         <Text
//                           className="font-bold text-bluegray_900 w-[auto]"
//                           as="h5"
//                           variant="h5"
//                         >
//                           Dashboard
//                         </Text>
//                         <Text className="State" variant="body5">
//                           State:
//                         </Text>
//                         <Text className="University" variant="body5">
//                           University:
//                         </Text>
//                       </Row>
//                       <Row className="items-start justify-between lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
//                         <Text className="ContingentInC" variant="body5">
//                           Contingent In-Charge I
//                         </Text>
//                         <Row className="bg-white_A700 items-center justify-center p-[2px] rounded-radius15 w-[19%]">
//                           <Img
//                             src="images/img_plus.svg"
//                             className="plus"
//                             alt="plus"
//                           />
//                           <Text className="rowplus" variant="body7">
//                             Add another
//                             <br />
//                             Contingent{" "}
//                           </Text>
//                         </Row>
//                         <Text className="language_One" variant="body5">
//                           Contingent In-Charge II
//                         </Text>
//                       </Row>
//                     </Column>
//                     <Row className="items-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[94%]">
//                       <Column className="justify-start lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[10%]">
//                         <Column className="justify-start xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] w-[87%]">
//                           <Text className="Name" variant="body6">
//                             Name:
//                           </Text>
//                           <Text className="MailId" variant="body6">
//                             Mail Id:
//                           </Text>
//                           <Text className="MailId" variant="body6">
//                             Mobile No.:
//                           </Text>
//                           <Text className="MailId" variant="body6">
//                             Gender:
//                           </Text>
//                           <Text className="Address" variant="body6">
//                             Address:
//                           </Text>
//                         </Column>
//                         <Img
//                           src="images/img_mail_12X30.svg"
//                           className="mail2"
//                           alt="mail"
//                         />
//                       </Column>
//                       <Column className="items-center justify-start 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[35%]">
//                         <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] rounded-radius5 w-[100%]"></div>
//                         <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius5 w-[100%]"></div>
//                         <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius5 w-[100%]"></div>
//                         <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius5 w-[100%]"></div>
//                         <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius5 w-[100%]"></div>
//                       </Column>
//                       <Column className="justify-start 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[74px] xl:ml-[93px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[9%]">
//                         <Text className="Name" variant="body6">
//                           Name:
//                         </Text>
//                         <Text className="MailId" variant="body6">
//                           Mail Id:
//                         </Text>
//                         <Text className="MailId" variant="body6">
//                           Mobile No.:
//                         </Text>
//                         <Text className="MailId" variant="body6">
//                           Gender:
//                         </Text>
//                         <Text className="Address" variant="body6">
//                           Address:
//                         </Text>
//                       </Column>
//                       <Column className="items-center justify-start 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[35%]">
//                         <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] rounded-radius5 w-[100%]"></div>
//                         <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius5 w-[100%]"></div>
//                         <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius5 w-[100%]"></div>
//                         <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius5 w-[100%]"></div>
//                         <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius5 w-[100%]"></div>
//                       </Column>
//                     </Row>
//                     <Column className="justify-start 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[99%]">
//                       <Text className="TravelDetails" variant="body5">
//                         Travel Details
//                       </Text>
//                       <Row className="items-center ml-[4px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[60%]">
//                         <Text
//                           className="font-bold text-bluegray_900 w-[auto]"
//                           variant="body5"
//                         >
//                           Arrival
//                         </Text>
//                         <Text className="Departure" variant="body5">
//                           Departure
//                         </Text>
//                       </Row>
//                       <Row className="items-center justify-end ml-[auto] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[46%]">
//                         <Text
//                           className="font-semibold text-bluegray_900 w-[auto]"
//                           variant="body6"
//                         >
//                           Date of Arrival:
//                         </Text>
//                         <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] rounded-radius5 w-[72%]"></div>
//                       </Row>
//                       <Row className="items-center lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[97%]">
//                         <Text
//                           className="font-semibold text-bluegray_900 w-[auto]"
//                           variant="body6"
//                         >
//                           Time of Arrival:
//                         </Text>
//                         <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] rounded-radius5 w-[34%]"></div>
//                         <Text className="TimeofArrival_One" variant="body6">
//                           Time of Arrival:
//                         </Text>
//                         <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] rounded-radius5 w-[34%]"></div>
//                       </Row>
//                       <Row className="items-center justify-between lg:ml-[36px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[92%]">
//                         <Row className="items-start justify-between w-[85%]">
//                           <Row className="items-center justify-between w-[19%]">
//                             <Text
//                               className="font-semibold text-bluegray_900 w-[auto]"
//                               variant="body6"
//                             >
//                               Mode:
//                             </Text>
//                             <Row className="items-center justify-between w-[49%]">
//                               <Text
//                                 className="font-semibold text-bluegray_900 w-[auto]"
//                                 variant="body5"
//                               >
//                                 Train
//                               </Text>
//                               <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] rounded-radius5 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"></div>
//                             </Row>
//                           </Row>
//                           <Row className="items-center justify-center w-[8%]">
//                             <Text
//                               className="font-semibold text-bluegray_900 w-[auto]"
//                               variant="body5"
//                             >
//                               Bus
//                             </Text>
//                             <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] rounded-radius5 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"></div>
//                           </Row>
//                           <Row className="items-center justify-center w-[11%]">
//                             <Text
//                               className="font-semibold text-bluegray_900 w-[auto]"
//                               variant="body5"
//                             >
//                               Flight
//                             </Text>
//                             <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] rounded-radius5 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"></div>
//                           </Row>
//                           <Text className="rowmode_one" variant="body6">
//                             Mode:
//                           </Text>
//                           <Row className="items-center justify-center w-[10%]">
//                             <Text
//                               className="font-semibold text-bluegray_900 w-[auto]"
//                               variant="body5"
//                             >
//                               Train
//                             </Text>
//                             <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] rounded-radius5 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"></div>
//                           </Row>
//                           <Row className="items-center justify-between w-[8%]">
//                             <Text
//                               className="font-semibold text-bluegray_900 w-[auto]"
//                               variant="body5"
//                             >
//                               Bus
//                             </Text>
//                             <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] rounded-radius5 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"></div>
//                           </Row>
//                         </Row>
//                         <Row className="items-center justify-between w-[9%]">
//                           <Text
//                             className="font-semibold text-bluegray_900 w-[auto]"
//                             variant="body5"
//                           >
//                             Flight
//                           </Text>
//                           <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] rounded-radius5 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"></div>
//                         </Row>
//                       </Row>
//                       <Text className="ParticipationD" variant="body1">
//                         Participation Details
//                       </Text>
//                       <Row className="items-start lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[92%]">
//                         <Button
//                           className="font-semibold lg:text-[24px] xl:text-[31px] 2xl:text-[35px] 3xl:text-[42px] text-center w-[18%]"
//                           shape="RoundedBorder10"
//                           variant="FillPink901"
//                         >
//                           Fine Arts
//                         </Button>
//                         <Button
//                           className="common-pointer font-semibold lg:ml-[51px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] lg:text-[24px] xl:text-[31px] 2xl:text-[35px] 3xl:text-[42px] text-center text-white_A700 w-[15%]"
//                           onClick={handleNavigate11}
//                           shape="RoundedBorder10"
//                           variant="FillYellow900"
//                         >
//                           Literary
//                         </Button>
//                         <Button
//                           className="common-pointer font-semibold lg:ml-[51px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] lg:text-[24px] xl:text-[31px] 2xl:text-[35px] 3xl:text-[42px] text-center text-white_A700 w-[12%]"
//                           onClick={handleNavigate12}
//                           shape="RoundedBorder10"
//                           variant="FillRed600"
//                         >
//                           Music
//                         </Button>
//                         <Stack className="3xl:h-[115px] lg:h-[68px] xl:h-[85px] 2xl:h-[96px] lg:ml-[51px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] w-[13%]">
//                           <Column className="absolute bg-cyan_800 items-center justify-start lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius10 top-[0] w-[100%]">
//                             <Text
//                               className="text-white_A700 w-[auto]"
//                               as="h4"
//                               variant="h4"
//                             >
//                               Dance
//                             </Text>
//                           </Column>
//                           <div className="absolute bg-cyan_800 bottom-[0] lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] w-[100%]"></div>
//                         </Stack>
//                         <Button
//                           className="common-pointer font-semibold lg:ml-[51px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] lg:text-[24px] xl:text-[31px] 2xl:text-[35px] 3xl:text-[42px] text-center text-white_A700 w-[15%]"
//                           onClick={handleNavigate13}
//                           shape="RoundedBorder10"
//                           variant="FillBluegray900"
//                         >
//                           Theatre
//                         </Button>
//                       </Row>
//                       <Column className="bg-orange_50 border-bw3 border-cyan_800 border-solid items-center justify-start pl-[1px] pt-[1px] rounded-radius20 w-[100%]">
//                         <Column className="items-center justify-start lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[100%]">
//                           <Column className="justify-start w-[96%]">
//                             <Row className="items-start justify-between w-[100%]">
//                               <SelectBox
//                                 className="font-semibold mt-[2px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-cyan_800_b2 w-[19%]"
//                                 placeholderClassName="text-cyan_800_b2"
//                                 name="Group199"
//                                 placeholder="Select Event"
//                                 isSearchable={false}
//                                 isMulti={false}
//                                 indicator={
//                                   <Img
//                                     src="images/img_arrowdown_orange_100.svg"
//                                     className="mr-[0] rounded-tl-[0] rounded-tr-[5px] rounded-bl-[0] rounded-br-[5px] lg:w-[11px] lg:h-[6px] lg:pl-[5px] lg:pr-[7px] xl:w-[14px] xl:h-[8px] xl:pl-[7px] xl:pr-[9px] 2xl:w-[16px] 2xl:h-[9px] 2xl:pl-[8px] 2xl:pr-[11px] 3xl:w-[19px] 3xl:h-[10px] 3xl:pl-[9px] 3xl:pr-[13px]"
//                                     alt="arrow_down"
//                                   />
//                                 }
//                                 variant="OutlineCyan800"
//                               ></SelectBox>
//                               <Input
//                                 className="font-semibold p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-cyan_800_b2 text-cyan_800_b2 w-[100%]"
//                                 wrapClassName="mt-[2px] w-[16%]"
//                                 type="text"
//                                 name="Group197"
//                                 placeholder="Enter Name"
//                                 shape="RoundedBorder5"
//                                 variant="OutlineCyan800"
//                               ></Input>
//                               <SelectBox
//                                 className="font-semibold mt-[4px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-cyan_800_b2 w-[10%]"
//                                 placeholderClassName="text-cyan_800_b2"
//                                 name="FrameFiftyThree"
//                                 placeholder="Gender"
//                                 isSearchable={false}
//                                 isMulti={false}
//                                 indicator={
//                                   <Img
//                                     src="images/img_arrowdown_orange_100.svg"
//                                     className="mr-[0] rounded-tl-[0] rounded-tr-[5px] rounded-bl-[0] rounded-br-[5px] lg:w-[11px] lg:h-[6px] lg:px-[6px] xl:w-[14px] xl:h-[8px] xl:px-[8px] 2xl:w-[16px] 2xl:h-[9px] 2xl:px-[9px] 3xl:w-[19px] 3xl:h-[10px] 3xl:px-[10px]"
//                                     alt="arrow_down"
//                                   />
//                                 }
//                                 variant="OutlineCyan800"
//                               ></SelectBox>
//                               <Input
//                                 className="font-semibold p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-cyan_800_b2 text-cyan_800_b2 w-[100%]"
//                                 wrapClassName="flex mt-[4px] w-[13%]"
//                                 name="FrameFiftySix"
//                                 placeholder="Enter DOB"
//                                 suffix={
//                                   <Img
//                                     src="images/img_bag.svg"
//                                     className="border-cyan_800 border-2 border-solid bg-orange_100 lg:w-[35px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px] rounded-radius5 my-[auto] mx-[1px]"
//                                     alt="bag"
//                                   />
//                                 }
//                                 shape="RoundedBorder5"
//                                 variant="OutlineCyan800_1"
//                               ></Input>
//                               <SelectBox
//                                 className="font-semibold mt-[2px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-cyan_800_b2 w-[19%]"
//                                 placeholderClassName="text-cyan_800_b2"
//                                 name="GroupFiftyTwo"
//                                 placeholder="Mode of Participation"
//                                 isSearchable={false}
//                                 isMulti={false}
//                                 indicator={
//                                   <Img
//                                     src="images/img_arrowdown_orange_100.svg"
//                                     className="mr-[0] rounded-tl-[0] rounded-tr-[5px] rounded-bl-[0] rounded-br-[5px] lg:w-[12px] lg:h-[6px] lg:pl-[6px] lg:pr-[7px] xl:w-[15px] xl:h-[8px] xl:pl-[8px] xl:pr-[9px] 2xl:w-[17px] 2xl:h-[9px] 2xl:pl-[9px] 2xl:pr-[11px] 3xl:w-[20px] 3xl:h-[10px] 3xl:pl-[10px] 3xl:pr-[13px]"
//                                     alt="arrow_down"
//                                   />
//                                 }
//                                 variant="OutlineCyan800"
//                               ></SelectBox>
//                               <Button
//                                 className="flex items-center justify-center text-center w-[14%]"
//                                 leftIcon={
//                                   <Img
//                                     src="images/img_upload_18X18.svg"
//                                     className="text-center lg:w-[12px] lg:h-[13px] lg:mr-[9px] xl:w-[16px] xl:h-[17px] xl:mr-[12px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[14px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mr-[16px]"
//                                     alt="upload"
//                                   />
//                                 }
//                                 shape="RoundedBorder10"
//                                 variant="FillCyan800"
//                               >
//                                 <div className="bg-transparent font-semibold lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-orange_51">
//                                   Upload Photo
//                                 </div>
//                               </Button>
//                               <Img
//                                 src="images/img_approval.png"
//                                 className="Approval"
//                                 alt="Approval"
//                               />
//                             </Row>
//                             <Row className="items-start mt-[2px] w-[79%]">
//                               <Column className="bg-cyan_800 items-center justify-start xl:pb-[12px] 2xl:pb-[14px] 3xl:pb-[16px] lg:pb-[9px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] shadow-bs4 w-[24%]">
//                                 <Column className="border border-orange_300 border-solid items-center justify-start lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
//                                   <Text
//                                     className="columnclassicalsolo1"
//                                     variant="body7"
//                                   >
//                                     Classical Solo(Hindustani or Karnataki)
//                                   </Text>
//                                 </Column>
//                                 <Column className="border border-orange_300 border-solid items-center justify-start lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
//                                   <Text
//                                     className="columnclassicalsolo1"
//                                     variant="body7"
//                                   >
//                                     Classical Instrumental Solo(Percussion)
//                                   </Text>
//                                 </Column>
//                                 <Column className="border border-orange_300 border-solid items-center justify-start lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
//                                   <Text
//                                     className="columnclassicalsolo1"
//                                     variant="body7"
//                                   >
//                                     Classical Instrumental Solo(Non-Percussion)
//                                   </Text>
//                                 </Column>
//                                 <Input
//                                   className="placeholder:text-orange_51 FrameTwentyFive1"
//                                   wrapClassName="w-[100%]"
//                                   name="FrameTwentyFive"
//                                   placeholder="Light Vocals (Indian)"
//                                   variant="OutlineOrange300"
//                                 ></Input>
//                               </Column>
//                               <Column className="bg-cyan_800 items-center justify-start lg:ml-[348px] xl:ml-[435px] 2xl:ml-[490px] 3xl:ml-[588px] xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] shadow-bs4 w-[22%]">
//                                 <Text
//                                   className="border border-orange_300 border-solid font-medium 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:pr-[24px] xl:pr-[31px] 2xl:pr-[35px] 3xl:pr-[42px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-orange_51 w-[auto]"
//                                   variant="body7"
//                                 >
//                                   Participant
//                                 </Text>
//                                 <Text
//                                   className="border border-orange_300 border-solid font-medium 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:pr-[16px] xl:pr-[20px] 2xl:pr-[23px] 3xl:pr-[27px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-orange_51 w-[auto]"
//                                   variant="body7"
//                                 >
//                                   Student Accompanist
//                                 </Text>
//                                 <Column className="border border-orange_300 border-solid items-end justify-start 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[100%]">
//                                   <Text
//                                     className="columnprofessionalo1"
//                                     variant="body7"
//                                   >
//                                     Professional (Outside) Accompanist
//                                   </Text>
//                                 </Column>
//                               </Column>
//                             </Row>
//                           </Column>
//                           <Column className="bg-cyan_800 justify-end xl:mt-[120px] 2xl:mt-[135px] 3xl:mt-[162px] lg:mt-[96px] lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
//                             <Button
//                               className="2xl:ml-[11px] 3xl:ml-[13px] flex items-center justify-center lg:ml-[7px] mt-[1px] text-center w-[16%] xl:ml-[9px]"
//                               leftIcon={
//                                 <Img
//                                   src="images/img_plus_1.svg"
//                                   className="text-center lg:w-[12px] lg:h-[13px] lg:mr-[6px] xl:w-[16px] xl:h-[17px] xl:mr-[8px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[9px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mr-[10px]"
//                                   alt="plus"
//                                 />
//                               }
//                               shape="RoundedBorder5"
//                               size="sm"
//                             >
//                               <div className="bg-transparent font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-cyan_800">
//                                 Add Participants
//                               </div>
//                             </Button>
//                           </Column>
//                         </Column>
//                       </Column>
//                       <Row className="items-end ml-[1px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[59%]">
//                         <Column className="justify-start w-[49%]">
//                           <Row className="items-center rounded-radius5 w-[61%]">
//                             <Text
//                               className="font-semibold text-bluegray_900 w-[auto]"
//                               variant="body6"
//                             >
//                               Contingent Size:
//                             </Text>
//                             <Button
//                               className="font-semibold lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center lg:w-[24px] xl:w-[31px] 2xl:w-[35px] 3xl:w-[42px]"
//                               shape="RoundedBorder5"
//                               size="sm"
//                               variant="OutlineBluegray900"
//                             >
//                               01
//                             </Button>
//                           </Row>
//                           <Text className="Uploads" variant="body1">
//                             Uploads
//                           </Text>
//                           <Text className="UploadEligibil" variant="body6">
//                             Upload Eligibility Certificates of All Participants
//                             and Accompanists
//                           </Text>
//                           <Text className="NOTESubmital" variant="body8">
//                             <span className="text-pink_900_cc font-montserrat font-extrabold lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
//                               NOTE:
//                             </span>
//                             <span className="text-pink_900_cc font-montserrat font-semibold lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
//                               {" "}
//                               Submit all the documents in{" "}
//                             </span>
//                             <span className="text-pink_900_cc font-montserrat font-bold lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
//                               ONE Zip or PDF File.
//                             </span>
//                           </Text>
//                         </Column>
//                         <Button
//                           className="2xl:ml-[163px] 2xl:mt-[202px] 3xl:ml-[195px] 3xl:mt-[242px] flex items-center justify-center lg:ml-[115px] lg:mt-[143px] mb-[3px] text-center w-[28%] xl:ml-[145px] xl:mt-[179px]"
//                           leftIcon={
//                             <Img
//                               src="images/img_upload.svg"
//                               className="text-center lg:w-[12px] lg:h-[13px] lg:mr-[9px] xl:w-[16px] xl:h-[17px] xl:mr-[12px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[14px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mr-[16px]"
//                               alt="upload"
//                             />
//                           }
//                           shape="RoundedBorder10"
//                           size="lg"
//                         >
//                           <div className="bg-transparent font-semibold lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900">
//                             Upload Zip/PDF
//                           </div>
//                         </Button>
//                       </Row>
//                       <Row className="items-center ml-[1px] 2xl:mt-[107px] 3xl:mt-[128px] lg:mt-[76px] xl:mt-[95px] w-[58%]">
//                         <Text
//                           className="font-bold text-bluegray_900 w-[auto]"
//                           variant="body5"
//                         >
//                           Total Fee Amount to be Paid (in Rs.):
//                         </Text>
//                         <Text className="ContingentSiz" variant="body5">
//                           (Contingent Size X 2000) Only
//                         </Text>
//                       </Row>
//                       <Text className="ModeofPayment" variant="body1">
//                         Mode of Payment
//                       </Text>
//                       <Text className="OnlyNEFTRTGS" variant="body6">
//                         Only NEFT/RTGS is accceptable.
//                       </Text>
//                       <Text className="description1" variant="body3">
//                         <span className="text-black_900 font-montserrat font-semibold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]">
//                           A/C Name:
//                         </span>
//                         <span className="text-black_900 font-montserrat font-medium lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]">
//                           {" "}
//                           KIIT STUDENT ACTIVITY CENTER
//                           <br />
//                         </span>
//                         <span className="text-black_900 font-montserrat font-semibold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]">
//                           A/C Number:
//                         </span>
//                         <span className="text-black_900 font-montserrat lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]">
//                           {" "}
//                         </span>
//                         <span className="text-black_900 font-montserrat font-medium lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]">
//                           50258662673
//                           <br />
//                         </span>
//                         <span className="text-black_900 font-montserrat font-semibold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]">
//                           Bank/Branch:
//                         </span>
//                         <span className="text-black_900 font-montserrat lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]">
//                           {" "}
//                         </span>
//                         <span className="text-black_900 font-montserrat font-medium lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]">
//                           Indian Bank, KIIT BRANCH
//                           <br />
//                         </span>
//                         <span className="text-black_900 font-montserrat font-semibold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]">
//                           IFSC Code:
//                         </span>
//                         <span className="text-black_900 font-montserrat lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]">
//                           {" "}
//                         </span>
//                         <span className="text-black_900 font-montserrat font-medium lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]">
//                           IDIB000K717
//                         </span>
//                         <span className="text-black_900 font-montserrat lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]">
//                           {" "}
//                           <br />
//                         </span>
//                         <span className="text-black_900 font-montserrat font-semibold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]">
//                           Address:
//                         </span>
//                         <span className="text-black_900 font-montserrat lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]">
//                           {" "}
//                         </span>
//                         <span className="text-black_900 font-montserrat font-medium lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]">
//                           Koel Campus, KIIT University, Patia, Bhubaneswar-
//                           751024
//                         </span>
//                       </Text>
//                       <Text className="PaymentConfirm" variant="body1">
//                         Payment Confirmation
//                       </Text>
//                       <Row className="items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[84%]">
//                         <Row className="items-center justify-evenly rounded-radius5 w-[59%]">
//                           <Text
//                             className="font-semibold text-bluegray_900 w-[auto]"
//                             variant="body6"
//                           >
//                             UTR/ Transaction no.:
//                           </Text>
//                           <Input
//                             className="placeholder:text-bluegray_900_b2 Group156"
//                             wrapClassName="w-[66%]"
//                             name="Group205"
//                             placeholder="Enter here"
//                             shape="RoundedBorder5"
//                           ></Input>
//                         </Row>
//                         <Button
//                           className="2xl:ml-[74px] 3xl:ml-[88px] flex items-center justify-center lg:ml-[52px] text-center w-[33%] xl:ml-[65px]"
//                           leftIcon={
//                             <Img
//                               src="images/img_upload.svg"
//                               className="text-center lg:w-[12px] lg:h-[13px] lg:mr-[9px] xl:w-[16px] xl:h-[17px] xl:mr-[12px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[14px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mr-[16px]"
//                               alt="upload"
//                             />
//                           }
//                           shape="RoundedBorder10"
//                           size="lg"
//                         >
//                           <div className="bg-transparent font-semibold lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900">
//                             Upload Scanned Copy of the Slip
//                           </div>
//                         </Button>
//                       </Row>
//                       <Row className="items-center justify-end ml-[auto] lg:mt-[137px] xl:mt-[171px] 2xl:mt-[193px] 3xl:mt-[231px] w-[48%]">
//                         <Button
//                           className="font-bold lg:text-[18px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-center w-[43%]"
//                           shape="RoundedBorder5"
//                           size="lg"
//                           variant="FillIndigo500b2"
//                         >
//                           Save Form
//                         </Button>
//                         <Button
//                           className="font-bold lg:ml-[30px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:text-[18px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-center text-orange_51 w-[49%]"
//                           shape="RoundedBorder5"
//                           size="lg"
//                           variant="FillCyan800"
//                         >
//                           Submit Form
//                         </Button>
//                       </Row>
//                     </Column>
//                   </Column>
//                 </Column>
//               </Column>
//             </Stack>
//             <Footer className="bg-cyan_800 lg:mt-[52px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] shadow-bs w-[100%]" />
//           </Column>
//         </Column>
//       </Column>
//     </>
//   );
// };

// export default DashboardDancePage;

import React from "react";
import { useState } from "react";
import Header from "components/Header";
import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Stack,
  SelectBox,
  Input,
} from "components";
import Footer from "components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  function navmusic() {
    navigate("/dashboardmusic");
  }
  function navdace() {
    navigate("/dashboarddance");
  }
  function navtheatre() {
    navigate("/dashboardtheatre");
  }
  function navlit() {
    navigate("/dashboardlit");
  }
  function navarts() {
    navigate("/dashboard");
  }

  function handleNavigate() {
    navigate("/");
  }

  return (
    <>
      <Column className="bg-orange_51 font-montserrat items-center justify-end mx-[auto] lg:pt-[17px] xl:pt-[21px] 2xl:pt-[24px] 3xl:pt-[28px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Row className="items-center justify-between w-[76%]">
            <Img
              src="images/img_logoforweb1.png"
              className="common-pointer lg:h-[47px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] w-[9%]"
              onClick={handleNavigate}
              alt="logoforwebTwo"
            />
            <Row className="items-center justify-between w-[64%]">
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
                className="font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center w-[22%]"
                shape="RoundedBorder23"
                size="sm"
              >
                Signout
              </Button>
            </Row>
          </Row>
          <Column className="items-center justify-start lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
            <Stack className="lg:h-[1861px] xl:h-[2329px] 2xl:h-[2619px] 3xl:h-[3143px] w-[100%]">
              <Img
                src="images/img_bghome2.png"
                className="absolute 3xl:h-[1081px] lg:h-[640px] xl:h-[801px] 2xl:h-[901px] top-[30%] w-[100%]"
                alt="bghomeTwo"
              />
              <Column className="absolute bg-white_A700 inset-x-[2%] items-center justify-end lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius20 w-[96%]">
                <Column className="items-center justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[91%]">
                  <Column className="justify-start w-[100%]">
                    <Column className="justify-start 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] w-[72%]">
                      <Row className="items-start w-[95%]">
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          variant="body1"
                        >
                          Dashboard
                        </Text>
                        <Text
                          className="font-bold xl:ml-[123px] 2xl:ml-[139px] 3xl:ml-[166px] lg:ml-[98px] mt-[4px] text-bluegray_900 w-[auto]"
                          variant="body4"
                        >
                          State:
                        </Text>
                        <Text
                          className="font-bold lg:ml-[248px] xl:ml-[310px] 2xl:ml-[349px] 3xl:ml-[419px] mt-[4px] text-bluegray_900 w-[auto]"
                          variant="body4"
                        >
                          University:
                        </Text>
                      </Row>
                      <Row className="items-start justify-between lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                        <Text
                          className="font-extrabold lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-bluegray_900 w-[auto]"
                          variant="body4"
                        >
                          Contingent In-Charge I
                        </Text>
                        <Row className="bg-white_A700 items-center justify-center p-[2px] rounded-radius15 w-[19%]">
                          <Img
                            src="images/img_plus.svg"
                            className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                            alt="plus"
                          />
                          <Text
                            className="font-semibold leading-[normal] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] lg:mr-[12px] xl:mr-[15px] 2xl:mr-[17px] 3xl:mr-[20px] text-orange_50 w-[62%]"
                            variant="body6"
                          >
                            Add another
                            <br />
                            Contingent{" "}
                          </Text>
                        </Row>
                        <Text
                          className="font-extrabold 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] text-bluegray_900 w-[auto]"
                          variant="body4"
                        >
                          Contingent In-Charge II
                        </Text>
                      </Row>
                    </Column>
                    <Row className="items-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[94%]">
                      <Column className="justify-start lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[10%]">
                        <Column className="justify-start xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] w-[87%]">
                          <Text
                            className="font-semibold ml-[1px] text-bluegray_900 w-[auto]"
                            variant="body5"
                          >
                            Name:
                          </Text>
                          <Text className="MailId" variant="body5">
                            Mail Id:
                          </Text>
                          <Text className="MailId" variant="body5">
                            Mobile No.:
                          </Text>
                          <Text className="MailId" variant="body5">
                            Gender:
                          </Text>
                          <Text
                            className="font-semibold lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] text-bluegray_900 w-[auto]"
                            variant="body5"
                          >
                            Address:
                          </Text>
                        </Column>
                        <Img
                          src="images/img_mail_12X30.svg"
                          className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] mt-[3px] w-[25%]"
                          alt="mail"
                        />
                      </Column>
                      <Column className="items-center justify-start 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[35%]">
                      <Input
                            className="font-semibold p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_900_b2 text-bluegray_900_b2 w-[100%]"
                            wrapClassName="w-[100%]"
                            name="GroupTwentyFive"
                            placeholder="Enter here"
                            shape="RoundedBorder5"
                            size="sm"
                            variant="OutlineBluegray900"
                        ></Input>
                        <div></div>
                        <Input
                            className="font-semibold p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_900_b2 text-bluegray_900_b2 w-[100%]"
                            wrapClassName="w-[100%]"
                            name="GroupTwentyFive"
                            placeholder="Enter here"
                            shape="RoundedBorder5"
                            size="sm"
                            variant="OutlineBluegray900"
                        ></Input>
                        <div></div>
                        <Input
                            className="font-semibold p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_900_b2 text-bluegray_900_b2 w-[100%]"
                            wrapClassName="w-[100%]"
                            name="GroupTwentyFive"
                            placeholder="Enter here"
                            shape="RoundedBorder5"
                            size="sm"
                            variant="OutlineBluegray900"
                        ></Input>
                        <div></div>
                        <Input
                            className="font-semibold p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_900_b2 text-bluegray_900_b2 w-[100%]"
                            wrapClassName="w-[100%]"
                            name="GroupTwentyFive"
                            placeholder="Enter here"
                            shape="RoundedBorder5"
                            size="sm"
                            variant="OutlineBluegray900"
                        ></Input>
                        <div></div>
                        <Input
                            className="font-semibold p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_900_b2 text-bluegray_900_b2 w-[100%]"
                            wrapClassName="w-[100%]"
                            name="GroupTwentyFive"
                            placeholder="Enter here"
                            shape="RoundedBorder5"
                            size="sm"
                            variant="OutlineBluegray900"
                        ></Input>
                        {/* <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] rounded-radius5 w-[100%]"></div>
                        <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius5 w-[100%]"></div>
                        <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius5 w-[100%]"></div>
                        <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius5 w-[100%]"></div>
                        <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius5 w-[100%]"></div> */}
                      </Column>
                      <Column className="justify-start 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[74px] xl:ml-[93px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[9%]">
                        <Text
                          className="font-semibold ml-[1px] text-bluegray_900 w-[auto]"
                          variant="body5"
                        >
                          Name:
                        </Text>
                        <Text className="MailId" variant="body5">
                          Mail Id:
                        </Text>
                        <Text className="MailId" variant="body5">
                          Mobile No.:
                        </Text>
                        <Text className="MailId" variant="body5">
                          Gender:
                        </Text>
                        <Text
                          className="font-semibold lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] text-bluegray_900 w-[auto]"
                          variant="body5"
                        >
                          Address:
                        </Text>
                      </Column>
                      <Column className="items-center justify-start 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[35%]">
                      <Input
                            className="font-semibold p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_900_b2 text-bluegray_900_b2 w-[100%]"
                            wrapClassName="w-[100%]"
                            name="GroupTwentyFive"
                            placeholder="Enter here"
                            shape="RoundedBorder5"
                            size="sm"
                            variant="OutlineBluegray900"
                        ></Input>
                        <div></div>
                        <Input
                            className="font-semibold p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_900_b2 text-bluegray_900_b2 w-[100%]"
                            wrapClassName="w-[100%]"
                            name="GroupTwentyFive"
                            placeholder="Enter here"
                            shape="RoundedBorder5"
                            size="sm"
                            variant="OutlineBluegray900"
                        ></Input>
                        <div></div>
                        <Input
                            className="font-semibold p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_900_b2 text-bluegray_900_b2 w-[100%]"
                            wrapClassName="w-[100%]"
                            name="GroupTwentyFive"
                            placeholder="Enter here"
                            shape="RoundedBorder5"
                            size="sm"
                            variant="OutlineBluegray900"
                        ></Input>
                        <div></div>
                        <Input
                            className="font-semibold p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_900_b2 text-bluegray_900_b2 w-[100%]"
                            wrapClassName="w-[100%]"
                            name="GroupTwentyFive"
                            placeholder="Enter here"
                            shape="RoundedBorder5"
                            size="sm"
                            variant="OutlineBluegray900"
                        ></Input>
                        <div></div>
                        <Input
                            className="font-semibold p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_900_b2 text-bluegray_900_b2 w-[100%]"
                            wrapClassName="w-[100%]"
                            name="GroupTwentyFive"
                            placeholder="Enter here"
                            shape="RoundedBorder5"
                            size="sm"
                            variant="OutlineBluegray900"
                        ></Input>

                        {/* <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] rounded-radius5 w-[100%]"></div>
                        <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius5 w-[100%]"></div>
                        <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius5 w-[100%]"></div>
                        <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius5 w-[100%]"></div>
                        <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius5 w-[100%]"></div> */}
                      </Column>
                    </Row>
                    <Column className="justify-start 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[99%]">
                      <Text
                        className="font-extrabold ml-[1px] text-bluegray_900 w-[auto]"
                        variant="body4"
                      >
                        Travel Details
                      </Text>
                      <Row className="items-center ml-[4px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[60%]">
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          variant="body4"
                        >
                          Arrival
                        </Text>
                        <Text
                          className="font-bold lg:ml-[388px] xl:ml-[485px] 2xl:ml-[546px] 3xl:ml-[655px] text-bluegray_900 w-[auto]"
                          variant="body4"
                        >
                          Departure
                        </Text>
                      </Row>
                      <Row className="items-center justify-end ml-[470px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[46%]">
                        <Text
                          className="font-semibold text-bluegray_900 w-[auto]"
                          variant="body5"
                        >
                          Date of Departure:
                        </Text>
                        <Input
                            className="font-semibold p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_900_b2 text-bluegray_900_b2 w-[100%]"
                            wrapClassName="w-[40%]"
                            name="GroupTwentyFive"
                            placeholder="Enter here"
                            shape="RoundedBorder5"
                            size="sm"
                            variant="OutlineBluegray900"
                        ></Input>
                        {/* <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] rounded-radius5 w-[72%]"></div> */}
                      </Row>
                      <Row className="items-center lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[97%]">
                        <Text
                          className="font-semibold text-bluegray_900 w-[auto]"
                          variant="body5"
                        >
                          Time of Arrival:
                        </Text>
                        <Input
                            className="font-semibold p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_900_b2 text-bluegray_900_b2 w-[100%]"
                            wrapClassName="w-[40%]"
                            name="GroupTwentyFive"
                            placeholder="Enter here"
                            shape="RoundedBorder5"
                            size="sm"
                            variant="OutlineBluegray900"
                        ></Input>
                        {/* <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] rounded-radius5 w-[34%]"></div> */}
                        <Text
                          className="font-semibold lg:ml-[44px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] text-bluegray_900 w-[auto]"
                          variant="body5"
                        >
                          Time of Departure:
                        </Text>
                        <Input
                            className="font-semibold p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_900_b2 text-bluegray_900_b2 w-[100%]"
                            wrapClassName="w-[40%]"
                            name="GroupTwentyFive"
                            placeholder="Enter here"
                            shape="RoundedBorder5"
                            size="sm"
                            variant="OutlineBluegray900"
                        ></Input>
                        {/* <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] rounded-radius5 w-[34%]"></div> */}
                      </Row>
                      <Row className="items-center justify-between lg:ml-[36px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[92%]">
                        <Row className="items-start justify-between w-[85%]">
                          <Row className="items-center justify-between w-[19%]">
                            <Text
                              className="font-semibold text-bluegray_900 w-[auto]"
                              variant="body5"
                            >
                              Mode:
                            </Text>
                            <Row className = "items-center justify-between w-[49%]">
                            <div className="mode">
                            <Text
                                className="font-semibold text-bluegray_900 w-[1%]"
                                variant="body4"
                              >
                                Train
                            </Text>
                            <input
                            className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] rounded-radius5 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] "
                            type="checkbox"
                            wrapClassName="w-[100%]"
                            name="train"
                            shape="RoundedBorder5"
                            size="sm"
                            variant="OutlineBluegray900"
                              checked={isChecked}
                              onChange={handleOnChange}
                            />
                          </div>
                            </Row>
                          </Row>
                          <Row className="items-center justify-center w-[8%]">
                          <div className="mode">
                          <Text
                                className="font-semibold text-bluegray_900 justify-center w-[auto]"
                                variant="body4"
                              >
                                Bus
                              </Text>
                            <input
                            className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] rounded-radius5 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] "
                            type="checkbox"
                            wrapClassName="w-[100%]"
                            name="train"
                            shape="RoundedBorder5"
                            size="sm"
                            variant="OutlineBluegray900"
                              checked={isChecked}
                              onChange={handleOnChange}
                            />
                          </div>
                            
                          </Row>
                          <Row className="items-center justify-center w-[11%]">
                          <div className="mode">
                            <Text
                                className="font-semibold text-bluegray_900 w-[1%]"
                                variant="body4"
                              >
                                Flight
                            </Text>
                            <input
                            className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] rounded-radius5 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                            type="checkbox"
                            wrapClassName="w-[100%]"
                            name="train"
                            shape="RoundedBorder5"
                            size="sm"
                            variant="OutlineBluegray900"
                              checked={isChecked}
                              onChange={handleOnChange}
                            />
                          </div>
                          </Row>
                          <Text
                            className="font-semibold mt-[3px] text-bluegray_900 w-[auto]"
                            variant="body5"
                          >
                            Mode:
                          </Text>
                          <Row className="items-center justify-center w-[10%]">
                            <Text
                              className="font-semibold text-bluegray_900 w-[auto]"
                              variant="body4"
                            >
                              Train
                            </Text>
                            <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] rounded-radius5 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"></div>
                          </Row>
                          <Row className="items-center justify-between w-[8%]">
                            <Text
                              className="font-semibold text-bluegray_900 w-[auto]"
                              variant="body4"
                            >
                              Bus
                            </Text>
                            <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] rounded-radius5 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"></div>
                          </Row>
                        </Row>
                        <Row className="items-center justify-between w-[9%]">
                          <Text
                            className="font-semibold text-bluegray_900 w-[auto]"
                            variant="body4"
                          >
                            Flight
                          </Text>
                          <div className="bg-orange_300_6b border-2 border-bluegray_900 border-solid lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] rounded-radius5 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"></div>
                        </Row>
                      </Row>
                      <Text
                        className="font-extrabold 2xl:mt-[104px] 3xl:mt-[124px] lg:mt-[73px] xl:mt-[92px] text-bluegray_900 w-[auto]"
                        variant="body2"
                      >
                        Participation Details
                      </Text>
                      <Row className="items-start lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[92%]">
                        <Button
                          className="font-semibold lg:text-[24px] xl:text-[31px] 2xl:text-[35px] 3xl:text-[42px] text-center w-[18%]"
                          shape="RoundedBorder10"
                          variant="h5"
                          onClick={navarts}
                        >
                          Fine Arts
                        </Button>
                      {/* <Row className="items-start lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[92%]">
                        <Stack className="3xl:h-[115px] lg:h-[68px] xl:h-[85px] 2xl:h-[96px] w-[18%]">
                          <Column className="absolute bg-pink_901 items-center justify-start lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius10 top-[0] w-[100%]">
                            <Text
                              className="text-white_A700 w-[auto]"
                              as="h5"
                              variant="h5"
                              
                            >
                              Fine Arts
                            </Text>
                          </Column>
                          <div className="absolute bg-pink_902 bottom-[0] lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] w-[100%]"></div>
                        </Stack> */}
                        <Button
                          className="font-semibold lg:ml-[51px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] lg:text-[24px] xl:text-[31px] 2xl:text-[35px] 3xl:text-[42px] text-center w-[15%]"
                          shape="RoundedBorder10"
                          variant="FillYellow900"
                          onClick={navlit}
                        >
                          Literary
                        </Button>
                        <Button
                          className="font-semibold lg:ml-[51px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] lg:text-[24px] xl:text-[31px] 2xl:text-[35px] 3xl:text-[42px] text-center w-[12%]"
                          shape="RoundedBorder10"
                          variant="FillRed600"
                          onClick={navmusic}
                        >
                          Music
                        </Button>
                        <Stack className="3xl:h-[115px] lg:h-[68px] xl:h-[85px] 2xl:h-[96px] lg:ml-[51px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] w-[13%]">
                           <Column className="absolute bg-cyan_800 items-center justify-start lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius10 top-[0] w-[100%]">
                             <Text
                               className="text-white_A700 w-[auto]"
                               as="h4"
                               variant="h4"
                             >
                               Dance
                             </Text>
                           </Column>
                           <div className="absolute bg-cyan_800 bottom-[0] lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] w-[100%]"></div>
                      </Stack>
                      <Button className="font-semibold lg:ml-[51px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] lg:text-[24px] xl:text-[31px] 2xl:text-[35px] 3xl:text-[42px] text-center w-[15%]"
                          shape="RoundedBorder10"
                          onClick={navtheatre}
                        >
                          Theatre
                        </Button>
                      </Row>
                      <Column className="bg-orange_50 border-bw3 border-pink_900 border-solid items-center justify-start pl-[1px] pt-[1px] rounded-radius20 w-[100%]">
                        <Column className="items-center justify-start lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[100%]">
                          <Column className="justify-start w-[96%]">
                            <Row className="items-start justify-between w-[100%]">
                              <SelectBox
                                className="font-semibold mt-[2px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900_b2 w-[19%]"
                                placeholderClassName="text-bluegray_900_b2"
                                name="GroupNineteen"
                                placeholder="Select Event"
                                isSearchable={false}
                                isMulti={false}
                                indicator={
                                  <Img
                                    src="images/img_arrowdown_orange_100.svg"
                                    className="mr-[0] rounded-tl-[0] rounded-tr-[5px] rounded-bl-[0] rounded-br-[5px] lg:w-[11px] lg:h-[6px] lg:pl-[5px] lg:pr-[7px] xl:w-[14px] xl:h-[8px] xl:pl-[7px] xl:pr-[9px] 2xl:w-[16px] 2xl:h-[9px] 2xl:pl-[8px] 2xl:pr-[11px] 3xl:w-[19px] 3xl:h-[10px] 3xl:pl-[9px] 3xl:pr-[13px]"
                                    alt="arrow_down"
                                  />
                                }
                              ></SelectBox>
                              <Input
                                className="font-semibold p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_900_b2 text-bluegray_900_b2 w-[100%]"
                                wrapClassName="mt-[2px] w-[16%]"
                                type="text"
                                name="GroupSeventeen"
                                placeholder="Enter Name"
                                shape="RoundedBorder5"
                                variant="OutlinePink900"
                              ></Input>
                              <SelectBox
                                className="font-semibold mt-[4px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900_b2 w-[10%]"
                                placeholderClassName="text-bluegray_900_b2"
                                name="FrameFiftyThree"
                                placeholder="Gender"
                                isSearchable={false}
                                isMulti={false}
                                indicator={
                                  <Img
                                    src="images/img_arrowdown_orange_100.svg"
                                    className="mr-[0] rounded-tl-[0] rounded-tr-[5px] rounded-bl-[0] rounded-br-[5px] lg:w-[11px] lg:h-[6px] lg:px-[6px] xl:w-[14px] xl:h-[8px] xl:px-[8px] 2xl:w-[16px] 2xl:h-[9px] 2xl:px-[9px] 3xl:w-[19px] 3xl:h-[10px] 3xl:px-[10px]"
                                    alt="arrow_down"
                                  />
                                }
                              ></SelectBox>
                              <Input
                                className="font-semibold p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_900_b2 text-bluegray_900_b2 w-[100%]"
                                wrapClassName="flex mt-[4px] w-[13%]"
                                name="FrameFiftySix"
                                placeholder="Enter DOB"
                                suffix={
                                  <Img
                                    src="images/img_calendar.svg"
                                    className="border-pink_901 border-2 border-solid bg-orange_100 lg:w-[35px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px] rounded-radius5 my-[auto] mx-[1px]"
                                    alt="calendar"
                                  />
                                }
                                shape="RoundedBorder5"
                                size="sm"
                                variant="OutlinePink900_1"
                              ></Input>
                              <SelectBox
                                className="font-semibold mt-[2px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900_b2 w-[19%]"
                                placeholderClassName="text-bluegray_900_b2"
                                name="GroupFiftyTwo"
                                placeholder="Mode of Participation"
                                isSearchable={false}
                                isMulti={false}
                                indicator={
                                  <Img
                                    src="images/img_arrowdown_orange_100.svg"
                                    className="mr-[0] rounded-tl-[0] rounded-tr-[5px] rounded-bl-[0] rounded-br-[5px] lg:w-[12px] lg:h-[6px] lg:pl-[6px] lg:pr-[7px] xl:w-[15px] xl:h-[8px] xl:pl-[8px] xl:pr-[9px] 2xl:w-[17px] 2xl:h-[9px] 2xl:pl-[9px] 2xl:pr-[11px] 3xl:w-[20px] 3xl:h-[10px] 3xl:pl-[10px] 3xl:pr-[13px]"
                                    alt="arrow_down"
                                  />
                                }
                              ></SelectBox>
                              <Button
                                className="flex items-center justify-center text-center w-[14%]"
                                leftIcon={
                                  <Img
                                    src="images/img_upload.svg"
                                    className="text-center lg:w-[12px] lg:h-[13px] lg:mr-[9px] xl:w-[16px] xl:h-[17px] xl:mr-[12px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[14px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mr-[16px]"
                                    alt="upload"
                                  />
                                }
                                shape="RoundedBorder10"
                                variant="FillOrange100"
                              >
                                <div className="bg-transparent font-semibold lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900">
                                  Upload Photo
                                </div>
                              </Button>
                              <Img
                                src="images/img_approval.png"
                                className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                                alt="Approval"
                              />
                            </Row>
                            <Row className="items-start mt-[2px] w-[79%]">
                              <Column className="bg-pink_900 items-center justify-start xl:pb-[12px] 2xl:pb-[14px] 3xl:pb-[16px] lg:pb-[9px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] shadow-bs4 w-[24%]">
                                <Column className="border border-orange_300 border-solid items-center justify-start lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
                                  <Text
                                    className="columnclassicalsolo"
                                    variant="body6"
                                  >
                                    Classical Solo(Hindustani or Karnataki)
                                  </Text>
                                </Column>
                                <Column className="border border-orange_300 border-solid items-center justify-start lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
                                  <Text
                                    className="columnclassicalsolo"
                                    variant="body6"
                                  >
                                    Classical Instrumental Solo(Percussion)
                                  </Text>
                                </Column>
                                <Column className="border border-orange_300 border-solid items-center justify-start lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
                                  <Text
                                    className="columnclassicalsolo"
                                    variant="body6"
                                  >
                                    Classical Instrumental Solo(Non-Percussion)
                                  </Text>
                                </Column>
                                <Input
                                  className="font-medium p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-orange_50 text-orange_50 w-[100%]"
                                  wrapClassName="w-[100%]"
                                  name="FrameTwentyFive"
                                  placeholder="Light Vocals (Indian)"
                                  variant="OutlineOrange300"
                                ></Input>
                              </Column>
                              <Column className="bg-pink_900 items-center justify-start lg:ml-[348px] xl:ml-[435px] 2xl:ml-[490px] 3xl:ml-[588px] xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] shadow-bs4 w-[22%]">
                                <Text
                                  className="border border-orange_300 border-solid font-medium 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:pr-[24px] xl:pr-[31px] 2xl:pr-[35px] 3xl:pr-[42px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-orange_50 w-[auto]"
                                  variant="body6"
                                >
                                  Participant
                                </Text>
                                <Text
                                  className="border border-orange_300 border-solid font-medium 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:pr-[16px] xl:pr-[20px] 2xl:pr-[23px] 3xl:pr-[27px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] text-orange_50 w-[auto]"
                                  variant="body6"
                                >
                                  Student Accompanist
                                </Text>
                                <Column className="border border-orange_300 border-solid items-end justify-start 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[100%]">
                                  <Text
                                    className="font-medium leading-[normal] text-orange_50 w-[100%]"
                                    variant="body6"
                                  >
                                    Professional (Outside) Accompanist
                                  </Text>
                                </Column>
                              </Column>
                            </Row>
                          </Column>
                          <Column className="bg-pink_900 justify-end xl:mt-[120px] 2xl:mt-[135px] 3xl:mt-[162px] lg:mt-[96px] lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <Button
                              className="2xl:ml-[11px] 3xl:ml-[13px] flex items-center justify-center lg:ml-[7px] mt-[1px] text-center w-[16%] xl:ml-[9px]"
                              leftIcon={
                                <Img
                                  src="images/img_plus_18X18.svg"
                                  className="text-center lg:w-[12px] lg:h-[13px] lg:mr-[6px] xl:w-[16px] xl:h-[17px] xl:mr-[8px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[9px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mr-[10px]"
                                  alt="plus"
                                />
                              }
                              shape="RoundedBorder5"
                              size="sm"
                              variant="FillOrange100"
                            >
                              <div className="bg-transparent font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-pink_900">
                                Add Participants
                              </div>
                            </Button>
                          </Column>
                        </Column>
                      </Column>
                      <Row className="items-end ml-[1px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[59%]">
                        <Column className="justify-start w-[49%]">
                          <Row className="items-center w-[73%]">
                            <Text
                              className="font-semibold text-bluegray_900 w-[auto]"
                              variant="body5"
                            >
                              Contingent Size:
                            </Text>
                            <SelectBox
                              className="font-semibold lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900_b2 w-[31%]"
                              placeholderClassName="text-bluegray_900_b2"
                              name="GroupTwentyFour"
                              placeholder="01"
                              isSearchable={false}
                              isMulti={false}
                              indicator={
                                <Img
                                  src="images/img_arrowdown_orange_100.svg"
                                  className="mr-[0] rounded-tl-[0] rounded-tr-[5px] rounded-bl-[0] rounded-br-[5px] lg:w-[11px] lg:h-[6px] lg:px-[6px] xl:w-[14px] xl:h-[8px] xl:px-[8px] 2xl:w-[16px] 2xl:h-[9px] 2xl:px-[9px] 3xl:w-[19px] 3xl:h-[10px] 3xl:px-[10px]"
                                  alt="arrow_down"
                                />
                              }
                              variant="OutlineBluegray900"
                            ></SelectBox>
                          </Row>
                          <Text
                            className="font-extrabold 3xl:mt-[110px] lg:mt-[65px] xl:mt-[81px] 2xl:mt-[92px] text-bluegray_900 w-[auto]"
                            variant="body2"
                          >
                            Uploads
                          </Text>
                          <Text
                            className="font-semibold leading-[normal] ml-[2px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] text-bluegray_900 w-[95%]"
                            variant="body5"
                          >
                            Upload Eligibility Certificates of All Participants
                            and Accompanists
                          </Text>
                          <Text
                            className="ml-[2px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] text-pink_900_cc w-[auto]"
                            variant="body7"
                          >
                            <span className="text-pink_900_cc font-montserrat font-extrabold lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              NOTE:
                            </span>
                            <span className="text-pink_900_cc font-montserrat font-semibold lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              {" "}
                              Submit all the documents in{" "}
                            </span>
                            <span className="text-pink_900_cc font-montserrat font-bold lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              ONE Zip or PDF File.
                            </span>
                          </Text>
                        </Column>
                        <Button
                          className="2xl:ml-[163px] 2xl:mt-[202px] 3xl:ml-[195px] 3xl:mt-[242px] flex items-center justify-center lg:ml-[115px] lg:mt-[143px] mb-[3px] text-center w-[28%] xl:ml-[145px] xl:mt-[179px]"
                          leftIcon={
                            <Img
                              src="images/img_upload.svg"
                              className="text-center lg:w-[12px] lg:h-[13px] lg:mr-[9px] xl:w-[16px] xl:h-[17px] xl:mr-[12px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[14px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mr-[16px]"
                              alt="upload"
                            />
                          }
                          shape="RoundedBorder10"
                          size="lg"
                          variant="FillOrange100"
                        >
                          <div className="bg-transparent font-semibold lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900">
                            Upload Zip/PDF
                          </div>
                        </Button>
                      </Row>
                      <Row className="items-center ml-[1px] 2xl:mt-[107px] 3xl:mt-[128px] lg:mt-[76px] xl:mt-[95px] w-[58%]">
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          variant="body4"
                        >
                          Total Fee Amount to be Paid (in Rs.):
                        </Text>
                        <Text
                          className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] text-bluegray_900 w-[auto]"
                          variant="body4"
                        >
                          (Contingent Size X 2000) Only
                        </Text>
                      </Row>
                      <Text
                        className="font-extrabold ml-[1px] lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] text-bluegray_900 w-[auto]"
                        variant="body2"
                      >
                        Mode of Payment
                      </Text>
                      <Text
                        className="font-bold ml-[3px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] text-bluegray_900 w-[auto]"
                        variant="body5"
                      >
                        Only NEFT/RTGS is accceptable.
                      </Text>
                      <Text
                        className="font-bold leading-[normal] ml-[3px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] text-black_900 w-[62%]"
                        variant="body3"
                      >
                        <span className="text-black_900 font-montserrat font-semibold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]">
                          A/C Name:
                        </span>
                        <span className="text-black_900 font-montserrat font-medium lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]">
                          {" "}
                          KIIT STUDENT ACTIVITY CENTER
                          <br />
                        </span>
                        <span className="text-black_900 font-montserrat font-semibold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]">
                          A/C Number:
                        </span>
                        <span className="text-black_900 font-montserrat lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]">
                          {" "}
                        </span>
                        <span className="text-black_900 font-montserrat font-medium lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]">
                          50258662673
                          <br />
                        </span>
                        <span className="text-black_900 font-montserrat font-semibold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]">
                          Bank/Branch:
                        </span>
                        <span className="text-black_900 font-montserrat lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]">
                          {" "}
                        </span>
                        <span className="text-black_900 font-montserrat font-medium lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]">
                          Indian Bank, KIIT BRANCH
                          <br />
                        </span>
                        <span className="text-black_900 font-montserrat font-semibold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]">
                          IFSC Code:
                        </span>
                        <span className="text-black_900 font-montserrat lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]">
                          {" "}
                        </span>
                        <span className="text-black_900 font-montserrat font-medium lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]">
                          IDIB000K717
                        </span>
                        <span className="text-black_900 font-montserrat lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]">
                          {" "}
                          <br />
                        </span>
                        <span className="text-black_900 font-montserrat font-semibold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]">
                          Address:
                        </span>
                        <span className="text-black_900 font-montserrat lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]">
                          {" "}
                        </span>
                        <span className="text-black_900 font-montserrat font-medium lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px]">
                          Koel Campus, KIIT University, Patia, Bhubaneswar-
                          751024
                        </span>
                      </Text>
                      <Text
                        className="font-extrabold ml-[1px] lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] text-bluegray_900 w-[auto]"
                        variant="body2"
                      >
                        Payment Confirmation
                      </Text>
                      <Row className="items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[84%]">
                        <Row className="items-center justify-evenly rounded-radius5 w-[59%]">
                          <Text
                            className="font-semibold text-bluegray_900 w-[auto]"
                            variant="body5"
                          >
                            UTR / Transaction no.:
                          </Text>
                          <Input
                            className="font-semibold p-[0] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-bluegray_900_b2 text-bluegray_900_b2 w-[100%]"
                            wrapClassName="w-[66%]"
                            name="GroupTwentyFive"
                            placeholder="Enter here"
                            shape="RoundedBorder5"
                            size="sm"
                            variant="OutlineBluegray900"
                          ></Input>
                        </Row>
                        <Button
                          className="2xl:ml-[74px] 3xl:ml-[88px] flex items-center justify-center lg:ml-[52px] text-center w-[33%] xl:ml-[65px]"
                          leftIcon={
                            <Img
                              src="images/img_upload.svg"
                              className="text-center lg:w-[12px] lg:h-[13px] lg:mr-[9px] xl:w-[16px] xl:h-[17px] xl:mr-[12px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[14px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mr-[16px]"
                              alt="upload"
                            />
                          }
                          shape="RoundedBorder10"
                          size="lg"
                          variant="FillOrange100"
                        >
                          <div className="bg-transparent font-semibold lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_900">
                            Upload Scanned Copy of the Slip
                          </div>
                        </Button>
                      </Row>
                      <Row className="items-center justify-end ml-[auto] lg:mt-[137px] xl:mt-[171px] 2xl:mt-[193px] 3xl:mt-[231px] w-[48%]">
                        <Button
                          className="font-bold lg:text-[18px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-center w-[43%]"
                          shape="RoundedBorder5"
                          size="lg"
                          variant="FillIndigo500b2"
                        >
                          Save Form
                        </Button>
                        <Button
                          className="font-bold lg:ml-[30px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:text-[18px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-center text-orange_51 w-[49%]"
                          shape="RoundedBorder5"
                          size="lg"
                          variant="FillCyan800"
                        >
                          Submit Form
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
            </Stack>
            <Footer className="bg-cyan_800 lg:mt-[52px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] shadow-bs w-[100%]" />
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default DashboardPage;
