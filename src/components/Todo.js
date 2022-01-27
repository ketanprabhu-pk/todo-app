import { useState } from 'react'

import DeleteModel from './DeleteModel';
import Backdrop from './Backdrop';

function Todo(props) {

	const [modelIsOpen, setModelIsOpen] = useState(false);
	function clickModelHandler() {
		setModelIsOpen(true);
	}
	function closeModelHandler() {
		setModelIsOpen(false);
	}
	return (
		<div className="card">
			<h2>{props.title}</h2>
			<span>{props.text}</span>
			<div className="actions">
				<button className="btn" onClick={clickModelHandler}>Delete</button>
			</div>
			{modelIsOpen && <DeleteModel onCancel={closeModelHandler} onConfirm={closeModelHandler} />}
			{modelIsOpen && <Backdrop onCancel={closeModelHandler} />}
		</div>
	);
}

export default Todo;