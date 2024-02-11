---
title: Why is the "Lunar" New Year only in Jan and Feb?
layout: text
---

That question led me to learn that the [Lunar New Year](https://en.wikipedia.org/wiki/Lunar_New_Year) is in fact [Lunisolar](https://en.wikipedia.org/wiki/Lunisolar_calendar), where the new year starts on the 2nd [New Moon](https://en.wikipedia.org/wiki/Lunar_phase) after the [December solstice](https://en.wikipedia.org/wiki/December_solstice) (~ Dec 21). The solar part defines the "seasons", which was important for the farmers. I created this interactive model to better understand the dynamic of this system.

<link rel="stylesheet" href="lunisolar.css">
<div>
    <canvas id="canvas-main" style='display: block; margin: 0 auto;'></canvas>

    <div  style='display: flex; text-align: left; padding: 10 0 10 100'>
        <img id='moon-phase-image' width=35 style='display:block'>
        <span style='line-height: 35px; padding: 0 10px; font-size: 10; font-family: monospace'>
            Approx. phase: <span id='moon-phase-text'></span>
        </span>
    </div>

    <div style='display:flex; flex-direction: column'>
        <div style='margin: 0 auto'>
            <label>Year</label>
            <input id="input-year" type="range" min="2000" max="2050" value="2024" />
            <span id="ui-year"></span>
        </div>
        <div style='margin: 0 auto'>
            <label>Day</label>
            <input id="input-day" type="range" min="0" max="365" value="39" />
            <span id="ui-day"></span>        
        </div>
    </div>
 

    <script src='lunisolar.js'></script>
    <script>
        (
            function(){
                applyTime()
            }
        )()
    </script>

</div>

## About the Model

### Parameters 

The model is simply defined by two parameters:

- The Earth orbits the Sun in **365.242374** days 
- The Moon orbits the Earth in **27.321661** days

For example, after one day, the earth has moved by 1 / 365.242374 * 360 degree around the sun, while the moon has moved by 1 / 27.321661 * 360 degree around the earth.

### Calibration 

To make it more intuitive, I adjusted the starting angles so that on Dec 22 (day 356th of 2023) the earth is at 3 o' clock and the moon is 10 days before the New Moon. Looks complicated but it is simply about adding a constant of -10 * 1 / 27.321661 * 360 degree to the moon's equations, i.e. Easier done than said!    

## The Seventeen-Arch Bridge

<image 
    src='./assets/lunisolar/seventeen-arch-bridge-google-earth.png' width='70%' 
    title='Seventeen-Arch Bridge, Beijing, China. Source: Google Earth.'
 />
<sub>Image: The Seventeen-Arch Bridge, Beijing, China. Source: Google Earth.</sub>

Architecture has always been an ideal place to find fascinating combinations of science, art and function. The [Seventeen-Arch Bridge](https://www.google.com/maps/place/%E5%8D%81%E4%B8%83%E5%AD%94%E6%A1%A5/@39.9910076,116.2765402,17.36z/data=!4m15!1m8!3m7!1s0x35f05296e7142cb9:0xb9625620af0fa98a!2sBeijing,+China!3b1!8m2!3d39.904211!4d116.407395!16zL20vMDE5MTQ!3m5!1s0x35f05129c2e21c89:0x1fe46d685c297612!8m2!3d39.990113!4d116.278486!16s%2Fg%2F1tgnzzcn!5m2!1e2!1e4?entry=ttu) in Beijing, China, is definitely one of them that I "discovered"! 

Built in the 18th century, the bridge was designed so that on the December solstice, the sun's rays would be perpendicular to the bridge and beautifully illuminate the side walls of the seventeen arches.

<br>

Disclaimer: This is obviously a fun work, without warranties or conditions of any kind.

<br>