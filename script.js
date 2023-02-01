const usersDiv = document.querySelector(".usersDiv");
const userIdAndName = [
    { id:"1", name: "mg mg"},
    { id:"2", name: "Aung Aung"},
    { id:"3", name: "Ko Ko "},
    { id:"4", name: "Aye Aye"},
    { id:"5", name: "Mya Mya"},
    { id:"6", name: "U Ba"},
    { id:"7", name: "Daw Mya"},
    { id:"6", name: "U Hla"},
    { id:"6", name: "U Mya"},
    { id:"6", name: "U Ko"},
    { id:"6", name: "U Aung"},
];
for(let i = 0; i < userIdAndName.length; i++ ){
    const userDiv = document.createElement("div");
    userDiv.classList.add("userDiv");
    userDiv.textContent = userIdAndName[i].name
    const img = document.createElement("img");
    img.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnvAuOKji-nHQuDLl_SrG_XomAwUdVEgMKBsdWZamP&s"
    img.classList.add("imgTag")
    
    usersDiv.append(userDiv);
    userDiv.append(img);
}