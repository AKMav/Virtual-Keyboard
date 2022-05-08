export const keyId = [
	['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
	['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', `Backslash`, 'Delete'],
	['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
	['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
	['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
];

export const keyValues = {
	// row 0
	Backquote: {
		en: { default: '`', shift: '~', caps: '`' },
		ru: { default: 'ё', shift: 'Ё', caps: 'Ё' },
	},
	Digit1: {
		en: { default: '1', shift: '!', caps: '1' },
		ru: { default: '1', shift: '!', caps: '1' },
	},
	Digit2: {
		en: { default: '2', shift: '"', caps: '2' },
		ru: { default: '2', shift: '@', caps: '2' },
	},
	Digit3: {
		en: { default: '3', shift: '#', caps: '3' },
		ru: { default: '3', shift: '№', caps: '3' },
	},
	Digit4: {
		en: { default: '4', shift: '$', caps: '4' },
		ru: { default: '4', shift: ';', caps: '4' },
	},
	Digit5: {
		en: { default: '5', shift: '%', caps: '5' },
		ru: { default: '5', shift: '%', caps: '5' },
	},
	Digit6: {
		en: { default: '6', shift: '^', caps: '6' },
		ru: { default: '6', shift: ':', caps: '6' },
	},
	Digit7: {
		en: { default: '7', shift: '&', caps: '7' },
		ru: { default: '7', shift: '?', caps: '7' },
	},
	Digit8: {
		en: { default: '8', shift: '*', caps: '8' },
		ru: { default: '8', shift: '*', caps: '8' },
	},
	Digit9: {
		en: { default: '9', shift: '(', caps: '9' },
		ru: { default: '9', shift: '(', caps: '9' },
	},
	Digit0: {
		en: { default: '0', shift: ')', caps: '0' },
		ru: { default: '0', shift: ')', caps: '0' },
	},
	Minus: {
		en: { default: '-', shift: '_', caps: '-' },
		ru: { default: '-', shift: '_', caps: '-' },
	},
	Equal: {
		en: { default: '=', shift: '+', },
		ru: { default: '=', shift: '+', },
	},
	Backspace: {
		en: { default: 'Backspace', shift: 'Backspace', caps: 'Backspace' },
		ru: { default: 'Backspace', shift: 'Backspace', caps: 'Backspace' },
	},
	// row 1
	Tab: {
		en: { default: 'Tab', shift: 'Tab', caps: 'Tab', },
		ru: { default: 'Tab', shift: 'Tab', caps: 'Tab', },
	},
	KeyQ: {
		en: { default: 'q', shift: 'Q', caps: 'Q' },
		ru: { default: 'й', shift: 'Й', caps: 'Й' },
	},
	KeyW: {
		en: { default: 'w', shift: 'W', caps: 'W' },
		ru: { default: 'ц', shift: 'Ц', caps: 'W' },
	},

	KeyE: {
		en: { default: 'e', shift: 'E', caps: 'E' },
		ru: { default: 'у', shift: 'У', caps: 'У' },
	},
	KeyR: {
		en: { default: 'r', shift: 'R', caps: 'R' },
		ru: { default: 'к', shift: 'К', caps: 'К' },
	},
	KeyT: {
		en: { default: 't', shift: 'T', caps: 'T' },
		ru: { default: 'е', shift: 'Е', caps: 'Е' },
	},
	KeyY: {
		en: { default: 'y', shift: 'Y', caps: 'Y' },
		ru: { default: 'н', shift: 'Н', caps: 'Н' },
	},
	KeyU: {
		en: { default: 'u', shift: 'U', caps: 'U' },
		ru: { default: 'г', shift: 'Г', caps: 'Г' },
	},
	KeyI: {
		en: { default: 'i', shift: 'I', caps: 'I' },
		ru: { default: 'ш', shift: 'Ш', caps: 'Ш' },
	},
	KeyO: {
		en: { default: 'o', shift: 'O', caps: 'O' },
		ru: { default: 'щ', shift: 'Щ', caps: 'Щ' },
	},
	KeyP: {
		en: { default: 'p', shift: 'P', caps: 'P' },
		ru: { default: 'з', shift: 'З', caps: 'З' },
	},
	BracketLeft: {
		en: { default: '[', shift: '{', caps: '[' },
		ru: { default: '[', shift: '{', caps: '[' },
	},
	BracketRight: {
		en: { default: ']', shift: '}', caps: ']' },
		ru: { default: ']', shift: '}', caps: ']' },
	},
	Backslash: {
		en: { default: '\\', shift: '|', caps: '\\' },
		ru: { default: '\\', shift: '|', caps: '\\' },
	},
	Delete: {
		en: { default: 'Delete', shift: 'Delete', caps: 'Delete' },
		ru: { default: 'Delete', shift: 'Delete', caps: 'Delete' },
	},
	// row 2
	CapsLock: {
		en: { default: 'CapsLock', shift: 'CapsLock', caps: 'CapsLock' },
		ru: { default: 'CapsLock', shift: 'CapsLock', caps: 'CapsLock' },
	},
	KeyA: {
		en: { default: 'a', shift: 'A', caps: 'A' },
		ru: { default: 'ф', shift: 'Ф', caps: 'Ф' },
	},
	KeyS: {
		en: { default: 's', shift: 'S', caps: 'S' },
		ru: { default: 'ы', shift: 'Ы', caps: 'Ы' },
	},
	KeyD: {
		en: { default: 'd', shift: 'D', caps: 'D' },
		ru: { default: 'в', shift: 'В', caps: 'В' },
	},
	KeyF: {
		en: { default: 'f', shift: 'F', caps: 'F' },
		ru: { default: 'а', shift: 'А', caps: 'А' },
	},
	KeyG: {
		en: { default: 'g', shift: 'G', caps: 'G' },
		ru: { default: 'п', shift: 'П', caps: 'П' },
	},
	KeyH: {
		en: { default: 'h', shift: 'H', caps: 'H' },
		ru: { default: 'р', shift: 'Р', caps: 'Р' },
	},
	KeyJ: {
		en: { default: 'j', shift: 'J', caps: 'J' },
		ru: { default: 'о', shift: 'О', caps: 'О' },
	},
	KeyK: {
		en: { default: 'k', shift: 'K', caps: 'K' },
		ru: { default: 'л', shift: 'Л', caps: 'Л' },
	},
	KeyL: {
		en: { default: 'l', shift: 'L', caps: 'L' },
		ru: { default: 'д', shift: 'Д', caps: 'Д' },
	},
	Semicolon: {
		en: { default: ';', shift: ':', caps: ';' },
		ru: { default: 'ж', shift: 'Ж', caps: 'Ж' },
	},
	Quote: {
		en: { default: '\'', shift: '"', caps: '\'' },
		ru: { default: 'э', shift: 'Э', caps: 'Э' },
	},
	Enter: {
		en: { default: 'Enter', shift: 'Enter', caps: 'Enter' },
		ru: { default: 'Enter', shift: 'Enter', caps: 'Enter' },
	},
	// row 3
	ShiftLeft: {
		en: { default: 'Shift', shift: 'Shift', caps: 'Shift' },
		ru: { default: 'Shift', shift: 'Shift', caps: 'Shift' },
	},
	KeyZ: {
		en: { default: 'z', shift: 'Z', caps: 'Z' },
		ru: { default: 'я', shift: 'Я', caps: 'Я' },
	},
	KeyX: {
		en: { default: 'x', shift: 'X', caps: 'X' },
		ru: { default: 'ч', shift: 'Ч', caps: 'Ч' },
	},
	KeyC: {
		en: { default: 'c', shift: 'C', caps: 'C' },
		ru: { default: 'с', shift: 'С', caps: 'С' },
	},
	KeyV: {
		en: { default: 'v', shift: 'V', caps: 'V' },
		ru: { default: 'м', shift: 'М', caps: 'М' },
	},
	KeyB: {
		en: { default: 'b', shift: 'B', caps: 'B' },
		ru: { default: 'и', shift: 'И', caps: 'И' },
	},
	KeyN: {
		en: { default: 'n', shift: 'N', caps: 'N' },
		ru: { default: 'т', shift: 'Т', caps: 'Т' },
	},
	KeyM: {
		en: { default: 'm', shift: 'M', caps: 'M' },
		ru: { default: 'ь', shift: 'Ь', caps: 'Ь' },
	},
	Comma: {
		en: { default: ',', shift: '<', caps: ',' },
		ru: { default: 'б', shift: 'Б', caps: 'Б' },
	},
	Period: {
		en: { default: '.', shift: '>', caps: '.' },
		ru: { default: 'ю', shift: 'Ю', caps: 'Ю' },
	},
	Slash: {
		en: { default: '/', shift: '?', caps: '/' },
		ru: { default: '.', shift: ',', caps: '.' },
	},
	ArrowUp: {
		en: { default: '▲', shift: '▲', caps: '▲' },
		ru: { default: '▲', shift: '▲', caps: '▲' },
	},
	ShiftRight: {
		en: { default: 'Shift', shift: 'Shift', caps: 'Shift' },
		ru: { default: 'Shift', shift: 'Shift', caps: 'Shift' },
	},
	// row 4
	// ► ▼ ◄ 
	ControlLeft: {
		en: { default: 'Ctrl', shift: 'Ctrl', caps: 'Ctrl' },
		ru: { default: 'Ctrl', shift: 'Ctrl', caps: 'Ctrl' },
	},
	MetaLeft: {
		en: { default: 'Win', shift: 'Win', caps: 'Win' },
		ru: { default: 'Win', shift: 'Win', caps: 'Win' },
	},
	AltLeft: {
		en: { default: 'Alt', shift: 'Alt', caps: 'Alt' },
		ru: { default: 'Alt', shift: 'Alt', caps: 'Alt' },
	},
	Space: {
		en: { default: '', shift: '', caps: '' },
		ru: { default: '', shift: '', caps: '' },
	},
	AltRight: {
		en: { default: 'Alt', shift: 'Alt', caps: 'Alt' },
		ru: { default: 'Alt', shift: 'Alt', caps: 'Alt' },
	},
	ArrowLeft: {
		en: { default: '◄', shift: '◄', caps: '◄' },
		ru: { default: '◄', shift: '◄', caps: '◄' },
	},
	ArrowDown: {
		en: { default: '▼', shift: '▼', caps: '▼' },
		ru: { default: '▼', shift: '▼', caps: '▼' },
	},
	ArrowRight: {
		en: { default: '►', shift: '►', caps: '►' },
		ru: { default: '►', shift: '►', caps: '►' },
	},
	ControlRight: {
		en: { default: 'Ctrl', shift: 'Ctrl', caps: 'Ctrl' },
		ru: { default: 'Ctrl', shift: 'Ctrl', caps: 'Ctrl' },
	},
}