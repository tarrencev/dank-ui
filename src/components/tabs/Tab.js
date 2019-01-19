import { Tab } from "react-tabs";
import styled from "styled-components";

const StyledTab = styled(Tab)`
  display: flex;
  flex: 1;
  justify-content: center;
  list-style: none;
  cursor: pointer;

  &.react-tabs__tab--selected {
    border-bottom: 2px solid #494949;
    padding-bottom: 10px;
    font-weight: 600;
  }
`;

StyledTab.tabsRole = "Tab";

export default StyledTab;
