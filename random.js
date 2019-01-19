/*var customName = document.getElementById('customname');*/
var btn_randomize = document.querySelector('.btn_randomize');
btn_randomize.addEventListener('click', result);

var story = document.querySelector('.story');

function randomValueFromArray(array){
  var random = Math.floor(Math.random()*array.length);
  return array[random];
}

var insertU = ["En svartfläckig ","En glad ","En grönknottrig ",
  "En mallig ","En fyrhjulsdriven ","En entusiastisk ", "En sjuk "];
var insertV = ["häst ","tant ","krokodil ",
  "sprätt ","bil ","mamma ","flodhäst "];
var insertX = ["som bodde i ett stall ","som fyllde år ","som rymt från zoo ",
  "som hämtade öl ","som var splitter ny ","som gillade böcker ",
  "som bodde i vatten "];
var insertY = ["galopperade på ","bjöd på ","tuggade på ",
  " snubblade på ","körde på ","skrev på ","flög på "];
var insertZ = ["en äng ","en tårta ","en brevbärare ","en back ",
  "en motorväg ","en rolig bok ","ett moln "];
var insertW = ["med blommor på.","med grädde på.","med blå skärmmössa.",
  "med tomflaskor i.","med fyra filer.", "med sin dotter.", "med bajs på."]

function result() {
  var newStory = ':insertu: :insertv: :insertx: :inserty: :insertz: :insertw:';

  var uItem = randomValueFromArray(insertU);
  var vItem = randomValueFromArray(insertV);
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);
  var wItem = randomValueFromArray(insertW);

  newStory = newStory.replace(':insertu:',uItem);
  newStory = newStory.replace(':insertv:',vItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);
  newStory = newStory.replace(':insertw:',wItem);

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

result();
