const W = 400
const H = 400    
const days_per_year =  365.242374   

const uiDay = document.getElementById("ui-day")
const uiYear = document.getElementById("ui-year")

const c = document.getElementById("canvas-main")
c.width = W
c.height = H

const ctx = c.getContext("2d")

const inYear = document.getElementById("input-year")
document.getElementById("input-year")
    .addEventListener("input", applyTime)

const inDay = document.getElementById("input-day")
document.getElementById("input-day")
    .addEventListener("input", applyTime)


let sx = W / 2
let sy = H / 2  
let sr = 30

let ex, ey
let er = sr / 2
let ed = ( H / 5 )    

let mx, my
let mr = er / 2
let md = er * 2   
        
function applyTime() {
    clear()
    updateInfo()
    updateEarth()
    updateMoon()
    updateSun()
}

function day() {
    return (inYear.value - 2023) * days_per_year + (inDay.value - 356) // Reference Dec 22, 2023 
} 


function rad(angle) {
    return angle * 0.017453 // 2 * Math.PI / 360
} 

function clear() {
    ctx.clearRect(0, 0, W, H)
}

function updateInfo() {
    uiYear.innerText =  inYear.value
    uiDay.innerText =  inDay.value
}        

function updateSun() {
  
    ctx.beginPath()
    ctx.arc(sx, sy, sr, 0, rad(360) )
    ctx.fillStyle = "gold"
    ctx.fill()            
}

function updateEarth() {

    let degree_per_day = 1 / days_per_year * 360
    let a = - day() * degree_per_day  - 45

    ex = sx +  ed * Math.cos(rad(a)) - ed * Math.sin(rad(a))
    ey = sy +  ed * Math.sin(rad(a)) + ed * Math.cos(rad(a))

    ctx.beginPath()
    ctx.fillStyle = "LightSkyBlue"
    ctx.strokeStyle = ctx.fillStyle 
    ctx.setLineDash([])
    ctx.strokeStyle = ctx.fillStyle 
    ctx.arc(ex, ey, er, 0, rad(360) )
    ctx.stroke()
    ctx.fill()
}

function updateMoon() {

    let degree_per_day = 1 / 27.321661 * 360
    let a = - day() * degree_per_day  - 45 - 180 // if it was a new moon
        - 10 * degree_per_day // Dec 22, 2023 was 10 days after the actual new moon

    mx = ex +  md * Math.cos(rad(a)) - md * Math.sin(rad(a))
    my = ey +  md * Math.sin(rad(a)) + md * Math.cos(rad(a))

    ctx.beginPath()
    ctx.fillStyle = "lightGray"
    ctx.strokeStyle = ctx.fillStyle 
    ctx.setLineDash([])
    ctx.arc(mx, my, mr, 0, rad(360) )  
    ctx.stroke()
    ctx.fill()
}

