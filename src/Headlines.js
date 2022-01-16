import React, {Component} from 'react'
import axios from 'axios'
import News from './News';
import TopForm from './TopForm';

class Headlines extends Component {
state = {
    data:[],
    countryCode : 'us',
}

componentDidMount() {
    const url='https://newsapi.org/v2/top-headlines?';
    const country='country=';
    let countryCode = this.state.countryCode;
    const api='&apiKey=d34aacd8470a497b9e1facfa662dcf63';

    let fullUrl = url+country+countryCode+api;

    axios.get(fullUrl).then((results) => {
        this.setState({
            data: results.data.articles
        })
        console.log(this.state.data)
    })

}

render() {
    return <div>
        <TopForm handleChange={this.handleChange}/>
        <News articles={this.state.data}/>
    </div>


 
}

 handleChange = (sid) =>  {
    

    this.setState ({countryCode : sid},()=>{
        console.log(this.state.countryCode)
    })

    setTimeout(() => {
        const url='https://newsapi.org/v2/top-headlines?';
    const country='country=';
    let countryCode = this.state.countryCode;
    const api='&apiKey=d34aacd8470a497b9e1facfa662dcf63';

    let fullUrl = url+country+countryCode+api;
        axios.get(fullUrl).then((results) => {
            this.setState({
                data: results.data.articles
            })
        })
      
      }, 100);

    


}

}

export default Headlines