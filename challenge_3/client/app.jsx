class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 'checkout'
    }

    this.startCheckout = this.startCheckout.bind(this);
  }



  // Whats all the stuff we need to do?
  // Send a post request to a different endpoint? Or just one endpoint and update the record based on ID?
  // Look up mongodb find by id and update record


  componendDidMount() {

  }

  startCheckout(e) {
    e.preventDefault();
    console.log('startCheckout');
    console.log()
    this.setState({
      page: 'f1'
    });

  }

  updatePage() {

  }


  render() {

    // onSubmit change the state
    // render forms based on state
    //

    if (this.state.page === 'checkout') {
      return (<div>
        <h2>Checkout Process</h2>
        <div><button onClick={this.startCheckout}>Checkout</button></div>
      </div>);
    }
    if (this.state.page === 'f1') {

      return (<div>
        <div>User Info</div>
        <form>
          <label>Name:</label><br />
          <input type="text" id="name" value=""></input><br /><br />
          <label>Email:</label><br />
          <input type="text" id="email" value=""></input><br /><br />
          <label>Password:</label><br />
          <input type="text" id="password" value=""></input><br /><br />
          <button onClick={this.}></button>
        </form>
      </div>)
    }

  }
}

ReactDOM.render(<App />, document.getElementById('app'));