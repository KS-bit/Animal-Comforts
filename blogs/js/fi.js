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
  var blogentDB = firebase.database().ref("blogent");
  
  document.getElementById("blogent").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var number = getElementVal("number");
    var title = getElementVal("title");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid,number,msgContent,title);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
    
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 2500);
  
    //   reset the form
    document.getElementById("blogent").reset();
  }
  
  const saveMessages = (name, emailid,number,msgContent,title) => {
    var newblogent = blogentDB.push();
  
    newblogent.set({
      name: name,
      emailid: emailid,
      number: number,
      title: title,
      msgContent: msgContent,

    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };