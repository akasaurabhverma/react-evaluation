import React from 'react'

export default function Table(prop) {
    console.log(prop);
    return (
        <div>{JSON.stringify(prop.countries)}</div>
    )
}
