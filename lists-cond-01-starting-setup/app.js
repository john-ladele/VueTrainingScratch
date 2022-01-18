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
        },
        //to delete an array from list, use SPLICE
        removeGoal(idx) { //idx -- same as index
            this.goals.splice(idx, 1);
        }

    }
});

app.mount('#user-goals');