import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends Component {
    render() {
        console.log(this.props)
        return (
            <View>
                <Container>
                    <ToBudget to="/budget">Budget</ToBudget>
                </Container>
            </View>
        )
    }
}

const View = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    a {
        width: 100%;
        margin-bottom: 29px;
        height: 48px;
        text-align: center;
        text-decoration: none;
        color: #e6e6e6;
        border-radius: 2px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`
const Container = styled.div`
    width: 275px;
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
`
const ToBudget = styled(Link)`
    background: #009688;
    border-bottom: #00887b 3px solid;
`

const mapStateToProps = (state) => {
    return {
        things: state.things
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (index) => {
            dispatch({
                type: 'REMOVE_ITEM',
                index: index
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)