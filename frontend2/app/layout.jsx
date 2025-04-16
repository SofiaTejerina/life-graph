import "./ui/styles/global.module.css";
import "./ui/styles/login.css";
import "./ui/styles/baseNode.module.css";
import "./ui/styles/nodecontextMenu.module.css";
import "reactflow/dist/style.css";
import mainStyles from "./ui/styles/main.module.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mainStyles.root}>
      <body>{children}</body>
    </html>
  );
}
