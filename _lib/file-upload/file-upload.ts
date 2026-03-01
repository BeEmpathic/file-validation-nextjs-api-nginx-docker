export async function fileUpload(files: File[]) {
  const message: Object[] = [];

  if (files.length === 0) {
    message.push({
      success: false,
      error: "No files detected something is off",
    });

    return message;
  }

  try {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });

    const response = await fetch("/api/file-upload", {
      method: "POST",
      body: formData,
    });

    console.log(response);

    if (!response.ok) {
      if (response.status === 413) {
        message.push("The total size of the files is too large");
        return message;
      }
    }

    const result = await response.json();

    return { success: true, data: result };
  } catch (e: any) {
    console.error(e);
    message.push(e);
    return message;
  }
}
