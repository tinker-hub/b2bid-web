import React from 'react';

import styled from 'styled-components';
import MUIButton from '@material-ui/core/Button';

const StyledButton = styled(MUIButton)``;

export const Button = props => <StyledButton {...props} />;
