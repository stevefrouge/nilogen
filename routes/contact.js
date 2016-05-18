var nodemailer = require('nodemailer');


function Contact(){
    
    
}
module.exports = Contact;
function getSmtpConfig(){
     var smtpConfig = {
             host: 'smtp-mail.outlook.com',
             port: 587,
             secure: false, // use SSL
                auth: {
                    user: 'nilogensite@outlook.com',
                    pass: 'ev@St2ab'
                },
                tls: {
                  ciphers:'SSLv3'
                 }
        };
        return smtpConfig;
}
function sendEmail(body, res){
    
     var mailOptions = {
                from: 'nilogensite@outlook.com', // sender address
                to: 'sjf6598@gmail.com', // list of receivers
                subject: 'Nilogen Contact Form', // Subject line
                text: body, // plaintext body
                html: body // html body
            }
    var transporter2 = nodemailer.createTransport(getSmtpConfig());
        transporter2.sendMail(mailOptions, function(error, info){
            var status;
            if(error){
                //return console.log(error);
                status = {mailstatus: error};              
            }else{
                status = {mailstatus: 'sent'};
                console.log('Message sent: ' + info.response);
            }
          
            
            sendResponse(status,res);
        });
   
}
function sendResponse(status, res){
        res.writeHead(200, {"Content-Type": "application/json"});     
        var json = JSON.stringify(status);
        res.end(json);
}
Contact.prototype = {
    recievecontactform: function (req, res) {       
        var self = this;
        var item = req.body;  
        var body = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';       
        body += '<html xmlns="http://www.w3.org/1999/xhtml">'; 
        body += '<head>';
        body += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';
        body += '<title>Demystifying Email Design</title>';
        body += '<meta name="viewport" content="width=device-width, initial-scale=1.0"/>';
        body += '</head>';
        body += '<body style="margin: 0; padding: 0;">';
        body += '<h1>Nilogen Contact Form</h1>'
        body += '<table border="1" cellpadding="0" cellspacing="0" width="100%">';
        body += '<tr>';
        body += '<td>Name</td>' + '<td>' + item.name +'</td>';
        body += '</tr>';
        body += '<tr>';
        body += '<td>Email</td>' + '<td>' + item.email +'</td>';
        body += '</tr>';
        body += '<tr>';
        body += '<td>Phone</td>' + '<td>' + item.phone +'</td>';
        body += '</tr>';
        body += '<tr>';
        body += '<td>Comments</td>' + '<td>' + item.comments +'</td>';
        body += '</tr>';
        body += '</table>';
        body += '</body>';
        body += '</html>';           
        var status = sendEmail(body,res);  
              
    }     
};