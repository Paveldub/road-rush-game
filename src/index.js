import Phaser from 'phaser';
import Game from './app/js/game';

export let game;

export var config = {
	type: Phaser.AUTO,
	width: 480,
	height: 640,
	scale: {
		scale: 'SHOW_ALL',
		orientation: 'LANDSCAPE'
	},
	resolution: window.devicePixelRatio,
	pixelArt: true,
	physics: {
		default: 'arcade',
		arcade: {
			debug: true,
			gravity: {
				y: 500
			}
		}
	},
	scene: [ Game ]
};

game = new Phaser.Game(config);
