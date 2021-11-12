import React from 'react';

// material-ui
import { Link, Typography, Stack } from '@material-ui/core';

//-----------------------|| FOOTER - AUTHENTICATION 2 & 3 ||-----------------------//

const AuthFooter = () => {
    return (
        <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle2" component={Link} href="https://github.com/app-generator/react-flask-authentication" target="_blank" underline="hover">
                Sources
            </Typography>
            <Typography variant="subtitle2" component={Link} href="https://bit.ly/37fF9RT" target="_blank" underline="hover">
                &copy; CodedThemes
            </Typography>
        </Stack>
    );
};

export default AuthFooter;
