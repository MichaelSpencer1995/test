import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

class Back extends Component {
    render() {
        return (
            <Button to={this.props.route}>Back</Button>
        )
    }
}

const Button = styled(Link)`
    width: 72px;
    height: 31px;
    border: #ccc 1px solid;
    color: #6f6f6f;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
`

export default Back