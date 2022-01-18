const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            firstName: '',
            lastName: '',
            // name: ''
        };
    },
    computed: {
        fullname() {
            return this.firstName + ' ' + this.lastName;

        },
    },
    methods: {
        resetInput() {
            this.firstName = '';
            this.lastName = '';
        },
        addBtn() {
            this.counter++;
        },
        removeBtn() {
            this.counter--;
        }
    }
});

app.mount('#events');