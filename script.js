const BASE_URL="http://localhost:8080";
function showSection(id){
    document.querySelectorAll(".section").forEach(sec => sec.style.display = 'none');
    document.getElementById(id).style.display='block';
}
//create Account
function createAccount(){
    const data={
        Name :document.getElementById("c-name").value,
        Email :document.getElementById("c-email").value,
        Balance :document.getElementById("c-openingBalance").value

    };
     fetch(BASE_URL+"/accounts/create",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)

    })
    .then(res => res.json())
    .then(result => {
        document.getElementById("create-result").innerText="Account is Created and here is your Account Number "+result.accountNumber;
    });
}
function Deposit(){
    const data={
       accNo : document.getElementById("accNo").value,
       Amount : document.getElementById("amount").value

    };
    fetch(BASE_URL+"/Transactions/Deposit",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)

    })
    .then(res => res.text())
    .then(msg => {
        document.getElementById("deposit-result").innerText=msg;
    });
}
function Withdraw(){
    const data={
       accNo : document.getElementById("w-accNo").value,
       Amount : document.getElementById("w-amount").value

    };
    fetch(BASE_URL+"/Transactions/withDraw",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)

    })
    .then(res => res.text())
    .then(msg => {
        document.getElementById("withdraw-result").innerText=msg;
    });
}
function Transfer(){
    const data={
        Sender_accNo : document.getElementById("sender-accNo").value,
        Reciever_accNo : document.getElementById("reciever-accNo").value,
        Amount : document.getElementById("t-amount").value
    };
    fetch(BASE_URL+"/Transactions/transfer",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    })
    .then(res =>res.text())
    .then(msg =>{
        document.getElementById("transfer-result").innerText=msg;
    });
}
function viewAccount(){
 const acc = document.getElementById("v-acc").value;
 fetch(BASE_URL+"/accounts/"+acc)
 .then(res => res.json())
 .then(data =>{
    document.getElementById("viewAccount-result").innerText=JSON.stringify(data);
 });
}
function viewAllAccount(){
    fetch(BASE_URL+"/accounts/all")
    .then(res => res.json())
    .then(data =>{
        document.getElementById("listAll-result").innerText=JSON.stringify(data);
    });
}