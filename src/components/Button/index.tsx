type ButtonProps = {
	title: string
	onClick: () => void
}

const Button = ({ title, onClick }: ButtonProps) => {
	return (
		<button
			type='button'
			onClick={onClick}
			className='h-10 px-6 bg-white shadow-md rounded-md'
		>
			{title}
		</button>
	)
}

export default Button
