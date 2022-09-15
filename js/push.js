document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('button')

    btn.addEventListener('click' , () => {
        Notification.requestPermission().then(perm => {
            if(perm === "granted") {
                const notification = new Notification("Mizu", {
                    body: Math.random(),
                    data: { message: "Mizu haver"},
                    icon: "../img/icon.png",
                    tag: "Override old message"
                })
            }
            notification.addEventListener("error", e => {
                alert(e)
            })
        })
    })
})
let notification
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        notification = new Notification("Message", {
            body: "Pleasee",
            tag: "Override Message"
        })
    } else {
        notification.close()
    }
})
