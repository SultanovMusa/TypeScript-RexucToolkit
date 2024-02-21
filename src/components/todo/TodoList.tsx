import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import {
	addTodo,
	deleteOl,
	deleteTodo,
	editTodo,
} from "../../redux/tools/todoSlice";
import { useAppSelector } from "../../redux/store";
import scss from "./TodoList.module.scss";
import { AiFillCheckSquare } from "react-icons/ai";
import { BiSolidCommentEdit } from "react-icons/bi";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { CiCircleRemove } from "react-icons/ci";

const TodoList: FC = () => {
	// ! 1 Input value
	const [nameInput, setNameInput] = useState("");
	const [ageInput, setAgeInput] = useState("");
	const [imgInput, setImgInput] = useState("");

	// ! Is EDIT
	const [isEdit, setIsEdit] = useState<number | null>(null);

	// ! 2 Input value
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [img, setImg] = useState("");

	const todo = useAppSelector((state) => state.todoReducer.data);
	const dispatch = useDispatch();
	// !ADD BUTTON
	const addTodoItem = () => {
		if (nameInput === "" || ageInput === "" || imgInput === "") {
			alert("Кандай ука😘");
		} else {
			dispatch(addTodo({ name: nameInput, age: ageInput, img: imgInput }));
		}
		setNameInput("");
		setAgeInput("");
		setImgInput("");
	};
	// !DELETE OL Button
	const deleteOlBtn = () => {
		dispatch(deleteOl());
	};
	// ! DELETE Button
	const deleteButton = (id: number) => {
		dispatch(deleteTodo(id));
	};
	// ! isEdit Button
	const isEditButton = (id: number) => {
		const itemToEdit = todo.find((item) => item.id === id);
		if (itemToEdit) {
			setIsEdit(id);
			setName(itemToEdit.name);
			setAge(itemToEdit.age.toString());
			setImg(itemToEdit.img);
		}
	};
	// ! Save Button
	const saveEdit = (id: number) => {
		dispatch(editTodo({ id, name, age: parseInt(age), img }));
		setIsEdit(null);
		setNameInput("");
		setAgeInput("");
		setImgInput("");
	};
	// ! Cancel Button
	const cancelEdit = () => {
		setIsEdit(null);
		setNameInput("");
		setAgeInput("");
		setImgInput("");
	};
	// ! Checkbox
	const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>(
		{}
	);
	const toggleCheckbox = (id: number) => {
		setCheckedItems({ ...checkedItems, [id]: !checkedItems[id] });
	};

	return (
		<>
			{/* //////////////////////////////////////////////////////////////////////////////////////////////////////! */}
			<div className={scss.container}>
				<div className={scss.content}>
					<input
						className={scss.inputs}
						type="text"
						value={nameInput}
						onChange={(e) => setNameInput(e.target.value)}
						placeholder="Text"
					/>
					<input
						className={scss.inputs}
						type="date"
						value={ageInput}
						onChange={(e) => setAgeInput(e.target.value)}
						placeholder="Age"
					/>
					<input
						className={scss.inputs}
						type="url"
						value={imgInput}
						onChange={(e) => setImgInput(e.target.value)}
						placeholder="img"
					/>
					<button className={scss.btn} onClick={addTodoItem}>
						Add
					</button>
					<button className={scss.btn} onClick={deleteOlBtn}>
						Delete All
					</button>
				</div>

				{todo.map((item) => (
					////////////////////////////////////////////////////////////////////////////////////////////////////////!
					<div key={item.id}>
						{isEdit === item.id ? (
							<div className={scss.Mufa}>
								<div className={scss.Musa}>
									<input
										className={scss.inputs}
										type="text"
										value={name}
										onChange={(e) => setName(e.target.value)}
										placeholder="Textm"
									/>
									<input
										className={scss.inputs}
										type="date"
										value={age}
										onChange={(e) => setAge(e.target.value)}
										placeholder="Agem"
									/>
									<input
										className={scss.inputs}
										type="url"
										value={img}
										onChange={(e) => setImg(e.target.value)}
										placeholder="imgm"
									/>
								</div>
								<span onClick={() => saveEdit(item.id)}>
									<AiFillCheckSquare />
								</span>
								<span onClick={cancelEdit}>
									<CiCircleRemove />
								</span>
							</div>
						) : (
							//////////////////////////////////////////////////////////////////////////////////////////////////////!
							<div className={scss.car}>
								<div className={scss.cars}>
									<input
										className={scss.cek}
										type="checkbox"
										onChange={() => toggleCheckbox(item.id)}
									/>
									<h1
										style={{
											textDecoration: checkedItems[item.id]
												? "line-through"
												: "none",
										}}>
										{item.name}
									</h1>
									<h3
										style={{
											textDecoration: checkedItems[item.id]
												? "line-through"
												: "none",
										}}>
										{item.age}
									</h3>
									<img
										style={{
											filter: checkedItems[item.id]
												? "grayscale(100%)"
												: "none",
										}}
										src={item.img}
										alt={item.name}
									/>
								</div>
								<span
									className={scss.icon}
									onClick={() => deleteButton(item.id)}>
									<HiArchiveBoxXMark />
								</span>
								<span
									className={scss.icons}
									onClick={() => isEditButton(item.id)}>
									<BiSolidCommentEdit />
								</span>
							</div>
						)}
					</div>
				))}
			</div>
		</>
	);
};

export default TodoList;
