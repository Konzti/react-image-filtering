import { useHttp } from "../../axios/useHttp";
import ErrorModal from "./ErrorModal";
import Spinner from "./Spinner";

const Upload = ({ setImage }: any) => {
  const { loading, uploadImage, uploaded, file, error, fileHandler } = useHttp();

  const handleUploadClick = async () => {
    if (file === null) {
      return;
    }
    let imgUrl = await uploadImage(file);
    if (imgUrl) {
      setImage(imgUrl);
    }
  };

  return (
    <div className="mb-5 flex items-center justify-center">
      <h1 className="text-3xl font-bold text-center py-5"></h1>
      <div className="form-control flex flex-col items-center justify-center">
        {file === null || uploaded ? (
          <label htmlFor="upload" className="label text-xl text-center" title="upload image">
            choose image
          </label>
        ) : (
          <button className="btn btn-primary" onClick={handleUploadClick}>
            Upload
          </button>
        )}
        {loading ? <Spinner /> : null}
        {error ? <ErrorModal error={error} /> : null}
        <input
          className="file-input file-input-bordered file-input-primary mt-3"
          type="file"
          accept="image/png, image/gif, image/jpeg"
          name="upload"
          id="upload"
          onChange={fileHandler}
        />
      </div>
    </div>
  );
};

export default Upload;
