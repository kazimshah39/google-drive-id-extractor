# `google-drive-id-extractor`

This npm package extracts the Google Drive file ID from a given Google Drive link. It is a lightweight and simple tool for developers who need to programmatically retrieve the file ID for further processing.

## Features

- Extracts file ID from any Google Drive link format
- Simple and easy-to-use API
- Supports different Google Drive URL formats (e.g., shareable links, direct links, etc.)

## Installation

You can install the package using npm:

```bash
npm install google-drive-id-extractor
```

Or using yarn:

```bash
yarn add google-drive-id-extractor
```

## Usage

To extract the Google Drive file ID from a link, you can use the following code:

```javascript
import extractGoogleDriveId from "google-drive-id-extractor";

// Example Google Drive link
const link =
  "https://drive.google.com/file/d/1A2B3C4D5E6F7G8H9/view?usp=sharing";

// Extract the file ID
const fileId = extractGoogleDriveId(link);

console.log(fileId); // Output: 1A2B3C4D5E6F7G8H9
```

The `extractGoogleDriveId` function works with various formats of Google Drive links, such as:

- `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`
- `https://drive.google.com/open?id=FILE_ID`
- `https://drive.google.com/uc?id=FILE_ID&export=download`

## API

### `extractGoogleDriveId(url)`

**Parameters:**

- `url` (`string`): The Google Drive URL from which you want to extract the file ID.

**Returns:**

- `string`: The extracted file ID from the provided Google Drive link.

### Example

```javascript
import extractGoogleDriveId from "google-drive-id-extractor";

const fileId = extractGoogleDriveId(
  "https://drive.google.com/file/d/1A2B3C4D5E6F7G8H9/view"
);
console.log(fileId); // Output: 1A2B3C4D5E6F7G8H9
```

## License

This package is offered by [ToolsForFree.com](https://toolsforfree.com/). Visit the website for more free developer tools.

### More Tools from ToolsForFree.com

One of the other useful tools offered by [ToolsForFree.com](https://toolsforfree.com/) is the [Google Drive Direct Link Generator](https://toolsforfree.com/google-drive-direct-link-generator). This tool allows you to convert a Google Drive shareable link into a direct download link. It simplifies the process of sharing files by creating a link that triggers an automatic download instead of opening the Google Drive interface.

## Contributions

Feel free to contribute to this package by submitting issues or making pull requests. We welcome feedback and improvements!

---

Happy coding!
