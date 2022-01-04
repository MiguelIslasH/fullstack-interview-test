class Commit {
  message: string;
  timestamp: string;
  filesChanged: number;
  author: string;

  constructor(
    message: string,
    timestamp: string,
    filesChanged: number,
    author: string
  ) {
    this.message = message;
    this.timestamp = timestamp;
    this.filesChanged = filesChanged;
    this.author = author;
  }
}
