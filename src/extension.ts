// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import JpqlParser from './antlr4/JpqlParser';
import { CharStreams, CommonTokenStream, RuleNode } from 'antlr4';
import JpqlLexer from './antlr4/JpqlLexer';
import JpqlVisitor from './antlr4/JpqlVisitor';

class CustomVisitor extends JpqlVisitor<string | undefined> {
	visitChildren(ctx: RuleNode) {
	  if (!ctx) {
		return;
	  }
	  else {
		console.log(ctx.getText());
		return super.visitChildren(ctx);
	  }
	}
  }

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		let str = "select v.name from vendor v where v.id = 1";
		let inputStream = CharStreams.fromString(str);
		let lexer = new JpqlLexer(inputStream);
		let tokenStream = new CommonTokenStream(lexer);
		let parser = new JpqlParser(tokenStream);
		let tree = parser.start();
		tree.accept(new CustomVisitor());
		vscode.window.showInformationMessage('Hello World from HelloWorld!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
