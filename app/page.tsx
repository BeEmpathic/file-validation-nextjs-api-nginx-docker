"use client";
import { FormEvent, useState } from "react";

export default function Page() {
  const [data, setData] = useState<string[]>([]);
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/file-upload", {
        method: "POST",
        body: formData,
      });
      setData(await response.json());

      // Handle response if necessary

      console.log("Just the response:", response);
      console.log("Data: ", data);
      // ...
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="file" multiple name="files" />
      <button className="cursor-pointer border-solid" type="submit">
        Submit
      </button>
      {
        <div id="result">
          {data.length > 0 ? (
            data.map((message, index) => <p key={index}>{message}</p>)
          ) : (
            <p>No files added yet</p>
          )}
        </div>
      }
    </form>
  );
}
