/**
 * Simple (ugly) code to handle the comment vote up/down
 */
var $container = $('.js-vote-arrows');
$container.find('a').on('click', function(e) {
    e.preventDefault();
    var $link = $(e.currentTarget);

    $.ajax({
        url: 'http://localhost:9072/symfony_courses/retro/public/index.php/comments/10/vote/'+$link.data('direction'),
        method: 'POST'
    }).then(function(data) {
        $container.find('.js-vote-total').text(data.votes);
    });
});
