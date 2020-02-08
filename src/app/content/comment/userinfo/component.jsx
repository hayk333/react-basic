import React from 'react';

import './component.css';

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit = (event) => {
        console.log(this.state.value);
        event.preventDefault();
    }
    

    render() {
        return (
            <div className="UserInfo">
                <img className="Avatar"
                    src={this.props.author.avatarUrl}
                    alt={this.props.author.name}
                />
                <div className="UserInfo-name">
                    {this.props.author.name}
                </div>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value='apple'>apple</option>
                            <option value='mango'>mango</option>
                            <option value='banan'>banan</option>
                            <option value='ananas'>ananas</option>
                        </select>
                    </label>
                    <button type='submit'>send</button>
                </form>
            </div>
        )
    }
}

export default UserInfo;
