var Config = {
    apiKey: "AIzaSyAaeUyb0fm59FeMgLaX5kV2kMQ0tjENDm8",
    authDomain: "traintracker-53d7b.firebaseapp.com",
    databaseURL: "https://traintracker-53d7b.firebaseio.com",
    projectId: "traintracker-53d7b",
    storageBucket: "traintracker-53d7b.appspot.com",
    messagingSenderId: "201897892328",
    appId: "1:201897892328:web:eba5be7362169506122c5d",
    measurementId: "G-NXRJSGBF5P"
  };
  // Initialize Firebase
  firebase.initializeApp(Config);
  
  const db = firebase.firestore();
  
// setting variables 
  let name;
  let destination;
  let firstTrain;
  let frequency;

  
  
   
     document.getElementById('addTrain').addEventListener('click', function (){
   event.preventDefault();
// storing new train data
   name = document.getElementById('train-name').value;
   destination = document.getElementById('destination').value;
   firstTrain = document.getElementById('first-train').value;
   frequency = parseInt(document.getElementById('frequency').value);
   
      
// store in firebase
  db.collection('trains').doc(`${name}`).set({
      name: name,
      destination: destination,
      firstTrain: firstTrain,
      frequency: frequency
  });
console.log(name)
console.log(destination)
console.log(firstTrain)
console.log(frequency)
});



db.collection("trains").onSnapshot(snap => {
  document.getElementById('add-row').innerHTML = '';

  snap.docs.forEach(doc => {

    let { name, destination, firstTrain, frequency } = doc.data();

    console.log(
      `Trains first time: ${firstTrain} and comes every ${frequency} minutes`
    );

    //Grab current time
    let currentTime = moment().format("HH:mm");
    console.log(`current time: ${currentTime}`);

    //converts first train time
    let timeConverted = moment(firstTrain, "hh:mm").subtract(1, "years");
    console.log(`first train time converted`);

    //Difference between now and unix of train time
    let difference = moment().diff(moment(timeConverted), "minutes");
    console.log(`Difference: ${difference}`);

    //Time apart(remainder)
    let remainder = difference % frequency;
    console.log(`remainder is ${remainder}`);

    //Calculates minutes remaining until next train
    let minutes = frequency - remainder;
    console.log(`Minutes until next: ${minutes}`);

    //Add minutes to next train to current time
    let nextArrival = moment()
      .add(minutes, "m")
      .format("HH:mm");
    console.log(`Next train comes at ${nextArrival}`);

    //Change HTML to reflect data
   
    let trainElem = document.createElement("tr");
  trainElem.innerHTML = `<td>${name}</td>
  <td>${destination}</td>
  <td>${frequency}</td>
  <td>${nextArrival}</td>
  <td>${minutes}</td>`;
  document.getElementById('add-row').append(trainElem);


  });


});