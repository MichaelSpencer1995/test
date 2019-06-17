import React, { Component } from 'react'
import BackButton from '../components/back'
import styled from 'styled-components'
import { XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, LineSeries } from 'react-vis'

const data = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
]

class Budget extends Component {
    render() {
        return (
            <View>
                <Container>
                    <Top>
                        <BackButton route="/" />
                        <h1>Budget</h1>
                    </Top>
                    <XYPlot height={300} width= {300}>
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis />
                        <YAxis />
                        <LineSeries data={data} />
                    </XYPlot>
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
`
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 10px 20px;
`
const Top = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-weight: 200;
        position: relative;
        top: 4px;
        color: #323344;
    }
`

export default Budget