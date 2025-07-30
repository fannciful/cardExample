import { createFileRoute } from "@tanstack/react-router";
import { MyCards } from "../pages/MyCards";


export const Route = createFileRoute("/")({
	component: MyCards,
});
