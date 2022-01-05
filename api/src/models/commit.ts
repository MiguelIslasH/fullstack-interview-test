class Commit {
  message: string;
  timestamp: string;
  filesChanged: number;
  authorName: string;
  authorEmail: string;

  constructor(
    message: string,
    timestamp: string,
    filesChanged: number,
    authorName: string,
    authorEmail: string
  ) {
    this.message = message;
    this.timestamp = timestamp;
    this.filesChanged = filesChanged;
    this.authorName = authorName;
    this.authorEmail = authorEmail;
  }
}

export default Commit;
