import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Suggest = () => {
  const form = useRef();
  const [image, setImage] = useState('');
  

  let templateParams = {
    name: 'James',
    email: 'pepe@gmail.com',
    message: 'hola amigos',
    image: image
  };

  async function sendEmail() {
    try {
      await emailjs.send('service_isyzkhm', 'template_1dvczzn', templateParams, '4L6qDDEc0zbLka_DW')
      console.log("enviando..")
    } catch (error) {
      
    }
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  return (
    <div>
      <div>
        <input type="file" onChange={handleImageChange} />
      </div>
      <div>
        <button onClick={sendEmail}>Enviar</button>
      </div>
    </div>
  );
};








{/* <form ref={form} onSubmit={sendEmail}>
<label>Name</label>
<input type="text" name="user_name" />
<label>Email</label>
<input type="email" name="user_email" />
<label>Message</label>
<textarea name="message" />

<input type="submit" value="Send" />
</form> */}


// emailjs.sendForm('service_isyzkhm', 'template_1dvczzn', form.current, '4L6qDDEc0zbLka_DW')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });


// const sendEmail = (e) => {
//   e.preventDefault();
 
//   emailjs.sendForm('service_isyzkhm', 'template_1dvczzn', form.current, '4L6qDDEc0zbLka_DW')
//     .then((result) => {
//         console.log(result.text);
//     }, (error) => {
//         console.log(error.text);
//     });
// };