// clear todos when they are clicked
$('li').click(function() {
    $(this).toggleClass('clear');
});

// delete todos when the 'X' is clicked
$('.trash').click(function(event) {
    $(this).parent().fadeOut(800, function() {
        $(this).remove();
    });
    event.stopPropagation();
});
