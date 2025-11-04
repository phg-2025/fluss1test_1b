function zeigeWolf () {
    led.plot(Wolf, 0)
    led.unplot(4 - Wolf, 0)
}
function zeigeZiege () {
    led.plot(Ziege, 0)
    led.unplot(4 - Ziege, 0)
}
function zeigeBauer () {
    led.plot(Bauer, 0)
    led.unplot(4 - Bauer, 0)
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    led.unplot(2, Aktuell)
    Aktuell += 1
    if (Aktuell == 1) {
        Aktuell += 1
    }
    Aktuell = Aktuell % 5
    led.plot(2, Aktuell)
    Debug()
})
function Zeigen () {
	
}
function Debug () {
    oledssd1306.clearDisplay()
    oledssd1306.setTextXY(0, 0)
    oledssd1306.writeString("Aktuell")
    oledssd1306.setTextXY(0, 9)
    oledssd1306.writeNumber(Aktuell)
    oledssd1306.setTextXY(1, 0)
    oledssd1306.writeString("Bauer")
    oledssd1306.setTextXY(0, 9)
    oledssd1306.writeNumber(Bauer)
    oledssd1306.setTextXY(2, 0)
    oledssd1306.writeString("Kohl")
    oledssd1306.setTextXY(2, 9)
    oledssd1306.writeNumber(Kohl)
    oledssd1306.setTextXY(3, 0)
    oledssd1306.writeString("Wolf")
    oledssd1306.setTextXY(3, 9)
    oledssd1306.writeNumber(Wolf)
    oledssd1306.setTextXY(4, 0)
    oledssd1306.writeString("Ziege")
    oledssd1306.setTextXY(4, 9)
    oledssd1306.writeNumber(Ziege)
}
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (Aktuell == 0) {
        if (Bauer == 0) {
            Bauer = 4
        } else {
            Bauer = 0
        }
        zeigeBauer()
    }
    if (Aktuell == 2) {
        if (Kohl == 0) {
            Kohl = 4
        } else {
            Kohl = 0
        }
        zeigeKohl()
    }
    if (Aktuell == 3) {
        if (Wolf == 0) {
            Wolf = 4
        } else {
            Wolf = 0
        }
        zeigeWolf()
    }
    if (Aktuell == 4) {
        if (Ziege == 0) {
            Ziege = 4
        } else {
            Ziege = 0
        }
        zeigeZiege()
    }
    if (Aktuell != 0) {
        if (Bauer == 0) {
            Bauer = 4
        } else {
            Bauer = 0
        }
        zeigeBauer()
    }
    Debug()
})
function Blinken (Art: number) {
	
}
function zeigeKohl () {
    led.plot(Kohl, 0)
    led.unplot(4 - Kohl, 0)
}
let Ziege = 0
let Wolf = 0
let Kohl = 0
let Bauer = 0
let Aktuell = 0
Aktuell = 0
led.plot(0, 0)
led.plot(0, 2)
led.plot(0, 3)
led.plot(0, 4)
Bauer = 0
Kohl = 0
Wolf = 0
Ziege = 0
basic.forever(function () {
    if (Aktuell == 0) {
        Blinken(Bauer)
    }
    if (Aktuell == 2) {
        Blinken(Kohl)
    }
    if (Aktuell == 3) {
        Blinken(Wolf)
    }
    if (Aktuell == 4) {
        Blinken(Ziege)
    }
})
