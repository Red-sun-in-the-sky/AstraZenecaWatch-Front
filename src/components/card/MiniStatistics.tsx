// Chakra imports
import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card";
import { useState } from "react";

export default function Default(props: {
  startContent?: JSX.Element;
  endContent?: JSX.Element;
  name?: string;
  growth?: string | number;
  value: string | number;
  setData: any;
  setShowData: any;
  data?: any;
}) {
  const {
    startContent,
    endContent,
    name,
    growth,
    value,
    setData,
    setShowData,
    data,
  } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "secondaryGray.600";

  const [isHovering, setHovering] = useState(false);

  const handleMouseEnter = () => setHovering(true);
  const handleMouseLeave = () => setHovering(false);
  const handleMouseDown = () => {
    setData(data);
    setShowData(true);
  };

  return (
    <Card
      py="15px"
      style={{
        cursor: isHovering ? "pointer" : "default",
        top: isHovering ? "-2px" : "",
        border: isHovering ? ".5px grey solid" : "",
        transition: isHovering ? "top ease 0.5s" : "",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
    >
      <Flex
        my="auto"
        h="100%"
        align={{ base: "center", xl: "start" }}
        justify={{ base: "center", xl: "center" }}
      >
        {startContent}

        <Stat my="auto" ms={startContent ? "18px" : "0px"}>
          <StatNumber
            color={textColor}
            fontSize={{
              base: "2xl",
            }}
          >
            {value}
          </StatNumber>
          <StatLabel
            lineHeight="100%"
            color={textColorSecondary}
            fontSize={{
              base: "md",
            }}
          >
            {name}
          </StatLabel>
          {growth ? (
            <Flex align="center">
              <Text color="green.500" fontSize="xs" fontWeight="700" me="5px">
                {growth}
              </Text>
              <Text color="secondaryGray.600" fontSize="xs" fontWeight="400">
                since last month
              </Text>
            </Flex>
          ) : null}
        </Stat>
        <Flex ms="auto" w="max-content">
          {endContent}
        </Flex>
      </Flex>
    </Card>
  );
}
