import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import home from "./subs/home";

const routes: Array<RouteRecordRaw> = [...home];
export default createRouter({ history: createWebHistory("/"), routes });
