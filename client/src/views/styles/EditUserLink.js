/**
 * Dependencies
 */

import { styled } from '@material-ui/styles';
import { Link } from 'react-router-dom';

/**
 * Define style
 */

const EditUserLink = styled(Link)({
  color: '#333',
  backgroundColor: '#E5E6E8',
  boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
  padding: '6px 76px',
  textDecoration:'none',
  lineHeight: '1.75',
  fontWeight: 500,
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: '#bbbbbb',
  },
  '&:active': {
    boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)',
  }
});

/**
 * Export style
 */

export default EditUserLink;
