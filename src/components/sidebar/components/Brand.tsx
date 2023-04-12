// Chakra imports
import { Flex, useColorModeValue, Image } from "@chakra-ui/react";

// Custom components
import zenecaWatchLogo from "assets/img/layout/zw-blue-logo.png";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex alignItems="center" flexDirection="column">
      <Image src={zenecaWatchLogo} mr="20px" />
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
