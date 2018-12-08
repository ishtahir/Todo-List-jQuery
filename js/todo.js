// clear todos when they are clicked
$('ul').on('click', 'li', function() {
    $(this).toggleClass('clear');
});

// delete todos when the 'X' is clicked
$('ul').on('click', 'span', function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

// add the keyup listener for when enter is pressed
const $input = $('input[type="text"]')
$input.keyup(function(event) {
    event.preventDefault();
    if (event.keyCode === 13 && $input.val()) {
        const value = $(this).val();
        let text = '';
        text += `<li><span><i class="fa fa-trash"></i></span>${value}</li>`;
        $('.todo-list-items').append(text);
        $(this).val('');
    }
});

// toggle fade for input when icon is pressed
$('.fa-minus').click(function() {
    $('input').fadeToggle();
})
