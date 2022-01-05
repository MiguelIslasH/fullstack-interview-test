class PullRequest {
  status: string;
  author: string;
  title: string;
  description: string;
  baseBranch: string;
  compareBranch: string;

  constructor(
    status: string,
    author: string,
    title: string,
    description: string,
    baseBranch: string,
    compareBranch: string
  ) {
    this.status = status;
    this.author = author;
    this.title = title;
    this.description = description;
    this.baseBranch = baseBranch;
    this.compareBranch = compareBranch;
  }
}

export default PullRequest;
