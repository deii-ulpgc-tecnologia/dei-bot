import Node from "./node"

export default class Graph {
	private _end: Node
	public current: Node
	private _context: object
	private relationTable: Map<Node, Node[]>

	constructor(start: Node, end: Node) {
		this.current = start
		this._end = end
		this._context = {}
		this.relationTable = new Map<Node, Node[]>()
	}

	public expandNode(A: Node): Node[] {
		const expanded = this.relationTable.get(A)
		if (expanded) return expanded
		return []
	}

	public add(A: Node, B: Node): void {
		this.relationTable.set(A, [...(this.relationTable.get(A) || []), B])
	}

	public next(A: Node) {
		console.log(A)
		console.log(this.current)
		this.current = A
	}

	public render() {
		const expanded = this.expandNode(this.current)
		return this.current.render({ next: this.next, expanded, context: this._context })
	}
}
