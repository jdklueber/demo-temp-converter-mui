import * as React from 'react';
import {useState} from 'react';
import LabeledBox from './components/LabeledBox';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import Input from './components/Input';

function App() {
  const [tempF, setTempF] = useState(0);
  const [tempC, setTempC] = useState(0);

  const FtoC = (f) => { return (f - 32) * 5 / 9};
  const CtoF = (c) => { return (c / 5 * 9) + 32};

  const changeF = (evt) => {
    setTempF(parseFloat(evt.currentTarget.value));
    setTempC(FtoC(parseFloat(evt.currentTarget.value)));
  }

  const changeC = (evt) => {
    setTempC(parseFloat(evt.currentTarget.value));
    setTempF(CtoF(parseFloat(evt.currentTarget.value)));
  }
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item>
          <LabeledBox label="Fahrenheit">
            <Input value={tempF} onChange={changeF}  type="number"/>
          </LabeledBox>
        </Grid>
        <Grid item>
          <LabeledBox label="Celcius">
            <Input value={tempC} onChange={changeC}  type="number"/>
          </LabeledBox>
        </Grid>
      </Grid>

    </Container>
  );
}

export default App;
