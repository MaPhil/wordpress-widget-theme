(function($){

	$(document).ready(function(){

		$('body').on('click', 'button.media-upload-btn', function (event){
			console.log('test');
			event.preventDefault();
			var imageUploader =  new wp.media.view.MediaFrame.Select({
				'title':'Select Media',
				'multiple': 'add'
			});
			imageUploader.open();

			imageUploader.on("select",function(){
				var image = imageUploader.state().get('selection').toJSON();
				console.log(image);
			});
		});
	});

}(jQuery));
