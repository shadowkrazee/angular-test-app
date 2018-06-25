import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-cryptic',
	templateUrl: './cryptic.component.html',
	styleUrls: ['./cryptic.component.css']
})
export class CrypticComponent implements OnInit {
	keyA: number;
	keyB: number;
	keyX: number;
	keyM: number;
	plaintext: string;
	cyphertext: string;
	chars: string[];
	tries: string[];
	loops: number;
	first: boolean;
	original: string;
	constructor() {}
	ngOnInit() {
		this.keyA = -1;
		this.keyB = -1;
		this.keyX = -1;
		this.plaintext = '';
		this.cyphertext = '';
		this.loops = 0;
		this.first = true;
		this.tries = [];
		this.chars = [
			'a',
			'b',
			'c',
			'd',
			'e',
			'f',
			'g',
			'h',
			'i',
			'j',
			'k',
			'l',
			'm',
			'n',
			'o',
			'p',
			'q',
			'r',
			's',
			't',
			'u',
			'v',
			'w',
			'x',
			'y',
			'z',
			'0',
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
			' '
		];
		this.keyM = this.chars.length;
		this.findKeys();
	}
	findKeys() {
		console.log('finding keys');
		const Mfactors = this.getFactors(this.keyM);
		// calculating key A
		if (this.keyA === -1) {
			this.keyA = 2;
		} else {
			this.keyA++;
			var goodKey = false;
			while (!goodKey) {
				let Afactors = this.getFactors(this.keyA);
				let commonfactor = false;
				Afactors.forEach(element => {
					if (Mfactors.indexOf(element) > -1) {
						commonfactor = true;
					}
				});
				if (commonfactor) {
					this.keyA++;
				} else {
					goodKey = true;
				}
			}
		}
		// calculating key B
		console.log('key m:' + this.keyM);
		this.keyB = Math.floor(Math.random() * this.keyM);
		// calculate key X
		for (let z = 1; z < this.keyM; z++) {
			if ((this.keyA * z) % this.keyM === 1) {
				this.keyX = z;
			}
		}
	}
	getFactors(num: number) {
		var factors: number[] = [];
		for (let i = 1; i <= num; i++) {
			if (num % i === 0 && i !== 1 && i !== num) {
				factors.push(i);
			}
		}
		console.log(factors);
		return factors;
	}
	crypto(flag) {
		this.cyphertext = this.cyphertext.toLowerCase();
		let charpos;
		let corrpos;
		if (flag === 'd') {
			console.log('decrypting!');
			const decrypted = [];
			// decrypt here :
			const split = Array.from(this.cyphertext);
			const cpchars = this.chars;
			split.forEach(char => {
				cpchars.forEach((current, index) => {
					if (char === current) {
						charpos = index;
						// console.log('p ' + charpos);
						corrpos = (this.keyA * (charpos - this.keyB)) % this.keyM;
						if (corrpos < 0) {
							corrpos = 37 + corrpos;
						}
						// console.log('cp: ' + corrpos);
					}
				});
				decrypted.push(cpchars[corrpos]);
			});
			this.plaintext = decrypted.join('');
		} else {
			console.log('encrypting!');
			// do reverse, and encrypt here
			const encrypted = [];
			const split = Array.from(this.plaintext);
			const cpchars = this.chars;
			split.forEach(char => {
				cpchars.forEach((current, index) => {
					if (char === current) {
						charpos = index;
						// console.log('p: ' + charpos);
						corrpos = (this.keyX * charpos + this.keyB) % this.keyM;
						if (corrpos < 0) {
							corrpos = 37 + corrpos;
						}
						// console.log('cp: ' + corrpos);
					}
				});
				encrypted.push(cpchars[corrpos]);
			});
			this.cyphertext = encrypted.join('');
		}
	}

	findMatch() {
		if (this.first) {
			this.setOriginalPlaintext(this.plaintext);
			this.first = false;
		}
		this.loops = 0;
		var current;
		var match = false;
		while (!match) {
			this.crypto('e');
			current = this.cyphertext;
			if (current === this.getOriginalPlaintext()) {
				match = true;
			} else {
				this.tries.push(current);
				current = this.cyphertext;
				this.plaintext = current;
				this.loops++;
			}
		}
	}
	getOriginalPlaintext() {
		return this.original;
	}
	setOriginalPlaintext(text) {
		this.original = text;
	}
	reset() {
		this.loops = 0;
		this.first = true;
		this.tries = [];
	}
}
