import React, { useState } from "react";

//create your first component
const Home = () => {
	const [newtask, setnewtask] = useState("");

	const [task, settasks] = useState([]);

	function addtask() {
		settasks([...task, newtask]);
	}

	function deletask(index) {
		var duplicatearray = [...task];

		duplicatearray.splice(index, 1);

		settasks(duplicatearray);
	}

	const tasklist = task.map((object, index) => {
		return (
			<div className="row justify-content-center">
				<h1 className="col-md-6 text-left">{object}</h1>
				<button
					onClick={() => {
						deletask(index);
					}}
					className="col-md-1 btn btn-danger m-1">
					Delete
				</button>
			</div>
		);
	});

	return (
		<div className="home">
			<div className="container-sm">
				<h1 className="header">todos</h1>
				<div className="row justify-content-center">
					<input
						type="text"
						placeholder="What needs to be done?"
						className=" col-md-6 m-1"
						value={newtask}
						onChange={(e) => {
							setnewtask(e.target.value);
						}}
					/>
					<button
						onClick={addtask}
						className="btn btn-primary col-md-2 m-1">
						Add Task
					</button>
				</div>
				{tasklist}
			</div>
			<div className="count">{tasklist.length} item left</div>
		</div>
	);
};

export default Home;
