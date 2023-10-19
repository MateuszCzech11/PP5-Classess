function saveToConsole(){
    let newCompany = {
        companyName: document.getElementById("InputCompanyName").value,
        NIP: document.getElementById("InputNip").value,
        city: document.getElementById("InputCity").value,
        street: document.getElementById("InputStreet" ).value,
        houseNo: document.getElementById("InputHouseNo").value,
        flatNo: document.getElementById("InputFlatNo" ).value,
        postCode: document.getElementById("InputPostCode").value,
        comments: document.getElementById("InputUwagi").value,
        companyIndustry: document.getElementById("FormIndustry").value,
        active: document.getElementById("checkActive").checked
    }

    console.log(newCompany);
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