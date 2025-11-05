const employees = []
let nextId = 1
const nameInput = document.getElementById('name')
const profInput = document.getElementById('profession')
const ageInput = document.getElementById('age')
const addBtn = document.getElementById('addBtn')
const resetBtn = document.getElementById('resetBtn')
const listEl = document.getElementById('list')
const msgEl = document.getElementById('msg')
const countText = document.getElementById('countText')
const totalText = document.getElementById('totalText')
function render(){
countText.textContent = employees.length
totalText.textContent = employees.length + (employees.length===1? ' added employee' : ' added employees')
if(employees.length===0){
listEl.innerHTML = '<div class="empty" id="empty">No employees added yet</div>'
return
}
listEl.innerHTML = ''
employees.forEach(emp=>{
const wrap = document.createElement('div')
wrap.className = 'employee'
const info = document.createElement('div')
info.className = 'info'
const avatar = document.createElement('div')
avatar.className = 'avatar'
avatar.textContent = emp.name.slice(0,1).toUpperCase()
const details = document.createElement('div')
details.className = 'details'
const n = document.createElement('div')
n.className = 'name'
n.textContent = emp.name
const m = document.createElement('div')
m.className = 'meta'
m.textContent = `Profession: ${emp.profession} • Age: ${emp.age} • ID: ${emp.id}`
details.appendChild(n)
details.appendChild(m)
info.appendChild(avatar)
info.appendChild(details)
const del = document.createElement('button')
del.className = 'del-btn'
del.textContent = 'Delete'
del.onclick = ()=>{deleteEmployee(emp.id)}
wrap.appendChild(info)
wrap.appendChild(del)
listEl.appendChild(wrap)
})
}
function showMessage(text,type){
msgEl.className = 'message ' + (type==='error' ? 'error' : 'success')
msgEl.textContent = text
setTimeout(()=>{msgEl.style.display = 'block'},10)
setTimeout(()=>{msgEl.style.display = 'none'},2500)
}
function addEmployee(){
const name = nameInput.value.trim()
const profession = profInput.value.trim()
const ageVal = ageInput.value.trim()
if(!name || !profession || !ageVal){
showMessage('Please fill out all required fields', 'error')
return
}
const age = Number(ageVal)
if(!Number.isFinite(age) || age <= 0){
showMessage('Please enter a valid age', 'error')
return
}
const emp = {id: nextId++, name, profession, age}
employees.push(emp)
render()
showMessage('Employee added successfully', 'success')
nameInput.value = ''
profInput.value = ''
ageInput.value = ''
nameInput.focus()
}
function deleteEmployee(id){
const idx = employees.findIndex(e=>e.id===id)
if(idx===-1) return
employees.splice(idx,1)
render()
showMessage('Employee removed', 'success')
}
addBtn.addEventListener('click', (e)=>{e.preventDefault();addEmployee()})
resetBtn.addEventListener('click',(e)=>{e.preventDefault();nameInput.value='';profInput.value='';ageInput.value='';nameInput.focus()})
render()