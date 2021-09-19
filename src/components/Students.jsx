import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from './pagination';
import { paginate } from './utils/paginate';
import ListGroup from './ListGroup';
import _ from 'lodash';
import StudentTable from './studentTable';
import SearchBox from './searchBox';

const Students = () => {
	const students = useSelector((state) => state);

	const genders = [
		{ name: 'All Genders', value: 'All Genders' },
		{ name: 'Male', value: 'Male' },
		{ name: 'Female', value: 'Female' },
	];
	const courses = [
		{ name: 'All Courses', value: 'All Courses' },
		{ name: 'react', value: 'react' },
		{ name: 'angular', value: 'angular' },
		{ name: 'vue', value: 'vue' },
	];

	const [pageSize, setPageSize] = useState(20);
	const [currentPage, setCurrentPage] = useState(1);
	const [selectCourse, setSelectCourse] = useState(courses[0].value);
	const [selectGender, setSelectGender] = useState(genders[0].value);
	const [sortColumn, setSortColumn] = useState({
		path: 'title',
		order: 'asc',
	});
	const [searchQuery, setSearchQuery] = useState('');

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	const handleSelectGender = (gender) => {
		setSelectGender(gender);
		// setCurrentPage(1);
	};

	const handleCourseSelect = (course) => {
		setSelectCourse(course);
		// setCurrentPage(1);
	};

	const onSort = (sortColumn) => {
		setSortColumn(sortColumn);
	};

	const handleSearch = (query) => {
		setSearchQuery(query);
		setCurrentPage(1);
	};

	let filtered = searchQuery
		? students.filter((s) =>
				s.firstName.toLowerCase().startsWith(searchQuery.toLowerCase())
		  )
		: selectGender === genders[0].value && selectCourse === courses[0].value
		? students
		: selectGender !== genders[0].value && selectCourse === courses[0].value
		? students.filter((student) => student.gender === selectGender)
		: selectGender === genders[0].value && selectCourse !== courses[0].value
		? students.filter((student) => student.course === selectCourse)
		: students.filter(
				(student) =>
					student.gender === selectGender && student.course === selectCourse
		  );

	const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

	const paginateStudents = paginate(sorted, currentPage, pageSize);

	return (
		<div className="students">
			<SearchBox value={searchQuery} onChange={handleSearch} />
			<ListGroup
				items={courses}
				selectedItem={selectCourse}
				onItemSelect={handleCourseSelect}
			/>
			<ListGroup
				items={genders}
				selectedItem={selectGender}
				onItemSelect={handleSelectGender}
			/>

			<StudentTable
				paginateStudents={paginateStudents}
				sortColumn={sortColumn}
				onSort={onSort}
			/>

			<Pagination
				itemsCount={sorted.length}
				pageSize={pageSize}
				currentPage={currentPage}
				onPageChange={handlePageChange}
			/>
		</div>
	);
};

export default Students;
