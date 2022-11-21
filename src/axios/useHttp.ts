import { useState } from "react";
import { MAX_FILE_SIZE, UPLOAD_ENDPOINT } from "../constants/constants";
import { client } from "./client";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const uploadImage = async (file: File): Promise<string | void> => {
    const formData = new FormData();
    formData.append("file", file);
    setLoading(true);
    try {
      const res = await client.post(UPLOAD_ENDPOINT, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.status === 200) {
        setError(null);
        setUploaded(true);
        return res.data.imgUrl as string;
      } else {
        setUploaded(false);
        setError("Upload failed");
      }
    } catch (err) {
      setError("Cannot reach server");
      console.error(err);
      setUploaded(false);
    } finally {
      setLoading(false);
    }
  };

  const fileHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (!target.files) {
      return;
    }
    const selectedFile = target.files[0];
    
    if (selectedFile === file) {
      setError("File already selected");
      return;
    }
    if (selectedFile.size > MAX_FILE_SIZE) {
      setError("max file size is 3MB");
      return;
    }
    setError(null);
    setFile(selectedFile);
    setUploaded(false);
  };

  return { loading, uploadImage, uploaded, file, error, fileHandler };
};
