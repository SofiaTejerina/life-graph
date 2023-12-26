import "./ui/styles/global.module.css";
import "./ui/styles/login.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
