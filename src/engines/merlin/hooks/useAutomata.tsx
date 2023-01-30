import React, { useState, useEffect } from "react"
import { IGraph, INode } from "../types"
import useTraceback from "./useTraceback"

export default function useAutomata(graph: IGraph) {
	const { trace, addTrace } = useTraceback<React.ReactNode>()
	const [current, setCurrent] = useState<INode>(graph.start)
	const [context, setContext] = useState({})
	const [error, setError] = useState()

	function addVariable(id : string, value : any) {
		setContext((context) =>  ({...context, [id] : value}))
	}

	function next(nextNode: INode, output?: any) {
		addTrace(current.trace(output))
		setCurrent(nextNode)
	}

	function render() {
		return current.render({ next, expanded: current.nextNodes, context, addVariable })
	}

	return { render, trace, error }
}
