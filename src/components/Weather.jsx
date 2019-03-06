import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Weather extends React.Component{
  constructor(props){
    super(props);
    this.state={open: false,
    };
    this.handleClickOpen=this.handleClickOpen.bind(this);
    this.handleClose=this.handleClose.bind(this);
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  render(){
    return (<div>
      <hr/>
      <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
        <h3>{this.props.forecast.forecastMoment.format('ddd')}</h3>
      </Button>
      {this.props.forecast.day.condition.text}
      <img src={this.props.forecast.day.condition.icon} alt='weather icon'/>

      <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine your location, even when no apps are running?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>

    </div>)
  }
}

Weather.propTypes = {
  forecast: PropTypes.shape({
    forecastMoment: PropTypes.instanceOf(Moment).isRequired,
    date: PropTypes.string,
    date_epoch: PropTypes.number,
    day: PropTypes.shape({
      condition: PropTypes.shape({
        text: PropTypes.string.isRequired,
        icon: PropTypes.string,
        code: PropTypes.number
      }).isRequired
    }),
    astro: PropTypes.objectOf(PropTypes.string)
  })
}

export default Weather;
