//Top form Component 
import React, { useState }  from 'react'
import logo from './images/logo.jpg'



function TopForm(props) {
    
    const [searchTerm,setSearchTerm] = useState('');
    const [city,setCity] =  useState('');
    const [mFormView,setMFormView] = useState(false);

    

    console.log('Props: ',props)
    let defaultCountry = props.countryCode;
    console.log('Country: ', defaultCountry)
    // let currentCountry = this.props.countryCode || 'us'
    return (
    <form className='formDisplay'>
        <div>
            <img src={logo} width={'150px'} height={'150px'}></img>
        </div>
        <div className='btnMobile'>
            <button onClick={(event)=>setMFormView(!mFormView)}>Settings</button>
        </div>
        <div className='first'>
        <fieldset className='myFieldSet'>
        <legend className='myLegend'>Select News</legend><br></br>
        <label htmlFor='selectId'>Select country: </label>
        <select  width='fit-content' defaultValue={'gr'}  id="selectId" name ="selectId" onChange={(event)=>props.handleChange(event.target.value)}>
              <option value={'ae'}>United Arab Emirates</option>
              <option value={'ar'}>Argentina</option>
              <option value={'at'}>Austria</option>
              <option value={'au'}>Australia</option>
              <option value={'be'}>Belgium</option>
              <option value={'bg'}>Bulgaria</option>
              <option value={'br'}>Brazil</option>
              <option value={'ca'}>Canada</option>
              <option value={'ch'}>Switzerland</option>
              <option value={'cn'}>China</option>
              <option value={'co'}>Colombia</option>
              <option value={'cu'}>Cuba</option>
              <option value={'cz'}>Czechia</option>
              <option value={'de'}>Germany</option>
              <option value={'eg'}>Egypt</option>
              <option value={'fr'}>France</option>
              <option value={'gb'}>United Kingdom</option>
              <option value={'gr'}>Greece</option>
              <option value={'hk'}>Hong Kong</option>
              <option value={'hu'}>Hungary</option>
              <option value={'id'}>Indonesia</option>
              <option value={'ie'}>Ireland</option>
              <option value={'il'}>Israel</option>
              <option value={'in'}>India</option>
              <option value={'it'}>Italy</option>
              <option value={'jp'}>Japan</option>
              <option value={'kr'}>Republic of Korea</option>
              <option value={'lt'}>Lithuania</option>
              <option value={'lv'}>Latvia</option>
              <option value={'ma'}>Morocco</option>
              <option value={'mx'}>Mexico</option>
              <option value={'my'}>Malaysia</option>
              <option value={'ng'}>Nigeria</option>
              <option value={'nl'}>Netherlands</option>
              <option value={'no'}>Norway</option>
              <option value={'nz'}>New Zealand</option>
              <option value={'ph'}>Philippines</option>
              <option value={'pl'}>Poland</option>
              <option value={'pt'}>Portugal</option>
              <option value={'ro'}>Romania</option>
              <option value={'rs'}>Serbia</option>
              <option value={'ru'}>Russian Federation</option>
              <option value={'sa'}>Saudi Arabia</option>
              <option value={'se'}>Sweden</option>
              <option value={'sg'}>Singapore</option>
              <option value={'si'}>Slovenia</option>
              <option value={'sk'}>Slovakia</option>
              <option value={'th'}>Thailand</option>
              <option value={'tr'}>Turkey</option>
              <option value={'tw'}>Taiwan, Province of China</option>
              <option value={'ua'}>Ukraine</option>
              <option value={'us'}>United States of America</option>
              <option value={'ve'}>Venezuela (Bolivarian Republic of)</option>
              <option value={'za'}>South Africa</option>
          </select>
          <br></br>
        <label htmlFor='selectCategory'>Select Category: </label>
        <select id='selectCategory' name='selectCategory' onChange={(event)=>props.handleChangeCategory(event.target.value)}>
            <option value={'All'}>All Categories</option>
            <option value={'business'}>Business</option>
            <option value={'entertainment'}>Entertainment</option>
            <option value={'general'}>General</option>
            <option value={'health'}>Health</option>
            <option value={'science'}>Science</option>
            <option value={'sports'}>Sports</option>
            <option value={'technology'}>Technology</option>
        </select>
        </fieldset>
        </div>
        {/* Country Code selector */}
        
      
        <div className='first'>
        <fieldset className='myFieldSet'>
        <legend className='myLegend'>Search News</legend><br></br>
            <label htmlFor='search'>Search News: </label>
            <input id='search' name='search' onChange={(event)=> setSearchTerm(event.target.value) }></input><br></br>
            <input type="button" variant="primary" value="Submit" onClick={()=>props.handleSearch(searchTerm)} />
        </fieldset>
        </div>
        
        <div className='second'>
        <fieldset className='myFieldSet'>
        <legend className='myLegend'>Check Weather</legend><br></br>
            <label htmlFor='city'>Set City: </label>
            <input id='city' name='city' onChange={(event) => setCity(event.target.value)} /><br></br>
            <input type='button' value='Set City' onClick={()=>props.handleCity(city)} />
        </fieldset>
        </div>
        <div className='second'>
        <fieldset className='myFieldSet'>
        <legend className='myLegend'>Save Preferences</legend><br></br>
            <input type="button" value="Save" onClick={()=>props.handleSave()} />
        </fieldset>
        </div>

        <div style={{display: mFormView ? 'block' : 'none'}}>
        <fieldset className='myFieldSet'>
        <legend className='myLegend'>Select News</legend><br></br>
        <label htmlFor='selectId'>Select country: </label>
        <select  width='fit-content' defaultValue={'gr'}  id="selectId" name ="selectId" onChange={(event)=>props.handleChange(event.target.value)}>
              <option value={'ae'}>United Arab Emirates</option>
              <option value={'ar'}>Argentina</option>
              <option value={'at'}>Austria</option>
              <option value={'au'}>Australia</option>
              <option value={'be'}>Belgium</option>
              <option value={'bg'}>Bulgaria</option>
              <option value={'br'}>Brazil</option>
              <option value={'ca'}>Canada</option>
              <option value={'ch'}>Switzerland</option>
              <option value={'cn'}>China</option>
              <option value={'co'}>Colombia</option>
              <option value={'cu'}>Cuba</option>
              <option value={'cz'}>Czechia</option>
              <option value={'de'}>Germany</option>
              <option value={'eg'}>Egypt</option>
              <option value={'fr'}>France</option>
              <option value={'gb'}>United Kingdom</option>
              <option value={'gr'}>Greece</option>
              <option value={'hk'}>Hong Kong</option>
              <option value={'hu'}>Hungary</option>
              <option value={'id'}>Indonesia</option>
              <option value={'ie'}>Ireland</option>
              <option value={'il'}>Israel</option>
              <option value={'in'}>India</option>
              <option value={'it'}>Italy</option>
              <option value={'jp'}>Japan</option>
              <option value={'kr'}>Republic of Korea</option>
              <option value={'lt'}>Lithuania</option>
              <option value={'lv'}>Latvia</option>
              <option value={'ma'}>Morocco</option>
              <option value={'mx'}>Mexico</option>
              <option value={'my'}>Malaysia</option>
              <option value={'ng'}>Nigeria</option>
              <option value={'nl'}>Netherlands</option>
              <option value={'no'}>Norway</option>
              <option value={'nz'}>New Zealand</option>
              <option value={'ph'}>Philippines</option>
              <option value={'pl'}>Poland</option>
              <option value={'pt'}>Portugal</option>
              <option value={'ro'}>Romania</option>
              <option value={'rs'}>Serbia</option>
              <option value={'ru'}>Russian Federation</option>
              <option value={'sa'}>Saudi Arabia</option>
              <option value={'se'}>Sweden</option>
              <option value={'sg'}>Singapore</option>
              <option value={'si'}>Slovenia</option>
              <option value={'sk'}>Slovakia</option>
              <option value={'th'}>Thailand</option>
              <option value={'tr'}>Turkey</option>
              <option value={'tw'}>Taiwan, Province of China</option>
              <option value={'ua'}>Ukraine</option>
              <option value={'us'}>United States of America</option>
              <option value={'ve'}>Venezuela (Bolivarian Republic of)</option>
              <option value={'za'}>South Africa</option>
          </select>
          <br></br>
        <label htmlFor='selectCategory'>Select Category: </label>
        <select id='selectCategory' name='selectCategory' onChange={(event)=>props.handleChangeCategory(event.target.value)}>
            <option value={'All'}>All Categories</option>
            <option value={'business'}>Business</option>
            <option value={'entertainment'}>Entertainment</option>
            <option value={'general'}>General</option>
            <option value={'health'}>Health</option>
            <option value={'science'}>Science</option>
            <option value={'sports'}>Sports</option>
            <option value={'technology'}>Technology</option>
        </select>
        </fieldset>
        </div>
        {/* Country Code selector */}
        
      
        <div style={{display: mFormView ? 'block' : 'none'}}>
        <fieldset className='myFieldSet'>
        <legend className='myLegend'>Search News</legend><br></br>
            <label htmlFor='search'>Search News: </label>
            <input id='search' name='search' onChange={(event)=> setSearchTerm(event.target.value) }></input><br></br>
            <input type="button" variant="primary" value="Submit" onClick={()=>props.handleSearch(searchTerm)} />
        </fieldset>
        </div>
        
        <div style={{display: mFormView ? 'block' : 'none'}}>
        <fieldset className='myFieldSet'>
        <legend className='myLegend'>Check Weather</legend><br></br>
            <label htmlFor='city'>Set City: </label>
            <input id='city' name='city' onChange={(event) => setCity(event.target.value)} /><br></br>
            <input type='button' value='Set City' onClick={()=>props.handleCity(city)} />
        </fieldset>
        </div>
        <div style={{display: mFormView ? 'block' : 'none'}}>
        <fieldset className='myFieldSet'>
        <legend className='myLegend'>Save Preferences</legend><br></br>
            <input type="button" value="Save" onClick={()=>props.handleSave()} />
        </fieldset>
        </div>

       
    </form>
    )
}





    

export default TopForm