import React from 'react';

// Sample data for tourism blogs
const tourismBlogs = [
	{
		id: 1,
		title: 'Exploring the Serene Beaches of Bali',
		content: 'Bali, known as the Island of the Gods, offers breathtaking beaches with crystal-clear waters and stunning sunsets. From the popular Kuta Beach to the tranquil Nusa Dua, discover the beauty of Bali’s coastline.',
		image: 'https://via.placeholder.com/300',
	},
	{
		id: 2,
		title: 'A Journey Through the Spectacular Landscapes of Switzerland',
		content: 'Switzerland, famous for its picturesque landscapes, boasts majestic mountains, serene lakes, and charming villages. Experience the beauty of the Swiss Alps, explore the scenic Lake Geneva, and visit iconic cities like Zurich and Lucerne.',
		image: 'https://via.placeholder.com/300',
	},
	{
		id: 3,
		title: 'Discovering the Rich Cultural Heritage of Rome',
		content: 'Rome, the Eternal City, is a treasure trove of history and culture. Explore ancient ruins like the Colosseum and the Roman Forum, marvel at iconic landmarks such as the Vatican City and the Pantheon, and indulge in delicious Italian cuisine.',
		image: 'https://via.placeholder.com/300',
	},
];

const TourismBlogComponent = () => {
	return (
		<div>
			<h1>Explore the World of Tourism</h1>
			<div className="blog-list">
				{tourismBlogs.map(blog => (
					<div key={blog.id} className="blog-item">
						<img src={blog.image} alt={blog.title} />
						<div>
							<h2>{blog.title}</h2>
							<p>{blog.content}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TourismBlogComponent;
