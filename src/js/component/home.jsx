import React, {useState} from "react";


//create your first component
const Home = () => {
	const [inputValue, setInputValue]= useState("");
	const [todos, setTodos]= useState([]);
	return (
		<>
		<div className="container">
			<h1>My Todos</h1>
			<div className="card">
  				<ul className="list-group">
    				<li className="list-group-item">
						<input type="text" 
							onChange={(e)=> setInputValue(e.target.value)}
							value={inputValue}
							onKeyPress={(e)=> {
								if(e.key === "Enter") {
									setTodos(todos.concat([inputValue]));
									setInputValue("")
								}
							}}
							placeholder="Add tasks ..."></input></li>
   					 <li className="list-group-item ">
						{todos.map((t)=> (
							<li>
								{t}
							</li>
						))}
					 </li>
 				</ul>
  				<div className="card-footer">
   					23 Tasks
 				</div>
			</div>
		</div>
		</>
	);
};

export default Home;
