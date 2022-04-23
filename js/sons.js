const som1 = document.getElementById('n1')
const som2 = document.getElementById('n2')
const som3 = document.getElementById('n3')
const img1 = document.getElementById('im1')
const img2 = document.getElementById('im2')
const img3 = document.getElementById('im3')

img1.addEventListener('click', ()=>{
som1.src = "./soundtrack/sirene.mpeg"
som1.onplay()
})
img2.addEventListener('click', ()=>{
som2.src = "./soundtrack/FOGOOO.mpeg"
som2.onplay()
})
img3.addEventListener('click', ()=>{
som3.src = "./soundtrack/cavaloGrito.mpeg"
som3.onplay()
})
