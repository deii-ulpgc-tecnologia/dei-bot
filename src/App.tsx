import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"

import { useAutomata } from "merlin/hooks"
import { Graph } from "merlin/core"
import {MultiChoice, Message, End, Start} from "merlin/blocks"

const init = new Start({})

const A = new MultiChoice({text_options: ["hola", "adios", "hello"]})
const B = new MultiChoice({text_options: ["adsfl", "adfasdf"]})
const C = new MultiChoice({text_options: ["adsfl", "adfasdf"]})
const D = new Message({message : "terminaste pepe"})
const F = new MultiChoice({text_options: ["adsfl", "adfasdf"]})

A.setNext([B, C])
B.setNext([D])
C.setNext([D])
D.setNext([F])


const graph = new Graph(A)

console.log(graph.toJson())

function App() {
	const { trace, render } = useAutomata(graph)

	return (
		<div className="App">
			{trace}
			{render()}
		</div>
	)
}

export default App
