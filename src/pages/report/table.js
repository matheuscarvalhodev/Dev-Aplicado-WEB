
import { Table } from 'reactstrap';

export function TableRelatorio(props) {
	return (
		<Table striped>

			<thead>
				<tr>
					{props.table.titles.map((item, index) => {
						return <th>{item}</th>
					})}
				</tr>
			</thead>

			<tbody>
			{Object.keys(props.table.oc).map((keyName, i) => (
				<tr>
					{props.table.oc[keyName].map((item, index) => {
						return <td>{item}</td>
					})}
				</tr>
			))}
			</tbody>
		</Table>
	)
}