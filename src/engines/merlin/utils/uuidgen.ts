import { v4 as uuidv4 } from "uuid"

function createId(): string {
	return uuidv4()
}

export default {
	createId,
}
