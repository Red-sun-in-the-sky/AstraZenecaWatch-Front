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
} from "@chakra-ui/react";
import Card from "components/card/Card";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { MdCancel, MdCheckCircle, MdRemoveCircle } from "react-icons/md";

export const RightPanel = (props: {
  data: any;
  setShowData: any;
  brandColor: any;
  renderData?: any;
}) => {
  const { brandColor, setShowData, data } = props;
  const [renderData, setRenderData] = useState([<></>]);
  let history = useHistory();

  // Render BTG services
  useEffect(() => {
    const { services } = data;
    const render = services.map((service: any, i: any) => {
      let color = "green.500";
      let text = "Service available";
      let icon = MdCheckCircle;

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
            </HStack>
          </Flex>
        </ListItem>
      );
    });

    setRenderData(render);
  }, [data]);

  return (
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
      {data.type === "btg" ? (
        <List spacing={3}>{renderData}</List>
      ) : (
        <Text>Pepepe</Text>
      )}
    </Card>
  );
};
