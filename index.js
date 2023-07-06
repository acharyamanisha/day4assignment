//question no 2
//displaying the data from api

function processdata(data){
    console.log(data);
    const id= document.getElementById("id");
    const name= document.getElementById("name");
    const price= document.getElementById("price");
    const img= document.getElementById("image");
    id.innerHTML=data[0].id;
    name.innerHTML=data[0].name;
    price.innerHTML=data[0].price;
    img.src=data[0].image;
    console.groupCollapsed(data[0].image)
}
const Demo_url="https://course-api.com/react-store-products";
const request= fetch(Demo_url)
.then((response) => {
    console.log(response);
    return response.json();
  })
  .then(processdata)
  .catch((error) => {
    console.log("error", error);
  });
