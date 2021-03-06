import React,{Component}from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Radium,{StyleRoot} from 'radium'

import NavBar from './shared/NavBar.jsx';

class App extends Component{
  getChildContext(){
    return{
      muiTheme:getMuiTheme()
    }
  }

  getStyles(){
    return{
      root:{
        display:'flex',
        flexDirection:'column',
        height:'100vh',
        minHeight:'100vh',
      }
    }
  }

  render(){
    const styles=this.getStyles();
    return(
      <StyleRoot>
        <div style={styles.root}>
          <NavBar/>
          {this.props.children}
        </div>
      </StyleRoot>
    )
  }
}

App.childContextTypes={
  muiTheme:React.PropTypes.object.isRequired
}

export default Radium(App);
