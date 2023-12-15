const canvas = document.querySelector("#game")
const ctx = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight


class Note {
    static radius = 30
    constructor({ position }) {
        this.position = position
        this.radius = Note.radius
        this.velocity = 5
    }
    draw(color) {
        ctx.beginPath()
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()
        ctx.closePath()
    }
    update() {
        this.position.y += this.velocity
    }
}


const controls = [
    green = {
        y: 550,
        x: 40
    },
    red = {
        y: 550,
        x: 110
    },
    yellow = {
        y: 550,
        x: 180
    },
    blue = {
        y: 550,
        x: 250
    }
]
const controlColors = {
    greenCenter: 'black',
    redCenter: 'black',
    blueCenter: 'black',
    yellowCenter: 'black',
}

const greenNotes = []
const redNotes = []
const blueNotes = [] 
const yellowNotes = []
const noteGeneration = () => {
    color = Math.floor(Math.random()*4)+1
    console.log(color)
    switch(color){
        case 1: greenNotes.push(
            new Note ({
                position:{
                    x:40,
                    y:40
                }
            })
        )
        break;
        case 2: redNotes.push(
            new Note ({
                position:{
                    x:110,
                    y:40
                }
            })
        )
        break;
        case 3: blueNotes.push(
            new Note ({
                position:{
                    x:180,
                    y:40
                }
            })
        )
        break;
        case 4: yellowNotes.push(
            new Note ({
                position:{
                    x:250,
                    y:40
                }
            })
        )
        break;
    }


}
noteGeneration()

controls.map((control, index) => {
    ctx.beginPath()
    ctx.arc(control.x, control.y, 30, 0, Math.PI * 2)
    if (index === 0) {
        ctx.strokeStyle = 'green'
    }
    else if (index === 1) {
        ctx.strokeStyle = 'red'
    }
    else if (index === 2) {
        ctx.strokeStyle = 'blue'
    }
    else if (index === 3) {
        ctx.strokeStyle = 'yellow'
    }
    ctx.lineWidth = 3
    ctx.stroke()
    ctx.closePath()
})
const animate = () => {
    window.requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, 300, 600)
    ctx.closePath()


    controls.map((control, index) => {
        ctx.beginPath()
        ctx.arc(control.x, control.y, 30, 0, Math.PI * 2)
        if (index === 0) {
            ctx.strokeStyle = 'green'
            ctx.fillStyle = controlColors.greenCenter
        }
        else if (index === 1) {
            ctx.strokeStyle = 'red'
            ctx.fillStyle = controlColors.redCenter
        }
        else if (index === 2) {
            ctx.strokeStyle = 'blue'
            ctx.fillStyle = controlColors.blueCenter
        }
        else if (index === 3) {
            ctx.strokeStyle = 'yellow'
            ctx.fillStyle = controlColors.yellowCenter
        }
        ctx.lineWidth = 3
        ctx.fill()
        ctx.stroke()
        ctx.closePath()
    })

    greenNotes.map((note) =>{
        if(note.position.y >= controls[0].y && lastKey.a.pressed === true){
            greenNotes.shift()
        }
        note.draw('green')
        note.update()
        if(note.position.y === 100){
            noteGeneration()
        }
    })
    redNotes.map((note) =>{
        if(note.position.y >= controls[1].y && lastKey.s.pressed === true){
            redNotes.shift()
        }
        note.draw('red')
        note.update()
        if(note.position.y === 100){
            noteGeneration()
        }
    })
    blueNotes.map((note) =>{
        if(note.position.y >= controls[2].y && lastKey.d.pressed === true){
            blueNotes.shift()
        }
        note.draw('blue')
        note.update()
        if(note.position.y === 100){
            noteGeneration()
        }
    })
    yellowNotes.map((note) =>{
        if(note.position.y >= controls[3].y && lastKey.f.pressed === true){
            yellowNotes.shift()
        }
        note.draw('yellow')
        note.update()
        if(note.position.y === 100){
            noteGeneration()
        }
    })
    
    
}
animate()

const lastKey = {
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    },
    f: {
        pressed: false
    }
}

document.addEventListener('keydown', ({ key }) => {
    if (key === 'a') {
        lastKey.a.pressed = true
        controlColors.greenCenter = 'orange'
    }
    if (key === 's') {
        lastKey.s.pressed = true
        controlColors.redCenter = 'orange'
    }
    if (key === 'd') {
        lastKey.d.pressed = true
        controlColors.blueCenter = 'orange'
    }
    if (key === 'f') {
        lastKey.f.pressed = true
        controlColors.yellowCenter = 'orange'
    }

})
document.addEventListener('keyup', ({ key }) => {
    if (key === 'a') {
        lastKey.a.pressed = false
        controlColors.greenCenter = 'black'
    }
    if (key === 's') {
        lastKey.s.pressed = false
        controlColors.redCenter = 'black'
    }
    if (key === 'd') {
        lastKey.d.pressed = false
        controlColors.blueCenter = 'black'
    }
    if (key === 'f') {
        lastKey.f.pressed = false
        controlColors.yellowCenter = 'black'
    }

})

