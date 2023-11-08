async function getData() {

  const response = await fetch('./dict.json');
  const data = await response.json();

  d = new Date(), // today
    days = d.getTime() / (1000*60*60*24), 
    idx = Math.floor(days) % data.length;
  
  const word = await data[idx];

  const currentDate = new Date().toDateString();



  document.getElementById('date').innerHTML = currentDate;
  document.getElementById('word').innerHTML = word['word'];
  document.getElementById('pho').innerHTML = word['phonetic_spelling'];
  document.getElementById('type').innerHTML = word['word_type'];
  document.getElementById('def').innerHTML = word['definition'];
  document.getElementById('ex').innerHTML = word['example_sentence'];

    console.log(data[0])
    console.log(d)
    console.log(idx)
    console.log(data.length)
}

window.onload = getData;
