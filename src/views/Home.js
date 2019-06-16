import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <View>
            <Container>
                <ToBudget to="/budget">Budget</ToBudget>
                <ToGoals to="/goals">Goals</ToGoals>
            </Container>
        </View>
    )
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
        width: 48%;
        height: 40px;
        text-align: center;
        text-decoration: none;
        font-weight: 300;
        color: white;
        border-radius: 2px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`
const Container = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 50px;
`
const ToBudget = styled(Link)`
    background: #009688;
    border-bottom: #00887b 3px solid;
`
const ToGoals = styled(Link)`
    border-bottom: #088be8 3px solid;
    background: #2196f3;
`
export default Home