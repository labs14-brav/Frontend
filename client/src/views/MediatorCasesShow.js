/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button, Card, Container } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { MediatorCasesShowStyle } from './styles/index';
import {
    NavBar,
    SideNavBlock,
    MediatorPendingCaseList,
    MediatorAcceptedCaseList,
    MediatorCompletedCaseList
} from '../components';

/**
 * Define styles
 */

const NavTabs = withStyles({
    root: {
      borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
      backgroundColor: '#1890ff',
    },
})(Tabs);

const NavTab = withStyles(theme => ({
    root: {
      textTransform: 'none',
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(4),
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        color: '#40a9ff',
        opacity: 1,
      },
      '&$selected': {
        color: '#1890ff',
        fontWeight: theme.typography.fontWeightMedium,
      },
      '&:focus': {
        color: '#40a9ff',
      },
    },
    selected: {},
  }))(props => <Tab disableRipple {...props} />);

const StyledTabs = withStyles({
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      '& > div': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#635ee7',
      },
    },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);
  
const StyledTab = withStyles(theme => ({
    root: {
      textTransform: 'none',
      color: '#fff',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      '&:focus': {
        opacity: 1,
      },
    },
}))(props => <Tab disableRipple {...props} />);
  

/**
 *  Export view
 */

export default function MediatorCasesShow() {
    const [selectedTab, setSelectedTab] = useState("pending");
    const [value, setValue] = useState(0);

    function handleChange(event, newValue) {
        setValue(newValue)
        if (newValue === 0) setSelectedTab("pending")
        if (newValue === 1) setSelectedTab("accepted")
        if (newValue === 2) setSelectedTab("completed")
    }

    return (
        <MediatorCasesShowStyle>
            <NavTabs value={value} onChange={handleChange} aria-label="mediator-cases-navtabs">
                <NavTab label="Pending" />
                <NavTab label="Accepted" />
                <NavTab label="Completed" />
            </NavTabs>
            { selectedTab === "pending" ? <div>
                <hi>Pending</hi>
                <MediatorPendingCaseList />
            </div> : null }
            { selectedTab === "accepted" ? <div>
            <hi>Accepted</hi>
            <MediatorAcceptedCaseList />
            </div> : null}
            { selectedTab === "completed" ? <div>
                <hi>Completed</hi>
                <MediatorCompletedCaseList />
            </div> : null}
        </MediatorCasesShowStyle>
    );
}
