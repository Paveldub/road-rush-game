// default config
import { game } from '../../index';

// Game images and sprites
import cars from '../../assets/cars.png';
import line from '../../assets/line.png';
import road from '../../assets/road.jpg';

// Game Classes Contstructor
import Road from './road';

export default class Level1 extends Phaser.Scene {
	constructor() {
		super({
			key: 'Level1'
		});
	}

	// load our images or sounds
	preload() {
		this.load.image('road', road);
		this.load.spritesheet('cars', cars, {
			frameWidth: 60,
			frameHeight: 126
		});
		this.load.image('line', line);
	}

	// define our objects
	create() {
		this.road = new Road({ scene: this });
		this.road.x = game.config.width / 2;
		this.road.makeLines();
	}

	// constant running loop
	update() {
		this.road.moveLines();
	}
}
