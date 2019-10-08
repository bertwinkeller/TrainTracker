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
  
  const db = firebase.database();


  let name;
  let destination;
  let firstTrain;
  let frequency;

  let addTrain = document.getElementById('addTrain');
  if(addTrain){
      addEventListener('click', function (){
   event.preventDefault();
   name = document.getElementById('train-name').value;
   destination = document.getElementById('destination').value;
   firstTrain = document.getElementById('first-train').value;
   frequency = document.getElementById('frequency').value;
   console.log(name,destination,firstTrain,frequency)
      
  })};