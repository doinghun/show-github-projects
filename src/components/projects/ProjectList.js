import React from 'react'
import { connect } from 'react-redux'
import { fetchProjects } from '../../actions'
import { Link } from 'react-router-dom'

class ProjectList extends React.Component {
    componentDidMount(){
        this.props.fetchProjects(this.props.match.params.username)
    }

    renderList() {
        return this.props.projects.map(project => {
            let projectName = project.full_name
            return (
                <div className='item' key={project.id}>
                    <i className="large github middle aligned icon"></i>
                    <div className='content'>
                        <Link to={`/${projectName}`}>
                            {project.name}
                        </Link>
                    </div>
                </div>
            )
        })
    }

    render(){
        return(
            <div>
                <h2>{this.props.match.params.username}'s Projects</h2>
                <div className = 'ui relaxed divided list'>{this.renderList()}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        projects: Object.values(state.projects)
    }
}

export default connect(mapStateToProps, { fetchProjects })(ProjectList)