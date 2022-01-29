//Headlines Component
import React, {Component} from 'react'
import axios from 'axios'
import News from './News';


class Headlines extends Component {

    //Initial state
state = {
    data:[],
    countryCode: '',
    category: '',
    searchTerm: '',
    
}
//Receive Country Code from App
constructor(props) {
    super(props);

    console.log(this.props.countryCode)
}

    //Display data
render() {
    console.log(this.props.countryCode + "-" + this.state.countryCode)
    if (this.props.countryCode!=this.state.countryCode || this.props.category!=this.state.category || this.props.search!=this.state.searchTerm) {
        this.setState({countryCode: this.props.countryCode})
        this.setState({category: this.props.category})
        this.setState({searchTerm: this.props.search})
        //Create proper API URL
    const url='https://newsapi.org/v2/top-headlines?';
    const country='country=';
    const category='&category=';
    let countryCode = this.props.countryCode;
    let categoryName=this.props.category;
    const searchPre = 'q=';
    let search = this.props.search;
    const api='&apiKey=d34aacd8470a497b9e1facfa662dcf63';
    let isSearch = this.props.isSearch 

    let fullUrl = isSearch==true ? (url+searchPre+search+api) : categoryName=='All' ? (url+country+countryCode+api) : (url+country+countryCode+category+categoryName+api) ;
    //Get Data
    axios.get(fullUrl,{
        'Content-Type': 'application/json'
}).then((results) => {
        this.setState({
            data: results.data.articles
        })
        console.log(fullUrl)
        console.log(this.state.data)
    })
    }

    return <div>
        <News articles={this.state.data}/>
    </div> 
}
}

export default Headlines