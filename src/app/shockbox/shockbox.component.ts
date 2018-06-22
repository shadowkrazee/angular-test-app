import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-shockbox',
	templateUrl: './shockbox.component.html',
	styleUrls: ['./shockbox.component.css']
})
export class ShockboxComponent implements OnInit {
	@ViewChild('lightningCanvas') canvasRef: ElementRef;
	// canvasRef: ElementRef;
	ctx: CanvasRenderingContext2D;

	constructor() {}

	ngOnInit() {
		// this.canvas = document.getElementById('canvas');
		this.ctx = this.canvasRef.nativeElement.getContext('2d');
		// this.ctx.translate(0, this.canvasRef.nativeElement.height / 2);
		this.strikeLightning();
	}
	strikeLightning() {
		console.log('Logging!');
		this.ctx.fillRect(0, 0, 5, 5);
		this.ctx.lineWidth = 2;
		this.ctx.strokeStyle = 'red';
		this.ctx.beginPath();
		this.ctx.moveTo(110, 110);
		this.ctx.lineTo(350, 0);
		this.ctx.lineTo(50, 250);
		this.ctx.lineTo(0, 50);
		this.ctx.lineTo(299, 450);
		this.ctx.stroke();
	}
}
