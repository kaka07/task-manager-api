const sgMail=require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeMail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'jatinsethi0400@gmail.com',
        subject:'Nothing',
        text:`Hi ${name}`
    })
}

const sendCancellationMail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'jatinsethi0400@gmail.com',
        subject:'Bye',
        text:`Bye ${name}`
    })
}

module.exports={
    sendWelcomeMail,
    sendCancellationMail
}