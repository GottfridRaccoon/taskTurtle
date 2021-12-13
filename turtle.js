class Turtle {
	constructor() {
		this.run = 0
		this.counter = 0
	}
	upAtMorning() {
		this.run += 50
	}
	downAtNight() {
		this.run -= 30
	}
}
class RunCount extends Turtle {
	constructor(run, counter) {
		super(run, counter)
	}

	countDays = () => {

		for (let i = 0; this.run < 100; i++) {
			super.upAtMorning()
			super.downAtNight()
			++this.counter
		}

		console.log(this.counter)
	}
}

let count = new RunCount()
count.countDays()
