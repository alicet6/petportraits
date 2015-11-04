$('#defaultPopup,#defaultInline').datepick();

$('.disablePicker').click(function() {
    var enable = $(this).text() === 'Enable';
    $(this).text(enable ? 'Disable' : 'Enable').
        siblings('.is-datepick').datepick(enable ? 'enable' : 'disable');
});

$('#removePicker').click(function() {
    var destroy = $(this).text() === 'Remove';
    $(this).text(destroy ? 'Re-attach' : 'Remove');
    $('#defaultPopup,#defaultInline').datepick(destroy ? 'destroy' : {});
});
