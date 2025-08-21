const body=document.getElementsByTagName("body")[0];
const btn=document.getElementById("dark");
const input=document.getElementById("input");
const ota=document.getElementById("ota");
let odamlar=[];

btn.addEventListener("click",()=>{
    body.classList.toggle("dark");
});

fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => res.json())
.then((data) => {
    chizish(data);
    odamlar=data;
});


function chizish(mlumot){
    ota.innerHTML="";
    malumot.map((odam)=>{
      const div=document.createElement("div");
      div.classList.add("card");
      div.innerHTML=`
         <img src="./profile-2398782_1280.webp" alt="">
            <h2>${odam.name}</h2>
            <h3>Username:${odam.username}</h3>
            <p>Email:${odam.email}</p>
            <p>Phon:${odam.phone}</p>
            <p>Adress:${odam.address.city},${odam.address.street}</p>
      
      `
      ota.appendChild(div);
    });
}
input.addEventListener("input", () =>{
    let a=odamlar.filter(o => o.name.tolowerCase().includes(input.value.tolowerCase()));
    chizish(a)
})