import React from 'react';
import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import { Grid, TextField } from '@material-ui/core';
import { chart } from '/@/managers';
import editor from '../../state';

export default observer(function Edit() {
  const data = chart.data?.judgeLineList[editor.line];

  if (data) {
    return (
      <Grid item xs={12} sm container spacing={2} direction="column">
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="ID"
            type="number"
            value={data?.id}
            onChange={action((event) => {
              data.id = parseInt(event.target.value);
            })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Name"
            value={data?.name ?? ''}
            onChange={action((event) => {
              data.name = event.target.value;
            })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Construct Time"
            type="number"
            value={data?.constructTime}
            onChange={action((event) => {
              data.constructTime = parseFloat(event.target.value);
            })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Destruct Time"
            type="number"
            value={data?.destructTime}
            onChange={action((event) => {
              data.destructTime = parseFloat(event.target.value);
            })}
          />
        </Grid>
      </Grid>
    );
  } else {
    return <></>;
  }
});
