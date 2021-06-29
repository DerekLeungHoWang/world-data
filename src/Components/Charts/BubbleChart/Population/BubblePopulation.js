import React from 'react'
import { useData } from './useData'
import * as d3 from 'd3'
import ToolBarSpace from '../../../Drawer/ToolBarSpace'
import { Paper } from '@material-ui/core'
const diameter = 650
function BubblePopulation() {


    const data = useData()
    if (!data) {
        return <p>Loading...</p>
    }
 
    let dataobj = {
        children: data,
    }

    let rootnode = d3.hierarchy(dataobj)

    console.log(data);
    const pack = d3
        .pack()
        .size([diameter - 4, diameter - 4])
    let nodes = pack(
        // use song likes as sum value and sort likes
        rootnode
            .sum(d => d.Population)
            .sort((a, b) => b.data.Population - a.data.Population)
    )

    nodes = nodes.children
    console.log(nodes);

    let colour = ["#ff0000",
        "#ffa500", "#191970", "#006400",
        "#f5deb3", "#2f4f4f", "#d9d97e", "#0000cd", "#418541", "#00fa9a", "#00bfff", "#ff00ff",
        "#dda0dd", "#ff1493", "#a0522d"]

    return (

        <Paper elevation={3} className="svg-container" >

            <svg height={diameter} width={diameter}

            >
                <g

                >


                    {nodes.map((d, i) => {

                        return <circle
                            key={i}
                            fill={colour[i]}
                            cx={d.x}
                            cy={d.y}
                            r={d.r}
                            stroke="#000"
                        >

                        </circle>
                    })}
                    {nodes.map((d, i) => {
                        return <text
                            style={{
                                textAnchor: 'middle',
                                fontFamily: 'Segoe UI', fontWeight: '600'

                            }}
                            dy=".71em" fill="white" x={d.x} y={d.y}>{
                                d.data.Country

                            }</text>
                    })}

                </g>
            </svg>
        </Paper>

    )
}

export default BubblePopulation
