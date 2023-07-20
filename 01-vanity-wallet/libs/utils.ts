import crypto from 'crypto';
import { ethers } from 'ethers';
import * as secp256k1 from '@noble/secp256k1';

var getRandomWallet = () => {
	var randomBytes = crypto.randomBytes(32);
	var wallet = new ethers.BaseWallet(new ethers.SigningKey(randomBytes));
	return {
		address: wallet.address,
		privateKey: randomBytes.toString('hex'),
	};
};

var isValidHex = (hex: string) => {
	if (!hex.length) return true;
	hex = hex.toUpperCase();
	var re = /[^0X][0-9A-F]+$/g;
	return re.test(hex);
};

var isChecksum = (address: string) => {
	return ethers.isAddress(address);
};

const wallet = getRandomWallet();

console.log(wallet);
console.log('Valid', isValidHex(wallet.address));
console.log('Checksum', isChecksum(wallet.address));

export { getRandomWallet, isValidHex, isChecksum };
