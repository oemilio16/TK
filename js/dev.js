var verifica_imagenes = '';
$( window ).ready(function() {
	$('.click-nav-img').show();
	$('.historia-sect-left').show();
	$('.historia-sect-right').show();
	$('.click-nav-img-b').hide();
	$('.historia-sect-left-b').hide();
	$('.historia-sect-right-b').hide();
	$('body').css('overflow-x', 'hidden');
	$('#mySidenav').css('display','block').hide();
	//$('.home-sect').height(window.screen.height);
	//$('.home-sect div').height(window.screen.height);


	//$('.historia2').hide();
	//$('.historia3').hide();
	$('.formulario2').hide();
	$('.formulario3').hide();
	$('.formulario4').hide();
	$('.formulario5').hide();
	verifica_imagenes = setInterval(function(){ verificarImagenes() }, 3000);
});

function verificarImagenes(){
	// Ajustes responsive
	var comprobador=0;
	if($(window).width()<768 && $(window).height()>$(window).width()){
		$('.welcome-sect').height(window.screen.height);
		//$('.welcam-container').css('margin-top','0 !important');
		$('.welcam-container').height((window.screen.height/2));
		$('.meat-img').height(window.screen.height/2).width('100%');

		comprobador++;
	}else{
		if($('.meat-img').height()>50){
			$('.meat-img').height('auto').width('100%');
			//$('.welcam-container').height($('.meat-img').height());
			$('.welcome-sect').height($('.meat-img').height());
			comprobador++;
		}
	}
	if($(window).width()<768 && $(window).height()>$(window).width()){
		if($('.map-tk-xs').width()>50){
			$('.location-sect').height(window.screen.height/3);
			$('.horarios-sect').height((window.screen.height/3)*2);
			$('.horarios').css('top',$('.map-tk-xs').height()+20);
			$('.map-tk-xs').css('margin-top',$('.location-sect').height()/33);
			comprobador++;
		}
	}else{
		if($('.map-tk').height()>50){
			$('.location-sect').height($('.map-tk').height()+($('.map-tk').height()/6));
			$('.horarios-sect').height($('.img_horarios').height()+40);
			$('.horarios').css('top',($('.horarios-sect').height()-$('.horarios').height())/2);
			comprobador++;
		}
	}
	if($(window).width()<768 && $(window).height()>$(window).width()){
		if($('.map-tk-xs').height()>50){
			//$('.horarios-sect').height($('.map-tk-xs').height()+($('.map-tk-xs').height()/6));
			//$('.content_horarios-sect').css('padding-top',($('.horarios-sect').height()-$('.img_horarios').height())/2);
			//$('.horarios').height($('.map-tk-xs').height());
		}
		comprobador++;
	}else{
		if($('.img_horarios').height()>50){
			$('.horarios-sect').height($('.img_horarios').height()+40);
			$('.content_horarios-sect').css('padding-top',($('.horarios-sect').height()-$('.img_horarios').height())/2);
			$('.horarios').height($('.img_horarios').height());
			comprobador++;
		}
	}
	if($('.historia_image').height()>50 || $('.historia_image-xs').height()>50){
		if($(window).width()<768 && $(window).height()>$(window).width()){
			$('.carousel-caption-1').css('top',$('.item.active').height()/3);
			$('.carousel-caption-2').css('height',$('.item.active').height()-($('.item.active').height()/8));
			$('.carousel-caption-2-1').css('top',$('.item.active').height()/2.3);
			$('.carousel-caption-2-2').css('top',($('.item.active').height()/2)+($('.item.active').height()/5));

			$('.carousel-caption-3').css('height',$('.item.active').height()-($('.item.active').height()/8));
			$('.carousel-caption-3-1').css('top',$('.item.active').height()/5);
			$('.carousel-caption-3-2').css('top',($('.item.active').height()/2)+($('.item.active').height()/5));

			$('.carousel-caption-4').css('height',$('.item.active').height()-($('.item.active').height()/8));
			$('.carousel-caption-4-1').css('top',$('.item.active').height()/5);
			$('.carousel-caption-4-2').css('top',($('.item.active').height()/2)+($('.item.active').height()/4.5));

			$('.historia-sect-right').width($('.carousel-control').width()/6);
			$('.historia-sect-left').width($('.carousel-control').width()/6);
			$('.historia-sect-left').css('padding-top',$('.item.active').height()-($('.historia-sect-right').height()*2));
			$('.historia-sect-right').css('padding-top',$('.item.active').height()-($('.historia-sect-right').height()*2));

			$('.historia-sect-right-b').width($('.carousel-control').width()/6);
			$('.historia-sect-left-b').width($('.carousel-control').width()/6);
			$('.historia-sect-left-b').css('padding-top',$('.item.active').height()-($('.historia-sect-right').height()*2));
			$('.historia-sect-right-b').css('padding-top',$('.item.active').height()-($('.historia-sect-right').height()*2));
		}else{
			$('.carousel-caption-1').css('top',$('.item.active').height()/3);
			$('.carousel-caption-2').css('height',$('.item.active').height()-($('.item.active').height()/8));
			$('.carousel-caption-2-1').css('top',$('.item.active').height()/2);
			$('.carousel-caption-2-2').css('top',($('.item.active').height()/2)+($('.item.active').height()/4));

			$('.carousel-caption-3').css('height',$('.item.active').height()-($('.item.active').height()/8));
			$('.carousel-caption-3-1').css('top',$('.item.active').height()/4.5);
			$('.carousel-caption-3-2').css('top',($('.item.active').height()/2)+($('.item.active').height()/4));

			$('.carousel-caption-4').css('height',$('.item.active').height()-($('.item.active').height()/8));
			$('.carousel-caption-4-1').css('top',$('.item.active').height()/4.5);
			$('.carousel-caption-4-2').css('top',($('.item.active').height()/2)+($('.item.active').height()/3.5));

			$('.historia-sect-right').width($('.carousel-control').width()/6);
			$('.historia-sect-left').width($('.carousel-control').width()/6);
			$('.historia-sect-left').css('padding-top',$('.item.active').height()-($('.historia-sect-right').height()*2));
			$('.historia-sect-right').css('padding-top',$('.item.active').height()-($('.historia-sect-right').height()*2));

			$('.historia-sect-right-b').width($('.carousel-control').width()/6);
			$('.historia-sect-left-b').width($('.carousel-control').width()/6);
			$('.historia-sect-left-b').css('padding-top',$('.item.active').height()-($('.historia-sect-right').height()*2));
			$('.historia-sect-right-b').css('padding-top',$('.item.active').height()-($('.historia-sect-right').height()*2));
		}
		comprobador++;
	}
	if(comprobador>=4){
		clearInterval(verifica_imagenes);
		//centrado de contenidos
		if($('.location-sect').width()>992){
			$('.content_direccion').css('padding-top',($('.location-sect').height()-$('.content_direccion').height())/3);
		}else{
			$('.content_direccion').css('padding-top',($('.location-sect').height()-$('.content_direccion').height())/3);
		}
		if($(window).width()<768 && $(window).height()>$(window).width()){
			$('.floating-map').css('top',$('.menu-sect').height()).css('left',0);
			$('.contact-sect').height(window.screen.height/2);
			$('.open-sect').height(window.screen.height/2);
		}else{
			$('.floating-map').css('top',$('.menu-sect').height()-($('.menu-sect').height()-$('.content_menu-sect_row').height())/4).css('left',40);
			$('.contact-sect').height($('.horarios-sect').height());
		}		
		$('.content_menu-sect_row').css('top',($('.menu-sect').height()-$('.content_menu-sect_row').height())/2);
		$('.content_open-sect').css('padding-top',($('.open-sect').height()-$('.content_open-sect').height())/2);
		$('.footer-sect').height($('.content_redes-sect').height()*5)
		$('.content_redes-sect').css('padding-top',(($('.footer-sect').height()/2)/4));
		//$('.content_footer2-sect').css('padding-top',( (($('.footer-sect').height()/2)-($('.content_redes-sect').height()))+ ($('.content_redes-sect').height()/5)) );
		$('.content_footer2-sect').css('padding-top',( (($('.footer-sect').height()/2)-($('.content_redes-sect').height()))- ($('.content_redes-sect').height()/2)) );
		setTimeout(function(){$(window).trigger('resize')},600);
    	setTimeout(function(){$(window).trigger('resize')},1600);
    	setTimeout(function(){$(window).trigger('resize')},3600);
    	setTimeout(function(){$(window).trigger('resize')},10000);
    	setTimeout(function(){$(window).trigger('resize')},20000);
	}
}

