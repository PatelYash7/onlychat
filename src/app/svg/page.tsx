'use client';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { useSession } from 'next-auth/react';
import {
	LegacyRef,
	MutableRefObject,
	RefObject,
	useEffect,
	useRef,
} from 'react';

export default function Home() {
	const pathRef = useRef<SVGPathElement | null>(null);
	const line1Ref = useRef<SVGLineElement | null>(null);
	const line2Ref = useRef<SVGLineElement | null>(null);
	const line3Ref = useRef<SVGLineElement | null>(null);
	const line4Ref = useRef<SVGLineElement | null>(null);
	const line5Ref = useRef<SVGLineElement | null>(null);
	const line6Ref = useRef<SVGLineElement | null>(null);
	const line7Ref = useRef<SVGLineElement | null>(null);
	const line8Ref = useRef<SVGLineElement | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			let scrollPosition = window.scrollY;
			const maxScroll = document.body.scrollHeight - window.innerHeight;
			// Calculate progress as a percentage

			if (scrollPosition > 70) {
				scrollPosition = window.scrollY - 150;
				const progress = Number(
					Math.min(scrollPosition / maxScroll, 1).toFixed(4),
				);

				// Animate the path stroke
				if (pathRef.current) {
					const path = pathRef.current;
					// @ts-ignore
					const pathLength = path.getTotalLength();
					// @ts-ignore
					path.style.strokeDasharray = pathLength;
					path.style.stroke = '#ff39';
					// @ts-ignore
					path.style.strokeDashoffset = pathLength * (1 - progress);
				}
				const updateLineColor = (
					lineRef: RefObject<SVGLineElement>,
					condition: boolean,
				) => {
					if (lineRef.current) {
						lineRef.current.style.stroke = condition ? 'yellow' : 'white';
					}
				};

				updateLineColor(line1Ref, progress > 0 && progress < 0.11);
				updateLineColor(line2Ref, progress > 0.11 && progress < 0.16);
				updateLineColor(line3Ref, progress > 0.18 && progress < 0.32);
				updateLineColor(line4Ref, progress > 0.32 && progress < 0.42);
				updateLineColor(line5Ref, progress > 0.43 && progress < 0.52);
				updateLineColor(line6Ref, progress > 0.52 && progress < 0.63);
				updateLineColor(line7Ref, progress > 0.66 && progress < 0.8);
				updateLineColor(line8Ref, progress > 0.81 && progress < 0.95);
			} else {
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<>
			<div className=' bg-black text-white min-h-screen'>
				<div className='flex bg-black  justify-center min-h-[100vh]'>
					<div className='mt-44 text-center font-[500]'>
						<div className='text-6xl '>Unlock all the potential</div>
						<div className='text-6xl'>your life holds</div>
					</div>
				</div>
				<div className='w-full bg-black pb-80 mb-80'>
					<div className='flex justify-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='897'
							height='1098'
							viewBox='0 0 897 1098'
							fill='none'
						>
							<path
								ref={pathRef}
								d='M4.39754 2C752.749 56.5962 1167.95 174.571 672.135 298.121C176.315 421.672 -15.5349 519.712 4.39753 602.745C24.33 685.779 398.811 659.081 770.053 733.612C1141.3 808.142 566.842 1006.84 508.171 1025.42C449.5 1044 398 1053 '
								stroke='#FFD4'
								strokeWidth='3'
							/>
							<path
								d='M4.39754 2C752.749 56.5962 1167.95 174.571 672.135 298.121C176.315 421.672 -15.5349 519.712 4.39753 602.745C24.33 685.779 398.811 659.081 770.053 733.612C1141.3 808.142 566.842 1006.84 508.171 1025.42C449.5 1044 398 1053 '
								stroke='#FFD4'
								strokeWidth='1'
							/>
							{/* <line ref={line1Ref} x1='6' y1='150' x2='5' y2='46' stroke='red'/> */}
							<line
								x1='5.5'
								y1='1'
								x2='5.5'
								y2='151'
								strokeWidth={0.2}
								stroke='white'
								ref={line1Ref}
							/>
							<line
								ref={line2Ref}
								strokeWidth={0.2}
								x1='439.5'
								y1='196'
								x2='439.5'
								y2='46'
								stroke='white'
							/>
							<line
								x1='888.5'
								strokeWidth={0.2}
								ref={line3Ref}
								y1='338'
								x2='888.5'
								y2='188'
								stroke='white'
							/>
							<line
								x1='576.5'
								strokeWidth={0.2}
								y1='472'
								x2='576.5'
								ref={line4Ref}
								y2='322'
								stroke='white'
							/>
							<line
								x1='308.5'
								strokeWidth={0.2}
								y1='551'
								ref={line5Ref}
								x2='308.5'
								y2='401'
								stroke='white'
							/>
							<path
								d='M1 741L2 591'
								strokeWidth={0.2}
								stroke='red'
								ref={line6Ref}
							/>
							<line
								x1='439.5'
								strokeWidth={0.2}
								y1='839'
								x2='439.5'
								y2='689'
								ref={line7Ref}
								stroke='white'
							/>
							<path
								strokeWidth={0.2}
								d='M896.236 962.983L894 813'
								stroke='red'
								ref={line8Ref}
							/>
						</svg>
					</div>
				</div>
			</div>
		</>
	);
}
