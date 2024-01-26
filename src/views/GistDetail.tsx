import Typography from "@mui/material/Typography";

import Stack from "@mui/material/Stack";
import { useSnackbar } from "notistack";

import Layout from "../components/common/Layout";

import { useGistDetailQuery } from "../hooks/useGists";
import { useParams } from "react-router-dom";
import GistDetailsCard from "../components/GistDetailsCard/GistDetailsCard";

const GistDetail = () => {
  const { enqueueSnackbar } = useSnackbar();
  const params = useParams();

  const { isLoading: isLoading, data: gistDetails } = useGistDetailQuery({
    gist_id: params?.gist_id,
    onError: () =>
      enqueueSnackbar("Error ocurred while fetching gist detail", {
        variant: "error",
      }),
  });

  return (
    <Layout>
      <Stack direction="column" rowGap={4} alignItems="center">
        <Typography variant="h3">Gist Details</Typography>
        {isLoading ? (
          "Fetching details...."
        ) : (
          <GistDetailsCard gist={gistDetails} />
        )}
      </Stack>
    </Layout>
  );
};

export default GistDetail;
