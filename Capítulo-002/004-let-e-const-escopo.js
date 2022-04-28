let filme = 'Senhor dos Anéis';  // 1
// var filme = 'Batman vs Superman';

function starWarsFan(){
    const filme = 'Star Wars'; // 2
    return console.log(filme);
}

function playStationFan(){
    let fan = true;
    let jogo = 'PES'; // 3
    console.log('Antes do if : ' + jogo);
    if(fan){
        let jogo = 'Texto inicial'; // 4
        jogo = 'BombaPatch';  // 5
        console.log('Durante o if : ' + jogo)
    }
    jogo = 'FifaStreet';  // 6
    console.log('Depois do if : ' + jogo);
}

starWarsFan()
playStationFan()

/*
{1} esta variável ela tem um escopo global
{2} esta variável tem o escopo local da função starWarsFan, então eu altero ela normalmente
{3} esta função tem o escopo local da função playStationFan
{4} esta variável tem o escopo local do if, então eu posso alterar
{5} ainda estou no if, então consigo alterar o valor
{6} saí do if, agora eu posso também alterar o valor dessa variável
*/