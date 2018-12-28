import React from 'react';

class DeleteButton extends React.Component{
    onSubmit = () => {
        this.props.onDelete(this.props.content);
    }

    render(){
        //console.log(this.props)
        return(
            <div className="right floated content middle aligned content">
                <button 
                    className="ui icon button ui primary button"
                    onClick={this.onSubmit}>
                    <i className="trash alternate outline icon"></i>
                </button>
            </div>
        );
    }
};

export default DeleteButton;