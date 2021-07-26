Vue.createApp({
    data() {
        return {
            courseGoalA: "Finish the course and learn!",
            courseGoalB: "Master Vue and build amazing apps",
            vueLink: "https://www.thecoder.net"
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
}).mount("#user-goal");