import React from "react";

class DonationOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "5" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    window.confirm("Please confirm your donations of $" + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="col-md-6">
          <label>
            First Name:
            <input type="text" name="name" />
          </label>
        </div>
        <div class="col-md-6">
          <label>
            Last Name:
            <input type="text" name="name" />
          </label>
        </div>
        <div class="col-12">
          <label>
            Address:
            <input type="text" name="address" />
          </label>
        </div>
        <div class="col-md-6">
          <label>
            City:
            <input type="text" name="city" />
          </label>
        </div>
        <div class="col-md-4">
          <label>
            State:
            <input type="text" name="state" />
          </label>
        </div>
        <div class="col-md-4">
          <label>
            Zip Code:
            <input type="text" name="zip" />
          </label>
        </div>
        <div class="col-md-6">
          <label>
            Email:
            <input type="text" name="email" />
          </label>
        </div>
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

{
  /* <section>
<form class="row g-3"> */
}

// </form>
// </section>
