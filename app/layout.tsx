import { Navbar } from '@/components';
import './globals.css';

export const metadata = {
	title: 'Car Buying Place',
	description: 'Find a good car',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={'relative'}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
