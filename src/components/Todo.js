import { useState } from 'react'

import DeleteModel from './DeleteModel';
import Backdrop from './Backdrop';

function Todo(props) {

	const [modelIsOpen, setModelIsOpen] = useState(false);
	function clickHandler() {
		setModelIsOpen(true);
	}
	return (
		<div className="card">
			<h2>{props.title}</h2>
			<span>{props.text}</span>
			<div className="actions">
				<button className="btn" onClick={clickHandler}>Delete</button>
			</div>
			{modelIsOpen && <DeleteModel />}
			{modelIsOpen && <Backdrop />}
		</div>
	);
}

export default Todo;