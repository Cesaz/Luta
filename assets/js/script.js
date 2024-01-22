function send_name() {
    let playersName = document.querySelector('#playerName').value;
    let playerCharacter = document.querySelector('#select_warrior').value;
    let playerAdversary = document.querySelector('#select_oponent').value;
    document.querySelector('.screen_menu').style.display = 'none';
    document.querySelector('.screen_battle').style.display = 'block';
    document.querySelector('body').style.backgroundImage = 'none';
    document.querySelector('.log').style.display = 'block';

    switch (true) {

        case (playerCharacter === 'option1' && playerAdversary === 'option1'): {
            const char = createKnight(`${playersName}`);
            const monster = createLittleMonster('Little Monster');
            const charImg = document.querySelector('.char_background').style.backgroundImage = "url(images/guerreiro.jpeg')";
            const monsterImg = document.querySelector('.monster_background').style.backgroundImage = "url(images/Monstro_Pequeno.jpeg)";
            
            const audioPlayer = document.getElementById('player_audio');
            audioPlayer.setAttribute('src', 'audios/Espada.mp3');
            audioPlayer.load();
            
            const audioMonster = document.getElementById('monster_audio');
            audioMonster.setAttribute('src', 'audios/Monstro_Pequeno.mp3');
            audioMonster.load();

            stage.start(
                char,
                monster,
                document.querySelector('#char'),
                document.querySelector('#monster'),
                charImg,
                monsterImg
            );
            break;
        }

        case (playerCharacter === 'option2' && playerAdversary === 'option2'): {
            const char = createSorcerer(`${playersName}`);
            const monster = createBigMonster('Big Monster');
            const charImg = document.querySelector('.char_background').style.backgroundImage = "url('images/Feiticeiro.jpeg')";
            const monsterImg = document.querySelector('.monster_background').style.backgroundImage = "url('images/monstro\ grande.jpeg')";
            
            const audioPlayer = document.getElementById('player_audio');
            audioPlayer.setAttribute('src', 'audios/Magia.mp3');
            audioPlayer.load();
            
            const audioMonster = document.getElementById('monster_audio');
            audioMonster.setAttribute('src', 'audios/Monstro_Grande.mp3');
            audioMonster.load();
            
            stage.start(
                char,
                monster,
                document.querySelector('#char'),
                document.querySelector('#monster'),
                charImg,
                monsterImg
            );
            break;
        }

        case (playerCharacter === 'option1' && playerAdversary === 'option2'): {
            const char = createKnight(`${playersName}`);
            const monster = createBigMonster('Big Monster');
            const charImg = document.querySelector('.char_background').style.backgroundImage = "url(images/guerreiro.jpeg')";
            const monsterImg = document.querySelector('.monster_background').style.backgroundImage = "url('images/monstro\ grande.jpeg')";
            
            const audioPlayer = document.getElementById('player_audio');
            audioPlayer.setAttribute('src', 'audios/Espada.mp3');
            audioPlayer.load();
            
            const audioMonster = document.getElementById('monster_audio');
            audioMonster.setAttribute('src', 'audios/Monstro_Grande.mp3');
            audioMonster.load();
            
            stage.start(
                char,
                monster,
                document.querySelector('#char'),
                document.querySelector('#monster'),
                charImg,
                monsterImg
            );
            break;
        }

        case (playerCharacter === 'option2' && playerAdversary === 'option1'): {
            const char = createSorcerer(`${playersName}`);
            const monster = createLittleMonster('Little Monster');
            const charImg = document.querySelector('.char_background').style.backgroundImage = "url('images/Feiticeiro.jpeg')";
            const monsterImg = document.querySelector('.monster_background').style.backgroundImage = "url(images/Monstro_Pequeno.jpeg)";
            
            const audioPlayer = document.getElementById('player_audio');
            audioPlayer.setAttribute('src', 'audios/Magia.mp3');
            audioPlayer.load();
            
            const audioMonster = document.getElementById('monster_audio');
            audioMonster.setAttribute('src', 'audios/Monstro_Pequeno.mp3');
            audioMonster.load();
            
            stage.start(
                char,
                monster,
                document.querySelector('#char'),
                document.querySelector('#monster'),
                charImg,
                monsterImg
            );
            break;
        }
    }
}