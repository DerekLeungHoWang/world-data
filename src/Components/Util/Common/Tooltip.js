import React from 'react'

function Tooltip() {
    return (
        <div className="common_tooltip" >
            <table>
                <thead>
                    <tr>
                        <th colSpan="2">Title</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="1">Bodies</td>
                        <td colSpan="1">Value</td>
                    </tr>
                    <tr>
                        <td colSpan="1">Year</td>
                        <td colSpan="1">Value</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Tooltip
