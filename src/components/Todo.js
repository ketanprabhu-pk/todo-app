function Todo(props) {
	function clickHandler() {
		// props.onClick(props.id);
		console.log(props.title);
	}
	return (
		<div className="card">
			<h2>{props.title}</h2>
			<span>{props.text}</span>
			<div className="actions">
				<button className="btn" onClick={clickHandler}>Delete</button>
			</div>
		</div>
	);
}

export default Todo;