$(document.body).on('click','.click-nav', function(ev){
	ev.preventDefault();
	openNav();
})

function openNav() {
    //document.getElementById("mySidenav").style.display = "block";
    $('#mySidenav').show();
}

$(document.body).on('click','.closebtn', function(ev){
	ev.preventDefault();
	closeNav();
})
function closeNav() {
    //document.getElementById("mySidenav").style.display = "none";
    $('#mySidenav').hide();
}

$(document.body).on('click','.goto', function(ev){
	ev.preventDefault();
	var target = $(this).attr('data-target');
	$('html, body').animate({ 
		scrollTop: $(target).offset().top
	}, 1000);
	closeNav();
})

$( window ).resize(function() {
	//home-sect
	$('.home-sect').height($(window).height()-2);
  	$('.home-sect div').height($(window).height());
	//welcome-sect
	if($(window).width()<768 && $(window).height()>$(window).width()){
		//$('.welcome-sect').height($('.welcam').height());
		//$('.welcam-container').css('margin-top','0');
		$('.welcome-sect').height(window.screen.height);
		$('.welcam-container').height((window.screen.height/2));
		$('.meat-img').height(window.screen.height/2).width('100%');
	}else{
		$('.meat-img').height('auto').width('100%');
		//$('.welcam-container').height($('.meat-img').height());
		$('.welcome-sect').height($('.meat-img').height());
	}
	//menu sect
	$('.content_menu-sect_row').css('top',($('.menu-sect').height()-$('.content_menu-sect_row').height())/2);
	//location-sect
	if($(window).width()<768 && $(window).height()>$(window).width()) {
		if($('.map-tk-xs').height()>50){
			$('.location-sect').height(window.screen.height/3);
			$('.horarios-sect').height((window.screen.height/3)*2);
			$('.horarios').css('top',$('.map-tk-xs').height()+20);
			$('.map-tk-xs').css('margin-top',$('.location-sect').height()/33);
		}
	}else{
		if($('.map-tk').height()>50){
			$('.location-sect').height($('.map-tk').height()+($('.map-tk').height()/6));
			$('.horarios-sect').height($('.img_horarios').height()+40);
			$('.horarios').css('top',($('.horarios-sect').height()-$('.horarios').height())/2);
		}
	}
	//$('.location-sect').height($('.map-tk').height()+($('.map-tk').height()/6));
	if($(window).width()<768 && $(window).height()>$(window).width()){
		$('.floating-map').css('top',$('.menu-sect').height()).css('left',0);	
	}else{
		$('.floating-map').css('top',$('.menu-sect').height()-($('.menu-sect').height()-$('.content_menu-sect_row').height())/4).css('left',40);
	}
	$('.content_direccion').css('padding-top',($('.location-sect').height()-$('.content_direccion').height())/3);
	//horarios-sect
	if($(window).width()<768 && $(window).height()>$(window).width()){
		if($('.map-tk').height()>50){
			//$('.horarios-sect').height($('.map-tk').height()+($('.map-tk').height()/6));
			//$('.content_horarios-sect').css('padding-top',($('.horarios-sect').height()-$('.img_horarios').height())/2);
			//$('.horarios').height($('.map-tk').height());
		}
	}else{
		if($('.img_horarios').height()>50){
			$('.horarios-sect').height($('.img_horarios').height()+40);
			$('.content_horarios-sect').css('padding-top',($('.horarios-sect').height()-$('.img_horarios').height())/2);
			$('.horarios').height($('.img_horarios').height());
		}
	}
	//historia-sect
	/*
	$('.flecha_historia_right').height($('.bg-historia-img').height());
	$('.historia-sect-back').height($('.bg-historia-img').height())
	var hcontent_historia = ($('.bg-historia-img').height()/3);
	$('.content_historia').css('margin-top',hcontent_historia);
	$('.historia-sect-right').width($('.flecha_historia_right').width()/3)
	$('.historia-sect-left img').width($('.flecha_historia_right').width()/3);
	$('.historia-sect-right').css('padding-top',$('.bg-historia-img').height()-$('.historia-sect-right').height()-$('.historia-sect-right').height());
	$('.historia-sect-left img').css('padding-top',$('.bg-historia-img').height()-$('.historia-sect-right').height()-$('.historia-sect-right').height());
	*/
	if($(window).width()<768){
		$('.carousel-caption-1').css('top',$('.item.active').height()/3);
		$('.carousel-caption-2').css('height',$('.item.active').height()-($('.item.active').height()/8));
		$('.carousel-caption-2-1').css('top',$('.item.active').height()/2.3);
		$('.carousel-caption-2-2').css('top',($('.item.active').height()/2)+($('.item.active').height()/5));

		$('.carousel-caption-3').css('height',$('.item.active').height()-($('.item.active').height()/8));
		$('.carousel-caption-3-1').css('top',$('.item.active').height()/5);
		$('.carousel-caption-3-2').css('top',($('.item.active').height()/2)+($('.item.active').height()/5));

		$('.carousel-caption-4').css('height',$('.item.active').height()-($('.item.active').height()/8));
		$('.carousel-caption-4-1').css('top',$('.item.active').height()/5);
		$('.carousel-caption-4-2').css('top',($('.item.active').height()/2)+($('.item.active').height()/4.5));

		$('.historia-sect-right').width($('.carousel-control').width()/6);
		$('.historia-sect-left').width($('.carousel-control').width()/6);
		$('.historia-sect-left').css('padding-top',$('.item.active').height()-($('.historia-sect-right').height()*2));
		$('.historia-sect-right').css('padding-top',$('.item.active').height()-($('.historia-sect-right').height()*2));

		$('.historia-sect-right-b').width($('.carousel-control').width()/6);
		$('.historia-sect-left-b').width($('.carousel-control').width()/6);
		$('.historia-sect-left-b').css('padding-top',$('.item.active').height()-($('.historia-sect-right').height()*2));
		$('.historia-sect-right-b').css('padding-top',$('.item.active').height()-($('.historia-sect-right').height()*2));
	}else{
		$('.carousel-caption-1').css('top',$('.item.active').height()/3);
		$('.carousel-caption-2').css('height',$('.item.active').height()-($('.item.active').height()/8));
		$('.carousel-caption-2-1').css('top',$('.item.active').height()/2);
		$('.carousel-caption-2-2').css('top',($('.item.active').height()/2)+($('.item.active').height()/4));

		$('.carousel-caption-3').css('height',$('.item.active').height()-($('.item.active').height()/8));
		$('.carousel-caption-3-1').css('top',$('.item.active').height()/4.5);
		$('.carousel-caption-3-2').css('top',($('.item.active').height()/2)+($('.item.active').height()/4));

		$('.carousel-caption-4').css('height',$('.item.active').height()-($('.item.active').height()/8));
		$('.carousel-caption-4-1').css('top',$('.item.active').height()/4.5);
		$('.carousel-caption-4-2').css('top',($('.item.active').height()/2)+($('.item.active').height()/3.5));

		$('.historia-sect-right').width($('.carousel-control').width()/6);
		$('.historia-sect-left').width($('.carousel-control').width()/6);
		$('.historia-sect-left').css('padding-top',$('.item.active').height()-($('.historia-sect-right').height()*2));
		$('.historia-sect-right').css('padding-top',$('.item.active').height()-($('.historia-sect-right').height()*2));

		$('.historia-sect-right-b').width($('.carousel-control').width()/6);
		$('.historia-sect-left-b').width($('.carousel-control').width()/6);
		$('.historia-sect-left-b').css('padding-top',$('.item.active').height()-($('.historia-sect-right').height()*2));
		$('.historia-sect-right-b').css('padding-top',$('.item.active').height()-($('.historia-sect-right').height()*2));
	}

	//$('.carousel-caption-3').css('top',$('.item.active').height()/8);
	//$('.carousel-caption-3').css('height',$('.item.active').height()-($('.item.active').height()/8));
	//$('.carousel-caption-3-2').css('top',$('.carousel-caption-3').height()/2);
	//$('.carousel-caption-4').css('top',($('.item.active').height()*2)/3);
	$('.historia-sect-right').width($('.carousel-control').width()/6);
	$('.historia-sect-left').width($('.carousel-control').width()/6);
	$('.historia-sect-left').css('padding-top',$('.item.active').height()-($('.historia-sect-right').height()*2));
	$('.historia-sect-right').css('padding-top',$('.item.active').height()-($('.historia-sect-right').height()*2));

	$('.historia-sect-right-b').width($('.carousel-control').width()/6);
	$('.historia-sect-left-b').width($('.carousel-control').width()/6);
	$('.historia-sect-left-b').css('padding-top',$('.item.active').height()-($('.historia-sect-right').height()*2));
	$('.historia-sect-right-b').css('padding-top',$('.item.active').height()-($('.historia-sect-right').height()*2));
	//open-sect
	$('.content_open-sect').css('padding-top',($('.open-sect').height()-$('.content_open-sect').height())/2);
	//contact-sect
	if($(window).width()<768 && $(window).height()>$(window).width()){
		$('.contact-sect').height(window.screen.height/2);
		$('.open-sect').height(window.screen.height/2);
	}else{
		$('.contact-sect').height($('.horarios-sect').height());
	}	
	//footer-sect
	$('.footer-sect').height($('.content_redes-sect').height()*5)
	$('.content_redes-sect').css('padding-top',($('.footer-sect').height()/2)/4);
	//$('.content_footer2-sect').css('padding-top',(($('.footer-sect').height()/2)-($('.content_redes-sect').height())));
	$('.content_footer2-sect').css('padding-top',( (($('.footer-sect').height()/2)-($('.content_redes-sect').height()))- ($('.content_redes-sect').height()/2)) );
	//general
	$('body').scrollLeft(0);
});

