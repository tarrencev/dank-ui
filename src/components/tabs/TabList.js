import { TabList } from "react-tabs";
import styled from "@emotion/styled";

const StyledTabList = styled(TabList)`
  display: flex;
  padding: 0;
`;

StyledTabList.tabsRole = "TabList";

export default StyledTabList;
