import React from 'react'
import { Dropdown } from './Dropdown';
function DropdownGroup({ attributes, xAttribute, setXAttribute, yAttribute, setYAttribute }) {
    return (
        <>
            <Dropdown
                options={attributes}
                id="x-select"
                selectedValue={xAttribute}
                onSelectedValueChange={setXAttribute}

            />

            <Dropdown

                options={attributes}
                id="y-select"
                selectedValue={yAttribute}
                onSelectedValueChange={setYAttribute}
            />
        </>
    )
}

export default DropdownGroup
