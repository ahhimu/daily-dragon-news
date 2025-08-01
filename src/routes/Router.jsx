import { createBrowserRouter } from "react-router";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayouts></HomeLayouts>,
        },
         {
            path: "/auth",
            element: <h1>Authnication </h1>,
        },
                 {
            path: "/news",
            element: <h1> All News Here </h1>,
        },
                 {
            path: "/*",
            element: <h1>Error 404 PAge Not Found Fokira </h1>,
        },
    ]
);

export default router;