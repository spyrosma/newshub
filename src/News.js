import React,  { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Modal } from 'react-bootstrap';

function News(props) {

    const [show, setShow] = useState(false);
    const [mTitle,setMTitle] = useState('');
    const [mContent,setMContent] = useState('');


    const items = props.articles.map((item,index) => {
        const handleClose = () => setShow(false);
        const handleShow = () => {
            setMTitle(item.title);
            setMContent(content)            
            setShow(true);
        }

        const content = item.content!=null ? item.content : item.description!='' ? item.description : 'Please visit website to read full article'

        return (
        <div key={index}>
        <Card  style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.urlToImage} />
            <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
            {content}
            </Card.Text>
            <Button variant="primary" onClick={handleShow}>Read Full Story</Button>
            </Card.Body>
            <Card.Footer className="text-muted"> Source: <a href={item.url} target="_blank"> {item.source.name}</a><br></br> Author: {item.author} </Card.Footer>
      </Card>
            
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{mTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{mContent}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
        )
    }
    )

    return <div className='newsgrid'>{items}</div>
}



export default News
