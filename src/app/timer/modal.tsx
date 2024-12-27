'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { useTimeStore } from './timeStore';

const EditModal: React.FC = () => {
  const timeStore = useTimeStore();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleClickOpen} color="success" sx={{ width: 1, mt: 4 }}>
        edit time
      </Button>

      <>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>타이머 시간설정</DialogTitle>
          <DialogContent>
            <TextField
              variant="standard"
              size="small"
              onChange={(e) => timeStore.updateMinutesState(Number(e.target.value))}
            />
            분
            <TextField
              variant="standard"
              size="small"
              sx={{ ml: 3 }}
              onChange={(e) => timeStore.updateSecondsState(Number(e.target.value))}
            />
            초
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="success">
              닫기
            </Button>
          </DialogActions>
        </Dialog>
      </>
    </>
  );
};

export default function Component() {
  return <EditModal />;
}
