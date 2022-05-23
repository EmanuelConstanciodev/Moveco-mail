const nodemailer = require("nodemailer");
 
const { validationResult } = require('express-validator')



exports.mailer = async (req, res) => {
 
    //Cheking for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }



    try {
        
        // const values = JSON.parse(req)
        const { email, name, description} = req.body.values
        console.log(req.body.values)

        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: 'emanuelconstancio.dev@gmail.com', // generated ethereal user
                pass: 'lmoijnbaatzleikm', // generated ethereal password
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: `Consulta de  ${name}, ${email} `, // sender address
            to: "emanuelconstancio.dev@gmail.com", // list of receivers
            subject: "Consulta", // Subject line
            text: `${description}`, // plain text body
            html:  `<b>Moveco</b> 
                    <div>Consulta de ${name}</div>
                    <br/>
                    <div>${description}</div>
                    <br/>
                    <br/>
                    <br/>
                    <div>${email}</div>
                    <br/>
                    <br/>
                    <h3>Que tenga un buen día</h3>
            `, // html body
        });

        // console.log("Message sent: %s", info.messageId);

        // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    
        // console.log("Message sent: %s", info.messageId);
     
        // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
     
        res.status(200).send('ok')


    } catch (error) {
        console.log(error)
        res.status(500).send('Internar server error')
    }

}



