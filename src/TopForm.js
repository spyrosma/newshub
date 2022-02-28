//Top form Component 
import React, { useLayoutEffect, useState }  from 'react'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import logo from './images/logo.png'



function TopForm(props) {
    
    const [searchTerm,setSearchTerm] = useState('');
    const [city,setCity] =  useState('');
    const [mFormView,setMFormView] = useState(false);

    const [width, height] = useWindowSize();

    if (width>576 && mFormView===true) {setMFormView(false)}

    

    console.log('Props: ',props)
    let defaultCountry = props.countryCode;
    console.log('Country: ', defaultCountry)
    let flag1 = props.isSearch===true ? 'https://flagcdn.com/108x81/un.png' : 'https://flagcdn.com/108x81/'+defaultCountry+'.png'

    const flag2 = (code) => {
        let flagSrc = 'https://flagcdn.com/20x15/'+code+'.png';
        return <img alt='' src={flagSrc} className='iconFlag' /> 
    }

    // let currentCountry = this.props.countryCode || 'us'
    return (
    <form className='formDisplay'>
        <div className='zero' id='top'>
            <img alt='NewsHub' src={logo} className='topLogo' ></img>
            <img
                className='flag'
                src={flag1}
                width="144"
                height="108"
                alt={countryName(defaultCountry)}></img>
        </div>
        <div className='btnMobile'>
            <Button variant='info' onClick={(event)=>setMFormView(!mFormView)}>Settings</Button>
        </div>
        <div className='weatherBtn'>
        <a href="#weather">
                <Button variant='info'>Weather</Button>
            </a>
        </div>
        <div className='first'>
        <fieldset className='myFieldSet'>
        <legend className='myLegend'>{countryName(defaultCountry)}</legend><br></br>
        <h5>You are reading news from {countryName(defaultCountry)}. Change country from buttons below.</h5>
             <div className='continents'>
                <div className='africa'>
                <Dropdown>
                <Button variant="dark">Africa</Button>

                <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />

                <Dropdown.Menu>
                    <Dropdown.Item value={'eg'} onClick={(event)=>props.handleChange('eg')} >{flag2('eg')}&nbsp; Egypt
                    </Dropdown.Item>
                    <Dropdown.Item value={'ma'} onClick={(event)=>props.handleChange('ma')}>{flag2('ma')}&nbsp; Morocco</Dropdown.Item>
                    <Dropdown.Item value={'ng'} onClick={(event)=>props.handleChange('ng')}>{flag2('ng')}&nbsp; Nigeria</Dropdown.Item>
                    <Dropdown.Item value={'za'} onClick={(event)=>props.handleChange('za')}>{flag2('za')}&nbsp; South Africa</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
                </div>
                <div className='america'>
                <Dropdown>
                <Button variant="danger">America</Button>

                <Dropdown.Toggle split variant="danger" id="dropdown-split-basic" />

                <Dropdown.Menu>
                    <Dropdown.Item value={'ar'} onClick={(event)=>props.handleChange('ar')}>{flag2('ar')}&nbsp; Argentina</Dropdown.Item>
                    <Dropdown.Item value={'br'} onClick={(event)=>props.handleChange('br')}>{flag2('br')}&nbsp; Brazil</Dropdown.Item>
                    <Dropdown.Item value={'ca'} onClick={(event)=>props.handleChange('ca')}>{flag2('ca')}&nbsp; Canada</Dropdown.Item>
                    <Dropdown.Item value={'co'} onClick={(event)=>props.handleChange('co')}>{flag2('co')}&nbsp; Colombia</Dropdown.Item>
                    <Dropdown.Item value={'cu'} onClick={(event)=>props.handleChange('cu')}>{flag2('cu')}&nbsp; Cuba</Dropdown.Item>
                    <Dropdown.Item value={'mx'} onClick={(event)=>props.handleChange('mx')}>{flag2('mx')}&nbsp; Mexico</Dropdown.Item>
                    <Dropdown.Item value={'us'} onClick={(event)=>props.handleChange('us')}>{flag2('us')}&nbsp; United States of America</Dropdown.Item>
                    <Dropdown.Item value={'ve'} onClick={(event)=>props.handleChange('ve')}>{flag2('ve')}&nbsp; Venezuela (Bolivarian Republic of)</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
                </div>
                <div className='asia'>
                <Dropdown>
                <Button variant="warning">Asia</Button>

                <Dropdown.Toggle split variant="warning" id="dropdown-split-basic" />

                <Dropdown.Menu>
                    <Dropdown.Item value={'ae'} onClick={(event)=>props.handleChange('ae')}>{flag2('ae')}&nbsp; United Arab Emirates</Dropdown.Item>
                    <Dropdown.Item value={'cn'} onClick={(event)=>props.handleChange('cn')}>{flag2('cn')}&nbsp; China</Dropdown.Item>
                    <Dropdown.Item value={'hk'} onClick={(event)=>props.handleChange('hk')}>{flag2('hk')}&nbsp; Hong Kong</Dropdown.Item>
                    <Dropdown.Item value={'id'} onClick={(event)=>props.handleChange('id')}>{flag2('id')}&nbsp; Indonesia</Dropdown.Item>
                    <Dropdown.Item value={'il'} onClick={(event)=>props.handleChange('il')}>{flag2('il')}&nbsp; Israel</Dropdown.Item>
                    <Dropdown.Item value={'in'} onClick={(event)=>props.handleChange('in')}>{flag2('in')}&nbsp; India</Dropdown.Item>
                    <Dropdown.Item value={'jp'} onClick={(event)=>props.handleChange('jp')}>{flag2('jp')}&nbsp; Japan</Dropdown.Item>
                    <Dropdown.Item value={'kr'} onClick={(event)=>props.handleChange('kr')}>{flag2('kr')}&nbsp; Republic of Korea</Dropdown.Item>
                    <Dropdown.Item value={'my'} onClick={(event)=>props.handleChange('my')}>{flag2('my')}&nbsp; Malaysia</Dropdown.Item>
                    <Dropdown.Item value={'ph'} onClick={(event)=>props.handleChange('ph')}>{flag2('ph')}&nbsp; Philippines</Dropdown.Item>
                    <Dropdown.Item value={'sa'} onClick={(event)=>props.handleChange('sa')}>{flag2('sa')}&nbsp; Saudi Arabia</Dropdown.Item>
                    <Dropdown.Item value={'sg'} onClick={(event)=>props.handleChange('sg')}>{flag2('sg')}&nbsp; Singapore</Dropdown.Item>
                    <Dropdown.Item value={'th'} onClick={(event)=>props.handleChange('th')}>{flag2('th')}&nbsp; Thailand</Dropdown.Item>
                    <Dropdown.Item value={'tw'} onClick={(event)=>props.handleChange('tw')}>{flag2('tw')}&nbsp; Taiwan, Province of China</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
                </div>
                <div className='europe'>
                <Dropdown>
                <Button variant="info">Europe</Button>

                <Dropdown.Toggle split variant="info" id="dropdown-split-basic" />

                <Dropdown.Menu>
                    <Dropdown.Item value={'at'} onClick={(event)=>props.handleChange('at')}>{flag2('at')}&nbsp; Austria</Dropdown.Item>
                    <Dropdown.Item value={'be'} onClick={(event)=>props.handleChange('be')}>{flag2('be')}&nbsp; Belgium</Dropdown.Item>
                    <Dropdown.Item value={'bg'} onClick={(event)=>props.handleChange('bg')}>{flag2('bg')}&nbsp; Bulgaria</Dropdown.Item>
                    <Dropdown.Item value={'ch'} onClick={(event)=>props.handleChange('ch')}>{flag2('ch')}&nbsp; Switzerland</Dropdown.Item>
                    <Dropdown.Item value={'cz'} onClick={(event)=>props.handleChange('cz')}>{flag2('cz')}&nbsp; Czechia</Dropdown.Item>
                    <Dropdown.Item value={'de'} onClick={(event)=>props.handleChange('de')}>{flag2('de')}&nbsp; Germany</Dropdown.Item>
                    <Dropdown.Item value={'fr'} onClick={(event)=>props.handleChange('fr')}>{flag2('fr')}&nbsp; France</Dropdown.Item>
                    <Dropdown.Item value={'gb'} onClick={(event)=>props.handleChange('gb')}>{flag2('gb')}&nbsp; United Kingdom</Dropdown.Item>
                    <Dropdown.Item value={'gr'} onClick={(event)=>props.handleChange('gr')}>{flag2('gr')}&nbsp; Greece</Dropdown.Item>
                    <Dropdown.Item value={'hu'} onClick={(event)=>props.handleChange('hu')}>{flag2('hu')}&nbsp; Hungary</Dropdown.Item>
                    <Dropdown.Item value={'ie'} onClick={(event)=>props.handleChange('ie')}>{flag2('ie')}&nbsp; Ireland</Dropdown.Item>
                    <Dropdown.Item value={'it'} onClick={(event)=>props.handleChange('it')}>{flag2('it')}&nbsp; Italy</Dropdown.Item>
                    <Dropdown.Item value={'lt'} onClick={(event)=>props.handleChange('lt')}>{flag2('lt')}&nbsp; Lithuania</Dropdown.Item>
                    <Dropdown.Item value={'lv'} onClick={(event)=>props.handleChange('lv')}>{flag2('lv')}&nbsp; Latvia</Dropdown.Item>
                    <Dropdown.Item value={'nl'} onClick={(event)=>props.handleChange('nl')}>{flag2('nl')}&nbsp; Netherlands</Dropdown.Item>
                    <Dropdown.Item value={'no'} onClick={(event)=>props.handleChange('no')}>{flag2('no')}&nbsp; Norway</Dropdown.Item>
                    <Dropdown.Item value={'pl'} onClick={(event)=>props.handleChange('pl')}>{flag2('pl')}&nbsp; Poland</Dropdown.Item>
                    <Dropdown.Item value={'pt'} onClick={(event)=>props.handleChange('pt')}>{flag2('pt')}&nbsp; Portugal</Dropdown.Item>
                    <Dropdown.Item value={'ro'} onClick={(event)=>props.handleChange('ro')}>{flag2('ro')}&nbsp; Romania</Dropdown.Item>
                    <Dropdown.Item value={'rs'} onClick={(event)=>props.handleChange('rs')}>{flag2('rs')}&nbsp; Serbia</Dropdown.Item>
                    <Dropdown.Item value={'ru'} onClick={(event)=>props.handleChange('ru')}>{flag2('ru')}&nbsp; Russian Federation</Dropdown.Item>
                    <Dropdown.Item value={'se'} onClick={(event)=>props.handleChange('se')}>{flag2('se')}&nbsp; Sweden</Dropdown.Item>
                    <Dropdown.Item value={'si'} onClick={(event)=>props.handleChange('si')}>{flag2('si')}&nbsp; Slovenia</Dropdown.Item>
                    <Dropdown.Item value={'sk'} onClick={(event)=>props.handleChange('sk')}>{flag2('sk')}&nbsp; Slovakia</Dropdown.Item>
                    <Dropdown.Item value={'tr'} onClick={(event)=>props.handleChange('tr')}>{flag2('tr')}&nbsp; Turkey</Dropdown.Item>
                    <Dropdown.Item value={'ua'} onClick={(event)=>props.handleChange('ua')}>{flag2('ua')}&nbsp; Ukraine</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
                </div>
                <div className='oceania'>
                <Dropdown>
                <Button variant="success">Oceania</Button>

                <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                <Dropdown.Menu>
                    <Dropdown.Item value={'au'} onClick={(event)=>props.handleChange('au')}>{flag2('au')}&nbsp; Australia</Dropdown.Item>
                    <Dropdown.Item eventKey={'nz'} onClick={(event)=>props.handleChange('nz')}>{flag2('nz')}&nbsp; New Zealand</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
                </div>
                <div className='searchBar'>
                    <div className='innerDiv'>
                        <label htmlFor='search'>Search World News</label>
                        <input className='abtn' id='search' name='search' onChange={(event)=> setSearchTerm(event.target.value) }></input>
                        <Button className='abtn' variant="primary" value="Submit" onClick={()=>props.handleSearch(searchTerm)}>Search</Button>
                    </div>
                    <div className='innerDiv'>
                        <label htmlFor='city'>Enter your city to check weather: </label>
                        <input className='abtn' id='city' name='city' onChange={(event) => setCity(event.target.value)} />
                        <Button className='abtn' variant="primary" value='Set City' onClick={()=>props.handleCity(city)}>Set City</Button>
                    </div>
            </div>
            <div className='saveBar'>
                <Button className='saveBtn' variant='danger' value="Save" onClick={()=>props.handleSave()}>Save Preferences</Button>
            </div>
             </div>
             
             
        </fieldset>
        </div>
        {/* Country Code selector */}
        
        <div className='third'>
            <div className='innerDiv'>
                <Button className='catBtn' variant="primary" value='All' onClick={(event) => props.handleChangeCategory(event.target.value) }>All</Button>     
                <Button className='catBtn' variant="primary" value='business' onClick={(event) => props.handleChangeCategory(event.target.value) }>Business</Button> 
                <Button className='catBtn' variant="primary" value='entertainment' onClick={(event) => props.handleChangeCategory(event.target.value) }>Entertainment</Button> 
                <Button className='catBtn' variant="primary" value='general' onClick={(event) => props.handleChangeCategory(event.target.value) }>General</Button> 
            </div>
            <div className='innerDiv'>
                <Button className='catBtn' variant="primary" value='health' onClick={(event) => props.handleChangeCategory(event.target.value) }>Health</Button> 
                <Button className='catBtn' variant="primary" value='science' onClick={(event) => props.handleChangeCategory(event.target.value) }>Science</Button> 
                <Button className='catBtn' variant="primary" value='sports' onClick={(event) => props.handleChangeCategory(event.target.value) }>Sports</Button> 
                <Button className='catBtn' variant="primary" value='technology' onClick={(event) => props.handleChangeCategory(event.target.value) }>Technology</Button> 
            </div>
        </div>
        

        <div style={{display: mFormView ? 'block' : 'none'}}>
            <div className='firstM'>
        <fieldset className='myFieldSet'>
        <legend className='myLegend'>{countryName(defaultCountry)}</legend><br></br>
        <h5>You are reading news from {countryName(defaultCountry)}. Change country from buttons below.</h5>
             <div className='continents'>
                <div className='africa'>
                <Dropdown>
                <Button variant="dark">Africa</Button>

                <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />

                <Dropdown.Menu>
                    <Dropdown.Item value={'eg'} onClick={(event)=>props.handleChange('eg')} >{flag2('eg')}&nbsp; Egypt
                    </Dropdown.Item>
                    <Dropdown.Item value={'ma'} onClick={(event)=>props.handleChange('ma')}>{flag2('ma')}&nbsp; Morocco</Dropdown.Item>
                    <Dropdown.Item value={'ng'} onClick={(event)=>props.handleChange('ng')}>{flag2('ng')}&nbsp; Nigeria</Dropdown.Item>
                    <Dropdown.Item value={'za'} onClick={(event)=>props.handleChange('za')}>{flag2('za')}&nbsp; South Africa</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
                </div>
                <div className='america'>
                <Dropdown>
                <Button variant="danger">America</Button>

                <Dropdown.Toggle split variant="danger" id="dropdown-split-basic" />

                <Dropdown.Menu>
                    <Dropdown.Item value={'ar'} onClick={(event)=>props.handleChange('ar')}>{flag2('ar')}&nbsp; Argentina</Dropdown.Item>
                    <Dropdown.Item value={'br'} onClick={(event)=>props.handleChange('br')}>{flag2('br')}&nbsp; Brazil</Dropdown.Item>
                    <Dropdown.Item value={'ca'} onClick={(event)=>props.handleChange('ca')}>{flag2('ca')}&nbsp; Canada</Dropdown.Item>
                    <Dropdown.Item value={'co'} onClick={(event)=>props.handleChange('co')}>{flag2('co')}&nbsp; Colombia</Dropdown.Item>
                    <Dropdown.Item value={'cu'} onClick={(event)=>props.handleChange('cu')}>{flag2('cu')}&nbsp; Cuba</Dropdown.Item>
                    <Dropdown.Item value={'mx'} onClick={(event)=>props.handleChange('mx')}>{flag2('mx')}&nbsp; Mexico</Dropdown.Item>
                    <Dropdown.Item value={'us'} onClick={(event)=>props.handleChange('us')}>{flag2('us')}&nbsp; United States of America</Dropdown.Item>
                    <Dropdown.Item value={'ve'} onClick={(event)=>props.handleChange('ve')}>{flag2('ve')}&nbsp; Venezuela (Bolivarian Republic of)</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
                </div>
                <div className='asia'>
                <Dropdown>
                <Button variant="warning">Asia</Button>

                <Dropdown.Toggle split variant="warning" id="dropdown-split-basic" />

                <Dropdown.Menu>
                    <Dropdown.Item value={'ae'} onClick={(event)=>props.handleChange('ae')}>{flag2('ae')}&nbsp; United Arab Emirates</Dropdown.Item>
                    <Dropdown.Item value={'cn'} onClick={(event)=>props.handleChange('cn')}>{flag2('cn')}&nbsp; China</Dropdown.Item>
                    <Dropdown.Item value={'hk'} onClick={(event)=>props.handleChange('hk')}>{flag2('hk')}&nbsp; Hong Kong</Dropdown.Item>
                    <Dropdown.Item value={'id'} onClick={(event)=>props.handleChange('id')}>{flag2('id')}&nbsp; Indonesia</Dropdown.Item>
                    <Dropdown.Item value={'il'} onClick={(event)=>props.handleChange('il')}>{flag2('il')}&nbsp; Israel</Dropdown.Item>
                    <Dropdown.Item value={'in'} onClick={(event)=>props.handleChange('in')}>{flag2('in')}&nbsp; India</Dropdown.Item>
                    <Dropdown.Item value={'jp'} onClick={(event)=>props.handleChange('jp')}>{flag2('jp')}&nbsp; Japan</Dropdown.Item>
                    <Dropdown.Item value={'kr'} onClick={(event)=>props.handleChange('kr')}>{flag2('kr')}&nbsp; Republic of Korea</Dropdown.Item>
                    <Dropdown.Item value={'my'} onClick={(event)=>props.handleChange('my')}>{flag2('my')}&nbsp; Malaysia</Dropdown.Item>
                    <Dropdown.Item value={'ph'} onClick={(event)=>props.handleChange('ph')}>{flag2('ph')}&nbsp; Philippines</Dropdown.Item>
                    <Dropdown.Item value={'sa'} onClick={(event)=>props.handleChange('sa')}>{flag2('sa')}&nbsp; Saudi Arabia</Dropdown.Item>
                    <Dropdown.Item value={'sg'} onClick={(event)=>props.handleChange('sg')}>{flag2('sg')}&nbsp; Singapore</Dropdown.Item>
                    <Dropdown.Item value={'th'} onClick={(event)=>props.handleChange('th')}>{flag2('th')}&nbsp; Thailand</Dropdown.Item>
                    <Dropdown.Item value={'tw'} onClick={(event)=>props.handleChange('tw')}>{flag2('tw')}&nbsp; Taiwan, Province of China</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
                </div>
                <div className='europe'>
                <Dropdown>
                <Button variant="info">Europe</Button>

                <Dropdown.Toggle split variant="info" id="dropdown-split-basic" />

                <Dropdown.Menu>
                    <Dropdown.Item value={'at'} onClick={(event)=>props.handleChange('at')}>{flag2('at')}&nbsp; Austria</Dropdown.Item>
                    <Dropdown.Item value={'be'} onClick={(event)=>props.handleChange('be')}>{flag2('be')}&nbsp; Belgium</Dropdown.Item>
                    <Dropdown.Item value={'bg'} onClick={(event)=>props.handleChange('bg')}>{flag2('bg')}&nbsp; Bulgaria</Dropdown.Item>
                    <Dropdown.Item value={'ch'} onClick={(event)=>props.handleChange('ch')}>{flag2('ch')}&nbsp; Switzerland</Dropdown.Item>
                    <Dropdown.Item value={'cz'} onClick={(event)=>props.handleChange('cz')}>{flag2('cz')}&nbsp; Czechia</Dropdown.Item>
                    <Dropdown.Item value={'de'} onClick={(event)=>props.handleChange('de')}>{flag2('de')}&nbsp; Germany</Dropdown.Item>
                    <Dropdown.Item value={'fr'} onClick={(event)=>props.handleChange('fr')}>{flag2('fr')}&nbsp; France</Dropdown.Item>
                    <Dropdown.Item value={'gb'} onClick={(event)=>props.handleChange('gb')}>{flag2('gb')}&nbsp; United Kingdom</Dropdown.Item>
                    <Dropdown.Item value={'gr'} onClick={(event)=>props.handleChange('gr')}>{flag2('gr')}&nbsp; Greece</Dropdown.Item>
                    <Dropdown.Item value={'hu'} onClick={(event)=>props.handleChange('hu')}>{flag2('hu')}&nbsp; Hungary</Dropdown.Item>
                    <Dropdown.Item value={'ie'} onClick={(event)=>props.handleChange('ie')}>{flag2('ie')}&nbsp; Ireland</Dropdown.Item>
                    <Dropdown.Item value={'it'} onClick={(event)=>props.handleChange('it')}>{flag2('it')}&nbsp; Italy</Dropdown.Item>
                    <Dropdown.Item value={'lt'} onClick={(event)=>props.handleChange('lt')}>{flag2('lt')}&nbsp; Lithuania</Dropdown.Item>
                    <Dropdown.Item value={'lv'} onClick={(event)=>props.handleChange('lv')}>{flag2('lv')}&nbsp; Latvia</Dropdown.Item>
                    <Dropdown.Item value={'nl'} onClick={(event)=>props.handleChange('nl')}>{flag2('nl')}&nbsp; Netherlands</Dropdown.Item>
                    <Dropdown.Item value={'no'} onClick={(event)=>props.handleChange('no')}>{flag2('no')}&nbsp; Norway</Dropdown.Item>
                    <Dropdown.Item value={'pl'} onClick={(event)=>props.handleChange('pl')}>{flag2('pl')}&nbsp; Poland</Dropdown.Item>
                    <Dropdown.Item value={'pt'} onClick={(event)=>props.handleChange('pt')}>{flag2('pt')}&nbsp; Portugal</Dropdown.Item>
                    <Dropdown.Item value={'ro'} onClick={(event)=>props.handleChange('ro')}>{flag2('ro')}&nbsp; Romania</Dropdown.Item>
                    <Dropdown.Item value={'rs'} onClick={(event)=>props.handleChange('rs')}>{flag2('rs')}&nbsp; Serbia</Dropdown.Item>
                    <Dropdown.Item value={'ru'} onClick={(event)=>props.handleChange('ru')}>{flag2('ru')}&nbsp; Russian Federation</Dropdown.Item>
                    <Dropdown.Item value={'se'} onClick={(event)=>props.handleChange('se')}>{flag2('se')}&nbsp; Sweden</Dropdown.Item>
                    <Dropdown.Item value={'si'} onClick={(event)=>props.handleChange('si')}>{flag2('si')}&nbsp; Slovenia</Dropdown.Item>
                    <Dropdown.Item value={'sk'} onClick={(event)=>props.handleChange('sk')}>{flag2('sk')}&nbsp; Slovakia</Dropdown.Item>
                    <Dropdown.Item value={'tr'} onClick={(event)=>props.handleChange('tr')}>{flag2('tr')}&nbsp; Turkey</Dropdown.Item>
                    <Dropdown.Item value={'ua'} onClick={(event)=>props.handleChange('ua')}>{flag2('ua')}&nbsp; Ukraine</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
                </div>
                <div className='oceania'>
                <Dropdown>
                <Button variant="success">Oceania</Button>

                <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                <Dropdown.Menu>
                    <Dropdown.Item value={'au'} onClick={(event)=>props.handleChange('au')}>{flag2('au')}&nbsp; Australia</Dropdown.Item>
                    <Dropdown.Item eventKey={'nz'} onClick={(event)=>props.handleChange('nz')}>{flag2('nz')}&nbsp; New Zealand</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
                </div>
                <div className='searchBar'>
                    <div className='innerDiv'>
                        <label htmlFor='search'>Search World News</label>
                        <input className='abtn' id='search' name='search' onChange={(event)=> setSearchTerm(event.target.value) }></input>
                        <Button className='abtn' variant="primary" value="Submit" onClick={()=>props.handleSearch(searchTerm)}>Search</Button>
                    </div>
                    <div className='innerDiv'>
                        <label htmlFor='city'>Enter your city to check weather: </label>
                        <input className='abtn' id='city' name='city' onChange={(event) => setCity(event.target.value)} />
                        <Button className='abtn' variant="primary" value='Set City' onClick={()=>props.handleCity(city)}>Set City</Button>
                    </div>
            </div>
            <div className='saveBar'>
                <Button className='saveBtn' variant='danger' value="Save" onClick={()=>props.handleSave()}>Save Preferences</Button>
            </div>
             </div>
             
             
        </fieldset>
        </div>
        {/* Country Code selector */}
        
        <div className='thirdM'>
            
                <Button className='catBtn' variant="primary" value='All' onClick={(event) => props.handleChangeCategory(event.target.value) }>All</Button>     
                <Button className='catBtn' variant="primary" value='entertainment' onClick={(event) => props.handleChangeCategory(event.target.value) }>Entertainment</Button> 
                <Button className='catBtn' variant="primary" value='business' onClick={(event) => props.handleChangeCategory(event.target.value) }>Business</Button> 
                <Button className='catBtn' variant="primary" value='general' onClick={(event) => props.handleChangeCategory(event.target.value) }>General</Button> 
                <Button className='catBtn' variant="primary" value='health' onClick={(event) => props.handleChangeCategory(event.target.value) }>Health</Button> 
                <Button className='catBtn' variant="primary" value='science' onClick={(event) => props.handleChangeCategory(event.target.value) }>Science</Button> 
                <Button className='catBtn' variant="primary" value='sports' onClick={(event) => props.handleChangeCategory(event.target.value) }>Sports</Button> 
                <Button className='catBtn' variant="primary" value='technology' onClick={(event) => props.handleChangeCategory(event.target.value) }>Technology</Button> 
            
        </div>

        </div>
        {/* Country Code selector */}
        
      
        

       
    </form>
    )
}

