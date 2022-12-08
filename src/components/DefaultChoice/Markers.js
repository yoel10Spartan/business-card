import React from 'react'
import { Marker } from 'react-leaflet'
import IconLocation from './IconLocation'

const Markers = ({ location }) => {
    return (
        <Marker position={location} icon={IconLocation} />
    )
}

export default Markers