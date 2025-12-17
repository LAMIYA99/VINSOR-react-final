import { createRootRoute, createRoute } from "@tanstack/react-router";
import Home from "../Featured/Pages/Home";
import Layout from "../Layout";
import Shop from "../Featured/Pages/Shop";

export const rootRoute = createRootRoute({
  component: Layout,
});

export const HomeRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
export const ShopRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/shop",
  component: Shop,
});

export const routeTree = rootRoute.addChildren([HomeRouter, ShopRouter]);
