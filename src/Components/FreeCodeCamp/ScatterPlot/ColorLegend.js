import React from 'react'

function ColorLegend({ colorScale, tickSpacing = 20, tickSize = 10, tickTextOffset = 20, onHover, hoveredValue }) {
    return colorScale.domain().map((domainValue, i) => {

        return (<g className="tick" transform={`translate(0,${i * tickSpacing + 60})`}
            onMouseEnter={() => onHover(domainValue)}
            onMouseOut={() => onHover(null)}
            opacity={hoveredValue && domainValue!==hoveredValue?.2:1}

        >
            <circle fill={colorScale(domainValue)} r={tickSize} />
            <text x={tickTextOffset} dy=".32em">{domainValue}</text>
        </g>)
    })
}

export default ColorLegend
