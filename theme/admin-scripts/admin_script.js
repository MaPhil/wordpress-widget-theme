
(function($){

	$(document).ready(function(){
		var editor = {
			id:''
		};
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
		$('<style>.wp-wt-modal-content .closing-area{height: 30px;}#save-and-close{display:none}.wp-wt-modal{display:none;position:fixed;z-index:500000;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.4)}.wp-wt-modal-content{background-color:#fefefe;margin:5vh auto 0 auto;padding:20px;border:1px solid #888;width:90vw}.wp-wt-close{color:#aaa;float:right;font-size:28px;font-weight:700}.wp-wt-close:focus,.wp-wt-close:hover{color:#000;text-decoration:none;cursor:pointer}.mce-container.mce-panel {z-index: 999999 !important;}</style>').appendTo(document.head);
		$('<div id="rich-editor" class="wp-wt-modal"><!-- Modal content --><div class="wp-wt-modal-content"><div class="closing-area"><span class="wp-wt-close">&times;</span></div><textarea id="rich-editor-content"></textarea><p></p><button id="save-and-close">save and close</button></div></div>').appendTo(document.body);

		var handleMediaFromEditor = function(){
			return new Promise(function(resolve){
				var etID = event.target.id;
				event.preventDefault();
				var imageUploader =  new wp.media.view.MediaFrame.Select({
					'title':'Select Media',
					'multiple': 'add'
				});
				imageUploader.open();
				imageUploader.on("select",function(){
					var image = imageUploader.state().get('selection').toJSON();
					resolve(image);
				});
			})
		}

		var span = document.getElementsByClassName("wp-wt-close")[0];
		span.onclick = function() {
		    modal.style.display = "none";
		}
		var modal = document.getElementById('rich-editor');
		setInterval(function(){
			$('.wp-wt-open-editor').click(function(e){
				e.preventDefault();
				editor.id = $(e.target).attr('related');
				editor.element = $('#'+editor.id);
				editor.content = editor.element.val();

				$('#rich-editor-content').val(editor.content);

    			modal.style.display = "block";



    			var change = function(ed){
    				//editor.val(ed.getContent()).trigger('change');
    				editor.content = ed.getContent();
    				$('#save-and-close').css('display','block');
    			} 
    			$('#save-and-close').click(function(){
    				modal.style.display = "none";
    				editor.element.val(editor.content).trigger('change');
    			})
    			$('#rich-editor-content').tinymce({
    				menubar: false,
    				plugins: "lists link hr wordcount",
    				toolbar: "fontsizeselect numlist bullist link | alignleft aligncenter alignright alignjustify | bold italic | underline hr strikethrough | media | wordcount",
    				fontsize_formats: '8pt 10pt 11pt 12pt 14pt 18pt 24pt 36pt', 
    				height:"500",
    				setup : function(ed){
    					ed.on('keyup', function(){
    						change(ed);
    					})
    					ed.on('change', function(){
    						change(ed);
    					})
    					ed.on('paste', function(){
    						change(ed);
    					})
    					ed.on('error',function(e){
    						console.log(e)
    					})
    					ed.addButton('media', {
					      text: 'Media',
					      icon: false,
					      onclick: function () {
					      	handleMediaFromEditor().then(function(image){
					      		for(var i=0;i<image.length;i++) ed.insertContent('<img class="rich-text-widget-media" src="'+image[i].url+'" data-mce-src="'+image[i].url+'" alt="'+image[i].alt+'" width="300" height="200" />');
					      	})
					      }
					    });
    				}
    			});
			})
		},1000);
	});

}(jQuery));