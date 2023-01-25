import React, { useState, useEffect } from "react"
import Graph from "../graph"
import Node from '../node'

const A = new Node("Eres gay", ["Yes", "No"])
const B = new Node("Perfecto", ["Siguiente"])
const C = new Node("Mierda", ["Siguiente"])
const D = new Node("eres el puto", ["Terminar"])

const graph = new Graph(A, D)

graph.add(A, B)
graph.add(A, C)
graph.add(B, D)
graph.add(C, D)


export default function Automata() {
	const [current, setCurrent] = useState(graph.current)

	useEffect(() => {
		setCurrent(graph.current)
	}, [graph.current])

	return <>
	{

		graph.render()
	}
	</>
	
}
