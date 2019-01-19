import { TabPanel } from "react-tabs";
import styled from "styled-components";

const EditorTabPanel = styled(TabPanel)`
  border-top: 1px solid #e5e5e5;
`;

EditorTabPanel.tabsRole = "TabPanel";

export default EditorTabPanel;
