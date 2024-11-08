var a=document.getElementById("btn")
var b=document.getElementById("p")
a.onclick=function(){
    b.textContent="hello how are you"
}
a.style.borderRadius="15px"
a.style.padding="20px"
a.style.fontSize="30px"
a.style.backgroundColor="lightgreen"
b.style.backgroundColor="lightpink"
b.style.fontSize="50px"
b.style.borderRadius="50%"
b.style.textAlign="center"
b.style.color="white"

var c=document.getElementById("btn1")
var d=document.getElementById("img1")
var e=document.getElementById("img2")
var f=document.getElementById("img3")

c.onclick=function(){
    d.innerHTML='<img src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg" width="300" style="border-radius:30px"/>'
    e.innerHTML='<img src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C214%2C3008%2C1579&wid=1200&hei=630&scl=2.506666666666667" width="300" style="border-radius:100px"/>'
    f.innerHTML='<img src="https://d2rqvd0kuag1qx.cloudfront.net/_1280xAUTO_crop_center-center_none/092717_NatureMuseum-473_2024-03-28-194159_jaul.jpg" width="300" style="border-radius:50%"/>'
}
c.style.padding="20px"
c.style.fontSize="30px"
c.style.backgroundColor="skyblue"
c.style.borderRadius="15px"