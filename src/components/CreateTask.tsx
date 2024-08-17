import { PlusCircle } from '@phosphor-icons/react';
import { ChangeEvent, FormEvent } from 'react';

interface CreateTaskProps {
	newTask: string;
	onNewTaskChange: (event: ChangeEvent<HTMLInputElement>) => void;
	onCreateNewTask: (event: FormEvent) => void;
}

export function CreateTask({
	newTask,
	onNewTaskChange,
	onCreateNewTask,
}: CreateTaskProps) {
	return (
		<form onSubmit={onCreateNewTask}>
			<input
				type="text"
				value={newTask}
				onChange={onNewTaskChange}
				placeholder="Adicione uma nova tarefa"
				required
			/>
			<button type="submit" disabled={newTask.length === 0}>
				Criar <PlusCircle size={18} />
			</button>
		</form>
	);
}
