import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
const useStyles = makeStyles({
  root: {
    width: 250,
  },
});


export default function ContinuousSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);
  const {audio,currentTime}=props;

  const handleChange = (event, newValue) => {
     newValue=100*(currentTime/audio.duration);
    console.log(newValue,currentTime,audio.duration)
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      {/* <Grid container spacing={2}> */}
        <Grid item xs>
          <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
        </Grid>
      {/* </Grid> */}
    </div>
  );
  
}