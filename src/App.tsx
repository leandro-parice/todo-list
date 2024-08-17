import {
	CheckCircle,
	Circle,
	ClipboardText,
	PlusCircle,
	Trash,
} from '@phosphor-icons/react';
import ToDoLogo from './assets/todo.svg';
import { ChangeEvent, FormEvent, useState, MouseEvent } from 'react';

interface Task {
	id: number;
	text: string;
	isChecked: boolean;
}

function App() {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [newTask, setNewTask] = useState('');

	function handleCreateNewTask(event: FormEvent) {
		event.preventDefault();
		const tempNewTask: Task = {
			id: Date.now(),
			text: newTask,
			isChecked: false,
		};
		const updatedTasks = [...tasks, tempNewTask];
		const sortedTasks = sortTasks(updatedTasks);
		setTasks(sortedTasks);
		setNewTask('');
	}

	function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
		setNewTask(event.target.value);
	}

	function handleClickTask(id: number) {
		const updatedTasks = tasks.map((task) => {
			if (task.id === id) {
				return { ...task, isChecked: !task.isChecked };
			}
			return task;
		});

		const sortedTasks = sortTasks(updatedTasks);
		setTasks(sortedTasks);
	}

	function handleDeleteTask(id: number, event: MouseEvent) {
		event.stopPropagation();
		const newTasks = tasks.filter((task) => task.id !== id);
		setTasks(newTasks);
	}

	function sortTasks(tasks: Task[]): Task[] {
		return tasks.sort((a, b) => {
			if (a.isChecked === b.isChecked) return 0;
			return a.isChecked ? 1 : -1;
		});
	}

	function countCheckedTasks(): number {
		return tasks.filter((task) => task.isChecked).length;
	}

	return (
		<>
			<header>
				<img src={ToDoLogo} />
			</header>
			<div className="content">
				<form onSubmit={handleCreateNewTask}>
					<input
						type="text"
						value={newTask}
						onChange={handleNewTaskChange}
						placeholder="Adicione uma nova tarefa"
						required
					/>
					<button type="submit" disabled={newTask.length === 0}>
						Criar <PlusCircle size={18} />
					</button>
				</form>
				<div className="report">
					<div className="created">
						Tarefas criadas <span>{tasks.length}</span>
					</div>
					<div className="checked">
						Concluídas{' '}
						<span>
							{countCheckedTasks()} de {tasks.length}
						</span>
					</div>
				</div>
				<ul>
					{tasks.map((task) => {
						return (
							<li
								key={task.id}
								className={task.isChecked ? 'checked' : ''}
								onClick={() => handleClickTask(task.id)}
							>
								<div className="icon">
									{task.isChecked ? (
										<CheckCircle weight="fill" size={20} color="#5E60CE" />
									) : (
										<Circle size={20} color="#4EA8DE" />
									)}
								</div>
								<div className="text">{task.text}</div>
								<button onClick={(event) => handleDeleteTask(task.id, event)}>
									<Trash size={16} />
								</button>
							</li>
						);
					})}
				</ul>
				{tasks.length === 0 && (
					<div className="message">
						<div className="icon">
							<ClipboardText color="#808080" size={60} weight="thin" />
						</div>
						<p>
							<strong>Você ainda não tem tarefas cadastradas</strong>
							<br />
							Crie tarefas e organize seus itens a fazer
						</p>
					</div>
				)}
			</div>
		</>
	);
}

export default App;
