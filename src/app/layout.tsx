import type { Metadata } from 'next';
import './globals.css';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Providers } from '@/components/providers';

export const metadata: Metadata = {
	title: 'Onlychat',
	description: 'Chat application of modern web.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={cn(
					'min-h-screen bg-background',
					// fontSans.variable,
				)}
			>
				<Providers
					attribute='class'
					defaultTheme='system'
					enableSystem={true}
					disableTransitionOnChange
				>
					{children}
				</Providers>
			</body>
		</html>
	);
}
