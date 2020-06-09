import React, { Component } from 'react';
import emailjs from 'emailjs-com';

const ProductContext = React.createContext();

let initstate = {
  name: '',
  number: '',
  message: '',
  email: '',
  messageSent: false,
  errors: {},
  addONS: {
    name: 'price',
  },
  total: 0,
};

class ProductProvider extends Component {
  state = {
    name: '',
    number: '',
    message: '',
    email: '',
    messageSent: false,
    errors: {},
    addONS: {
      name: 'price',
    },
    total: 0,
  };

  sendEmail = (e) => {
    alert('E Sent');

    this.handleErrors();
    if (!this.state.errors) {
      console.log(this.state);
      emailjs
        .send(
          'OniDev',
          'onidev',
          {
            senderEmail: this.state.email,
            senderName: this.state.name,
            senderMessage: this.state.message,
            senderPhoneNumber: this.state.number,
            receiverEmail: 'tyriquedaniel14@gmail.com',
            number: 0,
            total: '10000',
            addOns: 'Everything',
          },
          'user_ra9kLqa47SSFhb4QI3Swp'
        )
        .then(
          (result) => {
            console.log(result.text);
            this.setState({ messageSent: true });
            setTimeout(() => {
              this.setState((prev) => ({ ...prev, ...initstate }));
              console.log(this.state);
            }, 3000);
          },
          (error) => {
            console.log(error.text);
            alert(error.text);
          }
        );
    }else{
      console.log("Error")
    }
  };
  //Set FieldS State
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
      this.setState({ name: 'First Name field shouldn’t be empty' });
    }
    if (!this.state.number) {
      error.number = 'Number field shouldn’t be empty';
      this.setState({ number: 'Number field shouldn’t be empty' });
    }
    if (!this.state.email) {
      error.email = 'Email field shouldn’t be empty';
      this.setState({ email: 'Email field shouldn’t be empty' });
    }
    if (!this.state.message) {
      error.message = 'Message field shouldn’t be empty';
      this.setState({ message: 'Message field shouldn’t be empty' });
    }
    if (Object.keys(error).length === 0) {
      alert('PASS');
      this.setState({
        errors: false,
      });
    } else {
      this.setState({
        errors: error,
      });
      return;
    }
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          setValue: this.setField,
          handleSubmit: this.sendEmail,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
