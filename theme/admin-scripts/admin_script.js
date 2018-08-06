(function($){

	$(document).ready(function(){

		$('body').on('click', 'button.media-upload-btn', function (event){
<<<<<<< HEAD
			console.log(event);
=======
			var etID = event.target.id;
			console.log(etID);
>>>>>>> 3f0e0e0961ec2c2be4617460bb750e315d08c2da
			event.preventDefault();
			var imageUploader =  new wp.media.view.MediaFrame.Select({
				'title':'Select Media',
				'multiple': 'add'
			});
			imageUploader.open();

			imageUploader.on("select",function(){
				var image = imageUploader.state().get('selection').toJSON();
<<<<<<< HEAD
				$('#widget-wp_wt_text00001-3-media+input').val('asldfjk')
=======
				$('#'+etID+'+input').val(image[0].url).trigger('change');
				$('#display-'+etID).css('background-image','url("'+image[0].url+'")');
>>>>>>> 3f0e0e0961ec2c2be4617460bb750e315d08c2da
			});
		});
	});

}(jQuery));
