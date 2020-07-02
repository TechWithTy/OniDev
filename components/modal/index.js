import React, { useState, useContext, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ProductContext } from '../../pages/oniContext';
import { webAppPackages } from '../../data/business-services';
import { CardComp } from '../cards/card';
import { PackageCarousel } from '../carousel/packageCarousel';
import './modal.scss';
import { Button } from '../../components/common/button';
import { PrevButton } from '../common/button/prevButton';
import { SelectAddons } from '../selectAddons';
import { SelectPackage } from '../selectPackage';
import { ScheduleConsultation } from '../scheduleConsultation';
import Fade from 'react-reveal/Fade';
import { QuoteSteps } from '../quoteSteps';
import { finalQuote } from '../finalQuote';
const ModalExample = (props) => {
  const productConsumer = useContext(ProductContext);
  const [packageShowing, setpackageShowing] = useState([]);
  useEffect(() => {
    console.log(productConsumer.isModalOpen, 'Modal');
  }, [productConsumer.activePackage]);
  const { buttonLabel, className } = props;
  
  let handlePackageModal = (packageName) => {};

  
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
          {
            {
              0: <SelectPackage/>,
              33.33: <SelectAddons />,
              66.66: <finalQuote />,
              99.99: <ScheduleConsultation/>
            }[productConsumer.progress]
          }
          <QuoteSteps />
        </ModalBody>

        <ModalFooter>
          <div className="prev-btn">
            <PrevButton
              Class="button2-left btn button2 gradient-color"
              Name={'Previous'}
              Clickble={() => productConsumer.decrProgress(33.33)}
              BtnIcon="btn-icon"
              type="navigation"
            />
          </div>
          <div>
            <Button
              Class="button1 btn button2 gradient-color"
              Name={!productConsumer.messageSent ? 'SUBMIT' : 'SENT'}
              Clickble={() => productConsumer.incrProgress(33.33)}
              send={productConsumer.messageSent}
              BtnIcon="btn-icon"
              type="contact"
              onClick={productConsumer.handleModal}
            />
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
