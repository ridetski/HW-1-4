type InputPropsType = {
	currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText: (event: string) => void // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.value)
	};

	return (
	    <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} />
	);
};
