"use client";
import TodoItem from "../todo-item/todo-item";
import { useContext } from "react";
import TaskContext from "@/store/task-context";

function TodoList() {
	const taskCtx = useContext(TaskContext);
	return (
		<>
			{taskCtx.tasks.map((item, index) => {
				<TodoItem key={index} serialNumber={index} task={item.task} />;
			})}
		</>
	);
}
export default TodoList;
