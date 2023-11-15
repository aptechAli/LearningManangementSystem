var userDetails = [
    {
        username:"admin",
        useremail:"admin@gmail.com",
        userrole:"admin",
        userimage:"images/profile/profile.png",
        userpassword:"admin"
    },
    {
        username:"admin2",
        useremail:"admin2@gmail.com",
        userrole:"admin",
        userimage:"images/users/1.jpg",
        userpassword:"admin"
    },
    {
        username:"agent",
        useremail:"agent@gmail.com",
        userrole:"agent",
        userimage:"images/users/1.png",
        userpassword:"agent"
    },
    {
        username:"customer",
        useremail:"customer@gmail.com",
        userrole:"customer",
        userimage:"images/profile/7.jpg",
        userpassword:"customer"
    },
     
{
    useremail: "usman@gmail.com",
    username: "usman", 
    userpassword: "qaryshan",
    userrole: "student"}
    
]








localStorage.setItem("userDetail",JSON.stringify(userDetails));







// User Registration functionality 

function User_Register(){
    
    var userEmail = document.getElementById("userEmail").value;
    var userName = document.getElementById("userName").value;
    var userPassword = document.getElementById("userPassword").value;

    var userImage = document.getElementById("userImage").value;
    var imageAdress = userImage.slice(12);



    var error = document.getElementById("error");

    let emailValidator= "@";
    
    
    var EmailPresent = userEmail.includes(emailValidator);




    if(userEmail.length >5 && EmailPresent == true){
        if(userName.length >2){
            
            if(userPassword.length>4){

                if(userImage.length>2){


                    var userDetails_fetch = JSON.parse(localStorage.getItem("userDetail"));

                    var newUser={
                        useremail:userEmail,
                        username:userName,
                        userpassword:userPassword,
                        userrole:"customer"
                    }
                    
                    var email_Registration_Check = userDetails_fetch.filter(data=> data.useremail == userEmail)

                    if(email_Registration_Check.length>0){
                        error.innerHTML="Email already taken ";
                    }else{
                        userDetails_fetch.push(newUser);
    
                        localStorage.setItem("userDetail",JSON.stringify(userDetails_fetch))

                        alert("Account Registered")
                    }

                    
                    
                    
                    
                    
                    



                }else{

                    error.innerHTML="User Image  must be Uploaded  "
                }

            }else{
                
                error.innerHTML="User password be greater  "
            }

        }else{
            
            error.innerHTML="User Name must be greater  "
        }
    }else{
        
        error.innerHTML="User Email must be greater and have an @ "
    }












}
// End User Registration functionality 



// User Login Functionality

function login(){
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;
  
    var userDataList_fetch = JSON.parse(localStorage.getItem("userDetail"));


  

    var error = document.getElementById("error");

    let emailValidator= "@";
    
    
    var EmailPresent = userEmail.includes(emailValidator);




    if(userEmail.length >5 && EmailPresent == true){
        if(userPassword.length>4){


            var login_userFetch = userDataList_fetch.filter(data=>  data.useremail==userEmail && data.userpassword==userPassword)


            if(login_userFetch.length >0){
              
              if(login_userFetch[0].userrole =='admin'){
                window.location.href = 'dashboard.html';
                localStorage.setItem("login_User_Session",JSON.stringify(login_userFetch))
            }else if(login_userFetch[0].userrole =='customer'){
                  window.location.href = 'customer.html';
                  localStorage.setItem("login_User_Session",JSON.stringify(login_userFetch))

              }



            }else{
                error.innerHTML="crediential wrong "
            }


        }else{
 error.innerHTML="Email  must have @  "
        }
    }else{
        error.innerHTML="password must be strong  "
    }
            

               

    









}

// User Login Functionality

function logout(){
    localStorage.clear();
    window.location.href = 'index.html';
}

function ready(){
    var loggginWalaData = JSON.parse(localStorage.getItem("login_User_Session"));


    var userImage = document.getElementById("userProfile");
    var userTiltle = document.getElementById("userTiltle");
    userImage.src = loggginWalaData[0].userimage;

    userTiltle.innerHTML = loggginWalaData[0].username


    
    var userImagee = document.getElementById("userProfile1");
    userImagee.src = loggginWalaData[0].userimage;

   

}






// =------------------- ADMIN RIGHTS -----------------------------------//


function addStudent(){

  var studentCourse = document.getElementById("course").value;
  var studentPassword = document.getElementById("password").value;
  var studentEmail = document.getElementById("email").value;
  var studentName = document.getElementById("username").value;
  var userimge = document.getElementById("userimge").value;
    

  var actual_Image = userimge.slice(12);



    var studentDetails = {
        useremail:studentEmail,
        username:studentName,
        userpassword:studentPassword,
        userimage:actual_Image,
        userCourse:studentCourse,
        userrole:"student",

    }


    var userDetail_Seeding = JSON.parse(localStorage.getItem("userDetail"));



var email_Registration_Check = userDetail_Seeding.filter(data=> data.useremail == studentEmail)


if(email_Registration_Check.length != 0){
    alert("student already exist");
}else{
    
    userDetail_Seeding.push(studentDetails);
    
    
        localStorage.setItem("userDetail",JSON.stringify(userDetail_Seeding));

}






    









}



function student_Rendrng(){
    var table_row = document.getElementById("tableRole");
    var table_userName = document.getElementById("table_userName");
    var table_userEmail = document.getElementById("table_userEmail");
    var table_userRole = document.getElementById("table_userRole");
    var table_userCourse = document.getElementById("table_userCourse");
   
 

    var studentsList = JSON.parse(localStorage.getItem("userDetail"));

    var filterStudent = studentsList.filter(data => data.userrole=="student");

    console.log(filterStudent)


    table_userName.innerHTML = "usman"
    table_userEmail.innerHTML = "usman"
    table_userRole.innerHTML = "usman"
    table_userCourse.innerHTML = "usman"




}