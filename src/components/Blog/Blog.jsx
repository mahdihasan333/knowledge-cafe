import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmarks}) => {
    const { cover, title, author, author_img, posted_date, reading_time, hashtags } = blog;
    console.log(blog)
    return (
        <div className='mb-20'>
            <img className='w-full mb-8 rounded-xl' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className="text-2xl">{author}</h3>
                        <p className="text-sm">{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmarks()} className='ml-2 text-2xl text-red-600'><FaBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default Blog;