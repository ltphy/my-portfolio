import React from "react";
import { makeStyles } from '@mui/styles';
import {CloudDownloadOutlined, Face, LaptopMac as LaptopMacIcon} from "@mui/icons-material";
import {Button, Grid, Typography, Paper, Grid2} from "@mui/material";
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineSeparator
} from "@mui/lab";
import {downloadURL} from "./about.interfaces";
import ProjectContentComponent from "./ProjectContentComponent";

const useStyles = makeStyles((theme: any) => ({
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
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        boxShadow: '0 4px 14px 0 rgba(99, 102, 241, 0.4)',
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
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        boxShadow: '0 4px 14px 0 rgba(99, 102, 241, 0.3)',
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
                                <h3>July 2024 - Present</h3>
                            </div>
                            <Typography className={classes.roleTitle}>Bridge Software Engineer / Cloud Architect / Product Owner</Typography>
                            <div>ROBO-HI Inc. (Japan)</div>
                            <Paper elevation={4} className={classes.paperContent}>
                                <ProjectContentComponent
                                    projectContent={{
                                        title: 'RoboHUB - Robot Integration Platform',
                                        content: ['Architected robot integration platform connecting robots with facility equipment (elevators, automatic doors, security gates, fire alarms, nurse call, power supply)', 'Designed IoT communication flow using AWS IoT Core for robot-equipment interaction', 'Led migration from AWS IoT Analytics to modern stack (Kinesis Firehose → S3 Parquet → Glue → Athena)', 'Designed AWS Disaster Recovery and Cross-Region Migration (Tokyo → Singapore)', 'Served as bridge between Japan and Vietnam teams, reducing bug reports and ensuring client satisfaction']
                                    }}
                                />
                                <ProjectContentComponent
                                    projectContent={{
                                        title: 'EYECAN & RoboVision - Mobile Applications',
                                        content: ['Led camera streaming service with ONVIF protocol and PTZ control', 'Reorganized codebase using Domain Driven Design for Android/iOS consistency', 'Developed indoor navigation app using HLOC (Hierarchical Localization) without GPS', 'Designed multi-floor navigation with elevator integration']
                                    }}
                                />
                                <ProjectContentComponent
                                    projectContent={{
                                        title: 'CarriRo Platform',
                                        content: ['Maintained on-premises warehouse platform', 'Analyzed TimescaleDB data for robot telemetry investigation']
                                    }}
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
                                <h3>November 2019 - July 2024</h3>
                            </div>
                            <Typography className={classes.roleTitle}>Software Engineer</Typography>
                            <div>ZMP VIETNAM</div>
                            <Paper elevation={4} className={classes.paperContent}>
                                <ProjectContentComponent
                                    projectContent={{
                                        title: 'Eyecan - Backend Lead',
                                        content: ['Designed backend and indoor navigation algorithms for visually impaired users', 'Built scalable AWS cloud infrastructure with error logging and analytics', 'Developed multiple-path finding algorithms using Express.js and Neo4j graph database']
                                    }}
                                />
                                <ProjectContentComponent
                                    projectContent={{
                                        title: 'Fork Talk - Mobile Developer',
                                        content: ['Built Flutter application for fork robot control and task scenario management', 'Implemented MVVM architecture with Hive storage and Provider state management', 'Applied Domain-Driven Design for robust extensibility']
                                    }}
                                />
                                <ProjectContentComponent
                                    projectContent={{
                                        title: 'Rakuro - Software Engineer',
                                        content: ['Maintained robot booking application with pre-determined routes', 'Full-stack development: ReactJS frontend with easy-peasy state management', 'React Native mobile app, Node.js/PostgreSQL backend']
                                    }}
                                />
                                <ProjectContentComponent
                                    projectContent={{
                                        title: 'Zimulator - Software Engineer',
                                        content: ['Developed ReactJS/TypeScript application for Gazebo simulator XML configuration', 'Implemented RESTful APIs with Node.js/Express and MongoDB']
                                    }}
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
                            <Typography className={classes.roleTitle}>R&D Developer</Typography>
                            <div>BeeSight Soft Inc. (Vietnam)</div>
                            <Paper elevation={4} className={classes.paperContent}>
                                <ProjectContentComponent
                                    projectContent={{
                                        title: 'ML & Computer Vision Projects',
                                        content: ['Developed ML game integrating TensorFlow.js with Unity 2D via WebSocket', 'Implemented face recognition on Raspberry Pi 3.0 platform']
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
                            <h3>2015 - 2019</h3>
                        </div>
                        <Typography className={classes.roleTitle}>Computer Science Student</Typography>
                        <div>HCMUS - University of Science</div>
                        <Paper className={classes.paperContent}>
                            <ProjectContentComponent
                                projectContent={{
                                    title: 'Bachelor of Computer Science',
                                    content: ['GPA: 3.88 (Top 5%)', 'Advanced Program in Computer Science', 'IELTS Band 6.5', 'AWS Certified Solutions Architect - Associate', 'Japanese: Near N2 level']
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
                >Technical Skills</Typography>
                <Paper className={classes.paperContent}>
                    <ProjectContentComponent
                        projectContent={{
                            title: 'Cloud & Infrastructure',
                            content: ['AWS (IoT Core, Kinesis, Lambda, S3, Glue, Athena, DynamoDB, Cognito, EC2, ECS, RDS)', 'Docker, Kubernetes']
                        }}
                    />
                    <ProjectContentComponent
                        projectContent={{
                            title: 'Backend',
                            content: ['Node.js, Express.js, Python, RESTful API', 'PostgreSQL, Neo4j, MongoDB, Redis, TimescaleDB']
                        }}
                    />
                    <ProjectContentComponent
                        projectContent={{
                            title: 'Frontend & Mobile',
                            content: ['ReactJS, TypeScript, Flutter, React Native', 'Swift/SwiftUI (iOS)']
                        }}
                    />
                    <ProjectContentComponent
                        projectContent={{
                            title: 'IoT & Robotics',
                            content: ['AWS IoT, MQTT', 'Equipment Integration (Elevators, Auto-doors, Security Gates, Fire Alarms)', 'Robot Communication Protocols']
                        }}
                    />
                    <ProjectContentComponent
                        projectContent={{
                            title: 'Architecture',
                            content: ['Domain Driven Design, MVVM, Microservices', 'System Design, Disaster Recovery Planning']
                        }}
                    />
                </Paper>
                <Typography variant='h5'
                            component={'h1'}
                            gutterBottom
                            className={classes.title}
                            style={{marginTop: '2.5em'}}
                >Key Strengths</Typography>
                <Paper className={classes.paperContent}>
                    <ProjectContentComponent
                        projectContent={{
                            title: '',
                            content: ['Bridge Communication: Facilitating technical discussions between Japanese and Vietnamese teams', 'Technical Leadership: Leading distributed teams and mentoring junior developers', 'Problem Solving: Debugging complex distributed systems and designing scalable solutions', 'System Architecture: Designing cloud infrastructure and robot integration platforms']
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
            <Grid2 container>
                <Grid2 >
                    {drawTimeLines()}
                    {renderEducationTimeline()}
                </Grid2>
                <Grid2>
                    {skillContent()}
                </Grid2>

            </Grid2>
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
export default About;
