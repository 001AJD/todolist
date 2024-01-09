"use client";
import React, { useState } from "react";
import Button from "../ui/button/button";
import { useContext } from "react";
import TaskContext from "@/store/task-context";

function AddTask() {
	const taskCtx = useContext(TaskContext);
	const [task, setTask] = useState("");

	function handleChange(event: any) {
		setTask(event.target.value);
	}

	function handleSubmit() {
		// add task to the list of tasks
		if (task !== "") {
			taskCtx.addTask({
				id: ++taskCtx.totalTasks,
				task: task,
			});
			setTask("");
		}
	}
	return (
		<tr>
			<td colSpan={2}>
				<input type="text" value={task} onChange={handleChange} />
			</td>
			<td>
				<Button btnText="+" onClick={handleSubmit} />
			</td>
		</tr>
	);
}

export default AddTask;
