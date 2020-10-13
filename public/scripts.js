const changeImage = () => {
    $.ajax({
        type: 'POST', 
        url: '/changeImage',
        contentType: 'application/json', 
        success: data => {
            $('#title').text(data.title); 
            $('#description').text(data.description); 
            $('#date').text(data.date); 
            $('#comic-image').attr('src', data.img); 
        }, 
        error: err => console.log('could not update image') 
    })
}


