class Hello extends React.Component {
    render() {
        const bangs= "!".repeat(this.props.bangs);
        //console.log(this.props);
        const from=this.props.from;
        const to= this.props.to;
        return (
          <div>
            <h1>Hello {to} , from {from} {bangs} </h1>
            {/* <h3>From : {from}</h3>
            <h3>To: { to} </h3> */}
          </div>
        )
    }
}