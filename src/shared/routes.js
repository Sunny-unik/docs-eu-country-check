import Home from "../views/components/Home.jsx";
import Docs from "../views/components/Docs/Index.jsx";
import NotFound from "../views/components/NotFound.jsx";

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
    path: "*",
    component: NotFound,
  },
];

export default routes;
