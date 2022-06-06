import React from 'react'

class DonationOptions extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '5'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      window.confirm('Please confirm your doncations of $' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Please choose a donation $
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20"> 20</option>
              <option value="50">50</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default DonationOptions;
  
//   ReactDOM.render(
//     <FlavorForm />,
//     document.getElementById('root')
//   );