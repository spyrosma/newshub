//News component
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { format, parseISO } from 'date-fns'

function News(props) {

  //logo to be used when image URL is null
    const logo = require('./images/logo.png')

  //Display News
    const items = props.articles.map((item,index) => {
        
        //Create content placeholder   
        const content = (item.description!=='' && item.description!==null) ? item.description : 'Please visit website to read full article';
        //Create image placeholder
        let image = item.urlToImage 
        //display News
        return (
        
        <Card  key={index}>
            <Card.Img variant="top"  src={image ? image : logo} onError={event => {
          event.target.src = logo
          event.onerror = null
        }} />
            <Card.Body>
            <Card.Title className='cardTitle'>{item.title}</Card.Title>
            <Card.Text className='cardTitle' id='cardText'>
            {content}
            </Card.Text>
            <Button variant="primary" onClick={()=>{window.open(item.url, "_blank", 'noopener')}}>Read Full Story</Button>
            </Card.Body>
            <Card.Footer className="text-muted"> 
              Source: <a href={item.url } target="_blank" rel="noopener noreferrer"> {item.source.name}</a><br></br> 
              Author: {item.author}<br></br>
              Published At: {format(parseISO(item.publishedAt),"dd-MM-yyyy HH:mm")}
            </Card.Footer>
      </Card>
      
        )
    }
    )

    return <div className='newsgrid'>{items}</div>
}



export default News
