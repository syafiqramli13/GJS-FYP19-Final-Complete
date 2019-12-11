import React from "react";

//const untuk import screen

const AboutUs = React.lazy(() => import("./screens/PubAboutUs"));
const Activity = React.lazy(() => import("./screens/PubActivity"));
const Contact = React.lazy(() => import("./screens/PubContact"));
const Inquiries = React.lazy(() => import("./screens/PubInquiries"));
const Photo = React.lazy(() => import("./screens/PubPhoto"));
const Video = React.lazy(() => import("./screens/PubVideo"));
const Handcrafts = React.lazy(() => import("./screens/PubHandcrafts"));
const Tool = React.lazy(() => import("./screens/PubTool"));
const KerchangScanner = React.lazy(() =>
  import("./screens/PubKerchangScanner")
);
const Test = React.lazy(() => import("./screens/test"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/AboutUs", name: "AboutUs", component: AboutUs },
  { path: "/Activity", name: "Activity", component: Activity },
  { path: "/Archive", exact: true, name: "Archive", component: Handcrafts },
  { path: "/Archive/Handcrafts", name: "Handcrafts", component: Handcrafts },
  { path: "/Archive/Tool", name: "Tool", component: Tool },
  { path: "/Gallery", exact: true, name: "Gallery", component: Photo },
  { path: "/Gallery/Photo", name: "Photo", component: Photo },
  { path: "/Gallery/Video", name: "Video", component: Video },
  { path: "/Contact", name: "Contact", component: Contact },
  { path: "/Inquiries", name: "Inquiries", component: Inquiries },
  {
    path: "/Kerchang Scanner",
    name: "Kerchang Scanner",
    component: KerchangScanner
  },
  { path: "/Test", name: "Test", component: Test }
];

export default routes;
