class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 0,
      orderInfo: {}
    }

    this.startCheckout = this.startCheckout.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit(this);
  }

  startCheckout() {
    this.setState({
      page: 1
    });
  }


  handleChange(e) {

    // For nested state - create 'dummy' object, operate on it
    let orderInfo = { ...this.state.orderInfo };
    orderInfo[e.target.name] = e.target.value;

    // Replace it with updated object
    this.setState({ orderInfo });

  }

  handleSubmit() {
    // Sends orderInfo to server

    let order = this.state.orderInfo;

    $.ajax({
      type: "POST",
      url: '/order',
      data: {order},
      success: function (data) {
        console.log('POSTED to /order');
        console.log(data);
      }
    })
    .done(()=> {this.changePage();})
  }

  changePage() {
    this.setState({
      page: this.state.page + 1
    });
    console.log('page change');
  }

  render() {

    if (this.state.page === 0) {
      return (<div>
        <h2>Checkout Process</h2>
        <div><button onClick={this.startCheckout}>Checkout</button></div>
      </div>);
    }
    if (this.state.page === 1) {

      return (<div>
        <div>User Info</div>
        <form>
          <label>Name:</label><br />
          <input type="text" name="name" value={this.state.orderInfo.value} onChange={this.handleChange}></input><br /><br />
          <label>Email:</label><br />
          <input type="text" name="email" value={this.state.orderInfo.value} onChange={this.handleChange}></input><br /><br />
          <label>Password:</label><br />
          <input type="text" name="password" value={this.state.orderInfo.value} onChange={this.handleChange}></input><br /><br />
          <button id="f1" name="f1" onClick={this.handleSubmit}>Next</button>
        </form>
      </div>)
    }

    if (this.state.page === 2) {

      return (<div>
        <div>Contact Info</div>
        <form>
          <label>Address Line 1:</label><br />
          <input type="text" name="address1" value={this.state.orderInfo.value} onChange={this.handleChange}></input><br /><br />
          <label>Address Line 2:</label><br />
          <input type="text" name="address2" value={this.state.orderInfo.value} onChange={this.handleChange}></input><br /><br />
          <label>City:</label><br />
          <input type="text" name="city" value={this.state.orderInfo.value} onChange={this.handleChange}></input><br /><br />
          <label>State:</label><br />
          <input type="text" name="state" value={this.state.orderInfo.value} onChange={this.handleChange}></input><br /><br />
          <label>Zip:</label><br />
          <input type="text" name="zip" value={this.state.orderInfo.value} onChange={this.handleChange}></input><br /><br />
          <label>Phone:</label><br />
          <input type="text" name="phone" value={this.state.orderInfo.value} onChange={this.handleChange}></input><br /><br />
          <button id="f2" name="f2" onClick={this.handleSubmit}>Next</button>
        </form>
      </div>)

    }

    if (this.state.page === 3) {

      return (<div>
        <div>Credit Card Info</div>
        <form>
          <label>Card Number:</label><br />
          <input type="text" name="cardNumber" value={this.state.orderInfo.value} onChange={this.handleChange}></input><br /><br />
          <label>Card Expiry:</label><br />
          <input type="text" name="cardExpiry" value={this.state.orderInfo.value} onChange={this.handleChange}></input><br /><br />
          <label>CVV:</label><br />
          <input type="text" name="CVV" value={this.state.orderInfo.value} onChange={this.handleChange}></input><br /><br />
          <label>Billing Zip:</label><br />
          <input type="text" name="billingZip" value={this.state.orderInfo.value} onChange={this.handleChange}></input><br /><br />
          <button id="f3" name="f3" onClick={this.handleSubmit}>Next</button>
        </form>
      </div>)

    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));