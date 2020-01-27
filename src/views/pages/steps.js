import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  }
}));

function getSteps() {
  return [
    <h2>مرحله اول</h2>,
    <h2>مرحله دوم</h2>,
    <h2>مرحله سوم</h2>,
    <h2>مرحله چهارم</h2>
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <div>
          <h3>یک لیدر را انتخاب کنید</h3>
          <br />
          <select name="لیدرها">
            <option value="لیدر">لیدر شماره یک</option>
            <option value="لیدر">لیدر شماره دو</option>
            <option value="لیدر">لیدر شماره سه </option>
            <option value="لیدر">لیدر شماره چهار</option>
          </select>
          <br />
          <br />
        </div>
      );
    case 1:
      return (
        <div>
          <h3>تاریخ موردنظر را وارد کنید</h3>
          <form>
            <input type="date" name="date" />
          </form>
        </div>
      );
    case 2:
      return (
        <div>
          <h3>زمان شروع را وارد کنید</h3>
          <input
            type="time"
            id="appt"
            name="appt"
            min="09:00"
            max="18:00"
            required
          />
        </div>
      );
    case 3:
      return (
        <div>
          <h3>زمان پایان را وارد کنید</h3>
          <input
            type="time"
            id="appt"
            name="appt"
            min="09:00"
            max="18:00"
            required
          />
        </div>
      );
    default:
      return "Unknown step";
  }
}

export default function Steps() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    قبلی
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "پایان" : "بعدی"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography> مراحل به پایان رسید</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
