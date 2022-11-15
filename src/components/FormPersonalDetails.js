import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

  render() {
    const {values, handleChange} = this.props

    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="Enter Personal Details"/>
            <TextField 
                hintText="Enter your occupation"
                floatingLabelText="occupation"
                onChange={handleChange('occupation')}
                defaultValue={values.occupation}
            />
            <br/>
            <TextField 
                hintText="Enter your city"
                floatingLabelText="city"
                onChange={handleChange('city')}
                defaultValue={values.city}
            />
            <br/>
            <TextField 
                hintText="Enter your bio"
                floatingLabelText="bio"
                onChange={handleChange('bio')}
                defaultValue={values.bio}
            />
            <br/>
            <FlatButton 
                label="Continue"
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

export default FormPersonalDetails