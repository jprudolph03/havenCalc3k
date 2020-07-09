import React, {Component} from 'react';

class HavenCalc extends Component{
  constructor(props){
    super(props);
    this.state = {
      pLength: '',
      lbLength: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e){
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }








  render(){
    let partLength = this.state.pLength;
    let lbLength = this.state.lbLength;

    //math variables
    let wholeParts = parseInt(lbLength/partLength);
    let mathOffall = (lbLength % partLength).toFixed(3);
    let lostFromCut = wholeParts * .125;
    let remainingOffall = (mathOffall - lostFromCut).toFixed(3);

    return(
      <div>
        <form>
          <label>Input Part Length: </label>
          <input onChange={this.handleChange} type="number" name="pLength" value={partLength} />
          <label>Input Longbar Length: </label>
          <input onChange={this.handleChange} type="number" name="lbLength" value={lbLength} />
        </form>

        <h3>Longbar Length: {lbLength}</h3>
        <h3>Part Length: {partLength}</h3>
        <p><strong>Whole Parts: </strong>{wholeParts}</p>
        <p><strong>Math Offall: </strong>{mathOffall}</p>
        <p><strong>Lost From Cut: </strong>{lostFromCut}</p>
        {remainingOffall < 2 || remainingOffall >= 4 ? <p class="red">{remainingOffall} Offall too large or too small.</p> : <p class="green">{remainingOffall} offall fits params!</p>}
      </div>


    )
  }
}

export default HavenCalc;
