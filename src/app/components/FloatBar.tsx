import React from "react";
import { Box, Slider, SliderTrack, SliderThumb } from "@chakra-ui/react";

interface FloatBarProps {
  floatValue: number;
}

export default function FloatBar({ floatValue }: FloatBarProps) {
  return (
    <Box width="100%" textAlign="center">
      <Slider aria-label="float-slider" value={floatValue * 100} min={0} max={100} isReadOnly>
        <SliderTrack bgGradient="linear(to-r, green.400, yellow.400, red.600)" />
        <SliderThumb boxSize={2} bg='float.marker' />
      </Slider>
    </Box>
  );
}
