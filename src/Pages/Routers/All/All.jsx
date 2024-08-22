import React from 'react'


const Home = React.lazy(()=> import('../../Home/Home'))
const About = React.lazy(()=> import('../../About/About'))
const Contact = React.lazy(()=> import('../../Contact/Contact'))
const Blogs = React.lazy(()=> import('../../Blog/Blogs'))
const Projects = React.lazy(()=> import('../../Projects/Projects'))
const GetImageThumbnail = React.lazy(()=> import('../../GetImageUrl/GetImageUrl'))
const AddProject = React.lazy(()=> import('../../AddProject/AddProject'))
const WriteBlog = React.lazy(()=> import('../../WriteBlog/WriteBlog'))
const ImageFolder = React.lazy(()=> import('../../ListImages/ListImages'))
const ProjectDisplay = React.lazy(()=> import('../../ProjectDisplay/ProjectDisplay'))
const BlogView = React.lazy(()=> import('../../Blog/BlogView'))



export {
    Home,
    About,
    Contact,
    Blogs,
    Projects,
    GetImageThumbnail,
    AddProject,
    WriteBlog,
    ImageFolder,
    ProjectDisplay,
    BlogView,
}
