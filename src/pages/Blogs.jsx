import React from 'react';
import RecentBlogs from '../components/Blogs/RecentBlogs';
import AllBlogs from '../components/Blogs/AllBlogs';

const Blogs = () => {
  return (
    <div className=" py-20">
      <RecentBlogs />
      <AllBlogs />
    </div>
  );
};

export default Blogs;
