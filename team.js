var teamArr = JSON.parse(teamMembers);
console.table(teamArr);
for (var i = 0; i < teamArr.length; i++) {
    document.getElementById("main").innerHTML += `<div id='person${i}'> <img src = "${teamArr[i].image}" id='img${i}'> <p> Name: ${teamArr[i].name}</p> <br> <div id='moreInfo${i}'></div></div>`;
}

var test= new Array(teamArr.length);

for (var i = 0; i<teamArr.length; i++){
	test[i]=2;
}

function expand(x) {
    document.getElementById("moreInfo" + x).innerHTML = `<p>Email: ${teamArr[x].email} </p> `;
      document.getElementById('img'+x).style.width = "700px";
      document.getElementById('img'+x).style.height = "684px";
    
}

function close(y){
    document.getElementById("moreInfo" + y).innerHTML = "";
    document.getElementById('img'+y).style.width = "540px";
    document.getElementById('img'+y).style.height = "528px";
}



for (let i = 0; i < teamArr.length; i++) {
    document.getElementById("img" + i).addEventListener("click", function () {
        
        if(test[i] % 2 == 0){  
            expand(i);
            test[i]++;     
        }else {
            close(i);
            test[i]++;     
        }
        
    }, false);
}