import React, { useEffect, useState, useContext } from 'react';
import { ProductContext } from '../../pages/oniContext';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { NumInputBoxes } from './numInput';
export const InputBoxes = (props) => {
  const pCR = useContext(ProductContext);

  let isDisabled = (addOn) => {
    if (pCR.addOns.includes(addOn)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      {pCR.activeAddOns.map((service, index) => {
        if (service.title.includes('_')) {
         return <FormGroup key={index} check inline>
            <Label key={index} check>
              <NumInputBoxes addOn={service} />
              {service.title}
            </Label>
          </FormGroup>;
        } else {
         return <FormGroup key={index} check inline>
            <Label key={index} check>
              <Input
                checked={isDisabled(service.title)}
                key={index}
                type="checkbox"
                onChange={() => pCR.selectAddOn(service)}
              />{' '}
              {service.title}
            </Label>
          </FormGroup>;
        }})}
    </div>
  );
};
