// Code your solution in this file.

function other(students) {
  return students.toLowerCase()
}

function lowerCaseStudentNames(names) {
  return names.map(other)
}


function firstAndLast(actress) {
  const actressFirst = actress.split (" ")[0];
  const actressLast = actress.split (" ")[1];
  return { firstName: actressFirst, lastName: actressLast}
}

function nameToAttributes(movie) {
  return movie.map(firstAndLast);
}

function firstAndHometown(actors) {
  const actorsFirst = actors.split (" ")[0];
  const actorsHometown = 
}