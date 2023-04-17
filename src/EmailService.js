import emailjs from '@emailjs/browser';

class EmailService {

  sendEmail = (wo, template) => {
    var templateParams = {
      user_email: wo.email,
      to_name: wo.cname, 
      product_name: wo.productName,
      message: 'http://localhost:3000/estimation/'+ wo.woNumber
    };

      emailjs.send('service_rusnfka', template, templateParams, 'Wd7oGbO9z66LQ5FI4')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });
  };

}
export default new EmailService();