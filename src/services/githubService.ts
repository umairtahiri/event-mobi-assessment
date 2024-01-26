import https from "./http-common";
import { Pagination } from "../utils/types";

const getGistsList = (username: string, pagination: Pagination) => {
  const { page, per_page } = pagination;
  return https().get(
    `/users/${username}/gists?per_page=${per_page}&page=${page}`
  );
};

const getGistDetail = (gist_id: string) => {
  return https().get(`/gists/${gist_id}`);
};

const GithubService = {
  getGistsList,
  getGistDetail,
};

export default GithubService;
