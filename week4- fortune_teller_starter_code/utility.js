//Utility Functions
//writes directly to the document, adding a line break
function W(el) {
  document.write(el + "<br>")
}

// "O" lets us get an object from the HTML
//Ch 20 in https://comet-substance-c61.notion.site/Learning-PHP-MySQL-Javascript-1f7c6e859e9f4f5691e1eb1df1acb151
function O(i)
{
  return typeof i == 'object' ? i : document.getElementById(i)
}
// allows us to change styles quickly, like:   O('myobj').style.color = 'green'
function S(i)
{
  return O(i).style
}


//allows us to access all elements on a pg that use a particular class
function C(i)
{
  return document.getElementsByClassName(i)
}
//How to acces the function:
// myarray = C('myclass')
//Setting their text Decoration style property to underline, as follows:
// for (i = 0 ; i < myarray.length ; ++i)
//    S(myarray[i]).textDecoration = 'underline'


