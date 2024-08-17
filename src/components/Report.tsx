interface ReportProps {
	tasksCount: number;
	tasksCheckedCount: number;
}

export function Report({ tasksCount, tasksCheckedCount }: ReportProps) {
	return (
		<div className="report">
			<div className="created">
				Tarefas criadas <span>{tasksCount}</span>
			</div>
			<div className="checked">
				Concluídas{' '}
				<span>
					{tasksCheckedCount} de {tasksCount}
				</span>
			</div>
		</div>
	);
}
