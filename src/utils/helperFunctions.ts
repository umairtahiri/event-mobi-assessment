import { Fork, GistFile, GistFiles } from "../utils/types";

export const getFirstFileName = (files = {}) => {
  return Object.keys(files)[0] || "";
};

export const getFilesCount = (files = {}) => {
  return Object.keys(files).length || 0;
};

export const getFileLanguages = (files: GistFiles = {}) => {
  return Object.values(files).map((file: GistFile) => file.language);
};

export const findOldestForks = (forks: Fork[] = []) => {
  if (forks?.length > 3) {
    forks.sort((a, b) => new Date(a?.created_at) - new Date(b?.created_at));
    const oldestForks = forks.slice(0, 3);
    return oldestForks;
  } else {
    return forks;
  }
};

export const formatFileSize = (bytes: number) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};
