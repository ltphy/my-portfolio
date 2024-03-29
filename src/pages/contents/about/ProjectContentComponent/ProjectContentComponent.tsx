import React from "react";
import styles from './styles.module.scss';

export interface ProjectContent {
    title: string;
    content: string | string[];
}

export interface ProjectContentComponentProps {
    projectContent: ProjectContent;
    projectSubContents?: ProjectContent[];
}

const ProjectContentComponent = (props: ProjectContentComponentProps) => {
    const {projectContent, projectSubContents} = props;

    const renderContent = (content: string | string[]) => {
        return typeof content === "string" ? <p>{content}</p> : (
            <div>
                {content.map((content) => {
                    return (<div key={content}>- {content}</div>);
                })}
            </div>
        );
    };

    return <div>
        <div className={styles.project_title}>{projectContent.title}</div>
        {renderContent(projectContent.content)}
        {
            projectSubContents && projectSubContents.map((projectSubContent) => {
                return <div key={projectSubContent.title}>
                    <div className={styles.project_sub_title}>{projectSubContent.title}</div>
                    {renderContent(projectSubContent.content)}
                </div>
            })
        }
    </div>
};

export default ProjectContentComponent;