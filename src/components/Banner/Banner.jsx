import React from 'react'
import { Heading } from "./Heading";
import { Img } from './Img';
import { Text } from './Text';
import { Button } from './Button';
import DesktopButton from './DesktopButton';

export default function Banner() {
  return (
    <>
       <div className="flex flex-col w-full mt-[45px] gap-[97px] mx-auto md:gap-[72px] md:p-5 sm:gap-12 max-w-[2442px]">
          <div className="flex md:flex-col items-center w-[97%] md:w-full gap-[37px]">
            <div className="flex flex-col items-start md:self-stretch h-[611px] md:h-auto gap-[136px] p-[34px] md:gap-[102px] sm:gap-[68px] sm:p-5 bg-[url(/public/images/group.png)] bg-cover bg-no-repeat flex-1 rounded-[15px]">
              <div className="flex flex-col items-start mt-[175px] ml-[104px] pb-[9px] gap-4 md:ml-0">
                <div className="flex flex-col items-start">
                  <Heading size="xs" as="h2" className="!text-gray-300">
                    Hot Deals
                  </Heading>
                  <Text size="4xl" as="p" className="!text-gray-300">
                    New OLED Collection
                  </Text>
                </div>
                <Button className="flex items-center justify-center h-[48px] px-[22px] sm:px-5 text-gray-300 text-center text-xl font-medium border-gray-300 border-2 border-solid min-w-[149px] rounded-lg">
                  Shop Now
                </Button>
              </div>
              <div className="flex self-end items-start w-[12%] md:w-full mr-3 md:mr-0">
                <Text size="md" as="p" className="!text-gray-300 text-right">
                  BRAVIA
                </Text>
                <Img src="images/img.svg" alt="videocamera_one" className="h-[26px]" />
                <DesktopButton className="flex flex-col items-start flex-1" />
              </div>
            </div>
            <div className="flex flex-col self-end w-[5%] md:w-full mb-[18px] gap-[7px] p-[19px]">
              <Img
                src="images/7.png"
                alt="image"
                className="w-[66px] object-cover rounded-[5px]"
              />
              <Img src="images/5.png" alt="image_one" className="w-[66px] object-cover rounded-[5px]" />
              <Img src="images/4.png" alt="image_two" className="w-[66px] object-cover rounded-[5px]" />
              <Img src="images/3.png" alt="image_three" className="w-[66px] object-cover rounded-[5px]" />
              <Img
                src="images/6.png"
                alt="image_four"
                className="w-[66px] object-cover rounded-[5px]"
              />
            </div>
          </div>
          </div>
    </>
  )
}
