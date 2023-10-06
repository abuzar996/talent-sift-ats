import { RiDashboardFill } from "react-icons/ri";
import { SiJfrogpipelines } from "react-icons/si";
import { MdAssuredWorkload } from "react-icons/md";
import { FaPeoplePulling } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";

import "./rowContent.styles.css";
export const data = [
  {
    label: "Dashboard",
    icon: <RiDashboardFill />,
  },
  {
    label: "Pipeline",
    icon: <SiJfrogpipelines />,
  },
  {
    label: "Job Postings",
    icon: <MdAssuredWorkload />,
  },
  {
    label: "Candidates",
    icon: <FaPeoplePulling />,
  },
  {
    label: "Settings",
    icon: <FiSettings />,
  },
];
