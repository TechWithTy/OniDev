import React,{useEffect,useState,useContext} from 'react'
import { ProductContext } from '../../pages/oniContext'
import { Form, FormGroup, Label, Input } from 'reactstrap';

export const InputBoxes = (props) => {
    const pCR = useContext(ProductContext);
    return (
      <div>
        {pCR.activeAddOns.map((service, index) => (
          <FormGroup key={index} check inline>
            <Label key={index} check>
              <Input key={index} type="checkbox" onClick={() => pCR.selectAddOn(service)} /> {service.title}
            </Label>
          </FormGroup>
        ))}
      </div>
    );
}
