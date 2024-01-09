function TodoItem(props: { serialNumber: number; task: string }) {
	const { serialNumber, task } = props;
	return (
		<tr>
			{/* <td colSpan={0.5}>{serialNumber}</td> */}
			<td colSpan={3}>{task}</td>
		</tr>
	);
}

export default TodoItem;
