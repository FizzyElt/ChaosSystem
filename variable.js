var cv = document.getElementById('canvas')
var ctx = cv.getContext('2d')
var drawBtn = document.getElementById('dot')
var counter=document.getElementById('counter')
var tinkerbellBtn=document.getElementById('tinkerbell-btn')
var duffingBtn=document.getElementById('duffing-btn')
var henonBtn=document.getElementById('henon-btn')
var title=document.getElementById('title')
var formula=document.querySelector('.formula-box')
let count = 1

//最大畫點次數
const maxDot = 3000


let drawInterval

//當前混沌系統
let selectSystem=new TinkerBell()


//運算式
const tinkerbellFormula=`
<h2>x<sub>n+1</sub> = x<sub>n</sub><sup style="margin-left: -8px;">2</sup> - y<sub>n</sub><sup style="margin-left: -8px;">2</sup> + 0.9x<sub>n</sub> -
0.6013y<sub>n</sub></h2>
<h2>y<sub>n+1</sub> = 2x<sub>n</sub>y<sub>n</sub> + 2x<sub>n</sub> + 0.5y<sub>n</sub></h2>`
const duffingFormula=`<h2>x<sub>n+1</sub> = y<sub>n<sub></h2>
<h2>y<sub>n+1</sub> = -0.2x<sub>n</sub> + 2.75y<sub>n</sub> - y<sub>n</sub><sup style="margin-left: -8px;">3</sup></h2>`
const henonFormula=`<h2>x<sub>n+1</sub> = 1 - 1.4x<sub>n</sub><sup style="margin-left: -8px;">2</sup> + y<sub>n</sub>
</h2>
<h2>y<sub>n+1</sub> = 0.3x<sub>n</sub></h2>`