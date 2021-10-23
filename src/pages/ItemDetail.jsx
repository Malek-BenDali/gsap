import React from 'react'

function ItemDetails({
	match: {
		params: { id },
	},
}) {
	return <h1>item id : {id}</h1>
}

export default ItemDetails
