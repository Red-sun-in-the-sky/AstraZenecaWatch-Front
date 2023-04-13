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
            type: "incident",
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
              bg="green.300"
              icon={<Icon w="32px" h="32px" as={MdCheck} />}
            />
          }
          value="HR Critical Service 1"
          name="Labeling System is down"
        />
        <MiniStatistics
          setData={setData}
          setShowData={setShowData}
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg="yellow.300"
              icon={<Icon w="32px" h="32px" as={MdRemove} />}
            />
          }
          value="HR Critical Service 13"
          name="Users unable to access to internet"
        />
        <MiniStatistics
          setData={setData}
          setShowData={setShowData}
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg="yellow.300"
              icon={<Icon w="32px" h="32px" as={MdRemove} />}
            />
          }
          value="Finance Critical Service 5"
          name="Finance Service is loading slow"
        />
        <MiniStatistics
          setData={setData}
          setShowData={setShowData}
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg="red.400"
              icon={<Icon w="32px" h="32px" as={MdClose} />}
            />
          }
          value="Dev Critical Service 3"
          name="Users unable to access to the main repository"
        />
      </SimpleGrid>
    </>
  );
};
