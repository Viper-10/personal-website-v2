import timelineElements from "./timelineElements.json";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import styles from "./style.module.css";
import SchoolIcon from "../../assets/icons/SchoolIcon";
import WorkIcon from "../../assets/icons/WorkIcon";

const Timeline = () => {
  const timeline = timelineElements.map((element) => {
    const isWorkIcon = element.type === "work";
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };

    return (
      <VerticalTimelineElement
        key={element.id}
        date={element.date}
        dateClassName="date"
        iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
        // icon={isWorkIcon ? <Work /> : <School />}
        icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">{element.title}</h3>
        <h6 className="vertical-timeline-element-subtitle">
          {element.workplace}
          {` ${element.location}`}
        </h6>
        {element.description && (
          <p className="vertical-timeline-element-description">
            {element.description}
          </p>
        )}
        {element.bulletpoints && (
          <ul className={styles["bullet-point-list"]}>
            {element.bulletpoints.map((bulletpoint, index) => (
              <li className={styles["bullet-point"]} key={index}>
                {bulletpoint}
              </li>
            ))}
          </ul>
        )}
      </VerticalTimelineElement>
    );
  });
  return (
    <div id="timeline">
      <h2 className="heading">Timeline</h2>
      <VerticalTimeline>{timeline}</VerticalTimeline>
    </div>
  );
};

export default Timeline;
