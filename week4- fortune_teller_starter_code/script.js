function getFortune() {
  O('image').onmouseover=function(){ //when the mouse hovers over the img, it changes
    this.src='openfortune.png'
  }
  
  let numElement = O('pickNumber') // get the element
  let num = parseInt(numElement.value) //get its value and convert it to a number
  let numYear = O('birthYear')
  let yr = parseInt(numYear.value)
  let nameElement = O('userName')
  let name = nameElement.value
  let fortuneString = ''
  let fortune = O('fortune')

  //in an if/else statement, everything should evaluate to true or false
  //PICK NUMBER
  if (num <=10 && num > 5) {
    fortuneString += 'You will find true love'
    fortune.style.fontSize = '15pt'
  }
  else if (num <=5 && num > 0) {
    fortuneString += 'You will win great riches'
    fortune.style.fontSize = '15pt'
  }
  else if (num > 10) {
    fortuneString += 'Your fortune is too grand to imagine'
    fortune.style.fontSize = '30pt'
  }
  else {
    fortuneString += 'You will become a pauper'
    fortune.style.fontSize = '15pt'
  }

  //BIRTH YEAR
  if (yr < 2000) {
    fortuneString += ' in an instant'
  }
  else if (yr <= 2022 && yr >= 2000) {
    fortuneString += ' soon'
  }
  else if (yr > 2022) {
    fortuneString += ' in the years to come'
  }
  else {
    fortuneString += ' in the most desperate situation'
  }

  //PICK NUMBER
  switch (num) {
    case 0:
      fortuneString += ' and wander the earth forever'
      fortune.style.backgroundColor = ''  //no background color
      break;
      //break; == ends execution for this case- if other cases are true and you don't include a break statement, they can get executed too
    case 1:
      fortuneString += ' and develop superpowers'
      fortune.style.backgroundColor = ''
      break;
    case 2:
      fortuneString += ' and end up marooned at sea'
      fortune.style.backgroundColor = ''
      break;
    case 3:
      fortuneString += ' and catch malaria'
      fortune.style.backgroundColor = ''
      break;
    case 4:
      fortuneString += ' and die a horrible death'
      // adding a style in a switch case - dying a horrible death is no fun!
      fortune.style.backgroundColor = '#f76363'
      break;
    case 5:
      fortuneString += ' and become Poseidon, Emperor of the Seas'
      fortune.style.backgroundColor = ''
      break;
    case 6:
      fortuneString += ' and travel back in time'
      fortune.style.backgroundColor = ''
      break;
    case 7:
      fortuneString += ' and you will reincarnate to another world after death'
      fortune.style.backgroundColor = ''
      break;
    case 8:
      fortuneString += ' and win a lottery'
      fortune.style.backgroundColor = '#fff973'
      break;
    case 9:
      fortuneString += ' and meet your favorite celebrity'
      fortune.style.backgroundColor = ''
      break;
    case 10:
      fortuneString += ' and meet the person you want most'
      fortune.style.backgroundColor = ''
      break;
  }

  //ENTER NAME
  if (name[0] == 'A'|| name[0] == 'B'|| name[0] == 'C'|| name[0] == 'D'|| name[0] == 'E') {
    fortuneString += ' along with the person next to you.'
  }
  else if (name[0] == 'K' || name[0] == 'L' || name[0] == 'M' || name[0] == 'N' || name[0] == 'O') {
    fortuneString += ' along with your pet.'
  }
  else if (name[0] == 'U' || name[0] == 'V' || name[0] == 'W' || name[0] == 'X' || name[0] == 'Y') {
    fortuneString += ' along with the person in front of you.'
  }
  else{
    fortuneString += ' on your birth month.'
  }

  // set the inner text of the fortune element to our new string
  // you could also try HTML elements instead of just adding the text!
  fortune.innerText = fortuneString
  // and don't forget to clear out the inputs for the next fortune
  numElement.value = 0;
  numYear.value = 2000;
  nameElement.value = '';
}
