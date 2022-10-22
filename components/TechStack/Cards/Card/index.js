import MyGithubLogo from "../../../../assets/icons/MyGithubLogo";
import MyJavaLogo from "../../../../assets/icons/MyJavaLogo";
import MyReactLogo from "../../../../assets/icons/MyReactLogo";

export function getIcon(title) {
  const style = {
    height: "100px",
    width: "200px",
    color: "#4dfed1",
  };

  switch (title) {
    case "Frontend":
      return <MyReactLogo />;
    case "Backend":
      return <MyJavaLogo />;
    case "Github":
      return <MyGithubLogo />;
    default:
      return null;
  }
}

export { default as Card } from "./Card";
