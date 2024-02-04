---
title: Lunisolar
layout: text
---

Position of the earth and moon vs sun.

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