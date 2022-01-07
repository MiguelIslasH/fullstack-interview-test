import axios from "axios";

export async function getPRs() {
  const response = await axios.get("http://localhost:5000/PR/");

  if (response.status === 200) {
    return response.data.data;
  } else {
    return response.data.error;
  }
}

export async function updatePR(status: string, id: string) {
  const response = await axios.put("http://localhost:5000/PR/", {
    status,
    id,
  });

  if (response.status === 200) {
    return response.data.message;
  } else {
    return response.data.error;
  }
}
