import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-cryptic',
	templateUrl: './cryptic.component.html',
	styleUrls: ['./cryptic.component.css']
})
export class CrypticComponent implements OnInit {
	plaintext: string;
	cyphertext: string;
	chars: string[];
	constructor() {}
	ngOnInit() {
		this.plaintext = '';
		this.cyphertext = '';
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
			split.forEach(function(char) {
				cpchars.forEach(function(current, index) {
					if (char === current) {
						charpos = index;
						// console.log('p ' + charpos);
						corrpos = (19 * (charpos - 11)) % 37;
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
			split.forEach(function(char) {
				cpchars.forEach(function(current, index) {
					if (char === current) {
						charpos = index;
						// console.log('p: ' + charpos);
						corrpos = (2 * charpos + 11) % 37;
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
}
