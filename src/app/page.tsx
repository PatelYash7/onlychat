'use client'
import { AuroraBackground } from '@/components/ui/aurora-background';
import { useSession } from 'next-auth/react';

export default function Home() {
	const session = useSession();
	return (
		<>
				{session.data?.user.id} 
				{session.data?.user.name}
				{session.data?.user.number}
		</>
	);
}
