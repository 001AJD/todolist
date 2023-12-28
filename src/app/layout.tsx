import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
	title: "Todo app",
	description: "Simple Todo app for daily task checklist",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en-US">
			<body>{children}</body>
		</html>
	);
}
