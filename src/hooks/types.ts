import { Pagination } from "../utils/types";

export type ErrorResponse = {
  response: {
    data: {
      message: string;
    };
  };
};

export type APIHookProps = {
  onSuccess?: (data: any) => void;
  onError?: (error?: ErrorResponse) => void;
  searchStr?: string;
  gist_id?: string;
  pagination?: Pagination;
};
