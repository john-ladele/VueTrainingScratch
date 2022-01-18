function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
        };
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHealth < 0) { //sets bar to empty rather than a negative value
                return { width: '0%' };
            }
            return {
                width: this.monsterHealth + '%'
            };
        },
        playerBarStyles() {
            if (this.playerHealth < 0) { //sets bar to empty rather than a negative value
                return { width: '0%' };
            }
            return {
                width: this.playerHealth + '%'
            };
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                // A draw
                this.winner = 'draw';
            } else if (value <= 0) {
                // Player Lost
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                // A draw
                this.winner = 'draw';
            } else if (value <= 0) {
                //Monster Lost
                this.winner = 'player';
            }
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
        healPlayer() {
            const healthAddUp = getRandomValue(8, 20);
            if (this.playerHealth + healthAddUp > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healthAddUp;
            }
        },
        surrender() {
            this.winner = 'monster';
        },
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
        }
    }
}).mount('#game');