import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import { SelectPackage } from '../components/selectPackage';
//Function Order From earliest to latest
import {
  webAppPackages,
  mobileAppPackages,
  softwareDeveleopmentPackages,
  seoMarketingPackages,
  webAddOns,
  appAddOns,
  dataAddOns,
  scriptingAddOns,
  marketingAddOns,
} from '../data/business-services/index';
const ProductContext = React.createContext();
const ratePerHour = 50;
let initstate = {
  name: '',
  number: '',
  message: '',
  email: '',
  messageSent: false,
  errors: {},
  addOns: [],
  moreInfoNeeded: true,
  isModalOpen: false,
  activePackage: [],
  activeAddOns: [],
  finalPackage: {},
  finalAddOns: [],
  progress: 0,
  total: 0,
  hours: 0,
  packageTotal: 0,
  addOnTotal: 0,
};

export default class ProductProvider extends Component {
  state = {
    name: '',
    number: '',
    message: '',
    email: '',
    messageSent: false,
    errors: {},
    addOns: [],
    moreInfoNeeded: true,
    isModalOpen: false,
    activeAddOns: [],
    activePackage: [],
    finalPackage: {},
    finalAddOns: [],
    progress: 0,
    hours: 0,
    packageTotal: 0,
    addOnTotal: 0,
    total: 0,
  };

  setThemeColor = (color) => {
    switch (color) {
      case 'blue':
        document.body.style.setProperty(
          '--primary',
          'linear-gradient(to right, #33ccff 0%, #3366ff 100%)'
        );
        document.body.style.setProperty('--primary1', '#3366ff');
        document.body.style.setProperty('--primary2', '#33ccff');
        document.body.style.setProperty(
          '--primary3',
          'rgba(52, 106, 255, 0.1)'
        );
        document.body.style.setProperty(
          '--bannerimg',
          'url(/assets/images/banner/bg1.png)'
        );
        break;
      case 'green':
        document.body.style.setProperty(
          '--primary',
          'linear-gradient(to right, #184e68 0%, #57ca85 100%)'
        );
        document.body.style.setProperty('--primary1', '#57ca85');
        document.body.style.setProperty('--primary2', '#184e68');
        document.body.style.setProperty('--primary3', 'rgba(24, 78, 104, 0.1)');
        document.body.style.setProperty(
          '--bannerimg',
          'url(/assets/images/banner/bg4.png)'
        );
        break;
      default:
        break;
    }
  };

  //7/20/20
  addOnIncriment = (addOn) => {
    alert('Ran');
    addOn.count = addOn.count + 1;
    this.setState({ hours: this.state.hours + addOn.hours * addOn.count });
    console.log(addOn.count);
  };

  addOnDecriment = (addOn) => {
    if (addOn.count > 0) {
      console.warn(
        `${this.state.hours} - ${addOn.hours} * ${addOn.count}`,
        this.state.hours - addOn.hours * addOn.count
      );
      addOn.count = addOn.count - 1;
      this.setState({
        hours: this.state.hours - addOn.hours * addOn.count,
      });
    } else {
      return;
    }
    console.log(this.state.hours, 'Decriment');
  };

  //99,99 = sum of 3 steps 33.33*3
  progressIncrement = (incrBy) => {
    if (this.state.progress < 99.99) {
      this.setState({ progress: this.state.progress + incrBy });
    } else {
      return;
    }
  };

  setTotal = () => {
    this.setState({
      total:
        this.state.addOnTotal +
        this.state.packageTotal +
        this.state.hours * ratePerHour * Math.PI,
    });

    console.log(this.state);
  };



