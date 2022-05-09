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
		en: { default: '`', shift: '~', shiftCaps: '~', caps: '`' },
		ru: { default: 'ё', shift: 'Ё', shiftCaps: 'Ё', caps: 'Ё' },
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
		en: { default: 'q', shift: 'Q', shiftCaps: 'q', caps: 'Q' },
		ru: { default: 'й', shift: 'Й', shiftCaps: 'й', caps: 'Й' },
	},
	KeyW: {
		en: { default: 'w', shift: 'W', shiftCaps: 'w', caps: 'W' },
		ru: { default: 'ц', shift: 'Ц', shiftCaps: 'ц', caps: 'Ц' },
	},

	KeyE: {
		en: { default: 'e', shift: 'E', shiftCaps: 'e', caps: 'E' },
		ru: { default: 'у', shift: 'У', shiftCaps: 'у', caps: 'У' },
	},
	KeyR: {
		en: { default: 'r', shift: 'R', shiftCaps: 'r', caps: 'R' },
		ru: { default: 'к', shift: 'К', shiftCaps: 'к', caps: 'К' },
	},
	KeyT: {
		en: { default: 't', shift: 'T', shiftCaps: 't', caps: 'T' },
		ru: { default: 'е', shift: 'Е', shiftCaps: 'е', caps: 'Е' },
	},
	KeyY: {
		en: { default: 'y', shift: 'Y', shiftCaps: 'y', caps: 'Y' },
		ru: { default: 'н', shift: 'Н', shiftCaps: 'н', caps: 'Н' },
	},
	KeyU: {
		en: { default: 'u', shift: 'U', shiftCaps: 'u', caps: 'U' },
		ru: { default: 'г', shift: 'Г', shiftCaps: 'г', caps: 'Г' },
	},
	KeyI: {
		en: { default: 'i', shift: 'I', shiftCaps: 'i', caps: 'I' },
		ru: { default: 'ш', shift: 'Ш', shiftCaps: 'ш', caps: 'Ш' },
	},
	KeyO: {
		en: { default: 'o', shift: 'O', shiftCaps: 'o', caps: 'O' },
		ru: { default: 'щ', shift: 'Щ', shiftCaps: 'щ', caps: 'Щ' },
	},
	KeyP: {
		en: { default: 'p', shift: 'P', shiftCaps: 'p', caps: 'P' },
		ru: { default: 'з', shift: 'З', shiftCaps: 'з', caps: 'З' },
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
		en: { default: '\\', shift: '|', shiftCaps: '/', caps: '\\' },
		ru: { default: '\\', shift: '|', shiftCaps: '/', caps: '\\' },
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
		en: { default: 'a', shift: 'A', shiftCaps: 'a', caps: 'A' },
		ru: { default: 'ф', shift: 'Ф', shiftCaps: 'ф', caps: 'Ф' },
	},
	KeyS: {
		en: { default: 's', shift: 'S', shiftCaps: 's', caps: 'S' },
		ru: { default: 'ы', shift: 'Ы', shiftCaps: 'ы', caps: 'Ы' },
	},
	KeyD: {
		en: { default: 'd', shift: 'D', shiftCaps: 'd', caps: 'D' },
		ru: { default: 'в', shift: 'В', shiftCaps: 'в', caps: 'В' },
	},
	KeyF: {
		en: { default: 'f', shift: 'F', shiftCaps: 'f', caps: 'F' },
		ru: { default: 'а', shift: 'А', shiftCaps: 'а', caps: 'А' },
	},
	KeyG: {
		en: { default: 'g', shift: 'G', shiftCaps: 'g', caps: 'G' },
		ru: { default: 'п', shift: 'П', shiftCaps: 'п', caps: 'П' },
	},
	KeyH: {
		en: { default: 'h', shift: 'H', shiftCaps: 'h', caps: 'H' },
		ru: { default: 'р', shift: 'Р', shiftCaps: 'р', caps: 'Р' },
	},
	KeyJ: {
		en: { default: 'j', shift: 'J', shiftCaps: 'j', caps: 'J' },
		ru: { default: 'о', shift: 'О', shiftCaps: 'о', caps: 'О' },
	},
	KeyK: {
		en: { default: 'k', shift: 'K', shiftCaps: 'k', caps: 'K' },
		ru: { default: 'л', shift: 'Л', shiftCaps: 'л', caps: 'Л' },
	},
	KeyL: {
		en: { default: 'l', shift: 'L', shiftCaps: 'l', caps: 'L' },
		ru: { default: 'д', shift: 'Д', shiftCaps: 'д', caps: 'Д' },
	},
	Semicolon: {
		en: { default: ';', shift: ':', shiftCaps: ';', caps: ';' },
		ru: { default: 'ж', shift: 'Ж', shiftCaps: 'ж', caps: 'Ж' },
	},
	Quote: {
		en: { default: '\'', shift: '"', shiftCaps: '\'', caps: '\'' },
		ru: { default: 'э', shift: 'Э', shiftCaps: 'э', caps: 'Э' },
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
		en: { default: 'z', shift: 'Z', shiftCaps: 'z', caps: 'Z' },
		ru: { default: 'я', shift: 'Я', shiftCaps: 'я', caps: 'Я' },
	},
	KeyX: {
		en: { default: 'x', shift: 'X', shiftCaps: 'x', caps: 'X' },
		ru: { default: 'ч', shift: 'Ч', shiftCaps: 'ч', caps: 'Ч' },
	},
	KeyC: {
		en: { default: 'c', shift: 'C', shiftCaps: 'c', caps: 'C' },
		ru: { default: 'с', shift: 'С', shiftCaps: 'с', caps: 'С' },
	},
	KeyV: {
		en: { default: 'v', shift: 'V', shiftCaps: 'v', caps: 'V' },
		ru: { default: 'м', shift: 'М', shiftCaps: 'м', caps: 'М' },
	},
	KeyB: {
		en: { default: 'b', shift: 'B', shiftCaps: 'b', caps: 'B' },
		ru: { default: 'и', shift: 'И', shiftCaps: 'и', caps: 'И' },
	},
	KeyN: {
		en: { default: 'n', shift: 'N', shiftCaps: 'n', caps: 'N' },
		ru: { default: 'т', shift: 'Т', shiftCaps: 'т', caps: 'Т' },
	},
	KeyM: {
		en: { default: 'm', shift: 'M', shiftCaps: 'm', caps: 'M' },
		ru: { default: 'ь', shift: 'Ь', shiftCaps: 'ь', caps: 'Ь' },
	},
	Comma: {
		en: { default: ',', shift: '<', shiftCaps: '<', caps: ',' },
		ru: { default: 'б', shift: 'Б', shiftCaps: 'б', caps: 'Б' },
	},
	Period: {
		en: { default: '.', shift: '>', shiftCaps: '>', caps: '.' },
		ru: { default: 'ю', shift: 'Ю', shiftCaps: 'ю', caps: 'Ю' },
	},
	Slash: {
		en: { default: '/', shift: '?', shiftCaps: '?', caps: '/' },
		ru: { default: '.', shift: ',', shiftCaps: ',', caps: '.' },
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