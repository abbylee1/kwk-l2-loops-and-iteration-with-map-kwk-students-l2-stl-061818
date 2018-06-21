// Code your solution in this file.

//let studentArray = ['Adele', 'Beyoncé', 'Lady', 'Madonna', 'Rihanna', 'Taylor']

function other(students) {
  return students.toLowerCase()
}

function lowerCaseStudentNames(names) {
  return names.map(other)
}

//const fullNames = ['Amy Adams', 'Cate Blanchett', 'Emma Stone', 'Jennifer Lawrence', 'Natalie Portman']

function firstAndLast(actress) {
  let actressFirst = actress.split (" ")[0]
  let actressLast = actress.split ("")[1]
  return {firstName: actressFirst,lastName: actressLast}
}

