import { ClipboardText } from '@phosphor-icons/react';

export function EmptyMessage() {
	return (
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
	);
}
