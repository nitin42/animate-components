// @flow

// Single component
export type component = function;

// Animation components object
export type Components = {
	[property: string]: component
}