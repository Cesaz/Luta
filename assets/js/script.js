function send_name() {
    let playersName = document.querySelector('#playerName').value;
    let playerCharacter = document.querySelector('#select_warrior').value;
    let playerAdversary = document.querySelector('#select_oponent').value;
    document.querySelector('.screen_menu').style.display = 'none';
    document.querySelector('.screen_battle').style.display = 'block';
    document.querySelector('body').style.backgroundImage = 'none';

    switch (playerCharacter && playerAdversary) {

        case 'option1': {
            const char = createKnight(`${playersName}`);
            const monster = createLittleMonster('Little Monster');
            document.querySelector('.char_background').style.backgroundImage = "url('../../images/guerreiro.jpeg')";
            document.querySelector('.monster_background').style.backgroundImage = "";
            stage.start(
                char,
                monster,
                document.querySelector('#char'),
                document.querySelector('#monster')
            );
            break;
        }

        case 'option2': {
            const char = createSorcerer(`${playersName}`);
            const monster = createBigMonster('Big Monster');
            document.querySelector('.char_background').style.backgroundImage = "";
            document.querySelector('.monster_background').style.backgroundImage = "url('../../images/monstro\ grande.jpeg')";
            stage.start(
                char,
                monster,
                document.querySelector('#char'),
                document.querySelector('#monster')
            );
            break;
        }
    }
}