/*
$(document.body).on('click','.historia-sect-left',function(){
	
	if (!$(".historia1").is(':hidden')) {
	   // ...
	   console.log('click left')
	   $('.historia1').hide();
	   $('.historia2').hide();
	   $('.historia3').show();
	}else {
		if (!$(".historia2").is(':hidden')) {
	   		// ...
		   $('.historia2').hide();
		   $('.historia3').hide();
		   $('.historia1').show();
		}else {
			if (!$(".historia3").is(':hidden')) {
		   // ...
			   $('.historia3').hide();
			   $('.historia1').hide();
			   $('.historia2').show();
			}
		}
	}
	
})

$(document.body).on('click','.historia-sect-right',function(){
	console.log('click historia-sect-right')
	if (!$(".historia1").is(':hidden')) {
	   // ...
	   $('.historia1').hide();
	   $('.historia3').hide();
	   $('.historia2').show();
	}else if (!$(".historia2").is(':hidden')) {
	   // ...
	   $('.historia1').hide();
	   $('.historia2').hide();
	   $('.historia3').show();
	}else if (!$(".historia3").is(':hidden')) {
	   // ...
	   $('.historia3').hide();
	   $('.historia2').hide();
	   $('.historia1').show();
	}
})
*/

$(document.body).on('click','.btn_form', function(ev){
	ev.preventDefault();
	console.log('btn_form');
	if (!$(".formulario1").is(':hidden')) {
	   // ...
	   $('.formulario1').slideUp("slow");
	   $('.formulario3').hide();
	   $('.formulario4').hide();
	   $('.formulario5').hide();
	   $('.formulario2').slideDown("slow");
	}else if (!$(".formulario2").is(':hidden')) {
	   // ...
	   if($('#form_nombre').val()!=''){
	   		$('.nombre_form_sub').text($('#form_nombre').val());
	   		$('.formulario1').hide();
		   	$('.formulario2').slideUp("slow");
		   	//$('.formulario4').hide();
	   		$('.formulario5').hide();
		   	$('.formulario3').slideDown("slow");
	   }else{
	   	alert('Debe introducir un nombre');
	   }
	}else if (!$(".formulario3").is(':hidden')) {
	   // ...
	   	if($('#form_mail').val()!=''){
	   		if(isValidEmailAddress($('#form_mail').val())){
	   			$('.formulario3').slideUp("slow");
				$('.formulario2').hide();
				$('.formulario1').hide();
				$('.formulario5').slideDown();
				//$('.formulario4').slideDown("slow");
	   		}else{
	   			alert('Debe introducir un correo válido');
	   		}	
		}else{
			alert('Debe introducir un correo');
		}
	}else if (!$(".formulario5").is(':hidden')) {
	   	// ...
	   	if($('#form_mensaje').val()!=''){
	   		enviar_mensaje();
	   		//alert('¡Gracias por tu mensaje '+$('#form_nombre').val()+'!');
			$('.formulario2').hide();
			$('.formulario3').hide();
			$('.formulario4').hide();
			$('.formulario5').slideUp("slow");
			$('.formulario1').slideDown("slow");
		}else{
			alert('¡Debes dejar un mensaje!');
		}
	}

});

