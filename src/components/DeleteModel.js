function DeleteModel(props) {
	function cancelHandler() {
		props.onCancel();
	}
	function confirmHandler() {
		props.onConfirm();
	}
	return (
		<div className="modal">
			<p>Are you sure you want to delete this item?</p>
			<br />
			<button className="btn btn-alt" onClick={cancelHandler}>Cancel</button>
			<button className="btn" onClick={confirmHandler}>Delete</button>
		</div>
	);
}

export default DeleteModel;