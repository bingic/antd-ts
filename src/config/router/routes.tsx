import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Home from "../../view/Home";
const About = lazy(() => import("../../view/About"));
const Unions = lazy(() => import("../../pages/unions"));
const Context = lazy(() => import("../../pages/context"));
const Enums = lazy(() => import("../../pages/enums"));
const Forms = lazy(() => import("../../pages/forms"));
const Generic = lazy(() => import("../../pages/generic"));
const Props = lazy(() => import("../../pages/props"));
const Usestate = lazy(() => import("../../pages/usestate"));

//这里可以直接看useRoutes函数源码第一个参数就是RouteObject类型所以我们将routes定义为改类型
const routes: RouteObject[] = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/unions",
        element: <Unions />,
    },
    {
        path: "/context",
        element: <Context />,
    },
    {
        path: "/enums",
        element: <Enums />,
    },
    {
        path: "/forms",
        element: <Forms />,
    },
    {
        path: "/generic",
        element: <Generic />,
    },
    {
        path: "/props",
        element: <Props />,
    },
    {
        path: "/usestate",
        element: <Usestate />,
    },
];

export default routes;
