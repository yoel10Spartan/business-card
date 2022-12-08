const location = {
    "1": {
        "cord": [21.1425544, -86.8339484],
        "desc": "Cancun",
        "address": ""
    },
    "2": {
        "cord": [19.3633108, -99.1825817],
        "desc": "CDMX"
    },
    "3": {
        "cord": [18.3573651, -66.0602639],
        "desc": "Puerto Rico"
    },
    "4": {
        "cord": [9.0000182, -79.5216758],
        "desc": "Panama"
    }
}

const getLocation = (id) => {
    return location[id]['cord']
}

export default getLocation