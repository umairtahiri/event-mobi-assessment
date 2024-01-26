import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import { Typography } from "@mui/material";
import { formatFileSize } from "../../utils/helperFunctions";
import { GistFile } from "../../utils/types";

type FileItemPropTypes = {
  file: GistFile;
};

const FileItem = ({ file }: FileItemPropTypes) => {
  const { language, filename, size, type } = file;
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={""} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Stack direction="row" alignContent="center" columnGap={3}>
              <Typography variant="body1">File Name: {filename}</Typography>
              <Typography variant="body1">
                File Size: {formatFileSize(size)}
              </Typography>
            </Stack>
          }
          secondary={
            <Typography variant="body1">
              Language: {language || type}
            </Typography>
          }
        />
      </ListItem>
    </List>
  );
};

export default FileItem;
