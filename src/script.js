let companies=[];

function saveToConsole(){
    let newClient= new Client();
    newClient.companyName=document.getElementById("InputCompanyName").value;
    newClient.nip=document.getElementById("InputNip").value;
    newClient.city=document.getElementById("InputCity").value;
    newClient.street=document.getElementById("InputStreet" ).value;
    newClient.houseNo=document.getElementById("InputHouseNo").value;
    newClient.flatNo=document.getElementById("InputFlatNo").value;
    newClient.postCode=document.getElementById("InputPostCode").value;
    newClient.comments=document.getElementById("InputUwagi").value;
    newClient.companyIndustry=document.getElementById("FormIndustry").value;
    newClient.active=document.getElementById("checkActive").checked;


    console.log(newClient);
    companies.push(newClient);
    addToList(companies);
    document.getElementById("form").style.display = "none";
    document.getElementById("list").style.display = "block";
}
function pullFromConsole(){
    let exampleCompany = {
        companyName: "testvalues",
        NIP: "testvalues",
        city: "testvalues",
        street: "testvalues",
        houseNo: "testvalues",
        flatNo: "testvalues",
        postCode: "testvalues",
        comments: "testvalues",
        companyIndustry: "testvalues",
        active: true
    }
    document.getElementById("InputCompanyName").value= exampleCompany.companyName,
    document.getElementById("InputNip").value= exampleCompany.NIP,
    document.getElementById("InputCity").value= exampleCompany.city,
    document.getElementById("InputStreet" ).value= exampleCompany.street,
    document.getElementById("InputHouseNo").value= exampleCompany.houseNo,
    document.getElementById("InputFlatNo" ).value= exampleCompany.flatNo,
    document.getElementById("InputPostCode").value= exampleCompany.postCode,
    document.getElementById("InputUwagi").value= exampleCompany.comments,
    document.getElementById("FormIndustry").value= exampleCompany.companyIndustry,
    document.getElementById("checkActive").checked = exampleCompany.active

}

function showForm(){
    document.getElementById("form").style.display = "block";
    document.getElementById("list").style.display = "none";
    document.getElementById("buttonShowForm").style.display = "none";
    document.getElementById("buttonShowList").style.display = "block";
}
function showList(){
    document.getElementById("form").style.display = "none";
    document.getElementById("list").style.display = "block";
    document.getElementById("buttonShowList").style.display = "none";
    document.getElementById("buttonShowForm").style.display = "block";
}

function addToList(companies){
    let ul = document.getElementById("list-group");
    ul.innerHTML="";
    companies.forEach(element => {
        ul.innerHTML+=`<li class = "list-group-item" onclick="editClient(${element.NIP})">Nazwa:${element.companyName},NIP:${element.NIP}`
    });
}
function editClient(nip){
    companies.forEach(element=>{
        if(element.NIP == nip){
            let companyToEdit = {
                companyName: element.companyName,
                NIP: element.NIP,
                city: element.city,
                street: element.street,
                houseNo: element.houseNo,
                flatNo:element.flatNo ,
                postCode:element.postCode ,
                comments: element.comments ,
                companyIndustry:element.companyIndustry,
                active: element.active
                
            }
            document.getElementById("InputCompanyName").value= companyToEdit.companyName,
            document.getElementById("InputNip").value= companyToEdit.NIP,
            document.getElementById("InputCity").value= companyToEdit.city,
            document.getElementById("InputStreet" ).value= companyToEdit.street,
            document.getElementById("InputHouseNo").value= companyToEdit.houseNo,
            document.getElementById("InputFlatNo" ).value= companyToEdit.flatNo,
            document.getElementById("InputPostCode").value= companyToEdit.postCode,
            document.getElementById("InputUwagi").value= companyToEdit.comments,
            document.getElementById("FormIndustry").value= companyToEdit.companyIndustry,
            document.getElementById("checkActive").checked = companyToEdit.active
        }
    document.getElementById("form").style.display = "block";
    document.getElementById("list").style.display = "none";
    });
}
