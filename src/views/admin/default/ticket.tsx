import { Icon, SimpleGrid } from "@chakra-ui/react";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import { MdCheck, MdClose, MdRemove } from "react-icons/md";

export const TicketComponent = (props: {
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
          data={{
            name: "HR Critical Service 1",
            service: "HR Critical Service 1",
            type: "incident",
            prority: "P1",
            incidentNumber: "INC288292",
            desc: "Labeling System is down",
            status: "Resolved",
            systemStatus: "green",
          }}
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg="green.400"
              icon={<Icon w="32px" h="32px" as={MdCheck} />}
            />
          }
          name="HR Critical Service 1"
          value="Labeling System is down"
        />
        <MiniStatistics
          setData={setData}
          setShowData={setShowData}
          data={{
            name: "HR Critiial Service 13",
            service: "HR Critiial Service 13",
            type: "incident",
            prority: "P2",
            incidentNumber: "INC288276",
            desc: "Users unable to access to internet",
            status: "In progress",
            systemStatus: "yellow",
          }}
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg="yellow.400"
              icon={<Icon w="32px" h="32px" as={MdRemove} />}
            />
          }
          name="HR Critical Service 13"
          value="Users unable to access to internet"
        />
        <MiniStatistics
          setData={setData}
          setShowData={setShowData}
          data={{
            name: "Finance Critical Service 5",
            service: "Finance Critical Service 5",
            type: "incident",
            prority: "P2",
            incidentNumber: "INC288222",
            desc: "Finance Service is loading slow",
            status: "In progress",
            systemStatus: "yellow",
          }}
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg="yellow.400"
              icon={<Icon w="32px" h="32px" as={MdRemove} />}
            />
          }
          name="Finance Critical Service 5"
          value="Finance Service is loading slow"
        />
        <MiniStatistics
          setData={setData}
          setShowData={setShowData}
          data={{
            name: "Dev Critical Service 3",
            service: "Dev Critical Service 3",
            type: "incident",
            prority: "P1",
            incidentNumber: "INC288255",
            desc: "Users unable to access to the main repository",
            status: "In progress",
            systemStatus: "red",
          }}
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg="red.400"
              icon={<Icon w="32px" h="32px" as={MdClose} />}
            />
          }
          name="Dev Critical Service 3"
          value="Users unable to access to the main repository"
        />
      </SimpleGrid>
    </>
  );
};
