import Home from "../views/components/Home.jsx";
import Docs from "../views/components/Docs/Index.jsx";
import NotFound from "../views/components/NotFound.jsx";
import Install from "../views/components/Docs/Install.jsx";
import Usage from "../views/components/Docs/Usage.jsx";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/docs",
    component: Docs,
  },
  {
    path: "/docs/install",
    component: Install,
  },
  {
    path: "/docs/usage",
    component: Usage,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export default routes;
