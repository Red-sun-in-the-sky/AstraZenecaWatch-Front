import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Grid,
  GridItem,
  Icon,
  IconButton,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import GroupsCard from "views/admin/groups/components/GroupsCard";
import { SearchBar } from "components/navbar/searchBar/SearchBar";
import { useState } from "react";
import { MdGroups, MdArrowBack } from "react-icons/md";
import IconBox from "components/icons/IconBox";
import { BTGComponentFavorites } from "views/admin/favorites/components/btg";
import { RightPanel } from "views/admin/favorites/components/RightPanel";

export default function Groups() {
  const menuBg = useColorModeValue("white", "navy.800");
  const shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.18)",
    "14px 17px 40px 4px rgba(112, 144, 176, 0.06)"
  );

  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const brandColor = useColorModeValue("#980152", "white");

  const [data, setData] = useState({ name: "", services: [] });
  const [showData, setShowData] = useState(false);
  const [showGroupBTGs, setShowGroupBTGs] = useState(false);

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {!showGroupBTGs && (
        <Grid
          templateRows="repeat(2, 1fr)"
          gap={{ base: "20px", xl: "20px" }}
          mb="20px"
          display={{ base: "block", xl: "grid" }}
        >
          <Flex
            w={{ sm: "100%", md: "auto" }}
            alignItems="center"
            bg={menuBg}
            justifyContent="space-between"
            p="10px"
            borderRadius="30px"
            boxShadow={shadow}
            flexWrap={{ base: "wrap", md: "nowrap" }}
          >
            <SearchBar />
            <ButtonGroup spacing="2">
              <Button textColor="white" bgColor={brandColor}>
                + Create
              </Button>
              <Button variant="outline">Join</Button>
            </ButtonGroup>
          </Flex>

          {/* BTGs */}
          <SimpleGrid
            columns={3}
            gap={{ base: "20px", xl: "20px" }}
            mb="20px"
            display={{ base: "block", xl: "grid" }}
          >
            <GroupsCard
              setShowGroupBTGs={setShowGroupBTGs}
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon w="32px" h="32px" as={MdGroups} color={brandColor} />
                  }
                />
              }
              value="DEV_MX"
            />
            <GroupsCard
              setShowGroupBTGs={setShowGroupBTGs}
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon w="32px" h="32px" as={MdGroups} color={brandColor} />
                  }
                />
              }
              value="DEV_USA"
            />
            <GroupsCard
              setShowGroupBTGs={setShowGroupBTGs}
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon w="32px" h="32px" as={MdGroups} color={brandColor} />
                  }
                />
              }
              value="DEV_CN"
            />
          </SimpleGrid>
        </Grid>
      )}
      {showGroupBTGs && (
        <SimpleGrid
          columns={1}
          gap={{ base: "20px", xl: "20px" }}
          mb="20px"
          display={{ base: "block", xl: "grid" }}
        >
          <Box>
            <IconButton
              onClick={() => setShowGroupBTGs(false)}
              aria-label={"Go back"}
              icon={<Icon as={MdArrowBack} />}
            />
          </Box>
          <Grid
            mb="20px"
            templateColumns={{ xl: "repeat(2, 1fr)", "2xl": "1fr 0.46fr" }}
            gap={{ base: "20px", xl: "20px" }}
            display={{ base: "block", xl: "grid" }}
          >
            {/* BTGs section */}
            <BTGComponentFavorites
              boxBg={boxBg}
              brandColor={brandColor}
              setData={setData}
              setShowData={setShowData}
            />

            {/* Services section */}
            {showData && (
              <GridItem w="100%" h="90%" colSpan={1}>
                <RightPanel
                  data={data}
                  brandColor={brandColor}
                  setShowData={setShowData}
                />
              </GridItem>
            )}
          </Grid>
        </SimpleGrid>
      )}
    </Box>
  );
}
