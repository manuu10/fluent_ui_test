import { Tab, TabList } from "@fluentui/react-components";

import {
  Timer48Regular,
  Timer48Filled,
  AlignBottom48Regular,
  AlignBottom48Filled,
  Home48Filled,
  Home48Regular,
  bundleIcon,
} from "@fluentui/react-icons";
import { useLocation, useNavigate } from "react-router-dom";

const TimeIcon = bundleIcon(Timer48Filled, Timer48Regular);
const StatsIcon = bundleIcon(AlignBottom48Filled, AlignBottom48Regular);
const HomeIcon = bundleIcon(Home48Filled, Home48Regular);

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div
      style={{
        minHeight: "100vh",
        maxHeight: "100vh",
        minWidth: "300px",
        overflow: "scroll",
        borderRight: "2px solid grey",
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
      }}
    >
      <TabList
        defaultSelectedValue=""
        vertical
        appearance="subtle"
        size="large"
        color="red"
        selectedValue={location.pathname}
      >
        <Tab value="/" icon={<HomeIcon />} onClick={() => navigate("/")}>
          Home
        </Tab>
        <Tab
          value="/book"
          icon={<TimeIcon />}
          onClick={() => navigate("/book")}
        >
          Zeit Buchen
        </Tab>
        <Tab
          value="/list-bookings"
          icon={<StatsIcon />}
          onClick={() => navigate("/list-bookings")}
        >
          Buchungen anzeigen
        </Tab>
      </TabList>
    </div>
  );
}
