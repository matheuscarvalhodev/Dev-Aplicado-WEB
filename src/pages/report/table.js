import { Table } from "reactstrap";

export function TableRelatorio(props) {
	const filterTableLines = () => {
		const table = [];

		Object.keys(props.table.oc).forEach((key) => {
			const line = props.table.oc[key];
			const filter = props.filters;

			Object.keys(filter).forEach((key) => {
				if (filter[key]) {
					const hasSome = line.some(
						(item) =>
							String(item).toLowerCase().trim() ===
							filter[key].toLowerCase().trim()
					);

					if (hasSome) {
						table.push(line);
					}
				}
			});
		});
		return table;
	};

	return (
		<Table striped>
			<thead>
				<tr>
					{props.table.titles.map((item, index) => {
						return <th>{item}</th>;
					})}
				</tr>
			</thead>

			<tbody>
				{filterTableLines().map((item) => (
					<tr>
						{item.map((item2) => (
							<td>{item2}</td>
						))}
					</tr>
				))}
			</tbody>
		</Table>
	);
}