import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import TaskContext from "@/store/task-context";

function TodoItem(props: { taskId: number; task: string }) {
	const taskCtx = useContext(TaskContext);
	const { taskId, task } = props;

	function handleBtnClick() {
		taskCtx.removeTask(taskId);
	}

	return (
		<tr>
			<td colSpan={2}>{task}</td>
			<td>
				<button onClick={handleBtnClick}>
					<FontAwesomeIcon icon={faTrash} />
				</button>
			</td>
		</tr>
	);
}

export default TodoItem;
