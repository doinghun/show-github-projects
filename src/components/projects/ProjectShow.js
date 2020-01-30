import React from 'react'
import ReactMarkdown from 'react-markdown'

import { connect } from 'react-redux'
import { fetchProject } from '../../actions'

class ProjectShow extends React.Component {
    state = { isLoading: true }
    componentDidMount() {
            this.props.fetchProject(this.props.match.params.username,this.props.match.params.projectname)
            this.setState({isLoading: false})
    }

    render(){
        const isLoading = this.state.isLoading
        const input = this.props.projectREADME
        console.log(isLoading + input)
        return (!input || isLoading) ? (
            <div> Loading... </div>
        ) : (
            <div>
                <ReactMarkdown source={input}></ReactMarkdown>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return { projectREADME: state.projects[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchProject })(ProjectShow)