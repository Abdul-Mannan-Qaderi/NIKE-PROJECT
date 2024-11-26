const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
	const handleClick = () => {
		if (bigShoeImage !== imgURL.bigShoe) {
			changeBigShoeImage(imgURL.bigShoe);
		}
	};
	return (
		<div
			className={`border-2 rounded-xl ${
				bigShoeImage === imgURL ? "border-corel-red" : "border-transparent"
			} cursor-pointer max-sm:flex-1`}
			onClick={handleClick}
		>
			<div>
				<img
					src={imgURL.thumbnail}
					alt="shoe collection"
					width={127}
					height={103}
				/>
			</div>
		</div>
	);
};

export default ShoeCard;
