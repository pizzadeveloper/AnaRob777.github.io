document.body.addEventListener('click', (e) => {
   const element = document.createElement('span')
   element.className = 'circle'

   element.style.left = e.clientX - 20 + 'px'
   element.style.top = e.clientY - 20 + 'px'

   document.body.append(element)

   setTimeout(() => {
      element.remove()
   }, 900)
})

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
   nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
   nav.classList.remove("visible");
})
