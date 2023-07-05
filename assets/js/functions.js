const defaultCharacter = {
    name: '', // Nome do personagem
    life: 1, // Vida do personagem
    maxLife: 1, // Vida máxima do personagem
    attack: 0, // Ataque do personagem
    defense: 0 // Defesa do personagem
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

const stage = {
    fighter1: null, // Lutador 1
    fighter2: null, // Lutador 2
    fighter1El: null, // Elemento HTML do Lutador 1
    fighter2El: null, // Elemento HTML do Lutador 2

    start(fighter1, fighter2, fighter1El, fighter2El) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;

        this.fighter1El.querySelector('.attack_button').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2El.querySelector('.attack_button').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));
    
        this.update();
    },

    update() {
        // Lutador 1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`;

        // Lutador 2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`;
    },

    doAttack(attacking, attacked) {
        if (attacking.life <= 0 || attacked.life <= 0) {
            log.addMessage('Alguém tá morto, não pode atacar.'); // Verifica se algum lutador está morto e exibe mensagem de erro
            return;
        }

        const attackFactor = (Math.random() * 2).toFixed(2);
        const defenseFactor = (Math.random() * 2).toFixed(2);

        const actualAttack = attacking.attack * attackFactor; // Ataque atual considerando o fator de ataque
        const actualDefense = attacked.defense * defenseFactor; // Defesa atual considerando o fator de defesa

        if (actualAttack > actualDefense) {
            attacked.life -= actualAttack;
            attacked.life = attacked.life < 0 ? 0 : attacked.life;
            log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`); // Exibe mensagem de ataque bem-sucedido
        } else {
            log.addMessage(`${attacked.name} conseguiu defender...`); // Exibe mensagem de defesa bem-sucedida
        }

        this.update();
    }
}

const log = {
    list: [], // Lista de mensagens no log
    addMessage(msg) {
        this.list.push(msg); // Adiciona uma nova mensagem à lista
        this.render();
    },

    render() {
        const logEl = document.querySelector('.log');
        logEl.innerHTML = '';

        for (let i in this.list) {
            logEl.innerHTML += `<li>${this.list[i]}</li>`; // Renderiza as mensagens no elemento HTML do log
        }
    }
}
