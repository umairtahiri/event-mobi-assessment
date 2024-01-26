import { useQuery } from "react-query";
import GithubService from "../services/githubService";
import { APIHookProps } from "./types";
import { DEFAULT_PAGINATION } from "../utils/Constants";

export function useGistsQuery(props: APIHookProps) {
  const {
    onError,
    onSuccess,
    searchStr = "",
    pagination = DEFAULT_PAGINATION,
  } = props;
  const fetchGists = async () => {
    const response = await GithubService.getGistsList(searchStr, pagination);
    return response?.data;
  };
  return useQuery("gists", fetchGists, {
    enabled: false,
    retry: 0,
    onSuccess: (data) => {
      if (onSuccess) {
        onSuccess(data);
      }
    },
    onError,
  });
}

export function useGistDetailQuery(props: APIHookProps) {
  const { onError, gist_id = "" } = props;
  const fetchGistDetail = async () => {
    const response = await GithubService.getGistDetail(gist_id);
    return response?.data;
  };
  return useQuery(["gist-detail", gist_id], fetchGistDetail, {
    onError,
  });
}
