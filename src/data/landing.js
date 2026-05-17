import { AiOutlineDollar } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { HiMiniChartBar } from "react-icons/hi2";
import { IoPeopleOutline } from "react-icons/io5";
import { LiaGlobeAmericasSolid } from "react-icons/lia";
import { LuTarget } from "react-icons/lu";
import { PiChartLineDownBold } from "react-icons/pi";
import { RiSettings3Line } from "react-icons/ri";

export const statesData = [
  {
    icon: BsBarChart,
    title: "Real-Time Campaign Analytics",
    count: "4.30M",
  },
  {
    icon: RiSettings3Line,
    title: "Automated Optimization Engine",
    count: "2.35M",
  },
  {
    icon: LiaGlobeAmericasSolid,
    title: "AI-Powered Recommendations",
    count: "30.0K",
  },
  {
    icon: IoPeopleOutline,
    title: "Multi-Account Intelligence",
    count: "17,331",
  },
];

export const problems = [
  {
    icon: HiMiniChartBar,
    img: "/images/problems/11.png",
    title: "Rising Ad Costs",
    description:
      "Businesses are facing increasing costs to acquire customers through digital advertising, making it difficult to maintain profitability.",
    feature: [
      {
        icon: LuTarget,
        title:
          "Higher CPCs and increased competition drive up advertising costs.",
      },
      {
        icon: AiOutlineDollar,
        title:
          "Complex bidding strategies lead to insufficient budget allocation.",
      },
      {
        icon: PiChartLineDownBold,
        title: "Reduced ROI and lower profitability for your campaigns.",
      },
    ],
  },

  {
    icon: RiSettings3Line,
    img: "/images/problems/22.png",
    title: "Delayed Optimization",
    description:
      "Manual campaign monitoring and slow optimization decisions prevent businesses from reacting quickly to market changes and performance drops.",
    feature: [
      {
        icon: BsBarChart,
        title:
          "Performance issues are identified too late, causing wasted ad spend.",
      },
      {
        icon: LuTarget,
        title:
          "Delayed audience and bidding adjustments reduce campaign efficiency.",
      },
      {
        icon: PiChartLineDownBold,
        title:
          "Slow optimization cycles lead to lower conversions and missed growth opportunities.",
      },
    ],
  },

  {
    icon: LiaGlobeAmericasSolid,
    img: "/images/problems/33.png",
    title: "Poor Data Visibility",
    description:
      "Scattered analytics and disconnected advertising platforms make it difficult to gain clear insights into campaign performance and customer behavior.",
    feature: [
      {
        icon: BsBarChart,
        title:
          "Data spread across multiple platforms creates reporting confusion.",
      },
      {
        icon: HiMiniChartBar,
        title:
          "Lack of real-time insights slows down strategic decision-making.",
      },
      {
        icon: PiChartLineDownBold,
        title:
          "Incomplete visibility results in missed optimization opportunities.",
      },
    ],
  },

  {
    icon: IoPeopleOutline,
    img: "/images/problems/44.png",
    title: "Campaign Management Overload",
    description:
      "Managing multiple campaigns, audiences, and ad platforms manually becomes overwhelming and time-consuming for growing businesses.",
    feature: [
      {
        icon: RiSettings3Line,
        title:
          "Handling multiple ad accounts manually increases operational complexity.",
      },
      {
        icon: LuTarget,
        title:
          "Constant monitoring and adjustments consume valuable team resources.",
      },
      {
        icon: PiChartLineDownBold,
        title:
          "Management overload leads to inconsistent campaign performance.",
      },
    ],
  },
];
