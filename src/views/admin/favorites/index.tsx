import { Box, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import { BTGComponentFavorites } from "./components/btg";
import { useState } from "react";
import { RightPanel } from "./components/RightPanel";

export default function Favorites() {
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const brandColor = useColorModeValue("#980152", "white");

  const [showData, setShowData] = useState(false);
  const [data, setData] = useState({ name: "", services: [] });

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
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
    </Box>
  );
}
