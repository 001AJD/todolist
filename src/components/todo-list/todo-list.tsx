"use client";
import TodoItem from "../todo-item/todo-item";
import { useContext, useCallback } from "react";
import TaskContext from "@/store/task-context";

function TodoList() {
	const taskCtx = useContext(TaskContext);
	let tasks = taskCtx.tasks;
	if (tasks.length < 1) {
		return (
			<tr>
				<td colSpan={3}>No tasks added</td>
			</tr>
		);
	} else {
		return (
			<>
				{tasks.map((item) => {
					return (
						<TodoItem
							key={item.id}
							serialNumber={item.id}
							task={item.task}
						/>
					);
				})}
			</>
		);
	}
}
export default TodoList;
