function getFortune() {
  let numElement = O('pickNumber') // get the element
  let num = parseInt(numElement.value) //get its value and
  //convert it to a number
  let nameElement = O('userName')
  let name = nameElement.value
  let fortuneString = 'You will'
  let fortune = O('fortune')

  //in an if/else statement, everything should evaluate to true or false
  if (name[0] == 'B') {
    fortuneString += ' be a professor'
  }

  if (num >= 2) {
    fortuneString += ', find true love'
  }
  else if (num > 0) {i
    fortuneString += ', win great riches'
  }
  else {
    fortuneString += ', become a pauper'
  }

  switch (num) {
    case 0:
      fortuneString += ', and wander the earth forever'
      break;
      //break; == ends execution for this case- if other cases are true and you don't include a break statement, they can get executed too
    case 1:
      fortuneString += ', and develop superpowers'
      break;
    case 2:
      fortuneString += ', and end up marooned at sea'
      break;
    case 3:
      fortuneString += ', and catch malaria'
      break;
    case 4:
      fortuneString += ', and become Poseidon, Emperor of the Seas'
      break;
    case 5:
      fortuneString += ', and die a horrible death'
      // adding a style in a switch case - dying a horrible death is no fun!
      fortune.style.backgroundColor = 'red'
      break;
  }

  if (name == "Brent" && num ==3 ) {
    fortuneString += ' and write a lot of code this week'
  }
  if (num == 2 || name == 'Dave') {
    fortuneString += ' and be named Dave' //everyone named Dave picks 2, that's just a fact.
  }
  // set the inner text of the fortune element to our new string
  // you could also try HTML elements instead of just adding the text!
  fortune.innerText = fortuneString
  // and don't forget to clear out the inputs for the next fortune
  numElement.value = 0;
  nameElement.value = ''
}
