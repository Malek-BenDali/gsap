import React, { useEffect, useRef } from 'react'
import './gsap.css'
import { gsap, Power3 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Gsap() {
	let ref = useRef(null)
	gsap.registerPlugin(ScrollTrigger)
	useEffect(() => {
		const element = ref.current
		let t1 = gsap.timeline({
			scrollTrigger: {
				trigger: ref.current,
				start: 'center bottom',
				markers: true,
				// scrub: true, // trodha interactif maa scroll
			},
		})
		t1.from('#thirdCircle', { x: 200, opacity: 0 })
		// gsap.from(element.querySelector('.sidebar'), {
		// 	x: 200,
		// 	opacity: 0,
		// 	duration: 1.5,
		// 	scrollTrigger: {
		// 		trigger: element.querySelector('.sidebar'),
		// 		markers: true,
		// 		start: 'top bottom',
		// 		end: 'top middle',
		// 		scrub: true,
		// 	},
		// })
	}, [])

	return (
		<div className="body">
			<div className="headers">
				<div className="links">
					<div className="link">link 1</div>
					<div className="link">link 2</div>
					<div className="link">link 3</div>
				</div>
			</div>
			<div className="content" ref={ref}>
				<div className="sidebar" id="thirdCircle"></div>
				<button className="button">Reverse</button>
				<div className="sidebar"></div>
			</div>
		</div>
	)
}

export default Gsap
