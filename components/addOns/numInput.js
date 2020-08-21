import React, {useState,useEffect,useContext} from 'react'
import InputNumber from 'rc-input-number';
import { ProductContext } from '../../pages/oniContext';

export const NumInputBoxes = (props) => {
      const pCR = useContext(ProductContext);
    return (
      <div>
        <span
          style={{ cursor: 'pointer' }}
          className=" btn btn-black mx-1"
          onClick={() => pCR.addOnDecriment(props.addOn)}
        >
          -
        </span>
        <span className=" btn-black mx-1">{props.addOn.count}</span>
        <span
          style={{ cursor: 'pointer' }}
          className="btn btn-black mx-1"
          onClick={() => pCR.addOnIncriment(props.addOn)}
        >
          +
        </span>
      </div>
    );
}
