import { Schema } from 'prosemirror-model';
import { Transaction } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { Command } from 'prosemirror-commands';
import { ToastMark } from '@toast-ui/toastmark';
import { Emitter } from './event';

export interface Context {
  schema: Schema;
  eventEmitter: Emitter;
}

export interface MdContext extends Context {
  toastMark: ToastMark;
}

export interface SpecContext extends Context {
  view: EditorView;
}

export interface MdSpecContext extends SpecContext {
  toastMark: ToastMark;
}

type DefaultPayload = Record<string, any>;
type Payload<T> = T extends infer P ? P : any;

export type Dispatch = (tr: Transaction) => void;
export type EditorCommand<T = DefaultPayload> = (payload?: Payload<T>) => Command;
export type EditorCommandMap<T = DefaultPayload> = Record<string, EditorCommand<T>>;
export type EditorCommandFn<T = DefaultPayload> = (payload?: Payload<T>) => boolean | void;
export type EditorAllCommandMap<T = DefaultPayload> = Record<string, EditorCommandFn<T>>;