import { AiOutlineDollar } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { FaEye, FaRegEye } from "react-icons/fa6";
import { GiGearHammer } from "react-icons/gi";
import { HiMiniChartBar } from "react-icons/hi2";
import { IoPeopleOutline, IoRocketOutline } from "react-icons/io5";
import { LiaGlobeAmericasSolid } from "react-icons/lia";
import { LuBrain, LuCircleDollarSign, LuRocket, LuTarget } from "react-icons/lu";
import { PiChartLineDownBold, PiChartLineUpBold } from "react-icons/pi";
import { RiSettings3Line } from "react-icons/ri";

export const statesData = [
  {
    icon: BsBarChart,
    title: "Ad Spend Optimized",
    count: "4.30M+",
  },
  {
    icon: RiSettings3Line,
    title: "Keywords Analyzed",
    count: "2.35M",
  },
  {
    icon: LiaGlobeAmericasSolid,
    title: "AI-Powered Recommendations",
    count: "30.0K+",
  },
  {
    icon: IoPeopleOutline,
    title: "Campaigns Managed",
    count: "17,331",
  },
];

export const problems = [
  {
    icon: HiMiniChartBar,
    img: "/images/problems/11.png",
    title: "Your CPC is Climbing Every Month",
    description:
      "Amazon CPCs are climbing 20-40% YoY while conversion rates drop. Manual bidding can't keep pace.",
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
    title: "The 24-Hour Data Lag That Kills ROI",
    description:
      "By the time Amazon's data updates, your money is already wasted on yesterdays trends.",
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
    title: "You're Flying Blind on Performance",
    description:
      "You see ACoS per campaign, but not profitability per SKU. Is that bestseller actually making money?",
    feature: [
      {
        icon: BsBarChart,
        title:
          "ACoS looks fine, but TACoS per SKU tells a different story you can't see in reports.",
      },
      {
        icon: HiMiniChartBar,
        title:
          "Search term data shows clicks, not which keywords actually drove profitable conversions.",
      },
      {
        icon: PiChartLineDownBold,
        title:
          "Without SKU-level profitability, you scale losing products thinking they're winners.",
      },
    ],
  },

  {
    icon: IoPeopleOutline,
    img: "/images/problems/44.png",
    title: "Campaign Management Overload",
    description:
      `Juggling Seller Central, multiple ASINs, Sponsored Products, Brands, and Display campaigns across 5+ ad groups creates the "Monday Morning Spreadsheet Hell" that burns out sellers before Q4 even starts.`,
    feature: [
      {
        icon: RiSettings3Line,
        title:
          "Exporting 15 different campaign types into Excel every Monday morning isn't scaling—it's breaking your team.",
      },
      {
        icon: LuTarget,
        title:
          "Manual bid adjustments take 4-6 hours daily; time you could spend sourcing new products or improving listings.",
      },
      {
        icon: PiChartLineDownBold,
        title:
          "One missed optimization during Prime Day = thousands in wasted budget you can't get back.",
      },
    ],
  },
];

export const platform = [
  {
    icon: FaRegEye,
    img: "/images/platform/plate1.png",
    title: "Real-Time Analytics",
  },
  {
    icon: LuBrain,
    img: "/images/platform/plate2.png",
    title: "AI Bid Optimization",
  },
  {
    icon: GiGearHammer,
    img: "/images/platform/plate3.png",
    title: "Campaign Automation",
  },
  {
    icon: LuRocket,
    img: "/images/platform/plate4.png",
    title: "Smart Recommendations",
  },
  {
    icon: LuCircleDollarSign,
    img: "/images/platform/plate5.png",
    title: "Budget Intelligence",
  },
  {
    icon: PiChartLineUpBold,
    img: "/images/platform/plate6.png",
    title: "Performance Monitoring",
  },
];