$(document.body).on('click','.btn_form_back', function(ev){
	ev.preventDefault();
	//console.log('btn_form');
	if (!$(".formulario2").is(':hidden')) {
   		$('.formulario3').hide();
	   	$('.formulario2').slideUp("slow");
	   	//$('.formulario4').hide();
   		$('.formulario5').hide();
	   	$('.formulario1').slideDown("slow");
	}else if (!$(".formulario3").is(':hidden')) {
		   $('.formulario3').slideUp("slow");
		   //$('.formulario4').hide();
		   $('.formulario1').hide();
	   	   $('.formulario5').hide();
		   $('.formulario2').slideDown("slow");
	}else if (!$(".formulario5").is(':hidden')) {
	   	// ...
		$('.formulario5').slideUp();
		$('.formulario2').hide();
		$('.formulario1').hide();
		//$('.formulario4').slideUp();
		$('.formulario3').slideDown("slow");
	}/*else if (!$(".formulario5").is(':hidden')) {
	   		//alert('¡Gracias por tu mensaje '+$('#form_nombre').val()+'!');
			$('.formulario2').hide();
			$('.formulario3').hide();
			$('.formulario1').hide();
			$('.formulario5').slideUp();
			$('.formulario4').slideDown("slow");
	}*/

})

function enviar_mensaje(){
	try{
		if($.trim($("#form_nombre").val())==""){
			throw "Escribe tu nombre";
		}
		if($.trim($("#form_mail").val())==""){
			throw "Escribe tu correo";
		}
		if($.trim($("#form_mensaje").val())==""){
			throw "Deja un mensaje";
		}
		var nombre 	= $("#form_nombre").val();
		var mail 	= $("#form_mail").val();
		var asunto 	= $("#form_asunto").val();
		var mensaje = $("#form_mensaje").val();
		//console.log('nombre: '+nombre);
		//console.log('mail: '+mail);
		//console.log('asunto: '+asunto);
		//console.log('mensaje: '+mensaje);
		//alert('¡Gracias por tu mensaje '+nombre+'!');
		data={
			nombre:nombre,
			email:mail,
			tema:asunto,
			comentario:mensaje
		}
		
		$.ajax({
			url: "mailto.php",
			type: 'POST',
			dataType: 'json',
			data:data,
			success: function (data) {
				console.log(data);
				alert('¡Gracias por tu mensaje '+nombre+'!');
			},
			error: function (err, req) {
				console.log(err)
				alert('Disculpa '+nombre+', ha ocurrido un error inesperado.');
			}
		});	
	}catch(ex){
		TOOTH.main.notificacion(ex, 'error');
	}
}

