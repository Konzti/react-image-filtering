import { useCallback, useState } from "react";
import { UPLOAD_ENDPOINT } from "../constants/constants";
import { client } from "./client";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [error, setError] = useState(null);
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
        setUploaded(true);
        return res.data.imgUrl as string;
      } else {
        setUploaded(false);
      }
    } catch (err) {
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
    setFile(target.files[0]);
    setUploaded(false);
  };
  const clearError = useCallback(() => setError(null), []);

  return {loading, uploadImage, uploaded,file, fileHandler};
};
