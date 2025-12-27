export const metadata = {
  title: "PakSupply.pk",
  description: "B2B FMCG Platform for Pakistan"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial" }}>
        {children}
      </body>
    </html>
  );
}
