import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import moment from "moment";
import { Typography } from "@mui/material";
import { Fork } from "../../utils/types";

type ForkItemPropTypes = {
  fork: Fork;
};

const ForkItem = ({ fork }: ForkItemPropTypes) => {
  const {
    created_at,
    url,
    user: { avatar_url, name, login },
  } = fork;
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={avatar_url} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Stack direction="row" alignContent="center" columnGap={3}>
              <Typography variant="body1">Username: {name || login}</Typography>
              <Typography variant="body1">
                Created At: {`${moment(created_at).format("DD-MM-YYYY")}`}
              </Typography>
            </Stack>
          }
          secondary={
            <Button href={url} title={url} target="_blank">
              Fork Link
            </Button>
          }
        />
      </ListItem>
    </List>
  );
};

export default ForkItem;
