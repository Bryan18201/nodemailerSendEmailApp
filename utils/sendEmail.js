const nodemailer = require("nodemailer");

const sendEmail = async (to, messageContent)  =>{
    try{
        // create transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth:{
                user: "" , //(Your gmail) ex = user: "yourgmail@gmail.com"
                pass: "" // (The app password of gmail) ex = pass: "yourpass"
            },
        });
        const message = {
            // You can change this part for anything do u want :)
            to: to,
            subject: "New Message from Nodemailer APP",
            html: `
            <h3>You have received a new message from Nodemailer App</h3>
            <p> ${messageContent}</p>
            `,
        };
        // sende the email

        const info = await transporter.sendMail(message);
        console.log("Message send", info.messageId);

    }catch(error){
        console.log(error);
        throw new Error("Email could not be send");
    }
}

module.exports = sendEmail;



