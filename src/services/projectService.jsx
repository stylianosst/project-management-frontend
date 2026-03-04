import api from "../axios";

export const getProjects = async (token) => {
  try {
    const response = await api.get("/projects", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    throw error;
  }
};

export const getProjectDetails = async (id, token) => {
  try {
    const response = await api.get(`/projects/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Failed to fetch project details:", error);
    throw error;
  }
};

export const deleteProject = async (id, token) => {
  try {
    const response = await api.delete(`/projects/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Failed to delete project:", error);
    throw error;
  }
};
