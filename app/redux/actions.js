/*
 * Actions and corresponding Creators.
 */

/* NOTE

All actions should follow the Flux Standard Action structure. In short:

An action MUST
	be a plain JavaScript object.
	have a type property.

An action MAY
	have a error property.
	have a payload property.
	have a meta property.

An action MUST NOT include properties other than type, payload, and error, and meta.

*/

export const COUNTER_ADD = 'COUTER_ADD';
export function counterAdd() {
	return {
		type: COUNTER_ADD
	}
};