Vue.createApp({
    data() {
        return {
            boxAselected: false,
            boxBselected: false,
            boxCselected: false,

        };
    },
    computed: {
        boxAclasses() {
            return {
                active: this.boxAselected
            };
        },
        boxBclasses() {
            return {
                active: this.boxBselected
            };
        },
        boxCclasses() {
            return {
                active: this.boxCselected
            };
        }
    },
    methods: {
        boxSelected(box) {
            if (box === 'A') {
                this.boxAselected = !this.boxAselected;
            } else if (box === 'B') {
                this.boxBselected = !this.boxBselected;
            } else if (box === 'C') {
                this.boxCselected = !this.boxCselected;
            }
        }
    }
}).mount('#styling');