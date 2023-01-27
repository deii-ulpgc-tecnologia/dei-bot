export interface RenderProps {
	next: (A: INode, output?: any) => void
	expanded: INode[]
	context: object
}

export interface INode {
	id: string
	render(props: RenderProps): React.ReactNode
	trace(output: any): React.ReactNode
}

export interface IGraph {
	expand(A: INode): INode[]
	start: INode
	end: INode
}
