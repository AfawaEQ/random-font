import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand(
	  'random-font.changeFont',
	  () => {
		const fonts = [
		  'Cascadia Code',
		  'Consolas',
		  'Courier New',
		  'Fira Code',
		  'JetBrains Mono',
		  'Menlo',
		  'Monaco',
		  'Source Code Pro',
		  'Ubuntu Mono',
		  'Plushwie Font 1',
		  'Letmeshowyou',
		  'Wooper',
		  'Hollow House Demo',
		  'SDAsian',
		  'Preschool',
		  'Comunismo',
		  'codex',
		  'DIGIT LCD',
		  'Merkur Cyrillic'
		];
  
		const randomIndex = Math.floor(Math.random() * fonts.length);
		const newFont = fonts[randomIndex];
  
		vscode.workspace.getConfiguration().update('editor.fontFamily', newFont, vscode.ConfigurationTarget.Global);
		vscode.window.showInformationMessage(`Font changed to: ${newFont}`);
	  }
	);
  
	context.subscriptions.push(disposable);
  }
  
  export function deactivate() {}
