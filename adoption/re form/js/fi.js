const firebaseConfig = {
  apiKey: "AIzaSyD7BjP4dfUeQZXQdyCItpmgfkgXt9H-e3A",
  authDomain: "animal-comforts-9d146.firebaseapp.com",
  databaseURL: "https://animal-comforts-9d146-default-rtdb.firebaseio.com",
  projectId: "animal-comforts-9d146",
  storageBucket: "animal-comforts-9d146.appspot.com",
  messagingSenderId: "285799519915",
  appId: "1:285799519915:web:7ce990a2b5ee24924ec9ee"
};
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var relinquishFormDB = firebase.database().ref("relinquishForm");
  
  document.getElementById("relinquishForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var number = getElementVal("number");
    var choice = getElementVal("choice");
    var city = getElementVal("city");
    var state = getElementVal("state");
    var reason = getElementVal("reason");
  
    saveMessages(name, emailid,number, choice,city,state,reason);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
    
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3500);
  
    //   reset the form
    document.getElementById("relinquishForm").reset();
  }
  
  const saveMessages = (name, emailid,number,choice,city,state,reason) => {
    var newrelinquishForm = relinquishFormDB.push();
  
    newrelinquishForm.set({
      name: name,
      emailid: emailid,
      number: number,
      choice: choice,
      city: city,
      state: state,
      reason: reason,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };