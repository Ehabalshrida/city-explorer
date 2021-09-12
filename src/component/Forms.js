import React, { Component } from 'react'

 class Forms extends Component {
    render() {
        return (
            <>
             <form onSubmit={this.props.handleSubmit}>
                    <input  type="text"placeholder="Enter the city name"
                            onChange={this.props.handleLocation}/>
                            
                    <input type="submit" value="Explorer!"/>
                </form>
                
            </>
        )
    }
}

export default Forms
