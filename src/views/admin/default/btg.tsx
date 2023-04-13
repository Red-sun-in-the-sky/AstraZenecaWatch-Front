import {
  HStack,
  Icon,
  SimpleGrid,
  Tag,
  TagLabel,
  useColorModeValue,
} from "@chakra-ui/react";
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
