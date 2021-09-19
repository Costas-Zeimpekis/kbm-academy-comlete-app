import React from 'react';

const ListGroup = ({ label, items, selectedItem, onItemSelect }) => {
	return (
		<div>
			<p>{label}</p>
			<ul>
				{items.map((item) => (
					<li
						key={item.name}
						className={item.value === selectedItem ? 'active' : 'page'}
						onClick={() => onItemSelect(item.value)}
					>
						{item.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ListGroup;
