import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import styles from "./style.module.css";
import Image from "next/image";
import ArrowDiagonalLogo from "../../../assets/icons/ArrowDiagonalLogo";

const Project = ({ name, link, description, category, stack }) => {
  return (
    <AccordionItem key={name} uuid={link}>
      <AccordionItemHeading>
        <AccordionItemButton>
          <span
            className={styles["cyan-on-hover"]}
            onClick={(e) => {
              window?.open(link);
              e.stopPropagation();
            }}
          >
            {name}
            {category && `- ${category}`}
            <ArrowDiagonalLogo />
          </span>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <div>
          <div className="accordion-panel-content">
            <div className="accordion-panel-heading">Description</div>
            <p className="accordion-panel-text">{description}</p>
          </div>
          <div className="accordion-panel-content">
            <div className="accordion-panel-heading">Tech Stack</div>
            <p className="accordion-panel-text">{stack}</p>
          </div>
        </div>
      </AccordionItemPanel>
    </AccordionItem>
  );
};

export default Project;
