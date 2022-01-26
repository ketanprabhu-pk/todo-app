function DeleteModel() {
	return (
		<div className="model">
			<p>Are you sure you want to delete this item?</p>
			<br />
			<button className="btn btn-alt">Cancel</button>
			<button className="btn">Delete</button>
		</div>
	);
}

export default DeleteModel;