import { INode } from "./node"

export interface IGraph {
	expandNode(A: INode): INode[]
	start: INode
	end: INode
}

export default class Graph implements IGraph {
	private relationTable: Map<INode, INode[]>
	public start: INode
	public end: INode

	constructor(start: INode, end: INode) {
		this.relationTable = new Map<INode, INode[]>()
		this.start = start
		this.end = end
	}

	public expandNode(A: INode): INode[] {
		const expanded = this.relationTable.get(A)
		if (expanded) return expanded
		return []
	}

	public add(A: INode, B: INode): void {
		this.relationTable.set(A, [...(this.relationTable.get(A) || []), B])
	}

	public render(current: INode, next: (A: INode) => void) {
		const expanded = this.expandNode(current)
		return current.render(next, expanded, {})
	}
}
