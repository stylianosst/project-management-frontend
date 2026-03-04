import api from "../axios";

export const getTasks = async (token) => {
  try {
    const response = await api.get("/tasks", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Failed to fetch tasks:", error);
    throw error;
  }
};

export const createTask = async (taskData, token) => {
  try {
    const response = await api.post(
      "/tasks",
      {
        project_id: taskData.project_id,
        title: taskData.title,
        description: taskData.description,
        due_date: taskData.due_date,
        status: "pending",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response;
  } catch (error) {
    console.error("Failed to create task:", error);
    throw error;
  }
};

export const deleteTask = async (id, token) => {
  try {
    const response = await api.delete(`/tasks/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Failed to delete task:", error);
    throw error;
  }
};

export const updateTask = async (taskData, token) => {
  try {
    await api.put(
      `/tasks/${taskData.id}`,
      {
        project_id: taskData.projectId,
        title: taskData.title,
        description: taskData.description,
        due_date: taskData.dueDate,
        status: taskData.status,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  } catch (error) {
    console.error("Failed to update task:", error);
    throw error;
  }
};
