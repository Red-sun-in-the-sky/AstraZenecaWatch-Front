import {
  Box,
  Grid,
  GridItem,
  useColorModeValue,
  HStack,
  Tag,
  TagLabel,
  Hide,
  Show,
  Modal,
  useDisclosure,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { BTGComponent } from "./btg";
import { TicketComponent } from "./ticket";
import { useState } from "react";
import { LeftPanel } from "./LeftPanel";

export default function UserReports() {
  // Chakra Color Mode
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const brandColor = useColorModeValue("#980152", "white");

  const [showData, setShowData] = useState(false);
  const [data, setData] = useState({ name: "", services: [] });

  const [selected, setselected] = useState("btg");

  const [isHovering, setHovering] = useState(false);
  const handleMouseEnter = () => setHovering(true);

  const { onClose } = useDisclosure();

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Grid
        gap={10}
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
      >
        <GridItem w="100%" h="10" colSpan="auto">
          <HStack spacing={4} mb={4}>
            <Tag
              size="lg"
              key="btg"
              borderRadius="full"
              style={{
                color: "#980152",
                outlineColor: "#980152",
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
              style={{
                color: "#980152",
                outlineColor: "#980152",
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
          <Hide below="md">
            <GridItem w="100%" h="90%" colSpan="auto">
              <LeftPanel
                data={data}
                brandColor={brandColor}
                setShowData={setShowData}
              />
            </GridItem>
          </Hide>
        )}
        {showData && (
          <Show below="md">
            <Modal isOpen={showData} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <LeftPanel
                  data={data}
                  brandColor={brandColor}
                  setShowData={setShowData}
                />
              </ModalContent>
            </Modal>
          </Show>
        )}
      </Grid>
    </Box>
  );
}
