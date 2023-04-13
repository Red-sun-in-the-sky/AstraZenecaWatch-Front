import {
  CloseButton,
  Divider,
  Flex,
  Heading,
  Text,
  HStack,
  Icon,
  List,
  ListItem,
  VStack,
  Box,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import { useEffect, useState } from "react";
import {
  MdCancel,
  MdCheckCircle,
  MdRemoveCircle,
  MdStar,
  MdStarBorder,
} from "react-icons/md";
import { useHistory } from "react-router-dom";

export const LeftPanel = (props: {
  data: any;
  setShowData: any;
  brandColor: any;
  renderData?: any;
}) => {
  const { brandColor, setShowData, data } = props;

  const [renderBTG, setrenderBTG] = useState([<></>]);
  const [renderTicket, setrenderTicket] = useState(<></>);

  const [isHovering, setHovering] = useState(false);
  const handleMouseEnter = () => setHovering(true);
  let history = useHistory();

  const btgLoadData = () => {
    const { services } = data;

    const render = services.map((service: any, i: any) => {
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
          <Flex
            justify="space-between"
            cursor="pointer"
            onClick={() => {
              history.push("/admin/services");
            }}
          >
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
    setrenderBTG(render);
  };

  const ticketLoadData = () => {
    setrenderTicket(
      <VStack align="start">
        <Heading size="sm" color={data.systemStatus + ".400"}>
          {data.status}
        </Heading>
        <HStack align="center">
          <Heading size="md"> Business Service: </Heading>
          <Text>{data.service}</Text>
        </HStack>
        <HStack align="center">
          <Heading size="md"> Priority: </Heading>
          <Text>{data.prority}</Text>
        </HStack>
        <HStack align="center">
          <Heading size="md"> Incident Number: </Heading>
          <Text>{data.incidentNumber}</Text>
        </HStack>
        <HStack align="center">
          <Heading size="md"> Description: </Heading>
          <Text>{data.desc}</Text>
        </HStack>
      </VStack>
    );
  };

  // Render BTG services
  useEffect(() => {
    data.type === "btg" ? btgLoadData() : ticketLoadData();
  }, [data]);

  return (
    <Card>
      <Flex justify="space-between" align="center">
        <Heading
          fontSize={{
            base: "2xl",
          }}
        >
          {data?.name || ""}
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
      {data.type === "btg" ? (
        <List spacing={3}>{renderBTG}</List>
      ) : (
        <Box>{renderTicket}</Box>
      )}
    </Card>
  );
};
