import React from "react";
import UseFireStore from "../hooks/UseFireStore";
import { motion } from "framer-motion";

function ImageGrid({ setSelectedImg }) {
	const { docs } = UseFireStore("image");
	console.log(docs);
	return (
		<div className="img-grid">
			{docs &&
				docs.map((doc) => (
					<motion.div
						whileHover={{ opacity: 1 }}
						className="img-wrap"
						key={doc.id}
						onClick={() => setSelectedImg(doc.url)}
					>
						<img src={doc.url} alt="upload image" />
					</motion.div>
				))}
		</div>
	);
}

export default ImageGrid;
