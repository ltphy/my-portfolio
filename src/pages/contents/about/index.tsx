import React from "react";
import { makeStyles } from '@mui/styles';
import {CloudDownloadOutlined, Face, LaptopMac as LaptopMacIcon} from "@mui/icons-material";
import {Button, Grid, Typography, Paper, Grid2} from "@mui/material";
import { useTranslation } from 'react-i18next';
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
        padding: '20px',
        [theme.breakpoints.up('md')]: {
            padding: '40px',
        },
        [theme.breakpoints.up('lg')]: {
            padding: '80px',
        },
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
        marginTop: '40px',
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
            marginLeft: '0px',
            boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
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
    const { t } = useTranslation();


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
                            {t('about.codeHistory')}
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
                            <Typography className={classes.roleTitle}>{t('about.roles.bridgeEngineer')}</Typography>
                            <div>{t('about.companies.roboHi')}</div>
                            <Paper elevation={4} className={classes.paperContent}>
                                <ProjectContentComponent
                                    projectContent={{
                                        title: t('about.projects.roboHub.title'),
                                        content: t('about.projects.roboHub.items', { returnObjects: true }) as string[]
                                    }}
                                />
                                <ProjectContentComponent
                                    projectContent={{
                                        title: t('about.projects.eyecan.title'),
                                        content: t('about.projects.eyecan.items', { returnObjects: true }) as string[]
                                    }}
                                />
                                <ProjectContentComponent
                                    projectContent={{
                                        title: t('about.projects.carriro.title'),
                                        content: t('about.projects.carriro.items', { returnObjects: true }) as string[]
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
                            <Typography className={classes.roleTitle}>{t('about.roles.softwareEngineer')}</Typography>
                            <div>{t('about.companies.zmpVietnam')}</div>
                            <Paper elevation={4} className={classes.paperContent}>
                                <ProjectContentComponent
                                    projectContent={{
                                        title: t('about.projects.eyecanBackend.title'),
                                        content: t('about.projects.eyecanBackend.items', { returnObjects: true }) as string[]
                                    }}
                                />
                                <ProjectContentComponent
                                    projectContent={{
                                        title: t('about.projects.forkTalk.title'),
                                        content: t('about.projects.forkTalk.items', { returnObjects: true }) as string[]
                                    }}
                                />
                                <ProjectContentComponent
                                    projectContent={{
                                        title: t('about.projects.rakuro.title'),
                                        content: t('about.projects.rakuro.items', { returnObjects: true }) as string[]
                                    }}
                                />
                                <ProjectContentComponent
                                    projectContent={{
                                        title: t('about.projects.zimulator.title'),
                                        content: t('about.projects.zimulator.items', { returnObjects: true }) as string[]
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
                            <Typography className={classes.roleTitle}>{t('about.roles.rdDeveloper')}</Typography>
                            <div>{t('about.companies.beeSight')}</div>
                            <Paper elevation={4} className={classes.paperContent}>
                                <ProjectContentComponent
                                    projectContent={{
                                        title: t('about.projects.mlVision.title'),
                                        content: t('about.projects.mlVision.items', { returnObjects: true }) as string[]
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
                        {t('about.educationHistory')}
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
                        <Typography className={classes.roleTitle}>{t('about.roles.computerScienceStudent')}</Typography>
                        <div>{t('about.companies.hcmus')}</div>
                        <Paper className={classes.paperContent}>
                            <ProjectContentComponent
                                projectContent={{
                                    title: t('about.projects.education.title'),
                                    content: t('about.projects.education.items', { returnObjects: true }) as string[]
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
                            component={'h2'}
                            gutterBottom
                            className={classes.title}
                >{t('about.technicalSkills')}</Typography>
                <Paper className={classes.paperContent}>
                    <ProjectContentComponent
                        projectContent={{
                            title: t('about.skills.cloudInfra.title'),
                            content: t('about.skills.cloudInfra.items', { returnObjects: true }) as string[]
                        }}
                    />
                    <ProjectContentComponent
                        projectContent={{
                            title: t('about.skills.backend.title'),
                            content: t('about.skills.backend.items', { returnObjects: true }) as string[]
                        }}
                    />
                    <ProjectContentComponent
                        projectContent={{
                            title: t('about.skills.frontend.title'),
                            content: t('about.skills.frontend.items', { returnObjects: true }) as string[]
                        }}
                    />
                    <ProjectContentComponent
                        projectContent={{
                            title: t('about.skills.iot.title'),
                            content: t('about.skills.iot.items', { returnObjects: true }) as string[]
                        }}
                    />
                    <ProjectContentComponent
                        projectContent={{
                            title: t('about.skills.architecture.title'),
                            content: t('about.skills.architecture.items', { returnObjects: true }) as string[]
                        }}
                    />
                </Paper>
                <Typography variant='h5'
                            component={'h2'}
                            gutterBottom
                            className={classes.title}
                            sx={{ marginTop: 3 }}
                >{t('about.keyStrengths')}</Typography>
                <Paper className={classes.paperContent}>
                    <ProjectContentComponent
                        projectContent={{
                            title: '',
                            content: t('about.strengths.items', { returnObjects: true }) as string[]
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
                {t('about.title')}
            </h1>
        </div>
        <div className={classes.content}>
            <Grid2 container spacing={4}>
                <Grid2 size={{ xs: 12, md: 8 }}>
                    {drawTimeLines()}
                    {renderEducationTimeline()}
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }}>
                    {skillContent()}
                </Grid2>
            </Grid2>
        </div>
        <div className={classes.downloadWrapper}>
            <Button href={downloadURL} download='cv' variant={'contained'} color="primary" size={'large'}
                    startIcon={<CloudDownloadOutlined/>}
            >
                {t('about.downloadCV')}
            </Button>
        </div>
    </div>);
};
export default About;