$(document).on('click','.carousel-control',function(){
	setTimeout(function(){
		if($('.item.active').hasClass('itemblackarrow')){
			//console.log('arrow');
			//$('.historia-sect-left').attr('src','img/last-historia-b.png');
			//$('.historia-sect-right').attr('src','img/next-historia-b.png');
			if($('.historia-sect-left-b').hasClass('canvas')){
				$('.historia-sect-left-b').removeClass('canvas');
				$('.historia-sect-left').addClass('canvas');
				$('.historia-sect-left').hide();
				$('.historia-sect-left-b').show();
			}
			if($('.historia-sect-right-b').hasClass('canvas')){
				$('.historia-sect-right-b').removeClass('canvas');
				$('.historia-sect-right').addClass('canvas');
				$('.historia-sect-right').hide();
				$('.historia-sect-right-b').show();
			}	
			if($('.click-nav-img-b').hasClass('canvas')){
				$('.click-nav-img-b').removeClass('canvas');
				$('.click-nav-img').addClass('canvas');
				$('.click-nav-img').hide();
				$('.click-nav-img-b').show();
			}		
		}else{
			//$('.historia-sect-left').attr('src','img/last-historia.png');
			//$('.historia-sect-right').attr('src','img/next-historia.png');
			if($('.historia-sect-left').hasClass('canvas')){
				$('.historia-sect-left').removeClass('canvas');
				$('.historia-sect-left-b').addClass('canvas');
				$('.historia-sect-left').show();
				$('.historia-sect-left-b').hide();
			}
			if($('.historia-sect-right').hasClass('canvas')){
				$('.historia-sect-right').removeClass('canvas');
				$('.historia-sect-right-b').addClass('canvas');
				$('.historia-sect-right').show();
				$('.historia-sect-right-b').hide();
			}
			if($('.click-nav-img').hasClass('canvas')){
				$('.click-nav-img').removeClass('canvas');
				$('.click-nav-img-b').addClass('canvas');
				$('.click-nav-img').show();
				$('.click-nav-img-b').hide();
			}
		}
	},1500);
})

