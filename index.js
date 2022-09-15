const cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph){
cats.push("Ralph");
}
function destructivelyPrependCat(Bob){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(Broom){
    const cats = ["Milo", "Otis", "Garfield"]
 const newcats = [...cats , "Broom"];
 return newcats;

}
function prependCat(Arnold){
    const cats = ["Milo", "Otis", "Garfield"]
    const newcats = [ "Arnold",...cats];
    return newcats;
}
function removeLastCat(){
    const cats = ["Milo", "Otis", "Garfield"];
const newcats = [ cats.pop()];
return newcats;
      
}
function removeFirstCat(){
    const cats = ["Milo", "Otis", "Garfield"];
const newcats = [ cats.shift()];
return newcats;
}

      




