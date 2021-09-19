import React from 'react';
const Home = () => {
	return (
		<div className="home">
			<h2 style={{ textAlign: 'center', marginBottom: 20 }}>
				Welcome to Register Students Page
			</h2>
			<section style={{ width: '100%', height: '70vh' }}>
				<p
					style={{
						fontSize: 30,
						border: '2px solid black',
						marginTop: 20,
						margin: 'auto',
						width: '50vw',
					}}
				>
					The Academy’s Upper School celebrates the possibilities of language
					through the study of literature in both directed and creative writing
					assignments and in seminar-style classrooms, which encourage
					thoughtful discourse and debate. Mathematics teaches a sense of logic
					and abstract, symbolic expression. The study of physical and
					biological sciences develops an appreciation for the natural world
					while understanding the complexity of living organisms and the
					foundations of chemistry. Each student’s outlook on the contemporary
					world community is enhanced through a study of world history. The
					arts, humanities, and foreign language build an appreciation for the
					global, human community and the possibilities of expression beyond
					traditional academic boundaries.
				</p>
			</section>
		</div>
	);
};

export default Home;
