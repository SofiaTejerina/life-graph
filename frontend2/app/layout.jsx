import "./ui/styles/global.module.css";
import "./ui/styles/login.css";
import "./ui/styles/baseNode.module.css";
import "./ui/styles/nodecontextMenu.css";
import "reactflow/dist/style.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
