import axios from "axios";

export async function getAllCommits(branchName: string) {
  const response = await axios.get(
    "http://localhost:5000/commit/" + branchName
  );

  return response.data;
}
