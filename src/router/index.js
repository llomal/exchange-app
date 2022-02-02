import {createWebHistory, createRouter} from "vue-router";
import Exhcnage from "@/views/exchange/Index";
import Rates from "@/views/rates/Index";

const routes = [
	{
		path: "/",
		name: "Rates",
		component: Rates,
	},
	{
		path: "/exchange",
		name: "Exchange",
		component: Exhcnage,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;