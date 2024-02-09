import {
  ACTIVITY_ICON,
  CMS_ICON,
  CONFIG_ICON,
  CURRENCY_ICON,
  DASHBOARD_ICON,
  DISPUTE_ICON,
  HISTORY_ICON,
  Iimage,
  USER_MANAGEMENT_ICON,
} from "../../../assets/images";
export interface IRoutes {
  to: string;
  icon?: Iimage;
  label: string;
  children?: IRoutes[];
}

const Routes: IRoutes[] = [
  {
    to: "/dashboard/",
    icon: DASHBOARD_ICON,
    label: "Dashboard",
  },
  {
    to: "/dashboard/user-management",
    icon: USER_MANAGEMENT_ICON,
    label: "User management",
    children: [
      {
        to: "/dashboard/user-management",
        label: "User management",
      },
      {
        to: "/dashboard/user-management",
        label: "User management",
      },
    ],
  },
  {
    to: "/dashboard/customer-applications",
    icon: USER_MANAGEMENT_ICON,
    label: "Customer Applicatioin",
    children: [
      {
        to: "/dashboard/user-management",
        label: "User management",
      },
      {
        to: "/dashboard/user-management",
        label: "User management",
      },
    ],
  },

  {
    to: "",
    icon: HISTORY_ICON,
    label: "Booking History",
    children: [
      {
        to: "",
        label: "User management",
      },
      {
        to: "",
        label: "User management",
      },
    ],
  },

  {
    to: "",
    icon: CURRENCY_ICON,
    label: "Transaction",
    children: [
      {
        to: "",
        label: "User management",
      },
      {
        to: "",
        label: "User management",
      },
    ],
  },

  {
    to: "",
    icon: DISPUTE_ICON,
    label: "Dispute",
    children: [
      {
        to: "",
        label: "User management",
      },
      {
        to: "",
        label: "User management",
      },
    ],
  },

  {
    to: "",
    icon: CONFIG_ICON,
    label: "Configuration",
    children: [
      {
        to: "",
        label: "User management",
      },
      {
        to: "",
        label: "User management",
      },
    ],
  },

  {
    to: "",
    icon: CMS_ICON,
    label: "CMS",
    children: [
      {
        to: "",
        label: "User management",
      },
      {
        to: "",
        label: "User management",
      },
    ],
  },

  {
    to: "",
    icon: ACTIVITY_ICON,
    label: "Activity Log",
    children: [
      {
        to: "",
        label: "User management",
      },
      {
        to: "",
        label: "User management",
      },
    ],
  },
];

export default Routes;
