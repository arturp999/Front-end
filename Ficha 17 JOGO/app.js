new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: [],
        turn: 1,

    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = []
        },

        calculateDamage: function(a, b) {
            var damage = Math.max(Math.floor(Math.random() * b) + 1, a)
            if (damage == 10) {
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Player Criticallll for ' + damage
                });
            }
            if (this.monsterHealth <= 0) {
                this.gameIsRunning = false;
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Player Wins'
                });
                return;
            }
            if (this.playerHealth <= 0) {
                this.gameIsRunning = false;
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Monster Wins'
                });
                return;
            }
            return damage
        },

        MonsterAttack: function() {
            var damage = this.calculateDamage(5, 9);
            this.playerHealth -= damage
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits player for ' + damage,
                id: Math.random()
            });
            if (this.checkWin()) {
                return;
            }
        },

        attack: function() {
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + damage,
                id: Math.random()
            });
            this.MonsterAttack()
            if (this.checkWin()) {
                return;
            }
        },

        specialAttack: function() {
            var damage = this.calculateDamage(15, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + damage + ' special DMG',
                id: Math.random()
            });
            if (this.checkWin()) {
                return;
            }
            var heal = this.calculateDamage(10, 25);
            this.monsterHealth += heal;
            if (this.monsterHealth >= 100) {
                this.monsterHealth = 100
            }

            this.turns.unshift({
                isPlayer: false,
                text: 'Monster heals for ' + heal,
                id: Math.random()
            });

        },

        heal: function() {
            var heal = this.calculateDamage(15, 20);
            this.playerHealth += heal;
            if (this.playerHealth >= 100) {
                this.playerHealth = 100
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Your already full health ',
                    id: Math.random()
                });
                return
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player HEALS FOR ' + heal,
                id: Math.random()
            });

            var heal = this.calculateDamage(10, 15);
            this.monsterHealth += heal;
            if (this.monsterHealth >= 100) {
                this.monsterHealth = 100
            }
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster heals for ' + heal,
                id: Math.random()
            });
        },

        checkWin: function() {
            if (this.playerHealth <= 0) {
                this.playerHealth = 0,
                    this.turns.unshift({
                        text: 'MONSTER WINNSS BITCHESSS',
                        id: Math.random()
                    });
            }
            if (this.monsterHealth <= 0) {
                this.monsterHealth = 0,
                    this.turns.unshift({
                        isPlayer: true,
                        text: 'PLAYER WINS',
                        id: Math.random(),
                    });
            }
        },

        giveUp: function() {
            this.turns.unshift({
                isPlayer: true,
                text: 'player sucks so he surrenders',
                id: Math.random()
            });
            alert('Player deu surrender lol retard');
            this.gameIsRunning = false;
            return

        }
    }
});