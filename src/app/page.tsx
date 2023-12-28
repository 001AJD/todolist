import styles from "./page.module.css";
import Todo from "@/components/todo/todo";
import { TaskContextProvider } from "@/store/task-context";

import { useContext } from "react";

export default function Home() {
	return (
		<main>
			<TaskContextProvider>
				<Todo />
			</TaskContextProvider>
		</main>
	);
}
