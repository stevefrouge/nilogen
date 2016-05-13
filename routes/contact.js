function Contact(){
    
    
}


module.exports = Contact;

Contact.prototype = {
    recievecontactform: function (req, res) {
        var self = this;
        var item = req.body;            
        /*self.contact(item, function (loggedin) {
            if (loggedin) {
               res.redirect('/loggedin');
            }else{
                res.redirect('/');
            }            
        });    */          
    }     
};