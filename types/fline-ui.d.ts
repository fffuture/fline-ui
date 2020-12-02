import Vue, { PluginObject } from 'vue'
import { FlineUIComponent } from './component'
import { FlineButton } from './button'

/** The version of fline-ui */
export const version: string

export function install(vue: typeof Vue): void

/** FlineUI component common definition */
export type Component = FlineUIComponent

/** Button Component */
export class Button extends FlineButton { }
