// import { store } from "@/store/store";

const mainWebUrl = "https://web.walletsync.app";
// const { isLoggedIn } = store.getState().Other;

const CLIENT = {
  HOME: "/",
  BUDGET_SUMMARY: {
    WEEKLY: "/weekly-budget-planner",
    MONTHLY: "/monthly-budget-planner",
    YEARLY: "/yearly-budget-planner",
  },
  HOWITWORKS: {
    BUDGETS: "/budgets",
    EXPENSETRACKING: "/expense-tracking",
    PLANNEDPAYMENTS: "/planned-payments",
    CASHFLOWINSIGHTS: "/cashflow-insights",
    // BANKSYNC: "/bank-sync",
  },
  RESOURCES: {
    BANKSYNC: "/bank-to-sync",
    CAREERS: "/resources-careers",
    ABOUTUS: "/about-us",
    SECURITY: "/resources-security",
  },
  BLOG: "/blog",
  PRICING: "/pricing",
  BUDGET_CALCULATOR: "/budget-calculator",
  POLICY: {
    PRIVACY: "/privacy-policy",
    TERMSANDCONDITIONS: "/terms-conditions",
  },
};

export { CLIENT };
