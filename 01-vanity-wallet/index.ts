import * as secp256k1 from '@noble/secp256k1';
import { PrivateKeyword } from 'typescript';
import keccak from 'keccak';

type Bytes = Uint8Array;
type Hex = Bytes | string;
type PrivateKey = Hex | bigint;

const privateToAddress = (key: PrivateKey) => {
	const publicKey = secp256k1.getPublicKey(key);
	return keccak('keccak256')
		.update(Buffer.from(publicKey))
		.digest()
		.slice(-20)
		.toString('hex');
};
