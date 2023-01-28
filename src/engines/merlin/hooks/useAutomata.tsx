import React, { useState, useEffect } from "react"
import { IGraph, INode } from "../types"
import useTraceback from "./useTraceback"

export default function useAutomata(graph: IGraph) {
	const { trace, addTrace } = useTraceback<React.ReactNode>()
	const [current, setCurrent] = useState<INode>(graph.start)
	const [context, setContext] = useState({})

	function next(nextNode: INode, output?: any) {
		addTrace(current.trace(output))
		setCurrent(nextNode)
	}

	function render() {
		return current.render({ next, expanded: graph.expand(current), context })
	}

	return { render, trace }
}
