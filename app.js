
// SAHIFALARNI OCHISH
function sahifaniOch(id) {
    document.querySelectorAll(".sahifa").forEach(function (sahifa) {
        sahifa.style.display = "none"
    })

    document.getElementById(id).style.display = "block"

    window.scrollTo(0, 0)
}


// MENYU TUGMALARI
let tugmalar = {
    btn1: "bosh",
    btn2: "haqida",
    btn3: "xizmatlar",
    btn4: "shifokorlar",
    btn5: "narxlar",
    btn6: "qabul",
    logo: "bosh",
    xizmatga: "xizmatlar",
    doctorOtkaz: "shifokorlar",
    narxOtkaz: "narxlar",
    boshQabul: "qabul",
    boshQabul2: "qabul",
    narxQabul: "qabul"
}

for (let tugma in tugmalar) {
    let tugg = document.getElementById(tugma)
    tugg.addEventListener("click", function (event) {
        event.preventDefault()
        sahifaniOch(tugmalar[tugma])
    })
}


// TUNGI REJIM
let rejim = document.getElementById("rejim")

rejim.addEventListener("click", function () {
    document.body.classList.toggle("tungi")

    if (document.body.classList.contains("tungi")) {
        rejim.innerHTML = "☀️ Kunduzgi rejim"
    } else {
        rejim.innerHTML = "🌙 Tungi rejim"
    }
})



// ANIMATSIYALAR

let qatorlar = document.querySelectorAll(".qator")

let kattaRasmlar = document.querySelectorAll(".katta-blok")


qatorlar.forEach(function (qator, index) {

    if (index % 2 == 0) {

        qator.classList.add("chap")

    } else {

        qator.classList.add("ong")

    }

})


if ("IntersectionObserver" in window) {

    let kuzatish = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("korindi")

            } else {

                entry.target.classList.remove("korindi")

            }

        })

    }, {
        threshold: 0.15
    })


    qatorlar.forEach(function (qator) {
        kuzatish.observe(qator)
    })

    kattaRasmlar.forEach(function (rasm) {
        kuzatish.observe(rasm)
    })

} else {

    qatorlar.forEach(function (qator) {
        qator.classList.add("korindi")
    })

    kattaRasmlar.forEach(function (rasm) {
        rasm.classList.add("korindi")
    })

}


// QABUL SANASINI CHEKLASH

let sana = document.getElementById("sana")

let bugun = new Date()

let yil = bugun.getFullYear()

let oy = String(bugun.getMonth() + 1).padStart(2, "0")

let kun = String(bugun.getDate()).padStart(2, "0")

sana.min = yil + "-" + oy + "-" + kun


// QABUL FORMASI

let qabulForm = document.getElementById("qabulForm")

qabulForm.addEventListener("submit", function (event) {

    event.preventDefault()

    let ism = document.getElementById("ism").value.trim()

    let telefon = document.getElementById("telefon").value.trim()

    let xizmat = document.getElementById("xizmat").value

    let qabulSanasi = document.getElementById("sana").value

    let izoh = document.getElementById("izoh").value.trim()


    if (ism == "" || telefon == "" || xizmat == "" || qabulSanasi == "") {

        alert("Iltimos, barcha kerakli ma'lumotlarni kiriting!")

        return

    }


    alert(
        "Rahmat, " + ism + "!\n\n" +
        "Sizning ma'lumotlaringiz qabul qilindi.\n\n" +
        "Telefon: " + telefon + "\n" +
        "Xizmat: " + xizmat + "\n" +
        "Qabul sanasi: " + qabulSanasi + "\n" +
        "Izoh: " + (izoh || "Yo'q")
    )


    qabulForm.reset()

})
