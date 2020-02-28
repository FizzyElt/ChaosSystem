var cv = document.getElementById('canvas')
var ctx = cv.getContext('2d')
var drawBtn = document.getElementById('dot')
var tinkerbellBtn=document.getElementById('tinkerbell-btn')
var duffingBtn=document.getElementById('duffing-btn')
var henonBtn=document.getElementById('henon-btn')
var title=document.getElementById('title')
let count = 0
const maxDot = 4000
let drawInterval
let selectSystem=new TinkerBell()