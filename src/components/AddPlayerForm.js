import React, {Component} from 'react';

class AddPlayerForm extends Component {

    state={
        value: ''
    };

    handleValueChange = (e) => {
        this.setState({ value: e.target.value });
    }

    handeSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.state.value);
        this.setState({ value: ''});
    }

    render() {
        return (
            <form onSubmit={this.handeSubmit}>
                <input 
                    type="text"
                    value={this.state.value}
                    onChange={this.handleValueChange}
                    placeholder="Enter a player's name"
                />

                <input 
                    type="submit"
                    value="Add a Player" 
                />
            </form>
        );
    }
}

export default AddPlayerForm;