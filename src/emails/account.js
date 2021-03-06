const nodemailer = require('nodemailer')

function transporter() {
    return nodemailer.createTransport({
        service: 'yahoo',
        auth:{
            user: process.env.MY_EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    })
}

function sendWelcomeEmail(email, name){
    const transporterObject = transporter()
    transporterObject.sendMail({
        from: `Task Manager API ${process.env.MY_EMAIL}`,
        to: `${email}`,
        subject:'Thanks!',
        text:`Welcome to our service, ${name}!`,
        html: `<b>Welcome to our service, ${name}!</b>`
    })
}

function sendDeleteEmail(email,name) {
    const transporterObject = transporter()
    transporterObject.sendMail({
        from:`Task Manager API ${process.env.MY_EMAIL}`,
        to:`${email}`,
        subject: 'Goodbye',
        text: `We hope to see you again ${name}.`,
        html: `<b>We hope to see you again ${name}.</b>`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendDeleteEmail
}