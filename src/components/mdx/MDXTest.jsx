import React from "react"

class MDXTest extends React.Component {
    componentDidMount(){
       
    }

    render(){
        const {text} = this.props
        return (
            <div>
                {text}
            </div>

        )
    }
}

export default MDXTest