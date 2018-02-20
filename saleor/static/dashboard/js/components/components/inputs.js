import React from 'react';
import MuiTextField from 'material-ui/TextField';

const TextField = (props) => {
  return (
    <MuiTextField inputProps={{ className: 'browser-default' }}
      fullWidth
      {...props} />
  );
};

export {
  TextField
};
