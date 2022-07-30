import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {CloudDownloadOutlined, Face} from "@material-ui/icons";
import {Button, Grid, Typography, withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";

import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem as MuiTimelineItem,
    TimelineSeparator
} from "@material-ui/lab";
import {withRouter} from "react-router";
import {downloadURL} from "./about.interfaces";
import ProjectContentComponent from "./ProjectContentComponent";

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
        textAlign: 'center',
        '& > *': {
            fontWeight: 'bold',
            textTransform: 'uppercase',

            '&:first-child': {
                fontSize: '3rem',
            },
            '&:not(:first-child)': {
                marginBottom: '12px',
                padding: '5px 8px',
                width: '20%',
                margin: 'auto',

            }
        }
    },
    title: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: '12px',
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
    centerText: {
        display: "flex",
        justifyContent: 'center'
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
        margin: '8px 0',
        fontSize: '14px',
        '& div': {
            '&$projectTitle': {
                fontSize: '15px',
                fontWeight: 700,
                color: '#0057D9',
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
    },
    rightContent: {
        marginTop: '1rem'
    },
    inputWrapper: {
        width: '100px',
        '&$scrollWrapper': {
            height: '200px',
            overflowY: 'scroll'
        }
    },
    scrollWrapper: {},
    downloadWrapper: {
        position: 'fixed',
        bottom: 10,
        left: '50%',
        transform: 'translate(-50%, 0)'
    },
    faceCenter: {
        borderRadius: '15px',
        width: '100%',
        height: '100px',
        border: '1rem #ffff00 thick'
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

                                <ProjectContentComponent
                                    projectContent={{
                                        title: 'Rakuro - 80%',
                                        content: '- Work as a full stack developer to create a booking robot application'
                                    }}
                                    projectSubContents={
                                        [
                                            {
                                                title: 'Frontend: ReactJS',
                                                content: ['Easy-peasy store state management', 'Antd form design with search, and filtering features']
                                            },
                                            {
                                                title: 'Mobile: React Native',
                                                content: ['React navigation', 'Implement UI for both Android and iOS', 'Handle state with Observable store']
                                            },
                                            {
                                                title: 'Backend: Restful API, PostgreSQL',
                                                content: ['Server using Nodejs with Express', 'Implement UI for both Android and iOS', 'Handle state with Observable store']
                                            },
                                        ]
                                    }
                                />
                                <ProjectContentComponent projectContent={{
                                    title: 'ForkApp - 100%',
                                    content: ['A flutter app communicates with Redis Server to command fork lift robots.']
                                }}
                                />
                                <ProjectContentComponent
                                    projectContent={{
                                        title: 'Deep learning project - 70%',
                                        content: ['3D Object Detection using point clouds.', 'Modify existing repository for the project\'s use case and provide a solution\n' +
                                        '                                    for real time processing.']
                                    }}
                                />
                                <ProjectContentComponent
                                    projectContent={{
                                        title: 'Other side projects',
                                        content: ''
                                    }}
                                    projectSubContents={
                                        [{
                                            title: 'ZMapEditor - Reactjs - 5%',
                                            content: ' - Using Geojson and Nebula.gl to implement some custom features to draw traffic map.'
                                        },
                                            {
                                                title: 'Taisei project - Reactjs - 1%',
                                                content: ' - Create a chat room for different company roles to communicate with each other to register robot.'
                                            }
                                        ]
                                    }
                                />

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
                            <Typography className={classes.roleTitle}> R&D DEVELOPER </Typography>
                            <div> BeeSight Soft Inc.</div>

                            <Paper elevation={4} className={classes.paperContent}>
                                <ProjectContentComponent
                                    projectContent={{
                                        title: 'Projects about face detections and recognitions - 95%',
                                        content: ['3D Object Detection using point clouds.', 'Modify existing repository for the project\'s use case and provide a solution for real time processing.', 'Create a machine learning game by merging jsTensorflow and Unity Game 2D using WebSocket.', 'Work with Unity and Android to create a Snapchat-lookalike project.']
                                    }}
                                />
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
                            <ProjectContentComponent
                                projectContent={{
                                    title: 'Bachelor of Computer Science, 2019',
                                    content: ['Graduated with GPA 8.89', ' Student of Advanced Program in Computer Science', 'IELTS band 6.5']
                                }}
                            />
                        </Paper>

                    </TimelineContent>
                </TimelineItem>
            </div>
        </Timeline>);
    };
    const skillContent = () => {
        return (
            <div className={classes.rightContent}>
                <Typography variant={'h5'}
                            component={'h1'}
                            gutterBottom
                            className={classes.title}
                            style={{marginTop: '5.3em'}}
                >Areas of Expertise</Typography>
                <Paper className={classes.paperContent}>
                    <ProjectContentComponent
                        projectContent={{
                            title: '',
                            content: ['Knowledge of Dart, Javascript, Typescript, CSS, HTML', 'knowledge of React.js', 'Knowledge of Flutter', 'Knowledge of React Native', 'C++, and Python experience', 'NodeJs - Express and Restful API']
                        }}
                    />
                </Paper>
                <Typography variant='h5'
                            component={'h1'}
                            gutterBottom
                            className={classes.title}
                            style={{marginTop: '2.5em'}}
                >WORK
                    SKILLS</Typography>
                <Paper className={classes.paperContent}>
                    <ProjectContentComponent
                        projectContent={{
                            title: '',
                            content: ['Have knowledge of Data Structures and Algorithms.', 'Detail oriented, team player', 'Problem solver by presenting and understanding the flow of code.', 'Strong self-learning ability but always eager to ask.']
                        }}
                    />
                </Paper>

            </div>);
    };

    return (<div className={classes.contentWrapper}>
        <div className={classes.titleWrapper}>
            <div>
                <Face fontSize={'large'}/>
            </div>
            <h1>
                RESUME
            </h1>

        </div>
        <div className={classes.content}>
            <Grid container>
                <Grid item xs={6}>
                    {drawTimeLines()}
                    {renderEducationTimeline()}
                </Grid>
                <Grid item xs={6}>
                    {skillContent()}
                </Grid>

            </Grid>
        </div>
        <div className={classes.downloadWrapper}>
            <Button href={downloadURL} download='cv' variant={'contained'} color="primary" size={'large'}
                    startIcon={<CloudDownloadOutlined/>}
            >
                Download CV
            </Button>
        </div>
    </div>);
};
export default withRouter(About);
