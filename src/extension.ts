import * as vscode from 'vscode'
import { FileExplorer } from './fileExplorer'

export function activate(context: vscode.ExtensionContext) {
  // eslint-disable-next-line no-new
  new FileExplorer(context)
}

export function deactivate() {}
