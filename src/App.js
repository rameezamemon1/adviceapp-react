import React from 'react';
 import axios from 'axios';
import './App.css';

class App extends React.Component{
    state = {advice: undefined};
    componentDidMount(){
        console.log('Component Did Mount');
this.fetchApi();
    }

    fetchApi = (async() => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response)=>{
            const advice = response.data.slip.advice;
            const slipId = response.data.slip.slip_id;
            console.log(advice);
            console.log(slipId);
            this.setState({advice: advice})
            
        })
        .catch((error)=>{
            console.log(error)
        })
     
  
    })
    render(){
        return (
            <div className="app">
                <div className="card">
                    <div className="heading">{this.state.advice}
                    </div>
                    <button className="button" onClick={this.fetchApi}><span>Give me advice</span></button>

                </div>
            </div>
        )
    }
}
export default App