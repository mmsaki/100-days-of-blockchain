import { describe, expect, test } from '@jest/globals';
import { getRandomWallet, isChecksum, isValidHex } from '../libs/utils';

describe('It returns a wallet', () => {
	const wallet = getRandomWallet();

	test('should return address and private key', () => {
		expect(wallet.address).toBeDefined();
		expect(wallet.address).not.toBeUndefined();

		expect(wallet.privateKey).toBeDefined();
		expect(wallet.privateKey).not.toBeUndefined();
	});
	test('should return checksum address', () => {
		expect(isChecksum(wallet.address)).toBeTruthy();

		const invalidChecksum = '0x8Ba1f109551bD432803012645Ac136ddd64DBa72';
		expect(isChecksum(invalidChecksum)).toBeFalsy();
	});
});
