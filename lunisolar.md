---
title: Why is the "Lunar" New Year only in Jan and Feb?
layout: text
---

That question led me to learn that the [Lunar New Year](https://en.wikipedia.org/wiki/Lunar_New_Year) is not a pure lunar year but [lunisolar](https://en.wikipedia.org/wiki/Lunisolar_calendar), where the new year starts on the 2nd [New Moon](https://en.wikipedia.org/wiki/Lunar_phase) after the [December solstice](https://en.wikipedia.org/wiki/December_solstice) (~ Dec 21). The solar part defines the "seasons", which was important for the farmers. I created this interactive model to better understand the dynamic of this system.

<link rel="stylesheet" href="lunisolar.css">
<div>
    <canvas id="canvas-main" style='display: block; margin: 0 auto;'></canvas>

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

<br>