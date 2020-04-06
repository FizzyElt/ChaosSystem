
//刷新
function refresh() { 
    ctx.clearRect(0, 0, 500, 500)
    drawLine()
}

//繪製 x y 軸
function drawLine() { 

    //x軸
    ctx.beginPath();
    ctx.moveTo(0, 250);
    ctx.lineTo(500, 250);
    ctx.stroke()
    ctx.fill()

    //y軸
    ctx.beginPath();
    ctx.moveTo(250, 0);
    ctx.lineTo(250, 500);
    ctx.stroke()
    ctx.fill()

}

//畫點
function drawDot(x, y) {   
    ctx.beginPath()
    ctx.arc(x, y, 2, 0, 2 * Math.PI, true)
    ctx.fillStyle = "rgb(255, 39, 39)"
    ctx.fill()
}

//繪製圖形
function drawing(chaosCallback) { 
    chaosCallback.draw()
    chaosCallback.nextStatus()
}

//混沌系統選取
tinkerbellBtn.addEventListener('click', function () {
    clearInterval(drawInterval)
    refresh()
    selectSystem = new TinkerBell()
    count = 0
    title.textContent = "Tinkerbell Chaos System"
    formula.innerHTML=tinkerbellFormula
})
duffingBtn.addEventListener('click', function () {
    clearInterval(drawInterval)
    refresh()
    selectSystem = new Duffing()
    count = 0
    title.textContent = "Duffing Chaos System"
    formula.innerHTML=duffingFormula
})
henonBtn.addEventListener('click', function () {
    clearInterval(drawInterval)
    refresh()
    selectSystem = new Henon()
    count = 0
    title.textContent = "Henon Chaos System"
    formula.innerHTML=henonFormula
})

//開始畫點
drawBtn.addEventListener('click', function () {
    if (count === 0) {
        drawInterval = setInterval(() => {
            if (count < maxDot) {
                drawing(selectSystem)
                count++
            } else {
                clearInterval(drawInterval)
                alert("完成")
            }
        }, 1);
    } else if (count >= maxDot) {
        refresh()
        count = 0
        drawInterval = setInterval(() => {
            if (count < maxDot) {
                drawing(selectSystem)
                count++
            } else {
                clearInterval(drawInterval)
                alert("完成")
            }
        }, 1);
    }


})

drawLine()
