import { Router } from "@vaadin/router";

export const initRouter = (outlet: HTMLElement) => {
    const router = new Router(outlet);
    router.setRoutes([
        { path: "/", component: "home-view" },
        { path: "/tasks", component: "tasks-view" },
        { path: "/about", component: "about-view" },
    ]);
    return router;
};