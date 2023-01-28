import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import { useAutomata, useTraceback } from "./engines/merlin/hooks"
import { Graph } from "./engines/merlin/core"
import Start from "./engines/merlin/blocks/Start"
import End from "./engines/merlin/blocks/End"
import { MultiChoice } from "./engines/merlin/blocks/MultiChoice"
import Message from "./engines/merlin/blocks/Message"

const init = new Start()

const A = new MultiChoice("Elige que quieres?", ["asdf"])
const B = new MultiChoice("hola", [])
const C = new MultiChoice("adios", [])
const D = new Message("terminaste pepe")
const F = new MultiChoice("perfe", [])

const end = new End()

const graph = new Graph(A, D)

graph.add(A, B)
graph.add(A, C)
graph.add(C, D)
graph.add(B, D)
graph.add(D, F)

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
