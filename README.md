# nodemailerSendEmailApp 

A fully functional sample project for using nodemailer to send emails with Gmail, using the following technologies:

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

 ## Table of contents:
- [Installation](#installation)
- [Configuration](#configuration)
- [Example](#example)
- [Usage](#usage)
- [Contribution](#contribution)
- [License](#license)

 ## Installation

You can install this project using npm. Make sure you have Node.js installed on your machine.

You need the following nodejs modules:

- npm i ejs
- npm i express
- npm i nodemailer
- npm i nodemon

## Configuration

Before using the email sending service, you need to configure the following environment variables:

user: Your email address from which the emails will be sent (only use GMAIL).

pass: The app password create in your gmail following this video: https://www.youtube.com/watch?v=qpAI5qZR9ms

You can set up these environment variables in a sendEmails.js in utils folder

## Example

Below is a complete example of how to be the sendnEmail.js file: 


```
const sendEmail = async (to, messageContent)  =>{
    try{
        // create transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth:{
                user: "anyone@gmail.com" , //(Your gmail) 
                pass: "1234kaofm42" // (The app password of gmail) 
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

```

## Usage

Once you have configured the environment variables, you can use the email sending service.

1- First start the server: npm run server

2- Go to https://localhost:9000

3- in the first form insert the gmail address to which you are going to send the mail to

4 - in the second form insert you message

5- Click on the button send email

6- That's all enjoyment :)

![image](https://github.com/Bryan18201/nodemailerSendEmailApp/assets/80865397/62f447a0-c8e6-4c79-a8f8-f519aded6ac2)


## Contribution

If you want to contribute to this project, follow these steps:

1-Fork the repository.

2-Create a new branch for your contribution.

3-Make your changes and improvements.

4-Submit a Pull Request.

## License

This project is licensed under the MIT License https://opensource.org/license/mit/.

