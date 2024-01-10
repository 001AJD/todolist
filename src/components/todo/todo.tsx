import AddTask from "../add-task/add-task";
import TodoList from "../todo-list/todo-list";
import styles from "./todo.module.css";

function Todo() {
	return (
		<div className={styles.todoTable}>
			<table>
				<thead>
					<tr>
						<th colSpan={2}>Todo List</th>
					</tr>
				</thead>
				<tbody>
					<AddTask />
					<TodoList />
				</tbody>
			</table>
		</div>
	);
}

export default Todo;
