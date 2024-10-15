import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";


export interface Blog  {
        "content" : string,  
        "title" : string,
        "author" : {
            "name" : string
        }
        "id" : number
}
export const useBlog = ({id} : {id: string}) => 
{
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        setBlog(response.data.blog);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    } ;  

    fetchBlogs();
  }, [id]); // Added dependency array to ensure useEffect runs only once
    return  {
      loading , 
      blog , 
    }
}
export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        setBlogs(response.data.blogs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []); // Added dependency array to ensure useEffect runs only once

  return {
    loading,
    blogs,
  };
};