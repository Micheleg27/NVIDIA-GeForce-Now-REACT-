import { useState } from 'react';

function useShow() {
	const [ show, setShow ] = useState(false);

	return { setShow, show };
}

export default useShow;
