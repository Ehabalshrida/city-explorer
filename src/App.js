import React, { Component } from 'react';
import Location from './component/Location';
import Forms from './component/Forms';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      city_name:"",
      lat:"",
      lon:"",

      showData:false
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

        showData:true

      })
      
    })
    
    

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
                    imgsrc={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.lat.toString()},${this.state.lon.toString()}&format=json`}/>
        }
        
      </div>
    )
  }
}

export default App