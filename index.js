function refresh() { //刷新
    ctx.clearRect(0, 0, 500, 500)
    drawLine()
}
function drawLine() { //繪製 x y 軸

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
function drawDot(x, y) {   //畫點
    ctx.beginPath()
    ctx.arc(x, y, 2, 0, 2 * Math.PI, true)
    ctx.fillStyle = "rgb(255, 39, 39)"
    ctx.fill()
}
function drawing(chaosCallback) { //繪製圖形
    chaosCallback.draw()
    chaosCallback.nextStatus()
}


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
