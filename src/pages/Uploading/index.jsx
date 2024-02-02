import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const UploadingPage = () => {
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-4 mt-2"
          src="images/img_television.svg"
          alt="television"
        />
      ),
      label: "Invoice",
    },
    {
      icon: (
        <Img
          className="h-[26px]"
          src="images/img_megaphone.svg"
          alt="megaphone"
        />
      ),
      label: "Schedule",
    },
    {
      icon: (
        <Img
          className="h-[26px]"
          src="images/img_calendar.svg"
          alt="calendar"
        />
      ),
      label: "Calendar",
    },
    {
      icon: (
        <Img
          className="h-[26px]"
          src="images/img_iconlyboldnotification.svg"
          alt="iconlyboldnotif"
        />
      ),
      label: "Notification",
    },
    {
      icon: (
        <Img className="h-[26px]" src="images/img_search.svg" alt="search" />
      ),
      label: "Settings",
    },
  ];

  return (
    <>
      <div className="bg-gray-50_01 flex flex-col font-nunito items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar1 className="!sticky !w-[218px] bg-white-A700_01 flex h-screen md:hidden justify-start overflow-auto top-[0]" />
          <div className="flex flex-1 flex-col font-figtree md:gap-10 gap-[137px] items-center justify-start md:mt-0 mt-[49px] w-full">
            <div className="flex md:flex-col flex-row gap-[34px] items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col items-start justify-center w-auto md:w-full">
                <div className="flex flex-col items-center justify-start max-w-[1052px] w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                      size="txtFigtreeSemiBold24"
                    >
                      Upload CSV
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-row gap-[27px] items-center justify-between md:mt-0 mt-0.5 w-[7%] md:w-full">
                <Img
                  className="h-[23px]"
                  src="images/img_vector.svg"
                  alt="vector"
                />
                <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                  <Img
                    className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                    src="images/img_image1.png"
                    alt="imageOne"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white-A700_01 flex flex-col gap-[21px] items-center justify-start p-4 rounded-lg w-[52%] md:w-full">
              <div className="border border-dashed border-gray-200_01 flex flex-col items-center justify-start p-[71px] md:px-10 sm:px-5 rounded-lg w-full">
                <div className="flex flex-col items-center justify-start w-[36%] md:w-full">
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-9 w-9"
                      src="images/img_television_green_900_36x36.svg"
                      alt="television_One"
                    />
                    <Text
                      className="text-base text-center text-gray-500_01 w-auto"
                      size="txtFigtreeRegular16"
                    >
                      upload-template.xlsx
                    </Text>
                    <Text
                      className="text-center text-red-700 text-sm w-auto common-pointer cursor-pointer"
                      size="txtFigtreeRegular14"
                      onClick ={()=>{
                        navigate("/Upload")
                      }}
                    >
                      Remove
                    </Text>
                  </div>
                </div>
              </div>
              <div
                className="common-pointer bg-indigo-A200 flex flex-col h-14 md:h-auto items-center justify-center pl-2 pr-4 py-2 rounded-lg w-[564px] sm:w-full"
                onClick={() => navigate("/Signin")}
              >
               <div class="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                <svg class="text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24">
                  <path
                    d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                    stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path
                    d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                    stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" class="text-blue-900">
                  </path>
                </svg>
              </div>
                {/* <div className="border-2 border-solid h-[19px] rounded-[9px] w-[19px] white_A700_01_white_A700_01_border"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadingPage;




