import Template from "@template";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Template.Default>
      <body>{children}</body>
    </Template.Default>
  )
}
