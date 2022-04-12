$(function() {
    random = Math.floor(Math.random() * (200)) + 1
    let ID = $(random).val()
    $.getJSON('https://pokeapi.co/api/v2/pokemon/${ID}/', function(data01){
        console.log(data01);
        const pokemonE1 = document.createElement('div');
        const name = data01.name[0].toUpperCase() + data01.name.slice(1);
        pokemonE1.style.borderRadius = "20px";

        const pokeInnerHTML = '
        <div class="char-search">
        <br>
        <h2 class="name">${name}</h2>
        <img src=${data01.sprites.front_default} alt=""/>
        </div>
        ';
        pokemonE1.innerHTML = pokeInnerHTML;
        char_search.appendChild(pokemonE1);
    }).fail(function() {
        $('#fail').text("You have not encountered any Pokémon")
        console.log("no Pokémon are nearby")
    })
})

/* function changePokemon() {
    //let pokemonID = $("id").random()
    let pokemonID = ['https://pokeapi.co/api/v2/pokemon/1/', 'https://pokeapi.co/api/v2/pokemon/2/','https://pokeapi.co/api/v2/pokemon/3/', 'https://pokeapi.co/api/v2/pokemon/4/', 'https://pokeapi.co/api/v2/pokemon/5/', 'https://pokeapi.co/api/v2/pokemon/6/', 'https://pokeapi.co/api/v2/pokemon/7/', 'https://pokeapi.co/api/v2/pokemon/8/', 'https://pokeapi.co/api/v2/pokemon/9/', 'https://pokeapi.co/api/v2/pokemon/10/', 'https://pokeapi.co/api/v2/pokemon/11/', 'https://pokeapi.co/api/v2/pokemon/12/', 'https://pokeapi.co/api/v2/pokemon/13/', 'https://pokeapi.co/api/v2/pokemon/14/', 'https://pokeapi.co/api/v2/pokemon/15/']
    $.getJSON(getRandomItem(pokemonID),
    function(data) {
        console.log('data: ', data)
        $('#pokemonName').text(data.pokename)
    }).fail(function() {
        $('#fail').text("There are no more Pokémon.")
        console.log("No more Pokémon")
    })
}
 */
function attack() {
    S('health').width = '100%'
    let hp = S('health') // get the element
    //let h = parseInt(hp.value) //get its value and convert it to a number
    let numlv = O('level')
    let lv = parseInt(numlv.value)
    let numexp = O('experience')
    let exp = parseInt(numexp.value)
    let statusString = ''
    let status = O('status')

    if (hp == 3000) {
        S('health').width = '66%'
        O('health').innerHTML = "2000/3000"
    }
    else if (hp == 2000) {
        S('health').width = '33%'
        O('health').innerHTML = "1000/3000"
    }
    else if (hp == 1000) {
        S('health').width = '0'
        if (lv == 1 && lv <= 4) {
            if (exp == 0 && exp <= 2) {
                exp += 1
            }
            else if (exp == 3) {
                lv += 1
                exp = 0
            }
        }
        else if (lv == 5) {
            statusString = 'Congratulations! You hit the max level!'
            status.innerText = statusString
        }
        changePokemon()     //change pokemon after the health hits 0/3000
        hp.value = 3000    // restart the hp of the changed Pokemon
    }
}


/* }).done(function(data) {
    //jQuery automatically analyzes the JSON for us
    console.log('data:', data)
    $('#kanye-quote').text(data.quote)

}).fail(function() {
    //sometimes your request will fail, you can deal with that here
    $("#kanye-quote").text('Whoops, try again')
    
}).always(function() {
    console.log('if you want to do something whether it fails or not, do it here')
}) */