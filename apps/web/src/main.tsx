import { createRoot } from "react-dom/client";
import "./style.css";
import typescriptLogo from "/typescript.svg";
import { Avatar, Button, Badge } from "@repo/ui";
const App = () => (
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" className="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img
        src={typescriptLogo}
        className="logo vanilla"
        alt="TypeScript logo"
      />
    </a>
    <Button color="blue" disabled={true}>
      button
    </Button>
    <Button color="red">button</Button>
    <Button color="purple">button</Button>
    <Badge>badge</Badge>
    <Badge color="blue" shape="flat">
      badge
    </Badge>
    <Badge color="red" onClose={() => console.log("closed")}>
      closable badge
    </Badge>
    <Avatar altText="권유진" />
    <Avatar altText="YuJin Kwon" />
  </div>
);

createRoot(document.getElementById("app")!).render(<App />);
