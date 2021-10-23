import React from 'react'
import { Link } from 'react-router-dom'

function Shop() {
	const a = {
		id: 1,
		name: 'Malek',
		rank: ' challenger',
	}
	return (
		<div>
			<Link to={`/shop/${a.id}`}>
				<h1>{a.name}</h1>
			</Link>
		</div>
	)
}
export default Shop
