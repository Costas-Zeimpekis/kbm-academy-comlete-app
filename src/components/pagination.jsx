import React from 'react';
import _ from 'lodash';
// import './pagination2.css';

const Pagination = (props) => {
	const { itemsCount, pageSize, currentPage, onPageChange } = props;

	const pagesCount = Math.ceil(itemsCount / pageSize);
	if (pagesCount === 1) return null;
	const pages = _.range(1, pagesCount + 1);

	const value = pageSize;

	return (
		<div>
			<nav>
				<ul>
					{pages.map((page) => (
						<li
							key={page}
							className={page === currentPage ? 'page-active' : 'page'}
						>
							<a onClick={() => onPageChange(page)}>{page}</a>
						</li>
					))}
				</ul>
			</nav>

			{/* <button onClick={btn}>20</button> */}
		</div>
	);
};

export default Pagination;
