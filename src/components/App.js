import React from 'react';
import ItemList from './ItemList.js'
import CreateBar from './CreateBar.js'

class App extends React.Component{
	state={ todoLists: [] };

	addTodosSubmit = (term) => {
		//console.log(term);
		this.setState({
			todoLists: [...this.state.todoLists, term ]
		});
	}

	deleteTodosSubmit = (content) => {
		//console.log(this.state.todoLists);
		this.setState({
			todoLists: this.state.todoLists.filter(item => {
				return item !== content
			})
		});
	}

	render(){
	    return(
	        <div className="ui text container" style={{ marginTop: '5vh' }}>
	            <CreateBar onSubmit={this.addTodosSubmit}/>
				<ItemList 
					todoLists={this.state.todoLists}
					onDelete={this.deleteTodosSubmit}/>
	        </div>
	    );
	}
};

export default App;