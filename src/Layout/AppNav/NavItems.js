export const MainNav = [
  {
    icon: "pe-7s-home",
    label: "Dashboard",
    to: "#/dashboards/dashboard",
  }
];
export const ManagementNav = [
  {
    icon: "pe-7s-menu",
    label: "Cluster Manager",
    to: "#/management/clustermanager",
  },
  {
    icon: "pe-7s-plugin",
    label: "Web APPs Manager",
    to: "#/management/webappsmanager",
  },
  {
    icon: "pe-7s-shield",
    label: "Security Manager",
    to: "#/management/securitymanager",
  },
];

export const TelemetryNav = [
  {
    icon: "pe-7s-graph1",
    label: "Load Balancers",
    // to: "#/charts/sparklines-1",
    to: "#/telemetry/loadbalancer",
  },
  {
    icon: "pe-7s-graph",
    label: "Web Application Firewall",
    // to: "#/charts/apexcharts",
    to: "#/telemetry/webapplicationfirewall",
  },
  {
    icon: "pe-7s-gleam",
    label: "Cluster Status",
    to: "#/telemetry/clusterstatus",
    // to: "#/charts/gauges",
  },
  {
    icon: "pe-7s-graph2",
    label: "Application Logs",
    // to: "#/charts/#",
    to: "#/telemetry/applicationlogs",
  },
];

