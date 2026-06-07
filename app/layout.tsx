import "./globals.css";

export const metadata = {
  title: "Shubham Turalkar | Cloud Engineer & FinOps Specialist",
  description:
    "AWS Cloud Engineer and FinOps Specialist with expertise in Cost Optimization, Governance, Terraform, and Cloud Architecture."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}