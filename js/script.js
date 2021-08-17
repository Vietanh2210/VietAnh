// selector qua id
$('#ten_id');

// selector qua class
$('#ten_class');

// selector qua thuộc tính
$('input[name="search"]');
$('input[abcd="value"]');

// selector qua tag name
$('div');

function actionSidebar() {
	var left = $('.sidebar').css('left');
	if(left == '0px'){
		$('.sidebar').css('left', '-320px');
		$('.content').css('margin-left', '0');
	}else{
		$('.sidebar').css('left', '0');
		$('.content').css('margin-left', '320px');
	}
}

$('.action_sidebar').on('click', function(){
	var left = $('.sidebar').css('left');
	if(left == '0px'){
		$('.sidebar').css('left', '-320px');
		$('.content').css('margin-left', '0');
	}else{
		$('.sidebar').css('left', '0');
		$('.content').css('margin-left', '320px');
	}
});

$('#input_file').on('change', function(){
	var file = $(this)[0].files[0];
	if(file){
		let reader = new FileReader();
        reader.onload = function (event) {
            $("#imgPreview").attr("src", event.target.result);
        };
        reader.readAsDataURL(file);
	}
});

$('#btn-save').on('click', function(event){
	event.preventDefault();
	var title = $('input[name="title"]').val();
	var desc = $('textarea[name="desc"]').val();
	var content = $('textarea[name="content"]').val();
	if(title == ''){
		$('input[name="title"]').parent().find('p').html('<span>Vui lòng nhập tiêu đề!</span>');
	}
	if(desc == ''){
		if($('textarea[name="desc"]').parent().find('p').length == 0){
			$('textarea[name="desc"]').parent().append('<p class="text-danger">Vui lòng nhập mô tả!</p>');
		}else{
			$('textarea[name="desc"]').parent().find('p').text('Vui lòng nhập mô tả');
		}
	}
	if(title == ''){
		if($('textarea[name="content"]').parent().find('p').length == 0){
			$('textarea[name="content"]').parent().append('<p class="text-danger">Vui lòng nhập nội dung!</p>');
		}else{
			$('textarea[name="content"]').parent().find('p').text('Vui lòng nhập nội dung');
		}
	}
});

$('.form-control').on('keyup', function(){
	var value = $(this).val();
	var title = $(this).attr('title');
	if(value == ''){
		if($(this).parent().find('p').length == 0){
			$(this).parent().append('<p class="text-danger">Vui lòng nhập '+ title +'!</p>');
		}else{
			$(this).parent().find('p').text('Vui lòng nhập '+ title +'!');
		}
	}else{
		$(this).parent().find('p').text('');
	}
});


tinymce.init({
   selector: '#mytextarea',
   plugins: "link image code",
   toolbar: 'undo redo | styleselect | forecolor | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | link image | code'
});