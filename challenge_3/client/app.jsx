class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 0,
      orderInfo: {}
    }

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateOrderId = this.updateOrderId.bind(this);
  }


  handleChange(e) {

    // For nested state - create 'dummy' object, operate on it
    let orderInfo = { ...this.state.orderInfo };
    orderInfo[e.target.name] = e.target.value;

    // Replace it with updated object
    this.setState({ orderInfo });

  }

  handleSubmit(e) {
    // Sends orderInfo to server

    e.preventDefault();

    let order = this.state.orderInfo;

    $.ajax({
      type: "POST",
      url: '/order',
      data: order,
      success: function (data) {
        console.log('POSTED to /order');
        console.log(data);

      }
    })
      .done((data) => { this.updateOrderId(data); })
  }


  updateOrderId(data) {
    if (this.state.page === 1) {
      console.log(data);
      var orderInfo = { ...this.state.orderInfo }
      orderInfo.orderId = data;

      this.setState({
        orderInfo
      });

      this.nextPage();
    }
  }


  nextPage() {

    if (this.state.page === 4) {
      alert('Purchase successful!');
      this.setState({
        page: 0
      });

    } else {
      this.setState({
        page: this.state.page + 1
      });
    }
  }

  previousPage() {
    this.setState({
      page: this.state.page - 1
    });
  }


  render() {

    if (this.state.page === 0) {
      return (<div>
        <h2>Checkout Process</h2>
        <div><button onClick={this.nextPage}>Checkout</button></div>
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
          <button onClick={this.previousPage}>Previous</button>
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

    if (this.state.page === 4) {

      return (<div>
        <div>Order confirmation</div>

        <p>{this.state.orderInfo.name}</p>
        <p>{this.state.orderInfo.email}</p>
        <p>{this.state.orderInfo.password}</p>
        <p>{this.state.orderInfo.address1}</p>
        <p>{this.state.orderInfo.address2}</p>
        <p>{this.state.orderInfo.city}</p>
        <p>{this.state.orderInfo.state}</p>
        <p>{this.state.orderInfo.zip}</p>
        <p>{this.state.orderInfo.phone}</p>
        <p>{this.state.orderInfo.cardNumber}</p>
        <p>{this.state.orderInfo.cardExpiry}</p>
        <p>{this.state.orderInfo.CVV}</p>
        <p>{this.state.orderInfo.billingZip}</p>

        <button id="f4" name="f4" onClick={this.handleSubmit}>Purchase</button>

      </div>)

    }
  }


}

ReactDOM.render(<App />, document.getElementById('app'));