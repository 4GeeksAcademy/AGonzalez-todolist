import React, {useState} from "react";


//create your first component
const Home = () => {
	const [inputValue, setInputValue]= useState("");
	const [todos, setTodos]= useState([]);
	return (
		<>
		<div className="container">
			<h1>My Todos</h1>
			<div className="card ">
  				<ul className="list-group list-group-flush">
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
							placeholder="Add tasks ..."></input>
					</li>
   					 <li className="list-group-item">
						{todos.map((item, index)=> (
							<li>
								{item} <button type="button" 
								className="btn " 
								onClick={() => 
								setTodos(
									todos.filter(
										(t, currentIndex) => 
										index != currentIndex))}>
											<i className="fa-solid fa-x"></i>
										</button>
							</li>
						))}
					 </li>
				
 				</ul>
  				<div className="card-footer text-secondary">
   					{todos.length} tasks
 				</div>
			</div>
		</div>
		</>
	);
};

export default Home;
