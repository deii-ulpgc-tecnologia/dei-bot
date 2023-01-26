import React, { useState, useEffect } from "react"
import Graph, { IGraph } from "../graph"
import { INode } from "../node"

function useTraceback<T extends INode>() {
	const [trace, setTrace] = useState<T[]>([])

	function addTrace(element: T) {
		setTrace((trace) => [...trace, element])
	}

	return {
		trace,
		addTrace,
	}
}

export default function useAutomata(graph: IGraph) {
	const { trace, addTrace } = useTraceback()
	const [current, setCurrent] = useState<INode>(graph.start)

	function next(A: INode) {
		addTrace(current)
		setCurrent(A)
	}

	function render() {
		return current.render(next, graph.expandNode(current), {})
	}

	return { render, trace }
}
