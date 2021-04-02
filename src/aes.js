var aesjs = require("aes-js");
// An example 128-bit key (16 bytes * 8 bits/byte = 128 bits)
var key = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function aesEncyrpt(text) {
	var textBytes = aesjs.utils.utf8.toBytes(text);
	var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
	var encryptedBytes = aesCtr.encrypt(textBytes);
	var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
	return encryptedHex;
}

function aesDecrypt(textHex) {
	var encryptedBytes = aesjs.utils.hex.toBytes(textHex);

	var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
	var decryptedBytes = aesCtr.decrypt(encryptedBytes);
	var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
	return decryptedText;
}
export const aesDecrypt;
export const aesEncyrpt;
