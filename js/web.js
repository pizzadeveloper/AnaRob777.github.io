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