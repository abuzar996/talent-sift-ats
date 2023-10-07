import { RiDashboardFill } from "react-icons/ri";
import { SiJfrogpipelines } from "react-icons/si";
import { MdAssuredWorkload } from "react-icons/md";
import { FaPeoplePulling } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";

import "./rowContent.styles.css";
export const data = [
  {
    id: 1,
    label: "Dashboard",
    icon: <RiDashboardFill />,
  },
  {
    id: 2,
    label: "Pipeline",
    icon: <SiJfrogpipelines />,
  },
  {
    id: 3,
    label: "Job Postings",
    icon: <MdAssuredWorkload />,
  },
  {
    id: 4,
    label: "Candidates",
    icon: <FaPeoplePulling />,
  },
  {
    id: 5,
    label: "Settings",
    icon: <FiSettings />,
  },
];
