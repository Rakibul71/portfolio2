import { DiAndroid, DiTerminal, DiJavascript, DiReact, DiWebplatform, DiGoogleCloudPlatform } from "react-icons/di";
import { SiSolidity, SiFirebase, SiGit, SiHiveBlockchain } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";

export const Skills = [
  {
    slug: "Web-Development",
    Component: DiWebplatform,
    title: "Web-Development",
    Description: () => <>I work on web development for front end using React and backend Using Express.</>,
  },
  {
    slug: "Javascript",
    Component: DiJavascript,
    title: "Javascript",
    Description: () => <>Currently working on javascript algorithm and Data structure. </>,
  },
  {
    slug: "Solidity",
    Component: DiGoogleCloudPlatform,
    title: "Solidity",
    Description: () => <>I can code in Solidity and able to create smart contract. But I mainly use it for Dapp Development</>,
  },
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Scripting",
    Description: () => <>I have written dozens of Shell scripts for various purposes.</>,
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>I have used Firebase for auth, database & analytics in my apps.</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Git is a tool that I use every day. I use GitHub for pushing my code.</>,
  },
];
