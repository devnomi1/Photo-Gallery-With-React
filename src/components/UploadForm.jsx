import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

function UploadForm() {
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);
	const types = ["image/png", "image/jpeg"];
	function uploadChangeHandler(e) {
		let selected = e.target.files[0];
		console.log(selected);
		if (selected && types.includes(selected.type)) {
			setFile(selected);
			setError(null);
		} else {
			setFile(null);
			setError("please select an image file (png or jpeg)");
		}
	}
	return (
		<form>
			<label htmlFor="upload">
				<input type="file" onChange={uploadChangeHandler} id="upload" />
				<span>+</span>
			</label>
			<div className="output">
				{error && <div className="error">{error}</div>}
				{file && <div>{file.name}</div>}
				{file && <ProgressBar file={file} setFile={setFile} />}
			</div>
		</form>
	);
}

export default UploadForm;
