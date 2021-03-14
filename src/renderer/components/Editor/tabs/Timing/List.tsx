import React from 'react';
import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles,
} from '@material-ui/core';
import { chart, timing } from '/@/managers';
import timing_ from './state';

const useStyles = makeStyles({
  tablerow: {
    cursor: 'pointer',
  },
});

export default observer(function List() {
  const cn = useStyles();

  return (
    <Grid item container xs={12} sm spacing={2} direction="column">
      <Grid item>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Bpm</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {chart.data?.bpmList.map((b, i) => (
              <TableRow
                key={b.id}
                className={cn.tablerow}
                selected={i === timing_.selected}
                hover
                onClick={action(() => {
                  timing_.selected = i;
                })}
              >
                <TableCell>{b.id}</TableCell>
                <TableCell>{b.time}</TableCell>
                <TableCell>{b.bpm}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
      <Grid item>
        <Button
          color="primary"
          onClick={action(() => {
            if (chart.data) {
              chart.data.bpmList.push({
                id: timing_.selected + 1,
                time: timing.tick,
                bpm: 100,
              });
              timing_.selected = chart.data.bpmList.length - 1;
            }
          })}
        >
          Add
        </Button>
        <Button
          color="secondary"
          onClick={action(() => {
            if (chart.data) {
              chart.data.bpmList.splice(timing_.selected, 1);
              timing_.selected = chart.data.bpmList.length - 1;
            }
          })}
        >
          Remove
        </Button>
      </Grid>
    </Grid>
  );
});