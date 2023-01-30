export interface RenderProps {
	next: (A: INode, output?: any) => void
	expanded: INode[]
	context: object
	addVariable: (id: string, value: any) => void
}

export interface INode {
	id: string
	nextNodes: INode[]
	setNext(A: INode[]): void
	render(props: RenderProps): React.ReactNode
	trace(output: any): React.ReactNode
	toJson(): any
}

export interface NodeJSON {
	component: string
	conf: any
}

export interface IGraph {
	start: INode
}
