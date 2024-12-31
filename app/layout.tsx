import AppBar from './_modules/AppBar/AppBar'
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <AppBar/>
          {children}</body>
      </html>
    )
  }