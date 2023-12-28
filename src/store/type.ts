import { Dispatch, SetStateAction } from "react";

interface Task {
	id: number;
	task: string;
}

type TaskContextType = {
	tasks: Task[];
	totalTasks: number;
	addTask: (task: Task) => void;
	removeTask: (id: number) => void;
};

export type { Task, TaskContextType };
