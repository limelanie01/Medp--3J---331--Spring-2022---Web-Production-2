function changePokemon() {
    //let pokemonID = $("id").random()
    $.getJSON('https://pokeapi.co/api/v2/pokemon/35/',
    function(data) {
        console.log('data: ', data)
        $('#pokemonName').text(data.pokemonID)
    }).fail(function() {
        $('#fail').text("There are no more Pokémon.")
        console.log("No more Pokémon")
    })
}

function attack() {
    O('health').innerText = "3000/3000"
    let hp = O('health') // get the element
    let h = parseInt(hp.value) //get its value and convert it to a number
    let numlv = O('level')
    let lv = parseInt(numlv.value)
    let numexp = O('experience')
    let exp = parseInt(numexp.value)
    let statusString = ''
    let status = O('status')

    if (h == 3000) {
        O('health').innerText = "2000/3000"
    }
    else if (h == 2000) {
        O('health').innerText = "1000/3000"
    }
    else if (h == 1000) {
        O('health').innerText = "0/3000"
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