	//Hero image size
	var image_height = jQuery('.hero img').height();
	var viewport_height = jQuery('.hero').height();
	console.log(viewport_height);

	if(image_height<viewport_height){
		jQuery('.hero img').addClass('portrait');
	}