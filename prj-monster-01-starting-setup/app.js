function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
        };
    },
    methods: {
        //actions we support in our vue application
        attackMonster() { //math.floor rounds up the result to prevent decimals
            const attackValue = getRandomValue(5, 12); //this calculates random numbers between 5(min) and 12(max)
            this.monsterHealth = this.monsterHealth - attackValue;
            this.attackPlayer(); //since it's an auto attack on player when monster is attacked, we then call the attackPlayer method here so it is applied everytime the monster is attacked!
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15); //this calculates random numbers between 8(min) and 15(max) bcos the monster hits harder
            this.playerHealth -= attackValue;
        }
    }
}).mount('#game');