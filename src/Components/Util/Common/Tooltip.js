import React from 'react'

function Tooltip({ hoveredValue, mousePosition, yScale, yValue , formatTooltip}) {
    let opacity = hoveredValue ? 1 : 0
console.log();
    return (
        <div className="common_tooltip" style={{
           position: "absolute",
           left: mousePosition && mousePosition.x, top: mousePosition && mousePosition.y,
            opacity: opacity,
            border: "1px solid black",
            backgroundColor: "black",
            color: "white",
            borderRadius: "12px",
            padding: "10px",
             
        }} >
            <table>
                <tbody>
                    <tr>
                        <td colSpan="1">Labour Force : </td>
                        <td colSpan="1">{formatTooltip(hoveredValue)}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Tooltip
