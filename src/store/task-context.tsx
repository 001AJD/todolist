"use client";
import {
	JSXElementConstructor,
	PromiseLikeOfReactNode,
	ReactElement,
	ReactNode,
	ReactPortal,
	createContext,
	useState,
} from "react";
import { TaskContextType, Task } from "./type";

const TaskContext = createContext<TaskContextType>({
	tasks: [],
	totalTasks: 0,
	addTask: () => {},
	removeTask: () => {},
});

export function TaskContextProvider(props: {
	children:
		| string
		| number
		| boolean
		| ReactElement<any, string | JSXElementConstructor<any>>
		| Iterable<ReactNode>
		| ReactPortal
		| PromiseLikeOfReactNode
		| null
		| undefined;
}) {
	const [tasks, setTasks] = useState<Task[]>([]);

	function addTaskHandler(task: Task) {
		setTasks((tasks) => {
			return tasks.concat(task);
		});
	}

	function removeTaskHandler(id: number) {
		setTasks((tasks) => {
			return tasks.filter((t) => {
				return t.id !== id;
			});
		});
	}

	const context: TaskContextType = {
		tasks: tasks,
		totalTasks: tasks.length,
		addTask: addTaskHandler,
		removeTask: removeTaskHandler,
	};

	return (
		<TaskContext.Provider value={context}>
			{props.children}
		</TaskContext.Provider>
	);
}
export default TaskContext;
