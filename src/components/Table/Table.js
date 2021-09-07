import React from "react";
import {
  TableStyled,
  TableHead,
  TableFoot,
  TableBody,
  TH,
  TR,
  TD,
} from "./Table.style";

const Table = ({ children, ...rest }) => {
  return <TableStyled {...rest}>{children}</TableStyled>;
};

Table.Head = ({ children, ...rest }) => {
  return <TableHead {...rest}>{children}</TableHead>;
};

Table.Body = ({ children, ...rest }) => {
  return <TableBody {...rest}>{children}</TableBody>;
};

Table.Foot = ({ children, ...rest }) => {
  return <TableFoot {...rest}>{children}</TableFoot>;
};

Table.TH = ({ children, ...rest }) => {
  return <TH {...rest}>{children}</TH>;
};

Table.TR = ({ children, ...rest }) => {
  return <TR {...rest}>{children}</TR>;
};

Table.TD = ({ children, ...rest }) => {
  return <TD {...rest}>{children}</TD>;
};

export default Table