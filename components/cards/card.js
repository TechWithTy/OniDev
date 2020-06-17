import React,{useEffect,useState} from 'react';
import { Card, CardText, CardTitle, Col, Row,CardImg,CardBody,Badge } from 'reactstrap';
import { packageImages } from '../../data/image_source';
import './card.scss';
import Loader from 'react-loader-spinner';
const domLoaded = require('dom-loaded');

//p = props
export const CardComp = (props) => {
  const [loading, setloading] = useState(true)
    const [imageloading, setimageloading] = useState(true);

    useEffect(() => {
       (async () => {
         await domLoaded;
         setloading(false)
       })();
    }, [loading])
 const p = props
 
  if (!loading) {
    return (
      <Card>
        <CardImg
          top
          onLoad={() => {
            setimageloading(false);
          }}
          width="100%"
          src={packageImages.map((image, index) => {
            let packageTitle = p.title.toLowerCase();
            if (packageTitle.includes(image.uID)) {
              return image.src;
            } else {
              console.log(p.title, image.uID);
            }
          })}
          alt="Card image cap"
          className={!imageloading ? '' : 'display-none'}
        />
        {imageloading && (
         <div className="image-loader"> <Loader
            type="Triangle"
            color="#e100ff "
            height={50}
            width={50}
            timeout={99000}
          /></div>
        )}
        <CardBody>
          <CardTitle>{p.title}</CardTitle>
          <CardText>
            {p.text}
            <br />
            {p.addOns.map((addOn) => (
              <Badge color="primary" pill>
                {addOn}
              </Badge>
            ))}
          </CardText>{' '}
        </CardBody>
      </Card>
    );
  } else {
    return (
      <div className="theme-loader">
        <Loader
          type="Triangle"
          color="#e100ff "
          height={50}
          width={50}
          timeout={3000}
        />
      </div>
    );
    
  }
};
