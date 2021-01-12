import { USER_ACTION } from './../../util/Redux'
export interface ILoadUser {
	readonly type: USER_ACTION.LOAD_USER
}

export type UserAction = ILoadUser
