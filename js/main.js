let dataGlasses = [
    {id:"G1",src:"./img/g1.jpg",virtualImg:"./img/v1.png",brand:"Armani Exchange",name:"Bamboo wood",color:"Brown",price:150,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",status:true},
    {id:"G2",src:"./img/g2.jpg",virtualImg:"./img/v2.png",brand:"Arnette",name:"American flag",color:"American flag",price:150,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",status:false},
    {id:"G3",src:"./img/g3.jpg",virtualImg:"./img/v3.png",brand:"Burberry",name:"Belt of Hippolyte",color:"Blue",price:100,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",status:true},
    {id:"G4",src:"./img/g4.jpg",virtualImg:"./img/v4.png",brand:"Coarch",name:"Cretan Bull",color:"Red",price:100,description:"In assumenda earum eaque doloremque, tempore distinctio.",status:false},
    {id:"G5",src:"./img/g5.jpg",virtualImg:"./img/v5.png",brand:"D&G",name:"JOYRIDE",color:"Gold",price:180,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",status:false},
    {id:"G6",src:"./img/g6.jpg",virtualImg:"./img/v6.png",brand:"Polo",name:"NATTY ICE",color:"Blue, White",price:120,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",status:false},
    {id:"G7",src:"./img/g7.jpg",virtualImg:"./img/v7.png",brand:"Ralph",name:"TORTOISE",color:"Black, Yellow",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",status:true},
    {id:"G8",src:"./img/g8.jpg",virtualImg:"./img/v8.png",brand:"Polo",name:"NATTY ICE",color:"Red, Black",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",status:false},
    {id:"G9",src:"./img/g9.jpg",virtualImg:"./img/v9.png",brand:"Coarch",name:"MIDNIGHT VIXEN REMIX",color:"Blue, Black",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",status:true}
];

let list_of_all_glasses=new GlassList();

let add_all_glasses_to_list=()=>{
    for(var item of dataGlasses){
        let glass_obj=new Glass(item.id,item.src,item.virtualImg,item.brand,item.name,item.color,item.price,item.description,item.status);
        list_of_all_glasses.add_glass(glass_obj);
    }
}

add_all_glasses_to_list();

let display_all_glasses_on_the_interface=()=>{
    let obj_display=document.getElementById("vglassesList");
    obj_display.innerHTML=list_of_all_glasses.show_all_glasses();
}

display_all_glasses_on_the_interface();


let try_on_glass_for_model=(e)=>{
    let id_retrieved=e.target.getAttribute("data_id");
    let glass_obj=list_of_all_glasses.find_glass_by_id(id_retrieved);
    console.log(glass_obj);

    let info_obj=document.getElementById("glassesInfo");
    let avatar_obj=document.getElementById("avatar");
    avatar_obj.innerHTML=`
    <img src="${glass_obj.virtualImg}" id="before_after" alt="">
    `;

    let status_info="";
    if(glass_obj.status){
        status_info=`
        <P class="col-4 text-success font-weight-bold">Stocking</P>
        `;
    }
    else{
        status_info=`
        <P class="col-4 text-danger font-weight-bold">Out of stock</P>
        `;
    }

    info_obj.innerHTML=`
    <h5 class="mb-4">${glass_obj.brand} - ${glass_obj.name} - ${glass_obj.color}</h5>
    <div class="row align-items-center">
        <p class="col-3 btn btn-primary px-2 ml-2">$${glass_obj.price}</p>
        ${status_info}
    </div>
    <p>${glass_obj.description}</p>
    `;

    info_obj.style.display="block";
}

function process_before_after(boolean_value){
    if(document.getElementById("avatar").innerHTML==="" || document.getElementById("before_after")==null){
        alert("There is no class selected");
        return;
    }
    let img_ob=document.getElementById("before_after");
    if(boolean_value){
        console.log("Nam Anh 2");
        img_ob.style.opacity=1;
    }
    else{
        console.log("Nam Anh 3");
        img_ob.style.opacity=0;
    }
}

// const removeGlasses = (isDisplay) => {
//     let glasses = getELE("before_after");

//     // if (glasses != null) {
//     //     //isDisplay = true thì hiện kính
//     //     if (isDisplay) {
//     //         glasses.style.opacity = 0.9;
//     //     } else {
//     //         //isDisplay = false thì ẩn kính
//     //         glasses.style.opacity = 0;
//     //     }
//     // }

//     //  if (isDisplay == true && glasses != null) {
//     //     //isDisplay = true thì hiện kính
//     //     glasses.style.opacity = 0.9;       
//     // }else if(isDisplay != true && glasses != null){
//     //     glasses.style.opacity = 0;
//     // }else{

//     // }
//     if (glasses == null) {
//         return;
//     }
//         if (isDisplay) {
//             glasses.style.opacity = 0.9;
//         } else {
//             //isDisplay = false thì ẩn kính
//             glasses.style.opacity = 0;
//         }
// }

// window.removeGlasses = removeGlasses;



// document.getElementById("before_glass").onclick=process_before_after(true);

// document.getElementById("after_glass").onclick=process_before_after(false);