function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + window.screen.height;

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function Utils() {

}

Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + window.screen.height;
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }
};

var Utils = new Utils();

$( window ).scroll(function() {
	//para saber si hay que cambiar el botón del menú al que es distinto de blanco
	var isElementInView = Utils.isElementInView($('.historia-sect'), false);
	if (isElementInView) {
		if($('.click-nav').offset().top >= $('.historia-sect').offset().top && $('.item.active').hasClass('itemblackarrow')){
			//console.log('in view and black');
			if($('.click-nav-img-b').hasClass('canvas')){
				$('.click-nav-img-b').removeClass('canvas');
				$('.click-nav-img').addClass('canvas');
				$('.click-nav-img').hide();
				$('.click-nav-img-b').show();
			}		
		}else{
			//console.log('in view and white');
			if($('.click-nav-img').hasClass('canvas')){
				$('.click-nav-img').removeClass('canvas');
				$('.click-nav-img-b').addClass('canvas');
				$('.click-nav-img').show();
				$('.click-nav-img-b').hide();
			}
		}
	} else {
	    //console.log('out of view');
	    if($('.click-nav-img').hasClass('canvas')){
			$('.click-nav-img').removeClass('canvas');
			$('.click-nav-img-b').addClass('canvas');
			$('.click-nav-img').show();
			$('.click-nav-img-b').hide();
		}
	}
});