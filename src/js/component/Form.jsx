import React from "react";
import propTypes from "prop-types";

const Form = ({ nuevaTarea, addTask, task }) => {
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
			}}>

			<input
				type="text"
				className="nuevaTarea w-100 mx-auto  py-3  input-group input-group-lg" 
				placeholder="Escribe aqui tu nueva Tarea."
				name="tarea"
				value={task.tarea}
				onChange={nuevaTarea}
			/>

			<div class="d-grid gap-2 col-6 mx-auto">

			<button type="button" className="btn btn-success   m-2 " onClick={() => addTask()}>Agregar! <i class="fas fa-plus-circle"></i>
			</button>
			</div>


		</form>
	);
};

Form.propTypes = {
	nuevaTarea: propTypes.func,
	addTask: propTypes.func,
	task: propTypes.object,
};

export default Form;
