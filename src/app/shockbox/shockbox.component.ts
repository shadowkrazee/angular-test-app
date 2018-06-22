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
    this.ctx.translate(0, this.canvasRef.nativeElement.width);
  }
  strikeLightning() {
    console.log('Logging!');
  }
}
