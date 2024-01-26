import { useState } from "react";

import Typography from "@mui/material/Typography";
import { GridColDef, GridRowId } from "@mui/x-data-grid";
import Stack from "@mui/material/Stack";
import { useSnackbar } from "notistack";

import Layout from "../components/common/Layout";
import Search from "../components/Search/Search";

import { useGistsQuery } from "../hooks/useGists";
import DataTable from "../components/DataTable/DataTable";
import { useNavigate } from "react-router-dom";
import { DEFAULT_PAGINATION } from "../utils/Constants";
import {
  getFileLanguages,
  getFilesCount,
  getFirstFileName,
} from "../utils/helperFunctions";
import { CustomGist, Gist } from "../utils/types";

const GistsList = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [searchedUserName, setSearchedUserName] = useState("");
  const [gistsList, setGistsList] = useState<CustomGist[]>([]);
  const [pagination, setPagination] = useState(DEFAULT_PAGINATION);

  const customResMapping = (gists: Gist[] = []) => {
    const list: CustomGist[] = gists.map((gist) => {
      const { id, files = {}, description = "" } = gist;
      const firstFileName = getFirstFileName(files);
      const filesCount = getFilesCount(files);
      const languages = getFileLanguages(files);
      return {
        id,
        description,
        first_file_name: firstFileName,
        file_count: filesCount,
        languages: languages.join(" , "),
      };
    });
    return list;
  };

  const { isLoading, refetch: fetchGists } = useGistsQuery({
    searchStr: searchedUserName,
    pagination,
    onSuccess: (gists: Gist[] = []) => setGistsList(customResMapping(gists)),
    onError: (error) => {
      enqueueSnackbar(
        error?.response?.data?.message ||
          "Error ocurred while fetching gists list",
        {
          variant: "error",
        }
      );
    },
  });

  const onRowClick = (id: GridRowId) => navigate(`/gist/${id}`);

  const onPaginationChange = (page: number, per_page: number) => {
    setPagination({ ...pagination, page, per_page });
    fetchGists();
  };

  const columns: GridColDef[] = [
    {
      field: "first_file_name",
      headerName: "First File Name",
      width: 250,
      disableColumnMenu: true,
    },
    {
      field: "description",
      headerName: "Description",
      width: 300,
      disableColumnMenu: true,
    },
    {
      field: "file_count",
      headerName: "Files Count",
      headerAlign: "center",
      width: 200,
      align: "center",
      disableColumnMenu: true,
    },
    {
      field: "languages",
      headerName: "Languages",
      width: 250,
      disableColumnMenu: true,
    },
  ];

  return (
    <Layout>
      <Stack direction="column" rowGap={4} alignItems="center">
        <Typography variant="h3">Search Gists</Typography>
        <Search
          searchedText={searchedUserName}
          onTextChange={setSearchedUserName}
          onSearch={fetchGists}
        />
        <DataTable
          columns={columns}
          rows={gistsList}
          pagination={pagination}
          loading={isLoading}
          handleRowClick={onRowClick}
          onPaginationChange={onPaginationChange}
        />
      </Stack>
    </Layout>
  );
};

export default GistsList;
