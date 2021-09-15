import React, { Component } from 'react';
import Location from './component/Location';
import Forms from './component/Forms';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './component/Weather';
import { Alert } from 'react-bootstrap';
//

export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      city_name:"",
      lat:"",
      lon:"",
     imgsrc:"",
    showData:false,
    weatherData:[],
    error:"",
    }
  }
  handleLocation=(e)=>{
    let city_name=e.target.value;
    this.setState({
      city_name:city_name,
    })
  }
  handleSubmit=(e)=>{
    //console.log(`${process.env.REACT_APP_LOCATIONIQ_API_KEY}`);
    e.preventDefault();
    let config={
      method:"GET",
      baseURL:`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city_name}&format=json`,
    }
    axios(config).then(res=>{
      let responseData=res.data[0]
      this.setState({
        city_name:responseData.display_name,
        lon:responseData.lon,
        lat:responseData.lat,
        imgsrc:`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${responseData.lat},${responseData.lon}&zoom=1-18`,
        showData:true,

      })
      
    }).then(() => {
      axios.get(`http://${process.env.REACT_APP_BACKEND_URL}?lon=${this.state.lon}&lat=${this.state.lat}`)
        .then(res => {
          console.log(res.data);
          this.setState({
            weatherData: res.data,
          })
        });
    }).catch((e)=>{
      console.log(e.response);
      this.setState({
        error:e.response.data.error,

    });});
    
    

  }
  render() {
    return (
      <div>
        <Forms handleLocation={this.handleLocation} handleSubmit={this.handleSubmit}/>
        {
          this.state.showData&&
          <Location city_name={this.state.city_name}
                    lat={this.state.lat}
                    lon={this.state.lon}
                    imgsrc={this.state.imgsrc}/>
        }
        
        {

this.state.error&&<Alert >
    This is a {this.state.error} alert—check it out!
  </Alert>
        }
        {this.state.weatherData.map( item=> {
           return  <Weather  
                       date={item.date}
                       description={item.description}/>})}

        
      </div>
    )
  }
}

export default App
