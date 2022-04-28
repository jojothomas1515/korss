const info = document.getElementById('whtths')
const whatthis = document.getElementById('info-button')

whatthis.addEventListener('click',  (e)=>{
  e.preventDefault()
  info.classList.toggle('dis')
 
  
})
