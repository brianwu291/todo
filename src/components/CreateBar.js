import React from 'react';

class CreateBar extends React.Component{
    constructor(props){
        super(props);
        this.state={ term: '' };
    }

    onSubmit = (e) => {
        if(!this.state.term){
            e.preventDefault();
            this.setState({term: 'You should input something!'});
        }else{
            e.preventDefault();
            this.props.onSubmit(this.state.term);
            this.setState({term: ''})
        }
    }

    render(){
        const empty = this.state.term === 'You should input something!' ? 'error' : '';
        const disabled = this.state.term === 'You should input something!' ? 'disabled' : '';
        return(
            <div className="ui segment">
                <form 
                    className="ui form"
                    onSubmit={this.onSubmit}>
                <div className={`ui fluid action input field ${empty}`}>
                    <input 
                        type="text" 
                        placeholder="Input new todo item..." 
                        value={this.state.term}
                        onChange={
                            (e) => this.setState({
                                term: e.target.value
                            })
                        } />
                    <button 
                        className={`ui inverted primary button ${disabled}`}
                        onClick={this.onSubmit}>
                    <i className="icon edit"></i>
                        Create
                    </button>
                </div>
                </form>
            </div>
        );
    }
}

export default CreateBar;