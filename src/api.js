import axios from "axios";

export const API_BASE_URL = "http://127.0.0.1:8000";

export const getImageUrl = (path) => {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  return `${API_BASE_URL}${path}`;
};

export const fetchBanner = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/banners/`);
    const data = res.data;
    return data && data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error("Error fetching banner:", error);
    return null;
  }
};

export const fetchIndustries = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/industries/`);
    return res.data;
  } catch (error) {
    console.error("Error fetching industries:", error);
    return [];
  }
};

export const fetchBlogs = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/blogs/`);
    return res.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

export const fetchServices = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/services/`);
    return res.data;
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
};

export const fetchTechnologies = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/technologies/`);
    return res.data;
  } catch (error) {
    console.error("Error fetching technologies:", error);
    return [];
  }
};
