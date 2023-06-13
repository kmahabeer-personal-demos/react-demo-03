'use client';
import { useRouter } from 'next/navigation';

import { ShowMoreProps } from '@/types';
import { updateSearchParams } from '@/utils';
import { Button } from '@/components';

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
	const router = useRouter();

	const handleNavigation = () => {
		// Calculate the new limit based on the page number and navigation type
		const newLimit = (pageNumber + 1) * 10;
		setLimit(newLimit);
	};

	return (
		<div className='w-full flex-center gap-5 mt-10'>
			{!isNext && (
				<Button
					btnType='button'
					title='Show More'
					containerStyles='bg-primary-blue rounded-full text-white'
					handleClick={handleNavigation}
				/>
			)}
		</div>
	);
};

export default ShowMore;
