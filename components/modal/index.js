import React, { useState,useContext,useEffect } from 'react';
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ProductContext } from '../../pages/oniContext';
import { webAppPackages } from '../../data/business-services';
import { CardComp } from '../cards/card'
import {PackageCarousel} from '../carousel/packageCarousel'
import './modal.scss'
import {Button} from '../../components/common/button';
import Fade from 'react-reveal/Fade';

const ModalExample = (props) => {
  const productConsumer = useContext(ProductContext);
 const [packageShowing, setpackageShowing] = useState([])
  useEffect(() => {
   console.log(productConsumer.isModalOpen,'Modal')
  }, [productConsumer.activePackage])
  const { buttonLabel, className } = props;

  let handlePackageModal = (packageName) => {
  
 }

  return (
    <div>
      <Button color="danger" onClick={productConsumer.handleModal}>
        {buttonLabel}
      </Button>
      <Modal
        isOpen={productConsumer.isModalOpen}
        toggle={productConsumer.handleModal}
        className="modal_div"
      >
        <ModalHeader toggle={productConsumer.handleModal}>
          Choose a package
        </ModalHeader>
        <ModalBody>
          <div className="list-buttons">
            <Button
              Class="button-rectangular btn button2 gradient-color"
              Name={'Web App Packages'}
              Clickble={() => productConsumer.handleActPackage('webPackages')}
              iconFalse={true}
              BtnIcon="btn-icon"
              type="touchAction"
            >
              Do Something
            </Button>{' '}
            <Button
              Class="button-rectangular btn button2 gradient-color"
              Name={'Mobile Application Packages'}
              Clickble={() =>
                productConsumer.handleActPackage('mobileAppPackages')
              }
              iconFalse={true}
              BtnIcon="btn-icon"
              type="touchAction"
            >
              Cancel
            </Button>
          </div>
          <div>
            {productConsumer.activePackage.length > 0 && (
              <Fade >
                <PackageCarousel />
              </Fade>
            )}
          </div>
        </ModalBody>

        <ModalFooter>
          <Button
            Class="button1 btn button2 gradient-color"
            Name={!productConsumer.messageSent ? 'SUBMIT' : 'SENT'}
            Clickble={productConsumer.handleSubmit}
            send={productConsumer.messageSent}
            BtnIcon="btn-icon"
            type="contact"
            onClick={productConsumer.handleModal}
          />

          <Button
            Class="button1 btn button2 gradient-color"
            Name={!productConsumer.messageSent ? 'SUBMIT' : 'SENT'}
            Clickble={productConsumer.handleSubmit}
            send={productConsumer.messageSent}
            BtnIcon="btn-icon"
            type="contact"
            onClick={productConsumer.handleModal}
          />
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
