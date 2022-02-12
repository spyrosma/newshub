import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function NewsCarousel (props) {

    //logo to e used when image URL is ull
    const logo = require('./images/logo.png');

    const items = props.articles.slice(0,3).map((item,index) => {
        
        //Create content placeholder   
        const content = (item.description!=='' && item.description!==null) ? item.description : 'Please visit website to read full article';
        //Create image placeholder
        let image = item.urlToImage;

        return (
                <Carousel.Item key={index}>
                    <img width={'100%'} height={'400rem'} margin-left={'auto'} margin-right={'auto'} src={image ? image : logo} alt={item.title} onError={event => {
          event.target.src = logo
          event.onerror = null
        }} />
                    <Carousel.Caption className='carousel-caption d-none d-md-block bg-dark' >
                         <h3>{item.title}</h3>
                         <p>{content}</p>
                    </Carousel.Caption>
                </Carousel.Item>
        )

    }) 

    return <Carousel className='carouselNews'>{items}</Carousel>
}

export default NewsCarousel;
