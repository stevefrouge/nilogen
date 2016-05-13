function contactDao() {
  
}

module.exports = contactDao;


contactDao.prototype = {
    contact: function (item, callback) {
        //var self = this;

        if(item.email == "sjf6598@gmail.com"){
            if(item.password == "pw"){
                callback(true);
            }
        }
        callback(false);
        //item.date = Date.now();
        //item.completed = false;
        //item.name = self.mycrypto.encrypt(item.name);

       
        //callback("error");
       
    }
    
};