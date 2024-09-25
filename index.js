const extractGoogleDriveId = (driveLink) => {
  const patterns = [
    /\/d\/([a-zA-Z0-9_-]{25,})/,
    /id=([a-zA-Z0-9_-]{25,})/,
    /\/file\/d\/([a-zA-Z0-9_-]{25,})/,
  ];

  for (let pattern of patterns) {
    const match = driveLink.match(pattern);
    if (match) {
      return match[1];
    }
  }

  return null;
};

export default extractGoogleDriveId;
