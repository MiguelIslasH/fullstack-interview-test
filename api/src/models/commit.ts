class Commit {
  commitId: string;
  message: string;
  timestamp: string;
  authorName: string;
  authorEmail: string;

  constructor(
    commitId: string,
    message: string,
    timestamp: string,
    authorName: string,
    authorEmail: string
  ) {
    this.message = message;
    this.timestamp = timestamp;
    this.commitId = commitId;
    this.authorName = authorName;
    this.authorEmail = authorEmail;
  }
}

export default Commit;
