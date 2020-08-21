import React,{useContext,useEffect} from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { webAddOns, appAddOns } from '../data/business-services/index';
import { Button } from './common/button';
import { InputBoxes } from '../components/addOns/inputBoxes';
import Fade from 'react-reveal/Fade';
import { ProductContext } from '../pages/oniContext';
import {NumInputBoxes} from '../components/addOns/numInput'
export const SelectAddons = () => {
   const pCR = useContext(ProductContext);
  useEffect(() => {
 
    
  }, [pCR.addOns])
   
    return (
      <div style={{ textAlign: 'center' }}>
        <div className="list-buttons">
          <Button
            Class="button-rectangular btn button2 gradient-color"
            Name={'Web-App Add Ons'}
            Clickble={() => pCR.handleActAddOns('webPackages')}
            iconFalse={true}
            BtnIcon="btn-icon"
            type="touchAction"
          >
            Do Something
          </Button>{' '}
          <Button
            Class="button-rectangular btn button2 gradient-color"
            Name={'Mobile-Application Add Ons'}
            Clickble={() => pCR.handleActAddOns('mobileAppPackages')}
            iconFalse={true}
            BtnIcon="btn-icon"
            type="touchAction"
          >
            Cancel
          </Button>
        </div>
        <div className="list-buttons">
          <Button
            Class="button-rectangular btn button2 gradient-color"
            Name={'Software Add Ons'}
            Clickble={() => pCR.handleActAddOns('scriptingPackages')}
            iconFalse={true}
            BtnIcon="btn-icon"
            type="touchAction"
          />
          <Button
            Class="button-rectangular btn button2 gradient-color"
            Name={'Marketing  Add Ons'}
            Clickble={() => pCR.handleActAddOns('marketingPackages')}
            iconFalse={true}
            BtnIcon="btn-icon"
            type="touchAction"
          />
         
        </div>
        <div>
          {pCR.activeAddOns.length > 0 && (
            <Fade>
              <InputBoxes />
              
            </Fade>
          )}
        </div>
      </div>
    );
}
