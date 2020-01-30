import React from 'react'
import { connect } from 'react-redux'
import { fetchProjects } from '../../actions'
import './UsernameSearch.css'

class SearchBar extends React.Component {
    state = { username: '' }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.fetchProjects(this.state.username)
    }

    render(){
        return (
            <div className="box">
                <div className = "ui segment">
                    <h2>Github Username</h2>
                    <form className = "ui form" onSubmit={this.onFormSubmit}>
                        <div className = "field">
                            <input type="text" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value})}/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, { fetchProjects })(SearchBar)