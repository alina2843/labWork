import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
  console.log('Greeting Plugin is now active!');

  // Приветствие при запуске VS Code
  vscode.window.showInformationMessage(
      'Привет, пользователь! Добро пожаловать в VS Code!');

  // Команда, которую можно вызвать вручную
  const disposable =
      vscode.commands.registerCommand('greeting-plugin.helloWorld', () => {
        vscode.window.showInformationMessage(
            'Ты снова вызвал команду приветствия!');
      });

  context.subscriptions.push(disposable);
}
