import axios from "axios";

export async function getAllBranches() {
  const response = await axios.get("http://localhost:5000/branch/");
  if (response.status === 200) {
    console.log(response.data);
    return response.data;
  }
  return response.data;
}
