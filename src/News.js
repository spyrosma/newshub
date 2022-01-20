//News component
import React,  { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from './images/logo.jpg'
import { format, parseISO } from 'date-fns'

function News(props) {

  //logo to e used when image URL is ull
    const logo = require('./images/logo.jpg')

  //Display News
    const items = props.articles.map((item,index) => {
        
        //Create content placeholder   
        const content = (item.description!='' && item.description!=null) ? item.description : 'Please visit website to read full article';
        //Create image placeholder
        let image = item.urlToImage!=null ? item.urlToImage : logo;
        fetch(item.urlToImage).then(res => {
          if (res.status!=200) {
            image=logo;
          }
        }
          )
        //display News
        return (
        <div key={index}>
        <Card  style={{ width: '18rem' }}>
            <Card.Img variant="top"  src={image} />
            <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
            {content}
            </Card.Text>
            <Button variant="primary" onClick={()=>{window.open(item.url, "_blank")}}>Read Full Story</Button>
            </Card.Body>
            <Card.Footer className="text-muted"> 
              Source: <a href={item.url} target="_blank"> {item.source.name}</a><br></br> 
              Author: {item.author}<br></br>
              Published At: {format(parseISO(item.publishedAt),"dd-MM-yyyy HH:mm")}
            </Card.Footer>
      </Card>
      
      </div>
        )
    }
    )

    return <div className='newsgrid'>{items}</div>
}



export default News
