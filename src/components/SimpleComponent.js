import React from 'react'

class SimpleComponent extends React.Component {
    state = {
        mood: 'happy'
    }

    handleClick = e => {
        const newMood = this.state.mood === 'happy' ? 'sad' : 'happy'
        this.setState({mood: newMood})
    }

    render() {
        return (
            <div onClick={this.handleClick}>{this.state.mood}</div>
        )
    }
}

export default SimpleComponent
