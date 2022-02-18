import React, {Component} from 'react'
import Headlines from './Headlines'
import TopForm from './TopForm';
import axios from 'axios';
import Weather from './Weather';

class App extends Component {
    //Initial state
    state = {
        //Country Code for news selection, default value us, take from Top Form ad passed to Headlines
        countryCode : 'us',
        //Category for ews selection
        category: 'All',
        //Search string and search state
        search: '',
        isSearch: false ,
        //city info for weather component
        city: '',
        lat:'',
        lon:'',
    }
    //temp values
    tempCountry = '';
    tempCity = '';
    tempCategory = '';
    tempLat = '';
    tempLong = '';

    componentDidMount(){
        
        //Get Geolocation info
        //axios.get('https://extreme-ip-lookup.com/json/?key=oxbC9wvdhr0mAXiwDspJ'
        axios.get('http://localhost:4000/location',{
            'Content-Type': 'application/json'
    }).then((response)=>{
            console.log('Data: '+JSON.stringify(response.data));
            this.tempCountry = JSON.stringify(response.data.countryCode).toLowerCase().slice(1,-1)
            this.tempCity = JSON.stringify(response.data.city).slice(1,-1); 
            this.tempLat = JSON.stringify(response.data.lat).slice(1,-1);
            this.tempLong = JSON.stringify(response.data.lon).slice(1,-1);
            })
        .catch(error => {console.log(error)})
        //check LocalStorage s
        
    setTimeout(()=> {
        
        if (!localStorage.getItem("country")) {
            localStorage.setItem("country",this.state.countryCode)
        } else {
            this.tempCountry = localStorage.getItem("country")
        }

        if (!localStorage.getItem("category")) {
            localStorage.setItem("category",this.state.category)
        } else {
            // 
            this.tempCategory = localStorage.getItem("category"); 
        }

        if (!localStorage.getItem("city")) {
            localStorage.setItem("city",this.state.city)
        } else {
            this.tempCity = localStorage.getItem("city")
        }

        if (!localStorage.getItem("lat")) {
            localStorage.setItem("lat",this.state.lat)
        } else {
            // 
            this.tempLat = localStorage.getItem("lat"); 
        }

        if (!localStorage.getItem("lon")) {
            localStorage.setItem("lon",this.state.lon)
        } else {
            // 
            this.tempLong = localStorage.getItem("lon"); 
        }
        
        this.setState({
        countryCode: this.tempCountry,
        category: this.tempCategory,
        lat: this.tempLat,
        lon: this.tempLong,
        city: this.tempCity,
    })},3000)
        
       
    }



    render() {
        setTimeout(() => {console.log("this is the first message")}, 6000);
        console.log(this.state.countryCode + "-"+this.state.city + '-' + this.state.lat + '-' + this.state.lon + this.state.category)
        return (
        <>
        {/* Form for select countryCode, categories and search */}
        <TopForm handleChange={this.handleChange} handleChangeCategory={this.handleChangeCategory} handleSearch={this.handleSearch} handleSave={this.handleSave} countryCode={this.state.countryCode} handleCity={this.handleCity} />
        <div className='mainLayout'>
        {/* display headlines by country */}
        <Headlines countryCode={this.state.countryCode} category={this.state.category} search={this.state.search} isSearch={this.state.isSearch} />
        <Weather country={this.state.countryCode} city={this.state.city} lat={this.state.lat} lon={this.state.lon} />
        </div>
        </>
        )
    }

    //function for save preferences
    handleSave = () => {
        localStorage.setItem("country",this.state.countryCode);
        localStorage.setItem("category",this.state.category);
        localStorage.setItem("city",this.state.city);
        localStorage.setItem("lat",this.state.lat);
        localStorage.setItem("lon",this.state.lon);
        


    }

    //function to handle change ond country code 
    handleChange = (sid) => {
        this.setState ({countryCode : sid, isSearch: false},()=>{
            console.log("App cc"+this.state.countryCode)
        })
    }
    //function to handle change on category
    handleChangeCategory = (sid) => {
        this.setState ({category : sid, isSearch:false},()=>{
            console.log("App category"+this.state.category)
        })
    }
    //function to handle search
    handleSearch = (searchTerm) => {
        this.setState({search: searchTerm, isSearch: true},()=>{
            console.log("App Search"+this.state.category)
        })
    }
    //function to find lat and long of a city
    handleCity = (cityName) => {
        const api='1e67c0bf8b80689eb8791ed890d004fc';
        let fullUrl = 'http://api.openweathermap.org/geo/1.0/direct?q='+cityName+'&appid='+api;
        axios.get(fullUrl,{
            'Content-Type': 'application/json'
    }).then((response)=>{

        this.setState({
            city: cityName,
            lat: response.data[0].lat,
            lon: response.data[0].lon,
        })
    })
       
}


}

export default App;