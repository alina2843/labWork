import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Greeting Plugin is now active!');

  const disposable =
      vscode.commands.registerCommand('greeting-plugin.helloWorld', () => {
        vscode.window.showInformationMessage(
            'Привет, пользователь! Добро пожаловать в VS Code!');
      });

  context.subscriptions.push(disposable);
}

export function deactivate() {}