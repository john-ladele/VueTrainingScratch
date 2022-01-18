function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
        };
    },
    computed: {
        monsterBarStyles() {
            return {
                width: this.monsterHealth + '%'
            };
        },
        playerBarStyles() {
            return {
                width: this.playerHealth + '%'
            };
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0
        }
    },
    methods: {
        //actions we support in our vue application
        attackMonster() { //math.floor rounds up the result to prevent decimals
            this.currentRound++;
            const attackValue = getRandomValue(5, 12); //this calculates random numbers between 5(min) and 12(max)
            this.monsterHealth = this.monsterHealth - attackValue;
            this.attackPlayer(); //since it's an auto attack on player when monster is attacked, we then call the attackPlayer method here so it is applied everytime the monster is attacked!
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15); //this calculates random numbers between 8(min) and 15(max) bcos the monster hits harder
            this.playerHealth -= attackValue;
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(10, 25); //special damage
            this.monsterHealth = this.monsterHealth - attackValue;
            this.attackPlayer();
        },
        playerHealth() {
            const healthAddUp = getRandomValue(2, 7);
            this.playerHealth += healthAddUp;
        },
        surrender() {
            this.playerHealth = 0;
            alert('Game over! You Lose...')
        }
    }
}).mount('#game');