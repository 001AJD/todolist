function TodoItem(props: { serialNumber: number; task: string }) {
	const { serialNumber, task } = props;
	return (
		<tr>
			<td colSpan={1}>{serialNumber}</td>
			<td colSpan={2}>{task}</td>
		</tr>
	);
}

export default TodoItem;
