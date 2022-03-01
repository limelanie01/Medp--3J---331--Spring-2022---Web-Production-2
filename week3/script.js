const myTitle = 'Way of Life'
let verb = ['Driving', 'Striving', 'Competing', 'Craving', 'Thriving', 'Creating', 'Completing']
let content =['the road of', 'throughout my', 'against others in', 'for food in', 'for the sake of', 'fun in', 'the goal in']
let finalword = ['life.']
let space = ['&nbsp',
'&nbsp'+'&nbsp',
'&nbsp'+'&nbsp'+'&nbsp',
'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp',
'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp',
'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp',
'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp', 
'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp']

function returnPoem(title, verb, content, finalword) {
  return title + ': ' + verb + ' ' + content + ' ' + finalword
}

function forLoopPoem(title, verb, content, finalword) {
  W('Original Poem:')
  for (i = 0; i < 7; i++) {
    W(verb[i] + ' ' + content[i] + ' ' + finalword[0])
  }
  W('')
}

forLoopPoem(myTitle, verb, content, finalword)

// while loop poem: Random Loop
let count = 0
W('Poem Generator:')
while(count < 7) {
  W(getRandomItem(space) + getRandomItem(verb) + getRandomItem(space) + getRandomItem(content) + getRandomItem(space) + getRandomItem(finalword))
  count++
}

function getRandomItem(array) {
  //selects a random item from the array
return array[Math.floor(Math.random()*array.length)]
}