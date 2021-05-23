import React from "react";
import styles from "./styles.module.scss";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Face} from "@material-ui/icons";
import {Typography, Grid, withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from "@material-ui/icons/LaptopMac";

import {
    TimelineItem as MuiTimelineItem,
    TimelineOppositeContent,
    Timeline,
    TimelineDot,
    TimelineSeparator,
    TimelineConnector, TimelineContent
} from "@material-ui/lab";
import {withRouter} from "react-router";

const TimelineItem = withStyles({
    missingOppositeContent: {
        "&:before": {
            display: "none"
        }
    }
})(MuiTimelineItem);

const useStyles = makeStyles((theme) => ({
    contentWrapper: {
        padding: '80px',
    },
    titleWrapper: {
        textAlign: 'center'
    },
    title: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: '12px',
        padding: '5px 8px'
    },
    content: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
    },

    paper: {
        padding: theme.spacing(1),
    },
    timelineDot: {
        color: 'white',
        background: 'white'
    },
    timelineDotCurrent: {
        background: '#0057D9'
    },
    timelineConnector: {
        color: 'white',
        background: 'white'
    },
    timelineContent: {
        marginLeft: '10px',
    },
    event: {
        position: 'relative',

        '& h3': {
            color: '#fff',
            padding: '3px 8px',
            marginBottom: '1.5em',
            background: '#0057D9',
            width: 'max-content',
            fontSize: '14px',
            marginLeft: '30px',
            boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',

            '&::before': {
                content: '""',
                bottom: '0',
                position: 'absolute',
                border: '11px solid #0057D9!important',
                borderLeftColor: 'transparent !important',
                display: 'block',
                marginLeft: '-35px',
            }
        },
    },
    projectSubTitle: {
        fontWeight: 700,
        color: '#0057D9',
        opacity: 0.8,
        fontSize: '14px',
        marginBottom: '5px'
    },
    paperContent: {
        padding: '8px 12px',
        marginBottom: '8px',
        marginTop: '8px',
        fontSize: '14px',
        '& div': {
            '&$projectTitle': {
                fontSize: '15px',
                fontWeight: 700,
                color: '#0057D9',
                '&:not(:first-child)': {marginTop: '10px'}

            }
        }
    },
    projectTitle: {},
    iconSection: {
        backgroundColor: '#0057D9'
    },
    roleTitle: {
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }

}));

