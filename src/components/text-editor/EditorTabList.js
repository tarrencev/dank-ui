import { TabList } from "react-tabs";
import styled from "styled-components";

const EditorTabList = styled(TabList)`
  display: flex;
  padding: 0;
  margin: 0;
  width: 250px;
`;

EditorTabList.tabsRole = "TabList";

export default EditorTabList;
