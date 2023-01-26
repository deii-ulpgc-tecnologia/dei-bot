import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import Graph from "./engines/merlin/graph"
import Node, { TextChoiceNode } from "./engines/merlin/node"
import Automata from "./engines/merlin/hooks/useAutomata"
import useAutomata from "./engines/merlin/hooks/useAutomata"
import MessageNode from "./engines/merlin/node"

const A = new MessageNode("Hola que tal?", [])

const B = new TextChoiceNode("Hola que tal?")
const C = new MessageNode("Hola francisco?", ["1", "2", "paco"])
const D = new TextChoiceNode("Hola paco?")

const B1 = new TextChoiceNode("1")
const B2 = new TextChoiceNode("2")
const B3 = new TextChoiceNode("3")

const graph = new Graph(A, B)

graph.add(A, B)
graph.add(A, C)
graph.add(A, D)

graph.add(C, B1)
graph.add(C, B2)
graph.add(C, B3)

function App() {
	const { render, trace } = useAutomata(graph)

	return <div className="App">{render()}</div>
}

export default App
