type InputPropsType = {
	currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText: (event: string) => void // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = ({ currentText, setCurrentText, }: InputPropsType) => {
	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentText(event.target.value)
	};

	return (
	    <input id={'hw04-input'} type="text" value={currentText} onChange={onChangeHandler} />
	);
};