const About = () => {
    const classes = useStyles();
    const drawTimeLines = () => {
        return (<>
            <Timeline>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot className={classes.iconSection}>
                            <LaptopMacIcon fontSize={'large'}/>

                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography className={classes.title} variant={'h5'} component={'h1'}>
                            CODE HISTORY
                        </Typography>

                    </TimelineContent>

                </TimelineItem>
                <div className={classes.timelineContent}>
                    <TimelineItem>
                        <TimelineSeparator>

                            <TimelineDot className={classes.timelineDotCurrent}/>
                            <TimelineConnector className={classes.timelineConnector}/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className={classes.event}>
                                <h3>Nov 2020 - current</h3>
                            </div>

                            <Typography className={classes.roleTitle}>software engineer</Typography>
                            <div> ZMP VN Inc.</div>

                            <Paper elevation={4} className={classes.paperContent}>
                                <div className={classes.projectTitle}> ForkApp ( 7
                                    months ) - 95%
                                </div>
                                <p> - A flutter app communicates with Redis Server to command fork lift robots.</p>
                                <div className={classes.projectTitle}> Deep learning project
                                    ( 4months ) - 70%
                                </div>
                                <div> - 3D Object Detection using point clouds.</div>
                                <div> - Modify existing repository for the project's use case and provide a solution
                                    for real time processing.
                                </div>

                                <div className={classes.projectTitle}> Zimulator
                                    ( 6months ) - 30%
                                </div>
                                <p>
                                    - A Reactjs project to simulate XML structure as a config for Gazebo simulator,
                                    written in Typescript.
                                </p>

                                <div className={classes.projectTitle}> Other side projects
                                </div>
                                <div className={classes.projectSubTitle}>
                                    ZMapEditor- Reactjs - 5%
                                </div>
                                <span> - Using Geojson and Nebula.gl to implement some custom features to draw traffic map.</span>
                                <div className={classes.projectSubTitle}>
                                    Taisei project - Reactjs - 1%
                                </div>
                                <span> - Create a chat room for different company roles to communicate with each other to register robot.</span>

                            </Paper>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>

                            <TimelineDot className={classes.timelineDot}/>
                            <TimelineConnector className={classes.timelineConnector}/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className={classes.event}>
                                <h3>June 2018 - April 2019</h3>
                            </div>
                            <Typography className={classes.roleTitle}>  R&D DEVELOPER </Typography>
                            <div> BeeSight Soft Inc.</div>

                            <Paper elevation={4} className={classes.paperContent}>
                                <div className={classes.projectTitle}>
                                    Projects about face detections and recognitions - 95%
                                </div>

                                <div>
                                    - Create a machine learning game by merging jsTensorflow and Unity Game 2D using
                                    WebSocket.
                                </div>
                                <div>
                                    - Implement face recognition on a Raspberry Pi 3.0.
                                </div>
                                <div>
                                    - Work with Unity and Android to create a Snapchat-lookalike project.
                                </div>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                </div>
            </Timeline></>);
    };
    const renderEducationTimeline = () => {
        return (<Timeline>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot className={classes.iconSection}>
                        <LaptopMacIcon fontSize={'large'}/>
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                    <Typography className={classes.title} variant={'h5'} component={'h1'}>
                        Education history
                    </Typography>
                </TimelineContent>

            </TimelineItem>
            <div className={classes.timelineContent}>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot className={classes.timelineDot}/>
                        <TimelineConnector className={classes.timelineConnector}/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className={classes.event}>
                            <h3>June 2018 - April 2019</h3>
                        </div>
                        <Typography className={classes.roleTitle}> Computer science student</Typography>
                        <div>HCMUS-University of science</div>
                        <Paper className={classes.paperContent}>
                            <div className={classes.projectTitle}> Bachelor of Computer Science, 2019</div>
                            <div> - Graduated with GPA 8.89 </div>
                            <div> - Student of Advanced Program in Computer Science </div>
                            <div> - IELTS band 6.5 </div>
                        </Paper>

                    </TimelineContent>
                </TimelineItem>
            </div>
        </Timeline>);
    };
    const skillContent = () => {
        return (
            <div>


                <Paper>
                    <div>
                        <Typography variant='h5' gutterBottom>Areas of Expertise</Typography>
                        Working knowledge of Flutter
                        Working knowledge of ReactJS written in TypeScript
                        Javascript, C++, and Python experience
                        HTML, CSS
                        NodeJS back-end and Web API experience
                    </div>
                </Paper>
                <Paper>
                    <div>
                        <Typography variant='h5' gutterBottom>WORK SKILLS</Typography>

                        Have fundamental knowledge of Data Structures and Algorithms.
                        Detail oriented, team player
                        Problem solver by presenting and understanding the flow of code.
                        Tasks breakdown, product mindset
                        Strong self-learning ability but always eager to ask.
                    </div>
                </Paper>
            </div>);
    };
    return (<div className={classes.contentWrapper}>
        <div className={classes.titleWrapper}>
            <h1 className={classes.title}>
                RESUME
            </h1>
            <div>
                <Face fontSize={'large'}/>
            </div>
        </div>
        <div className={classes.content}>
            <Grid container>
                <Grid item xs={6}>
                    {drawTimeLines()}
                    {renderEducationTimeline()}
                </Grid>
                <Grid item xs={6}>

                </Grid>

            </Grid>
        </div>

    </div>);
};
export default withRouter(About);
