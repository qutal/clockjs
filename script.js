const svgWidth=300,svgHeight = 300

const padding=60

const draw = SVG().addTo('body').size(svgWidth,svgHeight)

const image = draw.image('clock.jpg').attr({width:svgWidth,height:svgHeight})

// const circle = draw.circle().radius(svgWidth/2-padding/2).attr({stroke:'red','stroke-width':'5',fill:'transparent',cx:svgWidth/2,cy:svgHeight/2})

const secondArrow = draw.rect(svgWidth/2-padding,1).attr({'transform-box': 'fill-box',x:svgWidth/2,y:svgHeight/2,
'transform-origin':'center',transform:`rotate(0)`})

const minuteArrow = draw.rect(svgWidth/2-padding,1).attr({'transform-box': 'fill-box',x:svgWidth/2,y:svgHeight/2,
'transform-origin':'center',transform:`rotate(0)`})

const hourArrow = draw.rect(svgWidth/2-padding,1).attr({'transform-box': 'fill-box',x:svgWidth/2,y:svgHeight/2,
'transform-origin':'center',transform:`rotate(0)`})

function getTime(){
    let time = new Date()
    return {
        s:time.getSeconds(),
        m:time.getMinutes(),
        h:time.getHours()
    }
}

function getSecondAngel(){
    return 360*getTime().s/60 - 90
}

function getMinuteAngel(){
    return 360*getTime().m/60 - 90
}

function getHourAngel(){
    return 360*getTime().h/12 - 90
}

let sec=getSecondAngel()
let min = getMinuteAngel()
let hour = getHourAngel()
setInterval(()=>{
    console.log(sec)
    secondArrow.attr({transform:`rotate(${sec})`})
    minuteArrow.attr({transform:`rotate(${min})`})
    hourArrow.attr({transform:`rotate(${hour})`})
    sec=getSecondAngel()
    min = getMinuteAngel()
    hour = getHourAngel()
},100)