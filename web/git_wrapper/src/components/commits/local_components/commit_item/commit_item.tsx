interface CommitItemProps {
  commitId: string;
  message: string;
  timestamp: string;
  authorName: string;
  authorEmail: string;
}

function CommitItem(props: CommitItemProps) {
  return (
    <tr>
      <td>{props.commitId}</td>
      <td>{props.message}</td>
      <td>{props.timestamp}</td>
      <td>{props.authorName}</td>
      <td>{props.authorEmail}</td>
    </tr>
  );
}

export default CommitItem;
