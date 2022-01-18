Vue.createApp({
    data() {
        return {
            userInputClass: '',
            inputBg: '',
            paraIsVisible: true
        };
    },
    computed: {
        inputClass() {
            return {
                user1: this.userInputClass === 'user1',
                user2: this.userInputClass === 'user2',
                visible: this.paraIsVisible,
                hidden: !this.paraIsVisible,
            };
        }
    },
    methods: {
        togglePara() {
            this.paraIsVisible = !this.paraIsVisible;
        }
    },
}).mount('#assignment');