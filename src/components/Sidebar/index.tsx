import { useState } from 'react'

import Button from 'components/Button'
import { AnimatePresence, motion } from 'framer-motion'

const Sidebar = () => {
	const [showSidebar, setShowSidebar] = useState(false)

	const toggleSidebar = () => {
		setShowSidebar(!showSidebar)
	}

	const hideSidebar = () => {
		setShowSidebar(false)
	}

	return (
		<section className='flex flex-col flex-1 justify-center items-center min-h-screen'>
			<Button title='Show sidebar' onClick={toggleSidebar} />

			{/* Using AnimatePresence  allows components to animate out when they're removed from the React tree. Removing this will make the sidebar abtuptly disapper when closed. */}
			<AnimatePresence>
				{showSidebar && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 0.5 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							onClick={hideSidebar}
							className='bg-black opacity-50 fixed top-0 left-0 h-full w-full'
						/>

						<motion.div
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ duration: 0.4 }}
							className='bg-white shadow-lg fixed top-0 right-0 w-full max-w-sm h-full text-white p-6 flex flex-col'
						>
							<button
								type='button'
								onClick={hideSidebar}
								className='bg-black text-white h-8 w-8 block mb-2 rounded-full self-end'
							>
								&times;
							</button>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</section>
	)
}

export default Sidebar
