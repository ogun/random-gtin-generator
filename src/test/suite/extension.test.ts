import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import { getGTIN } from '../../gtinGenerator';
import { isValid } from 'gtin'


suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('validate random 100 GTINs', () => {
		for (let i = 0; i < 100; i++) {
			let randomGTIN = getGTIN();
			assert.ok(isValid(randomGTIN));
		}
	});
});
