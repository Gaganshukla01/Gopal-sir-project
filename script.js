
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();






function sendMail  () 
{
 
  var params = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    location: document.getElementById("location").value,
    food_name: document.getElementById("foodname").value,
    feedback: document.getElementById("feedback").value,
  };

  const serviceID = "service_jzl5zhq";
  const templateID = "template_tvkrhwb";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("location").value= "";
        document.getElementById("foodname").value= "";
        document.getElementById("feedback").value= "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));
}
