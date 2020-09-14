import React,{useEffect} from 'react'
import { InlineWidget,openPopupWidget } from 'react-calendly';
//https://calendly.com/oni_development






export const ScheduleConsultation = () => {

  const prefillVar = {
    customAnswers: {
      a1: 'a1',
      a10: 'a10',
      a2: 'a2',
      a3: 'a3',
      a4: 'a4',
      a5: 'a5',
      a6: 'a6',
      a7: 'a7',
      a8: 'a8',
      a9: 'a9'
    },
    email: 'test@test.com',
    firstName: 'Jon',
    lastName: 'Snow',
    name: 'Jon Snow'
  }
  let openWidget = () => {
   
   openPopupWidget({ url:'https://calendly.com/oni_development',prefill: prefillVar, pageSettings: '', utm: '' });
 }
    return (
      <div >
       <span onClick={ ()=> {openWidget()}}> Schedule Consultation</span>
      </div>
    );
}
