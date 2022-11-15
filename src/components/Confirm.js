import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import {List, ListItem} from 'material-ui/List'

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        // Send data to api
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

  render() {
    const {values: {firstName, lastName, email, occupation, city, bio}} = this.props

    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="Confirm User Data"/>
            <List>
                <ListItem
                    primaryText="First Name"
                    secundaryName={firstName}
                />
                <ListItem
                    primaryText="Last Name"
                    secundaryName={lastName}
                />
                <ListItem
                    primaryText="Email"
                    secundaryName={email}
                />
                <ListItem
                    primaryText="Occupation"
                    secundaryName={occupation}
                />
                <ListItem
                    primaryText="City"
                    secundaryName={city}
                />
                <ListItem
                    primaryText="Bio"
                    secundaryName={bio}
                />
            </List>
            <FlatButton 
                label="Confirm & Continue"
                primary={true}
                style={styles.buttonContinue}
                onClick={this.continue}
            />
            <FlatButton 
                label="Back"
                primary={false}
                style={styles.buttonBack}
                onClick={this.back}
            />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
    buttonContinue: {
        backgroundColor: '#29b6f6',
        color: 'white',
        margin: 15,
    },
    buttonBack:{
        backgroundColor: 'red',
        color: 'white',
        margin: 15
    }
}

export default Confirm