import React, { Component } from 'react'

export class footer extends Component {
    render() {
        return (
            <footer style={ftrSyl}>
                Youness Marrakchi | <a href="https://github.com/youness-marrakchi">Github</a>
            </footer>
        )
    }
}

const ftrSyl = {
    textDecoration: 'none',
    padding: '8px',
    textAlign: 'center',
    fontSize: '13px',
    position: 'absolute',
    backgroundColor: '#e0e0e0',
    color: 'coral',
    height: '40px',
    width: '100%',
    left: '0',
    bottom: '0',
    overflow: 'hidden'
}

export default footer