  selectAddOn = (addOn) => {
    

    if (this.state.addOns.includes(addOn.title)) {
      console.clear();
    let tempAddOns = this.state.addOns.filter((obj) => obj !== addOn.title);
      console.warn(tempAddOns)
      this.setState({addOns: tempAddOns})
      this.setState({ hours: this.state.hours - addOn.hours });
        console.log(' Found', this.state.hours + addOn.hours);
        setTimeout(() => {
          
          console.log(this.state.hours - addOn.hours * ratePerHour * Math.PI);
          this.setState({
            addOnTotal: Math.round(this.state.addOnTotal -  addOn.hours * ratePerHour * Math.PI),
          });
        }, 300);
      
      setTimeout(() => {
        this.setTotal();
      }, 300);
    } else {
      this.state.addOns.push(addOn.title);
      this.setState({ hours: this.state.hours + addOn.hours });
      console.log('Not Found', this.state.hours + addOn.hours);
      setTimeout(() => {
        this.setState({
          addOnTotal: Math.round(this.state.addOnTotal + addOn.hours * ratePerHour * Math.PI),
        });
      }, 300);
      setTimeout(() => {
        this.setTotal();
      }, 300);
    }
  };

  progressDecrement = (decrBy) => {
    if (this.state.progress > 0) {
      this.setState({ progress: this.state.progress - decrBy });
    } else {
      return;
    }
  };

   hasNumber(myString) {
  return /\d/.test(myString);
}

  handleFinalPackage = (servicePackage) => {
    let total = 0;
    let slicedNum = 0;
    if (this.state.finalPackage.length === 0) {
      this.setState({ packageTotal: servicePackage.price });
    } else {
      this.setState({ packageTotal: this.state.total + servicePackage.price });
    }
    this.setState({ finalPackage: servicePackage });
      
    this.progressIncrement(33.33);
    {
      servicePackage.addOns.map((addOn, index) => {
        if (this.state.addOns.includes(addOn)) {
          return;
        } else {
          // if (this.hasNumber(addOn)) {
          //   slicedNum = 5
          //   addOn.count = slicedNum
          // }
          
            this.state.addOns.push(addOn);
          
        }
      });
    }
    setTimeout(() => {
      console.warn(this.state.packageTotal);
    }, 300);
  };

  handleActiveAddOns = (packageName) => {
    switch (packageName) {
      case 'webPackages':
        this.setState({ activeAddOns: webAddOns });

        break;
      case 'mobileAppPackages':
        this.setState({ activeAddOns: appAddOns });
        break;
      case 'scriptingPackages':
        this.setState({ activeAddOns: scriptingAddOns });

        break;
      case 'marketingPackages':
        this.setState({ activeAddOns: marketingAddOns });
        break;
      case 'dataPackages':
        this.setState({ activeAddOns: dataAddOns });
        break;
      default:
        console.error('No packages Found');
    }
    setTimeout(() => {
      // console.log(this.state.activeAddOns);
    }, 300);
  };

  handleActivePackage = (packageName) => {
    switch (packageName) {
      case 'webPackages':
        this.setState({ activePackage: webAppPackages });

        break;
      case 'mobileAppPackages':
        this.setState({ activePackage: mobileAppPackages });
        break;
      case 'softwareDevelopmentPackages':
        this.setState({ activePackage: softwareDeveleopmentPackages });

        break;
      case 'seoMarketingPackages':
        this.setState({ activePackage: seoMarketingPackages });
        break;
      default:
      // code block
    }
    setTimeout(() => {
      console.log(this.state.activePackage);
    }, 300);
  };
  handleModal = (e) => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  sendEmail = (e) => {
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
          }
        );
    } else {
      console.log('Error');
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
          handleModal: this.handleModal,
          handleActPackage: this.handleActivePackage,
          handleActAddOns: this.handleActiveAddOns,
          handleFinalPackage: this.handleFinalPackage,
          setBackground: this.setThemeColor,
          selectAddOn: this.selectAddOn,
          incrProgress: this.progressIncrement,
          decrProgress: this.progressDecrement,
          setTotal: this.setTotal,
          addOnIncriment: this.addOnIncriment,
          addOnDecriment: this.addOnDecriment,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
