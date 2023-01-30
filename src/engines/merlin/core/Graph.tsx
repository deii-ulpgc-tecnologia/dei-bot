import React from "react"
import { json } from "stream/consumers"
import { IGraph, INode } from "../types"

export default class Graph implements IGraph {
	public start: INode

	constructor(start: INode) {
		this.start = start
	}


	public breathDepthSearch() {
		let curr : INode | undefined = this.start
		let fringe : INode[] = []
		let waiting = [this.start]


		while (curr) {
			curr = waiting.pop()
			if(curr)
				fringe = [...fringe, curr]
			waiting = [...waiting, ...(curr?.nextNodes || [])]
		}

		return fringe
	}

	public toJson() {
		const nodes = this.breathDepthSearch()
		return nodes.map((x) => x.toJson())
	}

	public loadJson(A : object) {
	}


}
