var objPeople=[
    {
        username:"sam",
        password:"sam7886*"
    },
    {
        username:"ram",
        password:"ram7886*"
    },
    {
        username:"som",
        password:"som7886*"
    }
]

function getInfo(){
    var username=document.getElementById("username").value
    var password=document.getElementById("password").value

    for(i=0;i<objPeople.length;i++){
        if(username == objPeople[i].username && password== objPeople[i].password){
            swal({
                title: "Good job!",
                text: "Successfully logged in",
                icon: "success",
                button: "Aww yiss!",
              });
          
            return
        }
        else{
            console.log("Incorrect usename or password")
            swal({
                title: "Good job!",
                text: "Incorrect",
                icon: "success",
                button: "Aww yiss!",
              });
        }
    }
  
}

