const defaultCharacter = {
    name: '', // Character Name
    life: 1, // Character Life
    maxLife: 1, // Character Max Life
    attack: 0, // Character Attack
    defense: 0 // Character Defense
}

const createKnight = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}

const createSorcerer = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 50,
        maxLife: 50,
        attack: 14,
        defense: 3
    }
}

const createLittleMonster = () => {
    return {
        ...defaultCharacter,
        name: 'Little Monster',
        life: 40,
        maxLife: 40,
        attack: 4,
        defense: 4 
    }
}

const createBigMonster = () => {
    return {
        ...defaultCharacter,
        name: 'Big Monster',
        life: 120,
        maxLife: 120,
        attack: 16,
        defense: 6
    }
}

// Responsible for the entire operation of the game
const stage = {
    fighter1: null, // Lutador 1
    fighter2: null, // Lutador 2
    fighter1El: null, // Elemento HTML do Lutador 1
    fighter2El: null, // Elemento HTML do Lutador 2
    
    start(fighter1, fighter2, fighter1El, fighter2El) {
        // Initializes the wrestlers and their HTML elements
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;

        let audioPlay = document.getElementById('player_audio');
        let monsterAudioPlay = document.getElementById('monster_audio');

        // Adds a click event listener to Fighter 1 attack button
        this.fighter1El.querySelector('.attack_button').addEventListener('click', () => {
            // Performs Fighter 1's attack on Fighter 2
            this.doAttack(this.fighter1, this.fighter2);
            audioPlay.play();
            document.querySelector('.button_position').style.display = 'none';

            // Waits 3 seconds, then executes Fighter 2 attack on Fighter 1
            setTimeout(() => this.doAttack(this.fighter2, this.fighter1), 3000);

            // Checks if either fighter is dead before returning audio monster
            if (fighter1.life > 0 && fighter2.life > 0) {
                setTimeout(() => monsterAudioPlay.play(), 2999);
                return
            }    
        });
        // Updates the game's interface
        this.update();
    },

    update() {
        // Fighter 1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`;

        // Fighter 2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`;

        document.querySelector('.button_position').style.display = 'flex';
    },
    
    // Function to attack one fighter against another
    doAttack(attacking, attacked) {
        let battleLog = document.querySelector('.battle_log');

        // Check if any fighters are dead before attacking
        if (attacking.life <= 0 || attacked.life <= 0) {
            log.addMessage('Alguém tá morto, não pode atacar.'); // Checks if any fighter is dead and displays error message
            battleLog.innerHTML = 'Alguém tá morto, não pode atacar.';
            document.querySelector('.battle_log').style.backgroundColor = 'white';
            document.querySelector('.button_position').style.display = 'none';
            document.querySelector('.restart').style.display = 'flex';
            return;
        }
        
        // Calculates the attacker's and defender's attack and defense factor and upgrades fighters' lives
        const attackFactor = (Math.random() * 2).toFixed(2);
        const defenseFactor = (Math.random() * 2).toFixed(2);

        const actualAttack = attacking.attack * attackFactor; // Current Attack Considering Attack Factor
        const actualDefense = attacked.defense * defenseFactor; // Current Defense Considering the Defense Factor

        // Checks if the attack hit or defended the defender and upgrades the fighters' lives
        if (actualAttack > actualDefense) {
            attacked.life -= actualAttack;
            attacked.life = attacked.life < 0 ? 0 : attacked.life;
            log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`);
            battleLog.innerHTML = `${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`;
            document.querySelector('.battle_log').style.backgroundColor = 'green';
        } else {
            log.addMessage(`${attacked.name} conseguiu defender...`);
            battleLog.innerHTML = `${attacked.name} conseguiu defender...`;
            document.querySelector('.battle_log').style.backgroundColor = 'red';
        }
        // Updates the game's interface
        this.update();
    }
}

// Responsible for displaying the messages in the game log
const log = {
    list: [],
    addMessage(msg) {
        this.list.push(msg);
        this.render();
    },

    // Renders the messages in the game log
    render() {
        const logEl = document.querySelector('.log');
        logEl.innerHTML = '';

        for (let i in this.list) {
            logEl.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
}