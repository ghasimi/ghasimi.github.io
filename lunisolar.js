const W = 350
const H = 300    
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

const img = document.getElementById('moon-phase-image')

let sx = W / 2
let sy = H / 2  
let sr = 20

let ex, ey
let er = sr / 2
let ed = ( H / 4.5 )    

let mx, my
let mr = er / 1.5
let md = er * 3  
let m_degree  
        
function applyTime() {
    clear()
    updateInfo()
    updateSun()
    updateEarth()
    updateMoon()
    addOrbits()
    addSeasons()
    updateMoonPhase()
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
    uiDay.innerText =  inDay.valueAsNumber + 1
}        

function updateSun() {
  
    ctx.beginPath()
    ctx.arc(sx, sy, sr, 0, rad(360) )
    ctx.fillStyle = "gold"
    ctx.fill()            
}

function addOrbits() {
    function orbit(x, y, d) {
        ctx.beginPath()
        ctx.arc(x, y, d, 0, rad(360) )
        ctx.strokeStyle = "grey"
        ctx.lineWidth = 1
        ctx.setLineDash([2,6])
        ctx.stroke()    
    }
    orbit(sx, sy, ed )
    orbit(ex, ey, md )
}

function addSeasons() {    
    
    function season(q, txt, txt2) {
        txt2 = txt2 || ''
        let d = 40
        let x1 = sx + ed * Math.sin(rad(q / 4 * 360))
        let y1 = sy + ed * Math.cos(rad(q / 4 * 360))
        let x2 = sx + (ed + d) * Math.sin(rad(q / 4 * 360))
        let y2 = sy + (ed + d) * Math.cos(rad(q / 4 * 360))
        let x3 = sx + (ed + 1.5 * d) * Math.sin(rad(q / 4 * 360))
        let y3 = sy + (ed + 1.5 * d) * Math.cos(rad(q / 4 * 360))

        ctx.beginPath()
        ctx.moveTo(x1, y1 )
        ctx.lineTo(x2, y2)
        ctx.strokeStyle = "grey"
        ctx.lineWidth = 1
        ctx.setLineDash([2, 6])
        ctx.stroke()   

        ctx.font = 'lighter 11px monospace';
        ctx.textAlign = "center";
        ctx.fillStyle = 'grey'
        ctx.fillText(txt, x3, y3);        
        ctx.fillText(txt2, x3, y3 + 15);        
    }
    season(1, 'Dec', 'Solstice')
    season(2, 'Mar', 'Equinox')
    season(3, 'Jun', 'Solstice')
    season(4, 'Sep', 'Equinox')


}

function updateEarth() {

    let degree_per_day = 1 / days_per_year * 360
    let a = - day() * degree_per_day

    ex = sx +  ed * Math.cos(rad(a)) 
    ey = sy +  ed * Math.sin(rad(a)) 

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
    m_degree = (- day() * degree_per_day - 180 // if it was a new moon
        - 10 * degree_per_day // Dec 22, 2023 was 10 days after the actual new moon
        ) % 360 

    mx = ex +  md * Math.cos(rad(m_degree)) 
    my = ey +  md * Math.sin(rad(m_degree))

    ctx.beginPath()
    ctx.fillStyle = "lightcoral"
    ctx.strokeStyle = ctx.fillStyle 
    ctx.setLineDash([])
    ctx.arc(mx, my, mr, 0, rad(360) )  
    ctx.stroke()
    ctx.fill()
}

function updateMoonPhase() {

    function vectorAngle(x, y) {        
        let a = (- Math.atan2(x, y) * 180 / Math.PI + 90) % 360
        a = a >= 0 ? a : 360 + a
        return a
    }

    const [x1, y1] = [sx - ex, ey - sy]
    const [x2, y2] = [mx - ex, ey - my]    
    const sun_earth_angle = vectorAngle(x1, y1)
    const moon_earth_angle = vectorAngle(x2, y2) 
    let moon_earth_sun_angle = moon_earth_angle - sun_earth_angle
    
    moon_earth_sun_angle = (moon_earth_sun_angle + 2 * 360 + 22.5) % 360

    const m_phase = Math.floor(moon_earth_sun_angle / 46)
    img.src = './assets/lunisolar/moon_' + m_phase + '.svg'

    const moon_phases = {
        0: 'New Moon',
        1: 'Waxing Crescent',
        2: 'First Quarter',
        3: 'Waxing Gibbous',
        4: 'Full Moon',
        5: 'Waning Gibbous',
        6: 'Last Quarter',
        7: 'Waning Crescent',
    }
    document.getElementById('moon-phase-text').innerText = moon_phases[m_phase] || '-'
}