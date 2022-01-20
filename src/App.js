import React, {Component} from 'react'
import Headlines from './Headlines'
import TopForm from './TopForm';
import axios from 'axios';

class App extends Component {
    //Initial state
    state = {
        //Country Code for news selection, default value us, take from Top Form ad passed to Headlines
        countryCode : 'us',
        category: 'All',
        search: '',
        isSearch: false ,
        countryName: '',
        countryCode1: '',
    }

    componentDidMount(){
        axios.get('https://extreme-ip-lookup.com/json/?key=oxbC9wvdhr0mAXiwDspJ').then((data)=>{
            console.log("dazdza",data)
        })
    }

    render() {
        return (
        <>
        {/* Form for select countryCode, categories and search */}
        <TopForm handleChange={this.handleChange} handleChangeCategory={this.handleChangeCategory} handleSearch={this.handleSearch} />
        <div className='mainLayout'>
        {/* display headlines by country */}
        <Headlines countryCode={this.state.countryCode} category={this.state.category} search={this.state.search} isSearch={this.state.isSearch} />
        <h1>Weather goes here</h1>
        </div>
        </>
        )
    }

    //function to handle change od country code 
    handleChange = (sid) => {
        this.setState ({countryCode : sid, isSearch: false},()=>{
            console.log("App cc"+this.state.countryCode)
        })
    }

    handleChangeCategory = (sid) => {
        this.setState ({category : sid, isSearch:false},()=>{
            console.log("App category"+this.state.category)
        })
    }

    handleSearch = (searchTerm) => {
        this.setState({search: searchTerm, isSearch: true},()=>{
            console.log("App Search"+this.state.category)
        })
    }
    
    getGeoInfo = () => {
        axios.get('https://extreme-ip-lookup.com/json/?key=oxbC9wvdhr0mAXiwDspJ',{'Access-Control-Allow-Origin': '*'}).then((response) => {
            let data = response.data;
            this.setState({
                countryName: data.country_name,
                countryCode1: data.country_calling_code
            });
            console.log(data);
            console.log(this.state.countryName, '-', this.state.countryCode1)
        }).catch((error) => {
            console.log(error);
        });
    };


}

export default App;