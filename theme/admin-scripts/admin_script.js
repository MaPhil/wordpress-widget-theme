(function($){

	$(document).ready(function(){

		$('body').on('click', 'button.media-upload-btn', function (event){
			var etID = event.target.id;
			event.preventDefault();
			var imageUploader =  new wp.media.view.MediaFrame.Select({
				'title':'Select Media',
				'multiple': 'add'
			});
			imageUploader.open();

			imageUploader.on("select",function(){
				var image = imageUploader.state().get('selection').toJSON();
				$('#'+etID+'+input').val(image[0].url).trigger('change');
				$('#display-'+etID).css('background-image','url("'+image[0].url+'")');
			});
		});
	});

}(jQuery));
