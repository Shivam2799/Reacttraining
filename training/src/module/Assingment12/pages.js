import { Box } from "@material-ui/core";
import React from "react";

export default function Card(props) {
  const { item } = props;
  return (
    <Box className={`Box`}>
      <Box
        className={`Area`}
        style={{ backgroundColor: item.color }}
      ></Box>
      <Box className={`text`}>
        <Box>{item.name}</Box>
        <Box>{item.color}</Box>
        <Box>{item.year}</Box>
        <Box>{item.pantone_value}</Box>
      </Box>
    </Box>
  );
}