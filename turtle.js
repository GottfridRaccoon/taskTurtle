class Turtle {
	running = true
	run = 0
	counter = 0



	checkRunning(val) {
		this.run += val
		if (this.run > 100) this.running = false

	}
	upAtMorning() {

		this.checkRunning(50)
		this.counter++
	}
	downAtNight() {
		this.checkRunning(-30)
	}
}
class RunCount extends Turtle {
	constructor(run, counter, running) {
		super(run, counter, running)
	}

	countDays = () => {

		for (let i = 1; this.running; i++) {
			super.upAtMorning()
			super.downAtNight()

		}

		console.log(this.counter)
	}
}

let count = new RunCount()
count.countDays()
