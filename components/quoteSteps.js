import React,{useContext,useState,useEffect} from 'react'
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
import { ProductContext } from '../pages/oniContext';
//pCR = Product Consumer
export const QuoteSteps = () => {
 const [status, setstatus] = useState('active')
     const pCR = useContext(ProductContext);
     useEffect(() => {
       if (pCR.progress >= 99.99) {
        setstatus('success')
       } else {
         setstatus('active')
      }
      
     }, [pCR.progress])
    return (
      <div>
        <Progress percent={pCR.progress}  status={status} />
      </div>
    );
}
