import {
  Box,
  Grid,
  GridItem,
  useColorModeValue,
  HStack,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import { BTGComponent } from "./btg";
import { TicketComponent } from "./ticket";
import { useState } from "react";
import { LeftPanel } from "./LeftPanel";

export default function UserReports() {
  // Chakra Color Mode
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const brandColor = useColorModeValue("brand.500", "white");

  const [showData, setShowData] = useState(false);
  const [data, setData] = useState({ name: "", services: [] });

  const [selected, setselected] = useState("btg");

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
            <LeftPanel
              data={data}
              brandColor={brandColor}
              setShowData={setShowData}
            />
          </GridItem>
        )}
      </Grid>
    </Box>
  );
}
