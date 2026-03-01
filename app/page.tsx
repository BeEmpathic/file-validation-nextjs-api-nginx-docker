"use client";
import { fileUpload } from "@/_lib/file-upload/file-upload";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Page() {
  const [result, setResult] = useState<object>({});
  const [files, setFiles] = useState<File[]>([]);
  function handleFilesChange(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files || e.target.files.length === 0) {
      setFiles([]);
      return;
    }

    setFiles(Array.from(e.target.files));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setResult(await fileUpload(files));
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="file" multiple name="files" onChange={handleFilesChange} />
      <button className="cursor-pointer border-solid" type="submit">
        Submit
      </button>
      {
        <div id="result">
          {Object.keys(result).length > 0 ? (
            result.map((message, index) => <p key={index}>{message}</p>)
          ) : (
            <p>No files added yet</p>
          )}
        </div>
      }
    </form>
  );
}
