---
title: Why is the Lunar New Year only in winter?
layout: text
---

That question led me to learn that Lunar New Year is in fact [lunisolar](https://en.wikipedia.org/wiki/Lunisolar_calendar), where the new year starts on the 2nd [New Moon](https://en.wikipedia.org/wiki/Lunar_phase) after the [December solstice](https://en.wikipedia.org/wiki/December_solstice) (~ Dec 21).    

## The Model

The lunisolar model is basically about the lengths of two orbits: 

- The Earth around the Sun: 365.242374 days 
- The Moon around the Earth: 27.321661 days

<link rel="stylesheet" href="lunisolar.css">
<div>
    <label>Year</label>
    <input id="input-year" type="range" min="2000" max="2030" value="2024" />
    <span id="ui-year"></span>
    <br/>

    <label>Day</label>
    <input id="input-day" type="range" min="0" max="365" value="39" />
    <span id="ui-day"></span>
    <br>
    <canvas id="canvas-main">

    </canvas>

    <script src='lunisolar.js'></script>
    <script>
        (
            function(){
                applyTime()
            }
        )()
    </script>

</div>