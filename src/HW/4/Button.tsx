type ButtonPropsType = {
  callBack: () => void // НУЖНО ПРОТИПИЗИРОВАТЬ
  name: string // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Button = (props: ButtonPropsType) => {
    const callBackHandler = () => {
        console.log('click')
    };

    return (
        <button id={'hw04-button'} onClick={callBackHandler}>
        {props.name}
        </button>
    );
};
