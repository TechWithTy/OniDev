import React, { Component } from 'react';

const ProductContext = React.createContext();



 class ProductProvider extends Component {
   state = {
     name: '',
     number: '',
     message: '',
     email: '',
       messageSent: false,
       errors: {
         
     },
     addONS: {
       'name': 'price',
       },
     total: 0
   };

     sendEmail = (e) => {
         alert('E Sent');
       
     

         this.handleErrors()
         console.log(this.state);
         emailjs
             .send(
                 'default_service',
                 'responsive_renovations',
                 {
                     senderEmail: this.state.email,
                     senderName: this.state.name,
                     senderMessage: this.state.message,
                     senderPhoneNumber: this.state.number,
                     receiverEmail: 'responsiverenovations@gmail.com',
                 },
                 'user_ra9kLqa47SSFhb4QI3Swp'
             )
             .then(
                 (result) => {
                     console.log(result.text);
                     this.setState({ messageSent: True })
                     setTimeout(() => {
                         setstate((prev) => ({
                             ...prev,
                             ...initialState
                         }));
                         this.setState((prev) => ({ ...prev, ...initialState }))
                     }, 3000);
                 },
                 (error) => {
                     console.log(error.text);
                 }
             );
 
     }
     setField = (targetID, textValue) => {
      
     console.log('Run');
     this.setState(() => {
       return {
         [targetID]: textValue,
       };
     });
     setTimeout(() => {
       console.log(this.state);
     }, 300);
   };

     handleErrors = (e) => {
         

       const error = {};
          if (!this.state.name) {
              error.name = 'First Name field shouldn’t be empty';
              this.setField('name',error.name);
          }
          if (!this.state.email) {
              error.email = 'Email field shouldn’t be empty';
              this.setField('email', error.name);
          }
          if (!this.state.message) {
              error.message = 'Message field shouldn’t be empty';
              this.setField('message', error.name);
          }

          if (this.state.error) {
            setErrors(this.state.error);
          } else {
            console.log("PASS")
         }
         if (!error) {
            console.log('PASS');
         } else {
             return
         }
     };

   render() {
     return (
       <ProductContext.Provider
         value={{
           ...this.state,
           setValue: this.setField,
           handleSubmit: this.sendEmail
         }}
       >
         {this.props.children}
       </ProductContext.Provider>
     );
   }
 }

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
