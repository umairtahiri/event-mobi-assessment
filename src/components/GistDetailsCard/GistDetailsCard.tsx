import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { findOldestForks } from "../../utils/helperFunctions";
import ForkItem from "./ForkItem";
import FileItem from "./FileItem";
import { Gist } from "../../utils/types";

type GistDetailsCardPropTypes = {
  gist: Gist;
};

const GistDetailsCard = ({ gist }: GistDetailsCardPropTypes) => {
  const { forks, files } = gist;
  const forksCount = forks?.length;
  const oldestThreeForks = findOldestForks(forks);
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Gist Forked:</Typography>
        <Typography variant="body1">
          This gist was forked {forksCount}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6">Oldest Forks:</Typography>
        {oldestThreeForks.map((fork) => (
          <ForkItem fork={fork} />
        ))}
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6">Files Info:</Typography>
        {Object.values(files).map((file) => (
          <FileItem file={file} />
        ))}
      </CardContent>
    </Card>
  );
};

export default GistDetailsCard;
