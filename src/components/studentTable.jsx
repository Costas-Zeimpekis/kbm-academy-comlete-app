import React from 'react';
const StudentTable = ({ paginateStudents, onSort, sortColumn }) => {
	const raiseSort = (path) => {
		const sortColumns = { ...sortColumn };
		if (sortColumns.path === path)
			sortColumns.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
		else {
			sortColumns.path = path;
			sortColumns.order = 'asc';
		}
		onSort(sortColumns);
	};

	return (
		<div className="customTable">
			<table style={{ display: 'block' }}>
				<thead className="table-header">
					<tr>
						<th onClick={() => raiseSort('firstName')}>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Course</th>
						<th>City</th>
						<th onClick={() => raiseSort('address')}>Address</th>
						<th>Gender</th>
					</tr>
				</thead>
				<tbody>
					{paginateStudents.map((student) => (
						<tr key={student.id}>
							<td>{student.firstName}</td>
							<td>{student.lastName}</td>
							<td>{student.email}</td>
							<td>{student.course}</td>
							<td>{student.city}</td>
							<td>{student.address}</td>
							<td>{student.gender}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
	// }
};

export default StudentTable;
