function Button(props: { btnText: string; onClick?: any }) {
	const { btnText, onClick } = props;
	
  function handleClick() {
		onClick();
	}
  
	if (onClick) {
		return <button onClick={handleClick}>{btnText}</button>;
	} else {
		return <button>{btnText}</button>;
	}
}

export default Button;
