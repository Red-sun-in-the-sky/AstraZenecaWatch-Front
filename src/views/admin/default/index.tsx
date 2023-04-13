import {
  Box,
  Flex,
  Grid,
  GridItem,
  Icon,
  SimpleGrid,
  useColorModeValue,
  Heading,
  CloseButton,
  Text,
  List,
  ListItem,
  ListIcon,
  Divider,
  VStack,
  HStack,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import { BTGComponent } from "./btg";
import { TicketComponent } from "./ticket";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import { useEffect, useState } from "react";
import {
  MdCancel,
  MdCheckCircle,
  MdClose,
  MdMinimize,
  MdRemoveCircle,
  MdStar,
  MdStarBorder,
} from "react-icons/md";

export default function UserReports() {
  // Chakra Color Mode
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const brandColor = useColorModeValue("brand.500", "white");

  const [showData, setShowData] = useState(false);
  const [data, setData] = useState({ name: "", services: [] });
  const [renderData, setRenderData] = useState([<></>]);

  const [selected, setselected] = useState("btg");

  useEffect(() => {
    const { services } = data;
    const render = services.map((service, i) => {
      let color = "green.500";
      let text = "Service available";
      let icon = MdCheckCircle;
      let star = MdStar;

      if (i % 2 === 0) {
        star = MdStarBorder;
      }

      if (service.status === "yellow") {
        color = "yellow.400";
        text = "Service disruption";
        icon = MdRemoveCircle;
      }
      if (service.status === "red") {
        color = "red.500";
        text = "Service outage";
        icon = MdCancel;
      }

      return (
        <ListItem key={i} borderBottom=".1px solid #dadada" my={6}>
          <Flex justify="space-between">
            <VStack align="start">
              <Heading size="sm">{service.name}</Heading>
              <Heading size="sm" color={color}>
                {text}
              </Heading>
            </VStack>
            <HStack spacing={10}>
              <Icon as={icon} color={color} fontSize={22} />
              <Icon
                as={star}
                fontSize={20}
                onMouseEnter={handleMouseEnter}
                color="yellow.600"
                style={{
                  cursor: isHovering ? "pointer" : "default",
                  transition: isHovering ? "top ease 0.5s" : "",
                }}
              />
            </HStack>
          </Flex>
        </ListItem>
      );
    });

    setRenderData(render);
  }, [data]);

  const [isHovering, setHovering] = useState(false);

  const handleMouseEnter = () => setHovering(true);

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Grid gap={10} templateColumns="repeat(2, 1fr)">
        <GridItem w="100%" h="10" colSpan={1}>
          <HStack spacing={4} mb={4}>
            <Tag
              size="lg"
              key="btg"
              borderRadius="full"
              variant="outline"
              colorScheme="blue"
              style={{
                cursor: isHovering ? "pointer" : "default",
                transition: isHovering ? "top ease 0.5s" : "",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseDown={() => setselected("btg")}
            >
              <TagLabel>Technology groups</TagLabel>
            </Tag>
            <Tag
              size="lg"
              key="ticket"
              borderRadius="full"
              variant="outline"
              colorScheme="blue"
              style={{
                cursor: isHovering ? "pointer" : "default",
                transition: isHovering ? "top ease 0.5s" : "",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseDown={() => setselected("ticket")}
            >
              <TagLabel>Incidents</TagLabel>
            </Tag>
          </HStack>
          {selected === "btg" ? (
            <BTGComponent
              boxBg={boxBg}
              brandColor={brandColor}
              setData={setData}
              setShowData={setShowData}
            />
          ) : (
            <TicketComponent
              boxBg={boxBg}
              brandColor={brandColor}
              setData={setData}
              setShowData={setShowData}
            />
          )}
        </GridItem>
        {/* Right section */}
        {showData && (
          <GridItem w="100%" h="90%" colSpan={1}>
            <Card>
              <Flex justify="space-between" align="center">
                <Heading
                  fontSize={{
                    base: "2xl",
                  }}
                >
                  {data.name}
                </Heading>
                <CloseButton
                  w="30px"
                  h="30px"
                  color={brandColor}
                  onClick={() => {
                    setShowData(false);
                  }}
                />
              </Flex>
              <Divider mt={4} mb={8} />
              <List spacing={3}>{renderData}</List>
            </Card>
          </GridItem>
        )}
      </Grid>
    </Box>
  );
}
