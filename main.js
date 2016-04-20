jQuery(document).ready(function(){
	/*
	made by the
			.:::.      _,,,_      .:::.
		 ::(\:::.-'"`     `"'-.:::/):;
		 `:::\:`               `:/:::'
			 `::                   ::'
				/  .:::.       .:::.  \
				|  ::::0}     {0::::  |
				|  ::::/       \::::  |
				|   ''/         \''   |
				|    /           \    |
				 \   ; . .---. . ;   /
					`. \'.(     ).'/ .'
			 jgs  `-\. `-.-' '/-'
							 \'--'--'/
								`-...-'
		bear.
	*/
	var locale = {
	'it_IT': {
		'camera': 'Camera',
		'arrivo': 'Arrivo',
		'partenza': 'Partenza',
		'camere': 'Camere',
		'adulto': 'Adulto',
		'anni': 'Anni',
		'anno': 'Anno',
		'adulti': 'Adulti',
		'bambini': 'Bambini',
		'bambino': 'Bambino',
		'aggiungi': 'Aggiungi',
		'rimuovi': 'Rimuovi',
		'promocode': 'Hai un promocode ? Scrivilo qui !',
		'booknow': 'PRENOTA ORA'
	},
	'en_GB': {
		'camera': 'Room',
		'arrivo': 'Arrival',
		'partenza': 'Departure',
		'camere': 'Rooms',
		'adulto': 'Adult',
		'anni': 'Years',
		'anno': 'Year',
		'adulti': 'Adults',
		'bambini': 'Childs',
		'bambino': 'Child',
		'aggiungi': 'Add',
		'rimuovi': 'Remove',
		'promocode': 'Dou you have a promocode ? Type it here !',
		'booknow': 'BOOK NOW'
	},
	'de_DE': {
		'camera': 'Zimmer',
		'arrivo': 'Ankunft',
		'partenza': 'Abfahrt',
		'camere': 'Zimmer',
		'adulto': 'Erwachsene',
		'anni': 'Alter',
		'anno': 'Jahr',
		'adulti': 'Erwachsene',
		'bambini': 'Kinder',
		'bambino': 'Baby',
		'aggiungi': 'Hinzufügen',
		'rimuovi': 'Entfernen',
		'promocode': 'Sie haben einen Promocode ? Schreiben Sie hier!',
		'booknow': 'BUCHEN'
	},
	'fr_FR': {
		'camera': 'Chambre',
		'arrivo': 'Arrivée',
		'partenza': 'Départ',
		'camere': 'Chambres',
		'adulto': 'Adulte',
		'anni': 'âge',
		'anno': 'année',
		'adulti': 'Adultes',
		'bambini': 'Enfants',
		'bambino': 'Bébé',
		'aggiungi': 'ajouter',
		'rimuovi': 'supprimer',
		'promocode': 'Vous avez un promocode? Ecrivez ici!',
		'booknow': 'réservez dès maintenant'
	},
	'pt_PT': {
		'camera': 'Quarto',
		'arrivo': 'Chegada',
		'partenza': 'Partida',
		'camere': 'Quartos',
		'adulto': 'Adulto',
		'anni': 'Idade',
		'anno': 'Ano',
		'adulti': 'Adultos',
		'bambini': 'Crianças',
		'bambino': 'Bebê',
		'aggiungi': 'Adicionar',
		'rimuovi': 'Remover',
		'promocode': 'Você tem um promocode? Escreva aqui!',
		'booknow': 'Reserve agora'
	},
	'es_ES': {
		'camera': 'Habitación',
		'arrivo': 'Llegada',
		'partenza': 'Salida',
		'camere': 'Habitaciones',
		'adulto': 'Adulto',
		'anni': 'Edad',
		'anno': 'Año',
		'adulti': 'Adultos',
		'bambini': 'Niños',
		'bambino': 'Bebé',
		'aggiungi': 'Añadir',
		'rimuovi': 'Eliminar',
		'promocode': 'Usted tiene un código de promoción? Escribe aquí!',
		'booknow': 'reservar ahora'
	}
	}

	var currentLocale = 'it_IT';
	var rooms = 1;
	var minDate = moment();

	var options = {
	maxRooms: 4,
	maxChilds: 4,
	maxAdults: 4,
	langCode: 2
	}

	//Init



	var request = {
	checkIn: moment(),
	checkOut: moment().add(1, 'day')
	};

	function setLocale(locale){
	if(!locale){
	 currentLocale = jQuery('.hmd-book-wrapper').data('locale');
	}else{
		currentLocale = locale;
	}
	applyLocale();
	}

	setLocale();

	function applyLocale(){
	if(currentLocale == 'it_IT'){

		moment.updateLocale('it', {
			longDateFormat : {
				L: "DD/MM/YYYY",
			}
		});
		jQuery.datepicker.setDefaults(
			jQuery.extend(
				{'dateFormat':'mm/dd/yy'},
				jQuery.datepicker.regional['it']
			)
		);
		options.langCode = 2;

	}else if(currentLocale == 'en_GB'){

		 moment.updateLocale('en', {
			longDateFormat : {
				L: "MM/DD/YYYY",
			}
		});
		jQuery.datepicker.setDefaults(
			jQuery.extend(
				{'dateFormat':'mm/dd/yy'},
				jQuery.datepicker.regional['en-GB']
			)
		);
		options.langCode = 1;

	}else if(currentLocale == 'de_DE'){

		moment.updateLocale('de', {
			longDateFormat : {
				L: "DD/MM/YYYY",
			}
		});
		jQuery.datepicker.setDefaults(
			jQuery.extend(
				{'dateFormat':'mm/dd/yy'},
				jQuery.datepicker.regional['de-DE']
			)
		);
		options.langCode = 3;

	}else if(currentLocale == 'fr_FR'){

		moment.updateLocale('fr', {
			longDateFormat : {
				L: "DD/MM/YYYY",
			}
		});
		jQuery.datepicker.setDefaults(
			jQuery.extend(
				{'dateFormat':'mm/dd/yy'},
				jQuery.datepicker.regional['fr-FR']
			)
		);
		options.langCode = 4;

	}else if(currentLocale == 'es_ES'){

		moment.updateLocale('es', {
			longDateFormat : {
				L: "DD/MM/YYYY",
			}
		});
		jQuery.datepicker.setDefaults(
			jQuery.extend(
				{'dateFormat':'mm/dd/yy'},
				jQuery.datepicker.regional['es-ES']
			)
		);
		options.langCode = 5;

	}else if(currentLocale == 'pt_PT'){

		moment.updateLocale('pt', {
			longDateFormat : {
				L: "DD/MM/YYYY",
			}
		});
		jQuery.datepicker.setDefaults(
			jQuery.extend(
				{'dateFormat':'mm/dd/yy'},
				jQuery.datepicker.regional['pt_PT']
			)
		);
		options.langCode = 8;

	}

	//translate
	jQuery('.hmd-add').text(locale[currentLocale].aggiungi);
	jQuery('.hmd-remove').text(locale[currentLocale].rimuovi);
	jQuery('.hmd-checkIn-panel > .hmd-label').html('<i class="ion-calendar"></i> ' + locale[currentLocale].arrivo);
	jQuery('.hmd-checkOut-panel > .hmd-label').html('<i class="ion-calendar"></i> ' + locale[currentLocale].partenza);
	jQuery('.hmd-rooms-panel > .hmd-label').html('<i class="ion-person-stalker"></i> ' + locale[currentLocale].camere);
	jQuery('.hmd-promocode > input').attr('placeholder', locale[currentLocale].promocode);
	jQuery('.hmd-booknow').text(locale[currentLocale].booknow);

	jQuery('#room1 > .hmd-room-section.name').text(locale[currentLocale].camera + ' 1');
	jQuery('#room1 > .hmd-room-section.adults > select > option').each(function(index){
		if(index == 0){
			jQuery(this).text((index + 1 ) + ' ' + locale[currentLocale].adulto);
		}else{
			jQuery(this).text((index + 1 ) + ' ' + locale[currentLocale].adulti);
		}
	});

	jQuery('#room1 > .hmd-room-section.childs > select > option').each(function(index){
		if(index == 0){
			jQuery(this).text(index+ ' ' + locale[currentLocale].bambino);
		}else{
			jQuery(this).text(index + ' ' + locale[currentLocale].bambini);
		}
	});
	}

	updateUi();

	function createRoom(){
	//Controllo se abbiamo raggiunto il limite massimo di camere
	if(rooms == options.maxRooms){
		return;
	}
	//Incremento il numero di camere inserit
	rooms++;
	//Clono la priam riga delle camere e imposto i valori
	var $roomElement = jQuery('.hmd-room:first').clone();
	//Imposto la label della camera
	$roomElement.find('.hmd-room-childs-ages').empty().css('display', 'none');
	$roomElement.find('.hmd-room-section.name').text(locale[currentLocale].camera + ' ' + rooms);
	//Imposto l'id della camera
	$roomElement.attr('id', 'room' + rooms);
	$roomElement.data('room', rooms);
	$roomElement.css('border-top', '1px solid #dedede');
	$roomElement.css('display', 'none');
	$roomElement.children('.hmd-room-childs-ages').attr('id', 'childs' + rooms);
	//Aggiungo l'elemento alla lista
	$roomElement.appendTo('.hmd-book-rooms').fadeIn('normal');
	jQuery('.hmd-rooms-panel .hmd-text').text(rooms);
	}

	function removeRoom(){
	//Rimuovo l'ultima camera aggiunta, solo se il numero totale delle camere è superiore a 1
	if(rooms > 1){
		jQuery('#room' + rooms).fadeOut('normal', function(){
			jQuery('#room' + rooms).remove();
			rooms--;
			jQuery('.hmd-rooms-panel .hmd-text').text(rooms);
		});
	}
	}

	function updateUi(){
	jQuery('.hmd-checkIn-panel .hmd-text').text(request.checkIn.format('D'));
	jQuery('.hmd-checkIn-panel .hmd-sub').text(request.checkIn.format('MMMM'));

	jQuery('.hmd-checkOut-panel .hmd-text').text(request.checkOut.format('D'));
	jQuery('.hmd-checkOut-panel .hmd-sub').text(request.checkOut.format('MMMM'));
	}

	jQuery('.hmd-checkIn-panel').on('click', function(event){

	jQuery('#checkInPicker').datepicker({
			beforeShow: function(input, instance){
				jQuery('.hmd-date').datepicker("option", "minDate", new Date());
				jQuery('#ui-datepicker-div').addClass('hmd-datepicker');
			},
			onSelect: function(selectedDate){
				//Nacondo il calendario
				jQuery('#checkInPicker').hide();
				//Imposto la data del checkin
				request.checkIn = moment(selectedDate);
				//Imposto la data di checkout alla data di check in + 1 giorno
				request.checkOut = moment(selectedDate).add(1, 'day');
				//aggiorno l'interfaccia
				updateUi();
			},
			inline: false,
			autoclose: true,
			minDate: new Date()
	});

	jQuery('#checkInPicker').show();

	});

	jQuery('.hmd-checkOut-panel').on('click', function(event){

	jQuery('#checkOutPicker').datepicker({
			beforeShow: function(input, instance){
				jQuery('#ui-datepicker-div').addClass('hmd-datepicker');
			},
			onSelect: function(selectedDate){
				//Nacondo il calendario
				jQuery('#checkOutPicker').hide();
				//Imposto la data del checkin
				request.checkOut = moment(selectedDate);
				//aggiorno l'interfaccia
				updateUi();
			},
			inline: false,
			autoclose: true,
			minDate: new Date()
	});

	var minDate = moment(request.checkIn);
	minDate.add(1, 'day');
	jQuery('#checkOutPicker').show();
	jQuery('#checkOutPicker').datepicker("option", "minDate", minDate.toDate());

	});


	jQuery('.hmd-add').on('click', function(event){
	createRoom();
	});

	jQuery('.hmd-remove').on('click', function(event){
	removeRoom();
	});

	jQuery(document).on('change', '.hmd-room-section.childs > select', function(){
	//recupero il numero della camera che si sta modificando
	var desiredRoom = jQuery(this).closest('.hmd-room').data('room');
	//recupero il valore impostao per i bambini
	var childsNum = jQuery(this).val();
	//se il valore dei bambini è superiore a 0 creo i camapi per le età
	if(childsNum > 0){
		//FadeIn del selettore di età
		$childsWrapper = jQuery('#childs' + desiredRoom).fadeIn();
		$childsWrapper.empty();
		//In base al numero di bambini richiesti genero i selettori
		for(var i = 0; i < childsNum; i++){
			var $childSelector = jQuery('<div class="hmd-child-age"></div>');
			$childSelector.attr('id', 'room' + desiredRoom + '-child' + (i + 1));
			$childSelector.data('child', '1');
			var $childSelect = jQuery('<select></select>');
			for(var j = 0; j < 18; j++){
				var $option = jQuery('<option></option>');
				$option.attr('value', j);
				if(j == 1){
					$option.text('1 ' + locale[currentLocale].anno);
				}else{
					$option.text(j + ' ' + locale[currentLocale].anni);
				}
				$childSelect.append($option);
			}
			$childSelector.append($childSelect);
			$childsWrapper.append($childSelector);
		}
	}else{
		$childsWrapper = jQuery('#childs' + desiredRoom).fadeOut('fast');
		$childsWrapper.empty();
	}
	});

	function gateToHermes(){

	var endPoint = 'https://secure.hermeshotels.com/bol/dispo.do?';
	endPoint += 'lang=' + options.langCode;
	var caId = jQuery('.hmd-book-wrapper').data('caid');
	var hoId = jQuery('.hmd-book-wrapper').data('hoid');
	endPoint += '&caId=' + caId + '&' + 'hoId=' + hoId;

	if(currentLocale == 'it_IT'){
		endPoint += '&dataDa=' + request.checkIn.format('DD/MM/YYYY');
		endPoint += '&dataA=' + request.checkOut.format('DD/MM/YYYY');
	}else{
		endPoint += '&dataDa=' + request.checkIn.format('MM/DD/YYYY');
		endPoint += '&dataA=' + request.checkOut.format('MM/DD/YYYY');
	}

	endPoint += '&num_cam=' + rooms;

	for(var i = 0; i < rooms; i++){

		var adults = jQuery('#room' + (i + 1) + ' > .adults > select').val();
		var childs = jQuery('#room' + (i + 1) + ' > .childs > select').val();

		endPoint += '&num_ad=' + adults;
		endPoint += '&num_chd=' + childs;

		if(childs > 0){
			for(var j = 0; j < childs; j++){
				var childage = jQuery('#room' + (i + 1) + '-child' + (j + 1) + ' > select').val();
				endPoint += '&eta_chd' + ( i + 1) + '=' + childage;
			}
		}

	}

	var promoCode = jQuery('.hmd-promocode > input').val();
	if(promoCode.length > 0){
		endPoint += '&pCode=' + promoCode;
	}

		var win = window.open(endPoint, '_blank');
		win.focus();

	}

	jQuery('.hmd-booknow').on('click', function(){
		gateToHermes();
	});

	jQuery('.hmd-lang-list > ul > li').on('click', function(){
		setLocale(jQuery(this).data('langcode'));
		jQuery('.hmd-lang-list').fadeOut();
	});

	jQuery('.hmd-lang').on('click', function(){
		jQuery('.hmd-lang-list').fadeIn();
	});

});
