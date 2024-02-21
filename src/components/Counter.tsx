import { FC } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/store";
import {
	hadleAdd,
	hadleMinus,
	handleAddByAmount,
} from "../redux/tools/counterSlice";

const Counter: FC = () => {
	const count = useAppSelector((state) => state.counterReducer.value);
	console.log(count);
	const dispatch = useDispatch();

	const handelIncrement = () => {
		dispatch(hadleAdd());
	};
	const handelDecrement = () => {
		dispatch(hadleMinus());
	};

	const handleIcrementByAmount = () => {
		dispatch(handleAddByAmount(10));
	};
	return (
		<>
			<button onClick={handelIncrement}>+</button>
			<span>{count}</span>
			<button onClick={handelDecrement}>-</button>
			<button onClick={handleIcrementByAmount}>ByAmout</button>
		</>
	);
};

export default Counter;
