class AppComponent extends React.Component {
  constructor(props){
    super(props);
    // the only place where you do state changes is in the constructor
    this.state = {count: 5, title: "hello world"};
    // locks them in to AppComponent
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
    render(){
      const {count, title} = this.state;
      return(
        <section className="site-wrap">
          <h1>Title: {title}!</h1>
          <p>Counter: {count}! </p>
          <div>
            <button onClick={this.decrement}>- counter</button>
            <button onClick={this.increment}>+ counter</button>
          </div>
        </section>
      );
      // return React.createElement(
      //   "section",
      //   {className: "site-wrap"},
      //   React.createElement("h1",null,"Header"),
      //   React.createElement("p",null,"lorem"));
    }
  increment(){
    const {count} =  this.state;
    this.setState({count: count + 1})
  }
  decrement(){
    const {count} =  this.state;
    this.setState({count: count - 1})
  }
}

ReactDOM.render(
  <AppComponent />,
  document.getElementById("application"));
