import { uuid } from "../utils"
import React, { useEffect } from "react"
import { INode, RenderProps } from "../types"
import { nextTick } from "process"
import nodeTest from "node:test"

export interface NodeProps{
	nextNodes ?: INode[]
}

export default abstract class Node<T  extends NodeProps = {}> implements INode {
	private _id: string
	protected auto: boolean
	protected conf: T; 
	protected _nextNodes : INode[]

	constructor(conf: T) {
		this._id = uuid.createId()
		this.auto = false
		this.conf = conf;
		this._nextNodes = conf.nextNodes || []
	}

	get nextNodes(){
		return this._nextNodes;
	}

	setNext(A: INode[]) {
		this._nextNodes = [...this._nextNodes, ...A]
	}

	get id() {
		return this._id
	}

	render(props: RenderProps): React.ReactNode {
		return this.component(props)
	}

	trace(output: any): React.ReactNode {
		return <div key={this.id}>{output}</div>
	}

	protected component(props: RenderProps): React.ReactNode {
		return <></>
	}

	protected _toJson(component : string) {
		return {
			id : this.id,
			"component": component,
			"conf" : {...this.conf, nextNodes: this.nextNodes.map((x) => x.id)}
		}
	}

	public toJson() : any {
		return this._toJson("")
	}
}
