// clear todos when they are clicked
$('li').click(function() {
    $(this).toggleClass('clear');
});

// delete todos when the 'X' is clicked
$('.trash').click(function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

// add the keyup listener for when enter is pressed
$('input[type="text"]').keyup(function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        const value = $(this).val();
        let text = '';
        text += `<li><span class="trash">X</span> ${value}</li>`;
        $('.todo-list-items').append(text);
        $(this).val('');
    }
});