function countryName (code) {
    switch(code) {
              case 'ae' : return 'United Arab Emirates' ;
              case 'ar' : return 'Argentina' ;
              case 'at' : return 'Austria' ;
              case 'au' : return 'Australia' ;
              case 'be' : return 'Belgium' ;
              case 'bg' : return 'Bulgaria' ;
              case 'br' : return 'Brazil' ;
              case 'ca' : return 'Canada' ;
              case 'ch' : return 'Switzerland' ;
              case 'cn' : return 'China' ;
              case 'co' : return 'Colombia' ;
              case 'cu' : return 'Cuba' ;
              case 'cz' : return 'Czechia' ;
              case 'de' : return 'Germany' ;
              case 'eg' : return 'Egypt' ;
              case 'fr' : return 'France' ;
              case 'gb' : return 'United Kingdom' ;
              case 'gr' : return 'Greece' ;
              case 'hk' : return 'Hong Kong' ;
              case 'hu' : return 'Hungary' ;
              case 'id' : return 'Indonesia' ;
              case 'ie' : return 'Ireland' ;
              case 'il' : return 'Israel' ;
              case 'in' : return 'India' ;
              case 'it' : return 'Italy' ;
              case 'jp' : return 'Japan' ;
              case 'kr' : return 'Republic of Korea' ;
              case 'lt' : return 'Lithuania' ;
              case 'lv' : return 'Latvia' ;
              case 'ma' : return 'Morocco' ;
              case 'mx' : return 'Mexico' ;
              case 'my' : return 'Malaysia' ;
              case 'ng' : return 'Nigeria' ;
              case 'nl' : return 'Netherlands' ;
              case 'no' : return 'Norway' ;
              case 'nz' : return 'New Zealand' ;
              case 'ph' : return 'Philippines' ;
              case 'pl' : return 'Poland' ;
              case 'pt' : return 'Portugal' ;
              case 'ro' : return 'Romania' ;
              case 'rs' : return 'Serbia' ;
              case 'ru' : return 'Russian Federation' ;
              case 'sa' : return 'Saudi Arabia' ;
              case 'se' : return 'Sweden' ;
              case 'sg' : return 'Singapore' ;
              case 'si' : return 'Slovenia' ;
              case 'sk' : return 'Slovakia' ;
              case 'th' : return 'Thailand' ;
              case 'tr' : return 'Turkey' ;
              case 'tw' : return 'Taiwan, Province of China' ;
              case 'ua' : return 'Ukraine' ;
              case 'us' : return 'United States of America' ;
              case 've' : return 'Venezuela (Bolivarian Republic of)' ;
              case 'za' : return 'South Africa' ;
            }
}

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }
  
 





    

export default TopForm