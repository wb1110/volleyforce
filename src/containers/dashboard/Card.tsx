import Typography from "@mui/material/Typography";
import * as React from "react";
import Title from "./Title";

interface CardProps {
  title: string;
  value: string;
}

export default function Card({ title, value }: CardProps) {
  return (
    <React.Fragment>
      <Title>{title}</Title>
      <Typography component="p" variant="h4">
        {value}
      </Typography>
    </React.Fragment>
  );
}
