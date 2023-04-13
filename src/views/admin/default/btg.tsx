import { Icon, SimpleGrid } from "@chakra-ui/react";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import {
  MdComputer,
  MdEmojiPeople,
  MdMail,
  MdOutlineAttachMoney,
  MdSearch,
} from "react-icons/md";

export const BTGComponent = (props: {
  boxBg: any;
  brandColor: any;
  setData: any;
  setShowData: any;
}) => {
  const { boxBg, brandColor, setData, setShowData } = props;
  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 1, "2xl": 2 }}
        gap="20px"
        mb="20px"
      >
        <MiniStatistics
          setData={setData}
          data={{
            name: "Human Resources",
            type: "btg",
            services: [
              {
                name: "Human Resources Critical Service 1",
                status: "green",
              },
              {
                name: "Human Resources Critical Service 2",
                status: "yellow",
              },
              {
                name: "Human Resources Critical Service 3",
                status: "green",
              },
              {
                name: "Human Resources Critical Service 4",
                status: "green",
              },
              {
                name: "Human Resources Critical Service 5",
                status: "red",
              },
            ],
          }}
          setShowData={setShowData}
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdEmojiPeople} color={brandColor} />
              }
            />
          }
          value="Human Resources"
        />
        <MiniStatistics
          setData={setData}
          setShowData={setShowData}
          data={{
            name: "Finance",
            type: "btg",
            services: [
              {
                name: "Finance Critical Service 1",
                status: "green",
              },
              {
                name: "Finance Critical Service 2",
                status: "yellow",
              },
              {
                name: "Finance Critical Service 3",
                status: "green",
              },
              {
                name: "Finance Critical Service 4",
                status: "green",
              },
              {
                name: "Finance Critical Service 5",
                status: "red",
              },
            ],
          }}
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon
                  w="32px"
                  h="32px"
                  as={MdOutlineAttachMoney}
                  color={brandColor}
                />
              }
            />
          }
          value="Finance"
        />
        <MiniStatistics
          setData={setData}
          setShowData={setShowData}
          data={{
            name: "Development",
            type: "btg",
            services: [
              {
                name: "Development Critical Service 1",
                status: "green",
              },
              {
                name: "Development Critical Service 2",
                status: "yellow",
              },
              {
                name: "Development Critical Service 3",
                status: "green",
              },
              {
                name: "Development Critical Service 4",
                status: "green",
              },
              {
                name: "Development Critical Service 5",
                status: "red",
              },
            ],
          }}
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdComputer} color={brandColor} />
              }
            />
          }
          value="Development"
        />
        <MiniStatistics
          setData={setData}
          setShowData={setShowData}
          data={{
            name: "Research",
            type: "btg",
            services: [
              {
                name: "Research Critical Service 1",
                status: "green",
              },
              {
                name: "Research Critical Service 2",
                status: "yellow",
              },
              {
                name: "Research Critical Service 3",
                status: "green",
              },
              {
                name: "Research Critical Service 4",
                status: "green",
              },
              {
                name: "Research Critical Service 5",
                status: "red",
              },
            ],
          }}
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={<Icon w="32px" h="32px" as={MdSearch} color={brandColor} />}
            />
          }
          value="Research"
        />
        <MiniStatistics
          setData={setData}
          setShowData={setShowData}
          data={{
            name: "Operation",
            type: "btg",
            services: [
              {
                name: "Operation Critical Service 1",
                status: "green",
              },
              {
                name: "Operation Critical Service 2",
                status: "yellow",
              },
              {
                name: "Operation Critical Service 3",
                status: "green",
              },
              {
                name: "Operation Critical Service 4",
                status: "green",
              },
              {
                name: "Operation Critical Service 5",
                status: "red",
              },
            ],
          }}
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={<Icon w="32px" h="32px" as={MdMail} color={brandColor} />}
            />
          }
          value="Operation"
        />
      </SimpleGrid>
    </>
  );
};
