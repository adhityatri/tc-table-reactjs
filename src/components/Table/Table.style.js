import styled from "styled-components";
import theme from "../../Theme";

export const TableStyled = styled.table`
  border: 1px solid ${theme.colors.outlineColor};
  box-shadow: ${theme.colors.boxShadow};
  font-weight: normal;
  border-collapse: collapse;
  /* table-layout: fixed; */
`;

export const TableHead = styled.thead`
  background-color: #fafafa;
  border-bottom: 1px solid ${theme.colors.outlineColor};
`;

export const TableFoot = styled.tfoot`
  border-top: 1px solid red;
  background-color: ${theme.colors.stickyCartColor};
`;

export const TableBody = styled.tbody`
  /* border: 1px solid blue; */
`;

export const TR = styled.tr`
  /* border: 1px solid blue; */
`;

export const TH = styled.th`
  padding: 10px;
  border-right: 1px solid ${theme.colors.outlineColor};
`;

export const TD = styled.td`
  /* border: 1px solid blue; */
`;

export const TableTitle = styled.div`
  height: 50px;
  background-color: aqua;
`;
