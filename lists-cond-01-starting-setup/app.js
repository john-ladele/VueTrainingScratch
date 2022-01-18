const app = Vue.createApp({
    data() {
        return {
            enteredGoalValue: '',
            goals: []
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredGoalValue);
            this.enteredGoalValue = "";
            if (goals.length === 0) {

            };
        },

    }
});

app.mount('#user-goals');