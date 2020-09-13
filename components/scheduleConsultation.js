import React from 'react'
import { InlineWidget } from 'react-calendly';
//https://calendly.com/oni_development

export const ScheduleConsultation = () => {
    return (
      <div>
        <InlineWidget
          pageSettings={{
            backgroundColor: 'ffffff',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: '00a2ff',
            textColor: '4d5055',
          }}
          prefill={{
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
              a9: 'a9',
            },
            email: 'test@test.com',
            firstName: 'John ',
            lastName: 'Doe',
            name: 'Jon Doe',
          }}
          styles={{
            height: '1000px',
          }}
          url="https://calendly.com/oni_development"
          utm={{
            utmCampaign: 'Spring Sale 2019',
            utmContent: 'Shoe and Shirts',
            utmMedium: 'Ad',
            utmSource: 'Facebook',
            utmTerm: 'Spring',
          }}
        />
      </div>
    );
}
